import { StarIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const PopularCourse = () => {
  return (
    <Link to="course/courseid" className="cursor-pointer">
      <div
        className="
        bg-white w-full px-4 py-3 rounded-xl
        flex gap-3 items-start
        shadow-sm transition-all duration-300
        hover:shadow-lg hover:-translate-y-1
        active:scale-95
      "
      >
        {/* Course Thumbnail */}
        <img
          src="https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?w=600&auto=format&fit=crop&q=60"
          className="w-20 h-16 rounded-lg object-cover shrink-0"
          alt="Web Development"
        />

        {/* Course Info */}
        <div className="flex flex-col gap-1">
          {/* University */}
          <div className="flex items-center gap-2">
            <img
              src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png"
              alt="University Logo"
              className="w-4 h-4 rounded border"
            />
            <span className="text-sm text-gray-500">University of India</span>
          </div>

          {/* Course Title */}
          <h3 className="text-base font-semibold text-gray-900">
            Web Development
          </h3>

          {/* Meta Info */}
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <span>Specialization</span>

            <span className="flex items-center gap-1">
              <StarIcon size={14} className="fill-yellow-400 text-yellow-400" />
              <span className="font-medium">4.5</span>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PopularCourse;
