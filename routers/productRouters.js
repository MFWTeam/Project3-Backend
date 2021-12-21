const express = require("express");
const productRouter = express.Router();
const {
  saveProduct,
  showProducts,
  showProduct,
  deleteProduct,
  updateProduct,
  showProductByName,
} = require("../controllers/productControllers");

productRouter.post("/save", saveProduct);
productRouter.get("/show", showProducts);
productRouter.get("/show/:id", showProduct);
productRouter.get("/show/byName/:name", showProductByName);
productRouter.put("/delete/:id", deleteProduct);
productRouter.put("/update/:id", updateProduct);

module.exports = productRouter;
