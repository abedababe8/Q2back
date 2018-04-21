const TABLE_NAME = 'users'

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex(TABLE_NAME).del()
    .then(function () {
      // Inserts seed entries
      return knex(TABLE_NAME).insert([
        {id: 1, name: 'Abe Queen', username:'abe', password:'123'},
        {id: 2, name: 'Lily Ward', username:'lil', password:'rig'},
        {id: 3, name: 'Sam Shroom', username:'sam', password:'shroom'},
        {id: 4, name: 'Roger the Barbarian', username:'rog', password:'barbarian'}
      ]);
    })
    .then(() => {
      // reset sequence
      return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
})
};
