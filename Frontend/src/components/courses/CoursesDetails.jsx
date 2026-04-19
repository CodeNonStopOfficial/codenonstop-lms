import { ChevronRight } from "lucide-react";
import { Home } from "lucide-react";
import React from "react";
import { Link } from "react-router";
import { buttonVariants } from "../ui/button";

const CoursesDetails = () => {
  return (
    <div>
      <div className="md:px-6 border-b">
        <div className="flex flex-col lg:flex-row md:flex-col justify-between items-center">
          <div className="">
            <div className="borderpy-2">
              <span className="flex items-center gap-1">
                <Link
                  to="/get-started/explore-course"
                  className={buttonVariants({
                    variant: "ghost",
                    className: "hover:text-green-800",
                  })}
                >
                  <Home size={17} />
                </Link>
                <ChevronRight size={18} />
                <Link to="/" className="hover:underline hover:text-blue-950">
                  Careers
                </Link>
              </span>
              <div className="px-3 py-6 space-y-4 md:w-165">
                <h1 className="md:text-4xl text-2xl font-medium">
                  Data Scientist
                </h1>
                <p className="text-md font-semibold">
                  If you like analyzing complex datasets, developing machine
                  learning models, and solving statistical problems this role is
                  for you.
                </p>
                <span>
                  A Data Scientist analyzes large datasets to uncover insights
                  and solve complex problems. They apply statistical methods,
                  machine learning, and data visualization tools to inform
                  business strategies and decisions.
                </span>
                <div className="flex items-center mt-4">
                  <span className="font-semibold text-md">
                    Skills and Prerequisites you’ll need :
                    <span className="font-normal">
                      Data Science, Machine Learning, Python Programming, SQL,
                      Data Analysis, Statistics, Algorithms, Data Visualization
                    </span>
                  </span>
                </div>
                <div>
                  <span className="text-sm font-bold">Created By : <strong className="text-blue-800 font-bold">Virendra Kumar</strong> || Update Date: <strong className="text-blue-800 font-bold">02/03/2026</strong> || Language : <strong className="text-blue-800 font-bold">English</strong></span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-fit rounded">
            <img
              src="/bannel.png"
              className="rounded-2xl w-125 h-75 object-cover"
              alt="No Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesDetails;
