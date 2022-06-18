"use strict";

/**
 *  item-category controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::item-category.item-category",
  ({ strapi }) => ({
    async find(ctx) {
      const entities = await strapi.entityService.findMany(
        "api::item-category.item-category",
        { sort: { id: "ASC" }, populate: ["items"] }
      );
      return entities;
    },
    async findOne(ctx) {
      const { id } = ctx.params;
      const entity = await strapi.entityService.findOne(
        "api::item-category.item-category",
        id,
        { populate: ["items", "items.price"] }
      );
      return entity;
    },
  })
);
