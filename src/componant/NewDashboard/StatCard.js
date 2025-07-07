import React from "react";
import "./statCard.css"; // Import the CSS file for styling

const StatCard = ({ icon, value, label, }) => (
  <div className="card shadow-sm p-3 h-100 stat-card">
    <div className="d-flex align-items-center justify-content-between">
      <span className={`me-3 fs-3 `}>{icon}</span>
      <div className="align-self-center">
        <div className="fw-bold fs-5">{value}</div>
        <div className="text-muted small">{label}</div>
      </div>
    </div>
      {/* <hr></hr> */}
      {/* <p className="small">Additional Information</p> */}
  </div>
);

export default StatCard;
