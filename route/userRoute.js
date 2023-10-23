const express = require("express");
const { signupUser, loginUser } = require("../controller/userController");
const router = express.Router();

router.post("/api/signup", signupUser);
router.post("/api/login", loginUser);

module.exports = router;
