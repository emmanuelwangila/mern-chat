const express = require("express");
const { protect } = require("../middlewear/authMiddlewear");
const {
  accessChat,
  getAllChats,
  createGroupChat,
  updateGroupChat,
  addGroupChat,
  removeGroupChat,
} = require("../controllers/chatControllers");

const router = express.Router();

router.route("/").post(protect, accessChat);
router.route("/").get(protect, getAllChats);
router.route("/group").post(protect, createGroupChat);
router.route("/group/rename").put(protect, updateGroupChat);
router.route("/group/add").post(protect, addGroupChat);
router.route("/group/remove").delete(protect, removeGroupChat);
// router.route("/remove").delete(protect, deleteGroupChat);
// router.route("/addgroup").put(protect, addGroupChat);

module.exports = router;
