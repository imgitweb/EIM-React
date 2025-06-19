import React, { useState } from "react";
import LeftSidebar from "../componant/LeftSidebar";
import Navigation from "../componant/Navigation";
import SerchBar from "../componant/SearchBar";
import Pitch1 from "../componant/Pitch1";
import { OpenAI } from "openai";
import PptxGenJS from "pptxgenjs";
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
            "firstToMarketText": "First to market.",          // Minimal text, e.g., "First to market."
            "Market": "",                   
            "Features": "With additional features.",                   // Minimal text, e.g., "With additional features."
            "ProductOverview": {              // Structured as an object with boolean attributes
              "isUnique": true,              // Boolean: Is the product unique?
              "isTested": true,              // Boolean: Is the product tested?
              "firstToMarket": true,         // Boolean: Is the product first to market?
              "hasAdditionalFeatures": true  // Boolean: Does the product have additional features?
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
        console.log(pitchData);
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

  const downloadPowerPoint = async () => {
    try {
      // Check if pitch deck is generated
      if (!generatedPitchDeck) {
        alert("Please generate a pitch deck first before downloading.");
        return;
      }

      const pptx = new PptxGenJS();
      
      // Set presentation properties
      pptx.author = formData.businessName;
      pptx.company = formData.businessName;
      pptx.title = `${formData.businessName} - Pitch Deck`;
      pptx.subject = "Startup Pitch Deck";

      // Define slide layouts and content
      const slides = [
        {
          title: "Startup Name",
          content: generatedPitchDeck.StartupName || "Startup Name",
          subtitle: "Welcome to our pitch deck"
        },
        {
          title: "Who We Are",
          content: generatedPitchDeck.Who_We_are || "About our company",
          subtitle: "Company Overview"
        },
        {
          title: "The Problem",
          content: generatedPitchDeck.Problem || "Problem statement",
          subtitle: "Market Problem"
        },
        {
          title: "Our Solution",
          content: [
            generatedPitchDeck.Solution0 || "Solution 1",
            generatedPitchDeck.Solution1 || "Solution 2", 
            generatedPitchDeck.Solution2 || "Solution 3",
            generatedPitchDeck.Solution3 || "Solution 4"
          ].filter(Boolean),
          subtitle: "Innovative Solutions"
        },
        {
          title: "Product Overview",
          content: `Unique: ${generatedPitchDeck.ProductOverview?.isUnique ? 'Yes' : 'No'}\nTested: ${generatedPitchDeck.ProductOverview?.isTested ? 'Yes' : 'No'}\nFirst to Market: ${generatedPitchDeck.ProductOverview?.firstToMarket ? 'Yes' : 'No'}\nAdditional Features: ${generatedPitchDeck.ProductOverview?.hasAdditionalFeatures ? 'Yes' : 'No'}`,
          subtitle: "Product Features"
        },
        {
          title: "Product Benefits",
          content: generatedPitchDeck.Features || "Product benefits",
          subtitle: "Key Benefits"
        },
        {
          title: "Target Market",
          content: generatedPitchDeck.Market || "Market overview",
          subtitle: "Market Analysis"
        },
        {
          title: "Competition Analysis",
          content: generatedPitchDeck.CompetitionAnalysis || "Competition analysis",
          subtitle: "Competitive Landscape"
        },
        {
          title: "Growth Strategy",
          content: generatedPitchDeck.GrowthStrategy || "Growth strategy",
          subtitle: "Strategic Plan"
        },
        {
          title: "Business Model",
          content: generatedPitchDeck.BusinessModel || "Business model",
          subtitle: "Revenue Model"
        },
        {
          title: "Meet The Founders",
          content: generatedPitchDeck.Who_We_are || "Team information",
          subtitle: "Leadership Team"
        },
        {
          title: "Team",
          content: "Hari - Manager\nRam - CTO\nShyam - CFO\nSita - COO",
          subtitle: "Our Team"
        },
        {
          title: "Funding Request",
          content: generatedPitchDeck.FundingRequest || "Funding request",
          subtitle: "Investment Opportunity"
        },
        {
          title: "Contact Information",
          content: `Email: ${generatedPitchDeck.ContactInformation?.Email || formData.email}\nMobile: ${generatedPitchDeck.ContactInformation?.Mobile || formData.mobile}\nAddress: ${generatedPitchDeck.ContactInformation?.Address || formData.address}`,
          subtitle: "Get In Touch"
        }
      ];

      // Create slides
      slides.forEach((slideData, index) => {
        const slide = pptx.addSlide();
        
        // Add title
        slide.addText(slideData.title, {
          x: 0.5,
          y: 0.5,
          w: 9,
          h: 1,
          fontSize: 32,
          bold: true,
          color: "2E86AB",
          align: "center"
        });

        // Add subtitle
        slide.addText(slideData.subtitle, {
          x: 0.5,
          y: 1.5,
          w: 9,
          h: 0.5,
          fontSize: 18,
          color: "666666",
          align: "center"
        });

        // Add content
        if (Array.isArray(slideData.content)) {
          // Handle array content (like solutions)
          slideData.content.forEach((item, itemIndex) => {
            slide.addText(`• ${item}`, {
              x: 0.5,
              y: 2.5 + (itemIndex * 0.4),
              w: 9,
              h: 0.3,
              fontSize: 16,
              color: "333333"
            });
          });
        } else {
          // Handle string content
          slide.addText(slideData.content, {
            x: 0.5,
            y: 2.5,
            w: 9,
            h: 4,
            fontSize: 16,
            color: "333333",
            align: "left",
            valign: "top"
          });
        }

        // Add slide number
        slide.addText(`${index + 1}`, {
          x: 9.2,
          y: 6.8,
          w: 0.3,
          h: 0.2,
          fontSize: 12,
          color: "999999",
          align: "right"
        });
      });

      // Save the presentation
      pptx.writeFile({ fileName: `${formData.businessName.replace(/\s+/g, '_')}_PitchDeck.pptx` });
      console.log("PowerPoint download completed");
    } catch (error) {
      console.error("Error generating PowerPoint:", error);
      alert("Error generating PowerPoint. Please try again.");
    }
  };

  const printDiv = (divId) => {
    const divToPrint = document.getElementById(divId);
    if (!divToPrint) {
      console.error("Div not found");
      return;
    }

    const newWindow = window.open("", "_blank");

    const htmlContent = `
    <html>
      <head>
        <title>Print Pitch Deck</title>
        <style>
          body, html {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            background: white;
            color: black;
          }

          * {
            box-sizing: border-box;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }

          .print-page {
            padding: 40px;
            page-break-after: always;
            border-bottom: 1px dashed #ccc;
          }

          .no-break {
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }

          img {
            max-width: 100%;
            height: auto;
            page-break-inside: avoid;
          }

          @media print {
            .print-page {
              border: none;
            }
          }
        </style>
      </head>
      <body>
        ${Array.from(divToPrint.children)
          .map((child) => `<div class="print-page">${child.outerHTML}</div>`)
          .join("")}
      </body>
    </html>
  `;

    newWindow.document.open();
    newWindow.document.write(htmlContent);
    newWindow.document.close();

    // Wait for all resources to load
    newWindow.onload = () => {
      newWindow.focus();
      newWindow.print();
      newWindow.close();
    };
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
                            className="form-label"
                          >
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
                            disabled={loading}
                          >
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
                                productOverview={{
                                  isUnique: generatedPitchDeck.ProductOverview?.isUnique || false,
                                  isTested: generatedPitchDeck.ProductOverview?.isTested || false,
                                  firstToMarket: generatedPitchDeck.ProductOverview?.firstToMarket || false,
                                  hasAdditionalFeatures: generatedPitchDeck.ProductOverview?.hasAdditionalFeatures || false,
                                }}
                              />
                              <br />
                              <Pitch6
                                id="pitch6"
                                productBenefits={generatedPitchDeck.Features || "With additional features."}
                              />
                              <br />
                              <Pitch7
                                id="pitch7"
                                targetMarketOverview={generatedPitchDeck.Market || "Market overview"}
                              />
                              <br />
                              <Pitch8
                                id="pitch8"
                                ourRivals={generatedPitchDeck.CompetitionAnalysis || "Competition analysis"}
                                marketPosition={`${formData.businessName} is positioned as a leading ${formData.businessType} provider in ${formData.targetLocation}`}
                                competitiveAdvantages={`Unique ${formData.services.join(", ")} solutions with proven track record of ${formData.customerCount} satisfied customers`}
                                marketShare={`Established presence in ${formData.targetLocation} with ₹${formData.revenue} revenue and growing market share`}
                              />
                              <br />
                              <Pitch9
                                id="pitch9"
                                growthStrategy={generatedPitchDeck.GrowthStrategy || "Growth strategy"}
                              />
                              <br />
                              <Pitch10
                                id="pitch10"
                                forecastingForSuccess={generatedPitchDeck.BusinessModel || "Business model"}
                              />
                              <br />
                              <Pitch11
                                id="pitch11"
                                meetTheFounders={generatedPitchDeck.Who_We_are || "Who we are"}
                              />
                              <br />
                              <Pitch12
                                id="pitch12"
                                fundingRequest={[
                                  {
                                    name: "Hari ",
                                    designation: " Manager ",
                                    image: "https://tse2.mm.bing.net/th?id=OIP.SRZxpL6M3ItElXPI_pUiyAHaHa&pid=Api&P=0&h=220",
                                  },
                                  {
                                    name: "Ram",
                                    designation: "CTO",
                                    image: "https://example.com/bob.png",
                                  },
                                  {
                                    name: "Shyam",
                                    designation: "CFO",
                                    image: "https://example.com/carol.png",
                                  },
                                  {
                                    name: "Sita",
                                    designation: "COO",
                                    image: "https://example.com/dave.png",
                                  },
                                ]}
                              />
                              <br />
                              <Pitch13
                                id="pitch13"
                                pitchData={generatedPitchDeck.FundingRequest || "Funding request"}
                              />
                              <br>
                              </br>
                              <Pitch14
                                id="pitch14"
                                contactDetails={generatedPitchDeck.ContactInformation || {
                                  Email: formData.email,
                                  Mobile: formData.mobile,
                                  Address: formData.address
                                }}
                              />
                            </div>

                            <button
                              className="btn btn-success mt-4"
                              onClick={downloadPowerPoint}
                            >
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
