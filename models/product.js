const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: { type: String, required: true },
  barcode: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  storeName: { type: String, required: true },
  isDeleted: { type: Boolean, default: false },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
