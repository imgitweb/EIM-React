import React, { useState } from "react";
import LeftSidebar from "../componant/LeftSidebar";
import Navigation from "../componant/Navigation";
import SearchBar from "../componant/SearchBar";
import StartupCanvas from "../componant/StartupCanvas";
import GridLayout from "../componant/GridLayout";
import html2canvas from "html2canvas";
import { OpenAI } from "openai";
import { Modal, Button } from 'react-bootstrap';

const BusinessModel = () => {
  const [show, setShow] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [previewTemplate, setPreviewTemplate] = useState(null);
  
  const handleClose = () => setShow(false);
  const handlePreviewClose = () => setShowPreview(false);
  
  const handleShow = (e) => {
    e.preventDefault()
    setShow(true);
  };

  const handlePreviewShow = (templateType) => {
    setPreviewTemplate(templateType);
    setShowPreview(true);
  };

  const [isActive, setActive] = useState(false);
  const [selectedTamplate , setSelectedTamplate] = useState("1");
  const [shoewTemplate, setShowTemplate] = useState(false);
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
  const [canvasImageUrl, setCanvasImageUrl] = useState(null);
  const [imageLoading, setImageLoading] = useState(false);

  // Sample data for template previews
  const sampleData = {
    Problem: "Sample problem description for preview purposes",
    Solution: "Sample solution description for preview purposes",
    "Unique Value Proposition": "Sample unique value proposition for preview",
    "Customer Segments": "Sample customer segments for preview",
    "Key Metrics": "Sample key metrics for preview",
    Channels: "Sample channels for preview",
    "Cost Structure": "Sample cost structure for preview",
    "Revenue Streams": "Sample revenue streams for preview"
  };

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

  // Render template preview
  const renderTemplatePreview = () => {
    if (!previewTemplate) return null;

    switch (previewTemplate) {
      case "1":
        return (
          <div style={{ transform: 'scale(0.7)', transformOrigin: 'top left' }}>
            <GridLayout
              problem={sampleData.Problem}
              solution={sampleData.Solution}
              uniqueValueProposition={sampleData["Unique Value Proposition"]}
              customerSegments={sampleData["Customer Segments"]}
              keyMetrics={sampleData["Key Metrics"]}
              channels={sampleData.Channels}
              costStructure={sampleData["Cost Structure"]}
              revenueStreams={sampleData["Revenue Streams"]}
            />
          </div>
        );
      case "2":
        return (
          <div style={{ transform: 'scale(0.7)', transformOrigin: 'top left' }}>
            <StartupCanvas
              problem={sampleData.Problem}
              solution={sampleData.Solution}
              uniqueValueProposition={sampleData["Unique Value Proposition"]}
              customerSegments={sampleData["Customer Segments"]}
              keyMetrics={sampleData["Key Metrics"]}
              channels={sampleData.Channels}
              costStructure={sampleData["Cost Structure"]}
              revenueStreams={sampleData["Revenue Streams"]}
            />
          </div>
        );
      case "3":
        return (
          <div className="text-center p-4">
            <h4>Template 3 Preview</h4>
            <p>This is a demo template preview for Template 3.</p>
            <div className="border rounded p-3 bg-light">
              <h5>Sample Business Model Layout</h5>
              <p>This template will show a different layout style for your business model canvas.</p>
            </div>
          </div>
        );
      default:
        return null;
    }
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
                    <form  className="mb-4">
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
                         onClick={handleSubmit}
                        className="btn btn-primary"
                        disabled={loading}
                      >
                        {loading ? "Generating..." : "Generate Business Model"}

                      </button>

                      <div className="btn btn-primary h-50 mx-3"
                        onClick={
                          (e)=>{
                            handleShow(e)
                          }
                        }
                      >
                        Choose Template
                      </div>
                    </form>
                     
                   

                      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Select a Template</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex flex-column gap-3">
            <div className="d-flex justify-content-between align-items-center p-3 border rounded">
              <div>
                <h5>Template 1 - Grid Layout</h5>
                <p className="text-muted mb-0">Clean grid-based layout with organized sections</p>
              </div>
              <div className="d-flex gap-2">
                <Button 
                  variant="outline-info" 
                  size="sm"
                  onClick={() => handlePreviewShow("1")}
                >
                  Preview
                </Button>
                <Button 
                  variant="outline-primary" 
                  onClick={() => {
                    setSelectedTamplate("1");
                    handleClose();
                  }}
                >
                  Select
                </Button>
              </div>
            </div>
            
            <div className="d-flex justify-content-between align-items-center p-3 border rounded">
              <div>
                <h5>Template 2 - Startup Canvas</h5>
                <p className="text-muted mb-0">Colorful canvas layout with visual appeal</p>
              </div>
              <div className="d-flex gap-2">
                <Button 
                  variant="outline-info" 
                  size="sm"
                  onClick={() => handlePreviewShow("2")}
                >
                  Preview
                </Button>
                <Button 
                  variant="outline-primary" 
                  onClick={() => {
                    setSelectedTamplate("2");
                    handleClose();
                  }}
                >
                  Select
                </Button>
              </div>
            </div>
            
            <div className="d-flex justify-content-between align-items-center p-3 border rounded">
              <div>
                <h5>Template 3 - Demo Template</h5>
                <p className="text-muted mb-0">Simple demo template for future development</p>
              </div>
              <div className="d-flex gap-2">
                <Button 
                  variant="outline-info" 
                  size="sm"
                  onClick={() => handlePreviewShow("3")}
                >
                  Preview
                </Button>
                <Button 
                  variant="outline-primary" 
                  onClick={() => {
                    setSelectedTamplate("3");
                    handleClose();
                  }}
                >
                  Select
                </Button>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Template Preview Modal */}
      <Modal show={showPreview} onHide={handlePreviewClose} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>Template {previewTemplate} Preview</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ maxHeight: '70vh', overflow: 'auto' }}>
          {renderTemplatePreview()}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handlePreviewClose}>
            Close
          </Button>
          <Button 
            variant="primary" 
            onClick={() => {
              setSelectedTamplate(previewTemplate);
              handlePreviewClose();
              handleClose();
            }}
          >
            Use This Template
          </Button>
        </Modal.Footer>
      </Modal>





                    {error && <div className="alert alert-danger">{error}</div>}
                    <div className="text-start">
                      {loading ? (
                        <p>Loading...</p>
                      ) : (
                        generatedModel && (
                          <>
                            <div id="business-model-container">
                             {
                              selectedTamplate === "1" ? (
                                <GridLayout
                                problem={generatedModel.Problem}
                                solution={generatedModel.Solution}
                                uniqueValueProposition={generatedModel["Unique Value Proposition"]}
                                customerSegments={generatedModel["Customer Segments"]}
                                keyMetrics={generatedModel["Key Metrics"]}
                                channels={generatedModel.Channels}
                                costStructure={generatedModel["Cost Structure"]}
                                revenueStreams={generatedModel["Revenue Streams"]}
                              />
                              ) : selectedTamplate === "2" ? (
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
                              ) : selectedTamplate === "3" ? (
                                <div>
                                  hello demo 
                                </div>
                              ) : null

                             }
                            </div>
                            <button
                              onClick={generateImage}
                              className="btn btn-info mt-2 "
                            >
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
