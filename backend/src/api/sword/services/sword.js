'use strict';

/**
 * sword service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::sword.sword');
