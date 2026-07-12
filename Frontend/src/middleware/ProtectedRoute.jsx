import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = () => {
  const { user , isAuthenticated } = useSelector((store) => store.auth);

  if (!user && !isAuthenticated) {
    return <Navigate to="/auth/sign-in" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;