"use strict";

/**
 *  resource controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::resource.resource",
  ({ strapi }) => ({
    async find(ctx) {
      const resources = await strapi.entityService.findMany(
        "api::resource.resource"
      );
      return resources;
    },
  })
);
