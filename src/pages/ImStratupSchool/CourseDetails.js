import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navigation from "../../componant/Navigation";
import SerchBar from "../../componant/SearchBar";
import { FaUser, FaClock, FaBookOpen } from "react-icons/fa";
import sections from "./sections"; // Assumes sections.js provides structured course content
import SecondSidebar from "../../componant/SecondSidebar";

const CourseDetailsPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isActive, setActive] = useState(false);
  const [completedLessons, setCompletedLessons] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  // Sample static data for demo
  const course = {
    title: "Startup Fundraising Essentials",
    instructor: "Jane Smith",
    duration: "4h 20m",
    image:
      "https://cdn.prod.website-files.com/629b1dcd203ede574e478a11/62f0fe8ca7006e8573b8bf75_JordenSky_9Benefits%20of%20startupindia.jpg",
    description:
      "Learn the essentials of startup fundraising — from bootstrapping to Series A. This course guides you through building investor decks, term sheets, and pitch strategies used by successful startups.",
  };

  const totalLessons = sections.reduce(
    (acc, section) => acc + section.lessons.length,
    0
  );

  const toggleLesson = (id) => {
    setCompletedLessons((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const ToggleEvent = () => setActive((prev) => !prev);

  return (
    <>
      <div id="main-wrapper" className={isActive ? "show-sidebar" : ""}>
        <SecondSidebar onButtonClick={ToggleEvent} />
        <div className="page-wrapper">
          <Navigation onButtonClick={ToggleEvent} />
          <div className="body-wrapper">
            <div className="container-fluid px-3">
  <div className="card bg-white text-dark border-0 rounded-3 shadow-sm overflow-hidden p-0">
    <div className="position-relative">
      <img
        src={course.image}
        alt="Course Thumbnail"
        className="img-fluid w-100"
        style={{ maxHeight: "420px", objectFit: "cover" }}
      />
      <button
        className="btn btn-primary position-absolute top-50 start-50 translate-middle px-4 py-2 rounded-3 shadow"
        onClick={() =>
          window.open("https://www.youtube.com/watch?v=5MgBikgcWnY", "_blank")
        }
      >
        ▶ Watch Preview
      </button>
    </div>

    <div className="p-4">
      <h4 className="fw-semibold mb-2">{course.title}</h4>
      <p className="text-muted mb-3 small">{course.description}</p>

      <div className="row mb-4">
        <div className="col-md-4 small d-flex align-items-center gap-2">
          <FaUser className="text-primary" />
          <span>
            Instructor: <strong>{course.instructor}</strong>
          </span>
        </div>
        <div className="col-md-4 small d-flex align-items-center gap-2">
          <FaClock className="text-warning" />
          <span>
            Duration: <strong>{course.duration}</strong>
          </span>
        </div>
        <div className="col-md-4 small d-flex align-items-center gap-2">
          <FaBookOpen className="text-success" />
          <span>
            Lectures: <strong>{totalLessons}</strong>
          </span>
        </div>
      </div>

      <h5 className="fw-semibold mb-3">Course Curriculum</h5>
      {sections.map((section, index) => {
        const allLessonsCompleted = section.lessons.every((lesson) =>
          completedLessons.includes(lesson.id)
        );

        return (
          <div key={index} className="mb-2">
            <div
              className={`d-flex justify-content-between align-items-center px-3 py-2 rounded border ${
                allLessonsCompleted ? "border-success bg-light" : "bg-light"
              }`}
              onClick={() =>
                setActiveIndex(index === activeIndex ? null : index)
              }
              style={{ cursor: "pointer" }}
            >
              <span
                className={`fw-medium small ${
                  allLessonsCompleted ? "text-success" : "text-primary"
                }`}
              >
                <i className="bi bi-journal-text me-2"></i>
                {section.title}
                {allLessonsCompleted && (
                  <i className="bi bi-check-circle-fill ms-2 text-success"></i>
                )}
              </span>
              <i
                className={`bi ${
                  activeIndex === index
                    ? "bi-chevron-up"
                    : "bi-chevron-down"
                }`}
              ></i>
            </div>

            {activeIndex === index && (
              <div className="mt-2 ms-3">
                <ul className="list-unstyled mb-0">
                  {section.lessons.map((lesson) => {
                    const isCompleted = completedLessons.includes(lesson.id);
                    const duration = lesson.duration?.includes("minutes")
                      ? `${lesson.duration.split(" ")[0]} m`
                      : lesson.duration || "-";
                    return (
                      <li
                        key={lesson.id}
                        className="text-dark small py-1 d-flex justify-content-between align-items-center"
                      >
                        <span
                          style={{ cursor: "pointer" }}
                          onClick={() => navigate(`/lesson/${lesson.id}`)}
                        >
                          <i className="bi bi-play-circle text-primary me-2"></i>
                          {lesson.title}
                        </span>
                        <span className="text-muted small">
                          Duration: {duration}
                        </span>
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
