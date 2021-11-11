
exports.up = function(knex) {
    return knex.schema.createTable('sellers',(table) =>{
        table.increments('id').primary();
        table.text('shop_name').notNullable();
        table.text('shop_location').notNullable();
        table.text('shop_long').notNullable();
        table.text('shop_lat').notNullable();
        table.text('opening_time').notNullable();
        table.text('closing_time').notNullable();
        table.text('phone_number').notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('sellers')
};
