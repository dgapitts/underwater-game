const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const game = require('./game.js');
const player = require('./player.js');

// Central store that keeps state of the whole game.
const dataStore = {
  npc: [],
  players: {}
};

app.use(express.static('client'));

app.settings['x-powered-by'] = false;
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
  next();
});

io.on('connection', (socket) => {
  let _name;

  // Add current player.
  socket.on('playerStarts', (name) => {
    _name = name;
    dataStore.players[name] = player({ name, io, socket, npc: dataStore.npc });
  });

  socket.on('disconnect', () => {
    if (!_name) return;
    // Message all other players that current player has left the game.
    socket.broadcast.emit('chatMessage', `${_name} has left.`);

    // Delete player.
    delete dataStore.players[_name];

    // Remove player from all other clients when he stops playing.
    socket.broadcast.emit('removePlayer', _name);
  });
});

let port = 3000;
if (process.env.NODE_ENV === 'production') port = 80;
http.listen(port, () => {
  console.log(`Underwater Game listening on port ${port}.`); /* eslint no-console: 0 */
});

// Start the server-side game.
game({ io, dataStore });
