import React, { useState } from "react";
import { Link } from "react-router-dom";
import LeftSidebar from "../componant/LeftSidebar";
import Navigation from "../componant/Navigation";
import SerchBar from "../componant/SearchBar";
import Sidebar from "./Sidebar";

// import "./App.css"; // Import your CSS file for styling

function PathUnicorn9() {
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
                      <h4 className="fw-semibold mb-8">MARKETING FUNNEL</h4>
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
                            MARKETING FUNNEL
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
              <div className=" card-body">
                <div
                  style={{
                    color: "#fff",
                    display: "flex",
                    height: "60vh",
                    fontFamily: "Arial, sans-serif",
                  }}
                  className="row">
                  {/* Left Sidebar */}
                  <div className="col-md-2 col-16">
                    <div
                      style={{
                        backgroundColor: "#223662",
                        color: "#fff",
                        width: "120%",
                        minHeight: "120%",
                        display: "flex",
                        justifyContent: "center",
                        padding: "20px",
                        fontWeight: "bold",
                        borderRadius: "5px",
                      }}>
                      <Sidebar
                        selectedSection="Product Listing"
                        setSelectedSection={() => {}}
                      />
                    </div>
                  </div>
                  {/* Main Content */}
                  <div className="col-md-10 col-12">
                    <div
                      style={{
                        flex: 1,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: "10px",
                      }}>
                      <div style={{ width: "100%", maxWidth: "900px" }}>
                        <h1
                          style={{
                            display: "flex",
                            justifyContent: "space-between", // Pushes elements to both ends
                            alignItems: "center", // Aligns items vertically
                            fontSize: "28px",
                            marginBottom: "20px",
                            width: "100%", // Ensures full width
                          }}>
                          <span
                            style={{
                              fontWeight: "bold", // Highlighted text styling
                              // color: "#223662", // Adjust the color as needed
                            }}>
                            MARKETING FUNNEL
                          </span>
                          <Link
                            to="/salesfunnel"
                            className="text-end btn btn-lg bg-default"
                            style={{
                              backgroundColor: "#223662",
                              color: "white",
                              padding: "10px 20px",
                              borderRadius: "5px",
                              textDecoration: "none",
                              fontSize: "16px",
                            }}>
                            ← Back
                          </Link>
                        </h1>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            padding: "30px",
                            marginBottom: "30px",
                            borderRadius: "10px",
                            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
                          }}>
                          <form style={{ width: "45%" }}>
                            <div style={{ marginBottom: "15px" }}>
                              <input
                                className="form-control"
                                type="text"
                                placeholder="Full Name"
                                style={inputStyle}
                              />
                            </div>
                            <div style={{ marginBottom: "15px" }}>
                              <input
                                className="form-control"
                                type="email"
                                placeholder="Email"
                                style={inputStyle}
                              />
                            </div>
                            <div style={{ marginBottom: "15px" }}>
                              <input
                                className="form-control"
                                type="tel"
                                placeholder="Phone Number"
                                style={inputStyle}
                              />
                            </div>
                            <div style={{ marginBottom: "15px" }}>
                              <select
                                className="form-control"
                                style={{ ...inputStyle, padding: "10px" }}>
                                <option value="">Purpose</option>
                                <option value="newsletter">
                                  Subscribe to Newsletter
                                </option>
                                <option value="demo">Request a Demo</option>
                                <option value="inquiry">General Inquiry</option>
                                <option value="social">Social Media</option>
                              </select>
                            </div>
                          </form>
                          <div style={{ width: "45%" }}>
                            <textarea
                              className="form-control"
                              placeholder="Message"
                              style={{
                                ...inputStyle,
                                height: "200px",
                              }}></textarea>
                            <div
                              style={{ textAlign: "right", marginTop: "20px" }}>
                              <button
                                type="submit"
                                style={{
                                  backgroundColor: "#4F73D9",
                                  border: "none",
                                  color: "#EAEFF4",
                                  padding: "10px 20px",
                                  borderRadius: "5px",
                                  fontWeight: "bold",
                                  cursor: "pointer",
                                }}>
                                Save
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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

const inputStyle = {
  // width: "100%",
  // padding: "10px",
  // borderRadius: "5px",
  // backgroundColor: "#202936",
  // border: "1px solid #ddd",
  // fontSize: "14px",
};

export default PathUnicorn9;
