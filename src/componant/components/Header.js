// src/components/Header.jsx
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaBars, FaUser, FaChartPie, FaUsers, FaChalkboardTeacher, FaUniversity } from 'react-icons/fa';
import theme from '../NewDashboard/styles/styles';
import '../NewDashboard/styles/Header.css';

const Header = ({ showMobileMenu, isMobile, toggleSidebar, toggleHeaderMenu }) => {
  const navigate = useNavigate();

  const navLinks = [
    { to: '/app-profile', icon: <FaUser />, label: 'My Profile' },
    { to: '/current-quadrant', icon: <FaChartPie />, label: 'Current Quadrant' },
    { to: '/virtual-cxo-panel', icon: <FaUsers />, label: 'Virtual CXO Panel' },
    { to: '/mentorship', icon: <FaChalkboardTeacher />, label: 'Mentorship' },
    { to: '/im-startup-school', icon: <FaUniversity />, label: 'IM Startup School' },
  ];

  return (
    <>
      {/* Mobile Header */}
      {isMobile && (
        <div
          className="d-flex justify-content-between align-items-center px-3 py-3 border-bottom"
          style={{ backgroundColor: theme.backgroundColor.white, zIndex: 1050 }}
        >
          <div>
            <button className="btn btn-outline-secondary" onClick={toggleSidebar}>
              <FaBars />
            </button>
          </div>

          <div className="d-flex align-items-center gap-2">
                        <select
  className="form-select"
  style={{
    width: '80px',
    padding: '6px 12px',
    fontSize: '.8rem',
    backgroundColor: theme.backgroundColor.white,
    border: `1px solid ${theme.backgroundColor.border}`,
    color: theme.textColor.primary,
    borderRadius: '6px',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.05)',
    appearance: 'none',
  }}
  defaultValue="EN"
  onChange={(e) => {
    const selectedLang = e.target.value;
    console.log("Language changed to:", selectedLang);
    // Optional: You can store in localStorage, Redux, or i18n here
  }}
>
  <option value="ES">ES</option>
  <option value="US">US</option>
  <option value="IN">IN</option>
</select>

            <div
              onClick={toggleHeaderMenu}
              className="rounded-circle border cursor-pointer"
              style={{
                backgroundColor: theme.backgroundColor.resume,
                width: 45,
                height: 45,
                borderColor: theme.backgroundColor.border,
              }}
            >
              <img
                src="https://plus.unsplash.com/premium_photo-1672790905850-40fc5aa3efc5"
                alt="User Avatar"
                className="rounded-circle"
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Mobile Dropdown Menu */}
      {isMobile && showMobileMenu && (
        <div className="d-flex flex-column px-3 py-2" style={{ backgroundColor: theme.backgroundColor.white }}>
          {navLinks.map((link, index) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `nav-link-custom d-flex align-items-center gap-2 py-2 ${
                  index !== navLinks.length - 1 ? 'border-bottom' : ''
                } ${isActive ? 'nav-link-active' : ''}`
              }
              onClick={toggleHeaderMenu}
            >
              {link.icon} {link.label}
            </NavLink>
          ))}
        </div>
      )}

      {/* Desktop Header */}
      {!isMobile && (
        <div
          className="d-flex justify-content-between align-items-center py-2 border-bottom flex-wrap"
          style={{ backgroundColor: theme.backgroundColor.white }}
        >
          {/* Navigation */}
          <div className="d-flex flex-column flex-md-row gap-3 mx-3 d-md-flex">
           <button className="btn btn-outline-secondary" onClick={()=>{
              toggleSidebar();
            }}>
              <FaBars />
            </button>
            {navLinks.slice(1).map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => `nav-link-custom ${isActive ? 'nav-link-active' : ''}`}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Language, Time & Avatar */}
          <div className="d-flex align-items-center gap-3 mx-4">
            <select
  className="form-select"
  style={{
    width: '80px',
    padding: '6px 12px',
    fontSize: '.8rem',
    backgroundColor: theme.backgroundColor.white,
    border: `1px solid ${theme.backgroundColor.border}`,
    color: theme.textColor.primary,
    borderRadius: '6px',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.05)',
    appearance: 'none',
  }}
  defaultValue="EN"
  onChange={(e) => {
    const selectedLang = e.target.value;
    console.log("Language changed to:", selectedLang);
    // Optional: You can store in localStorage, Redux, or i18n here
  }}
>
  <option value="ES">ES</option>
  <option value="US">US</option>
  <option value="IN">IN</option>
</select>


            {/* <div
              className="d-flex align-items-center px-3 py-2 rounded"
              style={{
                backgroundColor: theme.backgroundColor.white,
                border: `1px solid ${theme.backgroundColor.border}`,
                boxShadow: '0 2px 6px rgba(0, 0, 0, 0.05)',
              }}
            >
              <h5 className="m-0" style={{ color: theme.textColor.primary, fontSize: '.8rem' }}>
                10:30 AM
              </h5>
            </div> */}

            <div
              className="rounded-circle border cursor-pointer"
              onClick={() => navigate('/app-profile')}
              style={{
                backgroundColor: theme.backgroundColor.resume,
                width: 45,
                height: 45,
                borderColor: theme.backgroundColor.border,
              }}
            >
              <img
                src="https://plus.unsplash.com/premium_photo-1672790905850-40fc5aa3efc5"
                alt="User Avatar"
                className="rounded-circle"
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
