import React, { useEffect, useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useUpdateUserMutation } from "@/features/api/authApi";
import { toast } from "sonner";
import { useSelector } from "react-redux";
import { redirect } from "react-router";

const EditProfilePage = () => {
  const {user} = useSelector((store)=>store.auth);
  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    address: "",
    bio: "",
  });
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [updateUser, { data, isLoading, isError, error, isSuccess}] =
    useUpdateUserMutation();

useEffect(() => {
  if (user) {
    setUserData({
      name: user.name || "",
      phone: user.phone || "",
      address: user.address || "",
      bio: user.bio || "",
    });

    setProfilePhoto(user.photoUrl || "");
  }
}, [user]);
  const onChangeFileHandle = (e) => {
    const file = e.target.files?.[0];
    if (file) setProfilePhoto(file);
  };
  const onChangeHandle = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("name", userData.name);
    formData.append("phone", userData.phone);
    formData.append("address", userData.address);
    formData.append("bio", userData.bio);

    if (profilePhoto) {
      formData.append("profilePhoto", profilePhoto);
    }
    try {
      await updateUser(formData);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(()=>{
       if(isSuccess && data){
         toast.success(data.message)
       }
       if(isError && error){
         toast.error(error.message)
       }
  },[isSuccess,data ,isError, error])

  return (
    <section>
      <div>
        <form className="space-y-2">
          <div className="flex flex-col space-y-1 px-2">
            <Label>Full Name:</Label>
            <Input
              type="text"
              name="name"
              value={userData.name}
              onChange={onChangeHandle}
              placeholder="Enter Your Name:"
              required
            />
          </div>

          <div className="flex flex-col space-y-1 px-2">
            <Label>Phone Number:</Label>
            <Input
              type="text"
              name="phone"
              value={userData.phone}
              onChange={onChangeHandle}
              placeholder="Enter Your Phone:"
              required
            />
          </div>
          <div className="flex flex-col space-y-1 px-2">
            <Label>Address:</Label>
            <Input
              type="text"
              value={userData.address}
              onChange={onChangeHandle}
              name="address"
              placeholder="Enter Your Name:"
              required
            />
          </div>
          <div className="flex flex-col space-y-1 px-2">
            <Label>Bio:</Label>
            <textarea
              name="bio"
              value={userData.bio}
              onChange={onChangeHandle}
              placeholder="Enter your bio..."
              className="border p-2 rounded"
              required
            />
          </div>

          <div className="flex flex-col space-y-1 px-2">
            <Label>Profile Image:</Label>
            <Input
              type="file"
              name="protoUrl"
              onChange={onChangeFileHandle}
              accept="image/*"
              placeholder={profilePhoto}
              required
            />
          </div>
          <div className="mt-4">
            <Button
              disabled={isLoading}
              type="button"
              onClick={handleSubmitForm}
              className="w-full cursor-pointer"
            >
              {isLoading ? "Updating..." : "Update"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EditProfilePage;
