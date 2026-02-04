"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function VelocityReliabilitySection() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  // Cards-kaana refs
  const cardsRef = useRef([]);

  useEffect(() => {
    // Parallax effect for image
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
      },
    );
  }, []);

  // --- GSAP 3D TILT LOGIC ---
  const handleMouseEnter = (index) => {
    const card = cardsRef.current[index];
    gsap.to(card, {
      scale: 1.02,
      //backgroundColor: "rgba(17, 34, 64, 0.6)", // Slightly brighter on hover
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const handleMouseMove = (e, index) => {
    const card = cardsRef.current[index];
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Tilt intensity (15 is a good balance)
    const rotateX = (y - centerY) / 15;
    const rotateY = (centerX - x) / 15;

    gsap.to(card, {
      rotateX: rotateX,
      rotateY: rotateY,
      duration: 0.5,
      ease: "power2.out",
      transformPerspective: 1000,
    });
  };

  const handleMouseLeave = (index) => {
    const card = cardsRef.current[index];
    gsap.to(card, {
      scale: 1,
      rotateX: 0,
      rotateY: 0,
      //backgroundColor: "rgba(17, 34, 64, 0.4)", // Original color
      duration: 0.6,
      ease: "elastic.out(1, 0.5)",
    });
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen text-white overflow-hidden py-20"
    >
      <div className="mx-auto max-w-[1550px] px-8 md:px-14">
        <div className="flex flex-col md:flex-row items-center gap-10  overflow-hidden">
          {/* LEFT IMAGE BLOCK */}
          <div className="relative flex-1 min-h-[580px]  overflow-hidden group ">
            <div
              ref={imageRef}
              className="absolute inset-0 bg-cover bg-center scale-132"
              style={{
                backgroundImage: "url('/image/TheCoreProblem-BG.jpg.png')", //core problem image border-r border-white/10
                height: "100%",
                top: "14%",
                bottom:"20%",           //bg-black/40 group-hover:bg-black/20 transition-colors
              }}
            />
            <div className="absolute inset-0  duration-500" />  
          </div>

          {/* RIGHT TEXT BLOCK */}
          <div className="flex-1 flex flex-col py-10 px-5 justify-center  space-y-8 ">
            <h2 className="text-xl md:text-3xl font-bold text-white mb-10">
              The Core Problem
            </h2>
            {/* <div className="h-0.5 w-[53%] bg-linear-to-r from-[#036ffd] to-[#42a5f5] rounded-full" /> */}

            {/* Card 1 */}
            <div
              ref={(el) => (cardsRef.current[0] = el)}
              onMouseEnter={() => handleMouseEnter(0)}
              onMouseMove={(e) => handleMouseMove(e, 0)}
              onMouseLeave={() => handleMouseLeave(0)}
              style={{ transformStyle: "preserve-3d" }}
              // className="group p-8 rounded-2xl border border-[#1e3a8a] bg-[#112240]/40 backdrop-blur-sm transition-all hover:border-[#3b82f6]/50 "
              className="group py-3 rounded-2xl  backdrop-blur-sm transition-all  "
            >
              <h3 className="text-[#0D7EB6] text-md md:text-xl font-bold mb-4 leading-tight">
                Legacy IVR Is the Bottleneck to AI-Native Customer Service
              </h3>
              <p className="text-gray-300 text-md leading-relaxed">
              <b> Nearly 75% </b>of enterprises still rely on legacy, menu-driven IVR, even as customer expectations have shifted decisively toward natural, conversational experiences. <br/> Voice remains the front door of customer service, yet it's the weakest link.
              </p>
            </div>

            {/* <div className="h-0.5 w-full bg-linear-to-r from-[#036ffd] to-[#42a5f5] rounded-full" /> */}

            {/* Card 2 */}
            <div
              ref={(el) => (cardsRef.current[1] = el)}
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseMove={(e) => handleMouseMove(e, 1)}
              onMouseLeave={() => handleMouseLeave(1)}
              style={{ transformStyle: "preserve-3d" }}
              // className="group p-8 rounded-2xl border border-[#1e3a8a] bg-[#112240]/40 backdrop-blur-sm transition-all hover:border-[#ef4444]/30 "
              className="group  rounded-2xl "
            >
                <div className="mt-14 flex flex-row items-stretch justify-between gap-6 text-white">
  {/* Item 1 */}
  <div className="text-center md:text-left">
    <p className="text-2xl font-semibold">Slow</p>
    <p className="text-17 text-white/70 mt-1">
      9–18 month timelines
    </p>
  </div>

  {/* Divider */}
  <div className="hidden md:block w-[2px] self-stretch bg-linear-to-b from-[#1E4EAD] via-[#1D82BD] to-[#1CC2D1]" />

  {/* Item 2 */}
  <div className="text-center md:text-left">
    <p className="text-2xl font-semibold">Expensive</p>
    <p className="text-17 text-white/70 mt-1">
      $1M+ per transformation
    </p>
  </div>

  {/* Divider */}
  <div className="hidden md:block w-[2px] self-stretch bg-linear-to-b from-[#1E4EAD] via-[#1D82BD] to-[#1CC2D1]" />

  {/* Item 3 */}
  <div className="text-center md:text-left">
    <p className="text-2xl font-semibold">Services-Heavy</p>
    <p className="text-17 text-white/70 mt-1">
      High executive risk
    </p>
  </div>

  {/* Divider */}
  <div className="hidden md:block w-[2px] self-stretch bg-linear-to-b from-[#1E4EAD] via-[#1D82BD] to-[#1CC2D1]" />

  {/* Item 4 */}
  <div className="text-center md:text-left">
    <p className="text-2xl font-semibold">Disconnected</p>
    <p className="text-17 text-white/70 mt-1">
      No continuous evolution
    </p>
  </div>
</div>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
