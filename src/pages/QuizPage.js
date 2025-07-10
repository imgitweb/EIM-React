import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaRedo,
  FaCheck,
  FaTimes,
  FaInfoCircle,
  FaListOl,
} from "react-icons/fa";
import sections from "../../src/pages/ImStratupSchool/sections";

const QuizPage = () => {
  const { lessonId } = useParams();
  const navigate = useNavigate();

  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [showExplanations, setShowExplanations] = useState([]);

  const allLessons = sections.flatMap((section) => section.lessons);
  const lesson = allLessons.find((l) => l.id === lessonId);

  if (!lesson || !lesson.quiz) {
    return (
      <div className="container mt-5 text-center text-danger">
        <h4><FaTimes className="me-2" /> No quiz available for this lesson.</h4>
        <button className="btn btn-outline-secondary mt-3" onClick={() => navigate(-1)}>
          <FaArrowLeft className="me-2" /> Go Back
        </button>
      </div>
    );
  }

  const { quiz, title } = lesson;
  const totalQuestions = quiz.questions.length;

  const handleOptionChange = (optionIndex) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQIndex]: optionIndex,
    }));
  };

  const handleNext = () => {
    if (currentQIndex < totalQuestions - 1) {
      setCurrentQIndex((prev) => prev + 1);
    } else {
      setSubmitted(true);
      setShowExplanations(quiz.questions.map(() => false));
    }
  };

  const handleRestart = () => {
    setCurrentQIndex(0);
    setAnswers({});
    setSubmitted(false);
    setShowExplanations([]);
  };

  const toggleExplanation = (index) => {
    setShowExplanations((prev) =>
      prev.map((val, i) => (i === index ? !val : val))
    );
  };

  const calculateScore = () => {
    let score = 0;
    quiz.questions.forEach((q, i) => {
      if (answers[i] === q.answer) score++;
    });
    return score;
  };

  if (submitted) {
    const score = calculateScore();

    return (
      <div className="container py-5">
        {/* Score Summary */}
        <div className="card shadow-sm mb-5">
          <div className="card-body text-center">
            <h2 className="text-success"><FaCheck className="me-2" />Well Done!</h2>
            <p className="fs-5">
              You scored <strong>{score}</strong> out of <strong>{totalQuestions}</strong>
            </p>
            <div className="d-flex justify-content-center gap-3 mt-4 flex-wrap">
              <button className="btn btn-outline-primary" onClick={handleRestart}>
                <FaRedo className="me-2" /> Try Again
              </button>
              <button className="btn btn-outline-secondary" onClick={() => navigate(-1)}>
                <FaArrowLeft className="me-2" /> Back to Lessons
              </button>
            </div>
          </div>
        </div>

        {/* Answer Review */}
        <div className="card shadow-sm">
          <div className="card-body">
            <h4 className="text-primary mb-4"><FaListOl className="me-2" />Answer Review</h4>
            <div className="d-flex flex-column gap-4">
              {quiz.questions.map((q, index) => {
                const userAnswer = answers[index];
                const isCorrect = userAnswer === q.answer;
                return (
                  <div key={index} className="border rounded p-3 bg-light">
                    <div className="d-flex justify-content-between mb-2">
                      <strong>Q{index + 1}. {q.question}</strong>
                      <span className={`badge ${isCorrect ? "bg-success" : "bg-danger"}`}>
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
      </div>
    );
  }

  const currentQuestion = quiz.questions[currentQIndex];
  const selected = answers[currentQIndex];

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="text-primary">📝 Quiz: {title}</h3>
        <button className="btn btn-outline-secondary" onClick={() => navigate(-1)}>
          <FaArrowLeft className="me-2" /> Back
        </button>
      </div>

      <div className="card shadow-sm">
        <div className="card-body">
          <h5 className="fw-bold mb-3">
            Question {currentQIndex + 1} of {totalQuestions}
          </h5>
          <h5>{currentQuestion.question}</h5>

          <div className="d-flex flex-column mt-3">
            {currentQuestion.options.map((option, i) => (
              <label
                key={i}
                className={`mb-2 p-2 rounded border ${
                  selected === i
                    ? "border-primary bg-primary text-white"
                    : "border-secondary bg-light"
                }`}
                style={{ cursor: "pointer" }}
              >
                <input
                  type="radio"
                  name={`q-${currentQIndex}`}
                  className="me-2"
                  checked={selected === i}
                  onChange={() => handleOptionChange(i)}
                />
                {option}
              </label>
            ))}
          </div>

          <button
            className="btn btn-success mt-4 w-100"
            disabled={selected === undefined}
            onClick={handleNext}
          >
            {currentQIndex === totalQuestions - 1 ? (
              <>Finish Quiz</>
            ) : (
              <>Next Question</>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
