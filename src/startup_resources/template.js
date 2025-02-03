import React, { useState } from "react";
import LeftSidebar from "../componant/LeftSidebar";
import Navigation from "../componant/Navigation";
import SerchBar from "../componant/SearchBar";
import { Link } from "react-router-dom";

const Template = () => {
  const [isActive, setActive] = useState(false);

  const ToggleEvent = () => {
    setActive((prevState) => !prevState);
  };
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
                      <h4 className="fw-semibold mb-8">Notes</h4>
                      <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                          <li className="breadcrumb-item">
                            <a
                              className="text-muted text-decoration-none"
                              href="#0"
                            >
                              Home
                            </a>
                          </li>
                          <li className="breadcrumb-item" aria-current="page">
                            Template
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
            </div>
            <div className="container-fluid">
              <div className="row justify-content-center">
                <div className="col-md-4 col-sm-8 mb-5">
                  <div className="card">
                    <Link to={"/pitching-and-fund-rasing"}>
                      <div className="card-body">
                        <img
                          src="./assets/assets/images/template/1.png"
                          alt="modernize-img"
                          className="img-fluid mb-n4"
                          style={{
                            display: "flex",
                            margin: "0 auto",
                            borderRadius: "15px",
                            aspectRatio: "1/1",
                          }}
                        />
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-md-4 col-sm-8 mb-5">
                  <div className="card">
                    <Link to={"/legal-and-compliance-doc"}>
                      <div className="card-body">
                        <img
                          src="./assets/assets/images/template/2.png"
                          alt="modernize-img"
                          className="img-fluid mb-n4"
                          style={{
                            display: "flex",
                            margin: "0 auto",
                            borderRadius: "15px",
                          }}
                        />
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-md-4 col-sm-8 mb-5">
                  <div className="card">
                    <Link to={"/formation-and-banking-temp"}>
                      <div className="card-body">
                        <img
                          src="./assets/assets/images/template/3.png"
                          alt="modernize-img"
                          className="img-fluid mb-n4"
                          style={{
                            display: "flex",
                            margin: "0 auto",
                            borderRadius: "15px",
                            aspectRatio: "1/1",
                          }}
                        />
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-md-4 col-sm-8 mb-5">
                  <div className="card">
                    <Link to={"/hr-and-employee-agreement"}>
                      <div className="card-body">
                        <img
                          src="./assets/assets/images/template/4.png"
                          alt="modernize-img"
                          className="img-fluid mb-n4"
                          style={{
                            display: "flex",
                            margin: "0 auto",
                            borderRadius: "15px",
                            aspectRatio: "1/1",
                          }}
                        />
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-md-4 col-sm-8 mb-5">
                  <div className="card">
                    <Link to={"/financial-and-accounting-docs"}>
                      <div className="card-body">
                        <img
                          src="./assets/assets/images/template/5.png"
                          alt="modernize-img"
                          className="img-fluid mb-n4"
                          style={{
                            display: "flex",
                            margin: "0 auto",
                            borderRadius: "15px",
                            aspectRatio: "1/1",
                          }}
                        />
                      </div>
                    </Link>
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

export default Template;
