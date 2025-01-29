import React, { useState } from "react";
import LeftSidebar from "../componant/LeftSidebar";
import Navigation from "../componant/Navigation";
import SerchBar from "../componant/SearchBar";

const InvesterPool = () => {
  const [isActive, setActive] = useState(false);
  const ToggleEvent = () => setActive((prevState) => !prevState);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [investmentOptions] = useState([
    {
      id: 1,
      title: "Seed Investment",
      description:
        "For early-stage funding with higher risks and higher rewards.",
    },
    {
      id: 2,
      title: "Growth Capital",
      description:
        "Invest in the growth phase of our company with solid returns.",
    },
    {
      id: 3,
      title: "Strategic Partnerships",
      description: "Become a strategic partner to drive innovation and growth.",
    },
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission logic (e.g., call an API or store the data)
    alert("Investment form submitted successfully!");
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
                      <h4 className="fw-semibold mb-8">Investor Pool</h4>
                      <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                          <li className="breadcrumb-item">
                            <a
                              href="../dark/index.html"
                              className="text-muted text-decoration-none">
                              Home
                            </a>
                          </li>
                          <li className="breadcrumb-item" aria-current="page">
                            Investor Pool
                          </li>
                        </ol>
                      </nav>
                    </div>
                    <div className="col-3">
                      <div className="text-center mb-n5">
                        <img
                          src="./assets/assets/images/breadcrumb/ChatBc.png"
                          alt="breadcrumb-img"
                          className="img-fluid mb-n4"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="investor-pool">
                <h1>Welcome to the Investor Pool</h1>
                <p>
                  At [Your Company Name], we offer exclusive investment
                  opportunities with high ROI potential. Join us as we expand
                  and create value in the [industry/sector].
                </p>

                <section>
                  <h2>Why Invest with Us?</h2>
                  <ul>
                    <li>High ROI potential</li>
                    <li>Diversified investment options</li>
                    <li>Strong market presence</li>
                    <li>Transparent financial reporting</li>
                  </ul>
                </section>

                <section>
                  <h2>Choose Your Investment Path</h2>
                  <div className="investment-options">
                    {investmentOptions.map((option) => (
                      <div key={option.id} className="investment-option">
                        <h3>{option.title}</h3>
                        <p>{option.description}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h2>How Can You Get Started?</h2>
                  <p>Follow these simple steps to invest with us:</p>
                  <ol>
                    <li>Fill out the investor form below.</li>
                    <li>Review and sign the investment agreement.</li>
                    <li>
                      Transfer funds via bank or preferred payment method.
                    </li>
                    <li>Receive regular updates on your investment.</li>
                  </ol>
                </section>

                <section>
                  <h2>What You Gain as an Investor</h2>
                  <ul>
                    <li>Access to exclusive investor events</li>
                    <li>Early access to new products/services</li>
                    <li>Priority customer support</li>
                  </ul>
                </section>

                <section>
                  <h2>Have Questions? Get in Touch!</h2>
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title mb-3">Investor Pool Form</h4>
                      <form onSubmit={handleSubmit}>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-floating mb-3">
                              <input
                                type="text"
                                className="form-control"
                                id="tb-fname"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Enter Name here"
                              />
                              <label htmlFor="tb-fname">Name</label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-floating mb-3">
                              <input
                                type="email"
                                className="form-control"
                                id="tb-email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="name@example.com"
                              />
                              <label htmlFor="tb-email">Email address</label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-floating mb-3">
                              <input
                                type="password"
                                className="form-control"
                                id="tb-pwd"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                placeholder="Password"
                              />
                              <label htmlFor="tb-pwd">Password</label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-floating mb-3">
                              <input
                                type="password"
                                className="form-control"
                                id="tb-cpwd"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleInputChange}
                                placeholder="Password"
                              />
                              <label htmlFor="tb-cpwd">Confirm Password</label>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="d-md-flex align-items-center">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckDefault"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="flexCheckDefault">
                                  Remember me
                                </label>
                              </div>
                              <div className="ms-auto mt-3 mt-md-0">
                                <button
                                  type="submit"
                                  className="btn btn-primary hstack gap-6">
                                  <i className="ti ti-send fs-4"></i>
                                  Submit
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </section>
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

export default InvesterPool;
