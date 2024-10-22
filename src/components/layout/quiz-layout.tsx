import { Outlet } from "react-router-dom";
import Footer from "../footer";
import Faq from "../faq";
import QuizBanner from "../quiz-banner";
// import QuizHeader from "./quiz-header";
const QuizLayout = () => {
  return (
    <>
      {/* <QuizHeader /> */}

      <div className="min-h-screen bg-white">
        {" "}
        <div className="w-full h-[500px] mb-5">
          <img
            src="/quiztop.svg"
            alt="Quiz Background"
            className="w-full h-full object-cover"
          />
        </div>
        <main className="container mx-auto px-4 md:px-6 lg:px-8">
          <Outlet />
          <QuizBanner />
          <Faq />
          <Footer />
        </main>
      </div>
    </>
  );
};

export default QuizLayout;
