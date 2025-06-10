import React, { useState } from "react";
import { Link } from "react-router-dom";
import useThemeToggle from "../hooks/useThemeToggle";

const Navigation = ({ onButtonClick }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { theme, toggleTheme } = useThemeToggle();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <>
      {/*  Header Start */}
      <header className="topbar">
        <div className="with-vertical">
          {/* ---------------------------------- */}
          {/* Start Vertical Layout Header */}
          {/* ---------------------------------- */}
          <nav className="navbar navbar-expand-lg p-0">
            <ul className="navbar-nav">
              <li className="nav-item nav-icon-hover-bg rounded-circle ms-n2">
                <Link
                  className="nav-link sidebartoggler"
                  id="headerCollapse"
                  href="#0"
                  onClick={onButtonClick}
                >
                  <i className="ti ti-menu-2" />
                </Link>
              </li>
              <li className="nav-item nav-icon-hover-bg rounded-circle d-none d-lg-flex">
                <Link
                  className="nav-link"
                  href="/#"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <i className="ti ti-search" />
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav quick-links d-none d-lg-flex align-items-center">
              {/* ------------------------------- */}
              {/* start apps Dropdown */}
              {/* ------------------------------- */}
              <li className="nav-item nav-icon-hover-bg rounded w-auto dropdown d-none d-lg-block mx-0">
                <div className="hover-dd">
                  <Link className="nav-link" to="/app-profile">
                    My Profile
                  </Link>
                </div>
              </li>
              {/* ------------------------------- */}
              {/* end apps Dropdown */}
              {/* ------------------------------- */}
              <li className="nav-item dropdown-hover d-none d-lg-block">
                <Link className="nav-link" to="/rivarly-insights">
                  Rivalry Insight
                </Link>
              </li>
              {/* <li className="nav-item dropdown-hover d-none d-lg-block">
                <Link className="nav-link" to="/calendar">
                  Calendar
                </Link>
              </li> */}
              {/* <li className="nav-item dropdown-hover d-none d-lg-block">
                <Link className="nav-link" to="/projection">
                  Projections
                </Link>
              </li> */}
              <li className="nav-item dropdown-hover d-none d-lg-block">
                <Link className="nav-link" to="/business">
                  Business Model
                </Link>
              </li>
              <li className="nav-item dropdown-hover d-none d-lg-block">
                <Link className="nav-link" to="/pitch-deck">
                  Pitch Deck
                </Link>
              </li>
              <li className="nav-item dropdown-hover d-none d-lg-block">
                <Link className="nav-link" to="/idea-validation">
                  Idea Validation
                </Link>
              </li>
              <li className="nav-item dropdown-hover d-none d-lg-block">
                <Link className="nav-link" to="/market-research">
                  Market Research
                </Link>
              </li>
            </ul>
            <div className="d-block d-lg-none py-4">
              <Link href="#0" className="text-nowrap logo-img">
                <img
                  src="./assets/logo/logo-light.png"
                  className="dark-logo"
                  alt="Logo-Dark"
                  width="50px"
                />
              </Link>
            </div>
            <Link
              className="navbar-toggler nav-icon-hover-bg rounded-circle p-0 mx-0 border-0"
              href="/#"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="ti ti-dots fs-7" />
            </Link>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNav"
            >
              <div className="d-flex align-items-center justify-content-between">
                <Link
                  href="/#"
                  className="nav-link nav-icon-hover-bg rounded-circle mx-0 ms-n1 d-flex d-lg-none align-items-center justify-content-center"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#mobilenavbar"
                  aria-controls="offcanvasWithBothOptions"
                >
                  <i className="ti ti-align-justified fs-7" />
                </Link>
                <ul className="navbar-nav flex-row ms-auto align-items-center justify-content-center">

                  {/* ------------------------------- */}
                  {/* start theme Dropdown */}
                  <li className="nav-item nav-icon-hover-bg rounded-circle dropdown">
                    <Link
                      className="nav-link position-relative"
                      href="/#"
                      id="drop2"
                      aria-expanded="false"
                      onClick={(e) => {
                        e.preventDefault();
                        toggleTheme();
                      }}
                    >
                      <i className={`ti ${theme === 'light' ? 'ti-sun' : 'ti-moon'}`} />
                      {/* <div className="notification bg-primary rounded-circle" /> */}
                    </Link>

                  </li>

                  {/* ------------------------------- */}
                  {/* start language Dropdown */}
                  {/* ------------------------------- */}

                  <li className="nav-item nav-icon-hover-bg rounded-circle dropdown">
                    <Link
                      className="nav-link"
                      href="/#"
                      id="drop2"
                      aria-expanded="false"
                    >
                      <img
                        src="./assets/assets/images/svgs/icon-flag-en.svg"
                        alt="modernize-img"
                        width="20px"
                        height="20px"
                        className="rounded-circle object-fit-cover round-20"
                      />
                    </Link>
                    <div
                      className="dropdown-menu dropdown-menu-end dropdown-menu-animate-up"
                      aria-labelledby="drop2"
                    >
                      <div className="message-body">
                        <Link
                          href="/#"
                          className="d-flex align-items-center gap-2 py-3 px-4 dropdown-item"
                        >
                          <div className="position-relative">
                            <img
                              src="./assets/assets/images/svgs/icon-flag-en.svg"
                              alt="modernize-img"
                              width="20px"
                              height="20px"
                              className="rounded-circle object-fit-cover round-20"
                            />
                          </div>
                          <p className="mb-0 fs-3">English (UK)</p>
                        </Link>
                        <Link
                          href="/#"
                          className="d-flex align-items-center gap-2 py-3 px-4 dropdown-item"
                        >
                          <div className="position-relative">
                            <img
                              src="./assets/assets/images/svgs/india-flag.svg"
                              alt="modernize-img"
                              width="20px"
                              height="20px"
                              className="rounded-circle object-fit-cover round-20"
                            />
                          </div>
                          <p className="mb-0 fs-3">Local (Hi)</p>
                        </Link>
                      </div>
                    </div>
                  </li>

                  <li className="nav-item nav-icon-hover-bg rounded-circle dropdown">
                    <Link
                      className="nav-link position-relative"
                      href="/#"
                      id="drop2"
                      aria-expanded="false"
                    >
                      <i className="ti ti-bell-ringing" />
                      <div className="notification bg-primary rounded-circle" />
                    </Link>
                    <div
                      className="dropdown-menu content-dd dropdown-menu-end dropdown-menu-animate-up"
                      aria-labelledby="drop2"
                    >
                      <div className="d-flex align-items-center justify-content-between py-3 px-7">
                        <h5 className="mb-0 fs-5 fw-semibold">Notifications</h5>
                        <span className="badge text-bg-primary rounded-4 px-3 py-1 lh-sm">
                          5 new
                        </span>
                      </div>
                      <div className="message-body" data-simplebar="">
                        <Link
                          href="/#"
                          className="py-6 px-7 d-flex align-items-center dropdown-item"
                        >
                          <span className="me-3">
                            <img
                              src="./assets/assets/images/profile/user-2.jpg"
                              alt="user"
                              className="rounded-circle"
                              width={48}
                              height={48}
                            />
                          </span>
                          <div className="w-100">
                            <h6 className="mb-1 fw-semibold lh-base">
                              Roman Joined the Team!
                            </h6>
                            <span className="fs-2 d-block text-body-secondary">
                              Congratulate him
                            </span>
                          </div>
                        </Link>
                        <Link
                          href="/#"
                          className="py-6 px-7 d-flex align-items-center dropdown-item"
                        >
                          <span className="me-3">
                            <img
                              src="./assets/assets/images/profile/user-3.jpg"
                              alt="user"
                              className="rounded-circle"
                              width={48}
                              height={48}
                            />
                          </span>
                          <div className="w-100">
                            <h6 className="mb-1 fw-semibold lh-base">
                              New message
                            </h6>
                            <span className="fs-2 d-block text-body-secondary">
                              Salma sent you new message
                            </span>
                          </div>
                        </Link>
                        <Link
                          href="/#"
                          className="py-6 px-7 d-flex align-items-center dropdown-item"
                        >
                          <span className="me-3">
                            <img
                              src="./assets/assets/images/profile/user-4.jpg"
                              alt="user"
                              className="rounded-circle"
                              width={48}
                              height={48}
                            />
                          </span>
                          <div className="w-100">
                            <h6 className="mb-1 fw-semibold lh-base">
                              Bianca sent payment
                            </h6>
                            <span className="fs-2 d-block text-body-secondary">
                              Check your earnings
                            </span>
                          </div>
                        </Link>
                        <Link
                          href="/#"
                          className="py-6 px-7 d-flex align-items-center dropdown-item"
                        >
                          <span className="me-3">
                            <img
                              src="./assets/assets/images/profile/user-5.jpg"
                              alt="user"
                              className="rounded-circle"
                              width={48}
                              height={48}
                            />
                          </span>
                          <div className="w-100">
                            <h6 className="mb-1 fw-semibold lh-base">
                              Jolly completed tasks
                            </h6>
                            <span className="fs-2 d-block text-body-secondary">
                              Assign her new tasks
                            </span>
                          </div>
                        </Link>
                        <Link
                          href="/#"
                          className="py-6 px-7 d-flex align-items-center dropdown-item"
                        >
                          <span className="me-3">
                            <img
                              src="./assets/assets/images/profile/user-6.jpg"
                              alt="user"
                              className="rounded-circle"
                              width={48}
                              height={48}
                            />
                          </span>
                          <div className="w-100">
                            <h6 className="mb-1 fw-semibold lh-base">
                              John received payment
                            </h6>
                            <span className="fs-2 d-block text-body-secondary">
                              $230 deducted from account
                            </span>
                          </div>
                        </Link>
                        <Link
                          href="/#"
                          className="py-6 px-7 d-flex align-items-center dropdown-item"
                        >
                          <span className="me-3">
                            <img
                              src="./assets/assets/images/profile/user-7.jpg"
                              alt="user"
                              className="rounded-circle"
                              width={48}
                              height={48}
                            />
                          </span>
                          <div className="w-100">
                            <h6 className="mb-1 fw-semibold lh-base">
                              Roman Joined the Team!
                            </h6>
                            <span className="fs-2 d-block text-body-secondary">
                              Congratulate him
                            </span>
                          </div>
                        </Link>
                      </div>
                      <div className="py-6 px-7 mb-1">
                        <button className="btn btn-outline-primary w-100">
                          See All Notifications
                        </button>
                      </div>
                    </div>
                  </li>
                  {/* ------------------------------- */}
                  {/* end notification Dropdown */}
                  {/* ------------------------------- */}
                  {/* ------------------------------- */}
                  {/* start profile Dropdown */}
                  {/* ------------------------------- */}
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link pe-0"
                      href="/app-profile"
                      id="drop1"
                      aria-expanded="false"
                    >
                      <div className="d-flex align-items-center">
                        <div className="user-profile-img">
                          <img
                            src="./assets/logo/logo-light.png"
                            className="rounded-circle"
                            width={35}
                            height={35}
                            alt="modernize-img"
                          />
                        </div>
                      </div>
                    </Link>
                    <div
                      className="dropdown-menu content-dd dropdown-menu-end dropdown-menu-animate-up"
                      aria-labelledby="drop1"
                    >
                      <div
                        className="profile-dropdown position-relative"
                        data-simplebar=""
                      >
                        <div className="py-3 px-7 pb-0"></div>
                        <div className="d-flex align-items-center py-9 mx-7 border-bottom"></div>
                        <div className="message-body"></div>
                        <div className="d-grid py-4 px-7 pt-8">
                          <div className="upgrade-plan bg-primary-subtle position-relative overflow-hidden rounded-4 p-4 mb-9">
                            <div className="row">
                              <div className="col-md-12 text-center">
                                <h2>Financial Year </h2>
                                <select className="form-control">
                                  <option value="">
                                    Select Financial Year
                                  </option>
                                  <option value="" selected>
                                    2023-24
                                  </option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <Link
                            to="../dark/authentication-login.html"
                            className="btn btn-outline-primary"
                          >
                            Log Out
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                  {/* ------------------------------- */}
                  {/* end profile Dropdown */}
                  {/* ------------------------------- */}
                </ul>
              </div>
            </div>
          </nav>
          {/* ---------------------------------- */}
          {/* End Vertical Layout Header */}
          {/* ---------------------------------- */}
          {/* ------------------------------- */}
          {/* apps Dropdown in Small screen */}
          {/* ------------------------------- */}
          {/*  Mobilenavbar */}
          <div
            className="offcanvas offcanvas-start"
            data-bs-scroll="true"
            tabIndex={-1}
            id="mobilenavbar"
            aria-labelledby="offcanvasWithBothOptionsLabel"
          >
            <nav className="sidebar-nav scroll-sidebar">
              <div className="offcanvas-header justify-content-between">
                <img
                  src="./assets/logo/logo-light.png"
                  className="dark-logo"
                  alt="Logo-Dark"
                  width="50px"
                />
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                />
              </div>
              {/* Mobile Menu */}
              <div className="offcanvas-body h-n80" data-simplebar="">
                <ul id="sidebarnav">
                  {/* My Profile */}
                  <li className="sidebar-item">
                    <Link className="sidebar-link" to="/app-profile">
                      <span>
                        <i className="ti ti-user" />
                      </span>
                      <span className="hide-menu">My Profile</span>
                    </Link>
                  </li>

                  {/* Rivalry Insight */}
                  <li className="sidebar-item">
                    <Link className="sidebar-link" to="/rivarly-insights">
                      <span>
                        <i className="ti ti-insight" />
                      </span>
                      <span className="hide-menu">Rivalry Insight</span>
                    </Link>
                  </li>

                  {/* Projections */}
                  <li className="sidebar-item">
                    <Link className="sidebar-link" to="/projection">
                      <span>
                        <i className="ti ti-chart-line" />
                      </span>
                      <span className="hide-menu">Projections</span>
                    </Link>
                  </li>

                  {/* My Task */}
                  <li className="sidebar-item">
                    <Link className="sidebar-link" to="/my-task">
                      <span>
                        <i className="ti ti-checklist" />
                      </span>
                      <span className="hide-menu">My Task</span>
                    </Link>
                  </li>

                  {/* Business Model */}
                  <li className="sidebar-item">
                    <Link className="sidebar-link" to="/business">
                      <span>
                        <i className="ti ti-briefcase" />
                      </span>
                      <span className="hide-menu">Business Model</span>
                    </Link>
                  </li>

                  {/* Pitch Deck */}
                  <li className="sidebar-item">
                    <Link className="sidebar-link" to="/pitch-deck">
                      <span>
                        <i className="ti ti-presentation" />
                      </span>
                      <span className="hide-menu">Pitch Deck</span>
                    </Link>
                  </li>

                  {/* Idea Validation */}
                  <li className="sidebar-item">
                    <Link className="sidebar-link" to="/idea-validation">
                      <span>
                        <i className="ti ti-lightbulb" />
                      </span>
                      <span className="hide-menu">Idea Validation</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        <div className="app-header with-horizontal">
          <nav className="navbar navbar-expand-xl container-fluid p-0">
            <ul className="navbar-nav align-items-center">
              <li className="nav-item nav-icon-hover-bg rounded-circle d-flex d-xl-none ms-n2">
                <Link
                  className="nav-link sidebartoggler"
                  id="sidebarCollapse"
                  href="#0"
                >
                  asda
                  <i className="ti ti-menu-2" />
                </Link>
              </li>
              <li className="nav-item d-none d-xl-block">
                <Link to="/" className="text-nowrap nav-link">
                  <img
                    src="./assets/assets/images/logos/dark-logo.svg"
                    className="dark-logo"
                    width={180}
                    alt="modernize-img"
                  />
                  <img
                    src="./assets/assets/images/logos/light-logo.svg"
                    className="light-logo"
                    width={180}
                    alt="modernize-img"
                  />
                </Link>
              </li>
              <li className="nav-item nav-icon-hover-bg rounded-circle d-none d-xl-flex">
                <Link
                  className="nav-link"
                  href="/#"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <i className="ti ti-search" />
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav quick-links d-none d-xl-flex align-items-center">
              {/* ------------------------------- */}
              {/* start apps Dropdown */}
              {/* ------------------------------- */}
              <li className="nav-item nav-icon-hover-bg rounded w-auto dropdown d-none d-lg-flex">
                <div className="hover-dd">
                  <Link className="nav-link" href="/#">
                    Apps
                    <span className="mt-1">
                      <i className="ti ti-chevron-down fs-3" />
                    </span>
                  </Link>
                  <div className="dropdown-menu dropdown-menu-nav dropdown-menu-animate-up py-0">
                    <div className="row">
                      <div className="col-8">
                        <div className="ps-7 pt-7">
                          <div className="border-bottom">
                            <div className="row">
                              <div className="col-6">
                                <div className="position-relative">
                                  <Link
                                    to="/chat-app"
                                    className="d-flex align-items-center pb-9 position-relative"
                                  >
                                    <div className="text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                                      <img
                                        src="./assets/assets/images/svgs/icon-dd-chat.svg"
                                        alt="modernize-img"
                                        className="img-fluid"
                                        width={24}
                                        height={24}
                                      />
                                    </div>
                                    <div>
                                      <h6 className="mb-1 fw-semibold fs-3">
                                        Chat Application
                                      </h6>
                                      <span className="fs-2 d-block text-body-secondary">
                                        New messages arrived
                                      </span>
                                    </div>
                                  </Link>
                                  <Link
                                    to="/app-invoice"
                                    className="d-flex align-items-center pb-9 position-relative"
                                  >
                                    <div className="text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                                      <img
                                        src="./assets/assets/images/svgs/icon-dd-invoice.svg"
                                        alt="modernize-img"
                                        className="img-fluid"
                                        width={24}
                                        height={24}
                                      />
                                    </div>
                                    <div>
                                      <h6 className="mb-1 fw-semibold fs-3">
                                        Invoice App
                                      </h6>
                                      <span className="fs-2 d-block text-body-secondary">
                                        Get latest invoice
                                      </span>
                                    </div>
                                  </Link>
                                  <Link
                                    to="/app-contact2"
                                    className="d-flex align-items-center pb-9 position-relative"
                                  >
                                    <div className="text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                                      <img
                                        src="./assets/assets/images/svgs/icon-dd-mobile.svg"
                                        alt="modernize-img"
                                        className="img-fluid"
                                        width={24}
                                        height={24}
                                      />
                                    </div>
                                    <div>
                                      <h6 className="mb-1 fw-semibold fs-3">
                                        Contact Application
                                      </h6>
                                      <span className="fs-2 d-block text-body-secondary">
                                        2 Unsaved Contacts
                                      </span>
                                    </div>
                                  </Link>
                                  <Link
                                    to="/app-email"
                                    className="d-flex align-items-center pb-9 position-relative"
                                  >
                                    <div className="text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                                      <img
                                        src="./assets/assets/images/svgs/icon-dd-message-box.svg"
                                        alt="modernize-img"
                                        className="img-fluid"
                                        width={24}
                                        height={24}
                                      />
                                    </div>
                                    <div>
                                      <h6 className="mb-1 fw-semibold fs-3">
                                        Email App
                                      </h6>
                                      <span className="fs-2 d-block text-body-secondary">
                                        Get new emails
                                      </span>
                                    </div>
                                  </Link>
                                </div>
                              </div>
                              <div className="col-6">
                                <div className="position-relative">
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center pb-9 position-relative"
                                  >
                                    <div className="text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                                      <img
                                        src="./assets/assets/images/svgs/icon-dd-cart.svg"
                                        alt="modernize-img"
                                        className="img-fluid"
                                        width={24}
                                        height={24}
                                      />
                                    </div>
                                    <div>
                                      <h6 className="mb-1 fw-semibold fs-3">
                                        User Profile
                                      </h6>
                                      <span className="fs-2 d-block text-body-secondary">
                                        learn more information
                                      </span>
                                    </div>
                                  </Link>
                                  <Link
                                    to="/calendar"
                                    className="d-flex align-items-center pb-9 position-relative"
                                  >
                                    <div className="text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                                      <img
                                        src="./assets/assets/images/svgs/icon-dd-date.svg"
                                        alt="modernize-img"
                                        className="img-fluid"
                                        width={24}
                                        height={24}
                                      />
                                    </div>
                                    <div>
                                      <h6 className="mb-1 fw-semibold fs-3">
                                        Calendar App
                                      </h6>
                                      <span className="fs-2 d-block text-body-secondary">
                                        Get dates
                                      </span>
                                    </div>
                                  </Link>
                                  <Link
                                    to="/app-contact"
                                    className="d-flex align-items-center pb-9 position-relative"
                                  >
                                    <div className="text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                                      <img
                                        src="./assets/assets/images/svgs/icon-dd-lifebuoy.svg"
                                        alt="modernize-img"
                                        className="img-fluid"
                                        width={24}
                                        height={24}
                                      />
                                    </div>
                                    <div>
                                      <h6 className="mb-1 fw-semibold fs-3">
                                        Contact List Table
                                      </h6>
                                      <span className="fs-2 d-block text-body-secondary">
                                        Add new contact
                                      </span>
                                    </div>
                                  </Link>
                                  <Link
                                    to="/my-task"
                                    className="d-flex align-items-center pb-9 position-relative"
                                  >
                                    <div className="text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                                      <img
                                        src="./assets/assets/images/svgs/icon-dd-application.svg"
                                        alt="modernize-img"
                                        className="img-fluid"
                                        width={24}
                                        height={24}
                                      />
                                    </div>
                                    <div>
                                      <h6 className="mb-1 fw-semibold fs-3">
                                        Notes Application
                                      </h6>
                                      <span className="fs-2 d-block text-body-secondary">
                                        To-do and Daily tasks
                                      </span>
                                    </div>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row align-items-center py-3">
                            <div className="col-8">
                              <Link
                                className="fw-semibold d-flex align-items-center lh-1"
                                href="/#"
                              >
                                <i className="ti ti-help fs-6 me-2" />
                                Frequently Asked Questions
                              </Link>
                            </div>
                            <div className="col-4">
                              <div className="d-flex justify-content-end pe-4">
                                <button className="btn btn-primary">
                                  Check
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-4 ms-n4">
                        <div className="position-relative p-7 border-start h-100">
                          <h5 className="fs-5 mb-9 fw-semibold">Quick Links</h5>
                          <ul className="">
                            <li className="mb-3">
                              <Link
                                className="fw-semibold bg-hover-primary"
                                to="../dark/page-pricing.html"
                              >
                                Pricing Page
                              </Link>
                            </li>
                            <li className="mb-3">
                              <Link
                                className="fw-semibold bg-hover-primary"
                                to="../dark/authentication-login.html"
                              >
                                Authentication Design
                              </Link>
                            </li>
                            <li className="mb-3">
                              <Link
                                className="fw-semibold bg-hover-primary"
                                to="../dark/authentication-register.html"
                              >
                                Register Now
                              </Link>
                            </li>
                            <li className="mb-3">
                              <Link
                                className="fw-semibold bg-hover-primary"
                                to="../dark/authentication-error.html"
                              >
                                404 Error Page
                              </Link>
                            </li>
                            <li className="mb-3">
                              <Link
                                className="fw-semibold bg-hover-primary"
                                to="/my-task"
                              >
                                Notes App
                              </Link>
                            </li>
                            <li className="mb-3">
                              <Link
                                className="fw-semibold bg-hover-primary"
                                to="#"
                              >
                                User Application
                              </Link>
                            </li>
                            <li className="mb-3">
                              <Link
                                className="fw-semibold bg-hover-primary"
                                to="../dark/page-account-settings.html"
                              >
                                Account Settings
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* ------------------------------- */}
              {/* end apps Dropdown */}
              {/* ------------------------------- */}
              <li className="nav-item dropdown-hover d-none d-lg-block">
                <Link className="nav-link" to="/chat-app">
                  Chat
                </Link>
              </li>
              <li className="nav-item dropdown-hover d-none d-lg-block">
                <Link className="nav-link" to="/calendar">
                  Calendar
                </Link>
              </li>
              <li className="nav-item dropdown-hover d-none d-lg-block">
                <Link className="nav-link" to="/app-email">
                  Email
                </Link>
              </li>
            </ul>
            <div className="d-block d-xl-none">
              <Link to="/" className="text-nowrap nav-link">
                <img
                  src="./assets/assets/images/logos/dark-logo.svg"
                  width={180}
                  alt="modernize-img"
                />
              </Link>
            </div>
            <Link
              className="navbar-toggler nav-icon-hover-bg rounded-circle p-0 mx-0 border-0"
              href="/#"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="p-2">
                <i className="ti ti-dots fs-7" />
              </span>
            </Link>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNav"
            >
              <div className="d-flex align-items-center justify-content-between px-0 px-xl-8">
                <Link
                  href="/#"
                  className="nav-link round-40 p-1 ps-0 d-flex d-xl-none align-items-center justify-content-center"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#mobilenavbar"
                  aria-controls="offcanvasWithBothOptions"
                >
                  <i className="ti ti-align-justified fs-7" />
                </Link>
                <ul className="navbar-nav flex-row ms-auto align-items-center justify-content-center">
                  {/* ------------------------------- */}
                  {/* start language Dropdown */}
                  {/* ------------------------------- */}
                  <li className="nav-item nav-icon-hover-bg rounded-circle">
                    <Link className="nav-link moon dark-layout" href="/#">
                      <i className="ti ti-moon moon" />
                    </Link>
                    <Link className="nav-link sun light-layout" href="/#">
                      <i className="ti ti-sun sun" />
                    </Link>
                  </li>
                  <li className="nav-item nav-icon-hover-bg rounded-circle dropdown">
                    <Link
                      className="nav-link"
                      href="/#"
                      id="drop2"
                      aria-expanded="false"
                    >
                      <img
                        src="./assets/assets/images/svgs/icon-flag-en.svg"
                        alt="modernize-img"
                        width="20px"
                        height="20px"
                        className="rounded-circle object-fit-cover round-20"
                      />
                    </Link>
                    <div
                      className="dropdown-menu dropdown-menu-end dropdown-menu-animate-up"
                      aria-labelledby="drop2"
                    >
                      <div className="message-body">
                        <Link
                          href="/#"
                          className="d-flex align-items-center gap-2 py-3 px-4 dropdown-item"
                        >
                          <div className="position-relative">
                            <img
                              src="./assets/assets/images/svgs/icon-flag-en.svg"
                              alt="modernize-img"
                              width="20px"
                              height="20px"
                              className="rounded-circle object-fit-cover round-20"
                            />
                          </div>
                          <p className="mb-0 fs-3">English (UK)</p>
                        </Link>
                        <Link
                          href="/#"
                          className="d-flex align-items-center gap-2 py-3 px-4 dropdown-item"
                        >
                          <div className="position-relative">
                            <img
                              src="./assets/assets/images/svgs/icon-flag-cn.svg"
                              alt="modernize-img"
                              width="20px"
                              height="20px"
                              className="rounded-circle object-fit-cover round-20"
                            />
                          </div>
                          <p className="mb-0 fs-3">中国人 (Chinese)</p>
                        </Link>
                        <Link
                          href="/#"
                          className="d-flex align-items-center gap-2 py-3 px-4 dropdown-item"
                        >
                          <div className="position-relative">
                            <img
                              src="./assets/assets/images/svgs/icon-flag-fr.svg"
                              alt="modernize-img"
                              width="20px"
                              height="20px"
                              className="rounded-circle object-fit-cover round-20"
                            />
                          </div>
                          <p className="mb-0 fs-3">français (French)</p>
                        </Link>
                        <Link
                          href="/#"
                          className="d-flex align-items-center gap-2 py-3 px-4 dropdown-item"
                        >
                          <div className="position-relative">
                            <img
                              src="./assets/assets/images/svgs/icon-flag-sa.svg"
                              alt="modernize-img"
                              width="20px"
                              height="20px"
                              className="rounded-circle object-fit-cover round-20"
                            />
                          </div>
                          <p className="mb-0 fs-3">عربي (Arabic)</p>
                        </Link>
                      </div>
                    </div>
                  </li>
                  {/* ------------------------------- */}
                  {/* end language Dropdown */}
                  {/* ------------------------------- */}
                  {/* ------------------------------- */}
                  {/* start shopping cart Dropdown */}
                  {/* ------------------------------- */}
                  <li className="nav-item nav-icon-hover-bg rounded-circle">
                    <Link
                      className="nav-link position-relative"
                      href="/#"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasRight"
                      aria-controls="offcanvasRight"
                    >
                      <i className="ti ti-basket" />
                      <span className="popup-badge rounded-pill bg-danger text-white fs-2">
                        2
                      </span>
                    </Link>
                  </li>
                  {/* ------------------------------- */}
                  {/* end shopping cart Dropdown */}
                  {/* ------------------------------- */}
                  {/* ------------------------------- */}
                  {/* start notification Dropdown */}
                  {/* ------------------------------- */}
                  <li className="nav-item nav-icon-hover-bg rounded-circle dropdown">
                    <Link
                      className="nav-link position-relative"
                      href="/#"
                      id="drop2"
                      aria-expanded="false"
                    >
                      <i className="ti ti-bell-ringing" />
                      <div className="notification bg-primary rounded-circle" />
                    </Link>
                    <div
                      className="dropdown-menu content-dd dropdown-menu-end dropdown-menu-animate-up"
                      aria-labelledby="drop2"
                    >
                      <div className="d-flex align-items-center justify-content-between py-3 px-7">
                        <h5 className="mb-0 fs-5 fw-semibold">Notifications</h5>
                        <span className="badge text-bg-primary rounded-4 px-3 py-1 lh-sm">
                          5 new
                        </span>
                      </div>
                      <div className="message-body" data-simplebar="">
                        <Link
                          href="/#"
                          className="py-6 px-7 d-flex align-items-center dropdown-item"
                        >
                          <span className="me-3">
                            <img
                              src="./assets/assets/images/profile/user-2.jpg"
                              alt="user"
                              className="rounded-circle"
                              width={48}
                              height={48}
                            />
                          </span>
                          <div className="w-100">
                            <h6 className="mb-1 fw-semibold lh-base">
                              Roman Joined the Team!
                            </h6>
                            <span className="fs-2 d-block text-body-secondary">
                              Congratulate him
                            </span>
                          </div>
                        </Link>
                        <Link
                          href="/#"
                          className="py-6 px-7 d-flex align-items-center dropdown-item"
                        >
                          <span className="me-3">
                            <img
                              src="./assets/assets/images/profile/user-3.jpg"
                              alt="user"
                              className="rounded-circle"
                              width={48}
                              height={48}
                            />
                          </span>
                          <div className="w-100">
                            <h6 className="mb-1 fw-semibold lh-base">
                              New message
                            </h6>
                            <span className="fs-2 d-block text-body-secondary">
                              Salma sent you new message
                            </span>
                          </div>
                        </Link>
                        <Link
                          href="/#"
                          className="py-6 px-7 d-flex align-items-center dropdown-item"
                        >
                          <span className="me-3">
                            <img
                              src="./assets/assets/images/profile/user-4.jpg"
                              alt="user"
                              className="rounded-circle"
                              width={48}
                              height={48}
                            />
                          </span>
                          <div className="w-100">
                            <h6 className="mb-1 fw-semibold lh-base">
                              Bianca sent payment
                            </h6>
                            <span className="fs-2 d-block text-body-secondary">
                              Check your earnings
                            </span>
                          </div>
                        </Link>
                        <Link
                          href="/#"
                          className="py-6 px-7 d-flex align-items-center dropdown-item"
                        >
                          <span className="me-3">
                            <img
                              src="./assets/assets/images/profile/user-5.jpg"
                              alt="user"
                              className="rounded-circle"
                              width={48}
                              height={48}
                            />
                          </span>
                          <div className="w-100">
                            <h6 className="mb-1 fw-semibold lh-base">
                              Jolly completed tasks
                            </h6>
                            <span className="fs-2 d-block text-body-secondary">
                              Assign her new tasks
                            </span>
                          </div>
                        </Link>
                        <Link
                          href="/#"
                          className="py-6 px-7 d-flex align-items-center dropdown-item"
                        >
                          <span className="me-3">
                            <img
                              src="./assets/assets/images/profile/user-6.jpg"
                              alt="user"
                              className="rounded-circle"
                              width={48}
                              height={48}
                            />
                          </span>
                          <div className="w-100">
                            <h6 className="mb-1 fw-semibold lh-base">
                              John received payment
                            </h6>
                            <span className="fs-2 d-block text-body-secondary">
                              $230 deducted from account
                            </span>
                          </div>
                        </Link>
                        <Link
                          href="/#"
                          className="py-6 px-7 d-flex align-items-center dropdown-item"
                        >
                          <span className="me-3">
                            <img
                              src="./assets/assets/images/profile/user-7.jpg"
                              alt="user"
                              className="rounded-circle"
                              width={48}
                              height={48}
                            />
                          </span>
                          <div className="w-100">
                            <h6 className="mb-1 fw-semibold lh-base">
                              Roman Joined the Team!
                            </h6>
                            <span className="fs-2 d-block text-body-secondary">
                              Congratulate him
                            </span>
                          </div>
                        </Link>
                      </div>
                      <div className="py-6 px-7 mb-1">
                        <button className="btn btn-outline-primary w-100">
                          See All Notifications
                        </button>
                      </div>
                    </div>
                  </li>
                  {/* ------------------------------- */}
                  {/* end notification Dropdown */}
                  {/* ------------------------------- */}
                  {/* ------------------------------- */}
                  {/* start profile Dropdown */}
                  {/* ------------------------------- */}
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link pe-0"
                      href="/#"
                      id="drop1"
                      aria-expanded="false"
                    >
                      <div className="d-flex align-items-center">
                        <div className="user-profile-img">
                          <img
                            src="./assets/assets/images/profile/user-1.jpg"
                            className="rounded-circle"
                            width={35}
                            height={35}
                            alt="modernize-img"
                          />
                        </div>
                      </div>
                    </Link>
                    <div
                      className="dropdown-menu content-dd dropdown-menu-end dropdown-menu-animate-up"
                      aria-labelledby="drop1"
                    >
                      <div
                        className="profile-dropdown position-relative"
                        data-simplebar=""
                      >
                        <div className="py-3 px-7 pb-0"></div>
                        <div className="d-flex align-items-center py-9 mx-7 border-bottom"></div>
                        <div className="message-body">
                          <Link
                            to="#"
                            className="py-8 px-7 mt-8 d-flex align-items-center"
                          >
                            <span className="d-flex align-items-center justify-content-center text-bg-light rounded-1 p-6">
                              <img
                                src="./assets/logo/logo-light.png"
                                alt="modernize-img"
                                width={24}
                                height={24}
                              />
                            </span>
                            <div className="w-100 ps-3">
                              <h6 className="mb-1 fs-3 fw-semibold lh-base">
                                My Profile
                              </h6>
                              <span className="fs-2 d-block text-body-secondary">
                                Account Settings
                              </span>
                            </div>
                          </Link>
                          <Link
                            to="/app-email"
                            className="py-8 px-7 d-flex align-items-center"
                          >
                            <span className="d-flex align-items-center justify-content-center text-bg-light rounded-1 p-6">
                              <img
                                src="./assets/assets/images/svgs/icon-inbox.svg"
                                alt="modernize-img"
                                width={24}
                                height={24}
                              />
                            </span>
                            <div className="w-100 ps-3">
                              <h6 className="mb-1 fs-3 fw-semibold lh-base">
                                My Inbox
                              </h6>
                              <span className="fs-2 d-block text-body-secondary">
                                Messages &amp; Emails
                              </span>
                            </div>
                          </Link>
                          <Link
                            to="/my-task"
                            className="py-8 px-7 d-flex align-items-center"
                          >
                            <span className="d-flex align-items-center justify-content-center text-bg-light rounded-1 p-6">
                              <img
                                src="./assets/assets/images/svgs/icon-tasks.svg"
                                alt="modernize-img"
                                width={24}
                                height={24}
                              />
                            </span>
                            <div className="w-100 ps-3">
                              <h6 className="mb-1 fs-3 fw-semibold lh-base">
                                My Task
                              </h6>
                              <span className="fs-2 d-block text-body-secondary">
                                To-do and Daily Tasks
                              </span>
                            </div>
                          </Link>
                        </div>
                        <div className="d-grid py-4 px-7 pt-8">
                          <div className="upgrade-plan bg-primary-subtle position-relative overflow-hidden rounded-4 p-4 mb-9">
                            <div className="row"></div>
                          </div>
                          <Link
                            to="../dark/authentication-login.html"
                            className="btn btn-outline-primary"
                          >
                            Log Out
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                  {/* ------------------------------- */}
                  {/* end profile Dropdown */}
                  {/* ------------------------------- */}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
      {/*  Header End */}
      <aside className="left-sidebar with-horizontal">
        {/* Sidebar scroll*/}
        <div>
          {/* Sidebar navigation*/}
          <nav
            id="sidebarnavh"
            className="sidebar-nav scroll-sidebar container-fluid"
          >
            <ul id="sidebarnav">
              {/* ============================= */}
              {/* Home */}
              {/* ============================= */}
              <li className="nav-small-cap">
                <i className="ti ti-dots nav-small-cap-icon fs-4" />
                <span className="hide-menu">Home</span>
              </li>
              {/* =================== */}
              {/* Dashboard */}
              {/* =================== */}
              <li className="sidebar-item">
                <Link
                  className="sidebar-link has-arrow"
                  href="/#"
                  aria-expanded="false"
                >
                  <span>
                    <i className="ti ti-home-2" />
                  </span>
                  <span className="hide-menu">Dashboard</span>
                </Link>
                <ul aria-expanded="false" className="collapse first-level">
                  <li className="sidebar-item">
                    <Link to="/" className="sidebar-link">
                      <i className="ti ti-aperture" />
                      <span className="hide-menu">Modern</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link to="../dark/index2.html" className="sidebar-link">
                      <i className="ti ti-shopping-cart" />
                      <span className="hide-menu">eCommerce</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link to="../dark/index3.html" className="sidebar-link">
                      <i className="ti ti-currency-dollar" />
                      <span className="hide-menu">NFT</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link to="../dark/index4.html" className="sidebar-link">
                      <i className="ti ti-cpu" />
                      <span className="hide-menu">Crypto</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link to="../dark/index5.html" className="sidebar-link">
                      <i className="ti ti-activity-heartbeat" />
                      <span className="hide-menu">General</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link to="../dark/index6.html" className="sidebar-link">
                      <i className="ti ti-playlist" />
                      <span className="hide-menu">Music</span>
                    </Link>
                  </li>
                </ul>
              </li>
              {/* ============================= */}
              {/* Apps */}
              {/* ============================= */}
              <li className="nav-small-cap">
                <i className="ti ti-dots nav-small-cap-icon fs-4" />
                <span className="hide-menu">Apps</span>
              </li>
              <li className="sidebar-item">
                <Link
                  className="sidebar-link two-column has-arrow"
                  href="/#"
                  aria-expanded="false"
                >
                  <span>
                    <i className="ti ti-archive" />
                  </span>
                  <span className="hide-menu">Apps</span>
                </Link>
                <ul aria-expanded="false" className="collapse first-level">
                  <li className="sidebar-item">
                    <Link to="/calendar" className="sidebar-link">
                      <i className="ti ti-calendar" />
                      <span className="hide-menu">Calendar</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link to="../dark/app-kanban.html" className="sidebar-link">
                      <i className="ti ti-layout-kanban" />
                      <span className="hide-menu">Kanban</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link to="/chat-app" className="sidebar-link">
                      <i className="ti ti-message-dots" />
                      <span className="hide-menu">Chat</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link
                      className="sidebar-link"
                      to="/app-email"
                      aria-expanded="false"
                    >
                      <span>
                        <i className="ti ti-mail" />
                      </span>
                      <span className="hide-menu">Email</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link to="/app-contact" className="sidebar-link">
                      <i className="ti ti-phone" />
                      <span className="hide-menu">Contact Table</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link to="/app-contact2" className="sidebar-link">
                      <i className="ti ti-list-details" />
                      <span className="hide-menu">Contact List</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link to="/my-task" className="sidebar-link">
                      <i className="ti ti-notes" />
                      <span className="hide-menu">Notes</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link to="/app-invoice" className="sidebar-link">
                      <i className="ti ti-file-text" />
                      <span className="hide-menu">Invoice</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link to="/app-profile" className="sidebar-link">
                      <i className="ti ti-user-circle" />
                      <span className="hide-menu">User Profile</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link to="../dark/blog-posts.html" className="sidebar-link">
                      <i className="ti ti-article" />
                      <span className="hide-menu">Posts</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link
                      to="../dark/blog-detail.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-details" />
                      <span className="hide-menu">Detail</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link to="../dark/eco-shop.html" className="sidebar-link">
                      <i className="ti ti-shopping-cart" />
                      <span className="hide-menu">Shop</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link
                      to="../dark/eco-shop-detail.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-basket" />
                      <span className="hide-menu">Shop Detail</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link
                      to="../dark/eco-product-list.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-list-check" />
                      <span className="hide-menu">List</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link
                      to="../dark/eco-checkout.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-brand-shopee" />
                      <span className="hide-menu">Checkout</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link
                      className="sidebar-link"
                      to="../dark/eco-add-product.html"
                    >
                      <i className="ti ti-file-plus" />
                      <span className="hide-menu">Add Product</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link
                      className="sidebar-link"
                      to="../dark/eco-edit-product.html"
                    >
                      <i className="ti ti-file-pencil" />
                      <span className="hide-menu">Edit Product</span>
                    </Link>
                  </li>
                </ul>
              </li>
              {/* ============================= */}
              {/* Frontend pages */}
              {/* ============================= */}
              <li className="nav-small-cap">
                <i className="ti ti-dots nav-small-cap-icon fs-4" />
                <span className="hide-menu">Frontend pages</span>
              </li>
              {/* =================== */}
              {/* pages */}
              {/* =================== */}
              <li className="sidebar-item">
                <Link
                  className="sidebar-link has-arrow"
                  href="/#"
                  aria-expanded="false"
                >
                  <span className="rounded-3">
                    <i className="ti ti-app-window" />
                  </span>
                  <span className="hide-menu">Frontend pages</span>
                </Link>
                <ul aria-expanded="false" className="collapse first-level">
                  <li className="sidebar-item">
                    <Link
                      to="../dark/frontend-landingpage.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Homepage</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link
                      to="../dark/frontend-aboutpage.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-circle" />
                      <span className="hide-menu">About Us</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link
                      to="../dark/frontend-contactpage.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Contact Us</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link
                      to="../dark/frontend-blogpage.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Blog</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link
                      to="../dark/frontend-blogdetailpage.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Blog Details</span>
                    </Link>
                  </li>
                </ul>
              </li>
              {/* ============================= */}
              {/* PAGES */}
              {/* ============================= */}
              <li className="nav-small-cap">
                <i className="ti ti-dots nav-small-cap-icon fs-4" />
                <span className="hide-menu">PAGES</span>
              </li>
              <li className="sidebar-item">
                <Link
                  className="sidebar-link has-arrow"
                  href="/#"
                  aria-expanded="false"
                >
                  <span>
                    <i className="ti ti-notebook" />
                  </span>
                  <span className="hide-menu">Pages</span>
                </Link>
                <ul aria-expanded="false" className="collapse first-level">
                  <li className="sidebar-item">
                    <Link to="../dark/page-faq.html" className="sidebar-link">
                      <i className="ti ti-help" />
                      <span className="hide-menu">FAQ</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link
                      to="../dark/page-account-settings.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-user-circle" />
                      <span className="hide-menu">Account Setting</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link
                      to="../dark/page-pricing.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-currency-dollar" />
                      <span className="hide-menu">Pricing</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link
                      to="../dark/widgets-cards.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-cards" />
                      <span className="hide-menu">Card</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link
                      to="../dark/widgets-banners.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-ad" />
                      <span className="hide-menu">Banner</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link
                      to="../dark/widgets-charts.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-chart-bar" />
                      <span className="hide-menu">Charts</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link to="/" className="sidebar-link">
                      <i className="ti ti-app-window" />
                      <span className="hide-menu">Landing Page</span>
                    </Link>
                  </li>
                </ul>
              </li>
              {/* ============================= */}
              {/* UI */}
              {/* ============================= */}
              <li className="nav-small-cap">
                <i className="ti ti-dots nav-small-cap-icon fs-4" />
                <span className="hide-menu">UI</span>
              </li>
              {/* =================== */}
              {/* UI Elements */}
              {/* =================== */}
              <li className="sidebar-item mega-dropdown">
                <Link
                  className="sidebar-link has-arrow"
                  href="/#"
                  aria-expanded="false"
                >
                  <span className="rounded-3">
                    <i className="ti ti-layout-grid" />
                  </span>
                  <span className="hide-menu">UI</span>
                </Link>
                <ul aria-expanded="false" className="collapse first-level">
                  <li className="sidebar-item">
                    <Link
                      to="../dark/ui-accordian.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Accordian</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link to="../dark/ui-badge.html" className="sidebar-link">
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Badge</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link to="../dark/ui-buttons.html" className="sidebar-link">
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Buttons</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link
                      to="../dark/ui-dropdowns.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Dropdowns</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link to="../dark/ui-modals.html" className="sidebar-link">
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Modals</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link to="../dark/ui-tab.html" className="sidebar-link">
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Tab</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link
                      to="../dark/ui-tooltip-popover.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Tooltip &amp; Popover</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link
                      to="../dark/ui-notification.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Alerts</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link
                      to="../dark/ui-progressbar.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Progressbar</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link
                      to="../dark/ui-pagination.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Pagination</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link
                      to="../dark/ui-typography.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Typography</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link
                      to="../dark/ui-bootstrap-ui.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Bootstrap UI</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link
                      to="../dark/ui-breadcrumb.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Breadcrumb</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link
                      to="../dark/ui-offcanvas.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Offcanvas</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link to="../dark/ui-lists.html" className="sidebar-link">
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Lists</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link to="../dark/ui-grid.html" className="sidebar-link">
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Grid</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link
                      to="../dark/ui-carousel.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Carousel</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link
                      to="../dark/ui-scrollspy.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Scrollspy</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link to="../dark/ui-spinner.html" className="sidebar-link">
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Spinner</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link to="../dark/ui-link.html" className="sidebar-link">
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Link</span>
                    </Link>
                  </li>
                </ul>
              </li>
              {/* ============================= */}
              {/* Forms */}
              {/* ============================= */}
              <li className="nav-small-cap">
                <i className="ti ti-dots nav-small-cap-icon fs-4" />
                <span className="hide-menu">Forms</span>
              </li>
              {/* =================== */}
              {/* Forms */}
              {/* =================== */}
              <li className="sidebar-item">
                <Link
                  className="sidebar-link two-column has-arrow"
                  href="/#"
                  aria-expanded="false"
                >
                  <span className="rounded-3">
                    <i className="ti ti-file-text" />
                  </span>
                  <span className="hide-menu">Forms</span>
                </Link>
                <ul aria-expanded="false" className="collapse first-level">
                  {/* form elements */}
                  <li className="sidebar-item">
                    <Link
                      to="../dark/form-inputs.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Forms Input</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link
                      to="../dark/form-input-groups.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Input Groups</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link
                      to="../dark/form-input-grid.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Input Grid</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link
                      to="../dark/form-checkbox-radio.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Checkbox &amp; Radios</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link
                      to="../dark/form-bootstrap-switch.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Bootstrap Switch</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link
                      to="../dark/form-select2.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Select2</span>
                    </Link>
                  </li>
                  {/* form inputs */}
                  <li className="sidebar-item">
                    <Link to="../dark/form-basic.html" className="sidebar-link">
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Basic Form</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link
                      to="../dark/form-vertical.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Form Vertical</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link
                      to="../dark/form-horizontal.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Form Horizontal</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link
                      to="../dark/form-actions.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Form Actions</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link
                      to="../dark/form-row-separator.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Row Separator</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link
                      to="../dark/form-bordered.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Form Bordered</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link
                      to="../dark/form-detail.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Form Detail</span>
                    </Link>
                  </li>
                  {/* form wizard */}
                  <li className="sidebar-item">
                    <Link
                      to="../dark/form-wizard.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Form Wizard</span>
                    </Link>
                  </li>
                  {/* Quill Editor */}
                  <li className="sidebar-item">
                    <Link
                      to="../dark/form-editor-quill.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Quill Editor</span>
                    </Link>
                  </li>
                </ul>
              </li>
              {/* ============================= */}
              {/* Tables */}
              {/* ============================= */}
              <li className="nav-small-cap">
                <i className="ti ti-dots nav-small-cap-icon fs-4" />
                <span className="hide-menu">Tables</span>
              </li>
              {/* =================== */}
              {/* Bootstrap Table */}
              {/* =================== */}
              <li className="sidebar-item">
                <Link
                  className="sidebar-link has-arrow"
                  href="/#"
                  aria-expanded="false"
                >
                  <span className="rounded-3">
                    <i className="ti ti-layout-sidebar" />
                  </span>
                  <span className="hide-menu">Tables</span>
                </Link>
                <ul aria-expanded="false" className="collapse first-level">
                  <li className="sidebar-item">
                    <Link
                      to="../dark/table-basic.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Basic Table</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link
                      to="../dark/table-dark-basic.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Dark Basic Table</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link
                      to="../dark/table-sizing.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Sizing Table</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link
                      to="../dark/table-layout-coloured.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Coloured Table</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link
                      to="../dark/table-datatable-basic.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Basic Initialisation</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link
                      to="../dark/table-datatable-api.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-circle" />
                      <span className="hide-menu">API</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link
                      to="../dark/table-datatable-advanced.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Advanced Initialisation</span>
                    </Link>
                  </li>
                </ul>
              </li>
              {/* ============================= */}
              {/* Charts */}
              {/* ============================= */}
              <li className="nav-small-cap">
                <i className="ti ti-dots nav-small-cap-icon fs-4" />
                <span className="hide-menu">Charts</span>
              </li>
              {/* =================== */}
              {/* Apex Chart */}
              {/* =================== */}
              <li className="sidebar-item">
                <Link
                  className="sidebar-link has-arrow"
                  href="/#"
                  aria-expanded="false"
                >
                  <span className="rounded-3">
                    <i className="ti ti-chart-pie" />
                  </span>
                  <span className="hide-menu">Charts</span>
                </Link>
                <ul aria-expanded="false" className="collapse first-level">
                  <li className="sidebar-item">
                    <Link
                      to="../dark/chart-apex-line.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Line Chart</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link
                      to="../dark/chart-apex-area.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Area Chart</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link
                      to="../dark/chart-apex-bar.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Bar Chart</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link
                      to="../dark/chart-apex-pie.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Pie Chart</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link
                      to="../dark/chart-apex-radial.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Radial Chart</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link
                      to="../dark/chart-apex-radar.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Radar Chart</span>
                    </Link>
                  </li>
                </ul>
              </li>
              {/* ============================= */}
              {/* Icons */}
              {/* ============================= */}
              <li className="nav-small-cap">
                <i className="ti ti-dots nav-small-cap-icon fs-4" />
                <span className="hide-menu">Icons</span>
              </li>
              {/* =================== */}
              {/* Tabler Icon */}
              {/* =================== */}
              <li className="sidebar-item">
                <Link
                  className="sidebar-link has-arrow"
                  href="/#"
                  aria-expanded="false"
                >
                  <span className="rounded-3">
                    <i className="ti ti-archive" />
                  </span>
                  <span className="hide-menu">Icon</span>
                </Link>
                <ul aria-expanded="false" className="collapse first-level">
                  <li className="sidebar-item">
                    <Link
                      to="../dark/icon-tabler.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Tabler Icon</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link to="../dark/icon-solar.html" className="sidebar-link">
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Solar Icon</span>
                    </Link>
                  </li>
                </ul>
              </li>
              {/* multi level */}
              <li className="sidebar-item">
                <Link
                  className="sidebar-link has-arrow"
                  href="/#"
                  aria-expanded="false"
                >
                  <span className="rounded-3">
                    <iconify-icon
                      icon="solar:airbuds-case-minimalistic-line-duotone"
                      className="ti"
                    />
                  </span>
                  <span className="hide-menu">Multi DD</span>
                </Link>
                <ul aria-expanded="false" className="collapse first-level">
                  <li className="sidebar-item">
                    <Link to="/" className="sidebar-link">
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Documentation</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link href="/#" className="sidebar-link">
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Page 1</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link href="/#" className="sidebar-link has-arrow">
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Page 2</span>
                    </Link>
                    <ul aria-expanded="false" className="collapse second-level">
                      <li className="sidebar-item">
                        <Link href="/#" className="sidebar-link">
                          <i className="ti ti-circle" />
                          <span className="hide-menu">Page 2.1</span>
                        </Link>
                      </li>
                      <li className="sidebar-item">
                        <Link href="/#" className="sidebar-link">
                          <i className="ti ti-circle" />
                          <span className="hide-menu">Page 2.2</span>
                        </Link>
                      </li>
                      <li className="sidebar-item">
                        <Link href="/#" className="sidebar-link">
                          <i className="ti ti-circle" />
                          <span className="hide-menu">Page 2.3</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="sidebar-item">
                    <Link href="/#" className="sidebar-link">
                      <span className="hide-menu">Page 3</span>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          {/* End Sidebar navigation */}
        </div>
        {/* End Sidebar scroll*/}
      </aside>
    </>
  );
};

export default Navigation;

