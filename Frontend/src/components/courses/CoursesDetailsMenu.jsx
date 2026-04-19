import {
  User,
  Star,
  Box,
  BadgeCheck,
  Heart,
  Share2,
  Radio,
} from "lucide-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router";

const CoursesDetailsMenu = ({ course }) => {
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);

  return (
    <div className="w-full bg-[#f8f9fa] border-b">
      <div className="max-w-6xl mx-auto px-3 py-2">

        {/* Scroll Container */}
        <div className="flex overflow-x-auto md:justify-center gap-3 md:gap-5 no-scrollbar">

          {/* Premium */}
          <div className="min-w-30 flex flex-col items-center bg-[#0048B0] text-white rounded-xl shadow-sm py-3 px-4 hover:shadow-md transition">
            <BadgeCheck className="w-6 h-6 text-white" />
            <span className="text-sm font-semibold mt-1">Premium</span>
          </div>

          {/* Ratings */}
          <div className="min-w-30 flex flex-col items-center bg-white rounded-xl shadow-sm py-3 px-4">
            <span className="text-base font-bold text-yellow-600">
              {course?.rating || "4.7"}
            </span>

            <div className="flex gap-1 my-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-500" />
              ))}
            </div>

            <Link
              to="/user/ratings"
              className="text-xs underline hover:text-blue-600"
            >
              {course?.reviews || "2,345+"}
            </Link>
          </div>

          {/* Level */}
          <div className="min-w-30 flex flex-col items-center bg-white rounded-xl shadow-sm py-3 px-4">
            <Box className="w-6 h-6 text-blue-500" />
            <span className="text-sm font-semibold mt-1">
              {course?.level || "Advanced"}
            </span>
          </div>

          {/* Learners */}
          <div
            onClick={() => navigate("/")}
            className="min-w-30 flex flex-col items-center bg-white rounded-xl shadow-sm py-3 px-4 cursor-pointer hover:shadow-md transition"
          >
            <User className="w-6 h-6 text-red-500" />
            <span className="text-sm font-bold mt-1">
              {course?.students || "1,234"}
            </span>
            <span className="text-xs text-gray-500">Learners</span>
          </div>

          {/* Progress */}
          <div className="min-w-35 flex flex-col items-center bg-white rounded-xl shadow-sm py-3 px-4">
            <span className="text-xs text-gray-500">Progress</span>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div
                className="bg-green-500 h-2 rounded-full"
                style={{ width: `${course?.progress || 60}%` }}
              ></div>
            </div>
            <span className="text-xs mt-1 font-semibold">
              {course?.progress || 60}%
            </span>
          </div>

          {/* Live Badge */}
          {course?.isLive && (
            <div className="min-w-30 flex flex-col items-center bg-white rounded-xl shadow-sm py-3 px-4 animate-pulse">
              <Radio className="w-6 h-6 text-red-600" />
              <span className="text-sm font-bold text-red-600 mt-1">
                Live
              </span>
            </div>
          )}

          {/* Wishlist */}
          <div
            onClick={() => setLiked(!liked)}
            className="min-w-30 flex flex-col items-center bg-white rounded-xl shadow-sm py-3 px-4 cursor-pointer hover:shadow-md transition"
          >
            <Heart
              className={`w-6 h-6 ${
                liked ? "text-red-500 fill-red-500" : "text-gray-500"
              }`}
            />
            <span className="text-xs mt-1">
              {liked ? "Saved" : "Wishlist"}
            </span>
          </div>

          {/* Share */}
          <div className="min-w-30 flex flex-col items-center bg-white rounded-xl shadow-sm py-3 px-4 cursor-pointer hover:shadow-md transition">
            <Share2 className="w-6 h-6 text-green-600" />
            <span className="text-xs mt-1">Share</span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CoursesDetailsMenu;