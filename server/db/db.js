const path = require('path')
const config = require(path.join(__dirname, '/../../knexfile')).development
const knex = require('knex')(config)

//===============================================
function getAccoms() {
  return knex('Accommodation')
    .select()
}

module.exports = {
  getAccoms
}
