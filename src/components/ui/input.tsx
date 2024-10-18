import React from "react";
import { Location } from "iconsax-react"; // Using this as the icon

interface CustomInputProps {
  title: string; // Label for the input field
  placeholder: string; // Placeholder text for the input field
}

const CustomInput: React.FC<CustomInputProps> = ({ title, placeholder }) => {
  return (
    <div className="mx-2 my-2">
      <label htmlFor={title}>{title}</label>
      <br />
      <div className="flex flex-row items-center rounded-sm border border-[#cccccc] p-1">
        {/* Use the imported Location icon */}
        <Location className="h-5 w-5 mr-2" />

        <input
          className="flex-1 p-1 border-none focus:outline-none"
          type="text"
          placeholder={placeholder}
          id={title} // added to match the label's htmlFor
        />
      </div>
    </div>
  );
};

export default CustomInput;
