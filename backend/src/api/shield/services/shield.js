'use strict';

/**
 * shield service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::shield.shield');
