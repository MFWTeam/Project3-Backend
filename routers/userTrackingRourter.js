const express = require("express");
const userTrackingRouter = express.Router();
const {
    saveUserTracking,
    showUsersTracking,
} = require("../controllers/userTrackingControllers");

userTrackingRouter.post("/save", saveUserTracking);
userTrackingRouter.get("/show", showUsersTracking);

module.exports = userTrackingRouter;