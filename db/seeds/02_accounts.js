const TABLE_NAME = 'accounts'

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex(TABLE_NAME).del()
    .then(function () {
      // Inserts seed entries
      return knex(TABLE_NAME).insert([
        {id: 1, NameOfAccount: 'abedababe'},
        {id: 2, NameOfAccount: 'sharedLily+Abe'},
        {id: 3, NameOfAccount: 'kushkash'},
        {id: 4, NameOfAccount: 'announcment!'}
      ]);
    });
};
