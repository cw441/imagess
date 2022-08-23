'use strict';

/**
 * sickknuckle service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::sickknuckle.sickknuckle');
