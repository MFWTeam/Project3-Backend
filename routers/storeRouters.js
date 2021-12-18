const express = require("express");
const storeRouter = express.Router();
const {
  saveStore,
  showStores,
  deleteStore,
  updateStore,
  showStore,
} = require("../controllers/storeControllers");

storeRouter.post("/save", saveStore);
storeRouter.get("/show", showStores);
storeRouter.get("/show/:id", showStore);
storeRouter.put("/delete/:id", deleteStore);
storeRouter.put("/update/:id", updateStore);

module.exports = storeRouter;