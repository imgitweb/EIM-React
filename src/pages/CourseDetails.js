import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LeftSidebar from "../componant/LeftSidebar";
import Navigation from "../componant/Navigation";
import SerchBar from "../componant/SearchBar";
import { FaUser, FaClock, FaBookOpen } from "react-icons/fa";
import sections from "../sections"; // Importing sections from the sections.js file

const CourseDetailsPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isActive, setActive] = useState(false);
  const [completedLessons, setCompletedLessons] = useState([]);
  const navigate = useNavigate();
  const ToggleEvent = () => setActive((prev) => !prev);
  


  const totalLessons = sections.reduce(
    (acc, section) => acc + section.lessons.length,
    0
  );

  const toggleLesson = (id) => {
    setCompletedLessons((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <>
      <div id="main-wrapper" className={isActive ? "show-sidebar" : ""}>
        <LeftSidebar onButtonClick={ToggleEvent} />
        <div className="page-wrapper">
          <Navigation onButtonClick={ToggleEvent} />
          <div className="body-wrapper">
            <div className="container-fluid px-3">
              <div className="card bg-dark text-light border-0 rounded-1 shadow-sm overflow-hidden p-0">
                <div className="position-relative">
                  <img
                    src="https://img.youtube.com/vi/5MgBikgcWnY/maxresdefault.jpg"
                    alt="Course Thumbnail"
                    className="img-fluid w-100"
                    style={{ maxHeight: "420px", objectFit: "cover" }}
                  />
                  <button
                    className="btn btn-primary position-absolute top-50 start-50 translate-middle px-4 py-2 rounded-3 shadow"
                    onClick={() =>
                      window.open(
                        "https://www.youtube.com/watch?v=5MgBikgcWnY",
                        "_blank"
                      )
                    }
                  >
                    ▶ Watch Now
                  </button>
                </div>

                <div className="p-4">
                  <div className="mb-2">
                    <h5 className="fw-semibold mb-2">Course Description</h5>
                    <p className="small text-light-emphasis mb-0">
                      This course is designed to help you understand and implement
                      advanced AI solutions using OpenAI's GPT-3. You'll build both
                      a chat app and voice assistant from scratch, fine-tune models,
                      and deploy your own intelligent applications — no prior AI
                      experience needed!
                    </p>
                  </div>

                  <div className="d-flex flex-wrap gap-4 align-items-center mb-3">
                    <div className="d-flex align-items-center gap-2">
                      <FaUser className="text-info" />
                      <span className="small">
                        Instructor: <strong>John Doe</strong>
                      </span>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <FaClock className="text-warning" />
                      <span className="small">
                        Duration: <strong>5h 30m</strong>
                      </span>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <FaBookOpen className="text-success" />
                      <span className="small">
                        Lectures: <strong>{totalLessons}</strong>
                      </span>
                    </div>
                  </div>

                  <h5 className="fw-semibold text-center mb-4">
                    Table of Content
                  </h5>
                  {sections.map((section, index) => {
                    const allLessonsCompleted = section.lessons.every((lesson) =>
                      completedLessons.includes(lesson.id)
                    );

                    return (
                      <div key={index} className="mb-2">
                        <div
                          className={`d-flex justify-content-between align-items-center p-2 px-3 rounded-1 ${
                            allLessonsCompleted
                              ? "bg-success bg-opacity-25 border border-success"
                              : "bg-secondary bg-opacity-25"
                          }`}
                          onClick={() =>
                            setActiveIndex(index === activeIndex ? null : index)
                          }
                          style={{ cursor: "pointer" }}
                        >
                          <span
                            className={`fw-medium small ${
                              allLessonsCompleted ? "text-success" : "text-info"
                            }`}
                          >
                            <i className="bi bi-journal-text me-2"></i>
                            {section.title}
                            {allLessonsCompleted && (
                              <i className="bi bi-check-circle-fill ms-2"></i>
                            )}
                          </span>
                          <i
                            className={`bi ${
                              activeIndex === index
                                ? "bi-chevron-up"
                                : "bi-chevron-down"
                            } text-light`}
                          ></i>
                        </div>

                        {activeIndex === index && (
                          <div className="mt-2 ms-3">
                            <ul className="list-unstyled mb-0">
                              {section.lessons.map((lesson) => {
                                const isCompleted = completedLessons.includes(lesson.id);
                                return (
                                  <li
                                    key={lesson.id}
                                    className="text-light small py-1 d-flex justify-content-between align-items-center"
                                  >
                                    <span
                                      style={{ cursor: "pointer" }}
                                      onClick={() => navigate(`/lesson/${lesson.id}`)}
                                    >
                                      <i className="bi bi-play-circle text-info me-2"></i>
                                      {lesson.title}
                                    </span>
                                   <p>
                                    Duration: - 
                                     <span className="text-secondary">
                                     {lesson.duration && lesson.duration.includes("minutes") && (
  <span> {lesson.duration.split(" ")[0]} m</span>
)}
                                        </span> 
                                   </p>
                                    {/* <i
                                      className={`bi ms-2 ${
                                        isCompleted
                                          ? "bi-check-circle-fill text-success"
                                          : "bi-circle text-secondary"
                                      }`}
                                      style={{ cursor: "pointer" }}
                                      onClick={() => toggleLesson(lesson.id)}
                                      title={
                                        isCompleted
                                          ? "Mark as incomplete"
                                          : "Mark as complete"
                                      }
                                    ></i> */}
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        )}
                      </div>
                    );
                  })}
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
};

export default CourseDetailsPage;
