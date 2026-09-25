import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  const port = import.meta.env.VITE_BACKEND

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const response = await axios.get(`${port}/admin/me`, {
           withCredentials: true,
        });

        setIsAdmin(true);
      } catch (error) {
        setIsAdmin(false);
      } finally {
        setLoading(false);
      }
    };

    checkAdmin();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAdmin,
        setIsAdmin,
        loading,
        port
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);