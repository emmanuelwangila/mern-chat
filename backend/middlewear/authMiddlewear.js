const jwt = require("jsonwebtoken");
const User = require("../models/userModel.js");
const asyncHandler = require("express-async-handler");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.authorization.headers &&
    req.authorization.headers.startsWith("Bearer")
  ) {
    try {
      token = req.authorization.headers.split(" ")[1];

      // decode the token
      const decode = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decode.id).select("-password");
      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized , token invalid");
    }

    if (!token) {
      res.status(401);
      throw new Error("Not authorized, no token ");
    }
  }
});

module.exports = { protect };
