import React, { useState ,useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import LeftSidebar from "../componant/LeftSidebar";
import Navigation from "../componant/Navigation";
import SerchBar from "../componant/SearchBar";
import { useTheme } from "../context/ThemeContext";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const SalesFunnel = () => {
  const [isActive, setActive] = useState(false);
  const [funnelData, setFunnelData] = useState([]); 
  const [loading, setLoading] = useState(true);

  const ToggleEvent = () => {
    setActive((prevState) => !prevState);
  };
  const { theme,} = useTheme(); 
  
const styles = {
  container: {
    color: theme === "dark" ? "#FFFFFF" : "#000000",
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
    backgroundColor: theme === "dark" ? "#333333" : "#FFFFFF",
    color:  theme === "dark" ? "#FFFFFF" : "#000000",
  },
  stepLabel: {
    marginTop: "10px",
    fontSize: "14px",
    fontWeight: "bold",
    color: theme === "dark" ? "#FFFFFF" : "#000000",
  },
};

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5000/api/sales-funnel") 
      .then((response) => {
        setFunnelData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching funnel data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div id="main-wrapper" className={isActive ? "show-sidebar" : ""}>
        {/* Sidebar Start */}
        <LeftSidebar onButtonClick={ToggleEvent} />
        {/* Sidebar End */}
        <div className="page-wrapper">
          <Navigation onButtonClick={ToggleEvent} />
          <div className="body-wrapper">
            <div className="container-fluid">
              <div className="card bg-info-subtle shadow-none position-relative overflow-hidden mb-4">
                <div className="card-body px-4 py-3">
                  <div className="row align-items-center">
                    <div className="col-9">
                      <h4 className="fw-semibold mb-8">Sales Funnel</h4>
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
                            Sales Funnel
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
              
              {/* Funnel Data Display */}
              <div className="card mb-4">
                <div className="card-header">
                  <h5 className="card-title mb-0">Funnel Data from MongoDB</h5>
                </div>
                <div className="card-body">
                  {loading ? (
                    <div className="text-center">
                      <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    </div>
                  ) : funnelData.length > 0 ? (
                    <div className="row">
                      {funnelData.map((item, index) => (
                        <div key={item._id} className="col-md-3 mb-3">
                          <div className="card border-0 shadow-sm">
                            <div className="card-body text-center">
                              <h6 className="card-title">{item.name}</h6>
                              <p className="card-text text-muted">{item.category}</p>
                              <span className="badge bg-primary">${item.price}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center text-muted">
                      <p>No funnel data available</p>
                    </div>
                  )}
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
                  <div
                    style={styles.stepsContainer}
                    className="overflow-x-auto whitespace-nowrap">
                    {[
                      {
                        number: 1,
                        label: "PRODUCT LISTING",
                        color: "#FFA726",
                        textColor: theme === "dark" ? "#FFFFFF" : "#000000", 
                        to: "/product-listing",
                      },
                      {
                        number: 2,
                        label: "CLIENT PERSONA",
                        color: "#66BB6A",
                           textColor: theme === "dark" ? "#FFFFFF" : "#000000", 
                        to: "/client-persona",
                      },
                      {
                        number: 3,
                        label: "MARKETING FUNNEL",
                        color: "#42A5F5",
                           textColor: theme === "dark" ? "#FFFFFF" : "#000000", 
                        to: "/marketing-funnel",
                      },
                      {
                        number: 4,
                        label: "SALES FUNNEL",
                        color: "#EF5350",
                           textColor: theme === "dark" ? "#FFFFFF" : "#000000", 
                        to: "/marketing-funnel",
                      },
                    ].map((step) => (
                      <Link to={step.to} key={step.number} style={styles.step}>
                        <div
                          style={{
                            ...styles.circle,
                            borderColor: step.color,
                            color: step.textColor,
                          }}>
                          {step.number}
                        </div>
                        <p style={styles.stepLabel} 
                         
                        
                        >
                         <Link to={step.to} style={{ color: step.textColor, textDecoration: "none" }}>
    {step.label}
  </Link>
                        </p>
                      </Link>
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


export default SalesFunnel;
