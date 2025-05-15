import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ selectedSection, setSelectedSection }) => {
  const menuItems = [
    "Product Listing",
    "Product Pricing",
    "Client Persona",
    "Marketing Funnel",
    "Sales Funnel",
  ];

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
            onClick={() => setSelectedSection && setSelectedSection(item)}>
            <Link
              to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
              style={styles.link}>
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  sidebar: {
    width: "100%",
    height: "100%",
    backgroundColor: "#223662",
    padding: "20px",
    borderRadius: "5px",
  },
  sidebarTitle: {
    fontSize: "20px",
    marginBottom: "20px",
    color: "#FFFFFF",
  },
  menu: {
    listStyle: "none",
    padding: 0,
  },
  menuItem: {
    marginBottom: "10px",
    color: "#FFFFFF",
    cursor: "pointer",
  },
  link: {
    color: "#FFFFFF",
    textDecoration: "none",
  },
};

export default Sidebar;
