const express = require("express");
const router = express.Router();
const { register, login, logout } = require("../Controllers/UserController");
const { verifyToken } = require("../middleware/verifyToken");

router.post("/register",  register);
router.post("/login",  login);
router.get("/logout", verifyToken, logout)

module.exports = router;