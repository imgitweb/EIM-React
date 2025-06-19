import React, { useState } from "react";
import LeftSidebar from "../componant/LeftSidebar";
import Navigation from "../componant/Navigation";
import SerchBar from "../componant/SearchBar";
import RevenueChart from "./RevenueChart";
import RevenueCharts1 from "./RevenueCharts1";

const RevenueTracker = () => {
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
                              href="../dark/index.html">
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
              <div className="container-fuilde card py-5">
                <div className="text-center mb-5">
                  <h1 className="fw-bold">Revenue Tracker</h1>
                  <h2 className="text-muted">FY 2024-25</h2>
                </div>

                <div className="row px-3">
                  {/* Gross Revenue */}
                  <div className="col-md-4 ">
                    <div className="card h-100">
                      <div className="card-header text-center fw-semibold">
                        Gross Revenue
                      </div>
                      <div
                        className="card-body text-center"
                        >
                        <h3 className="fw-bold text-primary">2.5M</h3>
                        <p className="text-muted">Total Revenue</p>
                        <div className="row mt-3">
                          <div className="col">
                            <p className="text-muted mb-1">Growth Rate</p>
                            <p className="fw-bold">1.3%</p>
                          </div>
                          <div className="col">
                            <p className="text-muted mb-1">Quarterly Trend</p>
                            <p className="fw-bold">2.5%</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Operating Profit */}
                  <div className="col-md-4">
                    <div className="card h-100">
                      <div className="card-header text-center fw-semibold">
                        Operating Profit
                      </div>
                      <div
                        className="card-body text-center"
                        >
                        <h3 className="fw-bold text-success">3.5%</h3>
                        <p className="text-muted">Operating Margin</p>
                        <p className="mt-3">
                          Total Operations: <span className="fw-bold">236</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* EBITDA */}
                  <div className="col-md-4">
                    <div className="card h-100">
                      <div className="card-header text-center fw-semibold">
                        EBITDA
                      </div>
                      <div
                        className="card-body text-center"
                        >
                        <h3 className="fw-bold text-warning">234</h3>
                        <p className="text-muted">Earnings Before Tax</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className=" ">
                      <div className="card-header text-center fw-semibold">
                        Monthly Revenue Expanse
                      </div>
                      <RevenueCharts1 />
                    </div>
                  </div>
                  {/* Distribution Report */}
                  <div className="col-md-12">
                    <div className="">
                      <div className="card-header text-center fw-semibold">
                        Distribution Report
                      </div>
                      <RevenueChart />
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
};

export default RevenueTracker;
