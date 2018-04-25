const TABLE_NAME = 'tags'

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex(TABLE_NAME).del()
    .then(function () {
      // Inserts seed entries
      return knex(TABLE_NAME).insert([
        {id: 1, name: "Not Specified" },
        {id: 2, name: "Auto" },
        {id: 3, name: "Income" },
        {id: 4, name: "Gift" },
        {id: 5, name: "Grocery" },
        {id: 6, name: "School" },
        {id: 7, name: "Work" },
        {id: 8, name: "Fun" },
        {id: 9, name: "Custom"},
        {id: 10, name: "Rent" }
      ]);
    })
    .then(() => {
      // reset sequence
      return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
})
};
