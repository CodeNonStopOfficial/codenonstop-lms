import React from "react";
import data from "@/data/lanuage.json";
import { Link } from "react-router";
const CourseTech = () => {
  return (
    <section className="w-full mt-5">
      <div>
        <h1 className="text-2xl font-bold  py-2  rounded w-fit my-3">
          Top Lanuages
        </h1>
        <div>
          <span className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2">
            {data?.data.map((data, index) => (
              <Link
                to={`lanuage?lanuagetype=${encodeURIComponent(data.language.toLowerCase())}`}
                key={index + 1}
              >
                <div className="flex flex-row rounded border w-full md:w-35 py-3 items-center justify-center gap-2">
                  <img
                    src={data.languageIcon}
                    alt={data.language}
                    className="w-10 h-10"
                  />
                  <span>{data.language}</span>
                </div>
              </Link>
            ))}
          </span>
        </div>
      </div>
    </section>
  );
};

export default CourseTech;
