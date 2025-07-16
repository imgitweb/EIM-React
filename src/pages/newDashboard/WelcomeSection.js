import React from "react";
import "./WelcomeSection.css"; // Optional for minor enhancements

export default function WelcomeSection() {
  return (
    <div className="container">
      <div className="row align-items-center  rounded-3 p-4 welcome-card" 
      style={{
          boxShadow: "0 2px 12px rgba(0, 0, 0, 0.1)",
      }}
      
      >
      {/* Text Section */}
<div className="col-md-6 mb-4 mb-md-0">
  <h2 className="fs-semibold text-dark mb-3">
    Welcome to <span className="text-primary">Incubation Masters</span>
  </h2>
  <p className="text-muted fs-6 mb-4">
    Unlock your potential with free access to industry-ready courses,
    personalized learning paths, and expert guidance. Start your upskilling
    journey today!
  </p>
  <button className="btn btn-primary fw-semibold px-3 py-2 rounded-2">
    Upgrade now
  </button>
</div>


      {/* Video Section */}
<div className="col-md-6">
  <div className="ratio ratio-16x9 rounded-3 overflow-hidden border">
    <iframe
      src="https://www.youtube.com/embed/06MpjVWrglg"
      title="YouTube video"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="w-100 h-100 border-0"
    ></iframe>
  </div>
</div>

      </div>
    </div>
  );
}
