"use strict";

/**
 *  item controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::item.item", ({ strapi }) => ({
  async find(ctx) {
    const entities = await strapi.entityService.findMany("api::item.item", {
      sort: { id: "ASC" },
      populate: ["item_category", "price"],
    });
    return entities;
  },
  async findOne(ctx) {
    const { id } = ctx.params;
    const entity = await strapi.entityService.findOne("api::item.item", id, {
      populate: ["price"],
    });
    return entity;
  },
}));
