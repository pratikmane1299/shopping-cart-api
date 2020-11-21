/**
 * @param {import('knex')} knex
 */

exports.up = async (knex) => {
  await knex.schema.createTable('products', (table) => {
    table.increments().notNullable();
    table.string('name').notNullable();
    table.string('image_url').notNullable();
    table.float('price').notNullable();
    table.string('description');
  });

  await knex.schema.createTable('user', (table) => {
    table.increments().notNullable();
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.string('email').notNullable().unique();
    table.string('password').notNullable();
  });

  await knex.schema.createTable('cart', (table) => {
    table.increments().notNullable();
    table
      .integer('user_id')
      .unsigned()
      .references('id')
      .inTable('user')
      .onDelete('cascade')
      .notNullable();
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

/**
 * @param {import('knex')} knex
 */

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('cart');
  await knex.schema.dropTableIfExists('products');
  await knex.schema.dropTableIfExists('user');
};
