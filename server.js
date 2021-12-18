const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./db");
const userRouter = require("./routers/userRouters");

app.use(cors());
app.use(express.json());

app.use("/users", userRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server connected", PORT);
});
