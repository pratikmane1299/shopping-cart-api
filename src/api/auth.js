const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/user');
const auth = require('../middlewares/verify-jwt');

const router = express.Router();

router.get('/', auth, (req, res) => {
  try {
    return res.json({...req.user});
  } catch (error) {
    next(error)
  }
});

router.post('/login', async (req, res, next) => {
  try {
    const user = await User.query().first().where({ email: req.body.email });

    if (!user) {
      return res.status(400).json({ message: 'user not found' });
    }

    const { password, ...rest } = user;

    const match = await bcrypt.compare(req.body.password, password);
    if (!match) {
      return res.status(400).json({ message: 'incorrect password' });
    }

    const token = await jwt.sign({...rest}, process.env.JWT_SECRET, { expiresIn: '1h' });

    return res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
});

router.post('/register', async (req, res, next) => {
  try {
    const user = await User.query().first().where({ email: req.body.email });

    if (user) {
      return res.status(400).json({ message: 'email is already taken' });
    }

    const data = req.body;

    const hashedPassword = await bcrypt.hash(req.body.password, 12);

    const { password, ...rest } = await User.query().insert({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: hashedPassword,
    });

    const token = await jwt.sign({...rest}, process.env.JWT_SECRET, { expiresIn: '1h' });

    return res.status(200).send({ token });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
