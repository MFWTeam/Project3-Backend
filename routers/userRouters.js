const express = require("express");
const userRouter = express.Router();
const {
  saveUser,
  showUsers,
  deleteUser,
  updateUser,
  showUser,
  signInUser,
} = require("../controllers/userControllers");

userRouter.post("/save", saveUser);
userRouter.get("/show", showUsers);
userRouter.get("/show/:id", showUser);
userRouter.put("/delete/:id", deleteUser);
userRouter.put("/update/:id", updateUser);
userRouter.post("/signIn", signInUser);

module.exports = userRouter;
