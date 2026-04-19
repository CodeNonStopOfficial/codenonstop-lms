import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";

const testimonials = [
  {
    id: 1,
    name: "Aman Sharma",
    course: "Full Stack Web Development",
    batch: "2024",
    rating: 5,
    achievement: "Placed at Infosys",
    image: "https://i.pravatar.cc/150?img=12",
    feedback:
      "This LMS helped me build strong fundamentals and real-world projects. The mentors are amazing!",
  },
  {
    id: 2,
    name: "Priya Verma",
    course: "Data Structures & Algorithms",
    batch: "2023",
    rating: 4,
    achievement: "Cracked Product-based Company",
    image: "https://i.pravatar.cc/150?img=32",
    feedback:
      "Structured content, clear explanations, and regular tests made learning easy and effective.",
  },
  {
    id: 3,
    name: "Rahul Singh",
    course: "MERN Stack",
    batch: "2024",
    rating: 5,
    achievement: "Freelancing ₹50k/month",
    image: "https://i.pravatar.cc/150?img=45",
    feedback:
      "Best LMS for practical learning. Projects boosted my confidence and portfolio.",
  },
];

const SelectedStudent = () => {
 const navigate = useNavigate();
  return (
    <section className="bg-gray-50 py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">
            Student Success Stories
          </h2>
          <p className="text-gray-600 mt-2">
            Hear what our selected students say about their learning journey
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((student) => (
            <div
              key={student.id}
              className="
                bg-white border rounded-2xl p-6 shadow-sm
                transition-all duration-300
                hover:shadow-lg hover:-translate-y-1
              "
            >
              {/* Student Info */}
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={student.image}
                  alt={student.name}
                  className="w-14 h-14 rounded-full object-cover border"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">
                    {student.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {student.course}
                  </p>
                </div>
              </div>

              {/* Feedback */}
              <p className="text-gray-600 text-sm mb-4">
                “{student.feedback}”
              </p>

              {/* Footer Details */}
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>Batch: {student.batch}</span>
                <span className="text-green-600 font-medium">
                  {student.achievement}
                </span>
              </div>

              {/* Rating */}
              <div className="mt-3 text-yellow-500">
                {"★".repeat(student.rating)}
                {"☆".repeat(5 - student.rating)}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-5">
         <Button variant="outline" onClick={()=>navigate('/success/story')} >See More<ArrowRight/></Button>
      </div>
    </section>
  );
};

export default SelectedStudent;
