import React, { useState } from "react";
// import "./user.css";
import {
  ChevronRight,
  Target,
  DollarSign,
  BookOpen,
  Brain,
  Users,
  Monitor,
} from "lucide-react";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Static milestone data with new categories
const staticData = {
  data: {
    milestones: {
      1: {
        Timeline: {
          "Start Date": "June 2025",
          "End Date": "June 2025",
          "Duration (Days)": "7",
        },
        Title: "Week 1 - Introduction to Entrepreneurship",
        Goals: {
          "Primary Goal": "Week 1 - Introduction to Entrepreneurship",
          "Measurable Goals": [
            "Understanding the startup ecosystem",
            "Identifying market needs",
            "Define problem statement and potential market size in your country and globally.",
            "Idea Ranking and chances of success meter (ESM Score out of 100)",
            "Introduction to UIM and UIM Network",
          ],
        },
        CoreSkills: {
          "Top 5 Relevant Core Skills": [
            { Title: "Market Analysis 101", Category: "Technical" },
            { Title: "Startup Ecosystem Basics", Category: "Technical" },
            { Title: "Problem Statement Definition", Category: "Technical" },
            { Title: "Market Sizing Techniques", Category: "Technical" },
            { Title: "Insufficient relevant courses", Category: "Technical" },
          ],
        },
        SoftSkills: {
          "Top 5 Relevant Soft Skills": [
            { Title: "Leadership Basics", Category: "Soft Skills" },
            { Title: "Communication Skills", Category: "Soft Skills" },
            { Title: "Team Collaboration", Category: "Soft Skills" },
            { Title: "Time Management", Category: "Soft Skills" },
            { Title: "Insufficient relevant courses", Category: "Soft Skills" },
          ],
        },
        DigitalFluency: {
          "Top 5 Relevant Digital Fluency Courses": [
            { Title: "Business Certification", Category: "Certification" },
            {
              Title: "Entrepreneurship Fundamentals",
              Category: "Certification",
            },
            { Title: "Market Research Cert", Category: "Certification" },
            { Title: "Startup Strategy Cert", Category: "Certification" },
            {
              Title: "Insufficient relevant courses",
              Category: "Certification",
            },
          ],
        },
        Networking: {
          "Top 5 Relevant Networking Activities": [
            { Title: "Networking 101", Category: "Networking" },
            { Title: "Pitching Basics", Category: "Networking" },
            { Title: "UIM Network Intro", Category: "Networking" },
            { Title: "Community Building", Category: "Networking" },
            { Title: "Insufficient relevant courses", Category: "Networking" },
          ],
        },
        financialProjections: {
          usd: {
            revenue: 0,
            investment: 50000,
            valuation: 100000,
          },
        },
      },
      2: {
        Timeline: {
          "Start Date": "June 2025",
          "End Date": "July 2025",
          "Duration (Days)": "7",
        },
        Title: "Week 2 - Business Idea Validation",
        Goals: {
          "Primary Goal": "Week 2 - Business Idea Validation",
          "Measurable Goals": [
            "Techniques for validating ideas",
            "Customer interviews and feedback",
            "Identify potential sales and distribution channels.",
            "List out similar businesses, their success and failure patterns",
            "List out the potential impediments with this idea and execution such as founders' knowledge, resources, money, technology exposure, etc.",
          ],
        },
        CoreSkills: {
          "Top 5 Relevant Core Skills": [
            { Title: "Idea Validation Tools", Category: "Technical" },
            { Title: "Customer Feedback Analysis", Category: "Technical" },
            { Title: "Sales Channel Mapping", Category: "Technical" },
            { Title: "Competitor Analysis", Category: "Technical" },
            { Title: "Insufficient relevant courses", Category: "Technical" },
          ],
        },
        SoftSkills: {
          "Top 5 Relevant Soft Skills": [
            { Title: "Interview Skills", Category: "Soft Skills" },
            { Title: "Empathy in Business", Category: "Soft Skills" },
            { Title: "Negotiation Basics", Category: "Soft Skills" },
            { Title: "Problem Solving", Category: "Soft Skills" },
            { Title: "Insufficient relevant courses", Category: "Soft Skills" },
          ],
        },
        DigitalFluency: {
          "Top 5 Relevant Digital Fluency Courses": [
            { Title: "Idea Validation Cert", Category: "Certification" },
            { Title: "Customer Insights Cert", Category: "Certification" },
            { Title: "Distribution Strategy", Category: "Certification" },
            { Title: "Risk Assessment Cert", Category: "Certification" },
            {
              Title: "Insufficient relevant courses",
              Category: "Certification",
            },
          ],
        },
        Networking: {
          "Top 5 Relevant Networking Activities": [
            { Title: "Customer Networking", Category: "Networking" },
            { Title: "Industry Connections", Category: "Networking" },
            { Title: "Feedback Workshops", Category: "Networking" },
            { Title: "Channel Partnerships", Category: "Networking" },
            { Title: "Insufficient relevant courses", Category: "Networking" },
          ],
        },
        financialProjections: {
          usd: {
            revenue: 10000,
            investment: 75000,
            valuation: 150000,
          },
        },
      },
      3: {
        Timeline: {
          "Start Date": "July 2025",
          "End Date": "July 2025",
          "Duration (Days)": "7",
        },
        Title: "Week 3 - First Cut of Business Model",
        Goals: {
          "Primary Goal": "Week 3 - First Cut of Business Model",
          "Measurable Goals": [
            "Introduction to business model canvas",
            "List out the potential competitors and prepare a matrix.",
            "Examples of successful and failed business models",
            "List out 10 potential customers who would pay for your services and create a customer persona.",
            "Fine-tune revenue model for your idea",
            "List out the required budget and resources for MLP and for full-fledged product development.",
          ],
        },
        CoreSkills: {
          "Top 5 Relevant Core Skills": [
            { Title: "Business Model Canvas", Category: "Technical" },
            { Title: "Competitor Matrix", Category: "Technical" },
            { Title: "Revenue Modeling", Category: "Technical" },
            { Title: "Budget Planning", Category: "Technical" },
            { Title: "Insufficient relevant courses", Category: "Technical" },
          ],
        },
        SoftSkills: {
          "Top 5 Relevant Soft Skills": [
            { Title: "Strategic Thinking", Category: "Soft Skills" },
            { Title: "Customer Persona Dev", Category: "Soft Skills" },
            { Title: "Decision Making", Category: "Soft Skills" },
            { Title: "Presentation Skills", Category: "Soft Skills" },
            { Title: "Insufficient relevant courses", Category: "Soft Skills" },
          ],
        },
        DigitalFluency: {
          "Top 5 Relevant Digital Fluency Courses": [
            { Title: "Business Model Cert", Category: "Certification" },
            { Title: "Competitive Strategy", Category: "Certification" },
            { Title: "Revenue Stream Cert", Category: "Certification" },
            { Title: "Resource Planning", Category: "Certification" },
            {
              Title: "Insufficient relevant courses",
              Category: "Certification",
            },
          ],
        },
        Networking: {
          "Top 5 Relevant Networking Activities": [
            { Title: "Investor Pitching", Category: "Networking" },
            { Title: "Customer Outreach", Category: "Networking" },
            { Title: "Competitor Networking", Category: "Networking" },
            { Title: "Business Model Events", Category: "Networking" },
            { Title: "Insufficient relevant courses", Category: "Networking" },
          ],
        },
        financialProjections: {
          usd: {
            revenue: 50000,
            investment: 100000,
            valuation: 300000,
          },
        },
      },
      4: {
        Timeline: {
          "Start Date": "July 2025",
          "End Date": "July 2025",
          "Duration (Days)": "7",
        },
        Title: "Week 4 - Finalizing Numbers and Decision Making",
        Goals: {
          "Primary Goal": "Week 4 - Finalizing Numbers and Decision Making",
          "Measurable Goals": [
            "Recalculate ESM",
            "Create a viable plan to arrange the required budget and resources listed out last week.",
            "Create Potential Roadmap to 100 Crore Revenue and positive EBITDA",
            "Decision time – if you would like to pursue this idea further or drop it right here.",
          ],
        },
        CoreSkills: {
          "Top 5 Relevant Core Skills": [
            { Title: "ESM Recalculation", Category: "Technical" },
            { Title: "Financial Planning", Category: "Technical" },
            { Title: "Revenue Roadmap", Category: "Technical" },
            { Title: "EBITDA Analysis", Category: "Technical" },
            { Title: "Insufficient relevant courses", Category: "Technical" },
          ],
        },
        SoftSkills: {
          "Top 5 Relevant Soft Skills": [
            { Title: "Critical Decision Making", Category: "Soft Skills" },
            { Title: "Risk Management", Category: "Soft Skills" },
            { Title: "Strategic Planning", Category: "Soft Skills" },
            { Title: "Resilience Training", Category: "Soft Skills" },
            { Title: "Insufficient relevant courses", Category: "Soft Skills" },
          ],
        },
        DigitalFluency: {
          "Top 5 Relevant Digital Fluency Courses": [
            { Title: "Financial Strategy Cert", Category: "Certification" },
            { Title: "Budget Management Cert", Category: "Certification" },
            { Title: "Revenue Planning Cert", Category: "Certification" },
            { Title: "Decision Making Cert", Category: "Certification" },
            {
              Title: "Insufficient relevant courses",
              Category: "Certification",
            },
          ],
        },
        Networking: {
          "Top 5 Relevant Networking Activities": [
            { Title: "Funding Networking", Category: "Networking" },
            { Title: "Investor Meetings", Category: "Networking" },
            { Title: "Roadmap Pitching", Category: "Networking" },
            { Title: "Decision Workshops", Category: "Networking" },
            { Title: "Insufficient relevant courses", Category: "Networking" },
          ],
        },
        financialProjections: {
          usd: {
            revenue: 100000,
            investment: 150000,
            valuation: 500000,
          },
        },
      },
    },
  },
};

