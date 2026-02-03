"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WhyAumneCard() {
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
      className="relative pb-10 text-white overflow-hidden pt-20 "
    >
      {/* Heading */}
      <div className="max-w-[1550px] mx-auto text-center">
          <h2 className="text-4xl md:text-6xl text-white font-semibold mb-6 tracking-tight mb-20">
         The Aumne Solution
        </h2>
        
      </div>
      <div className="max-w-7xl mx-auto  ">
        <div className="flex flex-col md:flex-row items-center gap-10  overflow-hidden">
          {/* LEFT IMAGE BLOCK    border border-white/10*/}
          <div className="relative flex-1 min-h-[365px]  overflow-hidden group ">
            <div
              ref={imageRef}
              className="absolute inset-0 bg-cover bg-center scale-125"
              style={{
                backgroundImage: "url('/image/why.jpg')",
                height: "100%",
                top: "-10%",
              }}
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/20 transition-colors duration-500" />
          </div>

          {/* RIGHT TEXT BLOCK */}
          <div className="flex-1 flex flex-col py-10 px-5 justify-center  space-y-8 ">
            <h2 className="text-white text-3xl font-normal mb-5 ml-2">
              From Legacy IVR to Conversational AI—Automatically
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
              className="group py-3 rounded-2xl"
            >
              <p className="text-base text-center lg:text-start w-full ml-2 lg:w-[600px] mb-7 text-white/80 ">
              Aumne is purpose-built to modernize what already exists, not force enterprises to start from scratch. 
              </p>
            </div>

            {/* <div className="h-0.5 w-full bg-linear-to-r from-[#036ffd] to-[#42a5f5] rounded-full" /> */}
          </div>
        </div>
      </div>
      {/* CENTERED CALLOUT BOX */}
<div className="mt-16 flex justify-center px-4">
  <div className="max-w-3xl w-full rounded-2xl  bg-linear-to-br from-[#0a0a0a] via-[#101c2f] to-[#036ffd]/20 p-8  border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] px-8 py-6 text-center">
    <p className="text-base md:text-lg text-white leading-relaxed">
      Our agentic, AI-native platform turns IVR modernization from a one-time, high-risk
      project into a <span className="text-[#0D7EB6] font-medium">
        continuous platform capability
      </span>.
    </p>
  </div>
</div>
      
    </section>
  );
}
