const express = require("express");
const productRouter = express.Router();
const  { saveProduct, showProducts, showProduct, deleteProduct, updateProduct } = require("../controllers/productControllers");


productRouter.post("/save", saveProduct);
productRouter.get("/show", showProducts);
productRouter.get("/show/:id", showProduct);
productRouter.put("/delete/:id", deleteProduct);
productRouter.put("/update/:id", updateProduct);


module.exports = productRouter;