import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import LeftSidebar from "../componant/LeftSidebar";
import Navigation from "../componant/Navigation";
import SerchBar from "../componant/SearchBar";
import { Loader2 } from "lucide-react";
import API_BASE_URL from "./../componant/config";
import axios from "axios";
import BecomeUnicorn from "./BecomeUnicorn";
import { useTheme } from "../context/ThemeContext";

function PathUnicorn2() {
  const [data, setData] = useState({ milestones: {} });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isActive, setActive] = useState(false);
  const {theme } = useTheme(); // Assuming you have a theme context

  const ToggleEvent = () => {
    setActive((prevState) => !prevState);
  };
  // States
  const [progress, setProgress] = useState(50);
  const location = useLocation();
  const activeMilestoneFromProps = location.state?.activeMilestone || "All"; // Default to "M1" if not provided
  const [activeTab, setActiveTab] = useState(activeMilestoneFromProps);
  const startup_id = localStorage.getItem("userId") || "default_startup_id"; // Replace with actual startup ID
  useEffect(() => {
    setActiveTab(activeMilestoneFromProps); // Update state when props change
  }, [activeMilestoneFromProps]);
  const [topics] = useState(["All", "Topics", "Build Brand"]);
  const [cards] = useState([
    {
      title: "How to build your brand value?",
      description: "Access full video assessment to learn more",
    },
    {
      title: "Learn to market your brand",
      description: "Detailed insights and assessments available",
    },
    {
      title: "Master digital branding",
      description: "Interactive lessons to master branding",
    },
    {
      title: "Understanding brand perception",
      description: "Learn how consumers perceive your brand",
    },
    {
      title: "Elevating brand awareness",
      description: "Explore strategies for brand awareness",
    },
  ]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    console.log(`Active Tab: ${tab}`);
  };

  const handleCardClick = (card) => {
    window.location.href = "/path-unicorn4"; // Navigate to the new page
  };
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/api/unicorn/${startup_id}`
      );
      setData(response.data.data.milestones);
      console.log("Fetched Data:", response.data.data.milestones);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch data");
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-purple-600" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <div className="text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <>
      <div id="main-wrapper" className={isActive ? "show-sidebar" : ""}>
        {/* Sidebar Start */}
        <LeftSidebar onButtonClick={ToggleEvent} />
        {/*  Sidebar End */}
        <div className="page-wrapper">
          <Navigation onButtonClick={ToggleEvent} />
          <div className="body-wrapper">
            <div className="container-fluid">
              <div className="min-h-screen bg-gray-50 py-8">
                {data && <BecomeUnicorn data={data} />}
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

export default PathUnicorn2;
