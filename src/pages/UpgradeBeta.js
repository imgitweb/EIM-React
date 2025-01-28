import React, { useState } from "react";
import LeftSidebar from "../componant/LeftSidebar";
import Navigation from "../componant/Navigation";
import SerchBar from "../componant/SearchBar";

const UpgradeBeta = () => {
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
                      <h4 className="fw-semibold mb-8">Upgrade Beta</h4>
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
                            Upgrade Beta
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

              {/* Upgrade Beta Section Content */}
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">What's New in This Upgrade?</h5>
                  <p>
                    The new upgrade brings several features aimed at improving
                    user experience, security, and performance. Here are the key
                    features:
                  </p>
                  <ul>
                    <li>Improved User Interface for smoother navigation</li>
                    <li>Faster performance with optimized codebase</li>
                    <li>New features to enhance user control</li>
                    <li>Bug fixes and improved compatibility</li>
                  </ul>
                  <p>
                    We're excited for you to experience these changes! If you
                    have any questions or feedback, feel free to contact our
                    support team.
                  </p>
                  <div className="d-flex justify-content-between">
                    <button className="btn btn-primary">Learn More</button>
                    <button className="btn btn-success">Upgrade Now</button>
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

export default UpgradeBeta;
