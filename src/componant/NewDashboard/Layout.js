// src/layout/Layout.jsx
import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
import theme from '../NewDashboard/styles/styles';

const SIDEBAR_WIDTH = 280;

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // default open
  const [isHeaderMenuOpen, setIsHeaderMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const toggleSidebar = () => setIsSidebarOpen(prev => !prev);
  const toggleHeaderMenu = () => setIsHeaderMenuOpen(prev => !prev);

  useEffect(() => {
    const handleResize = () => {
      const nowMobile = window.innerWidth < 768;
      setIsMobile(nowMobile);
      if (nowMobile) {
        setIsSidebarOpen(false); // auto-hide sidebar on mobile
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
      {isSidebarOpen && (
        <div
          className="position-fixed top-0 start-0 h-100"
          style={{
            width: SIDEBAR_WIDTH,
            zIndex: 1040,
            backgroundColor: theme.backgroundColor.white,
            borderRight: `1px solid ${theme.backgroundColor.border}`,
            transition: 'all 0.3s ease-in-out',
          }}
        >
          <Sidebar onClose={toggleSidebar} />
        </div>
      )}

      {/* Main Content */}
      <div
        className="flex-grow-1 d-flex flex-column"
        style={{
          marginLeft: isSidebarOpen ? SIDEBAR_WIDTH : 0,
          transition: 'margin-left 0.3s ease-in-out',
          width: '100%',
        }}
      >
        <Header
          showMobileMenu={isMobile && isHeaderMenuOpen}
          isMobile={isMobile}
          toggleHeaderMenu={toggleHeaderMenu}
          toggleSidebar={toggleSidebar}
        />

        <main
          className="flex-grow-1 overflow-auto p-3"
          style={{ backgroundColor: theme.backgroundColor.light }}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
