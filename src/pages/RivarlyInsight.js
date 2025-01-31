import React, { useState } from "react";
import LeftSidebar from "../componant/LeftSidebar";
import Navigation from "../componant/Navigation";
import SerchBar from "../componant/SearchBar";

const RivarlyInsight = () => {
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
              <div className="card bg-info-subtle shadow-none position-relative overflow-hidden mb-4">
                <div className="card-body px-4 py-3">
                  <div className="row align-items-center">
                    <div className="col-9">
                      <h4 className="fw-semibold mb-8">Rivarly Insights</h4>
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
                            Rivarly Insights
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
              <div className="card">
                <div className="card-header">
                  Competitive Analysis Framework
                </div>
                <div className="card-body">
                  <div className="container my-5">
                    <div className=" shadow-lg">
                      <h1 className="text-center mb-4">
                        Competitive Analysis Framework
                      </h1>
                      <div className="table-responsive">
                        <table className="table table-bordered ">
                          <thead className="">
                            <tr>
                              <th scope="col">Category</th>
                              <th scope="col">Your Company</th>
                              <th scope="col">Competitor 1</th>
                              <th scope="col">Competitor 2</th>
                            </tr>
                          </thead>
                          <tbody>
                            {[
                              {
                                category: "Product/service",
                                values: [
                                  "SEO",
                                  "SEO/Paid ads",
                                  "SEO/Website design",
                                ],
                              },
                              {
                                category: "Market share",
                                values: ["25%", "40%", "35%"],
                              },
                              {
                                category: "Growth",
                                values: ["6%", "12%", "8%"],
                              },
                              {
                                category: "Target audience",
                                values: ["Dentists", "Dentists", "Dentists"],
                              },
                              {
                                category: "Price structure",
                                values: [
                                  "Monthly fee",
                                  "Hourly",
                                  "Project-based",
                                ],
                              },
                              {
                                category: "Marketing strategies",
                                values: [
                                  "Email/Blog",
                                  "Email/Blog/Social media",
                                  "Social media/Email/Paid ads",
                                ],
                              },
                              {
                                category: "Customer satisfaction",
                                values: ["⭐⭐⭐✰✰", "⭐⭐⭐⭐✰", "⭐⭐⭐⭐⭐"],
                              },
                              {
                                category: "Strengths",
                                values: [
                                  "All-inclusive/one fee",
                                  "Brand visibility",
                                  "Package deals",
                                ],
                              },
                              {
                                category: "Weaknesses",
                                values: [
                                  "Startup with less resources",
                                  "Expensive",
                                  "Questionable customer service",
                                ],
                              },
                              {
                                category: "Key advantage",
                                values: [
                                  "Strong values and mission",
                                  "Industry leader",
                                  "Highly skilled team",
                                ],
                              },
                            ].map((row, index) => (
                              <tr
                                key={index}
                                className={index % 2 === 0 ? "" : ""}>
                                <th scope="row">{row.category}</th>
                                {row.values.map((value, i) => (
                                  <td
                                    key={i}
                                    className={
                                      i === 0 ? "table-danger fw-bold" : ""
                                    }>
                                    {value}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer"></div>
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

export default RivarlyInsight;
