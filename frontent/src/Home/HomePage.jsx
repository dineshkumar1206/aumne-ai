import React, { useEffect } from "react";
import BannerSection from "./BannerSection";
import { useLocation } from "react-router-dom";

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 150); // video + layout ready
      }
    }
  }, [location]);
  return (
    <div id="home" className="">
      <BannerSection />
    </div>
  );
};

export default HomePage;