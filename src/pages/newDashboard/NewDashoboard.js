import React from "react";
import { SkillCard } from "../../componant/components/SkillCard";
import CustomDashboard from "../../componant/components/CustomDashboard";
import BarChart from "../../componant/components/BarChart"
import TaskList from "../../componant/components/TaskList";

// Sample cardsData (with icon JSX already provided using react-icons)
import {
  FaTasks,
  FaHeartbeat,
  FaRocket,
  FaDollarSign,
  FaUsers,
  FaFlag,
} from "react-icons/fa";

const cardsData = [
  {
    title: "Idea Validation Score",
    // subTitle: "High potential based on recent feedback",
    icon: <FaTasks size={16} color="#fff" />,
    color: "#3b82f6",
    current: "78%",
    route: "/idea-validation",
  },
  {
    title: "Startup Health Index",
    // subTitle: "Overall metrics indicate moderate stability",
    icon: <FaHeartbeat size={16} color="#fff" />,
    color: "#3b82f6",
    current: "60%",
    route: "/health-index",
  },
  // {
  //   title: "MVP Status",
  //   subTitle: "Currently under active development",
  //   icon: <FaRocket size={16} color="#fff" />,
  //   color: "#6366f1",
  //   current: "In Progress",
  //   route: "/mvp-status",
  // },
  {
    title: "Investor Engagement",
    // subTitle: "3 investors have recently viewed your pitch",
    icon: <FaDollarSign size={16} color="#fff" />,
    color: "#10b981",
    current: "3",
    route: "/investor-engagement",
  },
  // {
  //   title: "Co-founder Match",
  //   subTitle: "1 highly compatible match identified",
  //   icon: <FaUsers size={16} color="#fff" />,
  //   color: "#0ea5e9",
  //   current: "1 Match",
  //   route: "/cofounder-match",
  // },
  {
    title: "Milestone Tracker",
    icon: <FaFlag size={16} color="#fff" />,
    color: "#3b82f6",
    current: "42%",
    route: "/milestone-tracker",
  },
];

const NewDashboard = () => {
  return (
    <div className="container-fluid py-3 px-0

    "
    // style={{ backgroundColor: "#f8fafc" }}
    >
     {/* Stat Cards */}
<div className="row g-3 mb-5">
  {cardsData.map((card, index) => (
    <div key={index} className="col-12 col-md-6 col-lg-3">
      <SkillCard
        title={card.title}
        subTitle={card.subTitle}
        current={card.current}
        color={card.color}
        icon={card.icon}
        route={card.route}
        filter={card.filter}
      />
    </div>
  ))}
</div>


      {/* My Career Path */}
      <div className="row g-4 mb-4">
        <div className="col-12">
          <div className="card p-3 shadow-sm">
            <h4 className="mb-2 fw-bold">My Career Path</h4>
            <CustomDashboard />
          </div>
        </div>
      </div>

      {/* Sales and Tasks */}
      <div className="row g-4">
        <div className="col-md-6">
          <div className="card p-3 shadow-sm">
            <h6 className="mb-0">2017 Sales</h6>
            <small className="text-muted mb-3 d-block">
              All products including Taxes
            </small>
            <BarChart />
            <div className="text-muted small mt-2">
              ✅ Data information certified
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <TaskList />
        </div>
      </div>
    </div>
  );
};

export default NewDashboard;
