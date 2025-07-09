import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SerchBar from "../../componant/SearchBar";
import Navigation from "../../componant/Navigation";
import SecondSidebar from "../../componant/SecondSidebar";

const techOptions = ["AI", "IoT", "SaaS", "Blockchain", "AR/VR"];

const SubmitIdeaPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    pitch: "",
    problem: "",
    solution: "",
    audience: "",
    tech: [],
    links: "",
    file: null,
  });
  const [isActive, setActive] = useState(false);
    const [showModal, setShowModal] = useState(false); // 🔔 Modal State


  const navigate = useNavigate();
  const ToggleEvent = () => {
    setActive((prevState) => !prevState);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, file: e.target.files[0] }));
  };

  const toggleTech = (tech) => {
    setFormData((prev) => {
      const exists = prev.tech.includes(tech);
      return {
        ...prev,
        tech: exists ? prev.tech.filter((t) => t !== tech) : [...prev.tech, tech],
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Idea:", formData);
     setShowModal(true); 
    // navigate("/idea-submitted"); // Redirect to the submission confirmation page
  };
    const handleCloseModal = () => {
    setShowModal(false);
    navigate("/dashboard");
  };

  return (
    <>
      <div id="main-wrapper" className={isActive ? "show-sidebar" : ""}>
        <SecondSidebar onButtonClick={ToggleEvent} />

        <div className="page-wrapper bg-white">
          <Navigation onButtonClick={ToggleEvent} />
          <div className="body-wrapper px-4">
            <div className="p-4 border rounded shadow-sm" style={{ background: "#f8f9fa" }}>
              <h5 className="mb-4" style={{ fontWeight: 600, color: "#1f2937" }}>
                🚀 Submit Your Startup Idea
              </h5>

              <form onSubmit={handleSubmit}>
                {/* Responsive 2-column row */}
                <div className="row">
                  <div className="mb-3 col-md-6">
                    <label className="form-label fw-medium">Idea Title</label>
                    <input
                      type="text"
                      name="title"
                      className="form-control"
                      placeholder="Give your idea a title"
                      value={formData.title}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3 col-md-6">
                    <label className="form-label fw-medium">Elevator Pitch</label>
                    <input
                      type="text"
                      name="pitch"
                      className="form-control"
                      placeholder="1–2 line summary"
                      value={formData.pitch}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label fw-medium">Problem Statement</label>
                  <textarea
                    name="problem"
                    rows="3"
                    className="form-control"
                    value={formData.problem}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-medium">Solution Description</label>
                  <textarea
                    name="solution"
                    rows="3"
                    className="form-control"
                    value={formData.solution}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-medium">Target Audience</label>
                  <select
                    name="audience"
                    className="form-select"
                    value={formData.audience}
                    onChange={handleChange}
                    required
                  >
                    <option value="">-- Select --</option>
                    <option value="Students">Students</option>
                    <option value="MSMEs">MSMEs</option>
                    <option value="Farmers">Farmers</option>
                    <option value="Startups">Startups</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label fw-medium">Technology Involved (optional)</label>
                  <div className="d-flex flex-wrap gap-2">
                    {techOptions.map((tech, i) => {
                      const selected = formData.tech.includes(tech);
                      return (
                        <button
                          type="button"
                          key={i}
                          onClick={() => toggleTech(tech)}
                          className="btn btn-sm"
                          style={{
                            backgroundColor: selected ? "#e1e9f7" : "#ffffff",
                            borderColor: selected ? "#4dd0e1" : "#d6dee3",
                            color: selected ? "#2d3436" : "#444",
                            fontWeight: "500",
                            fontSize: "0.8rem",
                            borderRadius: "6px",
                            border: "1px solid",
                          }}
                        >
                          {tech}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label fw-medium">Relevant Links (optional)</label>
                  <input
                    type="url"
                    name="links"
                    className="form-control"
                    placeholder="https://your-demo.com"
                    value={formData.links}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label fw-medium">Upload Supporting Docs</label>
                  <input
                    type="file"
                    className="form-control"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.ppt,.docx,.pptx"
                  />
                </div>

                <button
                  type="submit"
                  className="btn"
                  style={{
                    backgroundColor: "#6c5ce7",
                    color: "#fff",
                    padding: "8px 18px",
                    fontSize: "0.9rem",
                    fontWeight: "500",
                    borderRadius: "6px",
                    border: "none",
                  }}
                >
                  Submit Idea
                </button>
              </form>
            </div>
          </div>
        </div>
        <SerchBar />
      </div>
      <div className="dark-transparent sidebartoggler" />
      {showModal && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          style={{
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content text-center">
              <div className="modal-header">
                <h5 className="modal-title">🎉 Idea Submitted!</h5>
                <button type="button" className="btn-close" onClick={handleCloseModal}></button>
              </div>
              <div className="modal-body">
                <p>Thank you! Your idea has been successfully submitted.</p>
              </div>
              <div className="modal-footer">
                <button onClick={handleCloseModal} className="btn btn-primary">
                  Go to Dashboard
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </>
  );
};

export default SubmitIdeaPage;
