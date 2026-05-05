import { BadgeIndianRupee } from "lucide-react";
import { Bookmark } from "lucide-react";
import { GraduationCap } from "lucide-react";




const ProfileMenuData = ({user}) => {
  return (
    <div className="w-full px-4 py-4">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">

        {/* Card 1 */}
        <div className="flex flex-col items-center justify-center text-center border rounded-2xl py-4 shadow-sm hover:shadow-md transition">
          <GraduationCap size={22} className=" text-blue-600" />
          <span className="text-lg font-semibold">{(user?.enrolledCourses || []).length}</span>
          <span className="text-sm text-gray-500">Enrolled</span>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center justify-center text-center border rounded-2xl py-4 shadow-sm hover:shadow-md transition">
          <Bookmark size={22} className="text-green-600" fill={(user?.wishlist || []).length === 0 ? "white" : "yellow"} />
          <span className="text-lg font-semibold">{(user?.wishlist || []).length}</span>
          <span className="text-sm text-gray-500">Wishlist</span>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center justify-center text-center border rounded-2xl py-4 shadow-sm hover:shadow-md transition">
          <BadgeIndianRupee size={22} className=" text-purple-600" />
          <span className="text-lg font-semibold">₹{user?.earnings}</span>
          <span className="text-sm text-gray-500">Balance</span>
        </div>

        <div className="flex flex-col items-center justify-center text-center border rounded-2xl py-4 shadow-sm hover:shadow-md transition">
          <BadgeIndianRupee size={22} className=" text-purple-600" />
          <span className="text-lg font-semibold">₹{user?.subscription?.plan.charAt(0).toUpperCase() + user?.subscription?.plan?.slice(1)}</span>
          <span className="text-sm text-gray-500">Subscription</span>
        </div>


      </div>
    </div>
  );
};

export default ProfileMenuData;