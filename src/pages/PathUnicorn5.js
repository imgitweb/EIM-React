import React, { useState } from "react";
import LeftSidebar from "../componant/LeftSidebar";
import Navigation from "../componant/Navigation";
import SerchBar from "../componant/SearchBar";

const PathUnicorn5 = () => {
  const [isActive, setActive] = useState(false);

  const ToggleEvent = () => {
    setActive((prevState) => !prevState);
  };
  const [activeMetric, setActiveMetric] = useState(null);
  const [listOpenMetric, setListOpenMetric] = useState(null);
  const [formData, setFormData] = useState("");
  const metrics = ["MRR", "ARR", "BURN", "CAC", "ARPC", "CLV"];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`Form submitted for ${activeMetric}: ${formData}`);
    setActiveMetric(null);
    setFormData("");
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
                  {/* Metrics Section */}
                  <div style={styles.metricsContainer}>
                    {metrics.map((metric) => (
                      <div key={metric} style={styles.metricCard}>
                        <div style={styles.metricTitle}>{metric}</div>
                        <div style={styles.metricActions}>
                          {/* Plus Icon: Open Form */}
                          <button
                            style={styles.actionButton}
                            onClick={() => setActiveMetric(metric)}>
                            +
                          </button>
                          {/* Three-Line Icon: Toggle List */}
                          <button
                            style={styles.actionButton}
                            onClick={() =>
                              setListOpenMetric(
                                listOpenMetric === metric ? null : metric
                              )
                            }>
                            ≡
                          </button>
                        </div>

                        {/* Form */}
                        {activeMetric === metric && (
                          <form style={styles.form} onSubmit={handleFormSubmit}>
                            <input
                              type="text"
                              value={formData}
                              onChange={(e) => setFormData(e.target.value)}
                              placeholder={`Enter value for ${metric}`}
                              style={styles.input}
                            />
                            <button type="submit" style={styles.submitButton}>
                              Submit
                            </button>
                          </form>
                        )}

                        {/* List */}
                        {listOpenMetric === metric && (
                          <ul style={styles.list}>
                            <li>Sample Item 1</li>
                            <li>Sample Item 2</li>
                            <li>Sample Item 3</li>
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Projection Section */}
                  <div style={styles.projectionContainer}>
                    <h3 style={styles.projectionTitle}>
                      Projection you next 5 Years
                    </h3>
                    <div style={styles.pieChart}>
                      <div style={styles.pieChartValue}>2069.06</div>
                    </div>
                    <button style={styles.reportButton}>Get Full Report</button>
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
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "20px",
    // height: "80vh",
    color: "#FFFFFF",
  },
  metricsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
  },
  metricCard: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFD54F",
    borderRadius: "10px",
    padding: "10px",
    height: "140px",
    width: "120px",
    position: "relative",
  },
  metricTitle: {
    fontSize: "18px",
    fontWeight: "bold",
  },
  metricActions: {
    display: "flex",
    gap: "5px",
  },
  actionButton: {
    backgroundColor: "#000000",
    color: "#FFFFFF",
    border: "none",
    borderRadius: "50%",
    width: "30px",
    height: "30px",
    fontSize: "18px",
    cursor: "pointer",
  },
  form: {
    position: "absolute",
    top: "100%",
    left: "0",
    backgroundColor: "#FFFFFF",
    borderRadius: "5px",
    padding: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
    zIndex: 10,
  },
  input: {
    width: "100px",
    padding: "5px",
    marginBottom: "5px",
    border: "1px solid #CCC",
    borderRadius: "3px",
  },
  submitButton: {
    backgroundColor: "#4CAF50",
    color: "#FFFFFF",
    border: "none",
    padding: "5px 10px",
    borderRadius: "3px",
    cursor: "pointer",
  },
  list: {
    position: "absolute",
    top: "100%",
    left: "0",
    backgroundColor: "#FFFFFF",
    borderRadius: "5px",
    padding: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
    zIndex: 10,
    listStyle: "none",
    margin: 0,
    paddingLeft: "10px",
  },
  projectionContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: "10px",
    padding: "20px",
    width: "300px",
  },
  projectionTitle: {
    color: "#000000",
    fontSize: "16px",
    marginBottom: "10px",
  },
  pieChart: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    background: "conic-gradient(#ff6f61, #ff9e80, #ffd54f, #81c784, #4fc3f7)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "10px",
  },
  pieChartValue: {
    color: "#000000",
    fontSize: "18px",
    fontWeight: "bold",
  },
  reportButton: {
    backgroundColor: "#00E5FF",
    color: "#FFFFFF",
    border: "none",
    borderRadius: "5px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default PathUnicorn5;
