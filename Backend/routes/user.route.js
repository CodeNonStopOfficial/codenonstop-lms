import express from 'express';
import { getUserProfile, loginUser, logout, registerUser, updateUserProfile } from '../controllers/user.controller.js';
import isAuthenticated from '../middleware/isAuthentication.js';
import upload from '../utils/multer.js';

const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/profile").get(isAuthenticated, getUserProfile);
router.route("/logout").get(isAuthenticated,logout);
router.route("/update/profile").put(isAuthenticated, upload.single("profilePhoto"), updateUserProfile);

export default router;
