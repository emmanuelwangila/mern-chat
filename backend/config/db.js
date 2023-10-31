const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://emmanuelwangila:Wangila38@cluster0.4b45zqc.mongodb.net/?retryWrites=true&w=majority",
      {
        useUnifiedTopology: true,
      }
    );

    console.log(`MongoDB connected successfully ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
};

module.exports = connectDB;
