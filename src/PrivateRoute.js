import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    // If no token is found, redirect to login page
    return <Navigate to="/" />;
  }

  // If token exists, render the children (protected page)
  return children;
};

export default PrivateRoute;
