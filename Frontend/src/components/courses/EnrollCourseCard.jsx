import { Clock } from "lucide-react";
import { CircleCheck } from "lucide-react";
import { IndianRupee } from "lucide-react";
import { CodeXml } from "lucide-react";
import { ChartColumnIncreasing } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

const EnrollCourseCard = () => {
  const youtubevideoUrl = false;
  const purchase = false;
  return (
    <div className="bg-white shadow-lg  rounded-2xl overflow-hidden sticky top-0">
      {/* Responsive Video */}
      <div className="relative w-full pb-[56.25%]">
        {youtubevideoUrl ? (
          <video
            className="w-full rounded-lg"
            controls
            autoPlay={false}
            controlsList="nodownload noplaybackrate"
            disablePictureInPicture
          >
            <source src="https://yourcdn.com/video.mp4" type="video/mp4" />
          </video>
        ) : (
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/7IFJb-uLEaI"
            title="Course Preview"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        )}
      </div>

      {/* Course Details */}
      <div className="p-4">
        <h1 className="text-[20px] font-bold border-b">
          Ultimate AWS Certified Solutions Architect Associate 2026
        </h1>
        <div className="border rounded px-2 py-2 bg-gray-100 space-y-2 my-3">
          <div className="flex items-center justify-between border px-2 py-2 bg-white text-md font-bold">
            <span className="flex items-center gap-2">
              <ChartColumnIncreasing
                size={35}
                className="border rounded p-2  text-blue-900 bg-gray-50 font-bold"
              />
              Difficulty Leve
            </span>
            <span>Beginner</span>
          </div>
          <div className="flex items-center justify-between border px-2 py-2 bg-white text-md font-bold">
            <span className="flex items-center gap-2">
              <Clock
                size={34}
                className="border rounded p-2 text-blue-900 bg-gray-50 font-bold"
              />
              Course Duration
            </span>
            <span>10h 23min</span>
          </div>
          <div className="flex items-center justify-between border px-2 py-2 bg-white text-md font-bold">
            <span className="flex items-center gap-2">
              <CodeXml
                size={35}
                className="border rounded p-2  text-blue-900 bg-gray-50 font-bold"
              />
              Source Code
            </span>
            <span className="w-fit flex align-baseline  items-center justify-center gap-1 border rounded-full px-2 text-sm text-green-800 font-bold">
              <CircleCheck size={14} />
              Free
            </span>
          </div>
          <div className="flex items-center justify-between border px-2 py-2 bg-white text-md font-bold">
            <span className="flex items-center gap-2">
              <IndianRupee
                size={35}
                className="border rounded p-2  text-blue-900 bg-gray-50 font-bold"
              />
              Course Price
            </span>
            <span className="w-fit flex align-baseline  items-center justify-center border rounded-full px-2 text-sm text-green-900 font-bold">
              <IndianRupee size={14} className=" items-center align-middle" />
              499.00
            </span>
          </div>
        </div>
        <div>
          {purchase ? (
            <Button variant="outline" className="w-full">
              Start Learning
            </Button>
          ) : (
            <Button className="w-full py-5 hover:bg-[#0085C8] bg-[#0022ffe6] hover:text-black text-gray-100 font-bold">
              Enroll Now
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default EnrollCourseCard;
