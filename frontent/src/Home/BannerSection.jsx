import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DataGrowthSection from "./DataGrowthSection";
import VelocityReliabilitySection from "./VelocityReliabilitySection";
import StatisticsSection from "./StatisticsSection";
import HorizontalScrollVideo from "./HorizontalScrollImage";

gsap.registerPlugin(ScrollTrigger);

export default function BannerSection() {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    // 1. PINNING LOGIC
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      pin: true,
      pinSpacing: false,

    });

    // 2. BACKGROUND PARALLAX (Video move aagura effect)
    gsap.to(bgRef.current, {
      yPercent: 15,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });

    // 3. CONTENT REVEAL
    gsap.to(contentRef.current, {
      opacity: 0,
      y: -50,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "30% top",
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <main className="">
      {/* SECTION 1: Fixed Banner with Video Background */}
      <section
        ref={sectionRef}
        className="relative h-screen w-full overflow-hidden z-10"
      >
        {/* Updated: Background Video */}
        <video
          ref={bgRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video/bg-video.mp4" type="video/mp4" />
        </video>

        {/* Overlay to make text readable */}
        <div className="absolute inset-0 bg-black/50" />

   <div
  ref={contentRef}
  className="relative z-20 flex flex-col justify-start pt-20 h-full w-full lg:w-[1100px] px-6 md:px-16"
>
  {/* Top headline */}
  <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
   Transform Legacy IVR into AI-Native Customer Service </h2>

  {/* Main headline */}
  <h2 className="mt-3 text-[#159ce0] text-4xl md:text-3xl lg:text-5xl font-extrabold leading-tight">
    At 5× Speed and 3x ROI  <br />
    on modernization
  </h2>

  {/* Description */}
  <p className="mt-8 max-w-2xl text-lg md:text-xl text-white/90 leading-relaxed">
  Aumne is an AI-native, agentic Service Lifecycle Management platform that automatically transforms legacy IVR into modern, conversational, omnichannel experiences—fast, governed, and built to continuously evolve.
  </p>

  {/* Metrics */}
  <div className="mt-14 flex flex-col md:flex-row gap-10 text-white">
    <div className="text-center md:text-left">
      <p className="text-4xl font-extrabold">5X</p>
      <p className="text-lg text-white/80 mt-1">Faster Transformation</p>
    </div>

    <div className="hidden md:block w-[2px] bg-linear-to-r from-[#1E4EAD] via-[#1D82BD] to-[#1CC2D1]" />

    <div className="text-center md:text-left">
      <p className="text-4xl font-bold">70%+</p>
      <p className="text-lg text-white/80 mt-1">
        Automation Across the Lifecycle
      </p>
    </div>

    <div className="hidden md:block w-[2px] bg-linear-to-r from-[#1E4EAD] via-[#1D82BD] to-[#1CC2D1]" />

    <div className="text-center md:text-left">
      <p className="text-4xl font-extrabold">3x</p>
      <p className="text-lg text-white/80 mt-1">
        ROI on Modernization
      </p>
    </div>
  </div>
</div>

      </section>

      {/* SECTION 2 */}
      <section className="bg-[#0A0A0A] px-10 ">
        <DataGrowthSection />
      </section>

      <section className="">
        <VelocityReliabilitySection />
      </section>
      <section className="">
        {/* <StatisticsSection /> */}
        <section className="">
          <HorizontalScrollVideo className="w-full h-32" />
        </section>
      </section>
    </main>
  );
}
 {/* <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-70"
        >
          <source src="/video/bg-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
         */}