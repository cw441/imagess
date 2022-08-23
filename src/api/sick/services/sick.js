'use strict';

/**
 * sick service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::sick.sick');
