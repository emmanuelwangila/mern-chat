const asyncHandler = require("express-async-handler");
const Chat = require("../models/chatModel");

const accessChat = asyncHandler(async (req, res, next) => {
  const { userId } = req.body;

  if (!userId) {
    res.status(400);
    throw new Error("Please rovide user Id");
  }

  var isChat = await Chat.find({
    isGroupChat: false,
    $and: [
      { users: { $elemMatch: { $eq: req.user._id } } },
      { users: { $elemMatch: { $eq: userId } } },
    ],
  });
});
