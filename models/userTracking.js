const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const trackingSchema = new Schema({
    username: { type: String, required: true },
    action: { type: String, required: true },
    date: { type: String, required: true }
});

const Tracking = mongoose.model("Tracking", trackingSchema);
module.exports = Tracking;
