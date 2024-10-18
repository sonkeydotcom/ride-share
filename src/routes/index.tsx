import CustomInput from "../components/ui/input";
import Button from "../components/ui/button";
import RatesInfo from "../components/rates";
import Faq from "../components/faq";
import QuizBanner from "../components/quiz-banner";
import Footer from "../components/footer";

// Define your component in a separate file

const Index = () => {
  return (
    <>
      <div className="px-10 py-10 bg-[url('/vector.png')] bg-no-repeat bg-contain bg-right h-[450px]">
        {/* <div className="bg-[url('/vector.png')] bg-no-repeat bg-contain bg-right h-[300px]"></div> */}
        <div className="flex flex-row w-full contents-center ">
          <div className="w-1/2 h-[500px] p-4 ">
            <h1 className="text-5xl font-bold leading-tight my-2">
              How much does
              <br /> my <span className="text-[#E9B902]">RideShare</span>
              <br /> ride{" "}
              <div className=" relative inline flex-col items-center">
                {" "}
                {/* Use flex column and center the content */}
                cost?
                <img
                  src="/line.svg"
                  className="w-[100px] mt-2 left-50 "
                  alt="vector"
                />{" "}
                {/* Add margin-top for spacing */}
              </div>
            </h1>

            <p className="text-[#757575]">
              Plan your next trip with RideShare, see the cost estimate
            </p>

            <CustomInput title="Pickup position" placeholder="Enter location" />
            <CustomInput
              title="Destination position"
              placeholder="Enter location"
            />

            <Button title="See price estimate" />
          </div>
          <div className="w-1/2 h-[500px] rounded-sm">
            <img src="/driver.svg" className="h-full w-full" alt="vector" />
          </div>
        </div>
        <RatesInfo />
        <QuizBanner />
        <Faq />
        <Footer />
      </div>
    </>
  );
};

export default Index;
