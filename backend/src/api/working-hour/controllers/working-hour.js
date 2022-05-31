"use strict";

/**
 *  working-hour controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::working-hour.working-hour",
  ({ strapi }) => ({
    async find(ctx) {
      const entities = await strapi.entityService.findMany(
        "api::working-hour.working-hour",
        {
          sort: { id: "ASC" },
        }
      );
      return entities;
    },
  })
);
