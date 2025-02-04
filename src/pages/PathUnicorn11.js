import React, { useState } from "react";
import { Link } from "react-router-dom";
import LeftSidebar from "../componant/LeftSidebar";
import Navigation from "../componant/Navigation";
import SerchBar from "../componant/SearchBar";
import Sidebar from "./Sidebar";

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
        {/*  Sidebar End */}
        <div className="page-wrapper">
          <Navigation onButtonClick={ToggleEvent} />
          <div className="body-wrapper">
            <div className="container-fluid">
              {/* Header */}
              <div className="card bg-info-subtle shadow-none position-relative overflow-hidden mb-4">
                <div className="card-body px-4 py-3">
                  <div className="row align-items-center">
                    <div className="col-9">
                      <h4 className="fw-semibold mb-8">SALES FUNNEL</h4>
                      <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                          <li className="breadcrumb-item">
                            <a
                              className="text-muted text-decoration-none"
                              href="../dark/index.html">
                              Home
                            </a>
                          </li>
                          <li className="breadcrumb-item" aria-current="page">
                            SALES FUNNEL
                          </li>
                        </ol>
                      </nav>
                    </div>
                    <div className="col-3">
                      <div className="text-center mb-n5">
                        <img
                          src="./assets/assets/images/breadcrumb/ChatBc.png"
                          alt="modernize-img"
                          className="img-fluid mb-n4"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card body4">
                <div className="sales-funnel-container">
                  {/* Sidebar */}
                  <div className="sales-funnel-sidebar">
                    <Sidebar
                      selectedSection="Product Listing"
                      setSelectedSection={() => {}}
                    />
                  </div>

                  {/* Form Container */}
                  <div className="sales-funnel-form-container">
                    <div className="sales-funnel-form">
                      <h1
                        style={{
                          display: "flex",
                          justifyContent: "space-between", // Pushes elements to both ends
                          alignItems: "center", // Aligns items vertically
                          fontSize: "28px",
                          marginBottom: "20px",
                          width: "100%", // Ensures full width
                        }}>
                        <span
                          style={{
                            fontWeight: "bold", // Highlighted text styling
                            // color: "#223662", // Adjust the color as needed
                          }}>
                          Sales Funnel
                        </span>
                        <Link
                          to="/salesfunnel"
                          className="text-end btn btn-lg bg-default"
                          style={{
                            backgroundColor: "#223662",
                            color: "white",
                            padding: "10px 20px",
                            borderRadius: "5px",
                            textDecoration: "none",
                            fontSize: "16px",
                          }}>
                          ← Back
                        </Link>
                      </h1>

                      <form onSubmit={handleSubmit}>
                        {/* Full Name */}
                        <div>
                          <label>Full Name</label>
                          <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="Enter your name"
                          />
                          {errors.fullName && (
                            <span className="error-message">
                              {errors.fullName}
                            </span>
                          )}
                        </div>

                        {/* Email */}
                        <div>
                          <label>Email</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                          />
                          {errors.email && (
                            <span className="error-message">
                              {errors.email}
                            </span>
                          )}
                        </div>

                        {/* Phone Number */}
                        <div>
                          <label>Phone Number</label>
                          <input
                            type="text"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            placeholder="Enter your phone number"
                          />
                          {errors.phoneNumber && (
                            <span className="error-message">
                              {errors.phoneNumber}
                            </span>
                          )}
                        </div>

                        {/* Interest */}
                        <div>
                          <label>What are you interested in?</label>
                          <select
                            name="interest"
                            value={formData.interest}
                            onChange={handleChange}>
                            <option value="">Select</option>
                            <option value="demo">Request a Demo</option>
                            <option value="pricing">Learn about pricing</option>
                            <option value="consultation">
                              Schedule Free Consultation
                            </option>
                          </select>
                          {errors.interest && (
                            <span className="error-message">
                              {errors.interest}
                            </span>
                          )}
                        </div>

                        {/* Budget */}
                        <div>
                          <label>What is your budget?</label>
                          <select
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}>
                            <option value="">Select</option>
                            <option value="under-500">Under $500</option>
                            <option value="500-1000">$500 - $1000</option>
                            <option value="1000-2000">$1000 - $2000</option>
                          </select>
                          {errors.budget && (
                            <span className="error-message">
                              {errors.budget}
                            </span>
                          )}
                        </div>

                        {/* Additional Notes */}
                        <div>
                          <label>Tell us about your needs (optional)</label>
                          <textarea
                            name="notes"
                            value={formData.notes}
                            onChange={handleChange}
                            rows="5"></textarea>
                        </div>

                        {/* Save Button */}
                        <div className="form-row">
                          <button type="submit" className="save-button">
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
        </div>
        <SerchBar />
      </div>
      <div className="dark-transparent sidebartoggler" />
    </>
  );
}

export default PathUnicorn11;
