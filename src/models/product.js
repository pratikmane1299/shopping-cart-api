const { Model, snakeCaseMappers } = require('objection');

class Product extends Model {
  static tableName() {
    return 'products';
  }

  static get columnNameMappers() {
    return snakeCaseMappers();
  }
}

module.exports = Product;
