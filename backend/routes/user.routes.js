const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");

// AUTHENTIFICATIONS
router.post("/login", authController.singIn);
router.post("/logout", authController.logout);

// USERS HANDLE:
router.post("/register", authController.singUp);

module.exports = router;
