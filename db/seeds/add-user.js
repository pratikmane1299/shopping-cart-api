/* eslint-disable arrow-body-style */

exports.seed = (knex) => {
  return knex('user')
    .del()
    .then(() => {
      return knex('user').insert([
        {
          id: 1,
          first_name: 'fredie',
          last_name: 'smith',
          email: 'user@example.com',
          password: 'Pass@123',
        },
      ]);
    });
};
