import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const UserProtectedRoute = () => {
  const { user} = useSelector((store) => store.auth);

  if (user) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default UserProtectedRoute;