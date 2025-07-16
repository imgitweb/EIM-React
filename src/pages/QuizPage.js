import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaInfoCircle,
  FaListOl,
} from "react-icons/fa";
import {
  BsClipboardCheck,
  BsPencil,
  BsCheckCircle,
  BsXCircle,
} from "react-icons/bs";

import sections from "../../src/pages/ImStratupSchool/sections";
import QuizResultChart from "./ImStratupSchool/QuizResultChart";
import { SkillCard } from "../componant/components/SkillCard";


const QuizPage = () => {
  const { lessonId } = useParams();
  const navigate = useNavigate();

  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const allLessons = sections.flatMap((section) => section.lessons);
  const lesson = allLessons.find((l) => l.id === lessonId);
   const { quiz, title } = lesson;
  const totalQuestions = quiz.questions.length;
  const currentQuestion = quiz.questions[currentQIndex];
  const selected = answers[currentQIndex];
  const [showExplanations, setShowExplanations] = useState(
    Array(totalQuestions).fill(false)
  );


  if (!lesson || !lesson.quiz) {
    return (
      <div className="container py-5 text-center">
        <h4 className="text-danger">⚠️ No Quiz Available</h4>
        <button
          className="btn btn-outline-dark mt-3"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
      </div>
    );
  }

 
  const attempted = Object.values(answers).filter((a) => a !== undefined).length;
  const correctAnswers = quiz.questions.filter(
    (q, idx) => answers[idx] === q.answer
  ).length;
  const wrongAnswers = attempted - correctAnswers;

  const handleOptionChange = (optionIndex) => {
    setAnswers((prev) => ({ ...prev, [currentQIndex]: optionIndex }));
  };

  const handleNext = () => {
    if (currentQIndex < totalQuestions - 1) {
      setCurrentQIndex((prev) => prev + 1);
    } else {
      setSubmitted(true);
    }
  };

  const handleRestart = () => {
    setAnswers({});
    setSubmitted(false);
    setCurrentQIndex(0);
  };

  const toggleExplanation = (index) => {
    setShowExplanations((prev) =>
      prev.map((val, i) => (i === index ? !val : val))
    );
  };

 const quizStats = [
  {
    title: "Total Questions",
    subTitle: "Total Questions in Quiz",
    current: totalQuestions,
    color: "#0d6efd",
    icon: <BsClipboardCheck size={18} color="#ffffff" />,
  },
  {
    title: "Attempted",
    subTitle: "Questions Attempted",
    current: attempted,
    color: "#ffc107",
    icon: <BsPencil size={18} color="#ffffff" />,
  },
  {
    title: "Correct",
    subTitle: "Questions Answered Correctly",
    current: correctAnswers,
    color: "#198754",
    icon: <BsCheckCircle size={18} color="#ffffff" />,
  },
  {
    title: "Incorrect",
    subTitle: "Questions Answered Incorrectly",
    current: wrongAnswers,
    color: "#dc3545",
    icon: <BsXCircle size={18} color="#ffffff" />,
  },
];


  return (
   <div className="row g-4">
        {/* Main Content */}
        <div
          className="col-12 col-md-12 mx-auto my-4"
          style={{
            // backgroundColor: "#FFFFFF",
            // borderRadius: "8px",
            padding: "20px",
            // boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h3 className="fw-semibold text-dark">🧠 Quiz: Score Board</h3>
            <button className="btn btn-sm btn-outline-dark" onClick={() => navigate(-1)}>
              <FaArrowLeft className="me-2" /> Back
            </button>
          </div>

          {!submitted ? (
            <div className="card shadow-sm border-0 mb-4">
              <div className="card-body">
                <div className="mb-3">
                  <h5 className="fw-bold mb-2">
                    Q{currentQIndex + 1}. {currentQuestion.question}
                  </h5>
                  {currentQuestion.options.map((option, i) => (
                    <label
                      key={i}
                      className={`d-block py-2 px-3 mb-2 rounded border ${
                        selected === i ? "bg-primary text-white" : "bg-light"
                      }`}
                      style={{ cursor: "pointer" }}
                    >
                      <input
                        type="radio"
                        name={`q-${currentQIndex}`}
                        checked={selected === i}
                        onChange={() => handleOptionChange(i)}
                        className="form-check-input me-2"
                      />
                      {option}
                    </label>
                  ))}
                </div>
                <button
                  className="btn btn-success w-100"
                  disabled={selected === undefined}
                  onClick={handleNext}
                >
                  {currentQIndex === totalQuestions - 1 ? "Finish Quiz" : "Next Question"}
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Results Summary */}
              <div className="row g-4 mb-4">
                <div className="col-12 col-md-3 d-flex justify-content-center">
                  <div >
                    <QuizResultChart score={correctAnswers} total={totalQuestions} />
                  </div>
                </div>

                <div className="col-12 col-md-9">
                  <div className="row">
                    {quizStats.map((stat, index) => (
                      <div className="col-12 col-sm-6 col-lg-6 mb-3" key={index}>
                        <SkillCard
                          title={stat.title}
                          current={stat.current}
                          color={stat.color}
                          subTitle={stat.subTitle}
                          icon={stat.icon}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Answer Review */}
              <div className="card shadow-sm">
                <div className="card-body">
                  <h4 className="text-primary mb-4">
                    <FaListOl className="me-2" />
                    Answer Review
                  </h4>
                  <div className="d-flex flex-column gap-4">
                    {quiz.questions.map((q, index) => {
                      const userAnswer = answers[index];
                      const isCorrect = userAnswer === q.answer;
                      return (
                        <div key={index} className="border rounded p-3 bg-light">
                          <div className="d-flex justify-content-between mb-2">
                            <strong>
                              Q{index + 1}. {q.question}
                            </strong>
                            <span style={{
                              height: "23px",
                            }} className={`badge ${isCorrect ? "bg-success" : "bg-danger"}`}>
                              {isCorrect ? "Correct" : "Incorrect"}
                            </span>
                          </div>
                          <p className="mb-1">
                            ✅ <strong>Correct Answer:</strong> {q.options[q.answer]}
                          </p>
                          <p className="mb-1">
                            🧍 <strong>Your Answer:</strong>{" "}
                            {userAnswer !== undefined ? (
                              <span className={isCorrect ? "" : "text-danger"}>
                                {q.options[userAnswer]}
                              </span>
                            ) : (
                              <span className="text-muted">No Answer</span>
                            )}
                          </p>
                          {q.explanation && (
                            <>
                              <button
                                className="btn btn-sm btn-outline-info mt-2"
                                onClick={() => toggleExplanation(index)}
                              >
                                {showExplanations[index] ? "Hide" : "Show"} Explanation
                              </button>
                              {showExplanations[index] && (
                                <div className="mt-2 alert alert-info small">
                                  <FaInfoCircle className="me-1" />
                                  {q.explanation}
                                </div>
                              )}
                            </>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
  );
};

export default QuizPage;
