'use strict';

/**
 * drknuckle service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::drknuckle.drknuckle');
