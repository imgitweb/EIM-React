import React, { useState } from "react";
import { Link } from "react-router-dom";
import LeftSidebar from "../componant/LeftSidebar";
import Navigation from "../componant/Navigation";
import SerchBar from "../componant/SearchBar";
import Sidebar from "./Sidebar";
import SuggestiveSelect from "../componant/SuggestiveSelect";
import { useTheme } from "../context/ThemeContext";

function PathUnicorn8() {
  const [isActive, setActive] = useState(false);

  const ToggleEvent = () => {
    setActive((prevState) => !prevState);
  };
  const [formData, setFormData] = useState({
    profileName: "",
    productService: "",
    ageGroup: "",
    gender: "",
    country: "",
    state: "",
    preferredPlatform: "",
    techSavviness: "",
    contentPreference: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let formErrors = {};

    if (!formData.profileName)
      formErrors.profileName = "Profile Name is required.";
    if (!formData.productService)
      formErrors.productService = "Product/Service is required.";
    if (!formData.ageGroup) formErrors.ageGroup = "Age Group is required.";
    if (!formData.gender) formErrors.gender = "Gender is required.";
    if (!formData.country) formErrors.country = "Country is required.";
    if (!formData.state) formErrors.state = "State is required.";
    if (!formData.preferredPlatform)
      formErrors.preferredPlatform = "Preferred Platform is required.";
    if (!formData.techSavviness)
      formErrors.techSavviness = "Tech Savviness is required.";
    if (!formData.contentPreference)
      formErrors.contentPreference = "Content Preference is required.";

    setErrors(formErrors);

    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      alert("Form submitted successfully!");
      console.log("Form Data:", formData);
    } else {
      alert("Please fix the errors before submitting.");
    }
  };
  const { theme } = useTheme (); // Assuming you have a ThemeContext to manage themes

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
                      <h4 className="fw-semibold mb-8">PRODUCT </h4>
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
                            PRODUCT
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
              <div className="body2 card">
                <div className="client-persona-container ">
                  <div className="sidebar" 
                  style={{
                    backgroundColor: theme === "dark" ? "#223662" : "#F5F5F5",
                    // color: "white",
                  }}
                  >
                    <Sidebar
                      selectedSection="client-persona"
                      setSelectedSection={() => { }}
                    />
                  </div>
                  <div className="form-container">
                    <h1
                      style={{
                        display: "flex",
                        justifyContent: "space-between", // Pushes elements to both ends
                        alignItems: "center", // Aligns items vertically
                        fontSize: "28px",
                        marginBottom: "20px",
                        marginTop: "10px",

                        width: "100%", // Ensures full width
                      }}>
                      <span
                        style={{
                          fontWeight: "bold", // Highlighted text styling
                          // color: "#223662", // Adjust the color as needed
                        }}>
                        CLIENT PERSONA
                      </span>
                      <Link
                        to="/salesfunnel"
                        className="text-end btn btn-lg bg-default"
                        style={{
                          backgroundColor:  theme === "dark" ? "#223662" : "#F5F5F5",
                          color: theme === "dark" ? "#FFFFFF" : "#000000",
                          padding: "10px 20px",
                          borderRadius: "5px",
                          textDecoration: "none",
                          fontSize: "16px",
                          marginRight: "20px",
                        }}>
                        ← Back
                      </Link>
                    </h1>

                    <form onSubmit={handleSubmit} className="form-content ">
                      {/* Name & Role Section */}
                      <div className="form-row">
                        <div className="form-group">
                          <label style={{
                          color: theme === "dark" ? "#7C8FAC" : "#7C8FAC",
                         }}>Profile Name</label>
                          <input
                            className="form-control"
                            type="text"
                            name="profileName"
                            placeholder="Enter Profile Name"
                            value={formData.profileName}
                            onChange={handleInputChange}
                          />
                          {errors.profileName && (
                            <p className="error">{errors.profileName}</p>
                          )}
                        </div>
                        <div className="form-group">
                          <label style={{
                          color: theme === "dark" ? "#7C8FAC" : "#7C8FAC",
                         }}>Select Product / Service</label>
                          <input
                            className="form-control"
                            type="text"
                            name="productService"
                            placeholder="Enter Product / Service"
                            value={formData.productService}
                            onChange={handleInputChange}
                          />
                          {errors.productService && (
                            <p className="error">{errors.productService}</p>
                          )}
                        </div>
                      </div>

                      {/* Demographics Section */}
                      <div className="form-row">
                        <div className="form-group"
                        
                        >
                          <label 
                           style={{
                          color: theme === "dark" ? "#7C8FAC" : "#7C8FAC",
                         }}>Age Group</label>
                          <input
                            className="form-control"
                            type="text"
                            name="ageGroup"
                            placeholder="Enter Age Group"
                            value={formData.ageGroup}
                            onChange={handleInputChange}
                          />
                          {errors.ageGroup && (
                            <p className="error">{errors.ageGroup}</p>
                          )}
                        </div>
                        <div className="form-group">
                          <label style={{
                          color: theme === "dark" ? "#7C8FAC" : "#7C8FAC",
                         }}>Gender</label>
                          <div className="radio-group">
                            <label
                            style={{
                          color: theme === "dark" ? "#7C8FAC" : "#7C8FAC",
                         }}>
                              <input
                                type="radio"
                                name="gender"
                                value="Male"
                                checked={formData.gender === "Male"}
                                onChange={handleInputChange}
                              />
                              Male
                            </label>
                            <label style={{
                          color: theme === "dark" ? "#7C8FAC" : "#7C8FAC",
                         }}>
                              <input
                                type="radio"
                                name="gender"
                                value="Female"
                                checked={formData.gender === "Female"}
                                onChange={handleInputChange}
                              />
                              Female
                            </label>
                            <label style={{
                          color: theme === "dark" ? "#7C8FAC" : "#7C8FAC",
                         }}>
                              <input
                                type="radio"
                                name="gender"
                                value="Both"
                                checked={formData.gender === "Both"}
                                onChange={handleInputChange}
                              />
                              Both
                            </label>
                          </div>
                          {errors.gender && (
                            <p className="error">{errors.gender}</p>
                          )}
                        </div>
                      </div>

                      {/* Location Section */}
                      <div className="form-row">
                        <div className="form-group">
                          <label style={{
                          color: theme === "dark" ? "#7C8FAC" : "#7C8FAC",
                         }}>Country</label>
                          <input
                            className="form-control"
                            type="text"
                            name="country"
                            placeholder="Enter Country"
                            value={formData.country}
                            onChange={handleInputChange}
                          />
                          {errors.country && (
                            <p className="error">{errors.country}</p>
                          )}
                        </div>
                        <div className="form-group">
                          <label style={{
                          color: theme === "dark" ? "#7C8FAC" : "#7C8FAC",
                         }}>State</label>
                          <input
                            className="form-control"
                            type="text"
                            name="state"
                            placeholder="Enter State"
                            value={formData.state}
                            onChange={handleInputChange}
                          />
                          {errors.state && (
                            <p className="error">{errors.state}</p>
                          )}
                        </div>
                      </div>

                      {/* Behaviors and Preferences Section */}
                      <div className="form-row">
                        <div className="form-group">
                          <SuggestiveSelect
                            label="Preferred Platforms"
                            name="preferredPlatform"
                            value={formData.preferredPlatform}
                            onChange={handleInputChange}
                            options={[
                              { label: "Social Media", value: "Social Media" },
                              { label: "Web Apps", value: "Web Apps" },
                              { label: "Mobile Apps", value: "Mobile Apps" }
                            ]}
                            theme={theme}
                            placeholder="Select or type platform"
                          />
                          {errors.preferredPlatform && (
                            <p className="error">{errors.preferredPlatform}</p>
                          )}
                        </div>
                        <div className="form-group">
                          <SuggestiveSelect
                            label="Tech Savviness"
                            name="techSavviness"
                            value={formData.techSavviness}
                            onChange={handleInputChange}
                            options={[
                              { label: "Beginner", value: "Beginner" },
                              { label: "Intermediate", value: "Intermediate" },
                              { label: "Advanced", value: "Advanced" }
                            ]}
                            theme={theme}
                            placeholder="Select or type level"
                          />
                          {errors.techSavviness && (
                            <p className="error">{errors.techSavviness}</p>
                          )}
                        </div>


                        <div className="form-group">
                          <SuggestiveSelect
                            label="Content Preferences"
                            name="contentPreference"
                            value={formData.contentPreference}
                            onChange={handleInputChange}
                            options={[
                              { label: "Text", value: "Text" },
                              { label: "Video", value: "Video" },
                              { label: "Interactive", value: "Interactive" }
                            ]}
                            theme={theme}
                            placeholder="Select or type content style"
                          />
                          {errors.contentPreference && (
                            <p className="error">{errors.contentPreference}</p>
                          )}
                        </div>
                      </div>

                      {/* Save Button */}
                      <div className="form-row">
                        <button type="submit"
                        style={{
                          backgroundColor:  theme === "dark" ? "#223662" : "#F5F5F5",
                          color: theme === "dark" ? "#FFFFFF" : "#000000",
                        }}
                        className="save-button">
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

export default PathUnicorn8;
