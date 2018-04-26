const TABLE_NAME = 'transactions'


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex(TABLE_NAME).del()
    .then(function () {
      // Inserts seed entries
      return knex(TABLE_NAME).insert([
        {id: 1, acc_id: 1, user_id: 1, tag_id:4, memo: 'Old Job Clutch',   deposit: true, ammount: 240.00 },
        {id: 2, acc_id: 1, user_id: 1, tag_id:5, memo: 'Pay Matthew Back', deposit: false, ammount: 100.00 },
        {id: 3, acc_id: 2, user_id: 1,           memo: 'Paycheck',         deposit: true, ammount: 1690.00 },
        {id: 4, acc_id: 2, user_id: 1, tag_id:6, memo: 'Costco',           deposit: false, ammount: 210.00 },
        {id: 5, acc_id: 2, user_id: 2, tag_id:1, memo: 'Greyhound',        deposit: false, ammount: 600.00 },
        {id: 6, acc_id: 3, user_id: 3,                                     deposit: false, ammount: 70.00, },
        {id: 7, acc_id: 3, user_id: 3, tag_id:4,                           deposit: true, ammount: 990.00 },
        {id: 8, acc_id: 4, user_id: 4, tag_id:8, memo: 'And MY Axe!',      deposit: false, ammount: 120.00 },
        {id: 9, acc_id: 4, user_id: 4, tag_id:4, memo: 'Quest Complete',   deposit: true, ammount: 2700.00 },
      ]);
    })
    .then(() => {
      // reset sequence
      return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
})
};
