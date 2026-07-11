import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { User } from "lucide-react";
import { Link } from "react-router";
import { buttonVariants } from "../ui/button";
import { Edit } from "lucide-react";
import { BadgeCheck } from "lucide-react";
import { UserCheck } from "lucide-react";
import { Mail } from "lucide-react";
import { CheckCircle } from "lucide-react";
import { Phone } from "lucide-react";
import { MapPinHouseIcon } from "lucide-react";
import EditProfilePage from "./EditProfilePage";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

const ProfileContent = ({ user }) => {
  return (
    <div className="">
      <div className="w-full border px-4 py-5 rounded-2xl gap-2">
        <div className="w-full flex md:gap-2 gap-1">
          <div className="w-fit space-y-2">
            <Avatar className="w-22 h-22 border-2 border-blue-800 bg-gray-100">
              <AvatarImage src={user?.photoUrl?.url} />
              <AvatarFallback>
                <User size={53} className="text-blue-800" />
              </AvatarFallback>
            </Avatar>
            <div className="w-full item-center">
              <Popover>
                <PopoverTrigger asChild>
                  <Link
                    className={buttonVariants({
                      variant: "outline",
                    })}
                  >
                    <Edit size={8} className="text-blue-900 text-lg" /> Edit
                    Profile
                  </Link>
                </PopoverTrigger>
                <PopoverContent className="max-w-full ml-14">
                  <EditProfilePage />
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <div>
            <h1 className="font-bold text-2xl">{user?.name}</h1>
            <div className="font-semibold">
              <span>Portal Access</span>
              <div className="flex items-center gap-1 border rounded-full w-fit px-2 bg-linear-to-r from-blue-400 to-green-600">
                <BadgeCheck size={16} fill="green" className="text-green-100" />
                <span className="text-sm text-black-800">Verified</span>
              </div>
            </div>
            <h4 className="border-b border-black font-semibold">
              Autheticated:{" "}
              {user?.role?.charAt(0).toUpperCase() + user?.role?.slice(1)}
            </h4>
          </div>
        </div>
      </div>
      <div className="w-full border px-4 py-5 rounded-2xl gap-2">
        <div>
          <div>
            <h1 className="font-bold">Profile Details</h1>
          </div>
          <div className="mt-2 grid grid-cols-2 md:grid-cols-2 space-y-2">
            {/* NAME  */}
            <div className="flex gap-2 items-center">
              <User />
              <div className="space-y-0">
                <span className="text-muted-foreground font-semibold">
                  Full Name
                </span>
                <h1 className="text-md font-semibold text-black">
                  {user?.name}
                </h1>
              </div>
            </div>
            {/* USERNAME  */}
            <div className="flex gap-2 items-center">
              <UserCheck />
              <div className="space-y-0">
                <span className="text-muted-foreground font-semibold">
                  Username
                </span>
                <h1 className="text-md font-semibold text-black">
                  {user?.name?.split(" ").slice(1).join(" ")}
                </h1>
              </div>
            </div>
            {/* PHONE  */}
            <div className="flex gap-2 items-center">
              <Phone size={22} />
              <div className="space-y-0">
                <span className="text-muted-foreground font-semibold">
                  Phone Number
                </span>
                <h1 className="text-md font-semibold text-black">{user?.phone || "9999999999"}</h1>
              </div>
            </div>
            {/* ROLE  */}
            <div className="flex gap-2 items-center">
              <CheckCircle size={22} />
              <div className="space-y-0">
                <span className="text-muted-foreground font-semibold">
                  Role
                </span>
                <h1 className="text-md font-semibold text-black">
                  {user?.role?.charAt(0).toUpperCase() + user?.role?.slice(1)}
                </h1>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* EMAIL / */}
            <div className="flex gap-2 items-center">
              <Mail size={22} />
              <div className="space-y-0">
                <span className="text-muted-foreground font-semibold">
                  Email
                </span>
                <h1 className="text-md font-semibold text-black">
                  {user?.email.charAt(0).toUpperCase() + user?.email.slice(1)}
                </h1>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <MapPinHouseIcon size={22} />
              <div className="space-y-0">
                <span className="text-muted-foreground font-semibold">
                  Address
                </span>
                <h1 className="text-md font-semibold text-black">
                  {user?.address?.split(" ")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ")}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileContent;
