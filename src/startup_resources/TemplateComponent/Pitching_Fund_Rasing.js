import { useState } from "react";
import LeftSidebar from "../../componant/LeftSidebar";
import Navigation from "../../componant/Navigation";
import { Link } from "react-router-dom";

const Pitching_And_Fundraising = () => {
  const [isActive, setActive] = useState(false);

  const ToggleEvent = () => {
    setActive((prevState) => !prevState);
  };
  return (
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
                    <h4 className="fw-semibold mb-8">Pitching & Fundraising</h4>
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
                          <Link to={"/template"}>Template</Link>
                        </li>
                        <li className="breadcrumb-item" aria-current="page">
                          Pitching & Fundraising
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
            {/* <h1>this is pitching and fund raising page</h1> */}
            <div className="search-bar mb-4">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                />
                <div className="input-group-append">
                  <button className="btn btn-primary" type="submit">
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid mt-4">
            <div className="download-list">
              <div className="card">
                  <div className="card-body">
                  <a
                    href="#0"
                    className="d-flex justify-content-between align-items-center"
                  >
                    <span>Pitch Deck Template </span>
                    <i className="ti ti-download"></i>
                  </a>
                  </div>
              </div>
              <div className="card">
                  <div className="card-body">
                  <a
                    href="#0"
                    className="d-flex justify-content-between align-items-center"
                  >
                    <span>Sample Pitch Deck Of Existing Startup</span>
                    <i className="ti ti-download"></i>
                  </a>
                  </div>
              </div>
              <div className="card">
                  <div className="card-body">
                  <a
                    href="#0"
                    className="d-flex justify-content-between align-items-center"
                  >
                    <span>Valuation Template In Excel</span>
                    <i className="ti ti-download"></i>
                  </a>
                  </div>
              </div>
              <div className="card">
                  <div className="card-body">
                  <a
                    href="#0"
                    className="d-flex justify-content-between align-items-center"
                  >
                    <span>Pitch Deck Database</span>
                    <i className="ti ti-download"></i>
                  </a>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pitching_And_Fundraising;
