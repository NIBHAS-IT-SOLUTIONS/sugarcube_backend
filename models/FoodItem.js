const mongoose = require('mongoose');

const FoodItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  subcategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subcategory',
    required: true,
  },
  image: {
    type: String, // URL to the image
  },
  available: {
    type: Boolean,
    default: true,
  },
});

const FoodItem = mongoose.model('FoodItem', FoodItem);
module.exports = FoodItem;
