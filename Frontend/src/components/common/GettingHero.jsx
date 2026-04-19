import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import Swiger from "./Swiger";

const GettingHero = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-10 pt-10 bg-gray-50">
      <div className="flex flex-col-reverse md:flex-col lg:flex-row items-center gap-10">
        {/* LEFT CONTENT */}
        <div className="w-full lg:w-1/2 py-10">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-gray-900">
            Learn Smarter.{" "}
            <span className="text-blue-600">Achieve Faster.</span>
          </h1>

          <p className="mt-4 text-lg md:text-xl font-medium text-gray-700">
            From Competitive Exams to Career-Ready Skills
          </p>

          <p className="mt-4 text-base md:text-lg text-gray-600 leading-relaxed">
            Master in-demand skills, crack competitive exams, and learn from top
            educators through live classes, recorded courses, and structured
            learning paths — all in one platform designed for your success.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <button className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
              Get Started for Free
            </button>

            <button className="px-6 py-3 rounded-xl border border-gray-300 text-gray-800 font-semibold hover:bg-gray-100 transition">
              Explore Courses
            </button>
          </div>
        </div>

        {/* RIGHT SLIDER */}
        <div className="w-full lg:w-1/2 flex justify-center md:justify-end">
          <Swiger />
        </div>
      </div>
    </section>
  );
};

export default GettingHero;
