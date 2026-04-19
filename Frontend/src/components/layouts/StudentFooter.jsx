import { LinkIcon } from "lucide-react";
import { Github } from "lucide-react";
import { YoutubeIcon } from "lucide-react";
import { FacebookIcon } from "lucide-react";
import { Linkedin } from "lucide-react";
import { ListStartIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FootprintsIcon } from "lucide-react";


const StudentFooter = () => {
  const channelId = "/UCH_HcTeKsB6abNOGkFyfeHw";
  const handleSubscribe = () => {
    window.open(
      `https://www.youtube.com/channel/${channelId}?sub_confirmation=1`,
      "_blank",
    );
  };

  return (
    <div>
      <footer className="max-w-full px-2 md:px-10 py-10 bg-[#F2F5FA]">
        <div className="grid grid-cols-1 md:grid-cols-2  gap-8 justify-between">
          <div>
            <div className="space-y-1">
              <h1 className="text-2xl font-bold text-blue-950">
                <span className="text-red-800">Code</span>Nonstop
              </h1>
              <p className="text-muted-foreground text-sm md:text-md">
                Codenonstop is democratising education, making it accessible to
                all. Join the revolution, learn on India's largest learning
                platform.
              </p>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <Link
                to="https://www.apnacollege.in/home"
                className="p-1 border bg-gray-100 rounded "
              >
                <Linkedin size={20} />
              </Link>
              <Link to="" className="p-1 border rounded bg-gray-100 ">
                <Github size={20} />
              </Link>
              <Link to="" className="p-1 border rounded bg-gray-100 ">
                <YoutubeIcon size={20} />
              </Link>
              <Link to="" className="p-1 border rounded bg-gray-100 ">
                <FacebookIcon size={20} />
              </Link>
            </div>
            <div className="mt-4 flex gap-2">
              <Input
                name="email"
                type="email"
                className="w-65"
                placeholder="Ex@mail.com"
              />
              <Button onClick={handleSubscribe} className="bg-blue-900">
                Subscribe
              </Button>
            </div>
          </div>
          <div>
            <div className="flex flex-row justify-between gap-2">
              <div>
                <Label className="font-medium text-[16px]">Popular Goals</Label>
                <div className="flex  gap-2 flex-col mt-4 text-[#070543d2] font-medium">
                  <Link to="/course?category=development">Development</Link>
                  <Link to="/course?category=ai/ml">AI/ML Course</Link>
                  <Link to="/course?category=cyber-security">
                    Cyber-Security
                  </Link>
                  <Link to="/course?category=goverment-preplation">
                    Goverment Exam
                  </Link>
                  <Link to="/course?category=dat-science">Data Science</Link>
                  <Link to="/course?category=computer-science">
                    Computer Science
                  </Link>
                </div>
              </div>
              <div>
                <Label className="font-medium text-[16px]">Company</Label>
                <div className="flex flex-col gap-2 mt-4 text-[#070543d2] font-medium">
                  <Link to="/about-us">About Us</Link>
                  <Link to="/careers">Careers</Link>
                  <Link to="/policy">Privacy Policy</Link>
                  <Link to="/help-center">Help Center</Link>
                </div>
              </div>
              <div>
                <Label className="font-medium text-[16px]">Company</Label>
                <div className="flex flex-col gap-2 mt-4 text-[#070543d2] font-medium">
                  <Link to="/about-us">About Us</Link>
                  <Link to="/careers">Careers</Link>
                  <Link to="/policy">Privacy Policy</Link>
                  <Link to="/help-center">Help Center</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="bg-[#F2F5FA] border py-5 md:px-10 px-2 flex justify-between ">
        <div className="flex items-center gap-2">
          <span className=" text-blue-900 text-sm font-medium">
            <strong className="text-orange-500">
              @ {new Date().getFullYear()}
            </strong>{" "}
            - CodeNonstop
          </span>
          <p className="hidden md:block text-sm font-medium">
            {" "}
            || - Indian Leanring Platform
          </p>
        </div>
        <div className="flex items-center gap-3 text-blue-900 text-sm font-medium">
          <Link to="/privacy" className="hover:underline hover:text-red-700">
            Privacy Policy
          </Link>
          <Link to="/team" className="hover:underline hover:text-red-700">
            Teams
          </Link>
          <Link
            to="/coder"
            className="hidden md:block hover:underline hover:text-red-800"
          >
            Code of Coductor
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default StudentFooter;
