const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const registerUser = asyncHandler(async (req, res) => {
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

  const user = await User.create({
    name,
    password,
    email,
    pic,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
    });
  } else {
    res.status(400);
    throw new Error("Failed to Create User");
  }
});

module.exports = { registerUser };