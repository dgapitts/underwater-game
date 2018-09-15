const random = (max) => Math.ceil(Math.random() * (max || 100));
const dice = () => random(6);
const trait = () => dice() + dice() + dice();
const positive = (input) =>  Math.ceil(Math.abs(input));
const randomPosOrNeg = (max) => (Math.random() < 0.5 ? -1 : 1) * random(max);
const distance = (a, b) => Math.sqrt(
  Math.pow((b[0] - a[0]), 2)
  + Math.pow((b[1] - a[1]), 2)
  + Math.pow((b[2] - a[2]), 2)
);

const randomPosition = (size) => {
  const width = size[0];
  const height = size[1];
  const depth = size[2];

  return [
    Math.floor(random(width) - width / 2),
    Math.floor(random(height) - height / 2),
    Math.floor(random(depth) - depth / 2)
  ];
};

const highestTick = (ticks) => Math.max(...ticks.map(tick => tick.id));

const randomTick = (ticks, max = 10) => (!ticks || ticks.length === 0) ?
    random(max)
    : highestTick(ticks) + random(max);

const deepCopy = (input) => JSON.parse(JSON.stringify(input));

module.exports = {
  random,
  dice,
  trait,
  positive,
  randomPosOrNeg,
  distance,
  randomPosition,
  highestTick,
  randomTick,
  deepCopy  
};
