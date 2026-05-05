import bcrypt from "bcryptjs";
import { User } from "../models/users.models.js";
import { generateToken } from "../utils/generateToken.js";
import useragent from "useragent";
import geoip from "geoip-lite";
import mongoose from "mongoose";

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Pleses Filed all Vlues 👇",
        success: false,
      });
    }
    // check existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashPassword = await bcrypt.hash(password, 10);
    // create user
    const user = await User.create({
      name,
      email,
      password: hashPassword,
    });

    res.status(201).json({
      message: "User registered successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        message: "Fields are required",
        success: false,
      });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
    const agent = useragent.parse(req.headers["user-agent"]);
    const geo = geoip.lookup(ip);
    const loginData = {
      ip,
      browser: agent.toAgent(), // Chrome, Firefox
      os: agent.os.toString(), // Windows, Android
      location: {
        country: geo?.country || "Unknown",
        city: geo?.city || "Unknown",
      },
    };
    user.loginHistory.push(loginData);
    if (user.loginHistory.length > 5) {
      user.loginHistory.shift();
    }
    user.lastLogin = new Date();
    await user.save();

    const token = generateToken(user);

    return res
      .status(200)
      .cookie("token", token, {
        httpOnly: true,
        sameSite: "strict",
        maxAge: 24 * 60 * 60 * 1000, // 1 day
      })
      .json({
        success: true,
        message: "Login Successfully ✅",
        user,
      });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

export const getUserProfile = async (req, res) => {
  try {
    const userId = req.id;
    if (!userId) {
      return res.status(400).json({
        message: "UserId Invalid ",
        success: false,
      });
    }
    const user = await User.findById(userId).select("-password");
    // .populate("enrolledCourses.course");

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ========================== LogOut Feature=================
export const logout = async (_, res) => {
  try {
    return res.status(200).cookie("token", "", { maxAge: 0 }).json({
      message: "Logged out successfully.",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Failed to logout",
    });
  }
};

/* ===========================
   ✏️ Update Profile
=========================== */
export const updateUserProfile = async (req, res) => {
  try {
    const updates = req.body;

    const user = await User.findByIdAndUpdate(req.user.id, updates, {
      new: true,
    }).select("-password");

    res.status(200).json({
      message: "Profile updated",
      user,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* ===========================
   🔒 Change Password
=========================== */
export const changePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;

    const user = await User.findById(req.user.id);

    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Old password incorrect" });
    }

    user.password = newPassword;
    await user.save();

    res.status(200).json({ message: "Password changed successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* ===========================
   🔁 Forgot Password
=========================== */
export const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const resetToken = crypto.randomBytes(32).toString("hex");

    user.resetPasswordToken = resetToken;
    user.resetPasswordExpiry = Date.now() + 10 * 60 * 1000; // 10 min

    await user.save();

    res.status(200).json({
      message: "Password reset token generated",
      resetToken, // send via email in real app
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* ===========================
   🔁 Reset Password
=========================== */
export const resetPassword = async (req, res) => {
  try {
    const { token, newPassword } = req.body;

    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpiry: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({ message: "Invalid or expired token" });
    }

    user.password = newPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpiry = undefined;

    await user.save();

    res.status(200).json({ message: "Password reset successful" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* ===========================
   🚫 Block / Unblock User (Admin)
=========================== */
export const toggleBlockUser = async (req, res) => {
  try {
    const { userId } = req.params;

    const user = await User.findById(userId);

    user.isBlocked = !user.isBlocked;
    await user.save();

    res.status(200).json({
      message: `User ${user.isBlocked ? "blocked" : "unblocked"}`,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
