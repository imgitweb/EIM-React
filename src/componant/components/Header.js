// src/components/Header.jsx
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { MdMenuOpen } from 'react-icons/md';
import theme from '../NewDashboard/styles/styles';
import '../NewDashboard/styles/Header.css';
import { FaUser, FaChartPie, FaUsers, FaChalkboardTeacher, FaUniversity } from 'react-icons/fa';


const Header = ({ showMobileMenu, isMobile, toggleSidebar, toggleHeaderMenu }) => {
  const navigate = useNavigate();
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
            <button className="btn btn-outline-secondary" onClick={()=>{
              toggleSidebar();
            }}>
              <FaBars />
            </button>
            {/* <h5 className="m-0" style={{ color: theme.textColor.primary }}>
              Incubation Masters
            </h5> */}
          </div>

          <div className="d-flex align-items-center gap-2">
            {/* <button
              className="btn btn-outline-secondary"
              
            >
              <MdMenuOpen />
            </button> */}

<div
  className="d-flex align-items-center  px-3 py-2 rounded "
  style={{
    backgroundColor: theme.backgroundColor.white,
    border: `1px solid ${theme.backgroundColor.border}`,
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.05)',
  }}
>
  <h5
    className="m-0 "
    style={{
      color: theme.textColor.primary,
      fontSize: '.8rem',
    }}
  >
    English
  </h5>
</div>
{/* <div
  className="d-flex align-items-center  px-3 py-2 rounded "
  style={{
    backgroundColor: theme.backgroundColor.white,
    border: `1px solid ${theme.backgroundColor.border}`,
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.05)',
  }}
>
  <h5
    className="m-0 "
    style={{
      color: theme.textColor.primary,
      fontSize: '.8rem',
    }}
  >
    10:30 AM
  </h5>
</div> */}

             <div
              onClick={toggleHeaderMenu}
              className="rounded-circle border"
              style={{
                backgroundColor: theme.backgroundColor.resume,
                width: 45,
                height: 45,
                borderColor: theme.backgroundColor.border,
              }}
            >
              <img
                src="https://plus.unsplash.com/premium_photo-1672790905850-40fc5aa3efc5?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="User Avatar"
                className="rounded-circle"
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          </div>
        </div>
      )}


{/* Mobile Nav Menu */}
{isMobile && showMobileMenu && (
  <div
    className="d-flex flex-column px-3 py-2 shadow-sm"
    style={{ backgroundColor: theme.backgroundColor.white }}
  >
    <NavLink
      to="/app-profile"
      className={({ isActive }) =>
        `nav-link-custom d-flex align-items-center gap-2 py-2 border-bottom ${isActive ? 'nav-link-active' : ''}`
      }
      onClick={toggleHeaderMenu}
    >
      <FaUser /> My Profile
    </NavLink>

    <NavLink
      to="/current-quadrant"
      className={({ isActive }) =>
        `nav-link-custom d-flex align-items-center gap-2 py-2 border-bottom ${isActive ? 'nav-link-active' : ''}`
      }
      onClick={toggleHeaderMenu}
    >
      <FaChartPie /> Current Quadrant
    </NavLink>

    <NavLink
      to="/virtual-cxo-panel"
      className={({ isActive }) =>
        `nav-link-custom d-flex align-items-center gap-2 py-2 border-bottom ${isActive ? 'nav-link-active' : ''}`
      }
      onClick={toggleHeaderMenu}
    >
      <FaUsers /> Virtual CXO Panel
    </NavLink>

    <NavLink
      to="/mentorship"
      className={({ isActive }) =>
        `nav-link-custom d-flex align-items-center gap-2 py-2 border-bottom ${isActive ? 'nav-link-active' : ''}`
      }
      onClick={toggleHeaderMenu}
    >
      <FaChalkboardTeacher /> Mentorship
    </NavLink>

    <NavLink
      to="/im-startup-school"
      className={({ isActive }) =>
        `nav-link-custom d-flex align-items-center gap-2 py-2 ${isActive ? 'nav-link-active' : ''}` // No border on last
      }
      onClick={toggleHeaderMenu}
    >
      <FaUniversity /> IM Startup School
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
        {/* <div
  className="d-flex align-items-center gap-3 mx-3  py-2 rounded "
  style={{
    backgroundColor: theme.backgroundColor.white,
    // border: `1px solid ${theme.backgroundColor.border}`,
    // boxShadow: '0 2px 6px rgba(0, 0, 0, 0.05)',
  }}
>
  <h5
    className="m-0 fw-semibold"
    style={{
      color: theme.textColor.primary,
      fontSize: '1rem',
    }}
  >
    👋 Welcome, Mr. User
  </h5>
</div> */}


          {/* Navigation Links */}
          <div className="d-flex flex-column flex-md-row gap-3 mx-3 d-md-flex">
            {/* <NavLink
              to="/app-profile"
              className={({ isActive }) =>
                `nav-link-custom ${isActive ? 'nav-link-active' : ''}`
              }
            >
              My Profile
            </NavLink> */}
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
          <div
           className="d-flex align-items-center gap-3 mx-4 ">
<div
  className="d-flex align-items-center  px-3 py-2 rounded "
  style={{
    backgroundColor: theme.backgroundColor.white,
    border: `1px solid ${theme.backgroundColor.border}`,
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.05)',
  }}
>
  <h5
    className="m-0 "
    style={{
      color: theme.textColor.primary,
      fontSize: '.8rem',
    }}
  >
    English
  </h5>
</div>
<div
  className="d-flex align-items-center  px-3 py-2 rounded "
  style={{
    backgroundColor: theme.backgroundColor.white,
    border: `1px solid ${theme.backgroundColor.border}`,
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.05)',
  }}
>
  <h5
    className="m-0 "
    style={{
      color: theme.textColor.primary,
      fontSize: '.8rem',
    }}
  >
    10:30 AM
  </h5>
</div>
            <div
              className="rounded-circle border cursor-pointer"
               onClick={()=>{
            navigate('/app-profile');
          }}
              style={{
                backgroundColor: theme.backgroundColor.resume,
                width: 45,
                height: 45,
                borderColor: theme.backgroundColor.border,
              }}
            >
              <img
                src="https://plus.unsplash.com/premium_photo-1672790905850-40fc5aa3efc5?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
