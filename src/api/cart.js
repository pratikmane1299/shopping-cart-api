const express = require('express');

const db = require('../db');

const router = express.Router();

router.get('/:userId', async (req, res) => {
  // TODO: get userId from logged in user
  const { userId } = req.params;

  const cart = await db
    .select(
      'products.id',
      'products.name',
      'products.image_url',
      'products.price',
      // eslint-disable-next-line comma-dangle
      'cart.quantity'
    )
    .from('cart')
    .join('products', 'products.id', 'cart.product_id')
    .where('cart.user_id', userId);

  res.json(cart);
});

// eslint-disable-next-line consistent-return
router.post('/add-to-cart', async (req, res, next) => {
  // TODO: get userId from logged in user
  const { userId, productId } = req.body;

  try {
    const productInCart = await db
      .select('product_id')
      .from('cart')
      .where('user_id', userId)
      .andWhere('product_id', productId)
      .first();

    if (!productInCart) {
      await db('cart').insert({
        user_id: userId,
        product_id: productId,
        quantity: 1,
      });
    } else {
      await db('cart')
        .where('user_id', userId)
        .andWhere('product_id', productId)
        .increment('quantity', 1);
    }

    const addedProduct = await db
      .select(
        'products.id',
        'products.name',
        'products.image_url',
        'products.price',
        // eslint-disable-next-line comma-dangle
        'cart.quantity'
      )
      .from('cart')
      .join('products', 'products.id', 'cart.product_id')
      .where('user_id', userId)
      .andWhere('product_id', productId)
      .first();

    res.json(addedProduct);
  } catch (error) {
    next(error);
  }
});

router.put('/increase-qty', async (req, res, next) => {
  const { userId, productId } = req.body;
  try {
    await db('cart')
      .where('user_id', userId)
      .andWhere('product_id', productId)
      .increment('quantity', 1);

    const updatedProduct = await db
      .select(
        'products.id',
        'products.name',
        'products.image_url',
        'products.price',
        // eslint-disable-next-line comma-dangle
        'cart.quantity'
      )
      .from('cart')
      .join('products', 'products.id', 'cart.product_id')
      .where('user_id', userId)
      .andWhere('product_id', productId)
      .first();

    res.json(updatedProduct);
  } catch (error) {
    next(error);
  }
});

router.put('/decrease-qty', async (req, res, next) => {
  const { userId, productId } = req.body;
  try {
    await db('cart')
      .where('user_id', userId)
      .andWhere('product_id', productId)
      .decrement('quantity', 1);

    const updatedProduct = await db
      .select(
        'products.id',
        'products.name',
        'products.image_url',
        'products.price',
        // eslint-disable-next-line comma-dangle
        'cart.quantity'
      )
      .from('cart')
      .join('products', 'products.id', 'cart.product_id')
      .where('user_id', userId)
      .andWhere('product_id', productId)
      .first();

    res.json(updatedProduct);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
