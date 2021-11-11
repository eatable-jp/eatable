
exports.up = function(knex) {
  return knex.schema.createTable('buyers',(table)=>{
    table.increments('id').primary();
    table.text('display_name').notNullable();
    table.text('email').notNullable();
    table.text('address').notNullable();
    table.text('phone_number').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('buyers')
};
