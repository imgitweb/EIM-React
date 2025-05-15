import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove token from localStorage
    localStorage.removeItem("token");

    // Redirect to the login page
    navigate("/"); // Redirect to the login page or home page
  };

  React.useEffect(() => {
    handleLogout(); // Automatically logout when this component is rendered
  }, []);

  return (
    <div>
      <h2>You have been logged out!</h2>
      <p>Redirecting to login page...</p>
    </div>
  );
};

export default Logout;
