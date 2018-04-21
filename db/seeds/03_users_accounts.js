const TABLE_NAME = 'users_accounts'

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex(TABLE_NAME).del()
    .then(function () {
      // Inserts seed entries
      return knex(TABLE_NAME).insert([
        {id: 1, user_id: 1, account_id:1},
        {id: 1, user_id: 1, account_id:2},
        {id: 2, user_id: 2, account_id:2},
        {id: 3, user_id: 3, account_id:3},
        {id: 4, user_id: 4, account_id:4}
      ]);
    });
};
