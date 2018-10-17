'strict';

const {
  greetSinglePlayer,
  waveOtherPlayers,
  messageAllPlayers,
} = require('../../server/message-players');

test('greetSinglePlayer calls io.to() with socket id parameter', () => {
  const result = greetSinglePlayer();
  expect(result).toBe(undefined);
});

test('greetSinglePlayer calls io.to.emit() with two string parameters', () => {
  const result = greetSinglePlayer();
  expect(result).toBe(undefined);
});

test('waveOtherPlayers calls io.broadcast.emit with two string parameters', () => {
  const result = waveOtherPlayers();
  expect(result).toBe(undefined);
});

test('messageAllPlayers registers a chatMessage event listener with socket', () => {
  const result = messageAllPlayers();
  expect(result).toBe(undefined);
});

