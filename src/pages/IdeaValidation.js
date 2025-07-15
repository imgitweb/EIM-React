import React, { useState } from "react";
import { Heart, CheckCircle, DollarSign, Star, Target } from "lucide-react";
import LeftSidebar from "../componant/LeftSidebar";
import Navigation from "../componant/Navigation";
import SerchBar from "../componant/SearchBar";
import { OpenAI } from "openai";

const evaluationQuestions = [
  {
    category: "Problem & Solution",
    question: "Is there a real and urgent problem being solved?",
    options: [
      { label: "Critical, widespread pain point (4)", value: 4 },
      { label: "Important but not urgent (3)", value: 3 },
      { label: "Minor inconvenience (2)", value: 2 },
      { label: "Not clear (1)", value: 1 },
    ],
  },
  {
    category: "Problem & Solution",
    question: "How well does the solution solve the problem?",
    options: [
      { label: "Breakthrough innovation (4)", value: 4 },
      { label: "Good improvement (3)", value: 3 },
      { label: "Marginal improvement (2)", value: 2 },
      { label: "Unproven (1)", value: 1 },
    ],
  },
  {
    category: "Market & Demand",
    question: "Target market size",
    options: [
      { label: ">1M users (4)", value: 4 },
      { label: "100k-1M users (3)", value: 3 },
      { label: "10k-100k users (2)", value: 2 },
      { label: "<10k users (1)", value: 1 },
    ],
  },
  {
    category: "Market & Demand",
    question: "Market growth rate",
    options: [
      { label: "Rapidly growing (4)", value: 4 },
      { label: "Growing (3)", value: 3 },
      { label: "Stable (2)", value: 2 },
      { label: "Declining (1)", value: 1 },
    ],
  },
  {
    category: "Market & Demand",
    question: "Customer willingness to pay",
    options: [
      { label: "Yes, clearly (4)", value: 4 },
      { label: "Somewhat (3)", value: 3 },
      { label: "Unclear (2)", value: 2 },
      { label: "No (1)", value: 1 },
    ],
  },
  {
    category: "Business Model",
    question: "Revenue model clarity",
    options: [
      { label: "Proven in the industry (4)", value: 4 },
      { label: "Somewhat clear (3)", value: 3 },
      { label: "Unclear (2)", value: 2 },
      { label: "No model (1)", value: 1 },
    ],
  },
  {
    category: "Business Model",
    question: "Scalability potential",
    options: [
      { label: "Highly scalable (4)", value: 4 },
      { label: "Scalable (3)", value: 3 },
      { label: "Limited (2)", value: 2 },
      { label: "Not scalable (1)", value: 1 },
    ],
  },
  {
    category: "Competition & USP",
    question: "Level of competition",
    options: [
      { label: "First mover (4)", value: 4 },
      { label: "Few competitors (3)", value: 3 },
      { label: "Many competitors (2)", value: 2 },
      { label: "Highly saturated (1)", value: 1 },
    ],
  },
  {
    category: "Competition & USP",
    question: "Unique value proposition (USP)",
    options: [
      { label: "Highly compelling (4)", value: 4 },
      { label: "Somewhat compelling (3)", value: 3 },
      { label: "Weak (2)", value: 2 },
      { label: "Not clear (1)", value: 1 },
    ],
  },
  {
    category: "Team & Execution",
    question: "Team experience & skill",
    options: [
      { label: "Extensive experience (4)", value: 4 },
      { label: "Good experience (3)", value: 3 },
      { label: "Some experience (2)", value: 2 },
      { label: "Little/no experience (1)", value: 1 },
    ],
  },
  {
    category: "Team & Execution",
    question: "Execution capability (MVP/traction)",
    options: [
      { label: "Growing traction (4)", value: 4 },
      { label: "Some traction (3)", value: 3 },
      { label: "Prototype only (2)", value: 2 },
      { label: "No progress (1)", value: 1 },
    ],
  },
  {
    category: "Legal & Feasibility",
    question: "Any legal/ethical concerns?",
    options: [
      { label: "No concerns (4)", value: 4 },
      { label: "Minor concerns (3)", value: 3 },
      { label: "Some concerns (2)", value: 2 },
      { label: "Major concerns (1)", value: 1 },
    ],
  },
  {
    category: "Legal & Feasibility",
    question: "Technical feasibility",
    options: [
      { label: "Feasible with tech effort (3)", value: 3 },
      { label: "Challenging but possible (2)", value: 2 },
      { label: "Not feasible (1)", value: 1 },
      { label: "Highly feasible (4)", value: 4 },
    ],
  },
];

