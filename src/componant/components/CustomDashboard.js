import React, { useState } from "react";
import {
  FaStar,
  FaBookOpen,
  FaChalkboardTeacher,
  FaBrain,
  FaUserFriends,
  FaTasks,
  FaChevronRight,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const skills = [
  { name: "Core Skills", icon: <FaBookOpen /> },
  { name: "Soft Skills", icon: <FaUserFriends /> },
  { name: "Digital Fluency", icon: <FaBrain /> },
  { name: "Networking", icon: <FaTasks /> },
  { name: "Activity", icon: <FaChalkboardTeacher /> },
];

const recommendedCourses = [
  {
    title: "Zero to Hero with GPT-3 & Python : Building Cutting-Edge AI",
    category: "Digital Fluency",
    language: "English",
    level: "Intermediate",
    image: "/assets/logo/growth.webp",
  },
  {
    title: "Learn Computer Vision Using Python With Open-CV",
    category: "Core Skills",
    language: "English",
    level: "All Levels",
    image: "/assets/logo/growth.webp",
  },
  {
    title: "Team Communication and Conflict Resolution",
    category: "Soft Skills",
    language: "English",
    level: "Beginner",
    image: "/assets/logo/growth.webp",
  },
];

const CustomDashboard = () => {
  const [activeTab, setActiveTab] = useState("Core Skills");
  const navigate = useNavigate();

  const filteredCourses = recommendedCourses.filter(
    (course) => course.category === activeTab
  );

  return (
    <div className="container-fluid py-4">
      {/* Milestones */}
      <div className="row text-center mb-5 g-3">
        {[
          {
            label: "Craft Your Career Identity",
            color: "#8e44ad",
            button: "Milestone 1",
          },
          {
            label: "Sharpen Your Essential Skills",
            color: "#27ae60",
            button: "Milestone 2",
          },
          {
            label: "Learn Relentlessly to Stand Out",
            color: "#9b59b6",
            button: "Milestone 3",
          },
          {
            label: "Achieve Career Breakthrough",
            color: "#2ecc71",
            button: "Milestone 4",
          },
        ].map((m, index) => (
          <div className="col-12 col-sm-6 col-md-3" key={index}>
            <div className="p-1">
              <div
                className="rounded  h-100 d-flex flex-column justify-content-between py-3"
                style={{
                  backgroundColor: "#FFFFFF",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  color: m.color,
                  cursor: "pointer",
                  boxShadow: "0 0 8px rgba(0, 0, 0, 0.1)",
                  transform: "scale(1)",
                  border: "1px solid #e5e7eb",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.03)";
                  e.currentTarget.style.boxShadow = `0 0 8px ${m.color}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div>
                  <div className="fs-5 mb-2">
                    <FaStar />
                  </div>
                  <div className="fw-semibold small mb-3">{m.label}</div>
                </div>
                <button
                  className="btn btn-sm w-100 text-white rounded-0"
                  style={{
                    backgroundColor: m.color,
                    border: "none",
                  }}
                >
                  {m.button}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tabs + Courses */}
      <div className="row">
        {/* Sidebar Tabs */}
        <div className="col-12 col-md-3 mb-4">
          <div style={{
            backgroundColor: "#FFFFFF",
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }} className="p-3 rounded shadow-sm border">
            {skills.map((skill) => {
              const isActive = activeTab === skill.name;
              return (
                <button
                  key={skill.name}
                  className={`btn btn-sm w-100 mb-3 py-2 text-start d-flex align-items-center justify-content-between ${
                    isActive ? "btn-primary text-white" : "btn-outline-secondary"
                  }`}
                  onClick={() => setActiveTab(skill.name)}
                  style={{
                    fontSize: "0.85rem",
                    backgroundColor: isActive ? "#6600CC" : "#ffffff",
                    borderColor: isActive ? "#6600CC" : "#ccc",
                    transition: "all 0.3s ease",
                    color: isActive ? "#fff" : "#333",
                  }}
                >
                  <span className="d-flex align-items-center gap-2">
                    {skill.icon}
                    {skill.name}
                  </span>
                  <FaChevronRight size={14}  />
                </button>
              );
            })}
          </div>
        </div>

        {/* Courses */}
        <div
        style={{
          backgroundColor: "#ffffff",
        }}
          className="col-12 col-md-9 p-4 rounded shadow-sm  border"
        >
          <h6 className="mb-4" style={{ fontSize: "1rem", color: "#111827" }}>
            Recommended Courses
          </h6>

          {filteredCourses.length > 0 ? (
            filteredCourses.map((course, idx) => (
              <div
                key={idx}
                className="d-flex flex-column flex-md-row align-items-start align-items-md-center rounded p-3 mb-3"
                style={{
                  backgroundColor: "#F2EDF8",
                  border: "1px solid #ddd",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.02)";
                  e.currentTarget.style.boxShadow =
                    "0 0 10px rgba(108, 92, 231, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <img
                  src={course.image}
                  alt="course"
                  style={{
                    width: "70px",
                    height: "60px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                  className="me-md-3 mb-2 mb-md-0"
                />

                <div className="flex-grow-1 small">
                  <strong style={{ fontSize: "0.9rem", color: "#1f2937" }}>
                    {course.title}
                  </strong>
                  <div className="text-muted" style={{ fontSize: "0.75rem" }}>
                    Category: {course.category} | Language: {course.language} |
                    Level: {course.level}
                  </div>
                </div>

                <div className="ms-md-3 mt-2 mt-md-0">
                  <button
                    className="btn btn-sm"
                    onClick={() => navigate("/coursedetails/1")}
                    style={{
                      backgroundColor: "#6c5ce7",
                      color: "#fff",
                      border: "none",
                      fontSize: "0.8rem",
                    }}
                  >
                    Continue Learning
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-muted" style={{ fontSize: "0.85rem" }}>
              No courses available for this skill.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomDashboard;
