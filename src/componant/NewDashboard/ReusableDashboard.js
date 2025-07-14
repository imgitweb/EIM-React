import React, { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import theme from "../NewDashboard/styles/styles"; // Make sure the path is correct

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
    <div className="container-fluid py-4" style={{ overflowX: "hidden" }}>
      {/* Tab Scroll Section */}
      <div className="mb-3 position-relative" style={{ overflow: "hidden" }}>
        <button
          onClick={() => scrollTabs("left")}
          className="btn btn-light btn-sm"
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            zIndex: 2,
            backgroundColor: theme.backgroundColor.white,
            borderRight: `1px solid ${theme.backgroundColor.border}`,
          }}
        >
          <FaChevronLeft />
        </button>

        <div
          ref={scrollRef}
          className="d-flex overflow-auto custom-scrollbar"
          style={{
            scrollBehavior: "smooth",
            whiteSpace: "nowrap",
            backgroundColor: theme.backgroundColor.white,
            borderRadius: "2px",
            margin: "0 2.5rem",
          }}
        >
          {tabs.map((tab, index) => {
            const isActive = activeTab === tab.name;
            return (
              <button
                key={index}
                className="px-4 py-2 border-0"
                style={{
                  backgroundColor: isActive
                    ? theme.backgroundColor.primary
                    : theme.backgroundColor.white,
                  borderBottom: isActive
                    ? `3px solid ${theme.backgroundColor.primary}`
                    : "3px solid transparent",
                  color: isActive
                    ? theme.textColor.light
                    : theme.textColor.primary,
                  fontWeight: isActive ? "600" : "500",
                  fontSize: "0.90rem",
                  borderRight:
                    index !== tabs.length - 1
                      ? `1px solid ${theme.backgroundColor.border}`
                      : "none",
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
          className="btn btn-light btn-sm"
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            zIndex: 2,
            backgroundColor: theme.backgroundColor.white,
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
              backgroundColor: theme.backgroundColor.white,
              border: `1px solid ${theme.backgroundColor.border}`,
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
                    backgroundColor: isActive
                      ? theme.backgroundColor.softSkills
                      : theme.backgroundColor.white,
                    color: isActive
                      ? theme.textColor.light
                      : theme.textColor.primary,
                    fontWeight: isActive ? "600" : "500",
                    fontSize: "0.85rem",
                    border: `1px solid ${
                      isActive
                        ? theme.backgroundColor.primary
                        : theme.backgroundColor.border
                    }`,
                    borderRadius: "6px",
                    transition: "all 0.2s ease-in-out",
                    padding: "10px 12px",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor =
                        theme.backgroundColor.sidebar;
                      e.currentTarget.style.borderColor =
                        theme.backgroundColor.border;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor =
                        theme.backgroundColor.white;
                      e.currentTarget.style.borderColor =
                        theme.backgroundColor.border;
                    }
                  }}
                  onClick={() => setActiveSubCategory(sub.label)}
                >
                  <span className="d-flex align-items-center gap-2">
                    {sub.icon}
                    {sub.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Courses Display */}
        <div
          className="col-12 col-md-9 p-3 rounded shadow-sm border"
          style={{   backgroundColor: theme.backgroundColor.white,
              border: `1px solid ${theme.backgroundColor.border}`, }}
        >
          <h6
            className="mb-2"
            style={{ fontSize: "1rem", color: theme.textColor.primary }}
          >
            {recommendedTitle}
          </h6>

          {filteredCourses.length > 0 ? (
            filteredCourses.map((course, idx) => (
              <div
                key={idx}
                className="d-flex flex-column flex-md-row align-items-start align-items-md-center rounded p-3 mb-3"
                style={{
                  backgroundColor: theme.backgroundColor.white,
                  border: `1px solid ${theme.backgroundColor.border}`,
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.02)";
                  e.currentTarget.style.boxShadow =
                    "0 0 10px rgba(139, 92, 246, 0.15)";
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
                  <strong style={{ fontSize: "0.9rem", color: theme.textColor.primary }}>
                    {course.title}
                  </strong>
                  <div className="text-muted" style={{ fontSize: "0.75rem" }}>
                    Category: {course.category} | Language: {course.language} | Level:{" "}
                    {course.level}
                  </div>
                </div>
                <div className="ms-md-3 mt-2 mt-md-0">
                  <button
                    className="btn btn-sm"
                    onClick={() => navigate("/coursedetails/1")}
                    style={{
                      backgroundColor: theme.backgroundColor.primary,
                      color: theme.textColor.light,
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

      {/* Scrollbar hiding */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .custom-scrollbar {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        body {
          overflow-x: hidden;
        }
      `}</style>
    </div>
  );
};

export default ReusableDashboard;
