const express = require("express");
const { protect } = require("../middlewear/authMiddlewear");
const {
  accessChat,
  getAllChats,
  createGroupChat,
  updateGroupChat,
} = require("../controllers/chatControllers");

const router = express.Router();

router.route("/").post(protect, accessChat);
router.route("/").get(protect, getAllChats);
router.route("/group").post(protect, createGroupChat);
router.route("/group/rename").put(protect, updateGroupChat);
// router.route("/remove").delete(protect, deleteGroupChat);
// router.route("/addgroup").put(protect, addGroupChat);

module.exports = router;
