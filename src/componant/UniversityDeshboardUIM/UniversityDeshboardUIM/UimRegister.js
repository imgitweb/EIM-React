import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faCheck,
  faPaperPlane,
  faListCheck,
  faBullseye,
  faMapMarkedAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const UimRegister = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);

  const [formData, setFormData] = useState({
    sectors: [],
    focus: "",
    market: "",
    interest: "",
    skills: "",
  });

  const sectorsList = [
    "HealthTech",
    "FinTech",
    "AgriTech",
    "EdTech",
    "CleanTech",
    "EV & Mobility",
    "AI/ML",
    "DeepTech",
    "MSME Enablers",
    "SaaS",
    "SpaceTech",
    "Web3",
  ];

  const focusList = [
    "I want to solve a consumer problem",
    "I want to build for MSMEs/businesses",
    "I want to localize a global product",
    "I want to use a trending technology",
  ];

  const marketList = ["Tier 1 India", "Tier 2/3 India", "Rural/Bharat Market"];
  const stepIcons = [faListCheck, faBullseye, faMapMarkedAlt, faUser];
  const stepTitles = ["Sectors", "Focus", "Market", "You"];
  const stepHeadings = [
    "Choose Sector",
    "Define Your Focus",
    "Select Market",
    "Tell Us About You",
  ];

  const toggleSector = (sector) => {
    setFormData((prev) => ({
      ...prev,
      sectors: prev.sectors.includes(sector)
        ? prev.sectors.filter((s) => s !== sector)
        : [...prev.sectors, sector],
    }));
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validateStep = () => {
    switch (step) {
      case 0:
        return formData.sectors.length > 0;
      case 1:
        return formData.focus.trim() !== "";
      case 2:
        return formData.market.trim() !== "";
      case 3:
        return formData.interest.trim() !== "" && formData.skills.trim() !== "";
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (!validateStep()) {
      alert("Please complete this step before continuing.");
      return;
    }
    setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setStep((prev) => prev - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateStep()) {
      alert("Please fill all required fields before submitting.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/uim/register",
        formData
      );

      if (response.status === 200) {
        alert("Submitted successfully!");
        navigate("/uim-step2UnicornIdea", { state: formData });
      } else {
        alert("Submission failed: " + response.data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      if (error.response) {
        alert("Server Error: " + error.response.data.message);
      } else {
        alert("Network Error or Server Not Running");
      }
    }
  };

  return (
    <div
      className="container py-2"
      style={{ fontFamily: "Inter", minHeight: "80vh", overflow: "hidden" }}
    >
      <div className="row justify-content-center mt-2">
        <div className="col-12 col-lg-10">
          <div
            className="card shadow-lg rounded-4 p-4 w-100"
            style={{ background: "#fffffff0" }}
          >
            <h2 className="text-center text-primary fw-bold mb-3">
              India’s Future Unicorn Orbit
            </h2>

            {/* Stepper */}
            <div
              className="d-flex justify-content-between align-items-center position-relative mb-5 flex-wrap"
              style={{ fontFamily: "Poppins" }}
            >
              {stepTitles.map((label, index) => (
                <div
                  className="text-center position-relative flex-fill mb-3 mb-sm-0"
                  key={index}
                >
                  <div
                    className={`rounded-circle mx-auto d-flex align-items-center justify-content-center shadow-sm ${
                      step >= index
                        ? "bg-primary text-white"
                        : "bg-light text-muted"
                    }`}
                    style={{
                      width: 45,
                      height: 45,
                      zIndex: 2,
                      position: "relative",
                      transition: "all 0.3s ease-in-out",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={step > index ? faCheck : stepIcons[index]}
                    />
                  </div>
                  <div
                    className={`small mt-2 ${
                      step >= index ? "text-primary fw-bold" : "text-muted"
                    }`}
                  >
                    {label}
                  </div>
                  {index < stepTitles.length - 1 && (
                    <div
                      className="position-absolute top-50 start-50"
                      style={{
                        width: "100%",
                        height: "2px",
                        background: step > index ? "#0d6efd" : "#ced4da",
                        zIndex: 1,
                        transform: "translateY(-500%)",
                      }}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              <div
                className="p-4 rounded-3 shadow-sm bg-light"
                style={{
                  minHeight: "300px",
                  transition: "all 0.3s ease-in-out",
                }}
              >
                <h5 className="mb-4 fw-bold text-dark">{stepHeadings[step]}</h5>

                {/* Step 0 - Sector */}
                {step === 0 && (
                  <div className="row">
                    {sectorsList.map((sector, idx) => (
                      <div className="col-sm-6 col-md-4 mb-2" key={idx}>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id={sector}
                            checked={formData.sectors.includes(sector)}
                            onChange={() => toggleSector(sector)}
                          />
                          <label className="form-check-label" htmlFor={sector}>
                            {sector}
                          </label>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Step 1 - Focus */}
                {step === 1 &&
                  focusList.map((item, idx) => (
                    <div className="form-check mb-2" key={idx}>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="focus"
                        id={`focus-${idx}`}
                        value={item}
                        checked={formData.focus === item}
                        onChange={handleChange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor={`focus-${idx}`}
                      >
                        {item}
                      </label>
                    </div>
                  ))}

                {/* Step 2 - Market */}
                {step === 2 &&
                  marketList.map((item, idx) => (
                    <div className="form-check mb-2" key={idx}>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="market"
                        id={`market-${idx}`}
                        value={item}
                        checked={formData.market === item}
                        onChange={handleChange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor={`market-${idx}`}
                      >
                        {item}
                      </label>
                    </div>
                  ))}

                {/* Step 3 - About You */}
                {step === 3 && (
                  <>
                    <div className="mb-2">
                      <label className="form-label fw-semibold">
                        What interests you the most?
                      </label>
                      <textarea
                        className="form-control"
                        rows="4"
                        name="interest"
                        value={formData.interest}
                        onChange={handleChange}
                        placeholder="E.g., solving education problems..."
                        style={{ resize: "none" }}
                      />
                    </div>
                    <div className="mb-2">
                      <label className="form-label fw-semibold">
                        Your skills or domain knowledge
                      </label>
                      <textarea
                        className="form-control"
                        rows="4"
                        name="skills"
                        value={formData.skills}
                        onChange={handleChange}
                        placeholder="E.g., React.js, Supply Chain..."
                        style={{ resize: "none" }}
                      />
                    </div>
                  </>
                )}
              </div>

              {/* Navigation Buttons */}
              <div
                className="d-flex justify-content-between align-items-center mt-2 px-2"
                style={{ minHeight: "50px" }}
              >
                <button
                  type="button"
                  className="btn btn-outline-secondary px-4"
                  onClick={handleBack}
                  disabled={step === 0}
                >
                  <FontAwesomeIcon icon={faArrowLeft} className="me-2" /> Back
                </button>

                {step < 3 ? (
                  <button
                    type="button"
                    className="btn btn-primary px-4"
                    onClick={handleNext}
                  >
                    Next{" "}
                    <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
                  </button>
                ) : (
                  <button type="submit" className="btn btn-success px-4">
                    <FontAwesomeIcon icon={faPaperPlane} className="me-2" />{" "}
                    Submit
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UimRegister;
