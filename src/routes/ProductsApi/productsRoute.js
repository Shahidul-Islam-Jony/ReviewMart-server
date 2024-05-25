const express = require("express");
const productsApi = require("../../api/ProductsApi/productsApi");
const singleProductApi = require("../../api/SingleProductApi/singleProductApi");
const router = express.Router();

router.get("/all/products", productsApi); //getting all Products;
router.get("/product/details/:id",singleProductApi);    // getting single products;


module.exports = router;