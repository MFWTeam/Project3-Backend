const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://dbUsers:Aa123456@cluster0.x51p8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", (err, db) => {
  console.log("Database connected");
});
