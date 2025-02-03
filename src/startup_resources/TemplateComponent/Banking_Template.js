import { useState } from "react";
import LeftSidebar from "../../componant/LeftSidebar";
import Navigation from "../../componant/Navigation";
import { Link } from "react-router-dom";

const Banking_Template = () => {
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
                          <Link to={"/template"}>Template</Link>
                        </li>
                        <li className="breadcrumb-item" aria-current="page">
                          Formation & Banking Templates
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
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search for..."
              />
              <div className="input-group-append">
                <button className="btn btn-primary" type="button">
                  <i className="ti ti-search"></i>
                </button>
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
                    <span>File 1</span>
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
                    <span>File 2</span>
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
                    <span>File 3</span>
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
                    <span>File 4</span>
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

export default Banking_Template;
