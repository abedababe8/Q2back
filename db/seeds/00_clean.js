exports.seed = function(knex, Promise) {

  const tablesToClean = ['transactions', 'tags', 'users_accounts']

  return tablesToClean.reduce((acc, ele) => acc.then(() => knex(ele).del()), Promise.resolve())

};
