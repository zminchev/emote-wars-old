'use strict';

/**
 * wing service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::wing.wing');
