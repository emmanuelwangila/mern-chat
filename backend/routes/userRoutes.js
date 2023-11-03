const express = require("express");

const router = express.Router();

router.route("/login").post(registerUser);

router.post("/login", authUser);

module.exports = router;
