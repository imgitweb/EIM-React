// SkillCard.js
import React from "react";
import { useNavigate } from "react-router-dom";

// Generic Card Wrapper with internal CSS for hover
export const ModernCard = ({ children, className = "", style = {}, onClick }) => (
  <>
    <div
      className={`modern-card ${className}`}
      onClick={onClick}
      style={{
        background: "#F8F9FA",
        borderRadius: "12px",
        padding: "1rem",
        // marginBottom: "1rem",
        boxShadow: "0 2px 12px rgba(0, 0, 0, 0.05)",
        border: "1px solid #eee",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        cursor: "pointer",
        height: "100%",
        ...style,
      }}
    >
      {children}
    </div>

    {/* Internal Style for hover */}
    <style>
      {`
        .modern-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
        }
      `}
    </style>
  </>
);

// Dashboard Card
export const SkillCard = ({
  title,
  subTitle,
  current,
  color,
  icon,
  route,
  filter,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (route) {
      navigate(route, { state: { filter: filter || "" } });
    }
  };

  return (
    <ModernCard onClick={handleClick}>
      <div className="d-flex mb-2 justify-content-between align-items-center gap-3">
        {/* Icon and Text */}
        <div className="d-flex align-items-center gap-6 flex-grow-1">
          <div
            style={{
              backgroundColor: color,
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <i className={`${icon} text-white`} style={{ fontSize: "1.1rem" }} />
          </div>
          <div className="flex-grow-1">
            <div
              className="fw-semibold"
              style={{
                fontSize: "0.85rem",
                color: "#1f2937",
                whiteSpace: "normal",
                wordBreak: "break-word",
              }}
            >
              {title}
            </div>
            <div
              style={{
                fontSize: "0.75rem",
                color: "#6b7280",
                whiteSpace: "normal",
                wordBreak: "break-word",
              }}
            >
              {subTitle}
            </div>
          </div>
        </div>

        {/* Right Number */}
        <div
          className="text-end"
          style={{
            fontSize: "0.85rem",
            fontWeight: "bold",
            color: "#111827",
            minWidth: "20px",
          }}
        >
          {current}
        </div>
      </div>
    </ModernCard>
  );
};
