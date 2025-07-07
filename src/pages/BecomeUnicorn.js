import React, { useState, useEffect } from "react";
import "./Unicorn.css";
import {
  ChevronRight,
  TrendingUp,
  Target,
  Activity,
  DollarSign,
  BookOpen,
} from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
import API_URL from "./../componant/config";
import { useTheme } from "../context/ThemeContext";

const BecomeUnicorn = () => {
  const { theme } = useTheme();
  const [selectedMilestone, setSelectedMilestone] = useState("1");
  const [selectedKey, setSelectedKey] = useState("goal");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const startup_id = localStorage.getItem("userId") || "default_startup_id";

  useEffect(() => {
    fetch(`${API_URL}/api/unicorn/${startup_id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((resData) => {
        setData(resData.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div></div>;
  if (error) return <div>Error: {error.message}</div>;

  const financialData = Object.keys(data.milestones).map((milestone) => ({
    name: `M${milestone}`,
    revenue: data.milestones[milestone]?.financialProjections?.usd?.revenue || 0,
    investment: data.milestones[milestone]?.financialProjections?.usd?.investment || 0,
    valuation: data.milestones[milestone]?.financialProjections?.usd?.valuation || 0,
  }));

  const getIcon = (key) => {
    const icons = {
      goal: <Target size={18} className="text-primary" />,
      keyActivities: <Activity size={18} className="text-info" />,
      financialProjections: <DollarSign size={18} className="text-success" />,
      resources: <BookOpen size={18} className="text-warning" />,
    };
    return icons[key] || <ChevronRight size={18} className="text-muted" />;
  };

  const renderFinancialCharts = () => (
    <div className="mb-4">
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">Revenue Growth</h5>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={financialData}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="revenue" stroke="#8884d8" fill="url(#colorRevenue)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Investment vs Valuation</h5>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={financialData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="investment" fill="#82ca9d" />
              <Bar dataKey="valuation" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );

  const renderContent = (content, key) => {
    if (key === "financialProjections") return renderFinancialCharts();

    if (Array.isArray(content)) {
      return (
        <ul className="list-group list-group-flush">
          {content.map((item, idx) => (
            <li key={idx} className="list-group-item small">
              {item}
            </li>
          ))}
        </ul>
      );
    }

    if (typeof content === "object") {
      return (
        <div className="mb-3">
          {Object.entries(content).map(([k, v]) => (
            <div key={k} className="mb-3">
              <h6 className="text-primary text-capitalize">{k}</h6>
              {renderContent(v)}
            </div>
          ))}
        </div>
      );
    }

    return <p className="text-muted">{content}</p>;
  };

  const milestoneKeys = Object.keys(data.milestones[selectedMilestone] || {}).filter(
    (key) => key !== "timeline"
  );

  return (
    <div
      className="container py-4"
      style={{
        backgroundColor: theme === "dark" ? "#202936" : "#F5F5F5",
        color: theme === "dark" ? "#FFFFFF" : "#000000",
      }}
    >
      {/* Tabs */}
     {/* Styled Milestone Tabs */}
<div className="mb-4 overflow-auto">
  <div className="d-flex flex-nowrap gap-2 pb-2 border-bottom">
    {Object.keys(data.milestones).map((milestone) => (
      <button
        key={milestone}
        onClick={() => setSelectedMilestone(milestone)}
        className={`btn btn-sm rounded-pill px-4 py-2 fw-medium shadow-sm ${
          selectedMilestone === milestone
            ? "btn-primary text-white"
            : "btn-outline-secondary bg-light"
        }`}
        style={{ minWidth: "120px", whiteSpace: "nowrap" }}
      >
        Milestone {milestone}
      </button>
    ))}
  </div>
</div>


      <div className="row g-4">
        {/* Sidebar */}
        <div className="col-12 col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-primary">Milestone Details</h5>
              {milestoneKeys.map((key) => (
                <button
                  key={key}
                  onClick={() => setSelectedKey(key)}
                  className={`btn w-100 text-start mb-2 ${
                    selectedKey === key ? "btn-primary" : "btn-outline-light"
                  }`}
                >
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center gap-2">
                      {getIcon(key)}
                      <span className="text-capitalize">{key.replace(/([A-Z])/g, " $1")}</span>
                    </div>
                    <ChevronRight
                      size={14}
                      className={selectedKey === key ? "rotate-90" : ""}
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-12 col-md-8">
          <div className="card">
            <div className="card-body">
              <h4 className="mb-3 d-flex align-items-center gap-2 text-primary">
                {getIcon(selectedKey)}
                <span className="text-capitalize">
                  {selectedKey.replace(/([A-Z])/g, " $1")}
                </span>
              </h4>
              {renderContent(data.milestones[selectedMilestone][selectedKey], selectedKey)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BecomeUnicorn;
