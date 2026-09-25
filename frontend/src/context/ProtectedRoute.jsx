import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { isAdmin, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-[#08000f] text-white flex items-center justify-center">
        Checking authentication...
      </div>
    );
  }

  if (!isAdmin) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
};

export default ProtectedRoute;




export const GuestRoute = ({ children }) => {
  const { isAdmin, loading } = useAuth();

  if (loading) {
    return <div>Checking authentication...</div>;
  }

  if (isAdmin) {
    return <Navigate to="/" replace />;
  }

  return children;
};