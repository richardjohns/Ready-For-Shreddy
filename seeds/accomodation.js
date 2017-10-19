exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Accomodation').del()
    .then(function () {
      // Inserts seed entries
      return knex('Accomodation').insert([
        {id: 1, a: 'a', b: 'b', c: 'c', d: 'd', e: 'e'},
              ])
            })
        }
