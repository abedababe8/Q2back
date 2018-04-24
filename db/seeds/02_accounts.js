const TABLE_NAME = 'accounts'

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex(TABLE_NAME).del()
    .then(function () {
      // Inserts seed entries
      return knex(TABLE_NAME).insert([
        {id: 1, NameOfAccount: 'abedababe'},
        {id: 2, NameOfAccount: 'abe+lily'},
        {id: 3, NameOfAccount: 'sambam'},
        {id: 4, NameOfAccount: 'quest'}
    ]);
  })
    .then(() => {
      // reset sequence
      return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
})
};
