import React, { useState, useEffect } from "react";
import Navigation from "../../componant/Navigation";
import SerchBar from "../../componant/SearchBar";
import { useLocation } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import axios from "axios";
import API_URI from "../../componant/config";
import SecondSidebar from "../../componant/SecondSidebar";
import {
  FaCode,
  FaPaintBrush,
  FaDatabase,
  FaMobileAlt,
  FaTools,
  FaCloud,
  FaRocket,
  FaUserTie,
  FaChartLine,
  FaMoneyBillWave,
  FaBullhorn,
  FaUsers,
  FaBriefcase,
  FaLightbulb,
} from "react-icons/fa";

import ReusableDashboard from "../../componant/NewDashboard/ReusableDashboard";

const ImStartupSchool = () => {
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

const tabs = [
  {
    name: "Ideation & Validation",
    icon: <FaLightbulb />,
    subCategories: [
      { label: "Identifying Problems Worth Solving" },
      { label: "Design Thinking & Innovation Frameworks" },
      { label: "Market Research Methods (Primary & Secondary)" },
      { label: "TAM, SAM, SOM – Market Sizing Techniques" },
      { label: "Competitor & Industry Analysis" },
      { label: "Customer Persona Development" },
      { label: "Value Proposition Design" },
      { label: "Validation Methods (Surveys, Interviews, MVP Testing)" },
      { label: "Business Model Design (Lean Canvas, BMC)" },
    ],
  },
  {
    name: "Product Development",
    icon: <FaTools />,
    subCategories: [
      { label: "MVP Planning & Rapid Prototyping" },
      { label: "UI/UX Design for Startups" },
      { label: "Choosing Your Tech Stack (Frontend, Backend, Mobile)" },
      { label: "No-Code/Low-Code Tools for Founders" },
      { label: "DevOps Basics & CI/CD for Startups" },
      { label: "Scalable Architecture & Cloud Setup" },
      { label: "Agile & Scrum for Startup Teams" },
      { label: "AI/ML for Startups (Use Cases + Tools)" },
      { label: "Product-Market Fit: Metrics & Iteration Loops" },
      { label: "Cybersecurity & Data Privacy (GDPR, CCPA, etc.)" },
    ],
  },
  {
    name: "Business Setup",
    icon: <FaBriefcase />,
    subCategories: [
      { label: "Global Company Formation (US C-Corp, Indian Pvt Ltd, etc.)" },
      { label: "Legal Entity Types (LLC, C-Corp, LLP, etc.)" },
      { label: "Founder Agreements, Cap Table & Vesting" },
      { label: "Standard Operating Procedures (SOPs)" },
      { label: "Financial Planning: Runway, Burn Rate, Budgeting" },
      { label: "Legal & Regulatory Compliance (by region)" },
      { label: "IP, Trademarks, Copyrights & Licensing" },
      { label: "Insurance & Risk Mitigation for Startups" },
      { label: "Contract Management (NDAs, SLAs, MSAs)" },
      { label: "Audit Readiness & Bookkeeping Systems" },
    ],
  },
  {
    name: "Talent & Culture",
    icon: <FaUsers />,
    subCategories: [
      { label: "Hiring Cofounders vs First Employees" },
      { label: "Hiring Processes & Global HR Best Practices" },
      { label: "Talent Acquisition (Freelancers, Interns, Full-Time)" },
      { label: "Remote & Hybrid Team Management" },
      { label: "Organizational Design for Startups" },
      { label: "Compensation & Equity Structuring (ESOPs)" },
      { label: "Onboarding & Training Systems" },
      { label: "Building Company Culture & Values" },
      { label: "Leadership & Team Dynamics" },
      { label: "HR Systems, Payroll, and Compliance (US, EU, India, etc.)" },
    ],
  },
  {
    name: "Sales & Marketing",
    icon: <FaBullhorn />,
    subCategories: [
      { label: "Crafting Your Go-To-Market (GTM) Strategy" },
      { label: "Sales Funnel Design (B2B, B2C, D2C, SaaS)" },
      { label: "How to Get Your First 10 Customers" },
      { label: "Outbound vs Inbound Sales Strategies" },
      { label: "Building a Sales Team & CRM Systems" },
      { label: "Marketing Strategy (Digital + Traditional)" },
      { label: "Social Media & Influencer Marketing" },
      { label: "Paid Ads (Meta, Google, LinkedIn, etc.)" },
      { label: "Email, Content & SEO" },
      { label: "Partnerships, Referrals & Community Growth" },
      { label: "Conversion Optimization & A/B Testing" },
      { label: "Retention, NPS, and Customer Success" },
    ],
  },
  {
    name: "Funding",
    icon: <FaMoneyBillWave />,
    subCategories: [
      { label: "Startup Fundraising 101 (Bootstrapping to Series D)" },
      { label: "Funding Instruments (SAFE, Convertible Notes, Equity)" },
      { label: "How to Build a Killer Pitch Deck" },
      { label: "Valuation Techniques & Financial Modelling" },
      { label: "Investor Outreach & Management (Angels, VCs, Corporates)" },
      { label: "Due Diligence & Term Sheet Negotiation" },
      { label: "Cap Table Management Tools & Best Practices" },
      { label: "Grant & Non-Equity Funding Sources" },
      { label: "Crowdfunding & Alternative Capital" },
      { label: "Investor Relations & Board Reporting" },
    ],
  },
  {
    name: "Scaling",
    icon: <FaChartLine />,
    subCategories: [
      { label: "Scaling Operations & Infrastructure" },
      { label: "Growth Metrics & Dashboards (North Star, LTV/CAC)" },
      { label: "Scaling Customer Support & Success" },
      { label: "International Market Entry (Localization, Legal, GTM)" },
      { label: "Cultural & Regulatory Adaptation" },
      { label: "Cross-Border Taxation & Legal Concerns" },
      { label: "M&A Strategy & Preparation" },
      { label: "IPO Readiness & Governance" },
      { label: "Exit Planning (Acquisition, IPO, SPAC, Secondary Sales)" },
      { label: "Legacy Building & Founder Succession" },
    ],
  },
  {
    name: "Founder Excellence",
    icon: <FaUserTie />,
    subCategories: [
      { label: "Founder Psychology & Stress Management" },
      { label: "Time Management & Decision-Making" },
      { label: "Communication & Negotiation Skills" },
      { label: "Public Speaking & Investor Pitching" },
      { label: "Personal Branding & Thought Leadership" },
      { label: "Networking for Founders (VCs, Accelerators, Mentors)" },
      { label: "Advisory Boards & Mentorship" },
      { label: "Conflict Resolution & Crisis Management" },
      { label: "Ethics & Impact-Driven Leadership" },
    ],
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
           {/* User Charts */}
      <div className="row g-4 ">
        <div className="col-md-12">
          <div className="card p-3 shadow-sm">
               {/* Header */}
      <h5 className="mb-2 fw-bold">IM Startup School</h5>
            <ReusableDashboard tabs={tabs}  />
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
};

export default ImStartupSchool;
