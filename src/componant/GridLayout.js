import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const sectionStyle = {
  background: "#fff",
  border: "2px solid #23406e",
  borderRadius: "6px",
  minHeight: "120px",
  padding: "12px",
  marginBottom: "8px",
  color: "#23406e",
  fontSize: "15px",
};

const headerStyle = {
  fontWeight: "bold",
  color: "#23406e",
  fontSize: "17px",
  marginBottom: "4px",
};

const canvasStyle = {
  background: "#23406e",
  borderRadius: "6px",
  padding: "24px",
  minHeight: "90vh",
};

const GridLayout = ({
    problem,
    solution,
    uniqueValueProposition,
    customerSegments,
    keyMetrics,
    channels,
    costStructure,
    revenueStreams,
  }) => (
    <div className="flex items-center justify-center">
        <h2>Startup Canvas</h2>
    <div className="container-fluid" style={canvasStyle}>
      {/* Identity */}
      <div className="row mb-2">
        <div className="col-12" style={{ ...sectionStyle, background: "#fff" }}>
          <span style={headerStyle}>Identity -</span>
          <span style={{ color: "#444" }}> (Describe your idea)</span>
          <p style={{ marginTop: "8px" }}>{solution}</p>
        </div>
      </div>

      {/* Top Row */}
    <div className="row">
      <div className="col-md-2" style={sectionStyle}>
        <div style={headerStyle}>Problem</div>
        <div style={{ color: "#444" }}>{problem}</div>
      </div>
      <div className="col-md-2" style={sectionStyle}>
        <div style={headerStyle}>Key Metrics</div>
        <div style={{ color: "#444" }}>{keyMetrics}</div>
      </div>
      <div className="col-md-2" style={sectionStyle}>
        <div style={headerStyle}>Unique Value Proposition</div>
        <div style={{ color: "#444" }}>{uniqueValueProposition}</div>
      </div>
      <div className="col-md-2" style={sectionStyle}>
        <div style={headerStyle}>Customer Segments</div>
        <div style={{ color: "#444" }}>{customerSegments}</div>
      </div>
      <div className="col-md-2" style={sectionStyle}>
        <div style={headerStyle}>Channels</div>
        <div style={{ color: "#444" }}>{channels}</div>
      </div>
      <div className="col-md-2" style={sectionStyle}>
        <div style={headerStyle}>Solution</div>
        <div style={{ color: "#444" }}>{solution}</div>
      </div>
    </div>

    {/* Bottom Row */}
    <div className="row">
      <div className="col-md-6" style={sectionStyle}>
        <div style={headerStyle}>Cost Structure</div>
        <div style={{ color: "#444" }}>{costStructure}</div>
      </div>
      <div className="col-md-6" style={sectionStyle}>
        <div style={headerStyle}>Revenue Streams</div>
        <div style={{ color: "#444" }}>{revenueStreams}</div>
      </div>
    </div>
  </div>
  </div>
);

export default GridLayout;
