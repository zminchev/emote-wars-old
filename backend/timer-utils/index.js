const { generateResources } = require("./generateResources");

const startTimer = (userId, hoursToWork, duration, playerLevel, actionType) => {
  console.log(`timer started with a duration of ${duration} MS`);
  let timer;
  timer = setInterval(async () => {
    try {
      clearInterval(timer);
      const reward = generateResources(hoursToWork, playerLevel, actionType);
      const user = await strapi.entityService.findOne(
        "plugin::users-permissions.user",
        userId
      );

      await strapi.entityService.update(
        "plugin::users-permissions.user",
        userId,
        {
          data: {
            gold: reward.length > 0 ? reward[0] + Number(user.gold) : 0,
            wood: reward.length > 0 ? reward[1] + Number(user.wood) : 0,
            diamonds: reward.length > 0 ? reward[2] + Number(user.diamonds) : 0,
            timer: {
              startTime: "0",
              isWorking: false,
              hoursToWork: 0,
              actionType: "NONE",
              activeHourId: 0,
              hoursInSeconds: 0,
            },
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  }, duration);
};

module.exports = {
  startTimer,
};
