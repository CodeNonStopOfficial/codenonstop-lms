import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminProtectedRoute = () => {
  const { user } = useSelector((store) => store.auth);

  // Not logged in
  if (!user) {
    return <Navigate to="/" replace />;
  }

  // Not admin
  if (user.role !== "admin" || user.role !== "instractor") {
    return <Navigate to="/" replace />;
  }

  // Admin access granted
  return <Outlet />;
};

export default AdminProtectedRoute;