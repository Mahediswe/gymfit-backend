import express from "express";
import {
  registerUser,
  loginUser,
} from "../controllers/authController.js";
import protect from "../middlewares/authMiddleware.js";
import {
  getUserProfile,
  updateUserProfile,
} from "../controllers/userController.js";

const router = express.Router();

// Public routes
router.post("/register", registerUser);
router.post("/login", loginUser);

// Protected route
//router.get("/profile", protect, getUserProfile);
// Profile Routes (Private)
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

export default router;
