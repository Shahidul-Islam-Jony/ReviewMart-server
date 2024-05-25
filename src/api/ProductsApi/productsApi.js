const Products = require("../../models/Products/productSchema");

const productsApi = async (req, res) => {
    const result = await Products.find();
    // console.log(result);
    res.send(result);
};

module.exports = productsApi;
