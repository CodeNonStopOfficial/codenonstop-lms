import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";

const courseCategories = [
  // 💻 Development
  { id: "frontend", name: "Frontend Development" },
  { id: "backend", name: "Backend Development" },
  { id: "fullstack", name: "Fullstack Development" },
  { id: "webdev", name: "Web Development" },
  { id: "mobiledev", name: "Mobile App Development" },
  { id: "gamedev", name: "Game Development" },
  { id: "softwareeng", name: "Software Engineering" },

  // 🧠 Programming
  { id: "programming", name: "Programming Languages" },
  { id: "dsa", name: "Data Structures & Algorithms" },
  { id: "competitive", name: "Competitive Programming" },
  { id: "systemdesign", name: "System Design" },
  { id: "oop", name: "Object-Oriented Programming" },

  // 🤖 AI & Data
  { id: "datascience", name: "Data Science" },
  { id: "ai", name: "Artificial Intelligence" },
  { id: "ml", name: "Machine Learning" },
  { id: "deeplearning", name: "Deep Learning" },
  { id: "nlp", name: "Natural Language Processing" },
  { id: "cv", name: "Computer Vision" },
  { id: "bigdata", name: "Big Data" },
  { id: "analytics", name: "Data Analytics" },

  // ☁️ Cloud & DevOps
  { id: "cloud", name: "Cloud Computing" },
  { id: "aws", name: "AWS" },
  { id: "azure", name: "Microsoft Azure" },
  { id: "gcp", name: "Google Cloud" },
  { id: "devops", name: "DevOps" },
  { id: "docker", name: "Docker" },
  { id: "kubernetes", name: "Kubernetes" },
  { id: "ci_cd", name: "CI/CD Pipelines" },

  // 🗄️ Database
  { id: "database", name: "Database" },
  { id: "sql", name: "SQL" },
  { id: "nosql", name: "NoSQL" },
  { id: "mongodb", name: "MongoDB" },
  { id: "postgresql", name: "PostgreSQL" },

  // 🔐 Security
  { id: "cybersecurity", name: "Cyber Security" },
  { id: "ethicalhacking", name: "Ethical Hacking" },
  { id: "networksecurity", name: "Network Security" },
  { id: "cryptography", name: "Cryptography" },

  // 🌐 Networking & Systems
  { id: "networking", name: "Computer Networking" },
  { id: "os", name: "Operating Systems" },
  { id: "distributed", name: "Distributed Systems" },

  // 🎨 Design
  { id: "uiux", name: "UI/UX Design" },
  { id: "graphicdesign", name: "Graphic Design" },
  { id: "animation", name: "Animation" },
  { id: "3d", name: "3D Design" },

  // 🎬 Media
  { id: "videoediting", name: "Video Editing" },
  { id: "photography", name: "Photography" },
  { id: "filmmaking", name: "Filmmaking" },
  { id: "audio", name: "Audio Production" },

  // 📱 Emerging Tech
  { id: "blockchain", name: "Blockchain" },
  { id: "web3", name: "Web3 Development" },
  { id: "arvr", name: "AR/VR Development" },
  { id: "iot", name: "Internet of Things (IoT)" },
  { id: "robotics", name: "Robotics" },

  // 💼 Business
  { id: "business", name: "Business" },
  { id: "entrepreneurship", name: "Entrepreneurship" },
  { id: "startup", name: "Startup Building" },
  { id: "management", name: "Management" },
  { id: "leadership", name: "Leadership" },

  // 💰 Finance
  { id: "finance", name: "Finance" },
  { id: "accounting", name: "Accounting" },
  { id: "stockmarket", name: "Stock Market" },
  { id: "crypto", name: "Cryptocurrency" },

  // 📢 Marketing
  { id: "marketing", name: "Digital Marketing" },
  { id: "seo", name: "SEO" },
  { id: "socialmedia", name: "Social Media Marketing" },
  { id: "branding", name: "Branding" },

  // ✍️ Content
  { id: "contentwriting", name: "Content Writing" },
  { id: "copywriting", name: "Copywriting" },
  { id: "blogging", name: "Blogging" },

  // 🧑‍💼 Career
  { id: "interview", name: "Interview Preparation" },
  { id: "resume", name: "Resume Building" },
  { id: "freelancing", name: "Freelancing" },
  { id: "jobprep", name: "Job Preparation" },

  // 🗣️ Communication
  { id: "english", name: "English Speaking" },
  { id: "communication", name: "Communication Skills" },
  { id: "publicspeaking", name: "Public Speaking" },

  // ⚡ Productivity
  { id: "productivity", name: "Productivity" },
  { id: "timemanagement", name: "Time Management" },
  { id: "selfdevelopment", name: "Self Development" },

  // 🎓 Academic
  { id: "math", name: "Mathematics" },
  { id: "physics", name: "Physics" },
  { id: "chemistry", name: "Chemistry" },

  // 🛠 Misc
  { id: "tools", name: "Developer Tools" },
  { id: "opensource", name: "Open Source" },
  { id: "testing", name: "Software Testing" },
];

const AdminCourseCreate = () => {
  const navigate = useNavigate();
  const [courseTitle, setCourseTitle] = useState("");
  const [category, setCategory] = useState("");
  const getSelectedCategory = (value) => {
     setCategory(value);
  }
  const createCourseHandle = ()=>{
     console.log(courseTitle,category);
  }
  return (
    <section className="max-w-full min-h-screen md:px-4 py-4 ">
      {/* Container */}
      <div className="border px-4 py-4 rounded shadow bg-white space-y-3">
        {/* Heading */}
        <div>
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
            Create New Course
          </h1>
          <p className="text-xs sm:text-sm text-gray-500">
            Add basic course details
          </p>
        </div>

        {/* Title */}
        <div className="w-[50%]">
          <Label className="mb-1 block">Course Title</Label>
          <Input
            type="text"
            name="title"
            value ={courseTitle}
            onChange = {(e)=>setCourseTitle(e.target.value)}
            placeholder="Enter Course Title..!"
            className="w-full py-5 font-semibold bg-white"
            required
          />
        </div>

        {/* Category */}
        <div className="w-[50%]">
          <Label className="mb-1 block">Course Category</Label>
          <Select onValueChange={getSelectedCategory}>
            <SelectTrigger className="w-full py-5 bg-white">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>

            <SelectContent className="max-h-60 overflow-y-auto">
              <SelectGroup>
                <SelectLabel>Categories</SelectLabel>

                {courseCategories.map((data) => (
                  <SelectItem key={data.id} value={data.name}>
                    {data.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <Button onClick = {()=>navigate(-1)}
            className={buttonVariants({
              variant: "outline",
              className: "w-full text-black px-8 py-4 sm:w-auto font-semibold",
            })}
          >
            Back
          </Button>

          <Button
            className={buttonVariants({
              className: "w-full sm:w-auto font-semibold",
            })}
            onClick = {createCourseHandle}
          >
            Create Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AdminCourseCreate;
