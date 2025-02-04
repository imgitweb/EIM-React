import React, { useState } from "react";
import LeftSidebar from "../componant/LeftSidebar";
import Navigation from "../componant/Navigation";
import SerchBar from "../componant/SearchBar";

function PathUnicorn3() {
  // State for tabs
  const [activeTab, setActiveTab] = useState("Courses");
  const [isActive, setActive] = useState(false);

  const ToggleEvent = () => {
    setActive((prevState) => !prevState);
  };

  // Mock data
  const tableOfContents = [
    { id: 1, title: "Course Overview", duration: "10m" },
    { id: 2, title: "The Business Analysis Overview Lecture", duration: "20m" },
    { id: 3, title: "The Business Analysis Strategy Lecture", duration: "15m" },
    {
      id: 4,
      title: "The Business Analysis Strategic Lecture",
      duration: "25m",
    },
  ];

  const handleTabChange = (tab) => {
    setActiveTab(tab);
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
                <div
                  style={{
                    // backgroundColor: "#2D0E41",
                    color: "#FFF",
                    minHeight: "100vh",
                    padding: "20px",
                  }}>
                  {/* Back Button */}
                  <div style={{ marginBottom: "20px" }}>
                    <button
                      onClick={() => alert("Back to path")}
                      style={{
                        backgroundColor: "transparent",
                        color: "#FFF",
                        border: "none",
                        fontSize: "16px",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                      }}>
                      <span style={{ fontSize: "18px" }}>←</span> Back to path
                    </button>
                  </div>

                  {/* Header Section */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "20px",
                    }}
                    className="row">
                    {/* Course Title and Description */}
                    <div
                      style={{ flex: 1, paddingRight: "20px" }}
                      className="col-md-6 col-12">
                      <h1 style={{ fontSize: "28px", marginBottom: "10px" }}>
                        Brand Building
                      </h1>
                      <p style={{ lineHeight: "1.6" }}>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>
                    </div>
                    {/* Graph Section */}
                    <div
                      style={{
                        flex: 1,
                        backgroundColor: "#223662",
                        borderRadius: "8px",
                        padding: "20px",
                      }}
                      className="col-md-6 col-12">
                      <h3 style={{ fontSize: "20px", marginBottom: "15px" }}>
                        Graph Placeholder
                      </h3>
                      <div
                        style={{
                          width: "100%",
                          height: "150px",
                          background:
                            "linear-gradient(45deg, #FFE84E, #FF9E3E)",
                          borderRadius: "8px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#2D0E41",
                        }}>
                        Graph Visualization
                      </div>
                    </div>
                  </div>

                  {/* Tabs */}
                  <div
                    style={{
                      display: "flex",
                      marginBottom: "20px",
                      gap: "20px",
                    }}>
                    {["Courses", "About"].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => handleTabChange(tab)}
                        style={{
                          backgroundColor:
                            activeTab === tab ? "#FFE84E" : "transparent",
                          color: activeTab === tab ? "#2D0E41" : "#FFF",
                          border: "none",
                          fontSize: "16px",
                          cursor: "pointer",
                          padding: "10px 20px",
                          borderRadius: "5px",
                        }}>
                        {tab}
                      </button>
                    ))}
                  </div>

                  {/* Tab Content */}
                  {activeTab === "Courses" && (
                    <div>
                      {/* Video Section */}
                      <div style={{ marginBottom: "20px" }}>
                        <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>
                          Video Title
                        </h2>
                        <div
                          style={{
                            backgroundColor: "#000",
                            borderRadius: "8px",
                            overflow: "hidden",
                            marginBottom: "20px",
                          }}>
                          <video
                            style={{ width: "100%", height: "auto" }}
                            controls
                            poster="https://via.placeholder.com/800x400?text=Video+Thumbnail">
                            <source src="video.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        </div>
                      </div>

                      {/* Description and Table of Contents */}
                      <div style={{ display: "flex", gap: "20px" }}>
                        {/* Description */}
                        <div style={{ flex: 1 }}>
                          <h3
                            style={{ fontSize: "20px", marginBottom: "10px" }}>
                            Description
                          </h3>
                          <p style={{ lineHeight: "1.6" }}>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                          </p>
                          <div style={{ marginTop: "10px" }}>
                            <button
                              onClick={() => alert("Course Purchased")}
                              style={{
                                padding: "10px 20px",
                                backgroundColor: "#FFE84E",
                                color: "#2D0E41",
                                border: "none",
                                borderRadius: "5px",
                                marginRight: "10px",
                                cursor: "pointer",
                              }}>
                              Get Course
                            </button>
                            <button
                              onClick={() => alert("Course Downloaded")}
                              style={{
                                padding: "10px 20px",
                                backgroundColor: "#223662",
                                color: "#FFF",
                                border: "none",
                                borderRadius: "5px",
                                cursor: "pointer",
                              }}>
                              Download Course
                            </button>
                          </div>
                        </div>

                        {/* Table of Contents */}
                        <div style={{ flex: 1 }}>
                          <h3
                            style={{ fontSize: "20px", marginBottom: "10px" }}>
                            Table of Contents
                          </h3>
                          <ul style={{ listStyle: "none", padding: "0" }}>
                            {tableOfContents.map((item) => (
                              <li
                                key={item.id}
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  padding: "10px 0",
                                  borderBottom: "1px solid #4B1D6E",
                                  fontSize: "16px",
                                }}>
                                <span>{item.title}</span>
                                <span>{item.duration}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "About" && (
                    <div>
                      <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>
                        About
                      </h2>
                      <p style={{ lineHeight: "1.6" }}>
                        This is the About section. Here you can add additional
                        details about the course, the instructors, and any other
                        relevant information.
                      </p>
                    </div>
                  )}
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

export default PathUnicorn3;
