import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Button } from "../ui/button";

import "swiper/css";
import "swiper/css/pagination";
import { ScrollIcon } from "lucide-react";
import { useSearchParams } from "react-router";
import StatsSection from "../custom/StatsSection";

const CourseSection = () => {
  const [category] = useSearchParams();
  const slug = category.get("category");
  return (
    <section className="max-w-7xl mx-auto md:px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
        {/* LEFT CONTENT */}
        <div className="space-y-2">
          <div>
            <Button variant="outline" className="px-4 py-6 text-2xl">
              <ScrollIcon />
              <span className="text-[#2b006d]">{slug.replace("-", " ")}</span>
            </Button>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight">
            Welcome to <span className="text-blue-600">CodeNonstop</span>
            <br />
            Learn New Skills & Technologies
          </h1>

          <p className="text-gray-600 text-base md:text-lg">
            Build industry-ready skills, master modern technologies, and prepare
            confidently for interviews with expert-led courses.
          </p>
          <div>
            <StatsSection />
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              onClick={() =>
                document
                  .getElementById("ongoing")
                  ?.scrollIntoView({ behavior: "smooth", block: "start" })
              }
              className="md:px-6 py-5 rounded bg-[#0048B0] hover:bg-[#0048B0] text-gray-50 hover:text-gray-100 md:text-md hover:shadow transition-all hover:scale-x-90"
            >
              Ongoing Classes
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                document
                  .getElementById("upcoming")
                  ?.scrollIntoView({ behavior: "smooth", block: "start" })
              }
              className="md:px-6 py-5  rounded"
            >
              Upcoming Courses
            </Button>
          </div>
        </div>

        {/* RIGHT SLIDER */}
        <div className="w-full">
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            speed={1200}
            loop
            pagination={{ clickable: true }}
            className="w-full rounded-2xl overflow-hidden"
          >
            <SwiperSlide>
              <img
                src="/brainstorm-meeting.jpg"
                alt="Web Development"
                className="w-full h-64 md:h-96 object-cover"
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                src="https://images.unsplash.com/photo-1513258496099-48168024aec0"
                alt="Learning"
                className="w-full h-64 md:h-96 object-cover"
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b"
                alt="Success"
                className="w-full h-64 md:h-96 object-cover"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
