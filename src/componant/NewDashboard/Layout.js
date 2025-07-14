// src/layout/Layout.jsx
import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { FaBars } from 'react-icons/fa';
import { MdMenuOpen } from 'react-icons/md';
import { Outlet } from 'react-router-dom';
import theme from '../NewDashboard/styles/styles';

const SIDEBAR_WIDTH = 280;

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isHeaderMenuOpen, setIsHeaderMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const toggleHeaderMenu = () => setIsHeaderMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleResize = () => {
      const nowMobile = window.innerWidth < 768;
      setIsMobile(nowMobile);
      if (!nowMobile) {
        setIsSidebarOpen(false);
        setIsHeaderMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      className="d-flex"
      style={{
        height: '100vh',
        width: '100vw',
        overflow: 'hidden',
        backgroundColor: theme.backgroundColor.light,
      }}
    >
      {/* Sidebar */}
      {(isSidebarOpen || !isMobile) && (
        <div
          className="position-fixed top-0 start-0 h-100"
          style={{
            width: SIDEBAR_WIDTH,
            zIndex: 1040,
            backgroundColor: theme.backgroundColor.white,
            borderRight: `1px solid ${theme.backgroundColor.border}`,
          }}
        >
          <Sidebar onClose={isMobile ? toggleSidebar : null} />
        </div>
      )}

      {/* Content Area */}
      <div
        className="flex-grow-1 d-flex flex-column"
        style={{
          marginLeft: !isMobile ? SIDEBAR_WIDTH : 0,
          transition: 'margin-left 0.3s ease-in-out',
          width: '100%',
        }}
      >
       
        {/* Header with menu toggle */}
        <Header showMobileMenu={isMobile && isHeaderMenuOpen} isMobile={isMobile} toggleHeaderMenu={toggleHeaderMenu}  toggleSidebar={toggleSidebar} />

        {/* Main Content */}
        <main
          className="flex-grow-1 overflow-auto p-3"
          style={{ backgroundColor: theme.backgroundColor.light , overflow: 'hidden' }}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
