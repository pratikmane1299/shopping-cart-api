const express = require('express');

const productsRouter = require('./products');
const cartRouter = require('./cart');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

router.use('/products', productsRouter);
router.use('/cart', cartRouter);

module.exports = router;
