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

const IdeaValidation = () => {
  const [isActive, setActive] = useState(false);
  const [scores, setScores] = useState(Array(evaluationQuestions.length).fill(4));
  const [totalScore, setTotalScore] = useState(evaluationQuestions.length * 4);
  const [result, setResult] = useState(getEvaluationResult(evaluationQuestions.length * 4));

  const ToggleEvent = () => {
    setActive((prevState) => !prevState);
  };

  const handleScoreChange = (idx, value) => {
    const newScores = [...scores];
    newScores[idx] = parseInt(value);
    setScores(newScores);
  };

  const calculateScore = () => {
    const sum = scores.reduce((a, b) => a + b, 0);
    setTotalScore(sum);
    setResult(getEvaluationResult(sum));
  };

  // Calculate rowSpans for categories
  const categoryRowSpans = evaluationQuestions.reduce((acc, q) => {
    acc[q.category] = (acc[q.category] || 0) + 1;
    return acc;
  }, {});

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
                      <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                          <li className="breadcrumb-item">
                            <a
                              className="text-muted text-decoration-none"
                              href="#0">
                              Home
                            </a>
                          </li>
                          <li className="breadcrumb-item" aria-current="page">
                            Idea Validation
                          </li>
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
                    {/* Title */}
                    <h1 className="display-4 text-center mb-2 ">
                      Evaluate your startup idea
                    </h1>
                    <p className="text-center mb-8">
                      Use the DVF framework to prioritize and select your
                      ventures
                    </p>

                    {/* Startup Idea Evaluation Table */}
                    <div className="container-fluid mt-4">
                      <div className="card mb-4">
                        <div className="card-header" style={{ backgroundColor: "#223662", color: "#fff" }}>
                          <h3 className="mb-0">Startup Idea Evaluation Table</h3>
                        </div>
                        <div className="card-body table-responsive">
                          <table className="table table-bordered align-middle">
                            <thead>
                              <tr style={{ backgroundColor: "#e3eafc" }}>
                                <th>Category</th>
                                <th>Question</th>
                                <th>Options</th>
                                <th>Score (1–4)</th>
                              </tr>
                            </thead>
                            <tbody>
                              {evaluationQuestions.map((q, idx) => {
                                // Check if this is the first question of the category
                                const isFirstOfCategory =
                                  idx === 0 || evaluationQuestions[idx - 1].category !== q.category;
                                return (
                                  <tr key={idx}>
                                    {isFirstOfCategory && (
                                      <td rowSpan={categoryRowSpans[q.category]}>{q.category}</td>
                                    )}
                                    {/* Only render category cell for the first question in the group */}
                                    <td>{q.question}</td>
                                    <td>
                                      <select
                                        className="form-select"
                                        value={scores[idx]}
                                        onChange={e => handleScoreChange(idx, e.target.value)}
                                      >
                                        {q.options.map((opt, i) => (
                                          <option key={i} value={opt.value}>{opt.label}</option>
                                        ))}
                                      </select>
                                    </td>
                                    <td className="text-center">{scores[idx]}</td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                          <div className="text-center mt-3">
                            <button className="btn btn-success" onClick={calculateScore}>
                              Calculate Score
                            </button>
                          </div>
                          <div className="text-center mt-3">
                            <h5>Total Score: {totalScore}</h5>
                            <div>Evaluation Result: <b>{result}</b></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Circles Section */}
                    <div className="row mb-12 justify-content-center ">
                      {/* Circle 1 */}
                      <div className="col-md-2 d-flex flex-column align-items-center">
                        <div
                          className="position-relative mb-2 "
                          style={{
                            width: "100px",
                            height: "100px",
                            backgroundColor: "#FBB6CE",
                            borderRadius: "50%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            opacity: 0.7,
                          }}>
                          <Heart style={{ width: "40px", height: "40px" }} />
                        </div>
                        <div className="text-center ">
                          <h5>Solution viability</h5>
                          <p className="small">
                            Do customers / users want this?
                          </p>
                        </div>
                      </div>

                      {/* Circle 2 */}
                      <div className="col-md-2 d-flex flex-column align-items-center">
                        <div
                          className="position-relative mb-2"
                          style={{
                            width: "100px",
                            height: "100px",
                            backgroundColor: "#A0F5D7",
                            borderRadius: "50%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            opacity: 0.7,
                          }}>
                          <CheckCircle
                            style={{ width: "40px", height: "40px" }}
                          />
                        </div>
                        <div className="text-center ">
                          <h5>Evidence gathering</h5>
                          <p className="small">Can we do this?</p>
                        </div>
                      </div>

                      {/* Circle 3 */}
                      <div className="col-md-2 d-flex flex-column align-items-center">
                        <div
                          className="position-relative mb-2"
                          style={{
                            width: "100px",
                            height: "100px",
                            backgroundColor: "#A2D8E7",
                            borderRadius: "50%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            opacity: 0.7,
                          }}>
                          <DollarSign
                            style={{ width: "40px", height: "40px" }}
                          />
                        </div>
                        <div className="text-center ">
                          <h5>Level of demand</h5>
                          <p className="small">Can this survive and thrive?</p>
                        </div>
                      </div>

                      {/* Circle 4 */}
                      <div className="col-md-2 d-flex flex-column align-items-center">
                        <div
                          className="position-relative mb-2"
                          style={{
                            width: "100px",
                            height: "100px",
                            backgroundColor: "#FFEB3B",
                            borderRadius: "50%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            opacity: 0.7,
                          }}>
                          <Star style={{ width: "40px", height: "40px" }} />
                        </div>
                        <div className="text-center ">
                          <h5>Efficiency, Client focus</h5>
                          <p className="small">
                            How new and innovative is the idea?
                          </p>
                        </div>
                      </div>

                      {/* Circle 5 */}
                      <div className="col-md-2 d-flex flex-column align-items-center">
                        <div
                          className="position-relative mb-2"
                          style={{
                            width: "100px",
                            height: "100px",
                            backgroundColor: "#223662",
                            borderRadius: "50%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            opacity: 0.7,
                          }}>
                          <Target style={{ width: "40px", height: "40px" }} />
                        </div>
                        <div className="text-center ">
                          <h5>Team alignment</h5>
                          <p className="small">Who is the target audience?</p>
                        </div>
                      </div>
                    </div>

                    {/* Framework Grid */}
                    <div className="row mb-8">
                      {/* Desirability Column */}
                      <div className="col-md-4 card">
                        <div className="border p-3">
                          <h3 className="font-weight-bold text-xl mb-4">
                            Desirability
                          </h3>
                          <div
                            className="bg-pink-100 p-2 mb-4"
                            style={{ backgroundColor: "#223662" }}>
                            "Do people want this?"{" "}
                          </div>
                          <p className="font-weight-bold mb-2">Focus</p>
                          <p className="mb-4">User Needs and Desires</p>
                          <p className="font-weight-bold mb-2">
                            Considerations
                          </p>
                          <ul className="list-unstyled">
                            <li>User research and empathy mapping</li>
                            <li>User interviews and surveys</li>
                            <li>Proof of concept and validating questions</li>
                          </ul>
                        </div>
                      </div>

                      {/* Viability Column */}
                      <div className="col-md-4 card">
                        <div className="border p-3">
                          <h3 className="font-weight-bold text-xl mb-4">
                            Viability
                          </h3>
                          <div
                            className="bg-cyan-100 p-2 mb-4"
                            style={{ backgroundColor: "#223662" }}>
                            {" "}
                            "Can we make this profitable?"{" "}
                          </div>
                          <p className="font-weight-bold mb-2">Focus</p>
                          <p className="mb-4">
                            Business Model and Sustainability
                          </p>
                          <p className="font-weight-bold mb-2">
                            Considerations
                          </p>
                          <ul className="list-unstyled">
                            <li>Market analysis and surveying competition</li>
                            <li>
                              Financials, revenue streams and cost structure
                            </li>
                            <li>Financial projections / forecasting</li>
                          </ul>
                        </div>
                      </div>

                      {/* Feasibility Column */}
                      <div className="col-md-4 card">
                        <div className="border p-3">
                          <h3 className="font-weight-bold text-xl mb-4">
                            Feasibility
                          </h3>
                          <div
                            className="bg-green-100 p-2 mb-4"
                            style={{ backgroundColor: "#223662" }}>
                            {" "}
                            "Can we actually build and deliver this?"{" "}
                          </div>
                          <p className="font-weight-bold mb-2">Focus</p>
                          <p className="mb-4">
                            Technical and Operational Capabilities
                          </p>
                          <p className="font-weight-bold mb-2">
                            Considerations
                          </p>
                          <ul className="list-unstyled">
                            <li>Technical capabilities and infrastructure</li>
                            <li>
                              Resources available (team, time, budget, etc.)
                            </li>
                            <li>Operational processes and logistics</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Scoring Table */}
                    <div
                      border="1 1px soiled black"
                      className="border table-responsive p-3"
                      style={{ color: "#D3D3D3" }}>
                      <h3 className="font-weight-bold mb-4">
                        Sample Scoring
                      </h3>
                      <table className="table table table-bordered">
                        <thead>
                          <tr>
                            <th>Ideas</th>
                            <th
                              className="p-2"
                              >
                              Desirability
                            </th>
                            <th
                              className="p-2"
                              >
                              Viability
                            </th>
                            <th
                              className="p-2"
                              >
                              Feasibility
                            </th>
                            <th>Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="p-2">Idea 1</td>
                            <td className="text-center">4</td>
                            <td className="text-center">3</td>
                            <td className="text-center">2</td>
                            <td className="text-center">9</td>
                          </tr>
                          <tr>
                            <td className="p-2">Idea 2</td>
                            <td className="text-center">4</td>
                            <td className="text-center">5</td>
                            <td className="text-center">3</td>
                            <td className="text-center">11</td>
                          </tr>
                          <tr>
                            <td className="p-2">Idea 3</td>
                            <td className="text-center">2</td>
                            <td className="text-center">3</td>
                            <td className="text-center">3</td>
                            <td className="text-center">8</td>
                          </tr>
                        </tbody>
                      </table>
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
