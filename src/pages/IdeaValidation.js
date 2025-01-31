import React, { useState } from "react";
import { Heart, CheckCircle, DollarSign, Star, Target } from "lucide-react";
import LeftSidebar from "../componant/LeftSidebar";
import Navigation from "../componant/Navigation";
import SerchBar from "../componant/SearchBar";

const IdeaValidation = () => {
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
                      <h4 className="fw-semibold mb-8">Idea Validation</h4>
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
                            Idea Validation
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
                <div className="card-header">Idea Validation</div>
                <div className="card-body">
                  <div className="container p-4">
                    {/* Title */}
                    <h1 className="display-4 text-center mb-2 text-white">
                      Evaluate your startup idea
                    </h1>
                    <p className="text-center mb-8">
                      Use the DVF framework to prioritize and select your
                      ventures
                    </p>

                    {/* Circles Section */}
                    <div className="row mb-12 justify-content-center ">
                      {/* Circle 1 */}
                      <div className="col-md-2 d-flex flex-column align-items-center">
                        <div
                          className="position-relative mb-2 "
                          style={{
                            width: "100px",
                            height: "100px",
                            backgroundColor: "#FBB6CE",
                            borderRadius: "50%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            opacity: 0.7,
                          }}>
                          <Heart style={{ width: "40px", height: "40px" }} />
                        </div>
                        <div className="text-center text-white">
                          <h5>Desirability</h5>
                          <p className="small">
                            Do customers / users want this?
                          </p>
                        </div>
                      </div>

                      {/* Circle 2 */}
                      <div className="col-md-2 d-flex flex-column align-items-center">
                        <div
                          className="position-relative mb-2"
                          style={{
                            width: "100px",
                            height: "100px",
                            backgroundColor: "#A0F5D7",
                            borderRadius: "50%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            opacity: 0.7,
                          }}>
                          <CheckCircle
                            style={{ width: "40px", height: "40px" }}
                          />
                        </div>
                        <div className="text-center text-white">
                          <h5>Feasibility</h5>
                          <p className="small">Can we do this?</p>
                        </div>
                      </div>

                      {/* Circle 3 */}
                      <div className="col-md-2 d-flex flex-column align-items-center">
                        <div
                          className="position-relative mb-2"
                          style={{
                            width: "100px",
                            height: "100px",
                            backgroundColor: "#A2D8E7",
                            borderRadius: "50%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            opacity: 0.7,
                          }}>
                          <DollarSign
                            style={{ width: "40px", height: "40px" }}
                          />
                        </div>
                        <div className="text-center text-white">
                          <h5>Viability</h5>
                          <p className="small">Can this survive and thrive?</p>
                        </div>
                      </div>

                      {/* Circle 4 */}
                      <div className="col-md-2 d-flex flex-column align-items-center">
                        <div
                          className="position-relative mb-2"
                          style={{
                            width: "100px",
                            height: "100px",
                            backgroundColor: "#FFEB3B",
                            borderRadius: "50%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            opacity: 0.7,
                          }}>
                          <Star style={{ width: "40px", height: "40px" }} />
                        </div>
                        <div className="text-center text-white">
                          <h5>Innovation</h5>
                          <p className="small">
                            How new and innovative is the idea?
                          </p>
                        </div>
                      </div>

                      {/* Circle 5 */}
                      <div className="col-md-2 d-flex flex-column align-items-center">
                        <div
                          className="position-relative mb-2"
                          style={{
                            width: "100px",
                            height: "100px",
                            backgroundColor: "#FF7043",
                            borderRadius: "50%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            opacity: 0.7,
                          }}>
                          <Target style={{ width: "40px", height: "40px" }} />
                        </div>
                        <div className="text-center text-white">
                          <h5>Target Market</h5>
                          <p className="small">Who is the target audience?</p>
                        </div>
                      </div>
                    </div>

                    {/* Framework Grid */}
                    <div className="row mb-8">
                      {/* Desirability Column */}
                      <div className="col-md-4 card">
                        <div className="border p-3">
                          <h3 className="font-weight-bold text-xl mb-4 text-white">
                            Desirability
                          </h3>
                          <div
                            className="bg-pink-100 p-2 mb-4"
                            style={{ backgroundColor: "#FBB6CE" }}>
                            "Do people want this?"{" "}
                          </div>
                          <p className="font-weight-bold mb-2">Focus</p>
                          <p className="mb-4">User Needs and Desires</p>
                          <p className="font-weight-bold mb-2">
                            Considerations
                          </p>
                          <ul className="list-unstyled">
                            <li>User research and empathy mapping</li>
                            <li>User interviews and surveys</li>
                            <li>Proof of concept and validating questions</li>
                          </ul>
                        </div>
                      </div>

                      {/* Viability Column */}
                      <div className="col-md-4 card">
                        <div className="border p-3">
                          <h3 className="font-weight-bold text-xl mb-4 text-white">
                            Viability
                          </h3>
                          <div
                            className="bg-cyan-100 p-2 mb-4"
                            style={{ backgroundColor: "#A0F5D7" }}>
                            {" "}
                            "Can we make this profitable?"{" "}
                          </div>
                          <p className="font-weight-bold mb-2">Focus</p>
                          <p className="mb-4">
                            Business Model and Sustainability
                          </p>
                          <p className="font-weight-bold mb-2">
                            Considerations
                          </p>
                          <ul className="list-unstyled">
                            <li>Market analysis and surveying competition</li>
                            <li>
                              Financials, revenue streams and cost structure
                            </li>
                            <li>Financial projections / forecasting</li>
                          </ul>
                        </div>
                      </div>

                      {/* Feasibility Column */}
                      <div className="col-md-4 card">
                        <div className="border p-3">
                          <h3 className="font-weight-bold text-xl mb-4 text-white">
                            Feasibility
                          </h3>
                          <div
                            className="bg-green-100 p-2 mb-4"
                            style={{ backgroundColor: "#A2D8E7" }}>
                            {" "}
                            "Can we actually build and deliver this?"{" "}
                          </div>
                          <p className="font-weight-bold mb-2">Focus</p>
                          <p className="mb-4">
                            Technical and Operational Capabilities
                          </p>
                          <p className="font-weight-bold mb-2">
                            Considerations
                          </p>
                          <ul className="list-unstyled">
                            <li>Technical capabilities and infrastructure</li>
                            <li>
                              Resources available (team, time, budget, etc.)
                            </li>
                            <li>Operational processes and logistics</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Scoring Table */}
                    <div
                      border="1 1px soiled black"
                      className="border p-3"
                      style={{ color: "#D3D3D3" }}>
                      <h3 className="font-weight-bold mb-4 text-white">
                        Sample Scoring
                      </h3>
                      <table className="table table-dark">
                        <thead>
                          <tr>
                            <th></th>
                            <th
                              className="p-2"
                              style={{ backgroundColor: "#FBB6CE" }}>
                              Desirability
                            </th>
                            <th
                              className="p-2"
                              style={{ backgroundColor: "#A0F5D7" }}>
                              Viability
                            </th>
                            <th
                              className="p-2"
                              style={{ backgroundColor: "#A2D8E7" }}>
                              Feasibility
                            </th>
                            <th>Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="p-2">Idea 1</td>
                            <td className="text-center">4</td>
                            <td className="text-center">3</td>
                            <td className="text-center">2</td>
                            <td className="text-center">9</td>
                          </tr>
                          <tr>
                            <td className="p-2">Idea 2</td>
                            <td className="text-center">4</td>
                            <td className="text-center">5</td>
                            <td className="text-center">3</td>
                            <td className="text-center">11</td>
                          </tr>
                          <tr>
                            <td className="p-2">Idea 3</td>
                            <td className="text-center">2</td>
                            <td className="text-center">3</td>
                            <td className="text-center">3</td>
                            <td className="text-center">8</td>
                          </tr>
                        </tbody>
                      </table>
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

export default IdeaValidation;
