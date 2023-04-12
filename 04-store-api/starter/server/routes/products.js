const express = require('express');

const router = express.Router();

const { GetAllProducts, GetAllProductsStatic } = require('../controllers/products')

router.route('/').get(GetAllProducts)
router.route('/static').get(GetAllProductsStatic)


module.exports = router;
