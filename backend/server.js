const express = require("express");

const app = express();

app.listen(5000, console.log("Server started at PORT 5000"));

app.get("/", (req, res) => {
  res.send("My first API running");
});
