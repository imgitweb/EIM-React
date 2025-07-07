import React, { useState } from "react";
import { FaStar, FaBookOpen, FaChalkboardTeacher, FaBrain, FaUserFriends, FaTasks, FaChevronRight } from "react-icons/fa";
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
    <div className="container-fluid py-4" style={{  color: "#fff", }}>
  
<div className="row text-center mb-5 g-3">
  {[
    { label: "Craft Your Career Identity", color: "#8e44ad", button: "Milestone 1" },
    { label: "Sharpen Your Essential Skills", color: "#27ae60", button: "Milestone 2" },
    { label: "Learn Relentlessly to Stand Out", color: "#9b59b6", button: "Milestone 3" },
    { label: "Achieve Career Breakthrough", color: "#2ecc71", button: "Milestone 4" },
  ].map((m, index) => (
    <div className="col-12 col-sm-6 col-md-3" key={index}>
      {/* Base Layer Card */}
      <div
        className="p-1"
        style={{
          backgroundColor: "#1f1f2e", // Slightly darker card for depth
          borderRadius: "0.5rem",
        }}
      >
        {/* Foreground Card */}
        <div
          className="rounded shadow-sm h-100 d-fle  flex-column justify-content-between py-3"
          style={{
            backgroundColor: "#2b2b3d",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            color: m.color,
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.03)";
            e.currentTarget.style.boxShadow = `0 0 15px ${m.color}`;
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
<div className="bg-dark p-3 rounded shadow-sm">
  {skills.map((skill) => {
    const isActive = activeTab === skill.name;
    return (
      <button
        key={skill.name}
        className={`btn btn-sm w-100 mb-3 py-2 text-start d-flex align-items-center justify-content-between ${
          isActive ? "btn-primary" : "btn-outline-light text-light"
        }`}
        onClick={() => setActiveTab(skill.name)}
        style={{
          fontSize: "0.85rem",
          backgroundColor: isActive ? "#6c5ce7" : "transparent",
          borderColor: isActive ? "#6c5ce7" : "#555",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => {
          if (!isActive) {
            e.currentTarget.style.backgroundColor = "#3b3b50";
            e.currentTarget.style.transform = "scale(1.01)";
            e.currentTarget.style.boxShadow = "0 0 8px rgba(108, 92, 231, 0.2)";
          }
        }}
        onMouseLeave={(e) => {
          if (!isActive) {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "none";
          }
        }}
      >
        <span className="d-flex align-items-center gap-2">
          {skill.icon}
          {skill.name}
        </span>
        <FaChevronRight size={14} className="text-muted" />
      </button>
    );
  })}
</div>


        </div>
{/* Courses */}
<div className="col-12 col-md-9 bg-dark p-4 rounded-md  shadow-lg" 
style={{
          border: "1px solid  #444",
          borderRadius: "0.5rem",

}}
>
  <h6 className="mb-4 text-white" style={{ fontSize: "1rem" }}>
    Recommended Courses
  </h6>

  {filteredCourses.length > 0 ? (
    filteredCourses.map((course, idx) => (
      <div
        key={idx}
        className="d-flex flex-column flex-md-row align-items-start align-items-md-center rounded p-3 mb-3"
        style={{
          backgroundColor: "#2f2f44",
          border: "1px solid #444",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.02)";
          e.currentTarget.style.boxShadow = "0 0 12px rgba(162, 155, 254, 0.3)";
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

        <div className="flex-grow-1 small text-white">
          <strong style={{ fontSize: "0.9rem" }}>{course.title}</strong>
          <div className="text-muted" style={{ fontSize: "0.75rem" }}>
            Category: {course.category} | Language: {course.language} | Level: {course.level}
          </div>
        </div>

        <div className="ms-md-3 mt-2 mt-md-0">
          <button
            className="btn btn-sm"
            onClick={() => 
              navigate('/coursedetails/1')
            }
            style={{
              backgroundColor: "#a29bfe",
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
