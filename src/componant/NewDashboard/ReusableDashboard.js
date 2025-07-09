import React, { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ReusableDashboard = ({ tabs = [], data = [] }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.name || "");
  const [activeSubCategory, setActiveSubCategory] = useState(null);
  const navigate = useNavigate();
    const scrollRef = useRef(null);

  const currentTab = tabs.find((t) => t.name === activeTab);
  const subCategories = currentTab?.subCategories || [];

  const filteredCourses = data.filter((course) => {
    return (
      course.category === activeTab &&
      (!activeSubCategory || course.subCategory === activeSubCategory)
    );
  });

  const recommendedTitle = activeSubCategory
    ? `${activeSubCategory}`
    : `${activeTab}`;

      const scrollTabs = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -90 : 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="container-fluid py-4">
    <div className="mb-3 d-flex align-items-center position-relative">
        <button
          onClick={() => scrollTabs("left")}
          className="btn btn-light btn-sm me-1"
          style={{
            position: "absolute",
            left: 0,
            zIndex: 2,
            height: "100%",
            backgroundColor: "#f8f9fa",
            borderRight: "1px solid #d1d5db",
          }}
        >
          <FaChevronLeft />
        </button>

        <div
          ref={scrollRef}
          className="d-flex overflow-auto custom-scrollbar px-5"
          style={{
            scrollBehavior: "smooth",
            whiteSpace: "nowrap",
            width: "100%",
            backgroundColor: "#F8F9FA",
            borderRadius: "2px",
            // border: "1px solid #cde4eb",
          }}
        >
          {tabs.map((tab, index) => {
            const isActive = activeTab === tab.name;
            return (
              <button
                key={index}
                className="px-4 py-2 border-0"
                style={{
                  backgroundColor: isActive ? "#e9f4f9" : "#F8F9FA",
                  borderBottom: isActive
                    ? "3px solid #4dd0e1"
                    : "3px solid transparent",
                  color: "#1f2937",
                  fontWeight: isActive ? "600" : "500",
                  fontSize: "0.90rem",
                  borderRight:
                    index !== tabs.length - 1 ? "1px solid #cde4eb" : "none",
                  flex: "1 0 auto",
                  whiteSpace: "nowrap",
                }}
                onClick={() => {
                  setActiveTab(tab.name);
                  setActiveSubCategory(null);
                }}
              >
                {tab.name}
              </button>
            );
          })}
        </div>

        <button
          onClick={() => scrollTabs("right")}
          className="btn btn-light btn-sm ms-1"
          style={{
            position: "absolute",
            right: 0,
            zIndex: 2,
            height: "100%",
            backgroundColor: "#f8f9fa",
            // borderLeft: "1px solid #d1d5db",
          }}
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Subcategory and Course Display */}
      <div className="row">
        {/* Subcategory Sidebar */}
        <div className="col-12 col-md-3 mb-4">
          <div
            className="p-2 border rounded"
            style={{
              backgroundColor: "#f7fafc",
              border: "1px solid #dbe4ea",
              borderRadius: "10px",
            }}
          >
            {subCategories.map((sub, i) => {
              const isActive = activeSubCategory === sub.label;
              return (
                <button
                  key={i}
                  className="btn btn-sm w-100 text-start mb-2 d-flex align-items-center justify-content-between"
                  style={{
                    backgroundColor: isActive ? "#e1e9f7" : "#ffffff",
                    color: isActive ? "#2d3436" : "#444",
                    fontWeight: isActive ? "600" : "500",
                    fontSize: "0.85rem",
                    border: "1px solid",
                    borderColor: isActive ? "#4dd0e1" : "#d6dee3",
                    borderRadius: "6px",
                    transition: "all 0.2s ease-in-out",
                    padding: "10px 12px",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor = "#f0f4f8";
                      e.currentTarget.style.borderColor = "#c0d3dd";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor = "#ffffff";
                      e.currentTarget.style.borderColor = "#d6dee3";
                    }
                  }}
                  onClick={() => setActiveSubCategory(sub.label)}
                >
                  <span className="d-flex align-items-center gap-2">
                    {sub.icon}
                    {sub.label}
                  </span>
                  {/* <FaChevronRight size={14} className="text-muted" /> */}
                </button>
              );
            })}
          </div>
        </div>

        {/* Courses Display */}
        <div
          className="col-12 col-md-9 p-3 rounded shadow-sm border"
          style={{ backgroundColor: "#F8F9FA" }}
        >
          <h6 className="mb-2" style={{ fontSize: "1rem", color: "#111827" }}>
            {recommendedTitle}
          </h6>

          {filteredCourses.length > 0 ? (
            filteredCourses.map((course, idx) => (
              <div
                key={idx}
                className="d-flex flex-column flex-md-row align-items-start align-items-md-center rounded p-3 mb-3"
                style={{
                  backgroundColor: "#ffffff",
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
              No courses available for this selection.
            </p>
          )}
        </div>
      </div>

      {/* Add custom scrollbar styles globally or in your main CSS */}
      <style>{`
  .custom-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .custom-scrollbar {
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

      `}</style>
    </div>
  );
};

export default ReusableDashboard;
