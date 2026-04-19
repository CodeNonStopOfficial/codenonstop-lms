import React from "react";
import { Label } from "../ui/label";
import { Link, useNavigate } from "react-router";
import { Button } from "../ui/button";

const StudentGoals = () => {
  const navigate = useNavigate();
  const category = "Web-Development";

  return (
    <section className="bg-gray-50 min-h-screen px-4 sm:px-6 md:px-10 py-8 md:py-15">
      {/* Heading */}
      <div className="space-y-2 text-center md:text-left">
        <h1 className="text-2xl md:text-3xl font-semibold">
          Select your goals / Exam / Skills
        </h1>
        <Label className="font-medium text-gray-600">
          <span className="text-green-500 font-semibold">200+</span> exams
          available for your preparation
        </Label>
      </div>

      {/* Goals Grid */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-5 gap-7">
        {Array.from({ length: 11 })
          .slice(0, 10)
          .map((_, index) => (
            <Link
              to={`/get-started/course?category=${encodeURIComponent(category)}`}
              key={index}
            >
              <div
                className="
                group bg-white border rounded-2xl p-6 shadow-sm
                flex flex-col items-center text-center
                transition-all duration-300 ease-in-out
                hover:shadow-lg hover:-translate-y-2 hover:border-blue-500
                active:scale-95
              "
              >
                <img
                  src="https://static.uacdn.net/production/_next/static/images/home/goalIcons/iit_jee.svg?q=75&auto=format%2Ccompress&w=96"
                  className="
                  w-16 sm:w-20 mb-3
                  transition-transform duration-300
                  group-hover:scale-110
                "
                  alt="Goal Icon"
                />

                <h1
                  className="
                  font-medium text-lg
                  transition-colors duration-300
                  group-hover:text-blue-600
                "
                >
                  Web Development
                </h1>
              </div>
            </Link>
          ))}
      </div>

      {/* CTA Button */}
      <div className="mt-10 flex justify-center md:justify-start">
        <Button
          variant="outline"
          onClick={() => navigate("/goals_section")}
          className="
            transition-all duration-300
            hover:bg-blue-600 hover:text-white
            hover:scale-105
          "
        >
          See All 200+ Goals
        </Button>
      </div>
    </section>
  );
};

export default StudentGoals;
