'use strict';

/**
 * data-dec service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::data-dec.data-dec');
