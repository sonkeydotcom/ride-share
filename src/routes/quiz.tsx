import { ArrowLeft, ArrowRight } from "iconsax-react";
import { useState } from "react";
import Results from "../components/ui/results";
import Form from "../components/ui/form";

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
      { answer: "A. Drive Alone", points: 2 },
      { answer: "B. Take public transport", points: 2 },
      { answer: "C. Ride with friends", points: 2 },
      { answer: "D. Others", points: 2 },
    ],
    leftImages: ["/styleorange.png", "/purple.png"], // Left side images
    rightImages: ["/greenstar.png", "/kmblue.png"], // Right side images
  },
  {
    question: "What matters to you the most when it comes to transportation?",
    answers: [
      { answer: "A. Affordability", points: 3 },
      { answer: "B. Convenience", points: 2 },
      { answer: "C. Environmental Sustainability", points: 1 },
      { answer: "D. Safety", points: 9 },
    ],
    leftImages: ["/headsetpurple.png", "/polygonyellow.png"],
    rightImages: ["/environs.png", "/nature.png"],
  },
  {
    question: "Would you use a Ride-sharing app for daily commutes?",
    answers: [
      { answer: "A. Yes, I enjoy sharing rides", points: 1 },
      { answer: "B. No, I like to ride alone", points: 4 },
    ],
    leftImages: ["/stylepurple.png", "/blue.png"], // Left side images
    rightImages: ["/yellowstar.png", "/kmgreen.png"], // Right side images
  },
  {
    question: "Would you switch transportation modes for a 20% savings?",
    answers: [
      { answer: "A. Yes", points: 1 },
      { answer: "B. No", points: 4 },
    ],
    leftImages: ["/headsetpurple.png", "/polygonyellow.png"], // Left side images
    rightImages: ["/environs.png", "/nature.png"], // Right side images
  },
  // Add more questions and images here...
];

// Main QuizPage component
const QuizPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Store the selected answer for each question
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  // Calculate quiz progress
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  const nextQuestion = () => {
    if (!selectedAnswers[currentQuestionIndex]) {
      return;
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      const finalScore = calculateScore(); // Calculate score when quiz is completed
      setQuizScore(finalScore); // Add this state to store the score
      // setIsQuizCompleted(true);
      setIsModalOpen(true);
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

  const calculateScore = () => {
    let totalPoints = 0;

    // Loop through all selected answers
    Object.values(selectedAnswers).forEach((answer) => {
      if (answer && answer.points) {
        totalPoints += answer.points;
      }
    });

    console.log("Total Quiz Score:", totalPoints);
    return totalPoints;
  };

  return (
    <>
      <div>
        {/* Quiz Introduction */}

        <div className="gap-4">
          <h1 className="font-semibold mb-1 uppercase"> How it works </h1>
          <p className="text-[#888] text-sm">
            Learn about ridesahre personality ride style in 3 steps{" "}
          </p>
          <div className="flex flex-row gap-4 my-4">
            {how.map((item, index) => (
              <div key={index} className="w-1/2">
                <h1 className="my-2 text-xl font-bold">{index + 1}.</h1>
                <h1 className="font-semibold my-1">{item.title}</h1>
                <p className="text-sm">{item.text}</p>
              </div>
            ))}
          </div>

          <br />

          <div>
            <h1 className="text-3xl font-medium">
              We have said a lot already, time for your,
              <br /> quiz, and we hope you are set, 'cause we are!
            </h1>
            <p className="text-sm my-2 text-[#888]">
              A short, exciting, unique quiz awaits you.
            </p>
            <button
              className="border bg-[#FFC727] rounded-md px-2 py-2 my-4 text-sm font-medium "
              onClick={startQuiz}
            >
              Take your quiz
            </button>
          </div>

          {/* Current Quiz Question */}

          {isQuizCompleted ? (
            <Results score={quizScore} />
          ) : (
            <div className="rounded-lg border-2  w-full h-[450px] flex justify-between py-5 bg-[#FFFFF4]">
              {/* Left Section - Images in a column */}
              <div className="flex flex-col justify-between gap-10 py-10">
                {currentQuestion.leftImages.map((imageSrc, index) => (
                  <div key={index} className="w-12 h-20 p-0">
                    <img
                      src={imageSrc}
                      alt={`LeftImage-${index}`}
                      className="w-full h-full object-contain"
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
                  <h1 className="text-center font-medium text-xl mb-5">
                    {currentQuestion.question}
                  </h1>

                  {/* Alphabetical List of Answers */}
                  <ol type="a">
                    {currentQuestion.answers.map((answerObj, index) => (
                      <li
                        key={index}
                        className={`border font-medium rounded-lg p-2 m-2 cursor-pointer ${
                          selectedAnswers[currentQuestionIndex]?.answer ===
                            answerObj.answer && "bg-[#FFC727]"
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
                  <div key={index} className="w-16 h-16">
                    <img
                      src={imageSrc}
                      alt={`RightImage-${index}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <Form
        setIsQuizCompleted={setIsQuizCompleted}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </>
  );
};

export default QuizPage;
