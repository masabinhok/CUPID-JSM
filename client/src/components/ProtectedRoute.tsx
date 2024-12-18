import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Loading from "./Loading";


export const ProtectedRoute = () => {
  const { isAuthenticated, isSessionChecked } = useAuth();

  if (!isSessionChecked) {
    return <Loading />;
  }

  if (!isAuthenticated) {
    // Redirect to login page if not authenticated
    return <Navigate to="/auth" replace />;
  }

  // Render the protected component if authenticated
  return <Outlet />
};
