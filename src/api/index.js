const express = require('express');

const productsRouter = require('./products');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

router.use('/products', productsRouter);

module.exports = router;
