const Products = require("../../models/Products/productSchema");

const GiveReviewApi = async (req, res) => {
  const review = req.body;
//   console.log(review);

  const id = req.params.id;
//   console.log(id);

  const product = await Products.findById(id);
  console.log(product);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  // Add the new review to the reviews array
  product.reviews.push(review);

  // Save the updated product
  await product.save();

  // Send a success response
  res.status(200).json({ message: "Review added successfully", product });
};

module.exports = GiveReviewApi;
