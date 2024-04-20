import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const isAuthenticated = false; // get this value from your auth state
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/discover");
    }
  }, [isAuthenticated, navigate]);

  return !isAuthenticated ? children : null;
};

export default PublicRoute;
