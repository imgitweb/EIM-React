import React, { useEffect, useState } from "react";
import * as joint from "jointjs";
import LeftSidebar from "../componant/LeftSidebar";
import Navigation from "../componant/Navigation";
import SearchBar from "../componant/SearchBar";

const milestones = [
  {
    id: 1,
    title: "Market Research and Validation",
    duration: "3 months",
    startDate: "Feb 2025",
    endDate: "Apr 2025",
    details: [
      "Conduct market research on the most in-demand tech courses.",
      "Identify target audience and refine the product offering.",
    ],
  },
  {
    id: 2,
    title: "Develop MVP",
    duration: "3 months",
    startDate: "May 2025",
    endDate: "Jul 2025",
    details: [
      "Develop the Minimum Viable Product (MVP) with core features.",
      "Begin beta testing with early users.",
    ],
  },
];

const PathToUnicorn = () => {
  const [isActive, setIsActive] = useState(false);
  const [activeMilestone, setActiveMilestone] = useState(null);

  const ToggleEvent = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    const graph = new joint.dia.Graph();
    const paper = new joint.dia.Paper({
      el: document.getElementById("timeline-graph"),
      model: graph,
      width: 1200,
      height: 300,
      gridSize: 10,
    });

    const nodes = milestones.map((milestone, index) => {
      const x = 50 + index * 80; // Adjust X position
      const y = 150;

      const node = new joint.shapes.standard.Circle();
      node.position(x, y);
      node.resize(60, 60);
      node.attr({
        body: {
          fill: "#6c63ff",
          stroke: "#fff",
          strokeWidth: 2,
          cursor: "pointer", // Make it look clickable
        },
        label: {
          text: `M${milestone.id}`,
          fill: "#fff",
          fontSize: 12,
        },
      });

      node.addTo(graph);

      return node;
    });

    paper.on("element:pointerclick", (elementView) => {
      const node = elementView.model;

      // Find the corresponding milestone based on the node label
      const nodeLabel = node.attr("label/text");
      const milestoneId = parseInt(nodeLabel.replace("M", ""), 10); // Extract milestone ID from label
      const milestone = milestones.find((m) => m.id === milestoneId);

      if (milestone) {
        setActiveMilestone(milestone); // Set the active milestone for the modal

        // Show Bootstrap Modal
        const modal = new window.bootstrap.Modal(
          document.getElementById("milestoneModal")
        );
        modal.show();
      }
    });

    milestones.forEach((_, index) => {
      if (index < milestones.length - 1) {
        const link = new joint.shapes.standard.Link();
        link.source(nodes[index]);
        link.target(nodes[index + 1]);
        link.attr({
          line: {
            stroke: "#6c63ff",
            strokeWidth: 2,
            targetMarker: {
              type: "path",
              fill: "#6c63ff",
              stroke: "#6c63ff",
              d: "M 10 -5 0 0 10 5 Z",
            },
          },
        });
        link.addTo(graph);
      }
    });
  }, []);

  return (
    <div id="main-wrapper" className={isActive ? "show-sidebar" : ""}>
      <LeftSidebar onButtonClick={ToggleEvent} />
      <div className="page-wrapper">
        <Navigation onButtonClick={ToggleEvent} />
        <div className="body-wrapper">
          <div className="container-fluid">
            <div className="card bg-info-subtle shadow-none position-relative overflow-hidden mb-4">
              <div className="card-body px-4 py-3">
                <div className="row align-items-center">
                  <div className="col-9">
                    <h4 className="fw-semibold mb-8">Path to Unicorn</h4>
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                          <a
                            className="text-muted text-decoration-none"
                            href="../dark/index.html"
                          >
                            Home
                          </a>
                        </li>
                        <li className="breadcrumb-item" aria-current="page">
                          Path to Unicorn
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="container body">
              <div id="timeline-graph" className="timeline-graph"></div>
            </div>
          </div>
        </div>
      </div>
      <SearchBar />

      {/* Modal */}
      <div
        className="modal fade"
        id="milestoneModal"
        tabIndex="-1"
        aria-labelledby="milestoneModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="milestoneModalLabel">
                {activeMilestone ? activeMilestone.title : "Milestone Details"}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {activeMilestone ? (
                <div>
                  <h6>Title:</h6>
                  <p>{activeMilestone.title}</p>

                  <h6>Duration:</h6>
                  <p>{activeMilestone.duration}</p>

                  <h6>Start Date:</h6>
                  <p>{activeMilestone.startDate}</p>

                  <h6>End Date:</h6>
                  <p>{activeMilestone.endDate}</p>

                  <h6>Details:</h6>
                  <ul>
                    {activeMilestone.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ) : (
                <p>No details available.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PathToUnicorn;
