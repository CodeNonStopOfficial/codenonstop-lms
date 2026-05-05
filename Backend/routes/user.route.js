import express from 'express';
import { getUserProfile, loginUser, logout, registerUser } from '../controllers/user.controller.js';
import isAuthenticated from '../middleware/isAuthentication.js';

const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/profile").get(isAuthenticated, getUserProfile);
router.route("/logout").get(isAuthenticated,logout)

export default router;
