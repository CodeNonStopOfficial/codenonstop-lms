import PurchageCourseCard from "@/components/custom/PurchageCourseCard";
import { ChartSpline } from "lucide-react";
import React from "react";

const MyLearningPage = () => {
  return (
    <section className="max-w-full min-h-screen px-4 md:px-6 py-6">
      <div className="mb-4 flex items-center gap-2">
         <ChartSpline size={33} className="text-green-600" />
         <h1 className="font-bold text-2xl">Continue Learning</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {[1, 2, 3, 4].map((data, index) => (
          <div key={index + 1}>
            <PurchageCourseCard course={data} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyLearningPage;
