import { LayoutDashboard } from "lucide-react";
import { BookText } from "lucide-react";
import { Settings } from "lucide-react";
import { RadioTower } from "lucide-react";
import { BookOpen } from "lucide-react";
import { Columns4 } from "lucide-react";
import { Landmark } from "lucide-react";
import { BookLock } from "lucide-react";
import { MessageCircleQuestionMark } from "lucide-react";
import { ChartColumnIncreasing } from "lucide-react";
import { ChevronsUpDown } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const AdminSidebarLink = () => {
  const logoImage = false;
  return (
    <div className="max-w-full py-2 md:py-0 px-1">
      <div className="md:flex items-center justify-between gap-2 border px-4 py-2 rounded-2xl hidden ">
        <div className="items-center">
          <Link to="/">
            {logoImage ? (
              <img src={logoImage} />
            ) : (
              <h1 className="text-[22px] font-bold text-red-700">
                Code<span className="text-blue-800">Nonstop</span>
              </h1>
            )}
          </Link>
          <span className="font-semibold text-black">Workspace</span>
        </div>
        <div className="items-center">
          <ChevronsUpDown />
        </div>
        <div></div>
      </div>
      <div className="flex flex-col justify-between">
        <div className="px-1 py-4 space-y-2 mb-4">
          <div className="flex items-center gap-2 border px-2 py-2 rounded bg-white">
            <LayoutDashboard className="text-[#121621]" size={18} />
            <Link to="dashboard" className="font-medium text-[16px]">
              Dashboard
            </Link>
          </div>
          <div className="flex items-center gap-2 border px-2 py-2 rounded bg-white">
            <BookText className="text-[#121621]" size={18} />
            <Link to="courses" className="font-medium text-[16px]">
              Courses
            </Link>
          </div>
          <div className="flex items-center gap-2 border px-2 py-2 rounded bg-white">
            <ChartColumnIncreasing className="text-[#121621]" size={18} />
            <Link to="analytices" className="font-medium text-[16px]">
              Analytices
            </Link>
          </div>
          <div className="flex items-center gap-2 border px-2 py-2 rounded bg-white">
            <RadioTower className="text-[#121621]" size={18} />
            <Link to="live-classes" className="font-medium text-[16px]">
              Live Classes
            </Link>
          </div>
          <div className="flex items-center gap-2 border px-2 py-2 rounded bg-white">
            <BookLock  className="text-[#121621]"size={18} />
            <Link to="private-classes" className="font-medium text-[16px]">
              Private Classes
            </Link>
          </div>
          <div className="flex items-center gap-2 border px-2 py-2 rounded bg-white">
             <BookOpen className="text-[#121621]" size={18}/>
            <Link to="liberary" className="font-medium text-[16px]">
              Liberary
            </Link>
          </div>
          <div className="flex items-center gap-2 border px-2 py-2 rounded bg-white">
             <Columns4 className="text-[#121621]" size={18} />
            <Link to="students" className="font-medium text-[16px]">
              Students
            </Link>
          </div>
          <div className="flex items-center gap-2 border px-2 py-2 rounded bg-white">
            <Landmark className="text-[#121621]" size={18}/>
            <Link to="department" className="font-medium text-[16px]">
              Department
            </Link>
          </div>
        </div>
        <div className="px-1">
          <div className="flex items-center gap-1 px-2 py-2">
            <MessageCircleQuestionMark size={18} />
            <Link to="help-center" className="font-medium text-[16px]">
              Help
            </Link>
          </div>
          <div className="flex items-center gap-1 px-2 py-2">
            <Settings size={18} />
            <Link to="admin-setting" className="font-medium text-[16px]">
              Setting 
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebarLink;
