import React, { useState } from "react";
import LeftSidebar from "../componant/LeftSidebar";
import Navigation from "../componant/Navigation";
import SerchBar from "../componant/SearchBar";

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
              <div className="card">
                <div
                  style={{
                    display: "flex",
                    // backgroundColor: "#1a001a",
                    color: "#fff",
                    fontFamily: "Arial, sans-serif",
                  }}>
                  {/* Sidebar */}
                  <div
                    style={{
                      width: "20%",
                      backgroundColor: "#000",
                      padding: "20px",
                      display: "flex",
                      alignItems: "center",
                    }}>
                    <h2
                      style={{
                        color: "#fff",
                        textAlign: "center",
                      }}>
                      Sales Funnel
                    </h2>
                  </div>

                  {/* Main Form */}
                  <div
                    style={{
                      flex: 1,
                      padding: "20px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}>
                    <div
                      style={{
                        width: "800px",
                        borderRadius: "8px",
                        padding: "20px",
                      }}>
                      <h1
                        style={{
                          color: "#ff9900",
                          textAlign: "center",
                          marginBottom: "20px",
                        }}>
                        SALES <span style={{ color: "#fff" }}>FUNNEL</span>
                      </h1>

                      <form onSubmit={handleSubmit} className="card p-5">
                        {/* Full Name */}
                        <div style={{ marginBottom: "15px" }}>
                          <label>Full Name</label>
                          <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            style={{
                              width: "100%",
                              padding: "10px",
                              marginTop: "5px",
                              borderRadius: "5px",
                              border: "none",
                            }}
                          />
                          {errors.fullName && (
                            <span style={{ color: "red", fontSize: "12px" }}>
                              {errors.fullName}
                            </span>
                          )}
                        </div>

                        {/* Email */}
                        <div style={{ marginBottom: "15px" }}>
                          <label>Email</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            style={{
                              width: "100%",
                              padding: "10px",
                              marginTop: "5px",
                              borderRadius: "5px",
                              border: "none",
                            }}
                          />
                          {errors.email && (
                            <span style={{ color: "red", fontSize: "12px" }}>
                              {errors.email}
                            </span>
                          )}
                        </div>

                        {/* Phone Number */}
                        <div style={{ marginBottom: "15px" }}>
                          <label>Phone Number</label>
                          <input
                            type="text"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            placeholder="Enter your phone number"
                            style={{
                              width: "100%",
                              padding: "10px",
                              marginTop: "5px",
                              borderRadius: "5px",
                              border: "none",
                            }}
                          />
                          {errors.phoneNumber && (
                            <span style={{ color: "red", fontSize: "12px" }}>
                              {errors.phoneNumber}
                            </span>
                          )}
                        </div>

                        {/* Interest */}
                        <div style={{ marginBottom: "15px" }}>
                          <label>What are you interested in?</label>
                          <select
                            name="interest"
                            value={formData.interest}
                            onChange={handleChange}
                            style={{
                              width: "100%",
                              padding: "10px",
                              marginTop: "5px",
                              borderRadius: "5px",
                              border: "none",
                            }}>
                            <option value="">Select</option>
                            <option value="demo">Request a Demo</option>
                            <option value="pricing">Learn about pricing</option>
                            <option value="consultation">
                              Schedule Free Consultation
                            </option>
                          </select>
                          {errors.interest && (
                            <span style={{ color: "red", fontSize: "12px" }}>
                              {errors.interest}
                            </span>
                          )}
                        </div>

                        {/* Budget */}
                        <div style={{ marginBottom: "15px" }}>
                          <label>What is your budget?</label>
                          <select
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            style={{
                              width: "100%",
                              padding: "10px",
                              marginTop: "5px",
                              borderRadius: "5px",
                              border: "none",
                            }}>
                            <option value="">Select</option>
                            <option value="under-500">Under $500</option>
                            <option value="500-1000">$500 - $1000</option>
                            <option value="1000-2000">$1000 - $2000</option>
                          </select>
                          {errors.budget && (
                            <span style={{ color: "red", fontSize: "12px" }}>
                              {errors.budget}
                            </span>
                          )}
                        </div>

                        {/* Additional Notes */}
                        <div style={{ marginBottom: "15px" }}>
                          <label>Tell us about your needs (optional)</label>
                          <textarea
                            name="notes"
                            value={formData.notes}
                            onChange={handleChange}
                            placeholder="Enter additional details"
                            rows="5"
                            style={{
                              width: "100%",
                              padding: "10px",
                              marginTop: "5px",
                              borderRadius: "5px",
                              border: "none",
                            }}></textarea>
                        </div>

                        {/* Save Button */}
                        <button
                          type="submit"
                          style={{
                            backgroundColor: "#ffcc00",
                            color: "#000",
                            padding: "10px 20px",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer",
                            fontWeight: "bold",
                            display: "block",
                            margin: "0 auto",
                          }}>
                          Save
                        </button>
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
