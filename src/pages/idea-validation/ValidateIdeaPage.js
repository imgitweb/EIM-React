import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SecondSidebar from "../../componant/SecondSidebar";
import Navigation from "../../componant/Navigation";
import SerchBar from "../../componant/SearchBar";

const ValidateIdeaPage = () => {
  const navigate = useNavigate();
  const [isActive, setActive] = useState(false);
  const ToggleEvent = () => setActive((prev) => !prev);

  const [idea, setIdea] = useState({
    title: "",
    problem: "",
    solution: "",
    audience: "",
  });

  const [scorecard, setScorecard] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setIdea((prev) => ({ ...prev, [name]: value }));
  };

  const handleValidate = () => {
    const fakeScore = Math.floor(Math.random() * 41) + 60;
    setScorecard({
      score: fakeScore,
      strengths: ["Innovative solution", "Strong market potential"],
      weaknesses: ["Unclear monetization"],
      opportunities: ["Large student market"],
      risks: ["Competition from existing apps"],
    });
  };

  return (
    <>
      <div id="main-wrapper" className={isActive ? "show-sidebar" : ""}>
        <SecondSidebar onButtonClick={ToggleEvent} />

        <div className="page-wrapper bg-white">
          <Navigation onButtonClick={ToggleEvent} />

          <div className="body-wrapper px-4">
            <div className="p-4 border rounded shadow-sm bg-light">
              <h4 className="mb-4 fw-bold text-dark">Validate Your Startup Idea</h4>

              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label fw-semibold">Idea Title</label>
                  <input
                    type="text"
                    name="title"
                    className="form-control"
                    placeholder="Give your idea a title"
                    value={idea.title}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-semibold">Target Audience</label>
                  <input
                    type="text"
                    name="audience"
                    className="form-control"
                    placeholder="e.g. Students, MSMEs"
                    value={idea.audience}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-semibold">Problem</label>
                  <textarea
                    name="problem"
                    rows="3"
                    className="form-control"
                    placeholder="What problem are you solving?"
                    value={idea.problem}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-semibold">Solution</label>
                  <textarea
                    name="solution"
                    rows="3"
                    className="form-control"
                    placeholder="How are you solving it?"
                    value={idea.solution}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="mt-4">
                <button
                  type="button"
                  className="btn btn-primary px-4 py-2 fw-medium"
                  onClick={handleValidate}
                >
                  Validate with AI
                </button>
              </div>

              {scorecard && (
                <div className="mt-5 p-4 border rounded bg-white shadow-sm">
                  <h5 className="mb-3 fw-bold text-dark">AI Idea Scorecard</h5>
                  <h2 className="text-primary display-6 fw-bold mb-4">
                    {scorecard.score}/100
                  </h2>

                  <div className="row g-4">
                    <div className="col-md-6">
                      <div className="border rounded p-3 h-100 bg-light-subtle">
                        <h6 className="text-success fw-semibold">Strengths</h6>
                        <ul className="mb-0">
                          {scorecard.strengths.map((s, i) => (
                            <li key={i}>{s}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="border rounded p-3 h-100 bg-light-subtle">
                        <h6 className="text-danger fw-semibold">Weaknesses</h6>
                        <ul className="mb-0">
                          {scorecard.weaknesses.map((w, i) => (
                            <li key={i}>{w}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="border rounded p-3 h-100 bg-light-subtle">
                        <h6 className="text-primary fw-semibold">Opportunities</h6>
                        <ul className="mb-0">
                          {scorecard.opportunities.map((o, i) => (
                            <li key={i}>{o}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="border rounded p-3 h-100 bg-light-subtle">
                        <h6 className="text-warning fw-semibold">Risks</h6>
                        <ul className="mb-0">
                          {scorecard.risks.map((r, i) => (
                            <li key={i}>{r}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 d-flex flex-wrap gap-2">
                    <button
                      className="btn btn-outline-dark"
                      onClick={() => navigate("/submit")}
                    >
                      Refine Idea
                    </button>
                    <button
                      className="btn btn-success"
                      onClick={() => navigate("/risk-feedback")}
                    >
                      View Risk & Feedback
                    </button>
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

export default ValidateIdeaPage;
