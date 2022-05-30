"use strict";

/**
 *  nav-item controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::nav-item.nav-item",
  ({ strapi }) => ({
    async find(ctx) {
      const entities = await strapi.entityService.findMany(
        "api::nav-item.nav-item",
        {
          sort: { id: "ASC" },
        }
      );
      return entities;
    },
  })
);
