const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roleSchema = new Schema({
  name: { type: String, required: true },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  createdDate: { type: Date, Required: true },
  ModifiedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  ModifiedDate: { type: Date, Required: true },
  isDeleted: { type: Boolean, default: false },
});

const Role = mongoose.model("Role", roleSchema);
module.exports = Role;