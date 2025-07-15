import React, { useState, useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";
import axios from "axios";
import { FaChartLine, FaPlayCircle, FaTasks, FaComments } from "react-icons/fa";
import API_URI from "../../componant/config";
import ReusableDashboard from "../../componant/NewDashboard/ReusableDashboard";
import {
  FaLightbulb,
  FaTools,
  FaBriefcase,
  FaUsers,
  FaBullhorn,
  FaMoneyBillWave,
  FaUserTie,
} from "react-icons/fa";
import { SkillCard } from "../../componant/components/SkillCard";


const ImStartupSchool = () => {
  const [isActive, setActive] = useState(false);
  const [getPlan, setGetPlan] = useState([]);
  const { isDark } = useTheme();

  const Plan = JSON.parse(localStorage.getItem("userData"));
  const selectedPlan = Plan?.selectedPlan || "starter";
  const capitalizedPlan =
    selectedPlan.charAt(0).toUpperCase() + selectedPlan.slice(1).toLowerCase();

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
        setGetPlan(response.data?.selectedPlan?.features || []);
      } catch (error) {
        console.error("Error fetching plan:", error.message);
      }
    };

    fetchPlan();
  }, [capitalizedPlan]);

  // Dashboard metric data
 const metrics = [
  {
    title: "Course Completion",
    subTitle: "45% of modules completed",
    current: "45%",
    color: "#6366F1",
    icon: <FaChartLine size={16} color="#fff" />,
  },
  {
    title: "Active Sessions",
    subTitle: "Currently enrolled classes",
    current: "12",
    color: "#10B981",
    icon: <FaPlayCircle size={16} color="#fff" />,
  },
  {
    title: "Upcoming Tasks",
    subTitle: "Deadlines this week",
    current: "3",
    color: "#F59E0B",
    icon: <FaTasks size={16} color="#fff" />,
  },
  {
    title: "Feedback Requests",
    subTitle: "Pending reviews",
    current: "1",
    color: "#3B82F6",
    icon: <FaComments size={16} color="#fff" />,
  },
];


 const tabs = [
  {
    name: "Ideation & Validation",
    icon: <FaLightbulb />,
    subCategories: [
      { label: "Problem Discovery" },
      { label: "Design Thinking" },
      { label: "Market Research" },
      { label: "Market Sizing (TAM/SAM/SOM)" },
      { label: "Competitor Analysis" },
      { label: "Customer Persona" },
      { label: "Value Proposition" },
      { label: "Validation Methods" },
      { label: "Business Model" },
    ],
  },
  {
    name: "Product Development",
    icon: <FaTools />,
    subCategories: [
      { label: "MVP & Prototyping" },
      { label: "Startup UI/UX" },
      { label: "Tech Stack" },
      { label: "No-Code Tools" },
      { label: "DevOps & CI/CD" },
      { label: "Cloud Architecture" },
      { label: "Agile & Scrum" },
      { label: "AI/ML Tools" },
      { label: "Product-Market Fit" },
      { label: "Cybersecurity" },
    ],
  },
  {
    name: "Business Setup",
    icon: <FaBriefcase />,
    subCategories: [
      { label: "Company Formation" },
      { label: "Entity Types" },
      { label: "Founder Agreements" },
      { label: "SOPs" },
      { label: "Financial Planning" },
      { label: "Compliance" },
      { label: "IP & Licensing" },
      { label: "Startup Insurance" },
      { label: "Contract Mgmt" },
      { label: "Bookkeeping" },
    ],
  },
  {
    name: "Talent & Culture",
    icon: <FaUsers />,
    subCategories: [
      { label: "Cofounder Hiring" },
      { label: "HR Best Practices" },
      { label: "Talent Acquisition" },
      { label: "Remote Teams" },
      { label: "Org Design" },
      { label: "Equity & ESOPs" },
      { label: "Onboarding" },
      { label: "Company Culture" },
      { label: "Team Dynamics" },
      { label: "Payroll & Compliance" },
    ],
  },
  {
    name: "Sales & Marketing",
    icon: <FaBullhorn />,
    subCategories: [
      { label: "GTM Strategy" },
      { label: "Sales Funnel" },
      { label: "First Customers" },
      { label: "Sales Strategy" },
      { label: "Sales Team & CRM" },
      { label: "Marketing Strategy" },
      { label: "Social & Influencer" },
      { label: "Paid Ads" },
      { label: "SEO & Content" },
      { label: "Partnerships" },
      { label: "A/B Testing" },
      { label: "Customer Success" },
    ],
  },
  {
    name: "Funding",
    icon: <FaMoneyBillWave />,
    subCategories: [
      { label: "Fundraising 101" },
      { label: "Funding Instruments" },
      { label: "Pitch Deck" },
      { label: "Valuation & Models" },
      { label: "Investor Outreach" },
      { label: "Term Sheets" },
      { label: "Cap Table Tools" },
      { label: "Grants & Non-Equity" },
      { label: "Crowdfunding" },
      { label: "Investor Relations" },
    ],
  },
  {
    name: "Scaling",
    icon: <FaChartLine />,
    subCategories: [
      { label: "Ops & Infra Scaling" },
      { label: "Growth Metrics" },
      { label: "Customer Support" },
      { label: "Intl Expansion" },
      { label: "Localization" },
      { label: "Cross-Border Legal" },
      { label: "M&A Strategy" },
      { label: "IPO Readiness" },
      { label: "Exit Planning" },
      { label: "Legacy & Succession" },
    ],
  },
  {
    name: "Founder Excellence",
    icon: <FaUserTie />,
    subCategories: [
      { label: "Founder Psychology" },
      { label: "Time & Decisions" },
      { label: "Communication Skills" },
      { label: "Pitching & Speaking" },
      { label: "Personal Branding" },
      { label: "Networking" },
      { label: "Advisors & Mentors" },
      { label: "Crisis Management" },
      { label: "Ethics & Impact" },
    ],
  },
];

