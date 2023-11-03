const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const registerUser = asyncHandler(async () => {
  const { name, password, email, pic } = req.body;

  if (!name || !password || !email) {
    res.status(400);

    throw new Error("Please enter the required fields");
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.send(400);

    throw new Error("User already exists");
  }
});
