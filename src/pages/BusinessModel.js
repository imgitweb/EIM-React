import React, { useState } from "react";
import LeftSidebar from "../componant/LeftSidebar";
import Navigation from "../componant/Navigation";
import SearchBar from "../componant/SearchBar";
import StartupCanvas from "../componant/StartupCanvas";
import html2canvas from "html2canvas";
import { OpenAI } from "openai";

const BusinessModel = () => {
  const [isActive, setActive] = useState(false);
  const [formData, setFormData] = useState({
    businessName: "Virag Training Solutions",
    businessType: "Education Training",
    services: "Full Stack Development, Digital Marketing, Graphics Designing",
    targetLocation: "India",
    bootstrapFund: "50K",
  });

  const [generatedModel, setGeneratedModel] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Toggle Sidebar
  const ToggleEvent = () => {
    setActive((prevState) => !prevState);
  };

  // Handle Form Input Changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Form Validation
    if (
      !formData.businessName ||
      !formData.businessType ||
      !formData.services ||
      !formData.targetLocation ||
      !formData.bootstrapFund
    ) {
      setError("Please fill all the fields.");
      setLoading(false);
      return;
    }

    const openai = new OpenAI({
      apiKey: process.env.REACT_APP_OPENAI_API_KEY, // Use environment variable
      dangerouslyAllowBrowser: true,
    });

    try {
      const prompt = `
                  You are a professional business strategist. Based on the inputs provided, generate a complete Lean Canvas Business Model in valid JSON format.

                  Business Details:
                  - Business Name: ${formData.businessName}
                  - Business Type: ${formData.businessType}
                  - Services: ${formData.services}
                  - Target Location: ${formData.targetLocation}
                  - Bootstrap Fund: ${formData.bootstrapFund}

                  Your task:
                  Create a Lean Canvas Business Model with meaningful and logically appropriate values for all the following keys:
                  {
                    "Problem": "Clearly describe 2–3 core problems the target customers face.",
                    "Solution": "Summarize your product or service as the solution to those problems.",
                    "Unique Value Proposition": "Explain why this solution is different or better than others.",
                    "Customer Segments": "Define who your target customers are.",
                    "Key Metrics": "Mention measurable indicators that track business performance.",
                    "Channels": "List how the business reaches its customers (e.g., digital marketing, partnerships).",
                    "Cost Structure": "List the major costs associated with running the business.",
                    "Revenue Streams": "Explain how the business earns money (e.g., subscriptions, direct sales)."
                  }

                  Rules:
                  - Output only a valid JSON object. No markdown, no commentary, no surrounding text.
                  - Do not leave any key blank.
                  - Ensure all content is logical, concise, and specific to the business details above.
                `;

      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
        max_tokens: 1000,
      });

      console.log("OpenAI Response:", response);

      const content = response?.choices?.[0]?.message?.content?.trim();

      try {
        const businessModelJSON = JSON.parse(content);

        if (businessModelJSON && typeof businessModelJSON === "object") {
          setGeneratedModel(businessModelJSON);
          console.log(businessModelJSON);
        } else {
          setError("Received an invalid or empty business model JSON.");
        }
      } catch (jsonError) {
        console.error("Error parsing response JSON:", jsonError);
        setError(
          "Failed to parse the business model. Response is not valid JSON."
        );
      }
    } catch (apiError) {
      console.error("OpenAI API Error:", apiError);
      setError("An error occurred while generating the business model.");
    } finally {
      setLoading(false);
    }
  };

  // Generate Image from Canvas
  const generateImage = () => {
    const canvasElement = document.getElementById("business-model-container");
    html2canvas(canvasElement).then((canvas) => {
      const link = document.createElement("a");
      link.download = "Lean_Canvas_Model.png";
      link.href = canvas.toDataURL();
      link.click();
    });
  };

  return (
    <div id="main-wrapper" className={isActive ? "show-sidebar" : ""}>
      <LeftSidebar onButtonClick={ToggleEvent} />
      <div className="page-wrapper">
        <Navigation onButtonClick={ToggleEvent} />
        <div className="body-wrapper">
          <div className="container-fluid">
            <div className="card bg-info-subtle shadow-none position-relative overflow-hidden mb-4">
              <div className="card-body px-4 py-3">
                <h4 className="fw-semibold mb-8">Business Model Generator</h4>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="container py-5">
                    <h1 className="mb-4">Business Model Generator</h1>
                    <form onSubmit={handleSubmit} className="mb-4">
                      <div className="mb-3">
                        <label htmlFor="businessName" className="form-label">
                          Business Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="businessName"
                          name="businessName"
                          value={formData.businessName}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="businessType" className="form-label">
                          Business Type
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="businessType"
                          name="businessType"
                          value={formData.businessType}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="services" className="form-label">
                          Services (comma-separated)
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="services"
                          name="services"
                          value={formData.services}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="targetLocation" className="form-label">
                          Target Location
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="targetLocation"
                          name="targetLocation"
                          value={formData.targetLocation}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="bootstrapFund" className="form-label">
                          Bootstrap Fund
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="bootstrapFund"
                          name="bootstrapFund"
                          value={formData.bootstrapFund}
                          onChange={handleInputChange}
                        />
                      </div>

                      <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={loading}>
                        {loading ? "Generating..." : "Generate Business Model"}
                      </button>
                    </form>

                    {error && <div className="alert alert-danger">{error}</div>}
                    <div className="text-start">
                      {loading ? (
                        <p>Loading...</p>
                      ) : (
                        generatedModel && (
                          <>
                            <div id="business-model-container">
                              <StartupCanvas
                                problem={
                                  generatedModel.Problem ||
                                  "No problem description provided"
                                }
                                solution={
                                  generatedModel.Solution ||
                                  "No solution description provided"
                                }
                                uniqueValueProposition={
                                  generatedModel["Unique Value Proposition"] ||
                                  "No unique value proposition provided"
                                }
                                customerSegments={
                                  generatedModel["Customer Segments"] ||
                                  "No customer segments provided"
                                }
                                keyMetrics={
                                  generatedModel["Key Metrics"] ||
                                  "No key metrics provided"
                                }
                                channels={
                                  generatedModel.Channels ||
                                  "No channels provided"
                                }
                                costStructure={
                                  generatedModel["Cost Structure"] ||
                                  "No cost structure provided"
                                }
                                revenueStreams={
                                  generatedModel["Revenue Streams"] ||
                                  "No revenue streams provided"
                                }
                              />
                            </div>
                            <button
                              onClick={generateImage}
                              className="btn btn-info mt-2 ">
                              Download Business Model
                            </button>
                          </>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SearchBar />
      </div>
      <div className="dark-transparent sidebartoggler" />
    </div>
  );
};

export default BusinessModel;