const getEvaluationResult = (score) => {
  if (score >= 45) return "Promising – proceed to MVP";
  if (score >= 35) return "Worth exploring further";
  if (score >= 25) return "Needs work – consider pivot or drop";
  return "Not viable – consider dropping idea";
};

const inputTypes = [
  { label: "Select", value: "select" },
  { label: "Radio", value: "radio" },
  { label: "Text", value: "text" },
];

// Icon mapping for categories

const categoryIcons = {
  "Problem & Solution": <Heart style={{ color: "#F06292" }} />,
  "Market & Demand": <DollarSign style={{ color: "#00BFAE" }} />,
  "Business Model": <Star style={{ color: "#FFD600" }} />,
  "Competition & USP": <Target style={{ color: "#223662" }} />,
  "Team & Execution": <CheckCircle style={{ color: "#4CAF50" }} />,
  "Legal & Feasibility": <CheckCircle style={{ color: "#607D8B" }} />,
};

const categoryColors = {
  "Problem & Solution": "#111",
  "Market & Demand": "#111",
  "Business Model": "#111",
  "Competition & USP": "#111",
  "Team & Execution": "#111",
  "Legal & Feasibility": "#111",
};

const IdeaValidation = () => {
  const [isActive, setActive] = useState(false);
  const [scores, setScores] = useState(
    Array(evaluationQuestions.length).fill(null)
  );
  const [totalScore, setTotalScore] = useState(0);
  const [result, setResult] = useState("");
  const [currentStep, setCurrentStep] = useState(0); // Step index for categories
  const [showResult, setShowResult] = useState(false);

  const ToggleEvent = () => {
    setActive((prevState) => !prevState);
  };

  const handleScoreChange = (idx, value) => {
    const newScores = [...scores];
    newScores[idx] = value === "" ? null : parseInt(value);
    setScores(newScores);
  };

  const calculateScore = () => {
    const sum = scores.reduce((total, score) => total + (score || 0), 0);
    setTotalScore(sum);
    setResult(getEvaluationResult(sum));
    setShowResult(true);
  };

  // Group questions by category
  const questionsByCategory = evaluationQuestions.reduce((acc, q, idx) => {
    if (!acc[q.category]) acc[q.category] = [];
    acc[q.category].push({ ...q, idx });
    return acc;
  }, {});

  // Array of unique categories for step navigation
  const categories = Object.keys(questionsByCategory);
  const isLastStep = currentStep === categories.length - 1;
  const isFirstStep = currentStep === 0;
  const currentCategory = categories[currentStep];
  const currentQuestions = questionsByCategory[currentCategory];

  // Progress calculation for current step
  const currentAnswered = currentQuestions.filter(
    (q) => scores[q.idx] !== null
  ).length;

  return (
    <>
      <div id="main-wrapper" className={isActive ? "show-sidebar" : ""}>
        {/* Sidebar Start */}
        <LeftSidebar onButtonClick={ToggleEvent} />
        {/*  Sidebar End */}
        <div className="page-wrapper">
          <Navigation onButtonClick={ToggleEvent} />
          <div className="body-wrapper">
            <div className="container-fluid">
              <div className="card bg-info-subtle shadow-none position-relative overflow-hidden mb-4">
                <div className="card-body px-4 py-3">
                  <div className="row align-items-center">
                    <div className="col-9">
                      <h4 className="fw-semibold mb-8">Idea Validation</h4>
                      <h3></h3>
                      <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                          <li className="breadcrumb-item">
                            <a
                              className="text-muted text-decoration-none"
                              href="#0"
                            >
                              Home
                            </a>
                          </li>
                          <li
                            className="breadcrumb-item mb-3"
                            aria-current="page"
                          >
                            Idea Validation
                          </li>
                          <h1 className="display-4 text-center mb-2 ">
                            Evaluate your startup idea
                          </h1>

                          <p className="text-center mb-8 ">
                            Use the DVF framework to prioritize and select your
                            ventures
                          </p>
                        </ol>
                      </nav>
                    </div>
                    <div className="col-3">
                      <div className="text-center mb-n5">
                        <img
                          src="./assets/assets/images/breadcrumb/ChatBc.png"
                          alt="modernize-img"
                          className="img-fluid mb-n4"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-fluid">
              <div className="card">
                <div className="card-header">Idea Validation</div>
                <div className="">
                  <div className="container p-4">
                    {/* Step Progress Bar */}
                    <div className="container-fluid mt-4">
                      <div className="mb-4">
                        <h5 className="mb-2">Overall Progress</h5>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <span>
                            Answered:{" "}
                            <b>
                              {scores.filter((s) => s !== null).length} /{" "}
                              {scores.length}
                            </b>
                          </span>
                          <span>
                            Completion:{" "}
                            <b>
                              {Math.round(
                                (scores.filter((s) => s !== null).length /
                                  scores.length) *
                                  100
                              )}
                              %
                            </b>
                          </span>
                          <span>
                            Score:{" "}
                            <b>
                              {scores.reduce((acc, s) => acc + (s || 0), 0)} /{" "}
                              {evaluationQuestions.length * 4}
                            </b>
                          </span>
                        </div>
                        <div className="progress" style={{ height: "12px" }}>
                          <div
                            className="progress-bar bg-info"
                            role="progressbar"
                            style={{
                              width: `${
                                (scores.filter((s) => s !== null).length /
                                  scores.length) *
                                100
                              }%`,
                            }}
                            aria-valuenow={
                              scores.filter((s) => s !== null).length
                            }
                            aria-valuemin="0"
                            aria-valuemax={scores.length}
                          />
                        </div>
                      </div>

                      {/* Only show current category's questions */}
                      <div className="row g-4 justify-content-center">
                        <div className="col-12 col-md-8 w-100">
                          <div
                            className="card h-100  shadow-sm border-0 question-card"
                            style={{
                              borderRadius: "18px",
                              transition: "box-shadow 0.2s",
                              position: "relative",
                            }}
                          >
                            <div
                              className="card-header d-flex align-items-center"
                              style={{
                                background:
                                  categoryColors[currentCategory] || "#f5f5f5",
                                borderTopLeftRadius: "18px",
                                borderTopRightRadius: "18px",
                                border: "none",
                                minHeight: "56px",
                              }}
                            >
                              <span
                                className="me-2"
                                style={{ fontSize: "1.5rem" }}
                              >
                                {categoryIcons[currentCategory]}
                              </span>
                              <span className="fw-bold">{currentCategory}</span>
                            </div>
                            <div className="card-body">
                              {currentQuestions.map((q, qidx) => (
                                <div
                                  key={qidx}
                                  className="mb-4 pb-2 border-bottom"
                                  style={{ borderColor: "#eee" }}
                                >
                                  <div
                                    className="mb-2"
                                    style={{
                                      fontWeight: 500,
                                      fontSize: "1.1rem",
                                    }}
                                  >
                                    {q.question}
                                  </div>
                                  <div className="d-flex align-items-center mb-2 flex-wrap">
                                    <select
                                      className="form-select form-select-sm w-auto mb-1"
                                      style={{
                                        minWidth: 160,
                                        borderRadius: 8,
                                        boxShadow: "0 1px 2px #0001",
                                      }}
                                      value={scores[q.idx] ?? ""}
                                      onChange={(e) =>
                                        handleScoreChange(q.idx, e.target.value)
                                      }
                                    >
                                      <option value="">Select an option</option>
                                      {q.options.map((opt, i) => (
                                        <option key={i} value={opt.value}>
                                          {opt.label}
                                        </option>
                                      ))}
                                    </select>
                                  </div>
                                  <div className="mt-2">
                                    <span
                                      className="badge bg-primary"
                                      style={{
                                        fontSize: "1rem",
                                        borderRadius: "8px",
                                      }}
                                    >
                                      Score:{" "}
                                      {scores[q.idx] !== null
                                        ? scores[q.idx]
                                        : "-"}
                                    </span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Navigation Buttons */}
                      <div className="text-center mt-4">
                        <button
                          className="btn btn-secondary px-4 py-2 me-2"
                          style={{ borderRadius: 12 }}
                          onClick={() => setCurrentStep(currentStep - 1)}
                          disabled={isFirstStep}
                        >
                          Previous
                        </button>
                        {!isLastStep && (
                          <button
                            className="btn btn-primary px-4 py-2"
                            style={{ borderRadius: 12 }}
                            onClick={() => setCurrentStep(currentStep + 1)}
                          >
                            Next
                          </button>
                        )}
                        {isLastStep && (
                          <button
                            className="btn btn-success px-4 py-2 fs-5 shadow"
                            style={{ borderRadius: 12 }}
                            onClick={calculateScore}
                          >
                            Calculate Score
                          </button>
                        )}
                      </div>
                      {/* Show result only after last step and Calculate Score is clicked */}
                      {showResult && (
                        <div className="text-center mt-3">
                          <h5>Total Score: {totalScore}</h5>
                          <div>
                            Evaluation Result: <b>{result}</b>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="card-footer"></div>
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

export default IdeaValidation;

{
  /* Circles Section and Framework Grid*/
}
// <div className="row mb-12 justify-content-center mb-2">
//   {/* Circle 1 */}
//   <div className="col-md-2 d-flex flex-column align-items-center">
//     <div
//       className="position-relative mb-2 "
//       style={{
//         width: "100px",
//         height: "100px",
//         backgroundColor: "#FBB6CE",
//         borderRadius: "50%",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         opacity: 0.7,
//       }}
//     >
//       <Heart style={{ width: "40px", height: "40px" }} />
//     </div>
//     <div className="text-center text-white">
//       <h5>Solution viability</h5>
//       <p className="small">Do customers / users want this?</p>
//     </div>
//   </div>

//   {/* Circle 2 */}
//   <div className="col-md-2 d-flex flex-column align-items-center">
//     <div
//       className="position-relative mb-2"
//       style={{
//         width: "100px",
//         height: "100px",
//         backgroundColor: "#A0F5D7",
//         borderRadius: "50%",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         opacity: 0.7,
//       }}
//     >
//       <CheckCircle style={{ width: "40px", height: "40px" }} />
//     </div>
//     <div className="text-center text-white">
//       <h5>Evidence gathering</h5>
//       <p className="small">Can we do this?</p>
//     </div>
//   </div>

//   {/* Circle 3 */}
//   <div className="col-md-2 d-flex flex-column align-items-center">
//     <div
//       className="position-relative mb-2"
//       style={{
//         width: "100px",
//         height: "100px",
//         backgroundColor: "#A2D8E7",
//         borderRadius: "50%",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         opacity: 0.7,
//       }}
//     >
//       <DollarSign style={{ width: "40px", height: "40px" }} />
//     </div>
//     <div className="text-center text-white">
//       <h5>Level of demand</h5>
//       <p className="small">Can this survive and thrive?</p>
//     </div>
//   </div>

//   {/* Circle 4 */}
//   <div className="col-md-2 d-flex flex-column align-items-center">
//     <div
//       className="position-relative mb-2"
//       style={{
//         width: "100px",
//         height: "100px",
//         backgroundColor: "#FFEB3B",
//         borderRadius: "50%",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         opacity: 0.7,
//       }}
//     >
//       <Star style={{ width: "40px", height: "40px" }} />
//     </div>
//     <div className="text-center text-white">
//       <h5>Efficiency, Client focus</h5>
//       <p className="small">How new and innovative is the idea?</p>
//     </div>
//   </div>

//   {/* Circle 5 */}
//   <div className="col-md-2 d-flex flex-column align-items-center">
//     <div
//       className="position-relative mb-2"
//       style={{
//         width: "100px",
//         height: "100px",
//         backgroundColor: "#223662",
//         borderRadius: "50%",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         opacity: 0.7,
//       }}
//     >
//       <Target style={{ width: "40px", height: "40px" }} />
//     </div>
//     <div className="text-center text-white">
//       <h5>Team alignment</h5>
//       <p className="small">Who is the target audience?</p>
//     </div>
//   </div>
//   Framework Grid
//   <div className="row mb-8 mt-4 ">
//     {/* Desirability Column */}
//     <div className="col-md-4 card">
//       <div className="border p-3">
//         <h3 className="font-weight-bold text-xl mb-4 text-white">
//           Desirability
//         </h3>
//         <div
//           className="bg-pink-100 p-2 mb-4"
//           style={{ backgroundColor: "#223662" }}
//         >
//           "Do people want this?"{" "}
//         </div>
//         <p className="font-weight-bold mb-2">Focus</p>
//         <p className="mb-4">User Needs and Desires</p>
//         <p className="font-weight-bold mb-2">Considerations</p>
//         <ul className="list-unstyled">
//           <li>User research and empathy mapping</li>
//           <li>User interviews and surveys</li>
//           <li>Proof of concept and validating questions</li>
//         </ul>
//       </div>
//     </div>

//     {/* Viability Column */}
//     <div className="col-md-4 card ">
//       <div className="border p-3">
//         <h3 className="font-weight-bold text-xl mb-4 text-white">
//           Viability
//         </h3>
//         <div
//           className="bg-cyan-100 p-2 mb-4"
//           style={{ backgroundColor: "#223662" }}
//         >
//           {" "}
//           "Can we make this profitable?"{" "}
//         </div>
//         <p className="font-weight-bold mb-2">Focus</p>
//         <p className="mb-4">Business Model and Sustainability</p>
//         <p className="font-weight-bold mb-2">Considerations</p>
//         <ul className="list-unstyled">
//           <li>Market analysis and surveying competition</li>
//           <li>Financials, revenue streams and cost structure</li>
//           <li>Financial projections / forecasting</li>
//         </ul>
//       </div>
//     </div>

//     {/* Feasibility Column */}
//     <div className="col-md-4 card">
//       <div className="border p-3">
//         <h3 className="font-weight-bold text-xl mb-4 text-white">
//           Feasibility
//         </h3>
//         <div
//           className="bg-green-100 p-2 mb-4"
//           style={{ backgroundColor: "#223662" }}
//         >
//           {" "}
//           "Can we actually build and deliver this?"{" "}
//         </div>
//         <p className="font-weight-bold mb-2">Focus</p>
//         <p className="mb-4">
//           Technical and Operational Capabilities
//         </p>
//         <p className="font-weight-bold mb-2">Considerations</p>
//         <ul className="list-unstyled">
//           <li>Technical capabilities and infrastructure</li>
//           <li>Resources available (team, time, budget, etc.)</li>
//           <li>Operational processes and logistics</li>
//         </ul>
//       </div>
//     </div>
//   </div>
// </div>
