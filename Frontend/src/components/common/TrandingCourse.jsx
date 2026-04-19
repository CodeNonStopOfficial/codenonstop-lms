import React from "react";
import PopularCourse from "../custom/PopularCourse";

const TrandingCourse = () => {
  return (
    <section className="w-full px-4 md:px-10 py-10 bg-gray-50">
      {/* Section Heading */}
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
          Trending Courses
        </h1>
        <p className="text-gray-600 mt-1">
          Explore the most popular courses across categories
        </p>
      </div>

      {/* Course Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-[#E3EEFF] w-full px-4 md:px-6 py-4 rounded-2xl">
          <h2 className="text-lg font-semibold mb-3 text-gray-800">
            Popular Courses in Tech
          </h2>
          <div className="flex flex-col gap-2">
            {Array.from({ length: 4 }).map((_, index) => (
              <PopularCourse key={index} />
            ))}
          </div>
        </div>
        <div className="bg-[#E3EEFF] w-full px-4 md:px-6 py-4 rounded-2xl">
          <h2 className="text-lg font-semibold mb-3 text-gray-800">
            Popular Batch in Tech
          </h2>
          <div className="flex flex-col gap-2">
            {Array.from({ length: 4 }).map((_, index) => (
              <PopularCourse key={index} />
            ))}
          </div>
        </div>
        <div className="bg-[#E3EEFF] w-full px-4 md:px-6 py-4 rounded-2xl">
          <h2 className="text-lg font-semibold mb-3 text-gray-800">
            Popular AI Skills in Tech
          </h2>
          <div className="flex flex-col gap-2">
            {Array.from({ length: 4 }).map((_, index) => (
              <PopularCourse key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrandingCourse;
