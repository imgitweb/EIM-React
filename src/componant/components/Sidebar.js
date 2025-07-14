// src/components/Sidebar.jsx
import React, { useState } from "react";
import { FaUser, FaSignOutAlt, FaTimes, FaMinus, FaPlus } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import theme from "../NewDashboard/styles/styles";
import '../NewDashboard/styles/Sidebar.css';



const sidebarItems = [
  {
    title: "Idea Validation",
    icon: "ti ti-bulb",
    iconColor: "#2563EB",
    items: [
      { name: "Submit Idea", path: "/submit-idea", icon: "ti ti-send", color: "#0EA5E9" },
      { name: "Get AI-Powered Idea Score", path: "/validate-ai-review", icon: "ti ti-robot", color: "#7C3AED" },
      { name: "Feedback & Risks Analysis", path: "/feedback-risk", icon: "ti ti-message-report", color: "#F59E0B" },
      { name: "Similar Market Case Studies", path: "/similer-market", icon: "ti ti-chart-bar", color: "#10B981" },
    ],
  },
  {
    title: "Path to Unicorn",
    icon: "ti ti-rocket",
    iconColor: "#EF4444",
    items: [
      { name: "Set Vision & Goals", path: "/unicorn/vision-goals", icon: "ti ti-eye", color: "#A855F7" },
      { name: "Startup Readiness Checklist", path: "/unicorn/checklist", icon: "ti ti-list-check", color: "#EC4899" },
      { name: "Milestone Builder", path: "/unicorn/milestones", icon: "ti ti-flag", color: "#F97316" },
    ],
  },
  {
    title: "Co-founder & Team",
    icon: "ti ti-users",
    iconColor: "#10B981",
    items: [
      { name: "Global Co-founder Matching", path: "/team/cofounder-match", icon: "ti ti-world", color: "#38BDF8" },
      { name: "Post Co-founder Requirement", path: "/team/post-cofounder", icon: "ti ti-user-plus", color: "#F43F5E" },
      { name: "Hire Interns", path: "/team/interns", icon: "ti ti-school", color: "#EAB308" },
      { name: "Post Jobs for Early Team", path: "/team/jobs", icon: "ti ti-briefcase", color: "#8B5CF6" },
    ],
  },
  {
    title: "MVP Studio",
    icon: "ti ti-tools",
    iconColor: "#F59E0B",
    items: [
      { name: "Define Product Scope", path: "/mvp/scope", icon: "ti ti-box", color: "#EF4444" },
      { name: "MVP Builder", path: "/mvp/builder", icon: "ti ti-puzzle", color: "#3B82F6" },
      { name: "Hire MVP Development Team", path: "/mvp/hire", icon: "ti ti-code", color: "#22C55E" },
      { name: "User Feedback Collection", path: "/mvp/feedback", icon: "ti ti-message", color: "#6366F1" },
    ],
  },
  {
    title: "Launch & Go-to-Market",
    icon: "ti ti-bucket",
    iconColor: "#E74C3C",
    items: [
      { name: "Build Launch Checklist", path: "/launch/checklist", icon: "ti ti-clipboard-check", color: "#06B6D4" },
      { name: "Create Landing Page", path: "/launch/landing", icon: "ti ti-layout", color: "#F43F5E" },
      { name: "Waitlist Management", path: "/launch/waitlist", icon: "ti ti-clock", color: "#84CC16" },
      { name: "GTM Strategy Templates", path: "/launch/gtm", icon: "ti ti-template", color: "#0EA5E9" },
      { name: "Beta User Engagement Tools", path: "/launch/engagement", icon: "ti ti-bell", color: "#F97316" },
    ],
  },
  {
    title: "Company Formation",
    icon: "ti ti-building",
    iconColor: "#8B5CF6",
    items: [
      { name: "Company Registration Options", path: "/company/registration", icon: "ti ti-file-text", color: "#4ADE80" },
      { name: "Documentation Requirements", path: "/company/docs", icon: "ti ti-notebook", color: "#22D3EE" },
      { name: "Legal Partner Network", path: "/company/legal", icon: "ti ti-balance-scale", color: "#F87171" },
      { name: "Compliance Dashboard", path: "/company/compliance", icon: "ti ti-shield-check", color: "#14B8A6" },
    ],
  },
  {
    title: "Fundraising Hub",
    icon: "ti ti-currency-dollar",
    iconColor: "#22C55E",
    items: [
      { name: "Create Pitch Deck", path: "/funding/pitchdeck", icon: "ti ti-presentation", color: "#FBBF24" },
      { name: "Find Investors", path: "/funding/investors", icon: "ti ti-search", color: "#3B82F6" },
      { name: "Send Pitches & Track Replies", path: "/funding/pitches", icon: "ti ti-send", color: "#FB923C" },
      { name: "Warm Intro Marketplace", path: "/funding/intros", icon: "ti ti-network", color: "#A78BFA" },
      { name: "Investment Term Sheet Generator", path: "/funding/termsheet", icon: "ti ti-file-dollar", color: "#10B981" },
    ],
  },
  {
    title: "Documents & Templates",
    icon: "ti ti-folder",
    iconColor: "#F43F5E",
    items: [
      { name: "Founders Agreement, NDAs", path: "/docs/founders", icon: "ti ti-signature", color: "#2563EB" },
      { name: "ESOP Plans, Cap Table", path: "/docs/cap-table", icon: "ti ti-table", color: "#7C3AED" },
      { name: "HR & Intern Offer Letters", path: "/docs/hr", icon: "ti ti-file-text", color: "#E11D48" },
      { name: "GTM, Budget, Hiring Templates", path: "/docs/templates", icon: "ti ti-file-description", color: "#0EA5E9" },
      { name: "All Downloadable", path: "/docs/all", icon: "ti ti-download", color: "#22C55E" },
    ],
  },
  {
    title: "Metrics & Insights",
    icon: "ti ti-chart-line",
    iconColor: "#3B82F6",
    items: [
      { name: "Revenue, Burn, CAC, LTV", path: "/metrics/finance", icon: "ti ti-calculator", color: "#F59E0B" },
      { name: "Traffic, DAUs, Retention", path: "/metrics/traffic", icon: "ti ti-chart-donut", color: "#0EA5E9" },
      { name: "Runway Calculator", path: "/metrics/runway", icon: "ti ti-timer", color: "#F43F5E" },
      { name: "KPI Tracker with Benchmarks", path: "/metrics/kpi", icon: "ti ti-trending-up", color: "#84CC16" },
      { name: "Export to PDF/Excel", path: "/metrics/export", icon: "ti ti-file-export", color: "#A855F7" },
    ],
  },
];

