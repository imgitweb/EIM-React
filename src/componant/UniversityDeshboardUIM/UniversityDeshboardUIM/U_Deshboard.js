import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ArrowUp, ArrowDown } from "lucide-react";
import ReactApexChart from "react-apexcharts";

const TopCard = ({ title, subtitle, value, icon, color }) => (
  <div
    className="card border-0 shadow-sm p-3"
    style={{
      borderRadius: "16px",
      fontFamily: "Poppins, sans-serif",
    }}
  >
    <div className="d-flex justify-content-between align-items-start">
      <div className="d-flex align-items-center gap-3">
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            backgroundColor: color,
            borderRadius: "50%",
            width: 32,
            height: 32,
          }}
        >
          <i className={`${icon} text-white`} />
        </div>
        <div>
          <h6 className="mb-0 fw-semibold" style={{ fontSize: "0.8rem" }}>
            {title}
          </h6>
          <small className="text-muted" style={{ fontSize: "0.65rem" }}>
            {subtitle}
          </small>
        </div>
      </div>
      <div>
        <h6
          className="mb-0 fw-semibold"
          style={{ fontSize: "0.75rem", fontWeight: "500" }}
        >
          {value}
        </h6>
      </div>
    </div>
  </div>
);

const VitalMetric = ({ icon, label, subtitle, value, change, isUp, color }) => (
  <div
    className="d-flex align-items-center justify-content-between px-2 py-2 gap-2 mb-3"
    style={{
      fontFamily: "Poppins, sans-serif",
      boxShadow: "0 2px 12px rgba(0, 0, 0, 0.06)",
      borderRadius: "18px",
    }}
  >
    <div className="d-flex align-items-center gap-3">
      <div
        className="rounded-circle d-flex justify-content-center align-items-center"
        style={{
          backgroundColor: color,
          color: "white",
          width: 32,
          height: 32,
        }}
      >
        <strong>{icon}</strong>
      </div>
      <div>
        <div className="fw-semibold" style={{ fontSize: "0.85rem" }}>
          {label}
        </div>
        <div className="text-muted" style={{ fontSize: "0.75rem" }}>
          {subtitle}
        </div>
      </div>
    </div>
    <span
      className={isUp ? "text-success" : "text-danger"}
      style={{ fontSize: "0.65rem", fontWeight: 500 }}
    >
      {isUp ? <ArrowUp size={14} /> : <ArrowDown size={14} />} {change}%
    </span>
  </div>
);

const U_Deshboard = () => {
  const [timeRange, setTimeRange] = useState("Quarterly");
  const [dateFilter, setDateFilter] = useState("Last Month");

  const dataMap = {
    Weekly: [70, 65, 50, 60],
    Monthly: [80, 75, 65, 70],
    Quarterly: [85, 80, 78, 75],
  };

  const displayScores = dataMap[timeRange];

  return (
    <div className="container-fluid py-2 bg-white">
      <div className="row g-3 px-3">
        <div className="col-6 col-md-3">
          <TopCard
            title="Job Readiness Score"
            subtitle="Preparedness for jobs"
            value="78"
            icon="fas fa-briefcase"
            color="#fbbf24"
          />
        </div>
        <div className="col-6 col-md-3">
          <TopCard
            title="Soft Skills Score"
            subtitle="Communication & teamwork"
            value="85"
            icon="fas fa-comments"
            color="#22c55e"
          />
        </div>
        <div className="col-6 col-md-3">
          <TopCard
            title="LinkedIn Score"
            subtitle="Profile strength"
            value="92"
            icon="fab fa-linkedin"
            color="#3b82f6"
          />
        </div>
        <div className="col-6 col-md-3">
          <TopCard
            title="Resume Score"
            subtitle="CV quality & format"
            value="88"
            icon="fas fa-file-alt"
            color="#ef4444"
          />
        </div>
      </div>

      <div className="row mt-2 g-3 px-3">
        <div className="col-md-8">
          <div className="card p-4 shadow-sm h-100">
            <div className="d-flex justify-content-between align-items-center mb-3 gap-2 flex-wrap">
              <h6 className="fw-bold mb-1">Career Readiness</h6>
              <div className="btn-group px-2 rounded-5">
                {["Weekly", "Monthly", "Quarterly"].map((label) => (
                  <button
                    key={label}
                    className={`btn btn-sm ${
                      timeRange === label ? "btn-dark" : "btn-outline-secondary"
                    }`}
                    onClick={() => setTimeRange(label)}
                  >
                    {label}
                  </button>
                ))}

                <div className="px-2">
                  <select
                    className="form-select form-select-sm  w-auto"
                    value={dateFilter}
                    onChange={(e) => setDateFilter(e.target.value)}
                  >
                    <option>All Dates</option>
                    <option>Last 7 Days</option>
                    <option>Last Month</option>
                    <option>Last Quarter</option>
                  </select>
                </div>
              </div>
            </div>

            <ReactApexChart
              options={{
                chart: { type: "bar", toolbar: { show: false } },
                plotOptions: {
                  bar: {
                    borderRadius: 1,
                    columnWidth: "40%",
                    distributed: true,
                  },
                },
                dataLabels: { enabled: false },
                xaxis: {
                  categories: [
                    "Core Skills",
                    "Soft Skills",
                    "Digital Fluency",
                    "Networking",
                  ],
                },
                legend: { show: true, position: "bottom" },
                colors: ["#6366f1", "#22c55e", "#f59e0b", "#ef4444"],
              }}
              series={[{ name: "Score", data: displayScores }]}
              type="bar"
              height={300}
            />
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-4 h-100">
            <h6
              className="fw-semibold mb-3"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Other Vital Metrics
            </h6>
            <VitalMetric
              icon="S"
              label="Skill Scan Assessment"
              subtitle="Proof of skills"
              value="12"
              change={1.01}
              isUp={true}
              color="#111827"
            />
            <VitalMetric
              icon="M"
              label="Mock Interviews"
              subtitle="Practice makes perfect"
              value="8"
              change={0.48}
              isUp={true}
              color="#10b981"
            />
            <VitalMetric
              icon="L"
              label="Learning Hours"
              subtitle="Time you invested"
              value="10"
              change={0.29}
              isUp={false}
              color="#ef4444"
            />
            <VitalMetric
              icon="M"
              label="Mentors Calls"
              subtitle="Guidance sessions booked"
              value="19"
              change={2.79}
              isUp={true}
              color="#0ea5e9"
            />
            <VitalMetric
              icon="V"
              label="Video Feedback"
              subtitle="Pitch insights gained"
              value="7"
              change={4.52}
              isUp={true}
              color="#fbbf24"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default U_Deshboard;
