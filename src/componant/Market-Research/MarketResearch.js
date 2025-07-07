import { useEffect, useState } from "react";
import LeftSidebar from "../LeftSidebar";
import Navigation from "../Navigation";
import ApexCharts from "apexcharts";

const Market_Research = () => {
  const [isActive, setActive] = useState(false);
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
   const testStartups = [
  {
    startup_name: "DentalBoost",
    location: "Delhi, India",
    primary_service: "SEO and Website Design",
    target_audience: "Dentists",
    budget: "₹5,00,000",
  },
  {
    startup_name: "LegalTrack",
    location: "Mumbai, India",
    primary_service: "Case Management Software",
    target_audience: "Independent Lawyers and Law Firms",
    budget: "₹8,00,000",
  },
  {
    startup_name: "FitMeal",
    location: "Bangalore, India",
    primary_service: "Subscription-based Healthy Meal Delivery",
    target_audience: "Working Professionals & Fitness Enthusiasts",
    budget: "₹10,00,000",
  },
  {
    startup_name: "TutorNest",
    location: "Hyderabad, India",
    primary_service: "Online Tutoring Platform",
    target_audience: "School Students (Grades 6–12)",
    budget: "₹3,50,000",
  }
];
  const [selectedStartup, setSelectedStartup] = useState(testStartups[3]);


 


  const ToggleEvent = () => {
    setActive((prevState) => !prevState);
  };

  const prompt = `
You are a market research analyst. Based on the startup details below, generate chart-friendly JSON data.

Startup Name: ${selectedStartup.startup_name}
Location: ${selectedStartup.location}
Primary Service: ${selectedStartup.primary_service}
Target Audience: ${selectedStartup.target_audience}
Budget: ${selectedStartup.budget}

Return JSON with:
{
  "monthly_market_size": {
    "months": ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
    "TAM": [int, int, ..., int],
    "SAM": [int, int, ..., int]
  },
  "competition_analysis": {
    "months": ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
    "SAM": [int, int, ..., int]
  },
  "geo_competition": {
    "regions": ["Germany", "USA", "China", "UK", "France", "Japan", "India", "South Korea", "Italy", "Netherlands"],
    "intensity": [int, int, ..., int]
  },
  "demographics": {
    "age_groups": ["18-24", "25-34", "35-44", "45-54", "55-64"],
    "percentage": [int, int, ..., int]
  }
}
`;

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
          },
          body: JSON.stringify({
            model: "gpt-4",
            messages: [{ role: "user", content: prompt }],
          }),
        });


        const result = await response.json();
        console.log(result,"asfasfsdf");
        const parsed = JSON.parse(result.choices[0].message.content);
        console.log(parsed, "Parsed Chart Data");
        setChartData(parsed);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchChartData();
  }, []);

  useEffect(() => {
    if (!chartData) return;

    const chartConfigs = [
      {
        elementId: "chart1",
        options: {
          series: [
            { name: "TAM", data: chartData.monthly_market_size.TAM },
            { name: "SAM", data: chartData.monthly_market_size.SAM },
          ],
          chart: { type: "bar", height: 250, 
             toolbar: { show: false } },
           },
          xaxis: {
            categories: chartData.monthly_market_size.months,
            labels: { style: { colors: localStorage.getItem("theme") === "light"  ? "#00000" : "#ffffff"} },
          },
          yaxis: { labels: { style: { colors: localStorage.getItem("theme") === "light"  ? "#00000" : "#ffffff"} }, },
        },
      {
        elementId: "chart2",
        options: {
          series: [{ name: "SAM", data: chartData.competition_analysis.SAM }],
          chart: { type: "bar", height: 250 ,toolbar: { show: false }},
          xaxis: {
            categories: chartData.competition_analysis.months,
            labels: { labels: { style: { colors: localStorage.getItem("theme") === "light"  ? "#00000" : "#ffffff"} }, },
          },
          yaxis: { labels: { style: { colors: localStorage.getItem("theme") === "light"  ? "#00000" : "#ffffff"} }, },
        },
      },
      {
        elementId: "chart3",
        options: {
          series: [{ data: chartData.geo_competition.intensity }],
          chart: { type: "bar", height: 350,toolbar: { show: false } },
          plotOptions: { bar: { horizontal: true } },
          xaxis: {
            categories: chartData.geo_competition.regions,
            labels: { style: { colors: localStorage.getItem("theme") === "light"  ? "#00000" : "#ffffff"} },
          },
          yaxis: { labels: { style: { colors: localStorage.getItem("theme") === "light"  ? "#00000" : "#ffffff"} }, },
        },
      },
      {
        elementId: "chart4",
        options: {
          series: chartData.demographics.percentage,
          chart: { type: "donut", height: 250 ,toolbar: { show: false } },
          labels: chartData.demographics.age_groups,
        },
      },
    ];

    const chartInstances = chartConfigs.map(({ elementId, options }) => {
      const chart = new ApexCharts(document.querySelector(`#${elementId}`), options);
      chart.render();
      return chart;
    });

    return () => chartInstances.forEach((chart) => chart.destroy());
  }, [chartData]);

  return (
  <div id="main-wrapper" className={isActive ? "show-sidebar" : ""}>
  <LeftSidebar onButtonClick={ToggleEvent} />
  <div className="page-wrapper">
    <Navigation onButtonClick={ToggleEvent} />
    <div className="body-wrapper">
      <div className="container-fluid">
        {/* Breadcrumb Card */}
        <div className="card bg-info-subtle shadow-none position-relative overflow-hidden mb-4">
          <div className="card-body px-3 px-md-4 py-3">
            <div className="row align-items-center">
              {/* Left Content */}
              <div className="col-12 col-md-9 mb-3 mb-md-0">
                <h4 className="fw-semibold mb-2">Market Research</h4>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                      <a
                        className="text-muted text-decoration-none"
                        href="#0"
                      >
                        Home
                      </a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Market Research
                    </li>
                  </ol>
                </nav>
              </div>

              {/* Right Image */}
              <div className="col-12 col-md-3 text-center">
                <img
                  src="./assets/assets/images/breadcrumb/ChatBc.png"
                  alt="modernize-img"
                  className="img-fluid"
                  style={{ maxHeight: "100px" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation - Responsive Scrollable */}
        <div className="overflow-auto">
          <ul
            className="nav nav-pills user-profile-tab flex-nowrap justify-content-start justify-content-md-end mt-2 bg-primary-subtle rounded-2 rounded-top-2"
            id="pills-tab"
            role="tablist"
            style={{ whiteSpace: "nowrap" }}
          >
            {[
              "Size your market",
              "Research the competition",
              "Discover what marketing channels work",
              "Analyze audience demographics",
            ].map((label, i) => (
              <li className="nav-item" role="presentation" key={i}>
                <button
                  className={`nav-link d-flex flex-column flex-md-row align-items-center gap-1 gap-md-2 rounded-0 py-3 px-3 ${
                    i === 0 ? "active" : ""
                  }`}
                  id={`pills-tab-${i}`}
                  data-bs-toggle="pill"
                  data-bs-target={`#chart-tab-${i}`}
                  type="button"
                  role="tab"
                  aria-selected={i === 0}
                >
                  <i className="ti ti-chart-bar fs-5"></i>
                  <span className="text-nowrap text-sm">{label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Tab Content */}
        <div className="tab-content mt-3" id="pills-tabContent">
          {[0, 1, 2, 3].map((i) => (
            <div
              className={`tab-pane fade ${i === 0 ? "show active" : ""}`}
              id={`chart-tab-${i}`}
              role="tabpanel"
              key={i}
            >
              {loading ? (
                <div className="alert alert-info text-center">
                  Loading analysis...
                </div>
              ) : error ? (
                <p className="text-danger">Error: {error}</p>
              ) : (
                <div
                  id={`chart${i + 1}`}
                  className="chart-container w-100"
                  style={{ minHeight: "250px" }}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default Market_Research;
