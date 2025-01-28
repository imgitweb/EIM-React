import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import API_BASE_URL from "./../componant/config";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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

      // Simulate a loading delay
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Send POST request with proper headers and body format
      const response = await axios.post(
        `${API_BASE_URL}/api/auth/login`,
        { email_id: email, password }, // Corrected the key for email
        { headers: { "Content-Type": "application/json" } }
      );

      // Handle successful response
      if (response.status === 200) {
        localStorage.setItem("token", response.data.user.id);
        localStorage.setItem("user_id", response.data.user.id); // Store user ID
        alert("Login Successful");
        // Redirect to the dashboard or other page
        window.location.href = "/dashboard";
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

                    {error && (
                      <div className="alert alert-danger" role="alert">
                        {error}
                      </div>
                    )}

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
                        to="../dark/authentication-forgot-password.html"
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
