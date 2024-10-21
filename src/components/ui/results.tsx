import { ArrowLeft, ArrowRight } from "iconsax-react";
import { useState } from "react";
import { FaDotCircle } from "react-icons/fa";

const results = [
  {
    title: "Solo rider",
    persona:
      "You enjoy the independence of commuting alone but might consider rideshare to reduce cost and contribute to sustainability.",
    carbonfootprint: "High",
    recommendation:
      "Consider solo riding for a few days or trips, and evaluate the carbon footprint.",
    leftImages: ["/styleorange.png", "/purple.png"],
    rightImages: ["/greenstar.png", "/kmblue.png"],
    bgColor: "#FFFFF4",
    titleBgColor: "#F9F9F9",
    subFontColor: "#000000",
  },
  {
    title: "Cash rider",
    persona:
      "You enjoy the independence of commuting alone but might consider rideshare to reduce cost and contribute to sustainability.",
    carbonfootprint: "High",
    recommendation:
      "Consider solo riding for a few days or trips, and evaluate the carbon footprint.",
    leftImages: ["/styleorange.png", "/purple.png"],
    rightImages: ["/greenstar.png", "/kmblue.png"],
    bgColor: "#E3FFF6",
    titleBgColor: "#C9FCE6",
    subFontColor: "#00796B",
  },
  // Add more result entries here...
];

const Results = () => {
  const [score, setScore] = useState(0); // Initially set to 0, update logic later based on actual score
  const share = () => {
    // Functionality for sharing
  };
  const retake = () => {
    // Functionality for retaking the quiz
  };

  // Selecting result based on score. Adjust logic if score is more complex
  const result = results[score % results.length]; // Example score-based selection

  return (
    <div
      className="rounded-lg border-2 w-full h-[450px] flex justify-between py-5"
      style={{ backgroundColor: result.bgColor }}
    >
      {/* Left Section - Images in a column */}
      <div className="flex flex-col justify-between gap-10 py-10">
        {result.leftImages.map((imageSrc, index) => (
          <div key={index}>
            <img
              src={imageSrc}
              alt={`LeftImage-${index}`}
              className="w-[50px] h-20"
            />
          </div>
        ))}
      </div>

      <div
        className="w-[500px] px-10"
        style={{ backgroundColor: result.titleBgColor }}
      >
        {/* Current Quiz Result */}
        <h4
          className="text-center text-xl mb-5"
          style={{ color: result.subFontColor }}
        >
          Your Personality Ride style is!
        </h4>
        <div className="border-4 rounded-xl my-5 justify-center content-center flex flex-row gap-6 items-center py-5">
          <FaDotCircle />
          <h1
            className="text-center text-4xl capitalize font-semibold"
            style={{ color: result.subFontColor }}
          >
            {result.title}
          </h1>
          <FaDotCircle />
        </div>
        <p className="text-center mb-3" style={{ color: result.subFontColor }}>
          {result.persona}
        </p>
        <p className="text-center mb-3">
          <strong>Carbon Footprint:</strong> {result.carbonfootprint}
        </p>
        <div className="border rounded-lg border-[#C4D3DE] bg-[#E5F4FF] p-4 items-center">
          <p className="text-center text-[#000000]">{result.recommendation}</p>
        </div>

        {/* Buttons */}
        <div className="flex justify-between gap-4 mt-4">
          <button
            onClick={share}
            className="flex border rounded-md px-2 py-1 flex-row gap-2 justify-center content-center items-center"
          >
            <ArrowLeft size="18" color="#000000" />
            Previous
          </button>
          <button
            className="border rounded-md px-2 py-1 bg-black color-white text-white flex flex-row gap-2 justify-center content-center items-center"
            onClick={retake}
          >
            Retake quiz
          </button>
        </div>
      </div>

      {/* Right Section - Images in a column */}
      <div className="flex flex-col justify-between gap-10 py-10">
        {result.rightImages.map((imageSrc, index) => (
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
  );
};

export default Results;
