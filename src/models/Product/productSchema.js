const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  name: String,
  image: String,
  price: Number,
  average_rating: Number,
  category: String,
  brand: String,
  description: String,
  availability: String,
  specifications: Object,
  rating_distribution: Object,
  reviews: [
    {
      reviewer_name: String,
      date: Date,
      rating: Number,
      review_text: String,
      likes: Number,
      dislikes: Number,
      replies: Array,
    },
  ],
});

const Products = mongoose.model('Products',productSchema);

module.exports = Products;

