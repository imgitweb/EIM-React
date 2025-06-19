import React, { useState, useEffect } from "react";
import LeftSidebar from "../componant/LeftSidebar";
import Navigation from "../componant/Navigation";
import SerchBar from "../componant/SearchBar";
import { useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import axios from "axios";
import API_URI from "../componant/config";
import growthImg from "../assets/growth.webp"; // adjust path as needed

const Dashboard = () => {
  const [selectedValue, setSelectedValue] = useState("option1");
  const [token, setToken] = useState("");
  const [getPlan, setGetPlan] = useState([]);
  const location = useLocation();
  const { isDark, theme } = useTheme();
  const [hovered, setHovered] = useState(null);

  console.log("Current theme:", theme, "=", isDark);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const [isActive, setActive] = useState(false);
  const Plan = JSON.parse(localStorage.getItem("userData"));
  console.log("selectPlan", Plan);
  const selectedPlan = Plan.selectedPlan;
  const capitalizedPlan =
    selectedPlan.charAt(0).toUpperCase() + selectedPlan.slice(1).toLowerCase();
  console.log(capitalizedPlan);
  const ToggleEvent = () => {
    setActive((prevState) => !prevState);
  };

  useEffect(() => {
    const fetchPlan = async () => {
      try {
        const response = await axios.get(`${API_URI}/api/auth/plan`, {
          params: { selectPlan: capitalizedPlan },
          withCredentials: true,
        });
        setGetPlan(response.data?.selectedPlan?.features);
        console.log("Plan response:", response.data?.selectedPlan?.features);
      } catch (error) {
        console.error("Error fetching plan:", error.message);
      }
    };

    fetchPlan();

    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
      console.log("Stored token:", storedToken);
    }
  }, []);

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
              <div className="card bg-info-subtle shadow-none position-relative overflow-hidden mb-4">
                <div className="card-body px-4 py-3">
                  <div className="row align-items-center">
                    <div className="col-md-6 col-12">
                      <h4 className="fw-semibold mb-8">
                        Unlock the Full Potential with the {capitalizedPlan}{" "}
                        Plan
                      </h4>
                      <ol className="mb-3">
                        {getPlan.map((feature, index) => (
                          <li
                            className="p-2 mb-2 border rounded bg-light"
                            key={index}>
                            {feature}
                          </li>
                        ))}
                      </ol>
                    </div>
                    <div className="col-md-6 col-12">
                      <img
                        src={growthImg}
                        alt={`${capitalizedPlan} Plan Image`}
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/*  Owl carousel */}
              {/* <div className="row">
                <div className="col-md-2">
                  <div
                    className={`card border-0 zoom-in shadow-none ${
                      isDark
                        ? "bg-primary-subtle text-primary"
                        : "bg-gray text-dark"
                    }`}>
                    <div className="card-body">
                      <div className="text-center">
                        <img
                          src="./assets/assets/images/svgs/icon-user-male.svg"
                          width={50}
                          height={50}
                          className="mb-3"
                          alt="modernize-img"
                        />
                        <p
                          className={`fw-semibold fs-3 mb-1 ${
                            isDark ? "text-primary" : "text-black"
                          }`}>
                          MRR
                        </p>
                        <h5
                          className={`fw-semibold mb-0 ${
                            isDark ? "text-primary" : "text-black"
                          }`}>
                          96
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-2">
                  <div
                    className={`card border-0 zoom-in shadow-none ${
                      isDark
                        ? "bg-primary-subtle text-primary"
                        : "bg-gray text-black"
                    }`}>
                    <div className="card-body">
                      <div className="text-center">
                        <img
                          src="./assets/assets/images/svgs/icon-user-male.svg"
                          width={50}
                          height={50}
                          className="mb-3"
                          alt="modernize-img"
                        />
                        <p
                          className={`fw-semibold fs-3 mb-1 ${
                            isDark ? "text-primary" : "text-black"
                          }`}>
                          EBITDA
                        </p>
                        <h5
                          className={`fw-semibold mb-0 ${
                            isDark ? "text-primary" : "text-black"
                          }`}>
                          96
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-2">
                  <div
                    className={`card border-0 zoom-in shadow-none ${
                      isDark
                        ? "bg-primary-subtle text-primary"
                        : "bg-gray text-dark"
                    }`}>
                    <div className="card-body">
                      <div className="text-center">
                        <img
                          src="./assets/assets/images/svgs/icon-user-male.svg"
                          width={50}
                          height={50}
                          className="mb-3"
                          alt="modernize-img"
                        />
                        <p
                          className={`fw-semibold fs-3 mb-1 ${
                            isDark ? "text-primary" : "text-black"
                          }`}>
                          CAC/LTV
                        </p>
                        <h5
                          className={`fw-semibold mb-0 ${
                            isDark ? "text-primary" : "text-black"
                          }`}>
                          96
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-2">
                  <div
                    className={`card border-0 zoom-in shadow-none ${
                      isDark
                        ? "bg-primary-subtle text-primary"
                        : "bg-gray text-dark"
                    }`}>
                    <div className="card-body">
                      <div className="text-center">
                        <img
                          src="./assets/assets/images/svgs/icon-user-male.svg"
                          width={50}
                          height={50}
                          className="mb-3"
                          alt="modernize-img"
                        />
                        <p
                          className={`fw-semibold fs-3 mb-1 ${
                            isDark ? "text-primary" : "text-black"
                          }`}>
                          MONTHLY BURN
                        </p>
                        <h5
                          className={`fw-semibold mb-0 ${
                            isDark ? "text-primary" : "text-black"
                          }`}>
                          96
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-2">
                  <div
                    className={`card border-0 zoom-in shadow-none ${
                      isDark
                        ? "bg-primary-subtle text-primary"
                        : "bg-gray text-dark"
                    }`}>
                    {" "}
                    <div className="card-body">
                      <div className="text-center">
                        <img
                          src="./assets/assets/images/svgs/icon-user-male.svg"
                          width={50}
                          height={50}
                          className="mb-3"
                          alt="modernize-img"
                        />
                        <p
                          className={`fw-semibold fs-3 mb-1 ${
                            isDark ? "text-primary" : "text-black"
                          }`}>
                          CASH RUNWAY
                        </p>
                        <h5
                          className={`fw-semibold mb-0 ${
                            isDark ? "text-primary" : "text-black"
                          }`}>
                          96
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-2">
                  <div
                    className={`card border-0 zoom-in shadow-none ${
                      isDark
                        ? "bg-primary-subtle text-primary"
                        : "bg-gray text-dark"
                    }`}>
                    <div className="card-body">
                      <div className="text-center">
                        <img
                          src="./assets/assets/images/svgs/icon-user-male.svg"
                          width={50}
                          height={50}
                          className="mb-3"
                          alt="modernize-img"
                        />
                        <p
                          className={`fw-semibold fs-3 mb-1 ${
                            isDark ? "text-primary" : "text-black"
                          }`}>
                          CLIENTS
                        </p>
                        <h5
                          className={`fw-semibold mb-0 ${
                            isDark ? "text-primary" : "text-black"
                          }`}>
                          96
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              {/*  Row 1 */}
              <div className="row">
                <div className="col-lg-8 d-flex align-items-stretch">
                  <div className="card w-100">
                    <div className="card-body">
                      <div className="d-sm-flex d-block align-items-center justify-content-between mb-9">
                        <div className="mb-3 mb-sm-0">
                          <h4 className="card-title fw-semibold">
                            Earning Vs Expense
                          </h4>
                          <p className="card-subtitle mb-0">
                            Overview of Profit
                          </p>
                        </div>
                        <select
                          value={selectedValue}
                          onChange={handleChange}
                          className="form-select w-auto">
                          <option value="option1">SEP 2024</option>
                          <option value="option2">OCT 2024</option>
                          <option value="option3">NOV 2024</option>
                          <option value="option4">DEC 2024</option>
                        </select>
                      </div>
                      <div className="row align-items-center">
                        <div className="col-md-8">
                          <div id="chart" className="mx-n6" />
                        </div>
                        <div className="col-md-4">
                          <div className="hstack mb-4 pb-1">
                            <div className="p-8 bg-primary-subtle rounded-1 me-3 d-flex align-items-center justify-content-center">
                              <i className="ti ti-grid-dots text-primary fs-6" />
                            </div>
                            <div>
                              <h4 className="mb-0 fs-7 fw-semibold">
                                $63,489.50
                              </h4>
                              <p className="fs-3 mb-0">Total Earnings 23-24</p>
                            </div>
                          </div>
                          <div>
                            <div className="d-flex align-items-baseline mb-4">
                              <span className="round-8 text-bg-primary rounded-circle me-6" />
                              <div>
                                <p className="fs-3 mb-1">Earnings this month</p>
                                <h6 className="fs-5 fw-semibold mb-0">
                                  $48,820
                                </h6>
                              </div>
                            </div>
                            <div className="d-flex align-items-baseline mb-4 pb-1">
                              <span className="round-8 text-bg-secondary rounded-circle me-6" />
                              <div>
                                <p className="fs-3 mb-1">Expense this month</p>
                                <h6 className="fs-5 fw-semibold mb-0">
                                  $26,498
                                </h6>
                              </div>
                            </div>
                            <div>
                              <button className="btn btn-primary w-100">
                                View Full Report
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 d-flex align-items-stretch flex-column">
                  {/* Yearly Breakup */}
                  <div className="card w-100">
                    <div className="card-body">
                      <div className="row align-items-center">
                        <div className="col-8">
                          <h4 className="card-title mb-9 fw-semibold">
                            YoY Revenue Breakup
                          </h4>
                          <h4 className="fw-semibold mb-3">$36,358</h4>
                          <div className="d-flex align-items-center mb-3">
                            <span className="me-1 rounded-circle bg-success-subtle round-20 d-flex align-items-center justify-content-center">
                              <i className="ti ti-arrow-up-left text-success" />
                            </span>
                            <p className="text-dark me-1 fs-3 mb-0">+9%</p>
                            <p className="fs-3 mb-0">last year</p>
                          </div>
                          <div className="d-flex align-items-center">
                            <div className="me-4">
                              <span className="round-8 text-bg-primary rounded-circle me-2 d-inline-block" />
                              <span className="fs-2">2023</span>
                            </div>
                            <div>
                              <span className="round-8 bg-primary-subtle rounded-circle me-2 d-inline-block" />
                              <span className="fs-2">2024</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="d-flex justify-content-center">
                            <div id="breakup" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Monthly Earnings */}
                  <div className="card w-100">
                    <div className="card-body">
                      <div className="row align-items-start">
                        <div className="col-8">
                          <h4 className="card-title mb-9 fw-semibold">
                            YoY Profit Margin
                          </h4>
                          <h4 className="fw-semibold mb-3">$6,820</h4>
                          <div className="d-flex align-items-center pb-1">
                            <span className="me-2 rounded-circle bg-danger-subtle round-20 d-flex align-items-center justify-content-center">
                              <i className="ti ti-arrow-down-right text-danger" />
                            </span>
                            <p className="text-dark me-1 fs-3 mb-0">+9%</p>
                            <p className="fs-3 mb-0">last year</p>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="d-flex justify-content-end">
                            <div className="text-white text-bg-secondary rounded-circle p-6 d-flex align-items-center justify-content-center">
                              <i className="ti ti-currency-dollar fs-6" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 d-flex align-items-stretch">
                  <div className="card w-100">
                    <div className="card-body">
                      <div>
                        <h4 className="card-title fw-semibold mb-1">
                          MoM Burn Last 6 months
                        </h4>
                        <p className="card-subtitle">Every month</p>
                        <div id="salary" className="mb-7 pb-8 mx-n4" />
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center">
                            <div className="bg-primary-subtle rounded me-8 p-8 d-flex align-items-center justify-content-center">
                              <i className="ti ti-grid-dots text-primary fs-6" />
                            </div>
                            <div>
                              <p className="fs-3 mb-0 fw-normal">Salary</p>
                              <h6 className="fw-semibold text-dark fs-4 mb-0">
                                $36,358
                              </h6>
                            </div>
                          </div>
                          <div className="d-flex align-items-center">
                            <div className="text-bg-light rounded me-8 p-8 d-flex align-items-center justify-content-center">
                              <i className="ti ti-grid-dots text-muted fs-6" />
                            </div>
                            <div>
                              <p className="fs-3 mb-0 fw-normal">Marketing </p>
                              <h6 className="fw-semibold text-dark fs-4 mb-0">
                                $5,296
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 d-flex align-items-stretch flex-column">
                  <div className="row">
                    {/* Customers */}
                    <div className="col-sm-6 d-flex align-items-stretch">
                      <div className="card w-100">
                        <div className="card-body pb-0 mb-xxl-4 pb-1">
                          <p className="mb-1 fs-3">Paid Customers</p>
                          <h4 className="fw-semibold fs-7">36,358</h4>
                          <div className="d-flex align-items-center mb-3">
                            <span className="me-2 rounded-circle bg-danger-subtle round-20 d-flex align-items-center justify-content-center">
                              <i className="ti ti-arrow-down-right text-danger" />
                            </span>
                            <p className="text-dark fs-3 mb-0">+9%</p>
                          </div>
                        </div>
                        <div id="customers" />
                      </div>
                    </div>
                    {/* Projects */}
                    <div className="col-sm-6 d-flex align-items-stretch">
                      <div className="card w-100">
                        <div className="card-body">
                          <p className="mb-1 fs-3">Total Customers</p>
                          <h4 className="fw-semibold fs-7">78,298</h4>
                          <div className="d-flex align-items-center mb-3">
                            <span className="me-1 rounded-circle bg-success-subtle round-20 d-flex align-items-center justify-content-center">
                              <i className="ti ti-arrow-up-left text-success" />
                            </span>
                            <p className="text-dark fs-3 mb-0">+9%</p>
                          </div>
                          <div id="projects" />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Comming Soon */}
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex align-items-center mb-7 pb-2">
                        <div className="me-3 pe-1">
                          <img
                            src="./assets/assets/images/profile/user-2.jpg"
                            className="shadow-warning rounded-2"
                            alt="modernize-img"
                            width={72}
                            height={72}
                          />
                        </div>
                        <div>
                          <h5 className="fw-semibold fs-5 mb-2">
                            Country’s top mentors are here!
                          </h5>
                          <p className="fs-3 mb-0">22 March, 2024</p>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between">
                        <ul className="hstack mb-0">
                          <li className="ms-n8">
                            <a href="/#" className="me-1">
                              <img
                                src="./assets/assets/images/profile/user-2.jpg"
                                className="rounded-circle border border-2 border-white"
                                width={44}
                                height={44}
                                alt="modernize-img"
                              />
                            </a>
                          </li>
                          <li className="ms-n8">
                            <a href="/#" className="me-1">
                              <img
                                src="./assets/assets/images/profile/user-3.jpg"
                                className="rounded-circle border border-2 border-white"
                                width={44}
                                height={44}
                                alt="modernize-img"
                              />
                            </a>
                          </li>
                          <li className="ms-n8">
                            <a href="/#" className="me-1">
                              <img
                                src="./assets/assets/images/profile/user-4.jpg"
                                className="rounded-circle border border-2 border-white"
                                width={44}
                                height={44}
                                alt="modernize-img"
                              />
                            </a>
                          </li>
                          <li className="ms-n8">
                            <a href="/#" className="me-1">
                              <img
                                src="./assets/assets/images/profile/user-5.jpg"
                                className="rounded-circle border border-2 border-white"
                                width={44}
                                height={44}
                                alt="modernize-img"
                              />
                            </a>
                          </li>
                        </ul>
                        <a
                          href="/#"
                          className="text-bg-light rounded py-1 px-8 d-flex align-items-center text-decoration-none">
                          <i className="ti ti-message-2 fs-6 text-primary" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 d-flex align-items-stretch">
                  <div className="card text-bg-primary border-0 w-100">
                    <div className="card-body pb-0">
                      <h4 className="fw-semibold mb-1 text-white card-title">
                        Top Performing Months in FY
                      </h4>
                      <p className="fs-3 mb-3 text-white">Overview 2024</p>
                      <div className="text-center mt-3">
                        <img
                          src="./assets/assets/images/backgrounds/piggy.png"
                          className="img-fluid"
                          alt="modernize-img"
                        />
                      </div>
                    </div>
                    <div className="card mx-2 mb-2 mt-n2">
                      <div className="card-body">
                        <div className="mb-7 pb-1">
                          <div className="d-flex justify-content-between align-items-center mb-6">
                            <div>
                              <h6 className="mb-1 fs-4 fw-semibold">
                                Best Month for Revenue (55%  March, 2024)
                              </h6>
                              <p className="fs-3 mb-0">$23,568</p>
                            </div>
                            <div>
                              <span className="badge bg-primary-subtle text-primary fw-semibold fs-3">
                                55%
                              </span>
                            </div>
                          </div>
                          <div className="progress bg-primary-subtle h-4">
                            <div
                              className="progress-bar w-50"
                              role="progressbar"
                              aria-valuenow={75}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                        <div>
                          <div className="d-flex justify-content-between align-items-center mb-6">
                            <div>
                              <h6 className="mb-1 fs-4 fw-semibold">
                                Best Month for Revenue/Burn Ratio (20%  March,
                                2024)
                              </h6>
                              <p className="fs-3 mb-0">$23,568</p>
                            </div>
                            <div>
                              <span className="badge bg-secondary-subtle text-secondary fw-bold fs-3">
                                20%
                              </span>
                            </div>
                          </div>
                          <div className="progress bg-secondary-subtle h-4">
                            <div
                              className="progress-bar text-bg-secondary w-25"
                              role="progressbar"
                              aria-valuenow={75}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12 d-flex align-items-stretch">
                  <div className="card w-100">
                    <div className="card-body">
                      <div className="d-sm-flex d-block align-items-center justify-content-between mb-7">
                        <div className="mb-3 mb-sm-0">
                          <h4 className="card-title fw-semibold">
                            Other Similar Startups (Similar Domain)
                          </h4>
                          <p className="card-subtitle">Startup Details</p>
                        </div>
                        <div>
                          <select
                            value={selectedValue}
                            onChange={handleChange}
                            className="form-select">
                            <option value="option1">March 2024</option>
                            <option value="option2">April 2024</option>
                            <option value="option3">May 2024</option>
                            <option value="option4">June 2024</option>
                          </select>
                        </div>
                      </div>
                      <div className="table-responsive">
                        <table className="table align-middle text-nowrap mb-0">
                          <thead>
                            <tr className="text-muted fw-semibold">
                              <th scope="col" className="ps-0">
                                Startup Name
                              </th>
                              <th scope="col">City</th>
                              <th scope="col">Country</th>
                              <th scope="col">TAM</th>
                              <th scope="col">SAM</th>
                              <th scope="col">SOM</th>
                              <th scope="col">Revenue Current FY</th>
                              <th scope="col">More Details</th>
                            </tr>
                          </thead>
                          <tbody className="border-top">
                            <tr>
                              <td className="ps-0">
                                <div className="d-flex align-items-center">
                                  <div className="me-2 pe-1">
                                    <img
                                      src="./assets/assets/images/profile/user-3.jpg"
                                      className="rounded-circle"
                                      width={40}
                                      height={40}
                                      alt="modernize-img"
                                    />
                                  </div>
                                  <div>
                                    <h6 className="fw-semibold mb-1">
                                      Sunil Joshi
                                    </h6>
                                    <p className="fs-2 mb-0 text-muted">
                                      Web Designer
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <p className="mb-0 fs-3">Elite Admin</p>
                              </td>
                              <td>
                                <span className="badge fw-semibold py-1 w-85 bg-primary-subtle text-primary">
                                  Low
                                </span>
                              </td>
                              <td>
                                <p className="fs-3 text-dark mb-0">$3.9K</p>
                              </td>
                            </tr>
                            <tr>
                              <td className="ps-0">
                                <div className="d-flex align-items-center">
                                  <div className="me-2 pe-1">
                                    <img
                                      src="./assets/assets/images/profile/user-5.jpg"
                                      className="rounded-circle"
                                      width={40}
                                      height={40}
                                      alt="modernize-img"
                                    />
                                  </div>
                                  <div>
                                    <h6 className="fw-semibold mb-1">
                                      John Deo
                                    </h6>
                                    <p className="fs-2 mb-0 text-muted">
                                      Web Developer
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <p className="mb-0 fs-3">Flexy Admin</p>
                              </td>
                              <td>
                                <span className="badge fw-semibold py-1 w-85 bg-warning-subtle text-warning">
                                  Medium
                                </span>
                              </td>
                              <td>
                                <p className="fs-3 text-dark mb-0">$24.5K</p>
                              </td>
                            </tr>
                            <tr>
                              <td className="ps-0">
                                <div className="d-flex align-items-center">
                                  <div className="me-2 pe-1">
                                    <img
                                      src="./assets/assets/images/profile/user-6.jpg"
                                      className="rounded-circle"
                                      width={40}
                                      height={40}
                                      alt="modernize-img"
                                    />
                                  </div>
                                  <div>
                                    <h6 className="fw-semibold mb-1">
                                      Nirav Joshi
                                    </h6>
                                    <p className="fs-2 mb-0 text-muted">
                                      Web Manager
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <p className="mb-0 fs-3">Material Pro</p>
                              </td>
                              <td>
                                <span className="badge fw-semibold py-1 w-85 bg-info-subtle text-info">
                                  High
                                </span>
                              </td>
                              <td>
                                <p className="fs-3 text-dark mb-0">$12.8K</p>
                              </td>
                            </tr>
                            <tr>
                              <td className="ps-0">
                                <div className="d-flex align-items-center">
                                  <div className="me-2 pe-1">
                                    <img
                                      src="./assets/assets/images/profile/user-7.jpg"
                                      className="rounded-circle"
                                      width={40}
                                      height={40}
                                      alt="modernize-img"
                                    />
                                  </div>
                                  <div>
                                    <h6 className="fw-semibold mb-1">
                                      Yuvraj Sheth
                                    </h6>
                                    <p className="fs-2 mb-0 text-muted">
                                      Project Manager
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <p className="mb-0 fs-3">Xtreme Admin</p>
                              </td>
                              <td>
                                <span className="badge fw-semibold py-1 w-85 bg-success-subtle text-success">
                                  Low
                                </span>
                              </td>
                              <td>
                                <p className="fs-3 text-dark mb-0">$4.8K</p>
                              </td>
                            </tr>
                            <tr>
                              <td className="border-0 ps-0">
                                <div className="d-flex align-items-center">
                                  <div className="me-2 pe-1">
                                    <img
                                      src="./assets/assets/images/profile/user-8.jpg"
                                      className="rounded-circle"
                                      width={40}
                                      height={40}
                                      alt="modernize-img"
                                    />
                                  </div>
                                  <div>
                                    <h6 className="fw-semibold mb-1">
                                      Micheal Doe
                                    </h6>
                                    <p className="fs-2 mb-0 text-muted">
                                      Content Writer
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td className="border-0">
                                <p className="mb-0 fs-3">
                                  Helping Hands WP Theme
                                </p>
                              </td>
                              <td className="border-0">
                                <span className="badge fw-semibold py-1 w-85 bg-danger-subtle text-danger">
                                  High
                                </span>
                              </td>
                              <td className="border-0">
                                <p className="fs-3 text-dark mb-0">$9.3K</p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
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
};

export default Dashboard;
