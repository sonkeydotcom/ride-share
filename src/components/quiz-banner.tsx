import { Link } from "react-router-dom";

function QuizBanner() {
  return (
    <div className="w-full gap-4 flex-col p-4 rounded-lg border-2 h-[50%] bg-[url('/faces.svg')] bg-right bg-no-repeat bg-[#EEEEEE] bg-contain my-6">
      <h1 className="text-3xl font-extrabold mb-4">
        {" "}
        {/* Added mb-4 for margin-bottom */}
        Learn what type of Rider you are.
        <br />
        Take the rider quiz!
      </h1>
      <Link to="/quiz">
        <button className="mt-2 rounded bg-black text-sm text-center text-white p-2">
          {" "}
          {/* Optional: Added mt-2 for margin-top, if needed */}
          Take quiz
        </button>
      </Link>
    </div>
  );
}

export default QuizBanner;