const Sidebar = ({ onClose }) => {
  const [openSections, setOpenSections] = useState({});
  const currentTheme = localStorage.getItem("theme") || "light";
  const navigate = useNavigate();

  const toggleSection = (idx) => {
    setOpenSections((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  const getBgColor = () =>
    currentTheme === "dark" ? theme.backgroundColor.dark : theme.backgroundColor.white;

  const getTextColor = () =>
    currentTheme === "dark" ? theme.textColor.light : theme.textColor.primary;

  return (
    <div
      className="sidebar position-relative d-flex flex-column"
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundColor: getBgColor(),
        borderRight: `1px solid ${theme.backgroundColor.border}`,
        padding: "1rem",
      }}
    >
      {onClose && (
        <button
          className="btn btn-sm position-absolute top-0 end-0 m-2 d-md-none"
          onClick={onClose}
        >
          <FaTimes />
        </button>
      )}

      {/* Logo */}
      <div
      onClick={()=>navigate("/dashboard")}
      className="mb-4 text-center cursor-pointer">
        {/* <img src={logo} alt="Logo" style={{ width: 40 }} /> */}
        <h5 className="mt-2 fw-bold" style={{ color: getTextColor() }}>
          Incubation <span style={{ color: theme.backgroundColor.primary }}>Masters</span>
        </h5>
      </div>

      {/* Scrollable section */}
      <div className="flex-grow-1" style={{ overflowY: "auto", maxHeight: "calc(100vh - 160px)" }}>
        {sidebarItems.map((section, idx) => (
          <div key={idx} className="mb-2">
            {/* Section toggle button */}
            <button
              className="d-flex justify-content-between align-items-center w-100 px-2 py-2 border-0 rounded text-start fw-semibold sidebar-section-btn"
              onClick={() => toggleSection(idx)}
              style={{
                color: getTextColor(),
                fontSize: "14px",
              }}
            >
              <span className="d-flex align-items-center gap-2">
                <i className={section.icon} style={{ color: section.iconColor, fontSize: "1rem" }}></i>
                {section.title}
              </span>
              {openSections[idx] ? <FaMinus size={12} /> : <FaPlus size={12} />}
            </button>

            {/* Collapsible links */}
            {openSections[idx] && (
              <ul className="list-unstyled ps-3 pt-1">
                {section.items.map((item, subIdx) => (
                  <li key={subIdx} className="mb-1">
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `d-flex align-items-center px-2 py-2 rounded text-decoration-none sidebar-link ${
                          isActive ? "active" : ""
                        }`
                      }
                      style={({ isActive }) => ({
                        color: isActive ? item.color : getTextColor(),
                        backgroundColor: isActive ? "#F1F5F9" : "",
                        fontSize: "13.5px",
                      })}
                    >
                      <i
                        className={`${item.icon} me-2`}
                        style={{ color: item.color, fontSize: "14px", minWidth: "18px" }}
                      ></i>
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {/* User footer */}
      <div
        className="mt-auto d-flex align-items-center justify-content-between p-2 rounded"
        style={{
          backgroundColor: "#F9FAFB",
          color: getTextColor(),
          fontSize: "14px",
        }}
      >
        <div className="d-flex align-items-center">
          <FaUser className="me-2" />
          <span>Test User</span>
        </div>
        <FaSignOutAlt className="text-danger" role="button" />
      </div>
    </div>
  );
};

export default Sidebar;
