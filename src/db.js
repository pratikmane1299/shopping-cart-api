const knex = require('knex');

const knexConfig = require('../knexfile');

const environment = process.env.NODE_ENV === 'production' ? 'production' : 'development';

module.exports = knex(knexConfig[environment]);
