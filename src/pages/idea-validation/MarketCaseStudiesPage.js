import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SecondSidebar from "../../componant/SecondSidebar";
import Navigation from "../../componant/Navigation";
import SerchBar from "../../componant/SearchBar";

const MarketCaseStudiesPage = () => {
  const navigate = useNavigate();
  const [isActive, setActive] = useState(false);
  const ToggleEvent = () => setActive(!isActive);

  const [input, setInput] = useState({
    idea: "",
    problem: "",
    solution: "",
    sector: "",
  });

  const [output, setOutput] = useState(null);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const generateCaseStudies = () => {
    const caseStudies = [
      {
        name: "AgriBot",
        country: "India",
        model: "AI-powered crop diagnosis for small farmers",
        funding: "$2M Seed Round",
        learning: "Pivoted from drone delivery to SaaS after user interviews",
      },
      {
        name: "HealthSync",
        country: "USA",
        model: "Remote patient monitoring with wearable integration",
        funding: "$8M Series A",
        learning: "Learned demand was higher in rural clinics than urban areas",
      },
    ];

    setOutput({
      cases: caseStudies,
      insight:
        "These startups show that niche focus, tech validation, and pivots based on early user feedback are critical in early-stage execution.",
    });
  };

  return (
    <>
      <div id="main-wrapper" className={isActive ? "show-sidebar" : ""}>
        <SecondSidebar onButtonClick={ToggleEvent} />
        <div className="page-wrapper bg-white">
          <Navigation onButtonClick={ToggleEvent} />
          <div className="body-wrapper px-3 px-md-4">
            <div className="p-3 p-md-4 border rounded shadow-sm bg-light">
              <h4 className="mb-4 fw-bold text-dark">Similar Market Case Studies</h4>

              {/* Input Section */}
              <div className="row g-3 mb-4">
                <div className="col-md-6">
                  <label className="form-label">Select Idea</label>
                  <select
                    className="form-select"
                    name="idea"
                    value={input.idea}
                    onChange={handleChange}
                  >
                    <option value="">-- Select from dashboard --</option>
                    <option value="Smart Farming AI">Smart Farming AI</option>
                    <option value="Health Tracking App">Health Tracking App</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Sector</label>
                  <input
                    type="text"
                    className="form-control"
                    name="sector"
                    placeholder="e.g. AgriTech, HealthTech"
                    value={input.sector}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Problem</label>
                  <input
                    type="text"
                    className="form-control"
                    name="problem"
                    placeholder="What problem does it solve?"
                    value={input.problem}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Solution</label>
                  <input
                    type="text"
                    className="form-control"
                    name="solution"
                    placeholder="What is the proposed solution?"
                    value={input.solution}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <button className="btn btn-success" onClick={generateCaseStudies}>
                Generate Case Studies
              </button>

              {/* Output Section */}
              {output && (
                <div className="mt-5">
                  <h5 className="mb-3 fw-semibold text-secondary">
                    AI Suggested Startups
                  </h5>

                  {/* Case Study Table */}
                  <div className="table-responsive">
                    <table className="table table-bordered table-hover bg-white shadow-sm">
                      <thead className="table-light">
                        <tr>
                          <th>Startup Name</th>
                          <th>Country</th>
                          <th>Model Overview</th>
                          <th>Funding Raised</th>
                          <th>Pivot / Learnings</th>
                        </tr>
                      </thead>
                      <tbody>
                        {output.cases.map((c, idx) => (
                          <tr key={idx}>
                            <td>{c.name}</td>
                            <td>{c.country}</td>
                            <td>{c.model}</td>
                            <td>{c.funding}</td>
                            <td>{c.learning}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* AI Insight Box */}
                  <div className="mt-4 p-3 bg-white border rounded shadow-sm">
                    <h6 className="fw-bold mb-2">What can you learn from these cases?</h6>
                    <p className="mb-0 text-muted">{output.insight}</p>
                  </div>

                  {/* Navigation Buttons */}
                  <div className="mt-4 d-flex flex-wrap gap-2">
                    <button
                      className="btn btn-outline-secondary"
                      onClick={() => navigate("/feedback-risk")}
                    >
                      ← Back to Risk Analysis
                    </button>
                    <button
                      className="btn btn-primary"
                      onClick={() => navigate("/submit-idea")}
                    >
                      Compare With My Idea →
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <SerchBar />
      </div>
      <div className="dark-transparent sidebartoggler" />
    </>
  );
};

export default MarketCaseStudiesPage;
