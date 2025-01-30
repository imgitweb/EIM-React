import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import LeftSidebar from "../componant/LeftSidebar";
import Navigation from "../componant/Navigation";
import SerchBar from "../componant/SearchBar";

function PathUnicorn2() {
  const [isActive, setActive] = useState(false);

  const ToggleEvent = () => {
    setActive((prevState) => !prevState);
  };
  // States
  const [progress, setProgress] = useState(50);
  const location = useLocation();
  const activeMilestoneFromProps = location.state?.activeMilestone || "All"; // Default to "M1" if not provided
  const [activeTab, setActiveTab] = useState(activeMilestoneFromProps);
  useEffect(() => {
    setActiveTab(activeMilestoneFromProps); // Update state when props change
  }, [activeMilestoneFromProps]);
  const [topics] = useState(["All", "Topics", "Build Brand"]);
  const [cards] = useState([
    {
      title: "How to build your brand value?",
      description: "Access full video assessment to learn more",
    },
    {
      title: "Learn to market your brand",
      description: "Detailed insights and assessments available",
    },
    {
      title: "Master digital branding",
      description: "Interactive lessons to master branding",
    },
    {
      title: "Understanding brand perception",
      description: "Learn how consumers perceive your brand",
    },
    {
      title: "Elevating brand awareness",
      description: "Explore strategies for brand awareness",
    },
  ]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    console.log(`Active Tab: ${tab}`);
  };

  const handleCardClick = (card) => {
    alert(`Clicked on: ${card.title}`);
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
                      <h4 className="fw-semibold mb-8">Unicorn Path</h4>
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
                            Unicorn Path
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
              <div
                style={{
                  // backgroundColor: "#2D0E41",
                  color: "#FFFFFF",
                  // height: "100vh",
                  padding: "20px",
                }}>
                {/* Header */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "20px",
                  }}>
                  <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>
                    Unicorn Path
                  </h1>
                  <div style={{ flexGrow: 1, marginLeft: "20px" }}>
                    <div
                      style={{
                        height: "8px",
                        // backgroundColor: "#4B1D6E",
                        borderRadius: "4px",
                        position: "relative",
                      }}>
                      <div
                        style={{
                          width: `${progress}%`,
                          height: "100%",
                          backgroundColor: "#223662",
                          borderRadius: "4px",
                          transition: "width 0.3s",
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Navigation Tabs */}
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    marginBottom: "20px",
                  }}>
                  {/* Dynamically create tabs M1 to M14 */}
                  {[
                    "All",
                    ...Array(14)
                      .fill()
                      .map((_, index) => `M${index + 1}`),
                  ].map((tab, index) => (
                    <button
                      key={index}
                      onClick={() => handleTabClick(tab)}
                      style={{
                        backgroundColor:
                          activeTab === tab ? "#223662" : "transparent",
                        color: activeTab === tab ? "#FFFFDF" : "#FFF",
                        border: "none",
                        fontSize: "16px",
                        cursor: "pointer",
                        padding: "5px 10px",
                        borderRadius: "5px",
                      }}>
                      {tab}
                    </button>
                  ))}
                  <div className="text-end"></div>
                </div>

                {/* Content */}
                <div style={{ display: "flex", height: "calc(100% - 120px)" }}>
                  {/* Sidebar */}
                  <div
                    style={{
                      width: "200px",
                      borderRight: "1px solid #4B1D6E",
                      padding: "10px",
                    }}>
                    <p
                      style={{
                        fontWeight: "bold",
                        fontSize: "18px",
                        marginBottom: "10px",
                      }}>
                      Path
                    </p>

                    <ul style={{ listStyle: "none", padding: "0" }}>
                      {topics.map((topic, index) => (
                        <li
                          key={index}
                          onClick={() => handleTabClick(topic)}
                          style={{
                            marginBottom: "10px",
                            color: activeTab === topic ? "#5D6BC9" : "#FFF",
                            cursor: "pointer",
                          }}>
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Main Content */}
                  <div style={{ flex: 1, padding: "20px", overflowY: "auto" }}>
                    <h2 style={{ fontSize: "20px", marginBottom: "20px" }}>
                      {activeTab}
                    </h2>
                    {cards.map((card, index) => (
                      <div
                        key={index}
                        onClick={() => handleCardClick(card)}
                        style={{
                          backgroundColor: "#223662",
                          padding: "15px",
                          borderRadius: "8px",
                          marginBottom: "15px",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          cursor: "pointer",
                          transition: "transform 0.2s",
                        }}>
                        <div>
                          <p style={{ fontSize: "18px", marginBottom: "5px" }}>
                            {card.title}
                          </p>
                          <p style={{ fontSize: "14px", color: "#A7A4B1" }}>
                            {card.description}
                          </p>
                        </div>
                        <button
                          style={{
                            backgroundColor: "transparent",
                            border: "none",
                            fontSize: "18px",
                            color: "#FFF",
                            cursor: "pointer",
                          }}>
                          ...
                        </button>
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
}

export default PathUnicorn2;
