import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  FaBars,
  FaPlayCircle,
  FaCheckCircle,
  FaArrowLeft,
} from "react-icons/fa";
import { PiChalkboardTeacherBold } from "react-icons/pi";
import sections from "../../src/pages/ImStratupSchool/sections";

const LessonPlayerPage = () => {
  const { lessonId } = useParams();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  let selectedLesson = null;
  for (const section of sections) {
    const match = section.lessons.find(
      (lesson) => lesson.id.toString() === lessonId
    );
    if (match) {
      selectedLesson = match;
      break;
    }
  }

  if (!selectedLesson) {
    return (
      <div className="container mt-5 text-center text-danger">
        <h3>❌ Lesson Not Found</h3>
        <button onClick={() => navigate(-1)} className="btn btn-secondary mt-3">
          <FaArrowLeft className="me-2" />
          Go Back
        </button>
      </div>
    );
  }

  const handleLessonClick = (id) => {
    navigate(`/lesson/${id}`);
    if (window.innerWidth < 768) {
      setSidebarOpen(false); // Auto-close on mobile
    }
  };

  return (
    <div className="d-flex flex-column flex-md-row" style={{ height: "100vh" }}>
      {/* Mobile Top Bar */}
      <div className="d-flex d-md-none justify-content-between align-items-center bg-white border-bottom p-3 shadow-sm">
        <h6 className="mb-0 text-primary fw-semibold text-truncate w-100">
          <PiChalkboardTeacherBold className="me-2" />
          {selectedLesson.title}
        </h6>
        <button
          className="btn btn-outline-primary btn-sm ms-2"
          onClick={() => setSidebarOpen(true)}
        >
          <FaBars />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`bg-white border-end p-3 ${
          sidebarOpen ? "d-block" : "d-none"
        } d-md-block`}
        style={{
          width: "260px",
          height: "100vh",
          overflowY: "auto",
          position: window.innerWidth < 768 ? "fixed" : "relative",
          top: 0,
          left: 0,
          zIndex: 1040,
        }}
      >
        {/* Mobile close button */}
        <div className="d-flex justify-content-between align-items-center mb-3 d-md-none">
          <h6 className="text-primary fw-semibold mb-0">📚 Course Content</h6>
          <button className="btn-close" onClick={() => setSidebarOpen(false)} />
        </div>
                  <h6 className="text-primary fw-semibold mb-4 d-none d-md-block">
  📚 Course Content
</h6>



        {/* Course Content */}
        {sections.map((section, idx) => (
          <div key={idx} className="mb-4">
            <div className="fw-semibold text-muted small mb-2">{section.title || "Cousre"}</div>
           {/* <h6 className="text-primary fw-semibold mb-0">📚 Course Content</h6> */}
            <ul className="list-unstyled">
              {section.lessons.map((lesson) => (
                <li
                  key={lesson.id}
                  onClick={() => handleLessonClick(lesson.id)}
                  className={`py-2 px-3 rounded small d-flex justify-content-between align-items-center mb-1 ${
                    lesson.id.toString() === lessonId
                      ? "bg-primary text-white"
                      : "bg-light text-dark"
                  }`}
                  style={{ cursor: "pointer" }}
                >
                  <span className="text-truncate">{lesson.title}</span>
                  <FaPlayCircle className="ms-2" />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-25 d-md-none"
          onClick={() => setSidebarOpen(false)}
          style={{ zIndex: 1030 }}
        ></div>
      )}

      {/* Main Content */}
      <div
        className="flex-grow-1 p-4"
        style={{
          overflowY: "auto",
          height: "100vh",
        }}
      >
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4 className="fw-semibold text-primary mb-0">
            🎥 Lesson: {selectedLesson.title}
          </h4>
          <button
            className="btn btn-outline-secondary"
            onClick={() => navigate("/dashboard")}
          >
            <FaArrowLeft className="me-2" />
            Back
          </button>
        </div>

        {/* Video Section */}
        <div
          className="rounded shadow-sm mb-4 bg-light border"
          style={{ height: "60vh" }}
        >
          {selectedLesson.videoUrl ? (
            <iframe
              src={selectedLesson.videoUrl}
              title={selectedLesson.title}
              allowFullScreen
              className="w-100 h-100 border-0 rounded"
            ></iframe>
          ) : (
            <div className="d-flex justify-content-center align-items-center h-100">
              <p className="text-muted">⚠ Video Not Available</p>
            </div>
          )}
        </div>

        {/* Lesson Info */}
        <div className="bg-white border rounded shadow-sm p-4">
          <h5 className="fw-semibold mb-3">🎯 What You Will Learn</h5>
          <p className="text-muted mb-0">
            This lesson covers <strong>{selectedLesson.title}</strong>. You'll explore key concepts,
            implementation strategies, and hands-on practices for real-world applications.
          </p>
          <button
            className="btn btn-success mt-4"
            onClick={() => navigate(`/lesson/${selectedLesson.id}/quiz`)}
          >
            <FaCheckCircle className="me-2" />
            Take Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default LessonPlayerPage;
