const express = require("express");
const { chats } = require("./data/data");
const connectDb = require("./config/db");
const colors = require("colors");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const dotenv = require("dotenv");
const { notFound, errorHandler } = require("./middlewear/errorMiddlewear");
dotenv.config();
const app = express();

connectDb();
// To accept JSON Data
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Your first Api in express running succesfully ");
});

app.use("/api/user", userRoutes);
app.use("/api/chats", chatRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(5000, console.log(`Server started on PORT ${PORT}`.green.bold));
