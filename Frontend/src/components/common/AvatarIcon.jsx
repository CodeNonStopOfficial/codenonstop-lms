import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { User } from "lucide-react";

const AvatarIcon = () => {
  return (
    <Avatar className="border border-blue-800">
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>
        <User size={20} className="text-blue-800" />
      </AvatarFallback>
    </Avatar>
  );
};

export default AvatarIcon;
