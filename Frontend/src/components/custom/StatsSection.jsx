import React from "react";
import CountUp from "react-countup";

const StatsSection = () => {
  return (
    <div className="bg-gray-50 border rounded-xl py-4 px-2 md:px-4">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">

        {/* Courses */}
        <div className="bg-white rounded-xl shadow-sm p-2 hover:shadow-md transition">
          <h2 className="text-3xl font-bold text-blue-600">
            <CountUp start={0} end={945} duration={2.5} />+
          </h2>
          <p className="mt-1 text-gray-600 font-medium">Courses</p>
        </div>

        {/* Students */}
        <div className="bg-white rounded-xl shadow-sm p-2 hover:shadow-md transition">
          <h2 className="text-3xl font-bold text-green-600">
            <CountUp start={0} end={1000} duration={2.5} />+
          </h2>
          <p className="mt-1 text-gray-600 font-medium">Students</p>
        </div>

        {/* Placements */}
        <div className="bg-white rounded-xl shadow-sm p-2 hover:shadow-md transition">
          <h2 className="text-3xl font-bold text-purple-600">
            <CountUp start={0} end={458} duration={2.5} />+
          </h2>
          <p className="mt-1 text-gray-600 font-medium">Placements</p>
        </div>

      </div>
    </div>
  );
};

export default StatsSection;