const startupCourses = [
  {
    id: 1,
    title: "Design Thinking for Startups",
    category: "Ideation & Validation",
    subCategory: "Design Thinking", // 🛠 Fixed
    language: "English",
    level: "Beginner",
    image: "https://cdn.prod.website-files.com/629b1dcd203ede574e478a11/62f0fe8ca7006e8573b8bf75_JordenSky_9Benefits%20of%20startupindia.jpg"
  },
  {
    id: 2,
    title: "Market Research Mastery",
    category: "Ideation & Validation",
    subCategory: "Market Research", // 🛠 Fixed
    language: "English",
    level: "Intermediate",
    image: "https://cdn.prod.website-files.com/629b1dcd203ede574e478a11/62f0fe8ca7006e8573b8bf75_JordenSky_9Benefits%20of%20startupindia.jpg"
  },
  {
    id: 3,
    title: "Lean Canvas in Action",
    category: "Ideation & Validation",
    subCategory: "Business Model", // 🛠 Fixed
    language: "English",
    level: "Beginner",
    image: "https://cdn.prod.website-files.com/629b1dcd203ede574e478a11/62f0fe8ca7006e8573b8bf75_JordenSky_9Benefits%20of%20startupindia.jpg"
  },
  {
    id: 4,
    title: "UI/UX Design for Founders",
    category: "Product Development",
    subCategory: "Startup UI/UX", // 🛠 Fixed
    language: "English",
    level: "Intermediate",
    image: "https://cdn.prod.website-files.com/629b1dcd203ede574e478a11/62f0fe8ca7006e8573b8bf75_JordenSky_9Benefits%20of%20startupindia.jpg"
  },
  {
    id: 5,
    title: "Building MVPs with No-Code Tools",
    category: "Product Development",
    subCategory: "No-Code Tools", // 🛠 Fixed
    language: "English",
    level: "Beginner",
    image: "https://cdn.prod.website-files.com/629b1dcd203ede574e478a11/62f0fe8ca7006e8573b8bf75_JordenSky_9Benefits%20of%20startupindia.jpg"
  },
  {
    id: 6,
    title: "DevOps for Startups: CI/CD Basics",
    category: "Product Development",
    subCategory: "DevOps & CI/CD", // 🛠 Fixed
    language: "English",
    level: "Intermediate",
    image: "https://cdn.prod.website-files.com/629b1dcd203ede574e478a11/62f0fe8ca7006e8573b8bf75_JordenSky_9Benefits%20of%20startupindia.jpg"
  },
  {
    id: 7,
    title: "Register Your Startup Globally",
    category: "Business Setup",
    subCategory: "Company Formation", // ✅ Already matches
    language: "English",
    level: "Beginner",
    image: "https://cdn.prod.website-files.com/629b1dcd203ede574e478a11/62f0fe8ca7006e8573b8bf75_JordenSky_9Benefits%20of%20startupindia.jpg"
  },
  {
    id: 8,
    title: "Financial Planning for Founders",
    category: "Business Setup",
    subCategory: "Financial Planning", // ✅
    language: "English",
    level: "Intermediate",
    image: "https://cdn.prod.website-files.com/629b1dcd203ede574e478a11/62f0fe8ca7006e8573b8bf75_JordenSky_9Benefits%20of%20startupindia.jpg"
  },
  {
    id: 9,
    title: "Legal Compliance 101",
    category: "Business Setup",
    subCategory: "Compliance", // 🛠 Renamed from full description
    language: "English",
    level: "Beginner",
    image: "https://cdn.prod.website-files.com/629b1dcd203ede574e478a11/62f0fe8ca7006e8573b8bf75_JordenSky_9Benefits%20of%20startupindia.jpg"
  },
  {
    id: 10,
    title: "Hiring Your First Team",
    category: "Talent & Culture",
    subCategory: "Cofounder Hiring", // 🛠 Matched to closest
    language: "English",
    level: "Beginner",
    image: "https://cdn.prod.website-files.com/629b1dcd203ede574e478a11/62f0fe8ca7006e8573b8bf75_JordenSky_9Benefits%20of%20startupindia.jpg"
  },
  {
    id: 11,
    title: "Designing ESOPs for Startups",
    category: "Talent & Culture",
    subCategory: "Equity & ESOPs", // ✅
    language: "English",
    level: "Intermediate",
    image: "https://cdn.prod.website-files.com/629b1dcd203ede574e478a11/62f0fe8ca7006e8573b8bf75_JordenSky_9Benefits%20of%20startupindia.jpg"
  },
  {
    id: 12,
    title: "Company Culture Bootcamp",
    category: "Talent & Culture",
    subCategory: "Company Culture", // ✅
    language: "English",
    level: "All Levels",
    image: "https://cdn.prod.website-files.com/629b1dcd203ede574e478a11/62f0fe8ca7006e8573b8bf75_JordenSky_9Benefits%20of%20startupindia.jpg"
  },
  {
    id: 13,
    title: "Craft Your GTM Strategy",
    category: "Sales & Marketing",
    subCategory: "GTM Strategy", // ✅
    language: "English",
    level: "Intermediate",
    image: "https://cdn.prod.website-files.com/629b1dcd203ede574e478a11/62f0fe8ca7006e8573b8bf75_JordenSky_9Benefits%20of%20startupindia.jpg"
  },
  {
    id: 14,
    title: "How to Get Your First 10 Customers",
    category: "Sales & Marketing",
    subCategory: "First Customers", // ✅
    language: "English",
    level: "Beginner",
    image: "https://cdn.prod.website-files.com/629b1dcd203ede574e478a11/62f0fe8ca7006e8573b8bf75_JordenSky_9Benefits%20of%20startupindia.jpg"
  },
  {
    id: 15,
    title: "Digital Marketing Mastery",
    category: "Sales & Marketing",
    subCategory: "Marketing Strategy", // ✅
    language: "English",
    level: "Intermediate",
    image: "https://cdn.prod.website-files.com/629b1dcd203ede574e478a11/62f0fe8ca7006e8573b8bf75_JordenSky_9Benefits%20of%20startupindia.jpg"
  },
  {
    id: 16,
    title: "Startup Fundraising Essentials",
    category: "Funding",
    subCategory: "Fundraising 101", // 🛠 Fixed
    language: "English",
    level: "Beginner",
    image: "https://cdn.prod.website-files.com/629b1dcd203ede574e478a11/62f0fe8ca7006e8573b8bf75_JordenSky_9Benefits%20of%20startupindia.jpg"
  },
  {
    id: 17,
    title: "Build a Killer Pitch Deck",
    category: "Funding",
    subCategory: "Pitch Deck", // ✅
    language: "English",
    level: "Intermediate",
    image: "https://cdn.prod.website-files.com/629b1dcd203ede574e478a11/62f0fe8ca7006e8573b8bf75_JordenSky_9Benefits%20of%20startupindia.jpg"
  },
  {
    id: 18,
    title: "Investor Negotiation & Term Sheets",
    category: "Funding",
    subCategory: "Term Sheets", // 🛠 Closest match
    language: "English",
    level: "Advanced",
    image: "https://cdn.prod.website-files.com/629b1dcd203ede574e478a11/62f0fe8ca7006e8573b8bf75_JordenSky_9Benefits%20of%20startupindia.jpg"
  },
  {
    id: 19,
    title: "Scaling to New Markets",
    category: "Scaling",
    subCategory: "Intl Expansion", // 🛠 Fixed
    language: "English",
    level: "Advanced",
    image: "https://cdn.prod.website-files.com/629b1dcd203ede574e478a11/62f0fe8ca7006e8573b8bf75_JordenSky_9Benefits%20of%20startupindia.jpg"
  },
  {
    id: 20,
    title: "Founder Mindset & Wellness",
    category: "Founder Excellence",
    subCategory: "Founder Psychology", // 🛠 Fixed
    language: "English",
    level: "All Levels",
    image: "https://cdn.prod.website-files.com/629b1dcd203ede574e478a11/62f0fe8ca7006e8573b8bf75_JordenSky_9Benefits%20of%20startupindia.jpg"
  },
];





  return (
    <div className="container-fluid">
            {/* SkillCard-based Metric Cards */}
          <div
  className={`row g-3 mb-4 bg-white ${window.innerWidth >= 768 ? 'sticky-top' : ''}`}
  style={window.innerWidth >= 740 ? { top: '-17px', zIndex: 1020 } : {}}
>
              {metrics.map((metric, index) => (
                <div className="col-sm-6 col-md-3" key={index}>
                  <SkillCard
                    title={metric.title}
                    // subTitle={metric.subTitle}
                    current={metric.current}
                    color={metric.color}
                    icon={metric.icon}
                  />
                </div>
              ))}
            </div>

            {/* Main Dashboard Card */}
            <div 
              style={{
    backgroundColor: isDark ? "#1F2937" : "#FBFBFB",
    padding: "20px",
    width: window.innerWidth >= 740 ? "75vw" : "85vw",
    maxWidth: "100%", // prevents overflow
    borderRadius: "12px",
  }}
            //  className="card p-4 shadow-sm overflow-hidden mb-4 w"
            >
              <h4 className="fw-bold mb-1">IM Startup School</h4>
              <p className="text-muted mb-3">
                Explore key startup growth modules across every stage—from ideation to scaling.
              </p>

              <ReusableDashboard tabs={tabs} data={startupCourses} />
            </div>
          </div>
  );
};

export default ImStartupSchool;
