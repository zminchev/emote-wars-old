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

  plugin.routes["content-api"].routes.push({
    method: "GET",
    path: "/user/findMe",
    handler: "user.findMe",
  });

  return plugin;
};
