exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('Accomodation', function(table) {
    table.increments().primary()
    table.string('a')
    table.string('b')
    table.string('c')
    table.string('d')
    table.string('e')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('Accomodation')
}
