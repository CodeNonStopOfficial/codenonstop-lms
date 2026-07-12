import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminProtectedRoute = () => {
  const { user } = useSelector((store) => store.auth);

  if (!user) {
    return <Navigate to="/" replace />;
  }

  if (user.role !== "admin" && user.role !== "instructor") {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default AdminProtectedRoute;