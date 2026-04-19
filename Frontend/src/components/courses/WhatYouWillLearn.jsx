import React from "react";

const WhatYouWillLearn = ({ learnings = [] }) => {
  return (
    <section className="w-full">
      
      <div className="max-w-6xl mx-auto">
    
        {/* Content Box */}
        <div className="bg-white px-2">
          <h2 className="text-2xl  font-bold text-gray-900">
          What You’ll Learn
        </h2>
          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-2 py-2">
            
            {learnings.length > 0 ? (
              learnings.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 text-gray-700 text-sm sm:text-base"
                >
                  {/* Icon */}
                  <span className="text-green-600 mt-1">✔</span>

                  {/* Text */}
                  <p className="leading-relaxed">{item}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No learning outcomes available.</p>
            )}

          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouWillLearn;