const TABLE_NAME = 'transactions'

exports.up = function(knex, Promise) {
  return knex.schema.createTable(TABLE_NAME, function(table){
    table.increments().defaultsTo(0)
    table.integer('user_acc_id').notNullable().references('users_accounts.id')
    table.boolean('deposit').notNullable()
    table.integer('ammount').notNullable()
    table.string('purpose').defaultsTo('Not Specified')
    table.boolean('scheduled').defaultsTo(false)
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists(TABLE_NAME)
};
