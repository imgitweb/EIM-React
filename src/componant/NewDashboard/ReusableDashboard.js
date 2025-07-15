import React, { useRef, useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import theme from "../NewDashboard/styles/styles";

const ReusableDashboard = ({ tabs = [], data = [] }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.name || "");
  const [activeSubCategory, setActiveSubCategory] = useState(null);
  const navigate = useNavigate();
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  const currentTab = tabs.find((t) => t.name === activeTab);
  const subCategories = currentTab?.subCategories || [];

const filteredCourses = data.filter((course) => {
  const courseCategory = course.category?.trim().toLowerCase();
  const courseSubCategory = course.subCategory?.trim().toLowerCase();
  const tabCategory = activeTab?.trim().toLowerCase();
  const subCategoryFilter = activeSubCategory?.trim().toLowerCase();

  return (
    courseCategory === tabCategory &&
    (!subCategoryFilter || courseSubCategory === subCategoryFilter)
  );
});

  const recommendedTitle = activeSubCategory || activeTab;

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setShowLeftArrow(el.scrollLeft > 0);
    setShowRightArrow(el.scrollLeft + el.clientWidth < el.scrollWidth);
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", checkScroll);
    }
    return () => {
      if (el) {
        el.removeEventListener("scroll", checkScroll);
      }
    };
  }, []);

  const scrollTabs = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -150 : 150,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="container-fluid py-4">
    {/* Tabs */}
<div className="position-relative mb-4">
  {showLeftArrow && (
    <button
      onClick={() => scrollTabs("left")}
      className="btn btn-sm position-absolute"
      style={{
        left: 0,
        top: 0,
        bottom: 0,
        zIndex: 2,
        borderRight: `1px solid ${theme.backgroundColor.border}`,
        backgroundColor: theme.backgroundColor.white,
        color: theme.textColor.primary,
      }}
    >
      <FaChevronLeft />
    </button>
  )}

  <div
    ref={scrollRef}
    className="d-flex overflow-auto custom-scrollbar px-5"
    style={{
      scrollBehavior: "smooth",
      whiteSpace: "nowrap",
      gap: "1.5rem",
      backgroundColor: theme.backgroundColor.white,
      borderBottom: `1px solid ${theme.backgroundColor.border}`,
    }}
  >
    {tabs.map((tab, index) => {
      const isActive = activeTab === tab.name;
      return (
        <div
          key={index}
          onClick={() => {
            setActiveTab(tab.name);
            setActiveSubCategory(null);
          }}
          style={{
            cursor: "pointer",
            padding: "0.75rem 0",
            fontWeight: isActive ? "600" : "500",
            color: isActive ? theme.textColor.primary : "#888",
            borderBottom: isActive
              ? `3px solid ${theme.backgroundColor.primary}`
              : "3px solid transparent",
            transition: "all 0.2s ease",
            fontSize: "0.95rem",
          }}
        >
          {tab.name}
        </div>
      );
    })}
  </div>

  {showRightArrow && (
    <button
      onClick={() => scrollTabs("right")}
      className="btn btn-sm position-absolute"
      style={{
        right: 0,
        top: 0,
        bottom: 0,
        zIndex: 2,
        backgroundColor: theme.backgroundColor.white,
        color: theme.textColor.primary,
      }}
    >
      <FaChevronRight />
    </button>
  )}
</div>


      <div className="row">
        {/* Sidebar */}
        <div className="col-12 col-md-3 mb-4">
          <div
            className="p-3 border rounded"
            style={{
              backgroundColor: theme.backgroundColor.white,
              border: `1px solid ${theme.backgroundColor.border}`,
              borderRadius: "10px",
            }}
          >
             {subCategories.map((sub, i) => {
      const isActive = activeSubCategory === sub.label;
      return (
        <div
          key={i}
          className="d-flex align-items-center cursor-pointer"
          onClick={() => setActiveSubCategory(sub.label)}
          style={{
            fontWeight: isActive ? "600" : "500",
            color: isActive ? theme.textColor.primary : "#ccc",
            fontSize: "0.88rem",
            padding: "8px 12px",
            backgroundColor: "transparent",
            borderLeft: isActive
              ? `3px solid ${theme.backgroundColor.primary}`
              : "3px solid transparent",
            transition: "all 0.2s ease",
            cursor: "pointer",
          }}
        >
          <span className="d-flex align-items-center gap-2">
            {sub.icon}
            {sub.label}
          </span>
        </div>
      );
    })}

          </div>
        </div>

        {/* Courses */}
        <div
          className="col-12 col-md-9 p-3 rounded shadow-sm border"
          style={{
            backgroundColor: theme.backgroundColor.white,
            border: `1px solid ${theme.backgroundColor.border}`,
          }}
        >
          <h6
            className="mb-3"
            style={{
              fontSize: "1rem",
              fontWeight: "600",
              color: theme.textColor.primary,
            }}
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
                  e.currentTarget.style.transform = "scale(1.015)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 16px rgba(0,0,0,0.06)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <img
                  src={course.image}
                  alt="course"
                  className="me-md-3 mb-2 mb-md-0"
                  style={{
                    width: "70px",
                    height: "60px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
                <div className="flex-grow-1 small">
                  <strong
                    style={{
                      fontSize: "0.9rem",
                      color: theme.textColor.primary,
                    }}
                  >
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
                    onClick={() => navigate(`/coursedetails/${course.id}`)}
                    style={{
                      backgroundColor: theme.backgroundColor.primary,
                      color: theme.textColor.light,
                      fontSize: "0.8rem",
                      border: "none",
                    }}
                  >
                    Continue Learning
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-muted" style={{ fontSize: "0.85rem" }}>
              No courses available for this selection.
            </div>
          )}
        </div>
      </div>

      {/* Hide scrollbar */}
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
