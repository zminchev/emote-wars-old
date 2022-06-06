const { randomChance } = require("./randomChance");
const { randomMultiplier } = require("./randomMultiplier");

const generateGold = (hoursToWork, playerLevel) => {
  const multiplier = randomMultiplier(10.5, 15.5);
  const gold = hoursToWork * playerLevel * Number(multiplier);
  console.log(gold);
  return Math.round(gold);
};
const generateWood = (hoursToWork, playerLevel) => {
  const multiplier = randomMultiplier(10.5, 15.5);
  const wood = hoursToWork * playerLevel * Number(multiplier);
  console.log(wood);
  return Math.round(wood);
};
const generateFood = (hoursToWork, playerLevel) => {
  const multiplier = randomMultiplier(10.5, 15.5);
  const food = hoursToWork * playerLevel * Number(multiplier);
  return Math.round(food);
};
const generateDiamonds = (hoursToWork) => {
  const multiplier = randomMultiplier(0.5, 0.9);
  const diamonds = hoursToWork * Number(multiplier);
  return Math.round(diamonds);
};

const generateResources = (hoursToWork, playerLevel, actionType) => {
  let gold, wood, food;
  let diamonds = 0;
  switch (actionType) {
    case "WORK":
      gold = generateGold(hoursToWork, playerLevel);
      wood = generateWood(hoursToWork, playerLevel);
      if (randomChance() >= 9.5) {
        diamonds = generateDiamonds(hoursToWork);
      }
      return [gold, wood, diamonds];

    case "HUNTING":
      food = generateFood(hoursToWork, playerLevel);
      return [food];
    default:
      return;
  }
};

module.exports = {
  generateResources,
};
