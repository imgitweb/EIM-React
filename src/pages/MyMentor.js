import React, { useState, useEffect } from "react";
import LeftSidebar from "../componant/LeftSidebar";
import Navigation from "../componant/Navigation";
import SerchBar from "../componant/SearchBar";
import axios from "axios";
import API_URI from "../componant/config";

const MentorList = () => {
  const [isActive, setActive] = useState(false);
  const [activeTab, setActiveTab] = useState("tech");
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [mentors, setMentors] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const mentorsPerPage = 6;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${API_URI}/api/mentors/get-mentor`);
        setMentors(res.data.data);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    setCurrentPage(1); // Reset to page 1 when tab changes
  }, [activeTab]);

  const filteredMentors = mentors.filter(
    (mentor) => mentor.category.toLowerCase() === activeTab
  );

  const indexOfLastMentor = currentPage * mentorsPerPage;
  const indexOfFirstMentor = indexOfLastMentor - mentorsPerPage;
  const currentMentors = filteredMentors.slice(indexOfFirstMentor, indexOfLastMentor);
  const totalPages = Math.ceil(filteredMentors.length / mentorsPerPage);

  const TabButton = ({ category, label }) => (
    <li className="nav-item flex-shrink-0">
      <button
        onClick={() => setActiveTab(category)}
        className={`nav-link note-link d-flex align-items-center justify-content-center px-2 px-md-3 py-2 text-nowrap ${
          activeTab === category ? "active" : ""
        }`}>
        <span className="fw-medium text-truncate d-inline-block" style={{ maxWidth: "100px" }}>
          {label}
        </span>
      </button>
    </li>
  );

  const MentorProfileModal = ({ mentor, onClose }) => {
    if (!mentor) return null;

    return (
      <div className="modal fade show" style={{ display: "block" }} tabIndex={-1}>
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content border-0">
            <div className="modal-header bg-primary text-white">
              <h5 className="modal-title">Mentor Profile</h5>
              <button type="button" className="btn-close btn-close-white" onClick={onClose} />
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-4 text-center">
                  <div className="rounded-circle bg-light p-4 mx-auto mb-3" style={{ width: "fit-content" }}>
                    <i className="ti ti-user fs-1" />
                  </div>
                  <h4>{mentor.name}</h4>
                  <p className="text-muted">{mentor.expertise}</p>
                  <div className="mb-3">
                    <span className="badge bg-success fs-2 me-2">
                      <i className="ti ti-star-filled me-1" />
                      {mentor.rating}
                    </span>
                    <span className="badge bg-primary fs-2">
                      <i className="ti ti-users me-1" />
                      {mentor.totalMentees} mentees
                    </span>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="mb-4"><h6 className="fw-bold">About</h6><p>{mentor.description}</p></div>
                  <div className="mb-4"><h6 className="fw-bold">Education</h6><p>{mentor.education}</p></div>
                  <div className="mb-4"><h6 className="fw-bold">Experience</h6><p>{mentor.experience}</p></div>
                  <div className="mb-4">
                    <h6 className="fw-bold">Skills</h6>
                    <div className="d-flex flex-wrap gap-2">
                      {mentor.skills.map((skill, index) => (
                        <span key={index} className="badge bg-light-subtle text-dark">{skill}</span>
                      ))}
                    </div>
                  </div>
                  <div className="mb-4">
                    <h6 className="fw-bold">Languages</h6>
                    <div className="d-flex gap-2">
                      {mentor.languages.map((language, index) => (
                        <span key={index} className="badge bg-info-subtle text-dark">{language}</span>
                      ))}
                    </div>
                  </div>
                  <div className="mb-4">
                    <h6 className="fw-bold">Availability</h6>
                    <p>{mentor.availability}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
              <button type="button" className="btn btn-primary">Request Mentorship</button>
            </div>
          </div>
        </div>
        <div className="modal-backdrop fade show"></div>
      </div>
    );
  };

  return (
    <div id="main-wrapper" className={isActive ? "show-sidebar" : ""}>
      <LeftSidebar onButtonClick={() => setActive(!isActive)} />

      <div className="page-wrapper">
        <Navigation onButtonClick={() => setActive(!isActive)} />

        <div className="body-wrapper">
          <div className="container-fluid">
            <div className="card bg-info-subtle shadow-none position-relative overflow-hidden mb-4">
              <div className="card-body px-4 py-3">
                <div className="row align-items-center">
                  <div className="col-12 col-md-9">
                    <h4 className="fw-semibold mb-2">Mentors</h4>
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                          <a className="text-muted text-decoration-none" href="#">Home</a>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">Mentors</li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <ul className="nav nav-pills p-3 mb-3 rounded align-items-center card flex-row overflow-auto flex-nowrap">
              <TabButton category="tech" label="Technical Mentor" />
              <TabButton category="non-technical" label="Non Technical Mentor" />
              <TabButton category="subject-expert" label="Subject Expert Mentor" />
            </ul>

            {/* Mentor Cards */}
            {loading ? (
              <div className="text-center my-5">Loading mentors...</div>
            ) : (
              <div className="tab-content">
                <div className="mentor-grid row">
                  {currentMentors.map((mentor) => (
                    <div key={mentor.id} className="col-12 col-sm-6 col-lg-4 mb-4">
                      <div className="card h-100">
                        <div className="card-body d-flex flex-column">
                          <div className="d-flex align-items-center mb-3">
                            <div className="rounded-circle bg-light p-3 me-3">
                              <i className="ti ti-user fs-4" />
                            </div>
                            <div>
                              <h5 className="card-title mb-0">{mentor.name}</h5>
                              <small className="text-muted">{mentor.expertise}</small>
                            </div>
                          </div>
                          <div className="mb-3">
                            <span className="badge bg-primary me-2">Experience: {mentor.experience}</span>
                            <span className="badge bg-success">
                              <i className="ti ti-star-filled me-1" />{mentor.rating}
                            </span>
                          </div>
                          <p className="card-text flex-grow-1">{mentor.description}</p>
                          <div className="d-flex flex-column flex-sm-row gap-2 justify-content-between mt-3">
                            <button className="btn btn-outline-primary w-100" onClick={() => setSelectedMentor(mentor)}>
                              View Profile
                            </button>
                            <button className="btn btn-primary w-100">Connect</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
{totalPages > 1 && (
  <div className="d-flex w-full mb-3 justify-content-between align-items-center gap-3 mt-4 flex-wrap">
    <button
      className="btn btn-outline-primary"
      disabled={currentPage === 1}
      onClick={() => setCurrentPage(currentPage - 1)}
    >
      Previous
    </button>

    <span className="fw-semibold">
      Page {currentPage} / {totalPages}
    </span>

    <button
      className="btn btn-outline-primary"
      disabled={currentPage === totalPages}
      onClick={() => setCurrentPage(currentPage + 1)}
    >
      Next
    </button>
  </div>
)}

              </div>
            )}

            {/* Mentor Modal */}
            {selectedMentor && (
              <MentorProfileModal mentor={selectedMentor} onClose={() => setSelectedMentor(null)} />
            )}
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <SerchBar />
    </div>
  );
};

export default MentorList;
