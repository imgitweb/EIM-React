// src/components/Header.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { MdMenuOpen } from 'react-icons/md';
import theme from '../NewDashboard/styles/styles';
import '../NewDashboard/styles/Header.css';

const Header = ({ showMobileMenu, isMobile, toggleSidebar, toggleHeaderMenu }) => {
  return (
    <>
      {/* Mobile Top Bar */}
      {isMobile && (
        <div
          className="d-flex justify-content-between align-items-center px-3 py-3 border-bottom shadow-sm"
          style={{
            backgroundColor: theme.backgroundColor.white,
            zIndex: 1050,
          }}
        >
          <div className="d-flex align-items-center gap-2">
            <button className="btn btn-outline-secondary" onClick={toggleSidebar}>
              <FaBars />
            </button>
            <h5 className="m-0" style={{ color: theme.textColor.primary }}>
              Incubation Masters
            </h5>
          </div>

          <div className="d-flex align-items-center gap-2">
            {/* <button
              className="btn btn-outline-secondary"
              
            >
              <MdMenuOpen />
            </button> */}
            <div
            onClick={toggleHeaderMenu}
              className="rounded-circle border"
              style={{
                backgroundColor: theme.backgroundColor.resume,
                width: 35,
                height: 35,
                borderColor: theme.backgroundColor.border,
              }}
            ></div>
          </div>
        </div>
      )}

      {/* Mobile Nav Menu */}
      {isMobile && showMobileMenu && (
        <div
          className="d-flex flex-column gap-2 px-3 py-2 border-bottom shadow-sm"
          style={{ backgroundColor: theme.backgroundColor.white }}
        >
          <NavLink
            to="/app-profile"
            className={({ isActive }) =>
              `nav-link-custom ${isActive ? 'nav-link-active' : ''}`
            }
            onClick={toggleHeaderMenu}
          >
            My Profile
          </NavLink>
          <NavLink
            to="/current-quadrant"
            className={({ isActive }) =>
              `nav-link-custom ${isActive ? 'nav-link-active' : ''}`
            }
            onClick={toggleHeaderMenu}
          >
            Current Quadrant
          </NavLink>
          <NavLink
            to="/virtual-cxo-panel"
            className={({ isActive }) =>
              `nav-link-custom ${isActive ? 'nav-link-active' : ''}`
            }
            onClick={toggleHeaderMenu}
          >
            Virtual CXO Panel
          </NavLink>
          <NavLink
            to="/mentorship"
            className={({ isActive }) =>
              `nav-link-custom ${isActive ? 'nav-link-active' : ''}`
            }
            onClick={toggleHeaderMenu}
          >
            Mentorship
          </NavLink>
          <NavLink
            to="/im-startup-school"
            className={({ isActive }) =>
              `nav-link-custom ${isActive ? 'nav-link-active' : ''}`
            }
            onClick={toggleHeaderMenu}
          >
            IM Startup School
          </NavLink>
        </div>
      )}

      {/* Desktop Header */}
      {!isMobile && (
        <div
          className="d-flex justify-content-between align-items-center py-2 border-bottom shadow-sm flex-wrap"
          style={{
            backgroundColor: theme.backgroundColor.white,
          }}
        >
          {/* Navigation Links */}
          <div className="d-flex flex-column flex-md-row gap-3 mx-3 d-md-flex">
            <NavLink
              to="/app-profile"
              className={({ isActive }) =>
                `nav-link-custom ${isActive ? 'nav-link-active' : ''}`
              }
            >
              My Profile
            </NavLink>
            <NavLink
              to="/current-quadrant"
              className={({ isActive }) =>
                `nav-link-custom ${isActive ? 'nav-link-active' : ''}`
              }
            >
              Current Quadrant
            </NavLink>
            <NavLink
              to="/virtual-cxo-panel"
              className={({ isActive }) =>
                `nav-link-custom ${isActive ? 'nav-link-active' : ''}`
              }
            >
              Virtual CXO Panel
            </NavLink>
            <NavLink
              to="/mentorship"
              className={({ isActive }) =>
                `nav-link-custom ${isActive ? 'nav-link-active' : ''}`
              }
            >
              Mentorship
            </NavLink>
            <NavLink
              to="/im-startup-school"
              className={({ isActive }) =>
                `nav-link-custom ${isActive ? 'nav-link-active' : ''}`
              }
            >
              IM Startup School
            </NavLink>
          </div>

          {/* Avatar */}
          <div className="d-flex align-items-center gap-3 mx-4">
            <div
              className="rounded-circle border"
              style={{
                backgroundColor: theme.backgroundColor.resume,
                width: 35,
                height: 35,
                borderColor: theme.backgroundColor.border,
              }}
            ></div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
