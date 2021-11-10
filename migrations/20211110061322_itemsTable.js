
exports.up = function(knex) {
  return knex.schema.createTable('items',(table)=>{
    table.increments('id').primary();
    table.text('name').notNullable();
    table.text('image').notNullable();
    table.text('type').notNullable();
    table.integer('buyer_id').references('id').inTable('buyers')
    table.integer('price').notNullable();
    table.integer('original_price').notNullable();
    table.integer('seller_id').references('id').inTable('sellers');
    table.date('expiration_date').notNullable;
    table.text('note')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('items')
};
