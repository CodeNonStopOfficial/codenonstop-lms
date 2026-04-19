import React from "react";
import EnrollCourseCard from "./EnrollCourseCard";
import CourseDetailsHero from "./CourseDetailsHero";
import CousesLectuesSession from "./CousesLectuesSession";



const CourseDetailsPreview = () => {
  return (
    <div className="w-full px-4 md:px-8 py-6">
      <div className="flex flex-col-reverse lg:flex-row gap-6">
        <div>
           <CourseDetailsHero/>
           <CousesLectuesSession/>
        </div>
        <div className="max-w-full ">
          <div className="w-full  lg:w-100 sticky top-18">
            <EnrollCourseCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsPreview;
