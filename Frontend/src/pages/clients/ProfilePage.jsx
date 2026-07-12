import Calendar from "@/components/content/Calendar";
import ProfileContent from "@/components/content/ProfileContent";
import ProfileMenuData from "@/components/content/ProfileMenuData";
import { useLoadUserQuery } from "@/features/api/authApi";
import React, { useEffect } from "react";
import { toast } from "sonner";

const ProfilePage = () => {
  const { data: userData, isLoading, isError, refetch } = useLoadUserQuery();
  useEffect(() => {
    if (userData) {
      toast.success("Profile Get Successfully ✅");
    }
    if (isError) {
      toast.error("Profile Get Error⚠️");
    }
    refetch();
  }, [isError, refetch, userData]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }


  return (
    <section className="max-w-full min-h-screen px-2 md:px-8 py-5 ">
      <div className="flex flex-col md:flex-row gap-3 justify-between px-2 md:px-4 py-5 border rounded-2xl">
        <div className="w-full">
          <ProfileContent user={userData} />
        </div>
        <div className="w-full">
          <div className="border rounded-2xl">
            <ProfileMenuData user = {userData} />
          </div>
          <Calendar user = {userData} />
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
