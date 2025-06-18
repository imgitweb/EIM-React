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
  const [loading, setLoading] = useState("");

  // const mentors = [
  //   {
  //     id: 1,
  //     name: "John Smith",
  //     expertise: "Full Stack Development",
  //     experience: "10 years",
  //     description: "Expert in React, Node.js, and Cloud Architecture",
  //     category: "tech",
  //     education: "MS in Computer Science",
  //     availability: "Mon-Fri, 9 AM - 5 PM",
  //     languages: ["English", "Spanish"],
  //     skills: ["React", "Node.js", "AWS", "Python", "MongoDB"],
  //     rating: 4.8,
  //     totalMentees: 45,
  //   },
  //   {
  //     id: 2,
  //     name: "Sarah Johnson",
  //     expertise: "Leadership & Management",
  //     experience: "8 years",
  //     description:
  //       "Specialized in team management and professional development",
  //     category: "non-technical",
  //     education: "MBA in Business Administration",
  //     availability: "Tue-Sat, 10 AM - 6 PM",
  //     languages: ["English", "French"],
  //     skills: [
  //       "Leadership",
  //       "Team Management",
  //       "Strategic Planning",
  //       "Communication",
  //     ],
  //     rating: 4.9,
  //     totalMentees: 38,
  //   },
  //   {
  //     id: 3,
  //     name: "Dr. Michael Chen",
  //     expertise: "Computer Science",
  //     experience: "15 years",
  //     description:
  //       "PhD in Computer Science, specializing in AI and Machine Learning",
  //     category: "subject-expert",
  //     education: "PhD in Computer Science",
  //     availability: "Mon-Thu, 2 PM - 8 PM",
  //     languages: ["English", "Mandarin"],
  //     skills: ["Machine Learning", "AI", "Data Science", "Research Methods"],
  //     rating: 4.7,
  //     totalMentees: 52,
  //   },
  // ];
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${API_URI}/mentors/get-mentor`);
        setMentors(res.data.data);
        console.log("res", res.data);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filterMentors = () =>
    mentors.filter((mentor) => mentor.category.toLowerCase() === activeTab);

  const TabButton = ({ category, label }) => (
    <li className="nav-item">
      <button
        onClick={() => setActiveTab(category)}
        className={`nav-link gap-6 note-link d-flex align-items-center justify-content-center px-3 px-md-3 ${
          activeTab === category ? "active" : ""
        }`}>
        <span className="d-none d-md-block fw-medium">{label}</span>
      </button>
    </li>
  );

  const MentorProfileModal = ({ mentor, onClose }) => {
    if (!mentor) return null;

    return (
      <div
        className="modal fade show"
        style={{ display: "block" }}
        tabIndex={-1}>
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content border-0">
            <div className="modal-header bg-primary text-white">
              <h5 className="modal-title">Mentor Profile</h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                onClick={onClose}
              />
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-4 text-center">
                  <div
                    className="rounded-circle bg-light p-4 mx-auto mb-3"
                    style={{ width: "fit-content" }}>
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
                  <div className="mb-4">
                    <h6 className="fw-bold">About</h6>
                    <p>{mentor.description}</p>
                  </div>
                  <div className="mb-4">
                    <h6 className="fw-bold">Education</h6>
                    <p>{mentor.education}</p>
                  </div>
                  <div className="mb-4">
                    <h6 className="fw-bold">Experience</h6>
                    <p>{mentor.experience}</p>
                  </div>
                  <div className="mb-4">
                    <h6 className="fw-bold">Skills</h6>
                    <div className="d-flex flex-wrap gap-2">
                      {mentor.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="badge bg-light-subtle text-dark">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mb-4">
                    <h6 className="fw-bold">Languages</h6>
                    <div className="d-flex gap-2">
                      {mentor.languages.map((language, index) => (
                        <span
                          key={index}
                          className="badge bg-info-subtle text-dark">
                          {language}
                        </span>
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
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onClose}>
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Request Mentorship
              </button>
            </div>
          </div>
        </div>
        <div className="modal-backdrop fade hide"></div>
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
            {/* Header Card */}
            <div className="card bg-info-subtle shadow-none position-relative overflow-hidden mb-4">
              <div className="card-body px-4 py-3">
                <div className="row align-items-center">
                  <div className="col-9">
                    <h4 className="fw-semibold mb-8">Mentors</h4>
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                          <a
                            className="text-muted text-decoration-none"
                            href="#">
                            Home
                          </a>
                        </li>
                        <li className="breadcrumb-item">Mentors</li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs Navigation */}
            <ul className="nav nav-pills p-3 mb-3 rounded align-items-center card flex-row">
              <TabButton category="tech" label="Technical Mentor" />
              <TabButton
                category="non-technical"
                label="Non Technical Mentor"
              />
              <TabButton
                category="subject-expert"
                label="Subject Expert Mentor"
              />
            </ul>

            {/* Mentors Grid */}
            <div className="tab-content">
              <div className="mentor-grid row">
                {filterMentors().map((mentor) => (
                  <div key={mentor.id} className="col-md-4 mb-4">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex align-items-center mb-3">
                          <div className="rounded-circle bg-light p-3 me-3">
                            <i className="ti ti-user fs-4" />
                          </div>
                          <div>
                            <h5 className="card-title mb-0">{mentor.name}</h5>
                            <small className="text-muted">
                              {mentor.expertise}
                            </small>
                          </div>
                        </div>
                        <div className="mb-3">
                          <span className="badge bg-primary me-2">
                            Experience: {mentor.experience}
                          </span>
                          <span className="badge bg-success">
                            <i className="ti ti-star-filled me-1" />
                            {mentor.rating}
                          </span>
                        </div>
                        <p className="card-text">{mentor.description}</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <button
                            className="btn btn-outline-primary"
                            onClick={() => setSelectedMentor(mentor)}>
                            View Profile
                          </button>
                          <button className="btn btn-primary">Connect</button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Profile Modal */}
            {selectedMentor && (
              <MentorProfileModal
                mentor={selectedMentor}
                onClose={() => setSelectedMentor(null)}
              />
            )}
          </div>
        </div>
      </div>
      <SerchBar />
    </div>
  );
};

export default MentorList;
