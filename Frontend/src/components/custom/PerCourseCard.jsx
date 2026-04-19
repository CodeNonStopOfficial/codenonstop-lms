import React from "react";
import { Button } from "../ui/button";
import { StarIcon } from "lucide-react";
import { useNavigate } from "react-router";

const PerCourseCard = () => {
  const navigate = useNavigate();
  return (
    <div className="group w-full max-w-sm rounded-xl border bg-white p-3 transition-all hover:shadow-lg">
      {/* Image Section */}
      <div className="relative overflow-hidden rounded-lg bg-[#FFF4E8]">
        <img
          src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/00atxywtfxvd/6gKoZ1AVu36CMpmu3N3BZw/51e59b6ed5e46b50bfb98c738b3b2329/data-analyst-hero_2x.png?auto=format%2Ccompress&dpr=2&w=720"
          className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        <span className="absolute left-2 top-2 rounded-md bg-gray-100 px-2 py-0.5 text-xs font-semibold">
          Intermediate
        </span>
      </div>

      {/* Content */}
      <div className="space-y-2 px-1 pt-3">
        {/* Category & Rating */}
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground font-medium">
            Web Development
          </span>

          <span className="flex items-center gap-1">
            <StarIcon size={14} className="fill-yellow-400 text-yellow-400" />
            <span className="font-semibold">4.5</span>
          </span>
        </div>

        {/* Title */}
        <h2 className="line-clamp-2 text-lg font-bold">
          Web Development 2027 || Avatar Batch-1
        </h2>

        {/* Description */}
        <p className="text-sm text-muted-foreground line-clamp-2">
          Learn modern web development from basics to advanced with real-world
          projects.
        </p>

        {/* Actions */}
        <div className="flex items-center justify-between pt-2 ">
          <Button
            variant="outline"
            onClick={() => navigate("courseid")}
            className="cursor-pointer"
            size="sm"
          >
            View Course
          </Button>

          <span className="rounded-md border px-3 py-1 text-sm font-semibold">
            ₹599
          </span>
        </div>
      </div>
    </div>
  );
};

export default PerCourseCard;
