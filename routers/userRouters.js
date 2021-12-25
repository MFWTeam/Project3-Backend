const express = require("express");
const userRouter = express.Router();
const {
  saveUser,
  showUsers,
  deleteUser,
  updateUser,
  showUser,
  signInUser,
  updateUserPassword,
  getUserDataFromToken,
} = require("../controllers/userControllers");
const { authenticateToken } = require("../auth/userAuthenticate");

userRouter.post("/save", authenticateToken, saveUser);
userRouter.get("/show", showUsers);
userRouter.get("/show/:id", showUser);
userRouter.put("/delete/:id", authenticateToken, deleteUser);
userRouter.put("/update/:id", authenticateToken, updateUser);
userRouter.put("/updatePassword/:id", authenticateToken, updateUserPassword);
userRouter.post("/signIn", signInUser);
userRouter.get("/getDataFromToken", authenticateToken, getUserDataFromToken);

module.exports = userRouter;
