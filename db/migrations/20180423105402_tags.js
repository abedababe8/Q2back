const TABLE_NAME = 'tags'

exports.up = function(knex, Promise) {
  return knex.schema.createTable(TABLE_NAME, function(table){
    table.increments()
    
    table.boolean('Not Specified').defaultsTo(false)
    table.boolean('Rent').defaultsTo(false)
    table.boolean('Auto').defaultsTo(false)
    table.boolean('Income').defaultsTo(false)
    table.boolean('Gift').defaultsTo(false)
    table.boolean('Grocery').defaultsTo(false)
    table.boolean('School').defaultsTo(false)
    table.boolean('Work').defaultsTo(false)
    table.boolean('Fun').defaultsTo(false)
    table.boolean('Custom').defaultsTo(false)
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists(TABLE_NAME)
};
