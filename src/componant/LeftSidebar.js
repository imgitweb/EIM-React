import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Frontend_URL from "./config2";

const LeftSidebar = ({ onButtonClick }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const theme = localStorage.getItem("theme") || "light"; // Default to light theme if not set
  const navigate = useNavigate();
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  function LogoutHandler() {
    // navigate("/logout");
    localStorage.removeItem("userData");
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
    localStorage.clear();
    window.location.href = `${Frontend_URL}/login`;
  }
  return (
    <aside className="left-sidebar with-vertical">
      <div>
        {/* ---------------------------------- */}
        {/* Start Vertical Layout Sidebar */}
        {/* ---------------------------------- */}
        <div className="brand-logo d-flex align-items-center justify-content-between">
          <Link to="/dashboard" className="text-nowrap logo-img">
            <img
              src={`${theme === "dark" ? "./assets/logo/logo-light.png" : "./assets/logo/logo-dark.png"}`}
              className="dark-logo text-center"
              alt="Logo-Dark"
              width="50px"
            />
          </Link>
          <Link
            to="#0"
            onClick={onButtonClick}
            className="sidebartoggler ms-auto text-decoration-none fs-5 d-block d-xl-none">
            <i className="ti ti-x" />
          </Link>
        </div>
        <nav className="sidebar-nav scroll-sidebar" data-simplebar>
          <ul id="sidebarnav">
            {/* ---------------------------------- */}
            {/* Home */}
            {/* ---------------------------------- */}
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-4" />
              <span className="hide-menu">Home</span>
            </li>
            {/* ---------------------------------- */}
            {/* Dashboard */}
            {/* ---------------------------------- */}
            <li className="sidebar-item">
              <Link
                className="sidebar-link"
                to="/dashboard"
                id="get-url"
                aria-expanded="false">
                <span>
                  <i className="ti ti-aperture" />
                </span>
                <span className="hide-menu"> Dashboard</span>
              </Link>
            </li>
            <li className="sidebar-item">
              <Link
                className="sidebar-link"
                to="/revenu-trac"
                aria-expanded="false">
                <span>
                  <i className="ti ti-currency-rupee" />
                </span>
                <span className="hide-menu">Revenue Tracker</span>
              </Link>
            </li>
            <li className="sidebar-item">
              <Link
                className="sidebar-link"
                to="/salesfunnel"
                aria-expanded="false">
                <span>
                  <i className="ti ti-currency-dollar" />
                </span>
                <span className="hide-menu">Sales Funnel</span>
              </Link>
            </li>
            <li className="sidebar-item">
              <Link
                className="sidebar-link"
                to="/my-mentor"
                aria-expanded="false">
                <span>
                  <i className="ti ti-user" />
                </span>
                <span className="hide-menu">My Mentor</span>
              </Link>
            </li>
            <li className="sidebar-item">
              <Link
                className="sidebar-link"
                to="/path-unicorn"
                aria-expanded="false">
                <span>
                  <i className="ti ti-map" />
                </span>
                <span className="hide-menu">Path to Unicorn</span>
              </Link>
            </li>
            {/* <li className="sidebar-item">
              <Link
                className="sidebar-link"
                to="/immentor"
                aria-expanded="false">
                <span>
                  <i className="ti ti-playlist" />
                </span>
                <span className="hide-menu">IM Mentor Club</span>
              </Link>
            </li> */}
            {/* ---------------------------------- */}
            {/* Frontend page */}
            {/* ---------------------------------- */}
            <li className="sidebar-item">
              <Link
                className="sidebar-link has-arrow"
                to="#0"
                aria-expanded={isDropdownOpen}
                onClick={toggleDropdown}>
                <span className="d-flex">
                  <i className="ti ti-layout-grid" />
                </span>
                <span className="hide-menu">Startup Resources</span>
              </Link>
              <ul
                className={`first-level ${
                  isDropdownOpen ? "show" : "collapse"
                }`}
                aria-expanded={isDropdownOpen}>
                <li className="sidebar-item">
                  <Link to="/tools" className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-file" />
                    </div>
                    <span className="hide-menu">Tools</span>
                  </Link>
                </li>

                <li className="sidebar-item">
                  <Link to="/template" className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-clipboard" />
                    </div>
                    <span className="hide-menu">Template</span>
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link to="/training-videos" className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-video" />
                    </div>
                    <span className="hide-menu">Training Videos</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="sidebar-item">
              <Link
                className="sidebar-link"
                to="/invester-pool"
                aria-expanded="false">
                <span>
                  <i className="ti ti-users" />
                </span>
                <span className="hide-menu">Investor Pool</span>
              </Link>
            </li>
            <li className="sidebar-item">
              <Link
                className="sidebar-link"
                to="/hiring-assist"
                aria-expanded="false">
                <span>
                  <i className="ti ti-user-plus" />
                </span>
                <span className="hide-menu">Looking For Co-Founder?</span>
              </Link>
            </li>
            <li className="sidebar-item">
              <Link
                className="sidebar-link"
                to="/meta-verse"
                aria-expanded="false">
                <span>
                  <i className="ti ti-user-plus" />
                </span>
                <span className="hide-menu">Meta Verse</span>
              </Link>
            </li>
            <li className="sidebar-item">
              <Link
                className="sidebar-link"
                to="/Upgrade-Beta"
                aria-expanded="false">
                <span>
                  <i className="ti ti-arrow-up-right" />
                </span>
                <span className="hide-menu">Upgrade to Beta</span>
              </Link>
            </li>
            {/* ---------------------------------- */}
            {/* Apps */}
            {/* ---------------------------------- */}
          </ul>
        </nav>
        <div className="fixed-profile p-3 mx-4 mb-2 bg-secondary-subtle rounded mt-3">
          <div className="hstack gap-3">
            <div className="john-img">
              <img
                 src={`${theme === "dark" ? "./assets/logo/logo-light.png" : "./assets/logo/logo-dark.png"}`}
                className="rounded-circle"
                width={40}
                height={40}
                alt="modernize-img"
              />
            </div>
            <div className="john-title">
              <h6 className="mb-0 fs-4 fw-semibold">Startup</h6>
              <span className="fs-2">Profile</span>
            </div>
            <button
              onClick={LogoutHandler}
              className="border-0 bg-transparent text-primary ms-auto"
              tabIndex={0}
              type="button"
              aria-label="logout"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              data-bs-title="logout">
              <i className="ti ti-power fs-6" />
            </button>
          </div>
        </div>
        {/* ---------------------------------- */}
        {/* Start Vertical Layout Sidebar */}
        {/* ---------------------------------- */}
      </div>
    </aside>
  );
};

export default LeftSidebar;
