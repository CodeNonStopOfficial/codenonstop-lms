import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Search } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";

const HeroSection = () => {
  const navigate = useNavigate();
  const [category , setCategory] = useState("");
  const handleSearch = () =>{
     if(category.trim()){
        navigate(`course?category=${category}`)
     }
  }
  return (
    <section className="w-full md:h-130">
      <main className="max-w-7xl mx-auto px-2 md:px-6 py-16 flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-2xl md:text-5xl font-bold text-gray-900 leading-tight">
            Crack your goal with India’s top educators
          </h1>

          <p className="mt-2 text-gray-600 text-base md:text-lg">
            Over <span className="text-orange-400 font-bold">10 crore</span>{" "}
            learners trust us for their preparation
          </p>
          <div className="mt-2">
            <div>
              <Input
                type="text"
                value={category}
                onChange = {(e)=>setCategory(e.target.value)}
                placeholder="Search a Course and Goals?"
                className="py-5 border text-muted-foreground bg-white font-medium"
              />
              <div className="mt-2 flex items-center gap-4">
                <Button
                  onClick={handleSearch}
                  variant="outline"
                  className="px-8 py-5 bg-[#FF7700] hover:bg-amber-600 hover:text-white text-[14px] text-white font-medium flex transition-all"
                >
                  <Search />
                  Find Course
                </Button>
                <Button
                  onClick={()=>navigate("/get-started/explore/course")}
                  variant="outline"
                  className="px-8 py-5 font-medium items-center"
                >
                  Explore
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://static.uacdn.net/production/_next/static/images/home-illustration.svg?q=75&auto=format%2Ccompress&w=1200"
            alt="Hero Illustration"
            className="w-full max-w-md md:max-w-lg"
          />
        </div>
      </main>
    </section>
  );
};

export default HeroSection;
