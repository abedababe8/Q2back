exports.seed = function(knex, Promise) {

  const tablesToClean = ['tags', 'transactions', 'users_accounts']

  return tablesToClean.reduce((acc, ele) => acc.then(() => knex(ele).del()), Promise.resolve())

};
