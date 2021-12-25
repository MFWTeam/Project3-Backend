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
const { authenticateToken } = require("../auth/userAuthenticate");

productRouter.post("/save", authenticateToken, saveProduct);
productRouter.get("/show", showProducts);
productRouter.get("/show/:id", showProduct);
productRouter.get("/show/byName/:name", showProductByName);
productRouter.put("/delete/:id", authenticateToken, deleteProduct);
productRouter.put("/update/:id", authenticateToken, updateProduct);

module.exports = productRouter;
