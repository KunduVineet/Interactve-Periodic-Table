import React, { useState } from "react";

const Quiz = ({ quizData }) => {
  const [id, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  if (!quizData || quizData.length === 0) {
    return <div className="text-white">Loading or no quiz data available.</div>; // Handle missing quiz data
  }

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNext = () => {
    if (selectedAnswer === quizData[id]?.answer) {
      setScore(score + 1);
    }

    if (id + 1 < quizData.length) {
      setCurrentQuestionIndex(id + 1);
      setSelectedAnswer("");
    } else {
      setQuizFinished(true);
    }
  };

  return (
    <div>
      {quizFinished ? (
        <div>
          <h2>Your Score: {score}/{quizData.length}</h2>
        </div>
      ) : (
        <div>
          {quizData[id] && (
            <>
              <h2>{quizData[id].question}</h2>
              <div>
                {quizData[id].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(option)}
                    style={{
                      backgroundColor: selectedAnswer === option ? "lightgray" : "white",
                      padding: "10px",
                      margin: "5px",
                      cursor: "pointer",
                      border: "1px solid #ccc",
                    }}
                  >
                    {option}
                  </button>
                ))}
              </div>
              <button
                onClick={handleNext}
                disabled={!selectedAnswer} // Disable if no answer is selected
                style={{
                  backgroundColor: selectedAnswer ? "#4CAF50" : "#ddd", // green if selected, grey if not
                  padding: "10px 20px",
                  cursor: selectedAnswer ? "pointer" : "not-allowed",
                  border: "none",
                  marginTop: "20px",
                  color: "white",
                }}
              >
                Next
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Quiz;
