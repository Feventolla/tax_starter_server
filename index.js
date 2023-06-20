const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("connection created"));

app.use(express.json());
const corsOptions = {
  origin: "http://localhost:4000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

const userRouter = require("./router/data");
app.use("/", require("./router/data"));

app.listen(4000, () => {
  console.log("server started!");
});
