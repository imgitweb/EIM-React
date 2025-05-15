import React, { useState } from "react";
import LeftSidebar from "../componant/LeftSidebar";
import Navigation from "../componant/Navigation";
import SerchBar from "../componant/SearchBar";
import Pitch1 from "../componant/Pitch1";
import { OpenAI } from "openai";
// import PptxGenJS from "pptxgenjs";
import Pitch2 from "../componant/Pitch2";
import Pitch3 from "../componant/Pitch3";
import Pitch4 from "../componant/Pitch4";
import Pitch5 from "../componant/Pitch5";
import Pitch6 from "../componant/Pitch6";
import Pitch7 from "../componant/Pitch7";
import Pitch8 from "../componant/Pitch8";
import Pitch9 from "../componant/Pitch9";
import Pitch10 from "../componant/Pitch10";
import Pitch11 from "../componant/Pitch11";
import Pitch12 from "../componant/Pitch12";
import Pitch13 from "../componant/Pitch13";
import Pitch14 from "../componant/Pitch14";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const PitchDeck = () => {
  const [isActive, setActive] = useState(false);
  const ToggleEvent = () => {
    setActive((prevState) => !prevState);
  };

  const [formData, setFormData] = useState({
    businessName: "Virag Training Solutions",
    businessType: "Education Training",
    services: [
      "Full Stack Development",
      "Digital Marketing",
      "Graphics Designing",
    ],
    targetLocation: "India",
    bootstrapFund: "50K",
    customerCount: "1000",
    revenue: "50 Lakhs",
    email: "info@gmail.com",
    mobile: "9999999999",
    address: "MP Nagar",
  });

  const [generatedPitchDeck, setGeneratedPitchDeck] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServicesChange = (e) => {
    const servicesArray = e.target.value.split(",").map((s) => s.trim());
    setFormData((prev) => ({ ...prev, services: servicesArray }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const openai = new OpenAI({
      apiKey: process.env.REACT_APP_OPENAI_API_KEY, // Use environment variable
      dangerouslyAllowBrowser: true,
    });
    console.log(formData);

    try {
      const prompt = `
          You are a professional startup consultant. Based on the business profile provided below, generate a **comprehensive startup pitch deck** in **valid JSON format only**.

          Business Profile:
          - Startup Name: ${formData.businessName}
          - Business Type: ${formData.businessType}
          - Services Offered: ${formData.services.join(", ")}
          - Target Market Location: ${formData.targetLocation}
          - Bootstrap Fund: ₹${formData.bootstrapFund}
          - Estimated Customer Base: ${formData.customerCount}
          - Generated Revenue: ₹${formData.revenue}
          - Contact Information:
              - Email: ${formData.email}
              - Mobile: ${formData.mobile}
              - Address: ${formData.address || "Not provided"}

          Instructions:
          - Create a compelling and realistic startup pitch deck using the structure below.
          - Use thoughtful, data-backed content that aligns with the provided business information.
          - Keep the language clear, concise, and professional.
          - For the "ProductOverview" section, provide an object with four attributes (isUnique, isTested, firstToMarket, hasAdditionalFeatures) as booleans, reflecting the product's status.
          - For "firstToMarketText" and "Features", provide minimal, meaningful text (e.g., "First to market." and "With additional features.").
          - Do not add any text or explanation outside the JSON structure.

          JSON Output Format:
          {
            "StartupName": "",                  
            "Who_We_are": "",                  
            "Problem": "",                    
            "Solution0": "",                 
            "Solution1": "",                 
            "Solution2": "",                 
            "Solution3": "",                 
            "firstToMarketText": "",          // Minimal text, e.g., "First to market."
            "Market": "",                   
            "Features": "",                   // Minimal text, e.g., "With additional features."
            "ProductOverview": {              // Structured as an object with boolean attributes
              "isUnique": "",              // Boolean: Is the product unique?
              "isTested": "",              // Boolean: Is the product tested?
              "firstToMarket": "",         // Boolean: Is the product first to market?
              "hasAdditionalFeatures": ""  // Boolean: Does the product have additional features?
            },
            "BusinessModel": "",           
            "CompetitionAnalysis": "",     
            "GrowthStrategy": "",          
            "FundingRequest": "",          
            "ContactInformation": {        
              "Email": "${formData.email}",
              "Mobile": "${formData.mobile}",
              "Address": "${formData.address || "Not provided"}"
            }
          }

          Important Notes:
          - Ensure all fields are logically and meaningfully filled using the business profile.
          - Set the "ProductOverview" attributes (isUnique, isTested, firstToMarket, hasAdditionalFeatures) based on realistic assumptions about the business.
          - The final output must be a single, valid JSON object only — no extra text or markdown.
        `;

      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
        max_tokens: 1500,
      });

      if (response.choices && response.choices.length > 0) {
        const pitchData = JSON.parse(response.choices[0].message.content);
        setGeneratedPitchDeck(pitchData);
        console.log(generatedPitchDeck);
      } else {
        setGeneratedPitchDeck(null);
        setError("No response from OpenAI API.");
      }
    } catch (apiError) {
      console.error("OpenAI API Error:", apiError);
      setError(`Error generating pitch deck: ${apiError.message}`);
    } finally {
      setLoading(false);
    }
  };

  const downloadPDF = async () => {
    const pdf = new jsPDF();
    const pitchDeckIds = [
      "pitch1",
      "pitch2",
      "pitch3",
      "pitch4",
      "pitch5",
      "pitch6",
      "pitch7",
      "pitch8",
      "pitch9",
      "pitch10",
      "pitch11",
      "pitch12",
      "pitch13",
      "pitch14",
    ];

    for (let i = 0; i < pitchDeckIds.length; i++) {
      const pitchId = pitchDeckIds[i];
      const element = document.getElementById(pitchId);

      if (element) {
        await new Promise((resolve) => setTimeout(resolve, 500)); // Add a delay
        const canvas = await html2canvas(element);
        const imgData = canvas.toDataURL("image/png");
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

        if (i === 0) {
          pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
        } else {
          pdf.addPage();
          pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
        }
      }
    }

    pdf.save("PitchDeck.pdf");
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
                  <h4 className="fw-semibold mb-8">Pitch Deck Generator</h4>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="card shadow-sm">
                    <div className="container py-5">
                      <h1 className="mb-4">Pitch Deck Generator</h1>
                      <form onSubmit={handleSubmit} className="mb-4">
                        {/* Business Name */}
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

                        {/* Business Type */}
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

                        {/* Services */}
                        <div className="mb-3">
                          <label htmlFor="services" className="form-label">
                            Services (comma-separated)
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="services"
                            name="services"
                            value={formData.services.join(", ")}
                            onChange={handleServicesChange}
                          />
                        </div>

                        {/* Target Location */}
                        <div className="mb-3">
                          <label
                            htmlFor="targetLocation"
                            className="form-label">
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

                        {/* Bootstrap Fund */}
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

                        {/* Customer Count */}
                        <div className="mb-3">
                          <label htmlFor="customerCount" className="form-label">
                            Customer Count
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="customerCount"
                            name="customerCount"
                            value={formData.customerCount}
                            onChange={handleInputChange}
                          />
                        </div>

                        {/* Revenue */}
                        <div className="mb-3">
                          <label htmlFor="revenue" className="form-label">
                            Revenue
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="revenue"
                            name="revenue"
                            value={formData.revenue}
                            onChange={handleInputChange}
                          />
                        </div>

                        {/* Email */}
                        <div className="mb-3">
                          <label htmlFor="email" className="form-label">
                            Email
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                          />
                        </div>

                        {/* Mobile */}
                        <div className="mb-3">
                          <label htmlFor="mobile" className="form-label">
                            Mobile
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="mobile"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleInputChange}
                          />
                        </div>

                        {/* Address */}
                        <div className="mb-3">
                          <label htmlFor="address" className="form-label">
                            Address
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                          />
                        </div>

                        <div className="form-group">
                          <button
                            type="submit"
                            className="btn btn-primary w-100"
                            disabled={loading}>
                            {loading ? "Generating..." : "Generate Pitch Deck"}
                          </button>
                        </div>
                      </form>

                      {error && (
                        <div className="alert alert-danger">{error}</div>
                      )}
                      {loading ? (
                        <p className="text-center">Loading...</p>
                      ) : (
                        generatedPitchDeck && (
                          <>
                            <div className="mt-4">
                              <Pitch1
                                id="pitch1"
                                startupName={generatedPitchDeck.StartupName}
                              />
                              <br />
                              <Pitch2
                                id="pitch2"
                                whoWeAre={generatedPitchDeck.Who_We_are}
                              />
                              <br />
                              <Pitch3
                                id="pitch3"
                                problem={generatedPitchDeck.Problem}
                              />
                              <br />
                              <Pitch4
                                id="pitch4"
                                solution={[
                                  generatedPitchDeck.Solution0,
                                  generatedPitchDeck.Solution1,
                                  generatedPitchDeck.Solution2,
                                  generatedPitchDeck.Solution3,
                                ]}
                              />
                              <br />
                              <Pitch5
                                id="pitch5"
                                productOverview={[
                                  generatedPitchDeck.firstToMarketText,
                                  generatedPitchDeck.Features,
                                ]}
                                unique={
                                  generatedPitchDeck.ProductOverview.isUnique
                                }
                                tested={
                                  generatedPitchDeck.ProductOverview.isTested
                                }
                              />
                              <br />
                              <Pitch6
                                id="pitch6"
                                productBenefits={
                                  generatedPitchDeck.ProductBenefits
                                }
                              />
                              <br />
                              <Pitch7
                                id="pitch7"
                                targetMarketOverview={
                                  generatedPitchDeck.TargetMarketOverview
                                }
                              />
                              <br />
                              <Pitch8
                                id="pitch8"
                                ourRivals={generatedPitchDeck.OurRivals}
                              />
                              <br />
                              <Pitch9
                                id="pitch9"
                                growthStrategy={
                                  generatedPitchDeck.GrowthStrategy
                                }
                              />
                              <br />
                              <Pitch10
                                id="pitch10"
                                forecastingForSuccess={
                                  generatedPitchDeck.ForecastingForSuccess
                                }
                              />
                              <br />
                              <Pitch11
                                id="pitch11"
                                meetTheFounders={
                                  generatedPitchDeck.MeetTheFounders
                                }
                              />
                              <br />
                              <Pitch12
                                id="pitch12"
                                fundingRequest={
                                  generatedPitchDeck.FundingRequest
                                }
                              />
                              <br />
                              <Pitch13
                                id="pitch13"
                                pitchData={generatedPitchDeck.PitchData}
                              />
                              <Pitch14
                                id="pitch14"
                                contactDetails={
                                  generatedPitchDeck.ContactDetails
                                }
                              />
                            </div>

                            <button
                              className="btn btn-success mt-4"
                              onClick={downloadPDF}>
                              Download Pitch Deck
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
          <SerchBar />
        </div>
      </div>
    </>
  );
};

export default PitchDeck;
