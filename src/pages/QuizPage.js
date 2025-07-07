import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import sections from "../sections";

const QuizPage = () => {
  const { lessonId } = useParams();
  const navigate = useNavigate();
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const allLessons = sections.flatMap((section) => section.lessons);
  const lesson = allLessons.find((lesson) => lesson.id === lessonId);
   const { quiz, title } = lesson;
  const totalQuestions = quiz.questions.length;
  const [showExplanations, setShowExplanations] = useState(
    quiz.questions.map(() => false)
  );


  if (!lesson || !lesson.quiz) {
    return (
      <div className="container mt-5 text-center text-danger">
        <h4>🚫 No quiz available for this lesson.</h4>
        <button className="btn btn-outline-secondary mt-3" onClick={() => navigate(-1)}>
          ⬅️ Go Back
        </button>
      </div>
    );
  }

 

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
    }
  };

  const handleRestart = () => {
    setCurrentQIndex(0);
    setAnswers({});
    setSubmitted(false);
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
  

  const toggleExplanation = (index) => {
    setShowExplanations((prev) =>
      prev.map((val, i) => (i === index ? !val : val))
    );
  };

  return (
    <div className="container mt-5 text-dark">
      {/* Summary */}
      <div className="bg-white p-4 rounded shadow text-center mb-5 border">
        <h2 className="text-success mb-3">🎉 Well Done!</h2>
        <p className="fs-5 mb-4">
          You scored <strong>{score}</strong> out of{" "}
          <strong>{quiz.questions.length}</strong>
        </p>
        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <button className="btn btn-outline-primary" onClick={handleRestart}>
            🔁 Try Again
          </button>
          <button className="btn btn-outline-secondary" onClick={() => navigate(-1)}>
            ⬅️ Back to Lessons
          </button>
        </div>
      </div>

      {/* Review */}
      <div className="bg-light p-4 rounded shadow">
        <h4 className="text-primary mb-4">📊 Answer Review</h4>

        <div className="d-flex flex-column gap-4">
          {quiz.questions.map((q, index) => {
            const userAnswer = answers[index];
            const isCorrect = userAnswer === q.answer;

            return (
              <div
                key={index}
                className="border rounded p-3 shadow-sm bg-white"
              >
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h6 className="mb-0">Q{index + 1}. {q.question}</h6>
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

                {/* Toggle Explanation */}
                {q.explanation && (
                  <>
                    <button
                      className="btn btn-sm btn-outline-info mt-2"
                      onClick={() => toggleExplanation(index)}
                    >
                      {showExplanations[index] ? "Hide" : "Show"} Explanation
                    </button>
                    {showExplanations[index] && (
                      <div className="mt-2 alert alert-info p-2 small">
                        💡 <strong>Explanation:</strong> {q.explanation}
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
  );
}




  const currentQuestion = quiz.questions[currentQIndex];
  const selected = answers[currentQIndex];

  return (
    <div className="container mt-5 text-light">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="text-info">📝 Quiz: {title}</h3>
        <button className="btn btn-outline-light" onClick={() => navigate(-1)}>
          ⬅️ Back
        </button>
      </div>

      <div className="bg-dark p-4 rounded shadow">
        <h5 className="fw-bold mb-3">
          Question {currentQIndex + 1} of {totalQuestions}
        </h5>
        <h5>{currentQuestion.question}</h5>

        <div className="d-flex flex-column mt-3">
          {currentQuestion.options.map((option, i) => (
            <label
              key={i}
              className={`mb-2 p-2 rounded border ${
                selected === i ? "border-info bg-info text-white" : "border-secondary"
              }`}
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
          {currentQIndex === totalQuestions - 1 ? "🎉 Finish Quiz" : "➡️ Next"}
        </button>
      </div>
    </div>
  );
};

export default QuizPage;
