import React, { useState } from "react";
import { Link } from "react-router-dom";
import LeftSidebar from "../componant/LeftSidebar";
import Navigation from "../componant/Navigation";
import SerchBar from "../componant/SearchBar";
import Sidebar from "./Sidebar";
import { useTheme } from "../context/ThemeContext";

function PathUnicorn11() {
  const [isActive, setActive] = useState(false);

  const ToggleEvent = () => {
    setActive((prevState) => !prevState);
  };

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    interest: "",
    budget: "",
    notes: "",
  });

  const [errors, setErrors] = useState({});
  const {theme} = useTheme();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Full Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(formData.email)
    ) {
      newErrors.email = "Enter a valid email address";
    }
    if (!formData.phoneNumber) {
      newErrors.phoneNumber = "Phone Number is required";
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Enter a valid 10-digit phone number";
    }
    if (!formData.interest) newErrors.interest = "Select an interest";
    if (!formData.budget) newErrors.budget = "Select a budget";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Submitted Successfully:", formData);
      alert("Form Submitted Successfully!");
      // Reset form after submission
      setFormData({
        fullName: "",
        email: "",
        phoneNumber: "",
        interest: "",
        budget: "",
        notes: "",
      });
      setErrors({});
    }
  };

  return (
<>
  <div id="main-wrapper" className={isActive ? "show-sidebar" : ""}>
    {/* Sidebar Start */}
    <LeftSidebar onButtonClick={ToggleEvent} />
    {/* Sidebar End */}

    <div className="page-wrapper">
      <Navigation onButtonClick={ToggleEvent} />

      <div className="body-wrapper">
        <div className="container-fluid">
          {/* Header */}
          <div className="card bg-info-subtle shadow-none mb-4">
            <div className="card-body px-4 py-3">
              <div className="row align-items-center">
                <div className="col-md-9 col-12">
                  <h4 className="fw-semibold mb-2">SALES FUNNEL</h4>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a className="text-muted text-decoration-none" href="../dark/index.html">
                          Home
                        </a>
                      </li>
                      <li className="breadcrumb-item active" aria-current="page">
                        SALES FUNNEL
                      </li>
                    </ol>
                  </nav>
                </div>
                <div className="col-md-3 col-12 text-center mt-3 mt-md-0">
                  <img
                    src="./assets/assets/images/breadcrumb/ChatBc.png"
                    alt="breadcrumb"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Sales Funnel Form Section */}
          <div className="card p-4">
            <div className="row">
              {/* Sidebar Section */}
              <div
                className="col-lg-3 col-md-4 col-12 mb-3"
                style={{
                  backgroundColor: theme === "dark" ? "#223662" : "#F5F5F5",
                  color: theme === "dark" ? "#FFFFFF" : "#000000",
                }}
              >
                <Sidebar selectedSection="Product Listing" setSelectedSection={() => {}} />
              </div>

              {/* Form Section */}
              <div className="col-lg-9 col-md-8 col-12">
                <div className="d-flex justify-content-between align-items-center flex-wrap mb-4">
                  <h1
                    className="fw-bold fs-4"
                    style={{ color: theme === "dark" ? "#FFFFFF" : "#223662" }}
                  >
                    SALES FUNNEL
                  </h1>
                  <Link to="/salesfunnel" className="btn btn-outline-primary btn-sm">
                    ← Back
                  </Link>
                </div>

                <form onSubmit={handleSubmit}>
                  {/* Full Name + Email */}
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label className="form-label" style={{ color: "#7C8FAC" }}>Full Name</label>
                      <input
                        className="form-control"
                        name="fullName"
                        placeholder="Enter your name"
                        value={formData.fullName}
                        onChange={handleChange}
                        style={{
                          backgroundColor: theme === "dark" ? "#202936" : "#FFFFFF",
                          color: theme === "dark" ? "#FFFFFF" : "#000000",
                        }}
                      />
                      {errors.fullName && <div className="text-danger">{errors.fullName}</div>}
                    </div>

                    <div className="col-md-6">
                      <label className="form-label" style={{ color: "#7C8FAC" }}>Email</label>
                      <input
                        className="form-control"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        style={{
                          backgroundColor: theme === "dark" ? "#202936" : "#FFFFFF",
                          color: theme === "dark" ? "#FFFFFF" : "#000000",
                        }}
                      />
                      {errors.email && <div className="text-danger">{errors.email}</div>}
                    </div>
                  </div>

                  {/* Phone + Interest */}
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label className="form-label" style={{ color: "#7C8FAC" }}>Phone Number</label>
                      <input
                        className="form-control"
                        name="phoneNumber"
                        placeholder="Enter your phone number"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        style={{
                          backgroundColor: theme === "dark" ? "#202936" : "#FFFFFF",
                          color: theme === "dark" ? "#FFFFFF" : "#000000",
                        }}
                      />
                      {errors.phoneNumber && <div className="text-danger">{errors.phoneNumber}</div>}
                    </div>

                    <div className="col-md-6">
                      <label className="form-label" style={{ color: "#7C8FAC" }}>What are you interested in?</label>
                      <select
                        className="form-control"
                        name="interest"
                        value={formData.interest}
                        onChange={handleChange}
                        style={{
                          backgroundColor: theme === "dark" ? "#202936" : "#FFFFFF",
                          color: theme === "dark" ? "#FFFFFF" : "#000000",
                        }}
                      >
                        <option value="">Select</option>
                        <option value="demo">Request a Demo</option>
                        <option value="pricing">Learn about pricing</option>
                        <option value="consultation">Schedule Free Consultation</option>
                      </select>
                      {errors.interest && <div className="text-danger">{errors.interest}</div>}
                    </div>
                  </div>

                  {/* Budget + Notes */}
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label className="form-label" style={{ color: "#7C8FAC" }}>What is your budget?</label>
                      <select
                        className="form-control"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        style={{
                          backgroundColor: theme === "dark" ? "#202936" : "#FFFFFF",
                          color: theme === "dark" ? "#FFFFFF" : "#000000",
                        }}
                      >
                        <option value="">Select</option>
                        <option value="under-500">Under $500</option>
                        <option value="500-1000">$500 - $1000</option>
                        <option value="1000-2000">$1000 - $2000</option>
                      </select>
                      {errors.budget && <div className="text-danger">{errors.budget}</div>}
                    </div>

                    <div className="col-md-6">
                      <label className="form-label" style={{ color: "#7C8FAC" }}>
                        Tell us about your needs (optional)
                      </label>
                      <textarea
                        className="form-control"
                        name="notes"
                        rows="4"
                        value={formData.notes}
                        onChange={handleChange}
                        style={{
                          backgroundColor: theme === "dark" ? "#202936" : "#FFFFFF",
                          color: theme === "dark" ? "#FFFFFF" : "#000000",
                        }}
                      />
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="text-end">
                    <button
                      type="submit"
                      className="btn"
                      style={{
                        backgroundColor: theme === "dark" ? "#223662" : "#F5F5F5",
                        color: theme === "dark" ? "#FFFFFF" : "#000000",
                      }}
                    >
                      Save
                    </button>
                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <SerchBar />
  </div>

  <div className="dark-transparent sidebartoggler" />
</>



  );
}

export default PathUnicorn11;
