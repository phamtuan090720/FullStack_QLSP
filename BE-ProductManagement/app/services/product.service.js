const fs = require("fs")


const getList = () => {
    const buffer = fs.readFileSync("app/data/products.json")
    const listProduct = JSON.parse(buffer)
    if (listProduct) {
        return listProduct;
    }
    else return false;
}
const getDetail = (id) => {
    const listProduct = getList();
    const index = listProduct.findIndex((product) => {
        return product.id == id;
    })
    if (index !== -1) {
        return listProduct[index]
    }
    else {
        return false
    }
}
const create = (product) => {
    const listProduct = getList();
    const newProduct = {
        ...product,
        id: Math.random()
    }
    let newList = [...listProduct, newProduct]
    fs.writeFileSync("app/data/products.json", JSON.stringify(newList))
    return newProduct
}

const update = (id, name, amount, price, sale) => {
    const listProduct = getList();
    const index = listProduct.findIndex((product) => product.id == id)
    if (index !== -1) {
        let oldProduct = listProduct[index]
        let newProduct = { ...oldProduct, amount, name, price, sale }
        listProduct[index] = newProduct;
        fs.writeFileSync("app/data/products.json", JSON.stringify(listProduct));
        return newProduct;
    }
    else {
        return false
    }
}
const deleteById = (id) => {
    const listProduct = getList();
    const index = listProduct.findIndex((product) => product.id == id)
    if (index !== -1) {
        const productDeleted = listProduct[index];
        const newList = listProduct.filter((product) => {
            return product.id != id;
        })
        fs.writeFileSync("app/data/products.json", JSON.stringify(newList));
        return productDeleted;
    }
    else return false

}

module.exports = {
    getList,
    getDetail,
    update,
    create,
    deleteById
}