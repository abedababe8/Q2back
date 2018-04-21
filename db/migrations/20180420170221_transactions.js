const TABLE_NAME = 'accounts'

exports.up = function(knex, Promise) {
  return knex.schema.createTable(TABLE_NAME, function(table){
    table.increments()
    table.integer('user_acc_id').references('users_accounts.id').notNullable()
    table.boolean('deposit').notNullable()
    table.integer('ammount').notNullable()
    table.string('purpose')
    table.boolean('repeat')
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists(TABLE_NAME)
};
