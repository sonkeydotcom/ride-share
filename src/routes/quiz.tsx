import { useState } from "react";

// Static instructions for the quiz process
const how = [
  {
    title: "Answer the question",
    text: "The quiz is made up of 4 questions that are based on various aspects of rider experience.",
  },
  {
    title: "See the rider style",
    text: "The quiz is made up of 4 questions that are based on various aspects of rider experience.",
  },
  {
    title: "Share on socials",
    text: "The quiz is made up of 4 questions that are based on various aspects of rider experience.",
  },
];

// Questions for the quiz
const questions = [
  {
    question: "What is the most popular ride share app in your area?",
    answers: ["Uber", "Lyft", "Go-Jek", "Grab"],
    correctAnswer: "Uber",
  },
  {
    question:
      "What is the most popular mode of transportation for people to commute to work?",
    answers: ["Public Transportation", "Carpooling", "Walking", "Biking"],
    correctAnswer: "Public Transportation",
  },
  {
    question: "What is your favorite type of ride service?",
    answers: ["Taxi", "Carpool", "Bike Share", "Scooter"],
    correctAnswer: "Taxi",
  },
];

// QuizCompletion component to display after the quiz ends
const QuizCompletion = ({ selectedAnswers, questions }) => {
  return (
    <div className="rounded-lg border-2 w-full py-10 px-10">
      <h1 className="text-center text-2xl font-bold">Congratulations!</h1>
      <p className="text-center mb-4">You've completed the quiz.</p>

      <h2 className="text-lg font-bold">Your Answers:</h2>
      <ol>
        {questions.map((question, index) => (
          <li key={index} className="mb-2">
            <h3>
              {index + 1}. {question.question}
            </h3>
            <p>
              <strong>Your Answer:</strong>{" "}
              {selectedAnswers[index] || "No answer"}
            </p>
            <p>
              <strong>Correct Answer:</strong> {question.correctAnswer}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
};

// Main QuizPage component
const QuizPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isQuizStarted, setIsQuizStarted] = useState(false);

  // Store the selected answer for each question
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  // Calculate quiz progress
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsQuizCompleted(true); // Set quiz as completed
    }
  };

  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const startQuiz = () => {
    setIsQuizStarted(true);
  };

  // Function to handle answer selection
  const handleAnswerSelect = (answer) => {
    setSelectedAnswers((prevSelectedAnswers) => ({
      ...prevSelectedAnswers,
      [currentQuestionIndex]: answer,
    }));
  };

  return (
    <div>
      {/* Quiz Introduction */}
      {!isQuizStarted ? (
        <div>
          <h1>
            We have said a lot already, time for your quiz, and we hope you are
            set, 'cause we are!
          </h1>
          <p>A short, exciting, unique quiz awaits you.</p>
          <button onClick={startQuiz}>Take your quiz</button>
        </div>
      ) : isQuizCompleted ? (
        // Display completion message when quiz is done
        <QuizCompletion
          selectedAnswers={selectedAnswers}
          questions={questions}
        />
      ) : (
        // Quiz Layout
        <div>
          <div className="flex flex-row gap-4">
            {how.map((item, index) => (
              <div key={index} className="w-1/2">
                <h1>{index + 1}.</h1>
                <h1>{item.title}</h1>
                <p>{item.text}</p>
              </div>
            ))}
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-4 my-4">
            <div
              className="bg-blue-600 h-4 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          {/* Current Quiz Question */}
          <div className="rounded-lg border-2 w-full py-10 px-10">
            <h1 className="text-center">
              {currentQuestionIndex + 1}. {currentQuestion.question}
            </h1>

            {/* Alphabetical List of Answers */}
            <ol type="a">
              {currentQuestion.answers.map((answer, index) => (
                <li
                  key={index}
                  className={`border rounded-lg p-2 m-2 cursor-pointer ${
                    selectedAnswers[currentQuestionIndex] === answer
                      ? "bg-blue-200" // Highlight selected answer
                      : "bg-white"
                  }`}
                  onClick={() => handleAnswerSelect(answer)}
                >
                  {answer}
                </li>
              ))}
            </ol>

            <div className="flex gap-4 mt-4">
              <button
                onClick={prevQuestion}
                disabled={currentQuestionIndex === 0}
              >
                Previous
              </button>
              <button onClick={nextQuestion}>
                {currentQuestionIndex === questions.length - 1
                  ? "Finish"
                  : "Next"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizPage;
