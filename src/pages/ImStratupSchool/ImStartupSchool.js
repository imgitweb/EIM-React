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
const startupCourses = [
  {
    id: 1,
    title: "Design Thinking for Startups",
    category: "Ideation & Validation",
    subCategory: "Design Thinking & Innovation Frameworks",
    language: "English",
    level: "Beginner",
    image: "https://cdn.prod.website-files.com/629b1dcd203ede574e478a11/62f0fe8ca7006e8573b8bf75_JordenSky_9Benefits%20of%20startupindia.jpg",
  },
  {
    id: 2,
    title: "Market Research Mastery",
    category: "Ideation & Validation",
    subCategory: "Market Research Methods (Primary & Secondary)",
    language: "English",
    level: "Intermediate",
    image: "https://cdn.prod.website-files.com/629b1dcd203ede574e478a11/62f0fe8ca7006e8573b8bf75_JordenSky_9Benefits%20of%20startupindia.jpg",
  },
  {
    id: 3,
    title: "Lean Canvas in Action",
    category: "Ideation & Validation",
    subCategory: "Business Model Design (Lean Canvas, BMC)",
    language: "English",
    level: "Beginner",
    image: "https://cdn.prod.website-files.com/629b1dcd203ede574e478a11/62f0fe8ca7006e8573b8bf75_JordenSky_9Benefits%20of%20startupindia.jpg",
  },
  {
    id: 4,
    title: "UI/UX Design for Founders",
    category: "Product Development",
    subCategory: "UI/UX Design for Startups",
    language: "English",
    level: "Intermediate",
    image: "https://cdn.prod.website-files.com/629b1dcd203ede574e478a11/62f0fe8ca7006e8573b8bf75_JordenSky_9Benefits%20of%20startupindia.jpg",
  },
  {
    id: 5,
    title: "Building MVPs with No-Code Tools",
    category: "Product Development",
    subCategory: "No-Code/Low-Code Tools for Founders",
    language: "English",
    level: "Beginner",
    image: "https://cdn.prod.website-files.com/629b1dcd203ede574e478a11/62f0fe8ca7006e8573b8bf75_JordenSky_9Benefits%20of%20startupindia.jpg",
  },
  {
    id: 6,
    title: "DevOps for Startups: CI/CD Basics",
    category: "Product Development",
    subCategory: "DevOps Basics & CI/CD for Startups",
    language: "English",
    level: "Intermediate",
    image: "https://cdn.prod.website-files.com/629b1dcd203ede574e478a11/62f0fe8ca7006e8573b8bf75_JordenSky_9Benefits%20of%20startupindia.jpg",
  },
  {
    id: 7,
    title: "Register Your Startup Globally",
    category: "Business Setup",
    subCategory: "Global Company Formation (US C-Corp, Indian Pvt Ltd, etc.)",
    language: "English",
    level: "Beginner",
    image: "https://cdn.prod.website-files.com/629b1dcd203ede574e478a11/62f0fe8ca7006e8573b8bf75_JordenSky_9Benefits%20of%20startupindia.jpg",
  },
  {
    id: 8,
    title: "Financial Planning for Founders",
    category: "Business Setup",
    subCategory: "Financial Planning: Runway, Burn Rate, Budgeting",
    language: "English",
    level: "Intermediate",
    image: "https://cdn.prod.website-files.com/629b1dcd203ede574e478a11/62f0fe8ca7006e8573b8bf75_JordenSky_9Benefits%20of%20startupindia.jpg",
  },
  {
    id: 9,
    title: "Legal Compliance 101",
    category: "Business Setup",
    subCategory: "Legal & Regulatory Compliance (by region)",
    language: "English",
    level: "Beginner",
    image: "https://cdn.prod.website-files.com/629b1dcd203ede574e478a11/62f0fe8ca7006e8573b8bf75_JordenSky_9Benefits%20of%20startupindia.jpg",
  },
  {
    id: 10,
    title: "Hiring Your First Team",
    category: "Talent & Culture",
    subCategory: "Hiring Cofounders vs First Employees",
    language: "English",
    level: "Beginner",
    image: "https://cdn.prod.website-files.com/629b1dcd203ede574e478a11/62f0fe8ca7006e8573b8bf75_JordenSky_9Benefits%20of%20startupindia.jpg",
  },
  {
    id: 11,
    title: "Designing ESOPs for Startups",
    category: "Talent & Culture",
    subCategory: "Compensation & Equity Structuring (ESOPs)",
    language: "English",
    level: "Intermediate",
    image: "https://cdn.prod.website-files.com/629b1dcd203ede574e478a11/62f0fe8ca7006e8573b8bf75_JordenSky_9Benefits%20of%20startupindia.jpg",
  },
  {
    id: 12,
    title: "Company Culture Bootcamp",
    category: "Talent & Culture",
    subCategory: "Building Company Culture & Values",
    language: "English",
    level: "All Levels",
    image: "https://cdn.prod.website-files.com/629b1dcd203ede574e478a11/62f0fe8ca7006e8573b8bf75_JordenSky_9Benefits%20of%20startupindia.jpg",
  },
  {
    id: 13,
    title: "Craft Your GTM Strategy",
    category: "Sales & Marketing",
    subCategory: "Crafting Your Go-To-Market (GTM) Strategy",
    language: "English",
    level: "Intermediate",
    image: "https://cdn.prod.website-files.com/629b1dcd203ede574e478a11/62f0fe8ca7006e8573b8bf75_JordenSky_9Benefits%20of%20startupindia.jpg",
  },
  {
    id: 14,
    title: "How to Get Your First 10 Customers",
    category: "Sales & Marketing",
    subCategory: "How to Get Your First 10 Customers",
    language: "English",
    level: "Beginner",
    image: "https://cdn.prod.website-files.com/629b1dcd203ede574e478a11/62f0fe8ca7006e8573b8bf75_JordenSky_9Benefits%20of%20startupindia.jpg",
  },
  {
    id: 15,
    title: "Digital Marketing Mastery",
    category: "Sales & Marketing",
    subCategory: "Marketing Strategy (Digital + Traditional)",
    language: "English",
    level: "Intermediate",
    image: "https://cdn.prod.website-files.com/629b1dcd203ede574e478a11/62f0fe8ca7006e8573b8bf75_JordenSky_9Benefits%20of%20startupindia.jpg",
  },
  {
    id: 16,
    title: "Startup Fundraising Essentials",
    category: "Funding",
    subCategory: "Startup Fundraising 101 (Bootstrapping to Series D)",
    language: "English",
    level: "Beginner",
    image: "https://cdn.prod.website-files.com/629b1dcd203ede574e478a11/62f0fe8ca7006e8573b8bf75_JordenSky_9Benefits%20of%20startupindia.jpg",
  },
  {
    id: 17,
    title: "Build a Killer Pitch Deck",
    category: "Funding",
    subCategory: "How to Build a Killer Pitch Deck",
    language: "English",
    level: "Intermediate",
    image: "https://cdn.prod.website-files.com/629b1dcd203ede574e478a11/62f0fe8ca7006e8573b8bf75_JordenSky_9Benefits%20of%20startupindia.jpg",
  },
  {
    id: 18,
    title: "Investor Negotiation & Term Sheets",
    category: "Funding",
    subCategory: "Due Diligence & Term Sheet Negotiation",
    language: "English",
    level: "Advanced",
    image: "https://cdn.prod.website-files.com/629b1dcd203ede574e478a11/62f0fe8ca7006e8573b8bf75_JordenSky_9Benefits%20of%20startupindia.jpg",
  },
  {
    id: 19,
    title: "Scaling to New Markets",
    category: "Scaling",
    subCategory: "International Market Entry (Localization, Legal, GTM)",
    language: "English",
    level: "Advanced",
    image: "https://cdn.prod.website-files.com/629b1dcd203ede574e478a11/62f0fe8ca7006e8573b8bf75_JordenSky_9Benefits%20of%20startupindia.jpg",
  },
  {
    id: 20,
    title: "Founder Mindset & Wellness",
    category: "Founder Excellence",
    subCategory: "Founder Psychology & Stress Management",
    language: "English",
    level: "All Levels",
    image: "https://cdn.prod.website-files.com/629b1dcd203ede574e478a11/62f0fe8ca7006e8573b8bf75_JordenSky_9Benefits%20of%20startupindia.jpg",
  },
];




  return (
    <div className="container-fluid ">
            {/* SkillCard-based Metric Cards */}
            <div className="row g-3 mb-4">
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
    width: "75vw",
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
