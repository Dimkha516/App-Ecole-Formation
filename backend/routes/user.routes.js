const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");
const { isAuthenticated } = require("../middlewares/auth.middleware");

// AUTHENTIFICATIONS
router.post("/login", authController.singIn);
router.post("/logout", authController.logout);

// USERS HANDLE:
router.post("/register", isAuthenticated, authController.singUp);

module.exports = router;
