const express = require("express");
const productsApi = require("../../api/ProductsApi/productsApi");
const router = express.Router();

router.get("/all/products", productsApi); //getting single user;


module.exports = router;