import { Button, buttonVariants } from "@/components/ui/button";
import React from "react";
import { useNavigate } from "react-router";

const AdminSessionCreate = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-full min-h-screen px-4 md:px-8 py-6">
      <div>
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <Button
              onClick = {()=>navigate("live-video")}
              className={buttonVariants({
                variant: "outline",
                className: "text-red-800 font-medium px-8 py-4",
              })}
            >
              Live Class
            </Button>
            <Button
              onClick = {()=>navigate("recorded-video")}
              className={buttonVariants({
                variant: "outline",
                className: "text-black",
              })}
            >
              Recode Video
            </Button>
          </div>
          <div>
            <Button
              onClick={() => navigate("create-lecture")}
              className={buttonVariants({
                variant: "outline",
                className: "text-black",
              })}
            >
              Create Lectue
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSessionCreate;
