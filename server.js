require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./db");
const userRouter = require("./routers/userRouters");
const productRouter = require("./routers/productRouters");
const storeRouter = require('./routers/storeRouters')
const roleRouter = require('./routers/roleRouters');
const userTrackingRouter = require('./routers/userTrackingRourter');

app.use(cors());
app.use(express.json());

app.use("/users", userRouter);
app.use("/products", productRouter);
app.use("/stores", storeRouter);
app.use("/roles", roleRouter);
app.use("/tracking", userTrackingRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server connected", PORT);
});
