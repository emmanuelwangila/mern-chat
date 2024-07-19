const jwt = require("jsonwebtoken");
const User = require("../models/userModel.js");
const asyncHandler = require("express-async-hanler");

const protect = asyncHandler((req, res, next) => {
  let token;

  if (
    req.authorization.headers &&
    req.authorization.headers.startsWith("Bearer")
  ) {
    try {
      token = req.authorization.headers.split("")[1];

      // decode the token
      const decode = jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {}
  }
});
