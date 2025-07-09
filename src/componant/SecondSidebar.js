import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Frontend_URL from "./config2";

const SecondSidebar = ({ onButtonClick }) => {
  const [openSections, setOpenSections] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  const theme = localStorage.getItem("theme") || "light";

  const toggleSection = (idx) => {
    setOpenSections((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  const LogoutHandler = () => {
    localStorage.clear();
    window.location.href = `${Frontend_URL}/login`;
  };

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

  return (
    <aside
      className="left-sidebar border-end min-vh-100 d-flex flex-column p-3"
      style={{ backgroundColor: theme === "dark" ? "#1A1A2E" : "#ffff" }}
    >
{/* Logo and Close */}
<div className="d-flex align-items-center justify-content-between mb-3">
  <div className="d-flex align-items-center gap-2">
    <Link to="/dashboard" className="logo-img d-flex align-items-center">
      <img
        src={
          theme === "dark"
            ? "/assets/logo/logo-light.png"
            : "./assets/logo/logo-dark.png"
        }
        alt="Logo"
        width="40"
        className="img-fluid"
      />
    </Link>
    <div className="d-flex flex-column mt-3">
      <span
        className="fw-semibold"
        style={{
          fontSize: "1rem",
          fontFamily: "'Segoe UI', 'Roboto', sans-serif",
          color: theme === "dark" ? "#f1f1f1" : "#1a1a1a",
          textTransform: "capitalize",
        }}
      >
        Incubation Masters
      </span>
    </div>
  </div>

  <button
    onClick={onButtonClick}
    className="fs-5 d-block d-xl-none border-0 bg-transparent"
  >
    <i className="ti ti-x" />
  </button>
</div>



      {/* Scrollable Sections */}
      <nav className="flex-grow-1 overflow-auto">
        {sidebarItems.map((section, idx) => (
          <div key={idx} className="mb-2">
            <button
            style={{
              color:"#525260"
            }}
              className="d-flex justify-content-between align-items-center w-100 text-start px-3 py-2 border-0 bg-light fw-semibold  rounded toggle-btn"
              onClick={() => toggleSection(idx)}
              aria-expanded={!!openSections[idx]}
            >
              <span className="d-flex align-items-center gap-2">
                <i  className={section.icon} style={{ color: section.iconColor, fontSize: "1.2rem", }}></i>
                <h6 style={{
                  fontSize: "0.88rem",
                }} className=" mb-0">{section.title}</h6>
              </span>
              <i
                className={`ti ${openSections[idx] ? "ti-minus" : "ti-plus"} transition-transform`}
              />
            </button>

            <div className={`collapse ${openSections[idx] ? "show" : ""} ps-2 pt-1`}>
              <ul className="list-unstyled mb-0">
                {section.items.map((item, subIdx) => (
                  <li key={subIdx}>
                    <Link
                      to={item.path}
                      className={`d-flex align-items-center gap-2 px-2 py-2 rounded sidebar-link text-decoration-none ${
                        location.pathname === item.path
                          ? "bg-primary-subtle text-primary fw-semibold"
                          : "text-muted"
                      }`}
                    >
                      <i className={`${item.icon} fs-6`} style={{ color: item.color }} />
                      <span style={{
                  fontSize: "0.8rem",
                }}>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </nav>

      {/* Profile & Logout */}
      <div className="mt-auto pt-3">
        <div className="p-3 bg-light rounded shadow-sm">
          <div className="d-flex align-items-center gap-2">
            <img
              src={
                theme === "dark"
                  ? "/assets/logo/logo-light.png"
                  : "./assets/logo/logo-dark.png"
              }
              alt="Profile"
              width="36"
              height="36"
              className="rounded-circle"
            />
            <div>
              <div className="fw-semibold mb-0 small">Startup</div>
              <div className="text-muted small">Profile</div>
            </div>
            <button
              onClick={LogoutHandler}
              className="ms-auto border-0 bg-transparent text-danger"
              title="Logout"
            >
              <i className="ti ti-power fs-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Custom Internal Styles */}
      <style>{`
        .toggle-btn {
          transition: all 0.2s ease;
        }
        .toggle-btn:hover {
          background-color: #edf1f5;
        }
        .sidebar-link {
          transition: all 0.2s ease;
        }
        .sidebar-link:hover {
          background-color: #e0e7ff;
          color: #1e3a8a;
        }
        .transition-transform {
          transition: transform 0.2s ease;
        }
      `}</style>
    </aside>
  );
};

export default SecondSidebar;
