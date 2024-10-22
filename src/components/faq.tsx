import { ArrowDown2, ArrowUp2 } from "iconsax-react";
import { useState } from "react";

const faqs = [
  {
    question: "What is rideshare?",
    answer:
      "Rideshare is a platform that connects people with ridesharing services.",
  },
  {
    question: "How does rideshare work?",
    answer:
      "Rideshare is a platform that connects people with ridesharing services.",
  },
  {
    question: "Is rideshare available now?",
    answer:
      "Rideshare is a platform that connects people with ridesharing services.",
  },
];

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null); // State to track the index of the currently open FAQ

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle open index
  };

  const isOpen = (index: number) => openIndex === index;

  return (
    <>
      <h1 className="text-3xl my-2 font-bold">Frequently Asked Questions</h1>

      {faqs.map(
        (
          faq,
          index: number // Explicitly type the index parameter
        ) => (
          <div
            key={index}
            onClick={() => handleToggle(index)} // Use index to toggle
            className="my-4 cursor-pointer rounded border py-3 px-2" // Added cursor and padding for better UX
          >
            <div className="flex flex-row justify-between mb-2">
              <h1 className="font-bold text-sm">{faq.question}</h1>

              {isOpen(index) ? (
                <ArrowUp2 size="20" color="#000000" />
              ) : (
                <ArrowDown2 size="20" color="#000000" />
              )}
            </div>
            {openIndex === index && (
              <p className="text-sm font-[#1E1E1E]">{faq.answer}</p>
            )}{" "}
            {/* Show answer if index matches */}
          </div>
        )
      )}
    </>
  );
};

export default Faq;
