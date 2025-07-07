import React, { useState } from "react";
import { Link } from "react-router-dom";
import LeftSidebar from "../componant/LeftSidebar";
import Navigation from "../componant/Navigation";
import SerchBar from "../componant/SearchBar";
import Sidebar from "./Sidebar";
import SuggestiveSelect from "../componant/SuggestiveSelect";
import { useTheme } from "../context/ThemeContext";

function PathUnicorn10() {
  const [isActive, setActive] = useState(false);

  const ToggleEvent = () => {
    setActive((prevState) => !prevState);
  };
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    purpose: "",
    message: "",
  });
  const { theme } = useTheme(); // Assuming you have a ThemeContext to manage themes

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Form submitted successfully!");
    setFormData({
      fullName: "",
      email: "",
      phoneNumber: "",
      purpose: "",
      message: "",
    });
  };

   const purposeOptions = [
    { label: "Select Purpose", value: "" },
    { label: "Subscribe to Newsletter", value: "Subscribe to Newsletter" },
    { label: "Request a Demo", value: "Request a Demo" },
    { label: "General Inquiry", value: "General Inquiry" },
    { label: "Social Media", value: "Social Media" }
  ];

  return (
 <>
  <div id="main-wrapper" className={isActive ? "show-sidebar" : ""}>
    {/* Sidebar */}
    <LeftSidebar onButtonClick={ToggleEvent} />

    <div className="page-wrapper">
      <Navigation onButtonClick={ToggleEvent} />

      <div className="body-wrapper">
        <div className="container-fluid">
          {/* Header */}
          <div className="card bg-info-subtle shadow-none mb-4">
            <div className="card-body px-4 py-3">
              <div className="row align-items-center">
                <div className="col-md-9 col-12">
                  <h4 className="fw-semibold mb-2">MARKETING BUDGET PLAN</h4>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a
                          className="text-muted text-decoration-none"
                          href="../dark/index.html">
                          Home
                        </a>
                      </li>
                      <li className="breadcrumb-item active" aria-current="page">
                        MARKETING BUDGET PLAN
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

          {/* Main Section */}
          <div className="card p-3">
            <div className="row">
              {/* Sidebar (visible on all screens) */}
              <div
                className="col-lg-3 col-md-4 col-12 mb-3"
                style={{
                  backgroundColor: theme === "dark" ? "#223662" : "#F5F5F5",
                  color: theme === "dark" ? "#FFFFFF" : "#000000",
                }}>
                <Sidebar
                  selectedSection="Product Listing"
                  setSelectedSection={() => {}}
                />
              </div>

              {/* Form Section */}
              <div className="col-lg-9 col-md-8 col-12">
                <div className="d-flex justify-content-between align-items-center flex-wrap mb-4">
                  <h1 className="fw-bold fs-4">MARKETING BUDGET PLAN</h1>
                  <Link
                    to="/salesfunnel"
                    className="btn btn-outline-primary btn-sm">
                    ← Back
                  </Link>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6 col-12">
                      <label className="form-label">Full Name</label>
                      <input
                        className="form-control"
                        type="text"
                        name="fullName"
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="col-md-6 col-12">
                      <label className="form-label">Email</label>
                      <input
                        className="form-control"
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="col-md-6 col-12">
                      <label className="form-label">Phone Number</label>
                      <input
                        className="form-control"
                        type="text"
                        name="phoneNumber"
                        placeholder="Enter your phone number"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col-md-6 col-12">
                      <SuggestiveSelect
                        label="Purpose"
                        name="purpose"
                        value={formData.purpose}
                        onChange={handleInputChange}
                        options={purposeOptions}
                        theme={theme}
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label">Message</label>
                      <textarea
                        className="form-control"
                        name="message"
                        placeholder="Enter your message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows="4"
                      />
                    </div>
                    <div className="col-12 text-end">
                      <button
                        type="submit"
                        className="btn"
                        style={{
                          backgroundColor: theme === "dark" ? "#223662" : "#F5F5F5",
                          color: theme === "dark" ? "#FFF" : "#000",
                        }}>
                        Save
                      </button>
                    </div>
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

export default PathUnicorn10;
