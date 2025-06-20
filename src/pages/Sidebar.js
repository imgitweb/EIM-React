import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext"; // <-- Import theme context

const Sidebar = ({ selectedSection, setSelectedSection }) => {
  const { theme } = useTheme(); // <-- Use the theme context

  const menuItems = [
    "Product Listing",
    "Product Pricing",
    "Client Persona",
    "Marketing Funnel",
    "Sales Funnel",
  ];

  const styles = {
    sidebar: {
      width: "100%",
      height: "100%",
      backgroundColor: theme === "dark" ? "#223662" : "#F5F5F5",
      padding: "18px",
      borderRadius: "5px",
    },
    sidebarTitle: {
      fontSize: "20px",
      marginBottom: "20px",
      color: theme === "dark" ? "#FFFFFF" : "#000000",
    },
    menu: {
      listStyle: "none",
      padding: 0,
    },
    menuItem: {
      marginBottom: "10px",
      color: theme === "dark" ? "#FFFFFF" : "#000000",
      cursor: "pointer",
    },
    link: {
      color: theme === "dark" ? "#FFFFFF" : "#000000",
      textDecoration: "none",
    },
  };

  return (
    <div style={styles.sidebar}>
      <h3 style={styles.sidebarTitle}>Sales Funnel</h3>
      <ul style={styles.menu}>
        {menuItems.map((item, index) => (
          <li
            key={index}
            style={{
              ...styles.menuItem,
              fontWeight: selectedSection === item ? "bold" : "normal",
              textDecoration: selectedSection === item ? "underline" : "none",
            }}
            onClick={() => setSelectedSection && setSelectedSection(item)}
          >
            <Link
              to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
              style={styles.link}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
