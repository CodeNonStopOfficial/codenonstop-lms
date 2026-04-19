import React from "react";
import { ArrowRight } from "lucide-react";
import UpComingCourseCard from "../custom/UpComingCourseCard";
import { useNavigate } from "react-router";
import { Button } from "../ui/button";

const CourseUpcoming = () => {
  const navigate = useNavigate();
  return (
    <section id="upcoming">
      <h1 className="text-2xl font-bold mt-5 px-2 py-4 flex items-center gap-1 w-fit justify-center">
        Upcoming Classes
        <ArrowRight size={24} />
      </h1>
      <div className="mt-5">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {Array.from({ length: 8 })
            .slice(0, 8)
            .map((data, index) => (
              <UpComingCourseCard key={index} />
            ))}
        </div>
        <div className="mt-5">
          <Button
            variant="outline"
            onClick={() => navigate("ongoing/batch")}
            className="bg-[#892DE1] hover:bg-[#8303fb] text-white py-5"
          >
            Show More
            <ArrowRight />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CourseUpcoming;
