import React from "react";
import PricingFeatures from "./PricingFeatures";

const PricingCard = ({ pricing }) => {
  const {name,price,description,features}=pricing;
  // console.log(pricing);
  return (
    <div className="flex flex-col border bg-amber-600  rounded-2xl p-4">
      <div>
        <h1 className="text-5xl">{name}</h1>
        <h4 className="text-3xl">{price}</h4>
      </div>
      <div className="text-white mt-2 flex-1">
        <p>{description}</p>
        {
          features.map((feature,index)=><PricingFeatures key={index} feature={feature}/>)
        }
      </div>
      <button className="mt-3 btn btn-warning w-full">Subscribe</button>
    </div>
  );
};

export default PricingCard;
