const checkEmpty = (req, res, next) => {
    const { name, amount, price, sale } = req.body;
    if (name && amount && price && sale !== undefined) {
        next();
    }
    else {
        res.status(500).send("Không được bỏ trống các thuộc tính name, amount, price,sale");
    }
}
const checkLonHonKhong = (req, res, next) => {
    const { price, amount } = req.body;
    if (Number(price) > 0 && Number(amount) > 0) {
        next();
    }
    else {
        res.status(500).send("price,amount không được bé hơn 0");
    }
}
const checkNumber = (req, res, next) => {
    const { price, amount, sale } = req.body;
    if (isNaN(Number(price)) || isNaN(Number(amount)) || isNaN(Number(sale))) {
        res.status(500).send("price,amount,sale phải là số");
    }
    else {
        next()
    }

}
const checkSale = (req, res, next) => {
    const { sale } = req.body;
    if (Number(sale) >= 0 && Number(sale) < 100) {
        next()
    }
    else {
        res.status(500).send("sale phải từ 0-100");
    }
}
module.exports = {
    checkEmpty,
    checkLonHonKhong,
    checkNumber,
    checkSale
}