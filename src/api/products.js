const express = require('express');

const db = require('../db');
const Product = require('../models/product');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    // const products = await db.select().from('products');

    const products = await Product.query().select('*');

    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
