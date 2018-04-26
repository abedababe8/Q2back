const TABLE_NAME = 'transactions'

exports.up = function(knex, Promise) {
  return knex.schema.createTable(TABLE_NAME, function(table){
    table.increments()
    table.integer('user_id').notNullable().references('users.id')
    table.integer('acc_id').notNullable().references('accounts.id')
    table.integer('tag_id').notNullable().references('tags.id').defaultsTo(1)
    table.string('memo').defaultsTo('No Entry')
    table.boolean('deposit').notNullable()
    table.integer('ammount').notNullable()
    table.boolean('scheduled').defaultsTo(false)
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists(TABLE_NAME)
};
