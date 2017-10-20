exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('resorts', function (table) {
    table.increments().primary()
    table.string('ski_resort')
    table.string('url')
    table.string('area')
    table.string('description')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('resorts')
}
