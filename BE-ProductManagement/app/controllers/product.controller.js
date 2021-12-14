
const { getList, getDetail, update, create, deleteById } = require('../services/product.service.js');

const getListProduct = (req, res) => {
    const listProduct = getList();
    if (listProduct) {
        res.status(200).send(listProduct);
    }
    else {
        res.status(404).send("Not Found!");
    }
}

const getDetailProduct = (req, res) => {
    const { id } = req.params;
    const product = getDetail(id);
    if (product) {
        res.status(200).send(product);
    }
    else {
        res.status(404).send("not found");
    }
}

const createProduct = (req, res) => {
    const product = req.body;
    const newProduct = create(product);
    res.status(201).send(newProduct);
}

const updateProduct = (req, res) => {
    const { id } = req.params;
    const { name, amount, price, sale } = req.body;
    const productUpdated = update(id, name, amount, price, sale);
    if (productUpdated) {
        res.status(200).send(productUpdated);
    }
    else {
        res.status(404).send("not found");
    }
}
const deleteProduct = (req, res) => {
    const { id } = req.params;
    const productDeleted = deleteById(id);
    if (productDeleted) {
        res.status(200).send(productDeleted);
    }
    else {
        res.status(404).send("not found");
    }
}

module.exports = {
    getListProduct,
    getDetailProduct,
    updateProduct,
    createProduct,
    deleteProduct
}