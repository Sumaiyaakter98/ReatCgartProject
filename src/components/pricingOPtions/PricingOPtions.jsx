import React, { use } from "react";
import PricingCard from "../pricingCard/PricingCard";
import DaisuCard from "../pricingCard/DaisuCard";

const PricingOPtions = ({ pricingPromise }) => {
  const pricingData = use(pricingPromise);
  console.log(pricingData);
  return (
    <div>
      <h2 className="text-5xl">Get Our Menbership</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* {pricingData.map((pricing) => (
          <PricingCard key={pricing.id} pricing={pricing} />
        ))} */}
        {pricingData.map((pricing) => (
          <DaisuCard key={pricing.id} pricing={pricing} />
        ))}
      </div>
    </div>
  );
};

export default PricingOPtions;
