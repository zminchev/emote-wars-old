const startTimer = (duration, test) => {
  let timer;
  console.log(`Started timer with ${test}`);
  timer = setInterval(async () => {
    try {
      clearInterval(timer);
    } catch (error) {
      console.log(error);
    }
  }, duration);
};

module.exports = {
  startTimer,
};
