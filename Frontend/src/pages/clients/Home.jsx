import HeroSection from "@/components/common/HeroSection";
import SelectedStudent from "@/components/common/SelectedStudent";

import StudentGoals from "@/components/common/StudentGoals";
import React from "react";

const Home = () => {
  return (
    <main>
      <HeroSection />
      <StudentGoals />
      <SelectedStudent/>
    </main>
  );
};

export default Home;
