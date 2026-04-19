import GettingCourse from "@/components/common/GettingCourse";
import GettingHero from "@/components/common/GettingHero";
import StudentGoals from "@/components/common/StudentGoals";
import TrandingCourse from "@/components/common/TrandingCourse";
import React from "react";

const GettingPage = () => {
  return (
    <>
      <GettingHero/>
      <div>
         <StudentGoals/>
      </div>
      <TrandingCourse/>
      <GettingCourse/>

    </>
  );
};

export default GettingPage;
