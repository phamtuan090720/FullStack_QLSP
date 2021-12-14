const express = require('express');

const productRouter = express.Router();

const { getListProduct, getDetailProduct, updateProduct, createProduct, deleteProduct } = require("../controllers/product.controller.js")

const { checkEmpty, checkNumber, checkSale, checkLonHonKhong } = require("../middleware/validations/product.validation.js");

// ResFul APIs
// GET ALL
productRouter.get('/', getListProduct)
// GET DETAIL
productRouter.get('/:id', getDetailProduct)
// CREATE
productRouter.post('/',
    checkEmpty,
    checkNumber,
    checkSale,
    checkLonHonKhong,
    createProduct)
// UPDATE
productRouter.put('/:id',
    checkEmpty,
    checkNumber,
    checkSale,
    checkLonHonKhong,
    updateProduct)
// DELETE 
productRouter.delete('/:id', deleteProduct)
module.exports = productRouter;