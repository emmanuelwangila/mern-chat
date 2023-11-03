const asyncHandler = require("express-async-handler");

const registerUser = asyncHandler(async () => {
  const { name, password, email, pic } = req.body;
});
