const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/Project3", (err, db) => {
  console.log("Database connected");
});