const BecomeUnicorn = () => {
  const [selectedMilestone, setSelectedMilestone] = useState("1");
  const [selectedKey, setSelectedKey] = useState("Goals");
  const data = staticData.data; // Use static data directly

  // Generate financial data for charts
  const financialData = Object.keys(data.milestones).map((milestone) => ({
    name: `M${milestone}`,
    revenue:
      data.milestones[milestone]?.financialProjections?.usd?.revenue || 0,
    investment:
      data.milestones[milestone]?.financialProjections?.usd?.investment || 0,
    valuation:
      data.milestones[milestone]?.financialProjections?.usd?.valuation || 0,
  }));

  const getIcon = (key) => {
    const icons = {
      Goals: <Target className="h-5 w-5 text-purple-500" />,
      CoreSkills: <Brain className="h-5 w-5 text-blue-500" />,
      SoftSkills: <Users className="h-5 w-5 text-orange-500" />,
      DigitalFluency: <Monitor className="h-5 w-5 text-teal-500" />,
      Networking: <Users className="h-5 w-5 text-green-500" />,
      Title: <BookOpen className="h-5 w-5 text-gray-500" />,
      financialProjections: <DollarSign className="h-5 w-5 text-green-500" />,
    };
    return icons[key] || <ChevronRight className="h-5 w-5 text-gray-400" />;
  };

  const renderFinancialCharts = () => (
    <div className="custom-space-y-6">
      <div className="custom-card custom-bg-gradient-to-br custom-from-blue-50 custom-to-purple-50">
        <h3 className="custom-text-lg custom-font-semibold custom-mb-4">
          Revenue Growth
        </h3>
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
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#colorRevenue)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="custom-card custom-bg-gradient-to-br custom-from-green-50 custom-to-blue-50">
        <h3 className="custom-text-lg custom-font-semibold custom-mb-4">
          Investment vs Valuation
        </h3>
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
  );

  const renderContent = (content, key) => {
    if (key === "financialProjections") {
      return renderFinancialCharts();
    }

    if (Array.isArray(content)) {
      return (
        <ul className="custom-list-none custom-pl-6 custom-space-y-3 text-light">
          {content.map((item, index) => (
            <li
              key={index}
              className="custom-flex custom-items-center custom-space-x-2 custom-animate-fadeIn">
              <div className="custom-h-2 custom-w-2 custom-rounded-full custom-bg-purple-400"></div>
              {typeof item === "object" && item !== null ? (
                <span className="custom-text-gray-700">
                  {item.Title} ({item.Category})
                </span>
              ) : (
                <span className="custom-text-gray-700">{item}</span>
              )}
            </li>
          ))}
        </ul>
      );
    }

    if (typeof content === "object" && content !== null) {
      return (
        <div className="custom-space-y-4 text-light">
          {Object.entries(content).map(([subKey, value]) => (
            <div
              key={subKey}
              className="custom-space-y-2 custom-animate-fadeIn">
              <h3 className="custom-font-medium custom-capitalize custom-text-purple-600">
                {subKey.replace(/([A-Z])/g, " $1").trim()}
              </h3>
              {renderContent(value, subKey)}
            </div>
          ))}
        </div>
      );
    }

    return (
      <p className="custom-text-gray-700 custom-animate-fadeIn">{content}</p>
    );
  };

  const milestoneKeys = Object.keys(
    data.milestones[selectedMilestone] || {}
  ).filter((key) => key !== "Timeline");

  return (
    <div className="custom-w-full custom-max-w-6xl custom-mx-auto custom-p-4 custom-bg-gradient-to-br custom-from-white custom-to-purple-50 custom-rounded-lg custom-shadow-lg">
      <div className="custom-mb-6 custom-tabs">
        <div className="custom-scroll-area">
          <div className="custom-inline-flex custom-w-full custom-border-b custom-border-purple-200 custom-bg-white-50 custom-backdrop-blur-sm custom-tabs-list">
            {Object.keys(data.milestones).map((milestone) => (
              <button
                key={milestone}
                onClick={() => setSelectedMilestone(milestone)}
                className={`custom-px-4 custom-py-2 custom-text-sm custom-transition-all custom-duration-200 custom-hover-text-purple-600 custom-tabs-trigger ${
                  selectedMilestone === milestone
                    ? "custom-tabs-trigger-active"
                    : ""
                }`}>
                Milestone {milestone}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="custom-grid custom-grid-cols-12 custom-gap-6 text-white">
        <div className="custom-col-span-3">
          <div className="custom-card custom-bg-white-50 custom-backdrop-blur-sm">
            <div className="custom-p-4">
              <h2 className="custom-font-semibold custom-mb-4 custom-text-purple-800">
                Milestone Details
              </h2>
              <div className="custom-space-y-2">
                {milestoneKeys.map((key) => (
                  <button
                    key={key}
                    onClick={() => setSelectedKey(key)}
                    className={`custom-w-full custom-text-left custom-px-3 custom-py-2 custom-rounded-md custom-text-sm custom-flex custom-items-center custom-justify-between custom-transition-all custom-duration-200 custom-milestone-button ${
                      selectedKey === key
                        ? "custom-milestone-button-active"
                        : "custom-hover-bg-purple-50"
                    }`}>
                    <div className="custom-flex custom-items-center custom-space-x-2">
                      {getIcon(key)}
                      <span className="custom-capitalize">
                        {key.replace(/([A-Z])/g, " $1").trim()}
                      </span>
                    </div>
                    <ChevronRight
                      className={`custom-h-4 custom-w-4 custom-transition-transform custom-duration-200 ${
                        selectedKey === key ? "custom-rotate-90" : ""
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="custom-col-span-9">
          <div className="custom-card custom-bg-white-50 custom-backdrop-blur-sm">
            <div className="custom-p-6">
              <h2 className="custom-text-xl custom-font-semibold custom-mb-4 custom-text-purple-800 custom-flex custom-items-center custom-space-x-2">
                {getIcon(selectedKey)}
                <span className="custom-capitalize">
                  {selectedKey.replace(/([A-Z])/g, " $1").trim()}
                </span>
              </h2>
              {renderContent(
                data.milestones[selectedMilestone][selectedKey],
                selectedKey
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BecomeUnicorn;
