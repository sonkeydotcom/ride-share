import { useState } from "react";
import Results from "../components/ui/results";
import Form from "../components/ui/form";
import MainQuiz from "../components/main-quiz";

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

interface QuizProps {
  // Add any props your quiz component needs
  questions?: string[];
}

const QuizPage: React.FC<QuizProps> = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [quizScore, setQuizScore] = useState(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  // const [isQuizStarted, setIsQuizStarted] = useState<boolean>(false);
  // const startQuiz = () => {
  //   setIsQuizStarted(true);
  // };

  return (
    <>
      <div>
        {/* Quiz Introduction */}

        <div className="gap-4">
          <h1 className="font-semibold mb-1 uppercase"> How it works </h1>
          <p className="text-[#888] text-sm">
            Learn about ridesahre personality ride style in 3 steps{" "}
          </p>
          <div className="flex flex-col md:flex-row gap-4 my-4">
            {how.map((item, index) => (
              <div key={index} className="m-full md:w-1/2">
                <h1 className="my-2 text-xl font-bold">{index + 1}.</h1>
                <h1 className="font-semibold my-1">{item.title}</h1>
                <p className="text-sm">{item.text}</p>
              </div>
            ))}
          </div>

          <br />

          <div>
            <h1 className="text-3xl font-medium">
              We have said a lot already, time for your, quiz, and we hope you
              are set, 'cause we are!
            </h1>
            <p className="text-sm my-2 text-[#888]">
              A short, exciting, unique quiz awaits you.
            </p>
            <button
              className="border bg-[#FFC727] rounded-md px-2 py-2 my-4 text-sm font-medium "
              // onClick={startQuiz}
            >
              Take your quiz
            </button>
          </div>

          {/* Current Quiz Question */}

          {isQuizCompleted ? (
            <Results score={quizScore} />
          ) : (
            <MainQuiz
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
              quizScore={quizScore}
              setQuizScore={setQuizScore}
            />
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
