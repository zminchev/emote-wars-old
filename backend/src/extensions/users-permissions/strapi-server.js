module.exports = (plugin) => {
  plugin.controllers.user.findMe = async (ctx) => {
    const entry = ctx.state.user;
    const user = await strapi.entityService.findOne(
      "plugin::users-permissions.user",
      entry.id,
      { populate: ["resource", "resource.material", "role", "timer"] }
    );
    return user;
  };

  plugin.controllers.user.update = async (ctx) => {
    const { id } = ctx.request.params;

    await strapi.entityService.update(
      "plugin::users-permissions.user",
      id,
      ctx.request.body
    );

    const updatedUser = await strapi.entityService.findOne(
      "plugin::users-permissions.user",
      id,
      { populate: ["resource", "resource.material", "role", "timer"] }
    );
    return updatedUser;
  };

  plugin.routes["content-api"].routes.push({
    method: "GET",
    path: "/user/findMe",
    handler: "user.findMe",
  });

  return plugin;
};
