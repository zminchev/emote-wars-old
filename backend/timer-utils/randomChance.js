const randomChance = () => {
  const chanceForDiamonds = Math.floor(Math.random() * 11);
  return chanceForDiamonds;
};

module.exports = {
  randomChance,
};
