const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String },
  address: { type: String },
  role: { type: String, required: true },
  isDeleted: { type: Boolean, default: false },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
