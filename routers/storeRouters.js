const express = require("express");
const storeRouter = express.Router();
const {
  saveStore,
  showStores,
  deleteStore,
  updateStore,
  showStore,
  showStoreByName,
} = require("../controllers/storeControllers");
const { authenticateToken } = require("../auth/userAuthenticate");

storeRouter.post("/save", authenticateToken, saveStore);
storeRouter.get("/show", showStores);
storeRouter.get("/show/:id", showStore);
storeRouter.get("/show/byName/:name", showStoreByName);
storeRouter.put("/delete/:id", authenticateToken, deleteStore);
storeRouter.put("/update/:id", authenticateToken, updateStore);

module.exports = storeRouter;
