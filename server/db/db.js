const path = require('path')
const config = require(path.join(__dirname, '/../../knexfile')).development
const knex = require('knex')(config)

function getResorts () {
  return knex('resorts')
    .select()
}

module.exports = {
  getResorts: getResorts
}
