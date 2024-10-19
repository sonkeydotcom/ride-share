import { Outlet } from "react-router-dom";
import Footer from "../footer";
// import QuizHeader from "./quiz-header";
const QuizLayout = () => {
  return (
    <>
      {/* <QuizHeader /> */}
      <Outlet />
      <Footer />
    </>
  );
};

export default QuizLayout;
