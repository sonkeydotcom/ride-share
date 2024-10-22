import { Link } from "react-router-dom";

function QuizBanner() {
  return (
    <div className="w-full gap-4 flex-col p-4 rounded-lg border-2 h-[50%] bg-[url('/cuate.png')] bg-right bg-no-repeat bg-[#EEEEEE] bg-contain my-6">
      <h1 className="text-3xl font-extrabold mb-4">
        {" "}
        {/* Added mb-4 for margin-bottom */}
        See cost estimate to ride using
        <br />
        RideShare cost estimator
      </h1>
      <Link to="/quiz">
        <button className="mt-2 rounded-lg bg-black text-sm text-center text-white px-4 py-2">
          {" "}
          {/* Optional: Added mt-2 for margin-top, if needed */}
          Estimate my ride cost
        </button>
      </Link>

      {/* <img src="/cuate.png" alt="divider" className="w-full h-1" /> */}
    </div>
  );
}

export default QuizBanner;
