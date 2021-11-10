const jwt = require('jsonwebtoken');

const User = require('../models/user');

async function verify(req, res, next) {
  try {
    const authorization = req.get('Authorization');

    if (authorization) {
      const token = authorization.split('Bearer ')[1].trim();

      const { id } = await jwt.verify(token, process.env.JWT_SECRET);

      const user = await User.query().modify('withoutPassword').findById(id);

      req.user = user;

      next();
    } else {
      next(new Error('token not found'));
    }
  } catch (error) {
    next(new Error('token invalid/expired'));
  }
}

module.exports = verify;
