const TABLE_NAME = 'tags'

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex(TABLE_NAME).del()
    .then(function () {
      // Inserts seed entries
      return knex(TABLE_NAME).insert([
        {id: 1,
          "Not Specified": true
      },
        {id: 2,
          Rent: true
      },
        {id: 3,
          Auto: true
      },
        {id: 4,
          Income:true
      },
        {id: 5,
          Gift: true
      },
        {id: 6,
          Grocery:true
      },
        {id: 7,
          School:true
      },
        {id: 8,
          Work:true
      },
        {id: 9,
          Fun:true
      },
        {id: 10,
          Custom:true
      }
      ]);
    })
    .then(() => {
      // reset sequence
      return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
})
};
