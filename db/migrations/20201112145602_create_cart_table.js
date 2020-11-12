exports.up = async (knex) => {
  await knex.schema.createTable('cart', (table) => {
    table.increments();
    table
      .integer('product_id')
      .unsigned()
      .references('id')
      .inTable('products')
      .onDelete('cascade')
      .notNullable();
    table.integer('quantity').notNullable();
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTable('cart');
};
