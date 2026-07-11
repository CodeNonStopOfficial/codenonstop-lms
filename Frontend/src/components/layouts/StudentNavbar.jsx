import React, { useEffect } from "react";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router";
import { Home } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import UserToggleMenu from "../common/UserToggleMenu";
import { useState } from "react";
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import { GraduationCap } from "lucide-react";
import { ShieldPlus } from "lucide-react";
import { ChartBarBig } from "lucide-react";
import { Gift } from "lucide-react";
import AvatarIcon from "../common/AvatarIcon";
import { useSelector } from "react-redux";
import { useLogoutUserMutation } from "@/features/api/authApi";
import { toast } from "sonner";

const StudentNavbar = () => {
  const { user } = useSelector((store) => store.auth);
  console.log(user)
  const [logoutUser, { data, isSuccess }] = useLogoutUserMutation();
  const logoutHandler = async () => {
    await logoutUser();
  };
  const navigate = useNavigate();
  const logoImage = false;
  // const user = false;
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (isSuccess) {
      toast.success(data?.message || "User log out.");
      navigate("/auth/sign-in");
    }
  }, [data?.message, isSuccess, navigate]);
  return (
    <header className="w-full border-b bg-gray-100">
      <nav className="flex items-center justify-between px-4 md:px-8 py-4">
        <div>
          <Link to="/">
            {logoImage ? (
              <img src={logoImage} />
            ) : (
              <h1 className="text-2xl font-bold text-red-700">
                Code<span className="text-blue-800">Nonstop</span>
              </h1>
            )}
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-6 sm:gap-3 text-[#3C4852] font-medium">
          <Link
            to="/get-started"
            className=" font-medium flex items-center gap-1 hover:text-orange-600 transition-normal"
          >
            <Home size={18} />
            Getting
          </Link>
          <Link
            to="/educator"
            className=" font-medium flex items-center gap-1  hover:text-orange-600"
          >
            <GraduationCap size={19} />
            Educator
          </Link>
          <Link
            to="/batch"
            className=" font-medium flex items-center gap-1  hover:text-orange-600"
          >
            <ShieldPlus size={18} />
            Batch
          </Link>
          <Link
            to="/store"
            className="block md:hidden lg:flex font-medium items-center gap-1  hover:text-orange-600"
          >
            <ChartBarBig size={18} />
            Store
          </Link>
          <Link
            to="/Subscription"
            className="block md:hidden lg:flex items-center gap-1 font-medium hover:text-orange-600"
          >
            <Gift size={18} />
            Subscription
          </Link>
        </div>
        <div className="flex items-center justify-center gap-2">
          <div className="md:hidden">
            <button
              className="md:hidden border p-1 rounded border-blue-900 shadow"
              onClick={() => setOpen(!isOpen)}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Link
              to="referal"
              className="hidden md:block border p-2 bg-white rounded-full cursor-pointer"
            >
              <img
                src="https://static.uacdn.net/production/_next/static/images/giftHomePage.svg?q=75&auto=format%2Ccompress&w=48"
                className="w-4"
              />
            </Link>
            <div className=" items-center">
              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <div className=" cursor-pointer">
                      <AvatarIcon />
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-55 mt-3">
                    {/* Profile Toggle meneu */}
                    <UserToggleMenu logoutHandler={logoutHandler} />
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <div className="hidden md:flex items-center gap-4">
                  <Button
                    onClick={() => navigate("/auth/sign-in")}
                    variant="outline"
                  >
                    Log In
                  </Button>
                  <Button
                    onClick={() => navigate("/auth/join-for-free")}
                    variant="outline"
                  >
                    Join For Free
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
      <nav>
        {isOpen && (
          <div className="md:hidden bg-white border-t px-4 py-2 space-y-2 border-b shadow">
            <div className="flex flex-col ">
              <Link
                to="/get-started"
                onClick={() => setOpen(false)}
                className=" font-medium border rounded px-2 py-2 my-1"
              >
                Getting
              </Link>
              <Link
                to="/educator"
                onClick={() => setOpen(false)}
                className=" font-medium border rounded px-2 py-2 my-1"
              >
                Educator
              </Link>
              <Link
                to="/batch"
                onClick={() => setOpen(false)}
                className=" font-medium border rounded px-2 py-2 my-1"
              >
                Batch
              </Link>
              <Link
                to="/store"
                onClick={() => setOpen(false)}
                className=" font-medium border rounded px-2 py-2 my-1"
              >
                Store
              </Link>
              <Link
                to="/Subscription"
                onClick={() => setOpen(false)}
                className=" font-medium border rounded px-2 py-2 my-1"
              >
                Subscription
              </Link>
            </div>
            <div className="flex flex-col gap-3 pt-4">
              <Button
                onClick={() => navigate("/auth/sign-in")}
                variant="outline"
              >
                Log In
              </Button>
              <Button onClick={() => navigate("/auth/join-for-free")}>
                Join For Free
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default StudentNavbar;
