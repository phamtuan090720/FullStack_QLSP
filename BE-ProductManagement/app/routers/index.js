const express = require('express');

const router = express.Router();

const productRouter = require("./product.router.js");

router.use('/products', productRouter);

module.exports = router;