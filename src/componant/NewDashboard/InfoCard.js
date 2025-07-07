import { useState } from "react";

const InfoCard = ({
  title,
  icon,
  iconColor = "text-primary",
  progress = null,
  description,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Generate default description from progress if not provided
  const progressDescription =
    progress !== null && !description
      ? `${progress}% progress`
      : description;

  return (
    <div
      className="rounded shadow-sm p-3 d-flex flex-column justify-content-between h-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: isHovered ? "#576680" : "#465670",
        color: "#fff",
        cursor: "pointer",
        transition: "all 0.3s ease",
        boxShadow: isHovered
          ? "0 4px 12px rgba(0, 0, 0, 0.3)"
          : "0 2px 6px rgba(0, 0, 0, 0.2)",
      }}
    >
      <div className="d-flex justify-content-between align-items-start mb-2">
        <h6 className="mb-0 fw-semibold">{title}</h6>
        <i className={`fs-4 ${iconColor} ${icon}`} />
      </div>

      {progress !== null ? (
        <>
          <div className="progress my-2 bg-secondary" style={{ height: "6px" }}>
            <div
              className="progress-bar"
              role="progressbar"
              style={{
                width: `${progress}%`,
                backgroundColor: "#fff",
              }}
              aria-valuenow={progress}
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <small className="text-light">{progressDescription}</small>
        </>
      ) : (
        <small className="text-light">{description}</small>
      )}
    </div>
  );
};
export default InfoCard;
