import { ChevronUp } from "lucide-react";
import { LockOpen } from "lucide-react";
import { Play } from "lucide-react";
import { LockKeyhole } from "lucide-react";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../ui/popover";
import FreePreviewVideo from "./FreePreviewVideo";

const CourseLectureContent = ({ curriculum = [] }) => {
  const isFreePreview = true;
  const [openSections, setOpenSections] = useState([]);

  const toggleSection = (index) => {
    if (openSections.includes(index)) {
      setOpenSections(openSections.filter((i) => i !== index));
    } else {
      setOpenSections([...openSections, index]);
    }
  };

  const expandAll = () => {
    setOpenSections(curriculum.map((_, i) => i));
  };

  return (
    <section className="w-full py-6 ">
      <div className="max-w-5xl mx-auto">
        {/* HEADER */}
        <div className="flex justify-between items-center mb-2">
          <div className="md:px-1 ">
            <h2 className="text-2xl font-bold text-gray-900">Course content</h2>

            <p className="text-sm text-gray-600 mt-1">
              {curriculum.length} sections •{" "}
              {curriculum.reduce((acc, sec) => acc + sec.lectures.length, 0)}{" "}
              lectures •{" "}
              {curriculum.reduce(
                (acc, sec) => acc + parseInt(sec.totalMinutes),
                0,
              )}{" "}
              min total length
            </p>
          </div>

          <button
            onClick={expandAll}
            className="text-purple-600 font-medium text-sm hover:underline"
          >
            Expand all sections
          </button>
        </div>

        {/* SECTIONS */}
        <div className="border rounded-md overflow-hidden">
          {curriculum.map((section, index) => {
            const isOpen = openSections.includes(index);

            return (
              <div key={index} className="border-b last:border-none">
                {/* SECTION HEADER */}
                <button
                  onClick={() => toggleSection(index)}
                  className="w-full flex justify-between items-center px-4 py-4 bg-gray-100 hover:bg-gray-200 transition"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-gray-700">
                      {isOpen ? <ChevronDown /> : <ChevronUp />}
                    </span>

                    <span className="font-medium text-gray-900 text-sm sm:text-base">
                      {section.title}
                    </span>
                  </div>

                  <span className="text-sm text-gray-600">
                    {section.lectures.length} lectures • {section.duration}
                  </span>
                </button>

                {/* LECTURES */}
                {isOpen && (
                  <div className="bg-white divide-y">
                    {section.lectures.map((lecture, i) => (
                      <div
                        key={i}
                        className="flex justify-between items-center px-6 py-3 text-sm"
                      >
                        <div className="flex items-center gap-2 text-gray-700">
                          <span>
                            {isFreePreview ? (
                              <LockOpen
                                size={16}
                                className="text-red-800 font-bold"
                              />
                            ) : (
                              <LockKeyhole size={16} className="text-green-800" />
                            )}
                          </span>
                          <span>{lecture.title}</span>
                        </div>

                        {isFreePreview && (
                          <div className="text-gray-500 text-md flex gap-3">
                            <div className="font-semibold text-blue-700 flex items-center gap-1">
                              <span>
                                <Play
                                  size={16}
                                  fill="black"
                                  className="text-green-800"
                                />
                              </span>
                              <div>
                                <Popover>
                                  <PopoverTrigger asChild>
                                    <Link>Preview</Link>
                                  </PopoverTrigger>
                                  <PopoverContent className="w-152">
                                    <FreePreviewVideo/>
                                  </PopoverContent>
                                </Popover>
                              </div>
                            </div>
                            <span>{lecture.duration}</span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CourseLectureContent;
