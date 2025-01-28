import React, { useState } from "react";
import LeftSidebar from "../componant/LeftSidebar";
import Navigation from "../componant/Navigation";
import SerchBar from "../componant/SearchBar";

const PathUnicorn6 = () => {
  const [isActive, setActive] = useState(false);

  const ToggleEvent = () => {
    setActive((prevState) => !prevState);
  };
  return (
    <>
      <div id="main-wrapper" className={isActive ? "show-sidebar" : ""}>
        {/* Sidebar Start */}
        <LeftSidebar onButtonClick={ToggleEvent} />
        {/*  Sidebar End */}
        <div className="page-wrapper">
          <Navigation onButtonClick={ToggleEvent} />
          <div className="body-wrapper">
            <div className="container-fluid">
              {/* Header */}
              <div className="card bg-info-subtle shadow-none position-relative overflow-hidden mb-4">
                <div className="card-body px-4 py-3">
                  <div className="row align-items-center">
                    <div className="col-9">
                      <h4 className="fw-semibold mb-8">IM Mentor Club</h4>
                      <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                          <li className="breadcrumb-item">
                            <a
                              className="text-muted text-decoration-none"
                              href="../dark/index.html">
                              Home
                            </a>
                          </li>
                          <li className="breadcrumb-item" aria-current="page">
                            IM Mentor Club
                          </li>
                        </ol>
                      </nav>
                    </div>
                    <div className="col-3">
                      <div className="text-center mb-n5">
                        <img
                          src="./assets/assets/images/breadcrumb/ChatBc.png"
                          alt="modernize-img"
                          className="img-fluid mb-n4"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div style={styles.container}>
                  {/* Title Section */}
                  <h1 style={styles.title}>
                    SALES <span style={styles.marketing}> & MARKETING </span>{" "}
                    FUNNEL
                  </h1>

                  {/* Steps Section */}
                  <div style={styles.stepsContainer}>
                    {[
                      { number: 1, label: "PRODUCT LISTING", color: "#FFA726" },
                      { number: 2, label: "CLIENT PERSONA", color: "#66BB6A" },
                      {
                        number: 3,
                        label: "MARKETING FUNNEL",
                        color: "#42A5F5",
                      },
                      { number: 4, label: "SALES FUNNEL", color: "#EF5350" },
                    ].map((step) => (
                      <div key={step.number} style={styles.step}>
                        <div
                          style={{
                            ...styles.circle,
                            borderColor: step.color,
                          }}>
                          {step.number}
                        </div>
                        <p style={styles.stepLabel}>{step.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SerchBar />
      </div>
      <div className="dark-transparent sidebartoggler" />
    </>
  );
};

const styles = {
  container: {
    color: "#FFFFFF",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "60vh",
    padding: "20px",
  },
  title: {
    fontSize: "36px",
    fontWeight: "bold",
    marginBottom: "40px",
    textAlign: "center",
  },
  marketing: {
    color: "#66BB6A",
  },
  stepsContainer: {
    display: "flex",
    justifyContent: "space-between",
    gap: "20px",
    width: "100%",
    maxWidth: "800px",
  },
  step: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  circle: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    border: "5px solid",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "24px",
    fontWeight: "bold",
    backgroundColor: "#FFFFFF",
    color: "#000000",
  },
  stepLabel: {
    marginTop: "10px",
    fontSize: "14px",
    fontWeight: "bold",
  },
};

export default PathUnicorn6;
