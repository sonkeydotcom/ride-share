import { ArrowLeft, ArrowRight } from "iconsax-react";
import { useState } from "react";
import Results from "../components/ui/results";

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
    question: "How do you usually get around, to work or school?",
    answers: [
      { answer: "Drive Alone", points: 5 },
      { answer: "Take public transport", points: 10 },
      { answer: "Ride with friends", points: 7 },
      { answer: "Others", points: 2 },
    ],
    correctAnswer: "Uber",
    leftImages: ["/styleorange.png", "/purple.png"], // Left side images
    rightImages: ["/greenstar.png", "/kmblue.png"], // Right side images
  },
  {
    question: "What matters to you the most when it comes to transportation?",
    answers: [
      { answer: "Affordability", points: 8 },
      { answer: "Convenience", points: 10 },
      { answer: "Environmental Sustainability", points: 7 },
      { answer: "Safety", points: 9 },
    ],
    correctAnswer: "Public Transportation",
    leftImages: ["/headsetpurple.png", "/polygonyellow.png"],
    rightImages: ["/environs.png", "/nature.png"],
  },
  {
    question: "Would you use a Ride-sharing app for daily commutes?",
    answers: [
      { answer: "Yes, I enjoy sharing rides", points: 10 },
      { answer: "No, I like to ride alone", points: 5 },
    ],
    correctAnswer: "Taxi",
    leftImages: ["/stylepurple.png", "/blue.png"], // Left side images
    rightImages: ["/yellowstar.png", "/kmgreen.png"], // Right side images
  },
  {
    question: "Would you switch transportation modes for a 20% savings?",
    answers: [
      { answer: "Yes", points: 10 },
      { answer: "No", points: 5 },
      { answer: "Maybe", points: 7 },
    ],
    correctAnswer: "Taxi",
    leftImages: ["/headsetpurple.png", "/polygonyellow.png"], // Left side images
    rightImages: ["/environs.png", "/nature.png"], // Right side images
  },
  // Add more questions and images here...
];

// QuizCompletion component to display after the quiz ends
const QuizCompletion = ({ selectedAnswers, questions }) => {
  return (
    <div className=" w-full py-10 px-10">
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
              {selectedAnswers[index]?.answer || "No answer"}
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
      [currentQuestionIndex]: answer, // Store the whole answer object
    }));
  };

  return (
    <div className="p-10">
      {/* Quiz Introduction */}

      <div className="gap-4">
        <h1> How it works </h1>
        <p className="text-[#888]">
          Learn about ridesahre personality ride style in 3 steps{" "}
        </p>
        <div className="flex flex-row gap-4 my-4">
          {how.map((item, index) => (
            <div key={index} className="w-1/2">
              <h1 className="my-2 text-lg">{index + 1}.</h1>
              <h1>{item.title}</h1>
              <p className="text-sm">{item.text}</p>
            </div>
          ))}
        </div>

        <br />

        <div>
          <h1 className="text-2xl">
            We have said a lot already, time for your,
            <br /> quiz, and we hope you are set, 'cause we are!
          </h1>
          <p className="text-sm my-2 text-[#888]">
            A short, exciting, unique quiz awaits you.
          </p>
          <button
            className="border rounded-md px-2 py-2 my-4 text-sm "
            onClick={startQuiz}
          >
            Take your quiz
          </button>
        </div>

        {/* Current Quiz Question */}

        {isQuizCompleted ? (
          <Results />
        ) : (
          <div className="rounded-lg border-2  w-full h-[450px] flex justify-between py-5 bg-[#FFFFF4]">
            {/* Left Section - Images in a column */}
            <div className="flex flex-col justify-between gap-10 py-10">
              {currentQuestion.leftImages.map((imageSrc, index) => (
                <div key={index}>
                  <img
                    src={imageSrc}
                    alt={`LeftImage-${index}`}
                    className="w-[50px] h-20"
                  />
                </div>
              ))}
            </div>

            {/* Middle Section - Question */}

            <div className="bg-[#FFFFF4]">
              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-2 my-4">
                <div
                  className="bg-orange-600 h-2 rounded-full"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>

              {/* Current Quiz Question */}
              <div className="w-full py-10 px-10">
                <h1 className="text-center text-xl mb-5">
                  {currentQuestion.question}
                </h1>

                {/* Alphabetical List of Answers */}
                <ol type="a">
                  {currentQuestion.answers.map((answerObj, index) => (
                    <li
                      key={index}
                      className={`border rounded-lg p-2 m-2 cursor-pointer ${
                        selectedAnswers[currentQuestionIndex]?.answer ===
                          answerObj.answer && "bg-blue-200"
                      }`}
                      onClick={() => handleAnswerSelect(answerObj)}
                    >
                      {answerObj.answer}
                    </li>
                  ))}
                </ol>

                <div className="flex justify-between gap-4 mt-4">
                  <button
                    onClick={prevQuestion}
                    disabled={currentQuestionIndex === 0}
                    className="flex border rounded-md px-2 py-1 flex-row gap-2 justify-center content-center items-center"
                  >
                    <ArrowLeft size="18" color="#000000" />
                    Previous
                  </button>
                  <button
                    className="border rounded-md px-2 py-1 bg-black color-white text-white flex flex-row gap-2 justify-center content-center items-center"
                    onClick={nextQuestion}
                  >
                    {currentQuestionIndex === questions.length - 1
                      ? "Finish"
                      : "Next question "}
                    <ArrowRight size="18" color="#ffffff" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Section - Images in a column */}
            <div className="flex flex-col justify-between gap-10 py-10">
              {currentQuestion.rightImages.map((imageSrc, index) => (
                <div key={index}>
                  <img
                    src={imageSrc}
                    alt={`RightImage-${index}`}
                    className="w-16 h-16"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizPage;
