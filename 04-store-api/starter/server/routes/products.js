const express = require('express');

const router = express.Router();

const { GetAllProducts } = require('../controllers/products')

router.route('/').get(GetAllProducts)


module.exports = router;
