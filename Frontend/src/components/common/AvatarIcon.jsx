import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { User } from "lucide-react";

const AvatarIcon = ({user}) => {
  return (
    <Avatar className="border border-blue-800">
      <AvatarImage src={user?.photoUrl} />
      <AvatarFallback>
        <User size={20} className="text-blue-800" />
      </AvatarFallback>
    </Avatar>
  );
};

export default AvatarIcon;
