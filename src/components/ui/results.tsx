import { CircleDot, Share2 } from "lucide-react";
import ShareModal from "./share";
import { useState } from "react";

const results = [
  {
    title: "Solo rider",
    persona: "You rock being alone.",
    recommendation:
      "Consider solo riding for a few days or trips, and evaluate the carbon footprint.",
    leftImages: ["/styleorange.png", "/purple.png"],
    rightImages: ["/greenstar.png", "/kmblue.png"],
    primaryBgColor: "#FFFFF4",
    secondaryBgColor: "#F2F2E6",
    titleBgColor: "#FFC727",
    subFontColor: "#000000",
  },
  {
    title: "Eco-warrior",
    persona: "We care about the environment as you do.",
    recommendation:
      "As as Eco-Friendly Rider, you care deeply about the environment and always look for wways to reduce your carbon footprint. By choosing ridesahre, you'll be able to make a  difference by sharing rides convenientlly with others and cutting down on carbon emission.",
    leftImages: ["/styleorange.png", "/purple.png"],
    rightImages: ["/greenstar.png", "/kmblue.png"],
    primaryBgColor: "#EEFFE6",
    secondaryBgColor: "#E3FFDB",
    titleBgColor: "#5CC73B",
    subFontColor: "#434343",
  },
  {
    title: "Cash Saver",
    persona: "More cash on-the-go.",
    recommendation:
      "As a cash Saver, you value saving money above all else when commuting. by using RideShare, youll cut cut down transportation costs whule sharing your ride with others going your way.. Why pay more when you can ride for less? Every ride shared is more cash in yoyr pockets",
    leftImages: ["/styleorange.png", "/purple.png"],
    rightImages: ["/greenstar.png", "/kmblue.png"],
    primaryBgColor: "#E5F4FF",
    secondaryBgColor: "##D3E2ED",
    titleBgColor: "#206AFF",
    subFontColor: "#434343",
  },
  {
    title: "Rockstar",
    persona: "Ride-Avatar: Master of all elemets.",
    recommendation:
      "As a ride sharing rockstar you;ve mastered the art of ride-sharing, balancing cost savings, conenience and safety like a pro. Wether youre driving or riding youre all about maximizing every commute. wth rideShare youll continue to share rides seamlessly and make an impact by reducing traffic and barbon emmissions.",
    leftImages: ["/styleorange.png", "/purple.png"],
    rightImages: ["/greenstar.png", "/kmblue.png"],
    primaryBgColor: "#F2E8FE",
    secondaryBgColor: "#DFD5EB",
    titleBgColor: "#7F56D9",
    subFontColor: "##434343",
  },
];

const Results = ({ score }) => {
  const [showShareModal, setShowShareModal] = useState(false);

  // Get the appropriate result based on score
  const getResult = (score: number) => {
    if (score >= 16) return results[0];
    if (score >= 13) return results[1];
    if (score <= 6) return results[2];
    if (score <= 11) return results[3];
    return results[0]; // Default fallback
  };

  const result = getResult(score);

  const share = () => {
    setShowShareModal(true);
  };

  const retake = () => {
    // Implement retake functionality
    console.log("Retaking quiz...");
  };

  return (
    <>
      <div
        className="rounded-lg border-2 w-full h-auto min-h-[450px] flex justify-between "
        style={{ backgroundColor: result.primaryBgColor }}
      >
        {/* Left Images */}
        <div className="flex flex-col justify-between py-10">
          {result.leftImages.map((imageSrc, index) => (
            <div key={`left-${index}`} className="w-12 h-20">
              <img
                src={imageSrc}
                alt={`Left decoration ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="flex-1 max-w-lg px-10">
          <h4
            className="text-center font-semibold text-sm mb-5"
            style={{ color: result.subFontColor }}
          >
            Your Personality Ride style is!
          </h4>

          <div
            className="border-black border-4 rounded-xl my-5 flex items-center justify-center gap-6 py-5"
            style={{ backgroundColor: result.titleBgColor }}
          >
            <CircleDot className="w-6 h-6" />
            <h1 className="text-4xl text-white font-bold capitalize">
              {result.title}
            </h1>
            <CircleDot className="w-6 h-6" />
          </div>

          <p
            className="text-center text-xl mb-3"
            style={{ color: result.subFontColor }}
          >
            {result.persona}
          </p>

          <div
            className="border rounded-xl border-[#C4D3DE] py-6 px-4"
            style={{ backgroundColor: result.secondaryBgColor }}
          >
            <p className="text-center text-sm text-black">
              {result.recommendation}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between gap-4 mt-4">
            <button
              onClick={share}
              className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-md text-sm"
            >
              <Share2 className="w-4 h-4" />
              Share on socials
            </button>
            <button
              onClick={retake}
              className="border border-black px-4 py-2 rounded-md text-sm"
            >
              Retake quiz
            </button>
          </div>
        </div>

        {/* Right Images */}
        <div className="flex flex-col justify-between py-10">
          {result.rightImages.map((imageSrc, index) => (
            <div key={`right-${index}`} className="w-16 h-16">
              <img
                src={imageSrc}
                alt={`Right decoration ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
      <ShareModal
        setShowShareModal={setShowShareModal}
        showShareModal={showShareModal}
      />
    </>
  );
};

export default Results;
