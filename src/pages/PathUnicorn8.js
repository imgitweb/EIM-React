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
    <LeftSidebar onButtonClick={ToggleEvent} />
    <div className="page-wrapper">
      <Navigation onButtonClick={ToggleEvent} />
      <div className="body-wrapper">
        <div className="container-fluid">
          {/* Header */}
          <div className="card bg-info-subtle shadow-none position-relative overflow-hidden mb-4">
            <div className="card-body px-4 py-3">
              <div className="row align-items-center">
                <div className="col-md-9 col-12">
                  <h4 className="fw-semibold mb-2">PRODUCT</h4>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a className="text-muted text-decoration-none" href="../dark/index.html">
                          Home
                        </a>
                      </li>
                      <li className="breadcrumb-item active">PRODUCT</li>
                    </ol>
                  </nav>
                </div>
                <div className="col-md-3 col-12 text-center mt-3 mt-md-0">
                  <img
                    src="./assets/assets/images/breadcrumb/ChatBc.png"
                    alt="modernize-img"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="card p-3">
            <div className="row">
              {/* Sidebar */}
              <div className="col-lg-3 col-md-4 mb-3">
                <div
                  className="p-3 h-100"
                  style={{
                    backgroundColor: theme === "dark" ? "#223662" : "#F5F5F5",
                    borderRadius: "8px",
                  }}
                >
                  <Sidebar selectedSection="client-persona" setSelectedSection={() => {}} />
                </div>
              </div>

              {/* Form Section */}
              <div className="col-lg-9 col-md-8">
                <div className="d-flex justify-content-between align-items-center flex-wrap mb-4">
                  <h2 className="fw-bold">CLIENT PERSONA</h2>
                  <Link
                    to="/salesfunnel"
                    className="btn btn-lg"
                    style={{
                      backgroundColor: theme === "dark" ? "#223662" : "#F5F5F5",
                      color: theme === "dark" ? "#FFFFFF" : "#000000",
                    }}
                  >
                    ← Back
                  </Link>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="row">
                    {/* Profile Name */}
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Profile Name</label>
                      <input
                        className="form-control"
                        type="text"
                        name="profileName"
                        placeholder="Enter Profile Name"
                        value={formData.profileName}
                        onChange={handleInputChange}
                      />
                      {errors.profileName && <p className="error">{errors.profileName}</p>}
                    </div>

                    {/* Product/Service */}
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Product / Service</label>
                      <input
                        className="form-control"
                        type="text"
                        name="productService"
                        placeholder="Enter Product / Service"
                        value={formData.productService}
                        onChange={handleInputChange}
                      />
                      {errors.productService && <p className="error">{errors.productService}</p>}
                    </div>

                    {/* Age Group */}
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Age Group</label>
                      <input
                        className="form-control"
                        type="text"
                        name="ageGroup"
                        placeholder="Enter Age Group"
                        value={formData.ageGroup}
                        onChange={handleInputChange}
                      />
                      {errors.ageGroup && <p className="error">{errors.ageGroup}</p>}
                    </div>

                    {/* Gender */}
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Gender</label>
                      <div className="d-flex gap-3">
                        {["Male", "Female", "Both"].map((gender) => (
                          <div key={gender}>
                            <label>
                              <input
                                type="radio"
                                name="gender"
                                value={gender}
                                checked={formData.gender === gender}
                                onChange={handleInputChange}
                              />{" "}
                              {gender}
                            </label>
                          </div>
                        ))}
                      </div>
                      {errors.gender && <p className="error">{errors.gender}</p>}
                    </div>

                    {/* Country */}
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Country</label>
                      <input
                        className="form-control"
                        type="text"
                        name="country"
                        placeholder="Enter Country"
                        value={formData.country}
                        onChange={handleInputChange}
                      />
                      {errors.country && <p className="error">{errors.country}</p>}
                    </div>

                    {/* State */}
                    <div className="col-md-6 mb-3">
                      <label className="form-label">State</label>
                      <input
                        className="form-control"
                        type="text"
                        name="state"
                        placeholder="Enter State"
                        value={formData.state}
                        onChange={handleInputChange}
                      />
                      {errors.state && <p className="error">{errors.state}</p>}
                    </div>

                    {/* Select Inputs */}
                    <div className="col-md-4 mb-3">
                      <SuggestiveSelect
                        label="Preferred Platforms"
                        name="preferredPlatform"
                        value={formData.preferredPlatform}
                        onChange={handleInputChange}
                        options={[
                          { label: "Social Media", value: "Social Media" },
                          { label: "Web Apps", value: "Web Apps" },
                          { label: "Mobile Apps", value: "Mobile Apps" },
                        ]}
                        theme={theme}
                        placeholder="Select or type platform"
                      />
                      {errors.preferredPlatform && <p className="error">{errors.preferredPlatform}</p>}
                    </div>

                    <div className="col-md-4 mb-3">
                      <SuggestiveSelect
                        label="Tech Savviness"
                        name="techSavviness"
                        value={formData.techSavviness}
                        onChange={handleInputChange}
                        options={[
                          { label: "Beginner", value: "Beginner" },
                          { label: "Intermediate", value: "Intermediate" },
                          { label: "Advanced", value: "Advanced" },
                        ]}
                        theme={theme}
                        placeholder="Select or type level"
                      />
                      {errors.techSavviness && <p className="error">{errors.techSavviness}</p>}
                    </div>

                    <div className="col-md-4 mb-3">
                      <SuggestiveSelect
                        label="Content Preferences"
                        name="contentPreference"
                        value={formData.contentPreference}
                        onChange={handleInputChange}
                        options={[
                          { label: "Text", value: "Text" },
                          { label: "Video", value: "Video" },
                          { label: "Interactive", value: "Interactive" },
                        ]}
                        theme={theme}
                        placeholder="Select or type content"
                      />
                      {errors.contentPreference && <p className="error">{errors.contentPreference}</p>}
                    </div>

                    {/* Submit Button */}
                    <div className="col-12 text-end mt-3">
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
