const express = require("express");
const { chats } = require("./data/data");
const connectDb = require("./config/db");
const colors = require("colors");

const app = express();

connectDb();

app.get("/", (req, res) => {
  res.send("Your first Api in express running succesfully ");
});

app.use("/api/user", userRoutes);

app.listen(5000, console.log("Server started on PORT 5000".green.bold));
