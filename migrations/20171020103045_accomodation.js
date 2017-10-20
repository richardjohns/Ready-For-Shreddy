exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('Accomodation', function(table) {
    table.increments().primary()
    table.string('name')
    table.string('intro')
    table.string('image')
    table.string('website')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('Accomodation')
}
