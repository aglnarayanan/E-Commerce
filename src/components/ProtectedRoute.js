// backend/routes/productRoutes.js
const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

router.post('/', async (req, res) => {
  const { name, price, description, imageUrl, uid } = req.body;

  if (uid !== 'XCppvLru6iavFO7lKBhy4epCKKs1') {
    return res.status(403).json({ message: 'Forbidden' });
  }

  const product = new Product({ name, price, description, imageUrl });
  await product.save();
  res.json({ message: 'Product saved!' });
});

module.exports = router;
