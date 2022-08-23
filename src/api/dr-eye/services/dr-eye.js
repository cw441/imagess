'use strict';

/**
 * dr-eye service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::dr-eye.dr-eye');
