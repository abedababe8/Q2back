const TABLE_NAME = 'transactions'

exports.up = function(knex, Promise) {
  return knex.schema.createTable(TABLE_NAME, function(table){
    table.increments().defaultsTo(0)
    table.integer('user_acc_id').notNullable().references('users_accounts.id')
    table.string('type').notNullable()
    table.integer('ammount').notNullable()
    table.timestamps(true, true)
    table.string('purpose').defaultsTo('Not Specified')
    table.boolean('scheduled').defaultsTo(false)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists(TABLE_NAME)
};
