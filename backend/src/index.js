"use strict";

const { startTimer } = require("../timer-utils");

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/*{ strapi }*/) {
    strapi.db.lifecycles.subscribe({
      models: ["plugin::users-permissions.user"],
      async afterUpdate(event) {
        const { id } = event.result;
        const user = await strapi.entityService.findOne(
          "plugin::users-permissions.user",
          id,
          { populate: ["resource", "resource.material", "role", "timer"] }
        );
        if (user.timer) {
          let hoursInMilliseconds = user.timer.hoursInSeconds * 1000;
          startTimer(hoursInMilliseconds, user.timer.hoursInSeconds);
        }
      },
    });
  },
};
