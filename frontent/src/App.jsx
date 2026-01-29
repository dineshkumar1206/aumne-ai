import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import HomePage from "./Home/HomePage";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import SolutionBanner from "./Solutions/SolutionBanner";
import Solution from "./Solutions/Solution";
import Benefits from "./Benefits/Benefits";
import StatisticsSection from "./Home/StatisticsSection";
import ROICalculator from "./RoiCalculator/ROICalculator";
import GSIPartnership from "./Partnership/GSIPartnership";
import ScrollToTop from "./Components/ScrollToTop";
import VideoBackground from "./Components/VideoBackground";
import TransformationComparison from "./Solutions/TransformationComparison";
import EcosystemAudience from "./Solutions/EcosystemAudience";
import BenefitsActs from "./Benefits/BenefitsActs";
import OutcomesSection from "./Solutions/OutcomesSection";
import TransformationWindow from "./Solutions/TransformationWindow";
import LivedExperienceSection from "./Solutions/LivedExperienceSection";
import Enterprise from "./Solutions/Enterprise";
import Global from "./Solutions/Global";

const App = () => {
  return (
    <>
      
      <Navbar />
      <VideoBackground/>
      <div className="fixed inset-0 z-10 bg-black/50 pointer-events-none" />
      <main className="relative z-20">
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/solutions" element={<Solution />} />
        <Route path="/benefits" element={<Benefits />} />
        <Route path="/industry-trends" element={<StatisticsSection/>}/>
        <Route path="/roi-calculator" element={<ROICalculator/>}/>
        <Route path="/gst-partnership" element={<GSIPartnership/>} /> */}

      </Routes>
      <Global/>
      <Footer />
      </main>
    </>
  );
};

export default App;
