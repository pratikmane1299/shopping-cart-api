const express = require('express');

const productsRouter = require('./products');
const cartRouter = require('./cart');
const authRouter = require('./auth');

const auth = require('../middlewares/verify-jwt');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

router.use('/products', productsRouter);
router.use('/cart', auth, cartRouter);
router.use('/auth', authRouter);

module.exports = router;
