const express = require("express");
const userRouter = express.Router();
const { saveUser, showUsers } = require("../controllers/userControllers");

userRouter.post("/save", saveUser);
userRouter.get("/show", showUsers);

module.exports = userRouter;
