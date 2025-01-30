import React, { useState, useEffect } from "react";
import LeftSidebar from "../componant/LeftSidebar";
import Navigation from "../componant/Navigation";
import SerchBar from "../componant/SearchBar";
import RevenueChart from "./RevenueChart";
import RevenueChart1 from "./RevenueChart1";

const RevenueTracker = () => {
  const [isActive, setActive] = useState(false);

  const ToggleEvent = () => {
    setActive((prevState) => !prevState);
  };

  return (
    <>
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
                      <h4 className="fw-semibold mb-8">Revenue Tracker</h4>
                      <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                          <li className="breadcrumb-item">
                            <a
                              className="text-muted text-decoration-none"
                              href="#0">
                              Home
                            </a>
                          </li>
                          <li className="breadcrumb-item" aria-current="page">
                            Revenue Tracker
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
              <div className="container-fluid">
                <div className="card">
                  <div className="card-header">Revenue Tracker</div>
                  <div className="card-body">
                    <RevenueChart />
                    <RevenueChart1 />

                    {/* <RevenueChart1 /> */}
                    <div className="col-5">{/* <RevenueChart1 />sc */}</div>
                  </div>
                  <div className="card-footer"></div>
                </div>
              </div>
            </div>
          </div>
          <SerchBar />
        </div>
      </div>
      <div className="dark-transparent sidebartoggler" />
    </>
  );
};

export default RevenueTracker;
