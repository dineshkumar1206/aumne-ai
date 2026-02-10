"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function VelocityReliabilitySection() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current || !imageRef.current) return;

    gsap.fromTo(
      imageRef.current,
      { y: "10%" },
      {
        y: "-10%",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }, []);

  

  return (
    <section
  ref={sectionRef}
  className="relative min-h-screen -mt-30 text-white overflow-hidden py-25 md:py-28 flex items-center"
>
  <div className="mx-auto max-w-[1550px] px-6 md:px-10 lg:px-14">
    <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

      {/* TEXT SECTION — first on mobile */}
      <div className="
        flex-1 flex flex-col
        py-6 md:py-10 px-2 md:px-5
        justify-center space-y-6 lg:space-y-8
        text-center lg:text-left
        order-1 lg:order-2
      ">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4 lg:mb-10">
          The Core Problem
        </h2>

        {/* Main Content */}
        <div>
          <h3 className="bg-gradient-to-br from-[#63D5FF] to-[#6C7CFF] bg-clip-text text-transparent text-xl md:text-2xl lg:text-3xl font-bold mb-4 leading-tight">
            Legacy IVR Is the Bottleneck to AI-Native Customer Service
          </h3>

          <p className="text-gray-300 text-lg md:text-xl leading-relaxed mx-auto lg:mx-0 max-w-2xl">
            Nearly 75% of enterprises still rely on legacy, menu-driven IVR,
            even as customer expectations have shifted decisively toward
            natural, conversational experiences.
            <br />
            <br />
            Voice remains the front door of customer service — yet it’s the
            weakest link.
          </p>
        </div>

        {/* Stats Row */}
        <div className="mt-14 flex flex-col md:flex-row items-center md:items-stretch justify-between gap-8 text-white">

          {/* Item 1 */}
          <div className="text-center md:text-left w-full md:w-auto">
            <p className="text-xl md:text-2xl font-semibold">Slow</p>
            <p className="text-ms md:text-18 text-white/70 mt-1">
              9–18 month timelines
            </p>
          </div>

          {/* Divider */}
          <div className="block md:hidden w-full h-[2px] bg-linear-to-r from-[#1E4EAD] via-[#1D82BD] to-[#1CC2D1]" />
          <div className="hidden md:block w-[2px] self-stretch bg-linear-to-b from-[#1E4EAD] via-[#1D82BD] to-[#1CC2D1]" />

          {/* Item 2 */}
          <div className="text-center md:text-left w-full md:w-auto">
            <p className="text-xl md:text-2xl font-semibold">Expensive</p>
            <p className="text-ms md:text-18 text-white/70 mt-1 pt-2">
              $1M+ per transformation
            </p>
          </div>

          {/* Divider */}
          <div className="block md:hidden w-full h-[2px] bg-linear-to-r from-[#1E4EAD] via-[#1D82BD] to-[#1CC2D1]" />
          <div className="hidden md:block w-[2px] self-stretch bg-linear-to-b from-[#1E4EAD] via-[#1D82BD] to-[#1CC2D1]" />

          {/* Item 3 */}
          <div className="text-center md:text-left w-full md:w-auto">
            <p className="text-xl md:text-2xl font-semibold">Disconnected</p>
            <p className="text-ms md:text-18 text-white/70 mt-1 pt-2">
              No continuous evolution
            </p>
          </div>

          {/* Divider */}
          <div className="block md:hidden w-full h-[2px] bg-linear-to-r from-[#1E4EAD] via-[#1D82BD] to-[#1CC2D1]" />
          <div className="hidden md:block w-[2px] self-stretch bg-linear-to-b from-[#1E4EAD] via-[#1D82BD] to-[#1CC2D1]" />

          {/* Item 4 */}
          <div className="text-center md:text-left w-full md:w-auto">
            <p className="text-xl md:text-2xl font-semibold">Services-Heavy</p>
            <p className="text-ms md:text-18 text-white/70 mt-1">
              High executive risk
            </p>
          </div>
        </div>
      </div>

      {/* IMAGE SECTION — second on mobile */}
      <div className="
        flex-1 w-full overflow-hidden rounded-2xl
        order-2 lg:order-1
      ">
        <img
          ref={imageRef}
          src="/image/TheCoreProblem-BG.jpg.png"
          alt="Core Problem"
          className="w-full h-auto object-contain"
        />
      </div>

    </div>
  </div>
</section>

  );
}
