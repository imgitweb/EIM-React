import React, { useEffect, useState } from "react";
import LeftSidebar from "../componant/LeftSidebar";
import Navigation from "../componant/Navigation";
import SerchBar from "../componant/SearchBar";

const RivarlyInsight = () => {
  const [isActive, setActive] = useState(false);
  const [analysisData, setAnalysisData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const user = localStorage.getItem("user");
  // console.log("User Data:", JSON.parse(user));

  




  const userData = {
    startup_name: "DentalBoost",
    location: "Delhi, India",
    category: "Healthcare Technology",
    target_audience: "Dentists",
    business_model: "Monthly Subscription",
    primary_service: "SEO and Website Design",
    budget: "₹5,00,000",
    competition: "Local digital agencies and freelancers",
  };



  const prompt = `
You are a startup analyst. A user has submitted their startup details. Based on the information below, analyze the startup's market opportunity.
Also, based on location and service type, suggest 2 local competitors with key data points.
Respond ONLY with a clean, valid JSON. Do not add any commentary or extra text.

Startup Details:
Startup Name: ${userData.startup_name}
Location: ${userData.location}
Category: ${userData.category}
Target Audience: ${userData.target_audience}
Business Model: ${userData.business_model}
Primary Service: ${userData.primary_service}
Budget: ${userData.budget}
Competition: ${userData.competition}

Return JSON with:
{
  "startup_name": "",
  "location": "",
  "target_audience": "",
  "business_model": "",
  "primary_service": "",
  "estimated_budget": "",
  "competition": "",
  "competitor_1": {
    "name": "",
    "location": "",
    "services": "",
    "pricing": "",
    "rating": "",
    "Estimated Market Share": "",
    "Target Audience": "",
    "Business Model": ""
  },
  "competitor_2": {
    "name": "",
    "location": "",
    "services": "",
    "pricing": "",
    "rating": "",
    "Estimated Market Share": "",
    "Target Audience": "",
    "Business Model": ""
  },
  "analysis": {
    "market_demand": "",
    "location_opportunity": "",
    "estimated_market_share_first_year": "",
    "growth_potential": "",
    "key_advantage": "",
    "price_sensitivity": "",
    "customer_acquisition_strategy": [""],
    "potential_risks": [""],
    "recommendations": [""]
  }
}`;

  useEffect(() => {
    const fetchData = async () => {
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

        if (!response.ok) {
          throw new Error("Failed to fetch GPT analysis");
        }

        const result = await response.json();
        const gptMessage = result.choices[0].message.content;
        const parsed = JSON.parse(gptMessage);
        // console.log("GPT Analysis Result:", parsed);
        setAnalysisData(parsed);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const ToggleEvent = () => {
    setActive((prevState) => !prevState);
  };

  return (
    <>
      <div id="main-wrapper" className={isActive ? "show-sidebar" : ""}>
        <LeftSidebar onButtonClick={ToggleEvent} />
        <div className="page-wrapper">
          <Navigation onButtonClick={ToggleEvent} />
          <div className="body-wrapper">
            <div className="container-fluid">
              <div className="card bg-info-subtle shadow-none position-relative overflow-hidden mb-4">
                <div className="card-body px-4 py-3">
                  <div className="row align-items-center">
                    <div className="col-9">
                      <h4 className="fw-semibold mb-8">Rivalry Insights</h4>
                      <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                          <li className="breadcrumb-item">
                            <a className="text-muted text-decoration-none" href="#0">Home</a>
                          </li>
                          <li className="breadcrumb-item" aria-current="page">Rivalry Insights</li>
                        </ol>
                      </nav>
                    </div>
                    <div className="col-3">
                      <div className="text-center mb-n5">
                        <img src="./assets/assets/images/breadcrumb/ChatBc.png" alt="modernize-img" className="img-fluid mb-n4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {loading && (<div className="alert alert-info text-center">Loading analysis...</div>)}
              {error && (<div className="alert alert-danger text-center">Error: {error}</div>)}
              {analysisData && (
  <div className="card mt-4">
    <h2 className="card-header text-center">Competitive Analysis Framework</h2>
    {/* <div className="card-header">Startup & Competitor Comparison</div> */}
    <div className="card-body">
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Category</th>
            <th>Your Company</th>
            <th>Competitor_1</th>
            <th>Competitor_2</th>
          </tr>
        </thead>
        <tbody>
            <tr>
            <th>Name</th>
            <th>{analysisData.startup_name}</th>
            <th>{analysisData.competitor_1.name}</th>
            <th>{analysisData.competitor_2.name}</th>
          </tr>
          <tr>
            <th>Location</th>
            <td>{analysisData.location}</td>
            <td>{analysisData.competitor_1.location}</td>
            <td>{analysisData.competitor_2.location}</td>
          </tr>
          <tr>
            <th>Services</th>
            <td>{analysisData.primary_service}</td>
            <td>{analysisData.competitor_1.services}</td>
            <td>{analysisData.competitor_2.services}</td>
          </tr>
          <tr>
            <th>Pricing</th>
            <td>{analysisData.estimated_budget}</td>
            <td>{analysisData.competitor_1.pricing}</td>
            <td>{analysisData.competitor_2.pricing}</td>
          </tr>
          <tr>
            <th>Target Audience</th>
            <td>{analysisData.target_audience}</td>
            <td>{analysisData.competitor_1["Target Audience"]}</td>
            <td>{analysisData.competitor_2["Target Audience"]}</td>
          </tr>
          <tr>
            <th>Business Model</th>
            <td>{analysisData.business_model}</td>
            <td>{analysisData.competitor_1["Business Model"]}</td>
            <td>{analysisData.competitor_2["Business Model"]}</td>
          </tr>
          <tr>
            <th>Rating</th>
            <td>N/A</td>
            <td>{analysisData.competitor_1.rating}</td>
            <td>{analysisData.competitor_2.rating}</td>
          </tr>
          <tr>
            <th>Estimated Market Share</th>
            <td>{analysisData.analysis.estimated_market_share_first_year}</td>
            <td>{analysisData.competitor_1["Estimated Market Share"]}</td>
            <td>{analysisData.competitor_2["Estimated Market Share"]}</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* <div className="card-header mt-4">Market Analysis</div> */}
    <h2 className="card-header text-center">Market Analysis</h2>

    <div className="card-body">
      <table className="table table-bordered">
        <tbody>
          <tr>
            <th>Market Demand</th>
            <td>{analysisData.analysis.market_demand}</td>
          </tr>
          <tr>
            <th>Location Opportunity</th>
            <td>{analysisData.analysis.location_opportunity}</td>
          </tr>
          <tr>
            <th>Growth Potential</th>
            <td>{analysisData.analysis.growth_potential}</td>
          </tr>
          <tr>
            <th>Key Advantage</th>
            <td>{analysisData.analysis.key_advantage}</td>
          </tr>
          <tr>
            <th>Price Sensitivity</th>
            <td>{analysisData.analysis.price_sensitivity}</td>
          </tr>
          <tr>
            <th>Customer Acquisition Strategy</th>
            <td>
              <ul>
                {analysisData.analysis.customer_acquisition_strategy.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </td>
          </tr>
          <tr>
            <th>Potential Risks</th>
            <td>
              <ul>
                {analysisData.analysis.potential_risks.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </td>
          </tr>
          <tr>
            <th>Recommendations</th>
            <td>
              <ul>
                {analysisData.analysis.recommendations.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
)}

            </div>
          </div>
        </div>
        <SerchBar />
      </div>
      <div className="dark-transparent sidebartoggler" />
    </>
  );
};

export default RivarlyInsight;
