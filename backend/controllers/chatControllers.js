const asyncHandler = require("express-async-handler");
const Chat = require("../models/chatModel.jsx");
const User = require("../models/userModel.js");
const { populate } = require("dotenv");

const accessChat = asyncHandler(async (req, res, next) => {
  const { userId } = req.body;

  if (!userId) {
    res.status(400);
    throw new Error("Please provide user Id");
  }

  var isChat = await Chat.find({
    isGroupChat: false,
    $and: [
      { users: { $elemMatch: { $eq: req.user._id } } },
      { users: { $elemMatch: { $eq: userId } } },
    ],
  })
    .populate("users", "-password")
    .populate("latestMessage");
  isChat = await User.populate(isChat, {
    path: "latestMessage.sender",
    select: "name pic email",
  });

  if (isChat.length > 0) {
    res.send(isChat[0]);
  } else {
    var chatData = {
      chatName: "sender",
      isGroupChat: false,
      users: [req.user._id, userId],
    };

    try {
      const createdChat = await Chat.create(chatData);
      const fullChat = await Chat.findOne({ _id: createdChat._id }).populate(
        "users",
        "-password"
      );
      res.status(200).send(fullChat);
    } catch (error) {
      res.status(400);
      throw new Error(error.message);
    }
  }
});

const getAllChats = asyncHandler(async (req, res) => {
  try {
    Chat.find({ users: { $elemMatch: { $eq: req.user._id } } })
      .populate("users", "-password")
      .populate("groupAdmin", "-password")
      .populate("latestMessage")
      .sort({ updatedAt: -1 })
      .then(async (results) => {
        results = await User.populate(results, {
          path: "latestMessage.sender",
          select: "name pic email",
        });
        res.status(200).send(results);
      });
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});

const createGroupChat = asyncHandler(async (req, res) => {
  if (!req.body.users || !req.body.name) {
    return res.status(400).send({ message: "Please enter the users and name" });
  }

  let users = req.body.users;

  if (!Array.isArray(users) || users.length < 2) {
    return res
      .status(400)
      .send({ message: "Group chat requires more than two users" });
  }

  users.push(req.user);

  try {
    const groupChat = await Chat.create({
      chatName: req.body.name,
      isGroupChat: true,
      users: users,
      groupAdmin: req.user,
    });

    const fullChat = await Chat.findOne({ _id: groupChat._id })
      .populate("users", "-password")
      .populate("groupAdmin", "-password")
      .populate("latestMessage");

    res.status(201).json({
      message: "Group chat data created succesfully",
      chat: fullChat,
    });
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});

const updateGroupChat = asyncHandler(async (req, res) => {
  const { chatId, chatName } = req.body;

  const trimeedChatId = chatId.trim();

  const updatedChat = await Chat.findByIdAndUpdate(
    trimeedChatId,
    {
      chatName,
    },
    {
      new: true,
    }
  )
    .populate("users", "-password")
    .populate("groupAdmin", "-password");
  if (!updatedChat) {
    return res.status(404).send({ message: "Chat not found" });
  } else {
    res.status(200).send({ message: "Chat updated succesfully", updatedChat });
  }
});

const addGroupChat = asyncHandler(async (req, res) => {
  const { chatId, userId } = req.body;
  const trimeedChatId = chatId.trim();
  const addedChat = await Chat.findByIdAndUpdate(
    trimeedChatId,
    {
      $push: { users: userId },
    },
    {
      new: true,
    }
  )
    .populate("users", "-password")
    .populate("groupAdmin", "-password");
  if (!addedChat) {
    return res.status(404).send({ message: "Chat not found" });
  } else {
    res
      .status(200)
      .send({ message: "User added to chat succesfully", addedChat });
  }
});

const removeGroupChat = asyncHandler(async (req, res) => {
  const { chatId, userId } = req.body;

  const trimeedChatId = chatId.trim();

  const removedChat = await Chat.findByIdAndUpdate(
    trimeedChatId,
    {
      $pull: { users: userId },
    },
    {
      new: true,
    }
  )
    .populate("users", "-password")
    .populate("groupAdmin", "-password");

  if (!removedChat) {
    return res.status(404).send({ message: " Chat not found" });
  } else {
    return res
      .status(200)
      .send({ message: "Chat removed succesfully", removedChat });
  }
});

module.exports = {
  accessChat,
  getAllChats,
  createGroupChat,
  updateGroupChat,
  addGroupChat,
  removeGroupChat,
};
