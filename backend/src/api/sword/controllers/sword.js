"use strict";

/**
 *  sword controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::sword.sword", ({ strapi }) => ({
  async find(ctx) {
    const entities = await strapi.entityService.findMany("api::sword.sword", {
      populate: ["price"],
    });
    return entities;
  },
}));
