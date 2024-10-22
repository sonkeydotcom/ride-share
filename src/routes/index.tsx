import { useState } from "react";
import CustomInput from "../components/ui/input";
import Button from "../components/ui/button";
import RatesInfo from "../components/rates";
import Faq from "../components/faq";
import QuizBanner from "../components/quiz-banner";
import Footer from "../components/footer";
import Banner from "../components/ui/banner";

const Index = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");

  const handleEstimate = () => {
    // Handle price estimation logic here
    console.log("Calculating estimate for:", { pickup, destination });
  };

  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="relative py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Column - Content */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                How much does
                <br /> my <span className="text-amber-500">RideShare</span>
                <br /> ride cost?
                <div className="relative inline-block mt-2">
                  <img
                    src="/line.svg"
                    className="w-24 h-auto"
                    alt="decorative underline"
                  />
                </div>
              </h1>

              <p className="text-gray-600">
                Plan your next trip with RideShare, see the cost estimate
              </p>

              <div className="space-y-4">
                <CustomInput
                  title="Pickup position"
                  placeholder="Enter location"
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                />
                <CustomInput
                  title="Destination position"
                  placeholder="Enter location"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                />
                <Button title="See price estimate" onClick={handleEstimate} />
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative h-64 lg:h-full">
              <img
                src="/driver.svg"
                className="w-full h-full object-contain"
                alt="RideShare driver illustration"
              />
            </div>
          </div>
        </section>

        {/* Additional Sections */}
        <RatesInfo />
        <Banner />
        <Faq />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
