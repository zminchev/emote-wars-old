const randomMultiplier = (min, max) => {
  return (Math.random() * (max - min) + min).toFixed(2);
};

module.exports = {
  randomMultiplier,
};
