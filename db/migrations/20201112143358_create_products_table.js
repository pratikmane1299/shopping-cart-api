exports.up = async (knex) => {
  await knex.schema.createTable('products', (table) => {
    table.increments().notNullable();
    table.string('name').notNullable();
    table.string('image_url').notNullable();
    table.float('price').notNullable();
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTable('products');
};
