const express = require("express");
const { registerAdmin, loginAdmin } = require("../controller/adminController");
const router = express.Router();

router.post("/api/admin/signup", registerAdmin);
router.post("/api/admin/login", loginAdmin);

module.exports = router;
