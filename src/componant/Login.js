import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import API_BASE_URL from "./../componant/config";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Check for existing authentication from the first app
  useEffect(() => {
    // Check if we have auth data from the first application
    const userId = localStorage.getItem("user_id");
    const authToken = localStorage.getItem("auth_token");

    if (userId && authToken) {
      // We have auth data, validate it before auto-login
      validateExistingAuth(userId, authToken);
    }
  }, []);

  // Validate existing auth data
  const validateExistingAuth = async (userId, token) => {
    try {
      setIsLoading(true);

      // Optional: Make a validation request to your backend
      const response = await axios.post(
        `${API_BASE_URL}/api/auth/validate-token`,
        { user_id: userId, token },
        { headers: { "Content-Type": "application/json" } }
      );

      // If validation is successful, proceed to dashboard
      if (response.status === 200) {
        // Navigate to dashboard
        navigate("/dashboard");
      }
    } catch (err) {
      console.error("Auth validation error:", err);
      // If validation fails, clear localStorage and let user login manually
      // localStorage.clear(); - Uncomment to clear all local storage on failure

      // Only clear auth-related items
      localStorage.removeItem("user_id");
      localStorage.removeItem("auth_token");
      localStorage.removeItem("refresh_token");

      setError("Your session has expired. Please login again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // Clear any previous errors
    setError("");

    // Ensure email and password are not empty
    if (!email || !password) {
      setError("Email and password are required");
      return;
    }

    try {
      setIsLoading(true); // Start loading spinner

      // Send POST request with proper headers and body format
      const response = await axios.post(
        `${API_BASE_URL}/api/auth/login`,
        { email_id: email, password }, // Key for email
        { headers: { "Content-Type": "application/json" } }
      );

      // Handle successful response
      if (response.status === 200) {
        // Store authentication data
        localStorage.setItem(
          "token",
          response.data.token || response.data.user.id
        );
        localStorage.setItem("user_id", response.data.user.id);
        localStorage.setItem("user_data", JSON.stringify(response.data.user));

        // Alert success
        alert("Login Successful");

        // Redirect to the dashboard
        navigate("/dashboard");
      }
    } catch (err) {
      // Check if the error has a response and display the error message
      if (err.response) {
        console.error("Error response:", err.response);
        setError(
          err.response.data.message || "An error occurred. Please try again."
        );
      } else {
        // Handle any network or other errors
        console.error("Error:", err);
        setError("Network error or the server is down.");
      }
    } finally {
      setIsLoading(false); // Stop loading spinner
    }
  };

  return (
    <div id="main-wrapper" className="auth-customizer-none">
      <div className="position-relative overflow-hidden radial-gradient min-vh-100 w-100">
        <div className="position-relative z-index-5">
          <div className="row">
            <div className="col-xl-7 col-xxl-8">
              <Link
                to="/#"
                className="text-nowrap logo-img d-block px-4 py-9 w-100"
              >
                <img
                  src="./assets/assets/images/logos/logo-light.png"
                  className="light-logo"
                  alt="Logo-light"
                  style={{ width: "40px" }}
                />
              </Link>
              <div className="d-none d-xl-flex align-items-center justify-content-center h-n80">
                <img
                  src="./assets/assets/images/backgrounds/login-security.svg"
                  alt="modernize-img"
                  className="img-fluid"
                  width={500}
                />
              </div>
            </div>
            <div className="col-xl-5 col-xxl-4">
              <div className="authentication-login min-vh-100 bg-body row justify-content-center align-items-center p-4">
                <div className="auth-max-width col-sm-8 col-md-6 col-xl-7 px-4">
                  <h2 className="mb-1 fs-7 fw-bolder">Welcome to EIM</h2>
                  <p className="mb-7">Your Admin Dashboard</p>

                  {isLoading && !error && (
                    <div className="alert alert-info" role="alert">
                      Checking your authentication status...
                    </div>
                  )}

                  {error && (
                    <div className="alert alert-danger" role="alert">
                      {error}
                    </div>
                  )}

                  <form onSubmit={handleLogin}>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        Username
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        value={email}
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={isLoading} // Disable input during loading
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="form-label"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        value={password}
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                        disabled={isLoading} // Disable input during loading
                      />
                    </div>

                    <div className="d-flex align-items-center justify-content-between mb-4">
                      <div className="form-check">
                        <input
                          className="form-check-input primary"
                          type="checkbox"
                          defaultValue
                          id="flexCheckChecked"
                          defaultChecked
                          disabled={isLoading} // Disable checkbox during loading
                        />
                        <label
                          className="form-check-label text-dark fs-3"
                          htmlFor="flexCheckChecked"
                        >
                          Remember this Device
                        </label>
                      </div>
                      <Link
                        className="text-primary fw-medium fs-3"
                        to="/forgot-password"
                      >
                        Forgot Password ?
                      </Link>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary w-100 py-8 mb-4 rounded-2"
                      disabled={isLoading} // Disable button during loading
                    >
                      {isLoading ? (
                        <span
                          className="spinner-border spinner-border-sm me-2"
                          role="status"
                        />
                      ) : (
                        "Sign In"
                      )}
                      {isLoading ? "Logging in..." : ""}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
