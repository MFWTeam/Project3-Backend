const express = require("express");
const roleRouter = express.Router();
const {
  saveRole,
  showRoles,
  deleteRole,
  updateRole,
  showRole,
} = require("../controllers/roleControllers");

roleRouter.post("/save", saveRole);
roleRouter.get("/show", showRoles);
roleRouter.get("/show/:id", showRole);
roleRouter.put("/delete/:id", deleteRole);
roleRouter.put("/update/:id", updateRole);

module.exports = roleRouter;