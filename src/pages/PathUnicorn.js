import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LeftSidebar from "../componant/LeftSidebar";
import Navigation from "../componant/Navigation";
import SearchBar from "../componant/SearchBar";
import PUGraph from "./PUGraph";
import SuggestiveSelect from "../componant/SuggestiveSelect";
import API_BASE_URL from "./../componant/config";

const PathToUnicorn = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const countries = [
    { value: "Afghanistan", label: "Afghanistan" },
    { value: "Albania", label: "Albania" },
    { value: "Algeria", label: "Algeria" },
    { value: "Andorra", label: "Andorra" },
    { value: "Angola", label: "Angola" },
    { value: "Argentina", label: "Argentina" },
    { value: "Armenia", label: "Armenia" },
    { value: "Australia", label: "Australia" },
    { value: "Austria", label: "Austria" },
    { value: "Azerbaijan", label: "Azerbaijan" },
    { value: "Bangladesh", label: "Bangladesh" },
    { value: "Belgium", label: "Belgium" },
    { value: "Bhutan", label: "Bhutan" },
    { value: "Brazil", label: "Brazil" },
    { value: "Canada", label: "Canada" },
    { value: "China", label: "China" },
    { value: "Denmark", label: "Denmark" },
    { value: "Egypt", label: "Egypt" },
    { value: "Finland", label: "Finland" },
    { value: "France", label: "France" },
    { value: "Germany", label: "Germany" },
    { value: "India", label: "India" },
    { value: "Indonesia", label: "Indonesia" },
    { value: "Iran", label: "Iran" },
    { value: "Iraq", label: "Iraq" },
    { value: "Ireland", label: "Ireland" },
    { value: "Israel", label: "Israel" },
    { value: "Italy", label: "Italy" },
    { value: "Japan", label: "Japan" },
    { value: "Kenya", label: "Kenya" },
    { value: "Malaysia", label: "Malaysia" },
    { value: "Mexico", label: "Mexico" },
    { value: "Nepal", label: "Nepal" },
    { value: "Netherlands", label: "Netherlands" },
    { value: "New Zealand", label: "New Zealand" },
    { value: "Nigeria", label: "Nigeria" },
    { value: "Norway", label: "Norway" },
    { value: "Pakistan", label: "Pakistan" },
    { value: "Philippines", label: "Philippines" },
    { value: "Poland", label: "Poland" },
    { value: "Portugal", label: "Portugal" },
    { value: "Qatar", label: "Qatar" },
    { value: "Russia", label: "Russia" },
    { value: "Saudi Arabia", label: "Saudi Arabia" },
    { value: "Singapore", label: "Singapore" },
    { value: "South Africa", label: "South Africa" },
    { value: "South Korea", label: "South Korea" },
    { value: "Spain", label: "Spain" },
    { value: "Sri Lanka", label: "Sri Lanka" },
    { value: "Sweden", label: "Sweden" },
    { value: "Switzerland", label: "Switzerland" },
    { value: "Thailand", label: "Thailand" },
    { value: "Turkey", label: "Turkey" },
    { value: "UAE", label: "UAE" },
    { value: "Ukraine", label: "Ukraine" },
    { value: "United Kingdom", label: "United Kingdom" },
    { value: "United States", label: "United States" },
    { value: "Vietnam", label: "Vietnam" },
    { value: "Zimbabwe", label: "Zimbabwe" },
  ];

  const [formData, setFormData] = useState({
    industry: "",
    businessModel: "",
    tam: "",
    som: "",
    startDate: "",
    revenue: "",
    customers: "",
    pitch: "",
    problem: "",
    solution: "",
    founder1: "",
    founder2: "",
    country: "",
    revenueStatus: "",
    startup_id: localStorage.getItem("userId"),
  });

  useEffect(() => {
    setShowModal(true);
    const storedId = localStorage.getItem("userId");
    console.log(storedId);
    if (storedId) {
      setFormData((prev) => ({
        ...prev,
        startup_id: storedId,
      }));
    }
  }, []);

  const ToggleEvent = () => {
    setIsActive(!isActive);
  };

  const handleCircleClick = (milestone) => {
    if (milestone) {
      console.log(milestone);
      navigate("/path-unicorn2", { state: { activeMilestone: milestone } });
    }
  };

  const handleClose = () => setShowModal(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
    console.log(formData);
  };

  const handleCountryChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.startup_id || !formData.businessModel) {
      alert("Please provide required fields: Startup ID and Business Model.");
      setLoading(false);
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `${API_BASE_URL}/api/unicorn/generate-milestones`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Success:", data);
      handleClose();
      navigate("/path-unicorn2");
    } catch (error) {
      console.error("Error:-----", error);
    } finally {
      setLoading(false);
    }
  };

  return (
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
                    <h4 className="fw-semibold mb-8">Path To Unicorn</h4>
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
                          Path To Unicorn
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

            {loading && <p>Loading...</p>}

            {showModal && (
              <>
                <div
                  className="modal-backdrop fade show opacity-75"
                  style={{ backdropFilter: "blur(4px)" }}
                  onClick={handleClose}></div>

                <div className="modal fade show d-block" tabIndex="-1">
                  <div className="modal-dialog modal-xl modal-dialog-centered">
                    <div className="modal-content shadow-lg">
                      <div className="modal-header bg-primary bg-gradient text-white">
                        <h5 className="modal-title fs-4">
                          Startup Information
                        </h5>
                        <button
                          type="button"
                          className="btn-close btn-close-white"
                          onClick={handleClose}></button>
                      </div>

                      <div className="modal-body p-4">
                        <form onSubmit={handleSubmit}>
                          <div className="row g-3">
                            <div className="col-md-4">
                              <div className="form-floating">
                                <select
                                  className="form-select"
                                  id="industry"
                                  value={formData.industry}
                                  onChange={handleChange}>
                                  <option value="">Select Industry</option>
                                  <option value="Education">Education</option>
                                </select>
                                <label htmlFor="industry">Industry</label>
                              </div>
                            </div>

                            <div className="col-md-4">
                              <div className="form-floating">
                                <select
                                  className="form-select"
                                  id="businessModel"
                                  value={formData.businessModel}
                                  onChange={handleChange}>
                                  <option value="">
                                    Select Business Model
                                  </option>
                                  <option value="B2B">B2B</option>
                                </select>
                                <label htmlFor="businessModel">
                                  Business Model
                                </label>
                              </div>
                            </div>

                            <div className="col-md-2">
                              <div className="form-floating">
                                <input
                                  type="number"
                                  className="form-control"
                                  id="tam"
                                  value={formData.tam}
                                  onChange={handleChange}
                                />
                                <label htmlFor="tam">TAM</label>
                              </div>
                            </div>

                            <div className="col-md-2">
                              <div className="form-floating">
                                <input
                                  type="number"
                                  className="form-control"
                                  id="som"
                                  value={formData.som}
                                  onChange={handleChange}
                                />
                                <label htmlFor="som">SOM</label>
                              </div>
                            </div>

                            <div className="col-md-4">
                              <div className="form-floating">
                                <input
                                  type="date"
                                  className="form-control"
                                  id="startDate"
                                  value={formData.startDate}
                                  onChange={handleChange}
                                />
                                <label htmlFor="startDate">Start Date</label>
                              </div>
                            </div>

                            <div className="col-md-4">
                              <div className="form-floating">
                                <input
                                  type="number"
                                  className="form-control"
                                  id="revenue"
                                  value={formData.revenue}
                                  onChange={handleChange}
                                />
                                <label htmlFor="revenue">
                                  Last Year Revenue (USD)
                                </label>
                              </div>
                            </div>

                            <div className="col-md-4">
                              <div className="form-floating">
                                <input
                                  type="number"
                                  className="form-control"
                                  id="customers"
                                  value={formData.customers}
                                  onChange={handleChange}
                                />
                                <label htmlFor="customers">
                                  No. of Paid Customers
                                </label>
                              </div>
                            </div>

                            <div className="col-md-4">
                              <div className="form-floating">
                                <textarea
                                  className="form-control"
                                  id="pitch"
                                  style={{ height: "100px" }}
                                  value={formData.pitch}
                                  onChange={handleChange}></textarea>
                                <label htmlFor="pitch">
                                  Startup Elevator Pitch
                                </label>
                              </div>
                            </div>

                            <div className="col-md-4">
                              <div className="form-floating">
                                <textarea
                                  className="form-control"
                                  id="problem"
                                  style={{ height: "100px" }}
                                  value={formData.problem}
                                  onChange={handleChange}></textarea>
                                <label htmlFor="problem">
                                  Problem We Are Solving
                                </label>
                              </div>
                            </div>

                            <div className="col-md-4">
                              <div className="form-floating">
                                <textarea
                                  className="form-control"
                                  id="solution"
                                  style={{ height: "100px" }}
                                  value={formData.solution}
                                  onChange={handleChange}></textarea>
                                <label htmlFor="solution">
                                  Our Proposed Solution
                                </label>
                              </div>
                            </div>

                            <div className="col-md-6">
                              <div className="form-floating">
                                <input
                                  type="text"
                                  className="form-control"
                                  id="founder1"
                                  value={formData.founder1}
                                  onChange={handleChange}
                                />
                                <label htmlFor="founder1">
                                  Founder #1 Profile
                                </label>
                              </div>
                            </div>

                            <div className="col-md-6">
                              <div className="form-floating">
                                <input
                                  type="text"
                                  className="form-control"
                                  id="founder2"
                                  value={formData.founder2}
                                  onChange={handleChange}
                                />
                                <label htmlFor="founder2">
                                  Founder #2 Profile
                                </label>
                              </div>
                            </div>

                            <div className="col-md-6">
                              <div className="form-floating">
                                {/* <select
                                  className="form-select"
                                  id="country"
                                  value={formData.country}
                                  onChange={handleChange}>
                                 
                                  <option value="">Select Country</option>
                                  {countries.map((country) => (
                                    <option key={country} value={country}>
                                      {country}
                                    </option>
                                  ))}

                                </select> */}
                                <SuggestiveSelect
                                  id="country"
                                  name="country"
                                  value={formData.country}
                                  onChange={handleCountryChange}
                                  options={countries}
                                  placeholder="Select Startup Operating Country"
                                />
                                {/* <label htmlFor="country">
                                  Startup Operating Country
                                </label> */}
                              </div>
                            </div>

                            <div className="col-md-6">
                              <div className="form-floatin">
                                <select
                                  className="form-select"
                                  id="revenueStatus"
                                  value={formData.revenueStatus}
                                  onChange={handleChange}>
                                  <option value="">Select</option>
                                  <option value="Yes">Yes</option>
                                  <option value="No">No</option>
                                </select>
                                {/* <label htmlFor="revenueStatus">
                                  Is this startup revenue generating yet?
                                </label> */}
                              </div>
                            </div>
                          </div>

                          <div className="modal-footer">
                            <button
                              type="submit"
                              className="btn btn-primary w-100 btn-lg">
                              Create Your Path to Unicorn
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            <div className="card">
              <div className="card-header"></div>
              <div className="card-body">
                <PUGraph />
              </div>
              <div className="card-footer"></div>
            </div>
          </div>
        </div>
      </div>
      <SearchBar />
    </div>
  );
};

export default PathToUnicorn;
