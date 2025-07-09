import React, { useState, useEffect } from "react";
import LeftSidebar from "../componant/LeftSidebar";
import Navigation from "../componant/Navigation";
import SerchBar from "../componant/SearchBar";
import { useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { FaBroadcastTower, FaBullhorn, FaBug, FaHeart } from "react-icons/fa";
import axios from "axios";
import API_URI from "../componant/config";
import StatCard from "../componant/NewDashboard/StatCard";
import BarChart from "../componant/NewDashboard/BarChart";
import TaskList from "../componant/NewDashboard/TaskList";
import CustomDashboard from "../componant/NewDashboard/CustomDashboard";
import SecondSidebar from "../componant/SecondSidebar";
import InfoCard from "../componant/NewDashboard/InfoCard";
import { SkillCard } from "../componant/NewDashboard/SkillCard";

const Dashboard = () => {
  const [selectedValue, setSelectedValue] = useState("option1");
  const [token, setToken] = useState("");
  const [getPlan, setGetPlan] = useState([]);
  const location = useLocation();
  const { isDark, theme } = useTheme();
  const [hovered, setHovered] = useState(null);
  const [data, setData] = useState({ milestones: {} });

  console.log("Current theme:", theme, "=", isDark);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const [isActive, setActive] = useState(false);
  const Plan = JSON.parse(localStorage.getItem("userData"));
  console.log("selectPlan", Plan);
  const selectedPlan = Plan.selectedPlan;
  const capitalizedPlan =
    selectedPlan.charAt(0).toUpperCase() + selectedPlan.slice(1).toLowerCase();
  console.log(capitalizedPlan);
  const ToggleEvent = () => {
    setActive((prevState) => !prevState);
  };

  useEffect(() => {
    const fetchPlan = async () => {
      try {
        const response = await axios.get(`${API_URI}/api/auth/plan`, {
          params: { selectPlan: capitalizedPlan },
          withCredentials: true,
        });
        setGetPlan(response.data?.selectedPlan?.features);
        console.log("Plan response:", response.data?.selectedPlan?.features);
      } catch (error) {
        console.error("Error fetching plan:", error.message);
      }
    };

    fetchPlan();

    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
      console.log("Stored token:", storedToken);
    }
  }, []);

const cardsData = [
  {
    title: "Idea Validation Score",
    subTitle: "78% - High potential",
    icon: "ti ti-activity",
    color: "#3b82f6", // blue
    current: "78%",
    route: "/idea-validation",
  },
  {
    title: "Startup Health Index",
    subTitle: "Moderate health",
    icon: "ti ti-heartbeat",
    color: "#3b82f6", // blue
    current: "60%",
    route: "/health-index",
  },
  {
    title: "MVP Status",
    subTitle: "In Development",
    icon: "ti ti-rocket",
    color: "#6366f1", // indigo
    current: "In Progress",
    route: "/mvp-status",
  },
  {
    title: "Investor Engagement",
    subTitle: "3 investors viewed your pitch",
    icon: "ti ti-currency-dollar",
    color: "#10b981", // green
    current: "3 Views",
    route: "/investor-engagement",
  },
  {
    title: "Co-founder Match",
    subTitle: "1 strong match found",
    icon: "ti ti-users",
    color: "#0ea5e9", // sky blue
    current: "1 Match",
    route: "/cofounder-match",
  },
  {
    title: "Milestone Tracker",
    subTitle: "42% progress towards launch",
    icon: "ti ti-flag",
    color: "#3b82f6", // blue
    current: "42%",
    route: "/milestone-tracker",
  },
];



  return (
    <>
      <div id="main-wrapper" className={isActive ? "show-sidebar" : ""}>
        {/* Sidebar Start */}
        <SecondSidebar onButtonClick={ToggleEvent} />

        {/*  Sidebar End */}
        <div className="page-wrapper bg-white">
          <Navigation onButtonClick={ToggleEvent} />
          <div className="body-wrapper">
            <div className="container-fluid pb-4  px-3">
      {/* Stat Cards */}
   {/* <div className="row g-3 mb-4">
  <div className="col-6 col-md-3">
    <StatCard icon={<FaBroadcastTower size={24} />} value="150GB" label="Bandwidth" color="warning" />
  </div>
  <div className="col-6 col-md-3">
    <StatCard icon={<FaBullhorn size={24} />} value="$1,345" label="Revenue" color="success" />
  </div>
  <div className="col-6 col-md-3">
    <StatCard icon={<FaBug size={24} />} value="23" label="Errors" color="danger" />
  </div>
  <div className="col-6 col-md-3">
    <StatCard icon={<FaHeart size={24} />} value="+45K" label="Followers" color="primary" />
  </div>
</div> */}
<div className="row g-3 mb-3">
  {cardsData.map((card, index) => (
    <div className="col-md-4 mb-2" key={index}>
      <SkillCard
        title={card.title}
        subTitle={card.subTitle}
        current={card.current}
        color={card.color}
        icon={card.icon}
        // route={card.route}
        filter={card.filter}
      />
    </div>
  ))}
</div>



      {/* User Charts */}
      <div className="row g-4 mb-4">
        <div className="col-md-12">
          <div className="card p-3 shadow-sm">
               {/* Header */}
      <h4 className="mb-2 fw-bold">My Career Path</h4>
            <CustomDashboard />
          </div>
        </div>
        {/* <div className="col-md-4">
          <div className="card p-3 shadow-sm">
            <h6 className="mb-3">Email Statistics</h6>
            <PieChart />
          </div>
        </div> */}
      </div>

      {/* Sales and Tasks */}
      <div className="row g-4">
        <div className="col-md-6">
          <div className="card p-3 shadow-sm">
            <h6 className="mb-0">2017 Sales</h6>
            <small className="text-muted mb-3 d-block">All products including Taxes</small>
            <BarChart />
            <div className="text-muted small mt-2">✅ Data information certified</div>
          </div>
        </div>
        <div className="col-md-6">
          <TaskList />
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

export default Dashboard;
