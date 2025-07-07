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
      title: " Idea Validation",
      icon: "ti ti-bulb",
      items: [
        { name: "Submit Idea", path: "/idea/submit", icon: "ti ti-send" },
        { name: "Get AI-Powered Idea Score", path: "/idea/score", icon: "ti ti-robot" },
        { name: "Feedback & Risks Analysis", path: "/idea/feedback", icon: "ti ti-message-report" },
        { name: "Similar Market Case Studies", path: "/idea/case-studies", icon: "ti ti-chart-bar" },
      ],
    },
    {
      title: " Path to Unicorn",
      icon: "ti ti-rocket",
      items: [
        { name: "Set Vision & Goals", path: "/unicorn/vision-goals", icon: "ti ti-eye" },
        { name: "Startup Readiness Checklist", path: "/unicorn/checklist", icon: "ti ti-list-check" },
        { name: "Milestone Builder", path: "/unicorn/milestones", icon: "ti ti-flag" },
      ],
    },
    {
      title: "Co-founder & Team",
      icon: "ti ti-users",
      items: [
        { name: "Global Co-founder Matching", path: "/team/cofounder-match", icon: "ti ti-world" },
        { name: "Post Co-founder Requirement", path: "/team/post-cofounder", icon: "ti ti-user-plus" },
        { name: "Hire Interns", path: "/team/interns", icon: "ti ti-school" },
        { name: "Post Jobs for Early Team", path: "/team/jobs", icon: "ti ti-briefcase" },
      ],
    },
    {
      title: "MVP Studio",
      icon: "ti ti-tools",
      items: [
        { name: "Define Product Scope", path: "/mvp/scope", icon: "ti ti-box" },
        { name: "MVP Builder", path: "/mvp/builder", icon: "ti ti-puzzle" },
        { name: "Hire MVP Development Team", path: "/mvp/hire", icon: "ti ti-code" },
        { name: "User Feedback Collection", path: "/mvp/feedback", icon: "ti ti-message" },
      ],
    },
    {
      title: "Launch & Go-to-Market",
       icon: "ti ti-megaphone" ,
      items: [
        { name: "Build Launch Checklist", path: "/launch/checklist", icon: "ti ti-clipboard-check" },
        { name: "Create Landing Page", path: "/launch/landing", icon: "ti ti-layout" },
        { name: "Waitlist Management", path: "/launch/waitlist", icon: "ti ti-clock" },
        { name: "GTM Strategy Templates", path: "/launch/gtm", icon: "ti ti-template" },
        { name: "Beta User Engagement Tools", path: "/launch/engagement", icon: "ti ti-bell" },
      ],
    },
    {
      title: "Company Formation",
      icon: "ti ti-building",
      items: [
        { name: "Company Registration Options", path: "/company/registration", icon: "ti ti-file-text" },
        { name: "Documentation Requirements", path: "/company/docs", icon: "ti ti-notebook" },
        { name: "Legal Partner Network", path: "/company/legal", icon: "ti ti-balance-scale" },
        { name: "Compliance Dashboard", path: "/company/compliance", icon: "ti ti-shield-check" },
      ],
    },
    {
      title: "Fundraising Hub",
      icon: "ti ti-currency-dollar",
      items: [
        { name: "Create Pitch Deck", path: "/funding/pitchdeck", icon: "ti ti-presentation" },
        { name: "Find Investors", path: "/funding/investors", icon: "ti ti-search" },
        { name: "Send Pitches & Track Replies", path: "/funding/pitches", icon: "ti ti-send" },
        { name: "Warm Intro Marketplace", path: "/funding/intros", icon: "ti ti-network" },
        { name: "Investment Term Sheet Generator", path: "/funding/termsheet", icon: "ti ti-file-dollar" },
      ],
    },
    {
      title: "Documents & Templates",
      icon: "ti ti-folder",
      items: [
        { name: "Founders Agreement, NDAs", path: "/docs/founders", icon: "ti ti-signature" },
        { name: "ESOP Plans, Cap Table", path: "/docs/cap-table", icon: "ti ti-table" },
        { name: "HR & Intern Offer Letters", path: "/docs/hr", icon: "ti ti-file-text" },
        { name: "GTM, Budget, Hiring Templates", path: "/docs/templates", icon: "ti ti-file-description" },
        { name: "All Downloadable", path: "/docs/all", icon: "ti ti-download" },
      ],
    },
    {
      title: "Metrics & Insights",
      icon: "ti ti-chart-line",
      items: [
        { name: "Revenue, Burn, CAC, LTV", path: "/metrics/finance", icon: "ti ti-calculator" },
        { name: "Traffic, DAUs, Retention", path: "/metrics/traffic", icon: "ti ti-chart-donut" },
        { name: "Runway Calculator", path: "/metrics/runway", icon: "ti ti-timer" },
        { name: "KPI Tracker with Benchmarks", path: "/metrics/kpi", icon: "ti ti-trending-up" },
        { name: "Export to PDF/Excel", path: "/metrics/export", icon: "ti ti-file-export" },
      ],
    },
  ]; // You can reuse your current items here.


  return (
   <aside className="bg-white left-sidebar border-end min-vh-100 d-flex flex-column p-3">
  {/* Logo and Close */}
  <div className="d-flex align-items-center justify-content-between mb-4">
    <Link to="/dashboard" className="logo-img">
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
    <button
      onClick={onButtonClick}
      className="text-decoration-none fs-5 d-block d-xl-none border-0 bg-transparent"
    >
      <i className="ti ti-x" />
    </button>
  </div>

  {/* Scrollable Navigation Section */}
  <nav className="flex-grow-1 overflow-auto">
    {sidebarItems.map((section, idx) => (
      <div key={idx} className="mb-2">
        <button
          className="d-flex justify-content-between align-items-center w-100 text-start px-3 py-2 border-0 bg-light fw-semibold text-secondary rounded section-toggle-btn"
          onClick={() => toggleSection(idx)}
          aria-expanded={!!openSections[idx]}
        >
          <span className="d-flex align-items-center gap-2">
            <i className={section.icon}></i>
            <h6 className="small">{section.title} </h6>
          </span>
          <i
            className={`ti ${
              openSections[idx] ? "ti-minus" : "ti-plus"
            } transition-transform`}
          />
        </button>

        <div className={`collapse ${openSections[idx] ? "show" : ""} ps-1 pt-1 `}>
          <ul className="list-unstyled">
            {section.items.map((item, subIdx) => (
              <li key={subIdx}>
                <Link
                  to={item.path}
                  className={`d-flex align-items-center gap-2 px-2 py-1 rounded text-decoration-none sidebar-link ${
                    location.pathname === item.path
                      ? "bg-primary-subtle text-primary fw-semibold"
                      : "text-muted"
                  }`}
                >
                  <i className={`${item.icon} fs-6`}></i>
                  <span className="small">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ))}
  </nav>

  {/* Pinned Bottom Section */}
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

  {/* Custom Styling */}
  <style>{`
    .section-toggle-btn:hover {
      background-color: #2B2B3D;
    }
    .sidebar-link {
      transition: background 0.2s ease, color 0.2s ease;
    }
    .sidebar-link:hover {
      background-color: #465670;
      color: #212529;
    }
    .transition-transform {
      transition: transform 0.2s ease;
    }
  `}</style>
</aside>


  );
};

export default SecondSidebar;
