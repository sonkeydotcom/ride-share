import { DollarCircle, Map1, Tag } from "iconsax-react";

const rate = [
  {
    title: "operating  fee",
    icon: <DollarCircle size="32" color="#000000" />,
    description: "A flat fee applied to all rides regardless of distance.",
  },
  {
    title: "basic rate",
    icon: <Tag size="32" color="#000000" />,
    description: "A flat fee applied to all rides regardless of distance.",
  },
  {
    title: "busy times and area",
    icon: <Map1 size="32" color="#000000" />,
    description: "A flat fee applied to all rides regardless of distance.",
  },
  {},
];

const RatesInfo = () => {
  return (
    <div className="my-6">
      <h1 className="font-bold font-red">How rates are calculated</h1>
      <p>
        RideShare charges a flat fee plus an additional cost per mile driven.
        Fees vary depending on the type of vehicle, time of day, and weather
        conditions.
      </p>
      <div className="flex flex-wrap justify-between my-4">
        {/* Changed flex-row to flex-wrap */}
        {rate.map(
          (
            rateItem,
            index // Renamed rate to rateItem for clarity
          ) => (
            <div key={index} className="w-1/2 p-2 my-2">
              {/* Changed w-2/2 to w-1/2 */}
              {rateItem.icon}
              <h1 className="font-bold text-black my-2 capitalize">
                {rateItem.title}
              </h1>{" "}
              {/* Fixed typo from tile to title */}
              <p>{rateItem.description}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default RatesInfo;
