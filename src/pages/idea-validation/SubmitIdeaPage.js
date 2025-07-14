import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SerchBar from "../../componant/SearchBar";
import Navigation from "../../componant/Navigation";
import SecondSidebar from "../../componant/SecondSidebar";
import TechMultiSelect from "../../componant/NewDashboard/TechMultiSelect";

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
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const ToggleEvent = () => setActive((prev) => !prev);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, file: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Idea:", formData);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    navigate("/dashboard");
  };

  return (
    <>
       <div className="p-4 border rounded shadow-sm mb-3" style={{ background: "#f8f9fa" }}>
              <h4 className="mb-4 fw-bold text-dark">Submit Your Startup Idea</h4>

              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Idea Title</label>
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

                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Elevator Pitch</label>
                    <input
                      type="text"
                      name="pitch"
                      className="form-control"
                      placeholder="1–2 line summary"
                      value={formData.pitch}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Target Audience</label>
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

             <div className="col-md-6 mb-3 position-relative">
  <label className="form-label fw-semibold">Technology Involved</label>
  <TechMultiSelect
    options={techOptions}
    selectedOptions={formData.tech}
    onChange={(updatedList) =>
      setFormData((prev) => ({ ...prev, tech: updatedList }))
    }
  />
</div>


                  <div className="col-12">
                    <label className="form-label fw-semibold">Problem Statement</label>
                    <textarea
                      name="problem"
                      rows="3"
                      className="form-control"
                      value={formData.problem}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-12">
                    <label className="form-label fw-semibold">Solution Description</label>
                    <textarea
                      name="solution"
                      rows="3"
                      className="form-control"
                      value={formData.solution}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Relevant Links</label>
                    <input
                      type="url"
                      name="links"
                      className="form-control"
                      placeholder="https://your-demo.com"
                      value={formData.links}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Upload Supporting Docs</label>
                    <input
                      type="file"
                      className="form-control"
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.ppt,.docx,.pptx"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="btn px-4 py-2 fw-semibold"
                    style={{
                      backgroundColor: "#6c5ce7",
                      color: "#fff",
                      borderRadius: "6px",
                      fontSize: "0.95rem",
                    }}
                  >
                    Submit Idea
                  </button>
                </div>
              </form>
            </div>

      <div className="dark-transparent sidebartoggler" />

      {showModal && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
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
