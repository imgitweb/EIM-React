import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import API_BASE_URL from "./../componant/config";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import LeftSidebar from "../componant/LeftSidebar";
import Navigation from "../componant/Navigation";
import SerchBar from "../componant/SearchBar";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const funnelSteps = [
  { id: 1, title: "Visitors", count: 1000 },
  { id: 2, title: "Leads", count: 700 },
  { id: 3, title: "Prospects", count: 400 },
  { id: 4, title: "Customers", count: 150 },
];

const SalesFunnel = () => {
  const [isActive, setActive] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const ToggleEvent = () => {
    setActive((prevState) => !prevState);
  };

  const handleNextStep = () => {
    if (currentStep < funnelSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      alert("You've reached the end of the funnel!");
    }
  };

  const currentFunnelStep = funnelSteps[currentStep];

  const chartData = {
    labels: funnelSteps.map((step) => step.title),
    datasets: [
      {
        label: "Funnel Progress",
        data: funnelSteps.map((step) => step.count),
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const [formData, setFormData] = useState({
    personName: "",
    email: "",
    mobileNumber: "",
    source: "Google",
    interestedForService: "",
  });

  const [message, setMessage] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_BASE_URL}/api/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setMessage({ type: "success", text: result.message });
        setFormData({
          personName: "",
          email: "",
          mobileNumber: "",
          source: "Google",
          interestedForService: "",
        });
      } else {
        setMessage({ type: "error", text: result.message });
      }
    } catch (error) {
      setMessage({ type: "error", text: "Failed to submit the form." });
    }
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
                      <h4 className="fw-semibold mb-8">Sales Funnel</h4>
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
                          <li className="breadcrumb-item" aria-current="page">
                            Sales Funnel
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
              <div className="row">
                <div className="col-md-6">
                  <h1>Lead Form</h1>
                  {message && (
                    <div
                      className={`alert ${
                        message.type === "success"
                          ? "alert-success"
                          : "alert-danger"
                      }`}
                    >
                      {message.text}
                    </div>
                  )}
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label className="form-label">Person Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="personName"
                        value={formData.personName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Mobile Number</label>
                      <input
                        type="text"
                        className="form-control"
                        name="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Source</label>
                      <select
                        className="form-select"
                        name="source"
                        value={formData.source}
                        onChange={handleChange}
                        required
                      >
                        <option value="Google">Google</option>
                        <option value="Social Media">Social Media</option>
                        <option value="News Paper">News Paper</option>
                        <option value="Other Source">Other Source</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">
                        Interested for the Service
                      </label>
                      <textarea
                        className="form-control"
                        name="interestedForService"
                        value={formData.interestedForService}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
              <div className="container ">
                <div className="card p-4">
                  <h4 className="text-center">Sales Funnel Overview</h4>
                  <Bar
                    data={chartData}
                    options={{
                      responsive: true,
                      plugins: {
                        legend: {
                          position: "top",
                        },
                        title: {
                          display: true,
                          text: "Sales Funnel",
                        },
                      },
                    }}
                  />
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

export default SalesFunnel;
