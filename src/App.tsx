import React from "react";
import CustomInput from "./components/ui/input";
import Button from "./components/ui/button";

function App() {
  return (
    <>
      <div className="flex flex-row px-2 w-full contents-center ">
        <div className="w-1/2 h-[500px] p-4 bg-gray-100">
          <h1>How much does my RideShare ride cost?</h1>
          <p>Plan your next trip with RideShare, see the cost estimate</p>

          <CustomInput title="Pickup position" placeholder="Enter location" />
          <CustomInput
            title="Destination position"
            placeholder="Enter location"
          />
          <Button title="See price estimate" />
        </div>
        <div className="w-1/2 h-[500px] p-4 bg-red-100 rounded-sm">
          <h1>Hello</h1>
        </div>
      </div>
    </>
  );
}

export default App;
