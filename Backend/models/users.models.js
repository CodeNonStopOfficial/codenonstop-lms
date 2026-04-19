import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 50,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      index: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
    },

    role: {
      type: String,
      enum: ["student", "instructor", "admin"],
      default: "student",
    },

    photoUrl: {
      url: String,
      public_id: String,
    },

    bio: {
      type: String,
      maxlength: 300,
    },

    phone: {
      type: String,
    },
    enrolledCourses: [
      {
        course: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Course",
        },
        enrolledAt: {
          type: Date,
          default: Date.now,
        },
        progress: {
          type: Number, // % completion
          default: 0,
        },
        completedLectures: [
          {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Lecture",
          },
        ],
      },
    ],

    createdCourses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
      },
    ],

    earnings: {
      type: Number,
      default: 0,
    },

    // 🔹 Subscription (for premium LMS)
    subscription: {
      plan: {
        type: String,
        enum: ["free", "monthly", "yearly"],
        default: "free",
      },
      startDate: Date,
      endDate: Date,
      isActive: {
        type: Boolean,
        default: false,
      },
    },

    wishlist: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
      },
    ],

    isVerified: {
      type: Boolean,
      default: false,
    },

    emailVerificationToken: String,
    emailVerificationExpiry: Date,

    resetPasswordToken: String,
    resetPasswordExpiry: Date,

    // 🔹 Activity
    lastLogin: Date,
    loginHistory: [
      {
        ip: {
          type: String,
        },
        device: {
          type: String,
        },
        browser: {
          type: String,
        },
        os: {
          type: String,
        },
        location: {
          country: String,
          city: String,
        },
        date: {
          type: Date,
          default: Date.now,
        },
      },
    ],

    // 🔹 Status
    isBlocked: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

export const User = mongoose.model("User", userSchema);
