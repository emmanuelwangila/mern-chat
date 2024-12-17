const express = require("express");
const { protect } = require("../middlewear/authMiddlewear");
const { accessChat, getAllChats } = require("../controllers/chatControllers");

const router = express.Router();

router.route("/").post(protect, accessChat);
router.route("/").get(protect, getAllChats);
router.route("/group").post(protect, createGroupChat);
// router.route("/rename").put(protect, renameGroupChat);
// router.route("/remove").delete(protect, deleteGroupChat);
// router.route("/addgroup").put(protect, addGroupChat);

module.exports = router;
