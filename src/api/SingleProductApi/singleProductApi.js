const { ObjectId } = require("mongodb");
const Products = require("../../models/Products/productSchema");

const singleProductApi = async(req,res)=>{
    const id = req.params.id;
    // console.log(id);
    // const query = {_id : id}
    const result = await Products.findById(id);
    // console.log(result);
    res.send(result);
}

module.exports = singleProductApi;