exports.up = async (knex) => {
  await knex.schema.alterTable('products', (table) => {
    table.string('description').notNullable();
  });
};

exports.down = async (knex) => {
  await knex.schema.table('products', (table) => {
    table.dropColumn('description');
  });
};
