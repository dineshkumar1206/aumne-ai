"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ImageCarousel from "./ImageCarousel";
import DataGrowthSection from "../Home/DataGrowthSection";


gsap.registerPlugin(ScrollTrigger);

export default function WhyAumneCard() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative pt-24 pb-24 text-white overflow-hidden"
    >
      {/* MAIN HEADING (NO CHANGE) */}
      <div className="max-w-[1550px] mx-auto text-center mb-5">
        <h2 className="text-2xl md:text-5xl font-semibold tracking-tight">
          The Aumne Solution
        </h2>
      </div>

      {/* SUB HEADING + PARAGRAPH (CENTERED) */}
      <div className="max-w-5xl mx-auto text-center px-6">
        <h3 className="text-5xl md:text-3xl font-bold text-[#0D7EB6] mb-3">
          From Legacy IVR to Conversational AI—Automatically
        </h3>

        <p className="text-white/80 text-lg leading-relaxed mb-2">
          Aumne is purpose-built to modernize what already exists,
          not force enterprises to start from scratch.
        </p>
      </div>

      {/* CENTER CALLOUT BOX (NO STYLE CHANGE) */}
      <div className=" flex justify-center px-4">
        <div className="max-w-6xl w-full rounded-2xl 
          bg-linear-to-br from-[#0a0a0a] via-[#101c2f] to-[#036ffd]/20 
          border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)]
          px-8 py-7 text-center pt-2 pb-2 -mb-4"
        >
          <p className="text-base md:text-lg text-white leading-relaxed">
            Our agentic, AI-native platform turns IVR modernization from a
            one-time, high-risk project into a{" "}
            <span className="text-[#0D7EB6] font-medium">
              continuous platform capability
            </span>.
          </p>
        </div>
      </div>

      {/* IMAGE ROW (4 IMAGES) */}
      <div className=" max-w-7xl mx-auto px-6">
        <ImageCarousel/>
      </div>

      {/* DATA GROWTH CARDS (5 IN ONE LINE) */}
      <div className="-mb-30">
        <DataGrowthSection/>
      </div>
    </section>
  );
}
