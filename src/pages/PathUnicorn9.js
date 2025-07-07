import React, { useState } from "react";
import { Link } from "react-router-dom";
import LeftSidebar from "../componant/LeftSidebar";
import Navigation from "../componant/Navigation";
import SerchBar from "../componant/SearchBar";
import Sidebar from "./Sidebar";
import SuggestiveSelect from "../componant/SuggestiveSelect";
import { useTheme } from "../context/ThemeContext";

// import "./App.css"; // Import your CSS file for styling

function PathUnicorn9() {
  const [isActive, setActive] = useState(false);

  const ToggleEvent = () => {
    setActive((prevState) => !prevState);
  };
  const [formData, setFormData] = useState({
    purpose: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  const { theme } = useTheme();


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
          {/* Header */}
          <div className="card bg-info-subtle shadow-none position-relative overflow-hidden mb-4">
            <div className="card-body px-4 py-3">
              <div className="row align-items-center">
                <div className="col-md-9 col-12">
                  <h4 className="fw-semibold mb-2">MARKETING FUNNEL</h4>
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
                      <li className="breadcrumb-item active" aria-current="page">
                        MARKETING FUNNEL
                      </li>
                    </ol>
                  </nav>
                </div>
                <div className="col-md-3 col-12 text-center mt-3 mt-md-0">
                  <img
                    src="./assets/assets/images/breadcrumb/ChatBc.png"
                    alt="breadcrumb-img"
                    className="img-fluid"
                    style={{ maxHeight: "100px" }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="card">
            <div className="row">
              {/* Sidebar Section */}
              <div className="col-lg-3 col-md-4 mb-4">
                <div
                  style={{
                    backgroundColor: theme === "dark" ? "#223662" : "#F5F5F5",
                    color: theme === "dark" ? "#FFFFFF" : "#000000",
                    padding: "20px",
                    fontWeight: "bold",
                    borderRadius: "5px",
                    height: "100%",
                  }}
                >
                  <Sidebar
                    selectedSection="Product Listing"
                    setSelectedSection={() => {}}
                  />
                </div>
              </div>

              {/* Form Section */}
              <div className="col-lg-9 col-md-8">
                <div className="p-3">
                  <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4">
                    <h1 className="fw-bold mb-3 mb-md-0">MARKETING FUNNEL</h1>
                    <Link
                      to="/salesfunnel"
                      className="btn btn-lg"
                      style={{
                        backgroundColor: theme === "dark" ? "#223662" : "#F5F5F5",
                        color: theme === "dark" ? "#FFFFFF" : "#000000",
                      }}
                    >
                      ← Back
                    </Link>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <input
                        className="form-control mb-3"
                        type="text"
                        placeholder="Full Name"
                        style={inputStyle}
                      />
                      <input
                        className="form-control mb-3"
                        type="email"
                        placeholder="Email"
                        style={inputStyle}
                      />
                      <input
                        className="form-control mb-3"
                        type="tel"
                        placeholder="Phone Number"
                        style={inputStyle}
                      />
                      <SuggestiveSelect
                        name="purpose"
                        value={formData.purpose}
                        onChange={handleInputChange}
                        options={[
                          { label: "Subscribe to Newsletter", value: "Subscribe to Newsletter" },
                          { label: "Request a Demo", value: "Request a Demo" },
                          { label: "General Inquiry", value: "General Inquiry" },
                          { label: "Social Media", value: "Social Media" },
                        ]}
                        theme={theme}
                        placeholder="Select or type purpose"
                        inputStyle={{ ...inputStyle, padding: "10px" }}
                      />
                    </div>
                    <div className="col-md-6">
                      <textarea
                        className="form-control"
                        placeholder="Message"
                        style={{
                          ...inputStyle,
                          height: "200px",
                        }}
                      ></textarea>
                      <div className="text-end mt-3">
                        <button
                          type="submit"
                          style={{
                            backgroundColor: theme === "dark" ? "#223662" : "#F5F5F5",
                            color: theme === "dark" ? "#FFFFFF" : "#000000",
                            padding: "10px 20px",
                            borderRadius: "5px",
                            border: "none",
                            fontWeight: "bold",
                            cursor: "pointer",
                          }}
                        >
                          Save
                        </button>
                      </div>
                    </div>
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
}

const inputStyle = {
  // width: "100%",
  // padding: "10px",
  // borderRadius: "5px",
  // backgroundColor: "#202936",
  // border: "1px solid #ddd",
  // fontSize: "14px",
};

export default PathUnicorn9;
