import React from "react";
import BenefitsActs from "./BenefitsActs";
import HowActs from "./HowActs";
import HorizontalScrollVideo from "../Home/HorizontalScrollImage";

const Benefits = () => {
  return (
    <div className="bg-linear-to-r from-[#02060d] via-[#071827]  to-[#0e3b4e]">
      <BenefitsActs />
      <HowActs />
      <HorizontalScrollVideo/>
    </div>
  );
};

export default Benefits;
