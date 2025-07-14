import React, { useState } from "react";
import Chart from "react-apexcharts";
import { useNavigate } from "react-router-dom";
import {
  FaRobot,
  FaUsers,
  FaUserTie,
  FaChartBar,
  FaTools,
  FaRegChartBar,
} from "react-icons/fa";
import SecondSidebar from "../../componant/SecondSidebar";
import Navigation from "../../componant/Navigation";
import SerchBar from "../../componant/SearchBar";

const RiskFeedbackPage = () => {
  const [isActive, setActive] = useState(false);
  const navigate = useNavigate();
  const ToggleEvent = () => setActive(!isActive);

  const [selectedType, setSelectedType] = useState("ai");
  const [selectedRisks, setSelectedRisks] = useState([]);
  const [output, setOutput] = useState(null);
  const [activeTab, setActiveTab] = useState("radar");

  const riskOptions = ["Market Fit", "Tech Viability", "Cost", "Execution", "Competition"];

  const handleCheckbox = (item) => {
    setSelectedRisks((prev) =>
      prev.includes(item) ? prev.filter((r) => r !== item) : [...prev, item]
    );
  };

  const generateFeedback = () => {
    const riskScores = {
      "Market Fit": 70,
      "Tech Viability": 85,
      "Cost": 60,
      "Execution": 75,
      "Competition": 50,
    };

    setOutput({
      radarScores: riskScores,
      swot: {
        strengths: ["Niche solution", "Technical edge"],
        weaknesses: ["Limited capital"],
        opportunities: ["Tier-2 city adoption"],
        threats: ["Rapid market saturation"],
      },
      mitigation: [
        "Validate product with real users",
        "Onboard a tech co-founder",
        "Apply for Startup India grants",
      ],
    });
  };

  const radarChart = {
    series: [{ name: "Risk Index", data: Object.values(output?.radarScores || {}) }],
    options: {
      chart: { type: "radar", toolbar: { show: false } },
      xaxis: { categories: Object.keys(output?.radarScores || {}) },
      yaxis: { min: 0, max: 100 },
      fill: {
        opacity: 0.4,
        type: "gradient",
        gradient: { shade: "light", type: "vertical", opacityFrom: 0.6, opacityTo: 0.1 },
      },
      stroke: { width: 2 },
      colors: ["#3B82F6"],
      tooltip: { theme: "light" },
    },
  };

  const barChart = {
    series: [{ name: "Score", data: Object.values(output?.radarScores || {}) }],
    options: {
      chart: { type: "bar", toolbar: { show: false } },
      xaxis: { categories: Object.keys(output?.radarScores || {}) },
      colors: ["#10B981"],
      plotOptions: {
        bar: {
          borderRadius: 6,
          columnWidth: "50%",
        },
      },
      tooltip: { theme: "light" },
    },
  };

  return (
    <>
       <div className="p-3 p-md-4 border rounded shadow-sm bg-light">
              <h4 className="mb-4 fw-bold text-dark">Feedback & Risk Analysis</h4>

              {/* Option Tabs */}
              <div className="d-flex flex-wrap gap-2 mb-4">
                {[
                  { key: "ai", icon: <FaRobot />, label: "AI Scan" },
                  { key: "peer", icon: <FaUsers />, label: "Peer Review" },
                  { key: "expert", icon: <FaUserTie />, label: "Expert Feedback" },
                ].map(({ key, icon, label }) => (
                  <button
                    key={key}
                    className={`btn ${selectedType === key ? "btn-primary" : "btn-outline-primary"} d-flex align-items-center gap-2`}
                    onClick={() => setSelectedType(key)}
                  >
                    {icon} {label}
                  </button>
                ))}
              </div>

              {/* Risk Areas */}
              <div className="mb-4">
                <h6 className="fw-semibold text-secondary">Select Risk Areas:</h6>
                <div className="row">
                  {riskOptions.map((risk, i) => (
                    <div className="col-6 col-sm-4 col-md-3" key={i}>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id={risk}
                          checked={selectedRisks.includes(risk)}
                          onChange={() => handleCheckbox(risk)}
                        />
                        <label className="form-check-label text-dark" htmlFor={risk}>
                          {risk}
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {selectedRisks.length === 0 && (
                <div className="alert alert-warning">
                  Select at least one risk area to enable analysis.
                </div>
              )}

              <button
                className="btn btn-success mt-2"
                onClick={generateFeedback}
                disabled={selectedRisks.length === 0}
              >
                Analyze Risks
              </button>

              {/* Output */}
              {output && (
                <div className="mt-5 bg-white border rounded p-3 p-md-4 shadow-sm">
                  <div className="d-flex flex-wrap gap-2 mb-3 border-bottom pb-2">
                    {[
                      { tab: "radar", icon: <FaRegChartBar />, label: "Radar" },
                      { tab: "bar", icon: <FaChartBar />, label: "Bar" },
                      { tab: "swot", icon: <FaTools />, label: "SWOT + Steps" },
                    ].map(({ tab, icon, label }) => (
                      <button
                        key={tab}
                        className={`btn ${activeTab === tab ? "btn-dark" : "btn-outline-dark"} d-flex align-items-center gap-2`}
                        onClick={() => setActiveTab(tab)}
                      >
                        {icon} {label}
                      </button>
                    ))}
                  </div>

                  {activeTab === "radar" && (
                    <Chart
                      options={radarChart.options}
                      series={radarChart.series}
                      type="radar"
                      height={350}
                    />
                  )}

                  {activeTab === "bar" && (
                    <Chart
                      options={barChart.options}
                      series={barChart.series}
                      type="bar"
                      height={350}
                    />
                  )}

                  {activeTab === "swot" && (
                    <>
                      <div className="row">
                        {Object.entries(output.swot).map(([key, values]) => (
                          <div className="col-sm-12 col-md-6" key={key}>
                            <h6 className="text-capitalize text-secondary mt-3">{key}</h6>
                            <ul className="mb-0">
                              {values.map((v, idx) => (
                                <li key={idx}>{v}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      <h6 className="mt-4 text-secondary">Mitigation Steps:</h6>
                      <ul>
                        {output.mitigation.map((step, idx) => (
                          <li key={idx}>{step}</li>
                        ))}
                      </ul>
                    </>
                  )}

                  <div className="mt-4 d-flex flex-wrap gap-2">
                    <button
                      className="btn btn-outline-secondary"
                      onClick={() => navigate("/validate-ai-review")}
                    >
                      ← Back
                    </button>
                    <button
                      className="btn btn-success"
                      onClick={() => navigate("/similer-market")}
                    >
                      View Market Case Studies →
                    </button>
                  </div>
                </div>
              )}
            </div>
    </>
  );
};

export default RiskFeedbackPage;
