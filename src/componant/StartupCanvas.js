import React from "react";

const StartupCanvas = ({
  problem,
  solution,
  uniqueValueProposition,
  customerSegments,
  keyMetrics,
  channels,
  costStructure,
  revenueStreams,
}) => {
  return (
    <div className="canvas-container">
      <h1 className="canvas-title text-light">Startup Canvas!</h1>
      <div className="canvas-grid">
        <div className="canvas-item purple">
          <span className="section-title font-weight-bold">Problem</span>
          <p className="canvas-text">{problem || "No problem provided"}</p>
        </div>

        <div className="canvas-item orange">
          <span className="section-title font-weight-bold">Solution</span>
          <p className="canvas-text">{solution || "No solution provided"}</p>
        </div>

        <div className="canvas-item green">
          <span className="section-title font-weight-bold">
            Unique Value Proposition
          </span>
          <p className="canvas-text">
            {uniqueValueProposition || "No unique value proposition provided"}
          </p>
        </div>

        <div className="canvas-item teal">
          <span className="section-title font-weight-bold">
            Customer Segments
          </span>
          <p className="canvas-text">
            {customerSegments || "No customer segments provided"}
          </p>
        </div>

        <div className="canvas-item orange">
          <span className="section-title font-weight-bold">Key Metrics</span>
          <p className="canvas-text">
            {keyMetrics || "No key metrics provided"}
          </p>
        </div>

        <div className="canvas-item light-green">
          <span className="section-title font-weight-bold">Channels</span>
          <p className="canvas-text">{channels || "No channels provided"}</p>
        </div>

        <div className="canvas-item blue">
          <span className="section-title font-weight-bold">Cost Structure</span>
          <p className="canvas-text">
            {costStructure || "No cost structure provided"}
          </p>
        </div>

        <div className="canvas-item dark-blue">
          <span className="section-title font-weight-bold">
            Revenue Streams
          </span>
          <p className="canvas-text">
            {revenueStreams || "No revenue streams provided"}
          </p>
        </div>
        {/* <div className="canvas-item blue">
          <span className="section-title">Cost Structure</span>
          <p className="canvas-text">
            {costStructure || "No cost structure provided"}
          </p>
        </div>

        <div className="canvas-item dark-blue">
          <span className="section-title">Revenue Streams</span>
          <p className="canvas-text">
            {revenueStreams || "No revenue streams provided"}
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default StartupCanvas;
