// const Password = require('objection-password')();
const { Model, snakeCaseMappers } = require('objection');

class User extends Model {
  static get tableName() {
    return 'user';
  }

  static get columnNameMappers() {
    return snakeCaseMappers();
  }

  static modifiers = {
    withoutPassword(query) {
      query.select('id', 'first_name', 'last_name', 'email');
    }
  };
}

module.exports = User;
