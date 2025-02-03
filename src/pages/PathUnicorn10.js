import React, { useState } from "react";
import { Link } from "react-router-dom";
import LeftSidebar from "../componant/LeftSidebar";
import Navigation from "../componant/Navigation";
import SerchBar from "../componant/SearchBar";

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
                      <h4 className="fw-semibold mb-8">
                        MARKETING BUDGET PLAN
                      </h4>
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
                            MARKETING BUDGET PLAN
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
              <div className="card body3">
                <div className="marketing-budget-container">
                  <div className="sidebar ">
                    <h2>Sales Funnel</h2>
                  </div>
                  <div className="form-container">
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
                        MARKETING BUDGET PLAN
                      </span>
                      <Link
                        to="/path-unicorn"
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
                    <form onSubmit={handleSubmit} className="form-content">
                      <div className="form-row">
                        <div className="form-group">
                          <label>Full Name</label>
                          <input
                            type="text"
                            name="fullName"
                            placeholder="Enter your full name"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label>Email</label>
                          <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label>Phone Number</label>
                          <input
                            type="text"
                            name="phoneNumber"
                            placeholder="Enter your phone number"
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="form-group">
                          <label>Purpose</label>
                          <select
                            name="purpose"
                            value={formData.purpose}
                            onChange={handleInputChange}
                            required>
                            <option value="">Select Purpose</option>
                            <option value="Subscribe to Newsletter">
                              Subscribe to Newsletter
                            </option>
                            <option value="Request a Demo">
                              Request a Demo
                            </option>
                            <option value="General Inquiry">
                              General Inquiry
                            </option>
                            <option value="Social Media">Social Media</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group message-group">
                          <label>Message</label>
                          <textarea
                            name="message"
                            placeholder="Enter your message"
                            value={formData.message}
                            onChange={handleInputChange}></textarea>
                        </div>
                      </div>
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
        <SerchBar />
      </div>
      <div className="dark-transparent sidebartoggler" />
    </>
  );
}

export default PathUnicorn10;
