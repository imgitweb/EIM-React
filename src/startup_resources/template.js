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
                      <h4 className="fw-semibold mb-8">Template</h4>
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
                <div class="col-sm-8 col-xl-4">
                  <div class="card bg-primary-subtle shadow-none">
                    <Link to={"/pitching-and-fund-rasing"}>
                      <div class="card-body p-4">
                        <div class="d-flex align-items-center">
                          <div class="round rounded text-bg-primary align-items-center justify-content-center">
                            <img
                              src="./assets/assets/images/template/1.png"
                              alt="modernize-img"
                              className="img-fluid mb-n4"
                            />
                          </div>
                          <h6 class="mb-0 ms-3">Pitch And Funds Rasing</h6>
                          {/* <div class="ms-auto text-primary d-flex align-items-center">
                            <i class="ti ti-trending-up text-primary fs-6 me-1"></i>
                            <span class="fs-2 fw-bold">+ 2.30%</span>
                          </div> */}
                        </div>
                        <div class="d-flex align-items-center justify-content-between mt-4">
                          <h3 class="mb-0 fw-semibold fs-7">28</h3>
                          {/* <span class="fw-bold">$1,015.00</span> */}
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div class="col-sm-8 col-xl-4">
                  <div class="card bg-primary-subtle shadow-none">
                    <Link to={"/legal-and-compliance-doc"}>
                      <div class="card-body p-4">
                        <div class="d-flex align-items-center">
                          <div class="round rounded text-bg-primary align-items-center justify-content-center">
                            <img
                              src="./assets/assets/images/template/2.png"
                              alt="modernize-img"
                              className="img-fluid mb-n4"
                            />
                          </div>
                          <h6 class="mb-0 ms-3">
                            Legal And Compliance Document
                          </h6>
                          {/* <div class="ms-auto text-primary d-flex align-items-center">
                            <i class="ti ti-trending-up text-primary fs-6 me-1"></i>
                            <span class="fs-2 fw-bold">+ 2.30%</span>
                          </div> */}
                        </div>
                        <div class="d-flex align-items-center justify-content-between mt-4">
                          <h3 class="mb-0 fw-semibold fs-7">33</h3>
                          {/* <span class="fw-bold">$1,015.00</span> */}
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div class="col-sm-8 col-xl-4">
                  <div class="card bg-primary-subtle shadow-none">
                    <Link to={"/formation-and-banking-temp"}>
                      <div class="card-body p-4">
                        <div class="d-flex align-items-center">
                          <div class="round rounded text-bg-primary align-items-center justify-content-center">
                            <img
                              src="./assets/assets/images/template/3.png"
                              alt="modernize-img"
                              className="img-fluid mb-n4"
                            />
                          </div>
                          <h6 class="mb-0 ms-3">
                            Formation And Banking Templates
                          </h6>
                          {/* <div class="ms-auto text-primary d-flex align-items-center">
                            <i class="ti ti-trending-up text-primary fs-6 me-1"></i>
                            <span class="fs-2 fw-bold">+ 2.30%</span>
                          </div> */}
                        </div>
                        <div class="d-flex align-items-center justify-content-between mt-4">
                          <h3 class="mb-0 fw-semibold fs-7">19</h3>
                          {/* <span class="fw-bold">$1,015.00</span> */}
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div class="col-sm-8 col-xl-4">
                  <div class="card bg-primary-subtle shadow-none">
                    <Link to={"/hr-and-employee-agreement"}>
                      <div class="card-body p-4">
                        <div class="d-flex align-items-center">
                          <div class="round rounded text-bg-primary align-items-center justify-content-center">
                            <img
                              src="./assets/assets/images/template/4.png"
                              alt="modernize-img"
                              className="img-fluid mb-n4"
                            />
                          </div>
                          <h6 class="mb-0 ms-3">HR And Employee Agreement</h6>
                          {/* <div class="ms-auto text-primary d-flex align-items-center">
                          <i class="ti ti-trending-up text-primary fs-6 me-1"></i>
                          <span class="fs-2 fw-bold">+ 2.30%</span>
                        </div> */}
                        </div>
                        <div class="d-flex align-items-center justify-content-between mt-4">
                          <h3 class="mb-0 fw-semibold fs-7">41</h3>
                          {/* <span class="fw-bold">$1,015.00</span> */}
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div class="col-sm-8 col-xl-4">
                  <div class="card bg-primary-subtle shadow-none">
                    <Link to={"/financial-and-accounting-docs"}>
                      <div class="card-body p-4">
                        <div class="d-flex align-items-center">
                          <div class="round rounded text-bg-primary align-items-center justify-content-center">
                            <img
                              src="./assets/assets/images/template/5.png"
                              alt="modernize-img"
                              className="img-fluid mb-n4"
                            />
                          </div>
                          <h6 class="mb-0 ms-3">
                            Financial And Accounting Documents
                          </h6>
                          {/* <div class="ms-auto text-primary d-flex align-items-center">
                            <i class="ti ti-trending-up text-primary fs-6 me-1"></i>
                            <span class="fs-2 fw-bold">+ 2.30%</span>
                          </div> */}
                        </div>
                        <div class="d-flex align-items-center justify-content-between mt-4">
                          <h3 class="mb-0 fw-semibold fs-7">40</h3>
                          {/* <span class="fw-bold">$1,015.00</span> */}
                        </div>
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
