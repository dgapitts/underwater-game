const { random } = require('ebabel');
const { randomPosOrNeg } = require('./utils.js');

// Move all npc.
const npcMove = (npc) => npc.map((n) => {
  // Sprites in fight mode and still alive must stop moving.
  if (n.state.fightMode && n.state.life > 0) return n;

  // Sprites that are dead should float up to the surface.
  if (n.state.life <= 0) {
    n.state.position[1] = n.state.position[1] + 10;
    return n;
  }

  // Sprites that are still alive get to move normally.
  const direction = random(3);
  switch (direction) {
    case 1:
      n.state.position[0] += randomPosOrNeg(20);
      break;
    case 2:
      n.state.position[1] += randomPosOrNeg(20);
      break;
    default:
      n.state.position[2] += randomPosOrNeg(20);
  }
  return n;
});

module.exports = {
  npcMove
};
