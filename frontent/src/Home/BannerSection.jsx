import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DataGrowthSection from "./DataGrowthSection";
import VelocityReliabilitySection from "./VelocityReliabilitySection";
import StatisticsSection from "./StatisticsSection";
import HorizontalScrollVideo from "./HorizontalScrollImage";
import ROICalculator from "../RoiCalculator/ROICalculator";
import heroVideo from "../assets/Aumnei-Video.mp4";
import Benefits from "../Benefits/Benefits";
import GSIPartnership from "../Partnership/GSIPartnership";


gsap.registerPlugin(ScrollTrigger);

export default function BannerSection() {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  const contentRef = useRef(null);
  const videoRef = useRef(null)

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

           // 4. VIDEO REVEAL 
   gsap.to(videoRef.current, {
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
  className="relative h-screen w-full z-10 flex items-center"
>
  <div className="relative z-10 mx-auto w-full max-w-8xl px-6 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

    {/* LEFT: TEXT */}
    <div ref={contentRef} className="lg:-ml-8">
      <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight -mt-15">
        Transform Legacy IVR into AI-Native Customer Service
      </h2>

      <h2 className="mt-4 text-[#159ce0] text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight">
        At 5× Speed and 3× ROI <br /> on modernization
      </h2>

      <p className="mt-4 max-w-xl text-lg md:text-xl text-white/90 leading-relaxed">
        Aumne is an AI-native, agentic Service Lifecycle Management platform that
        transforms legacy IVR into modern omnichannel experiences—fast,
        governed, and built to evolve.
      </p>

       {/* Metrics */}
  <div className="mt-8 grid grid-cols-1 md:grid-cols-[auto_1px_auto_1px_auto] items-center text-white gap-y-6 md:gap-x-10">
    <div className="text-center md:text-left">
      <p className="text-3xl font-bold">5X</p>
      <p className="text-lg text-white/80 mt-1">Faster Transformation</p>
    </div>

    <div className="hidden md:block h-15 w-[1px] bg-linear-to-b from-[#1E4EAD] via-[#1D82BD] to-[#1CC2D1]" />

    <div className="text-center md:text-left">
      <p className="text-3xl font-bold">70%+</p>
      <p className="text-lg text-white/80 mt-1">
        Automation Across the Lifecycle
      </p>
    </div>

    <div className="hidden md:block h-15 w-[1px] bg-linear-to-b from-[#1E4EAD] via-[#1D82BD] to-[#1CC2D1]" />

    <div className="text-center md:text-left">
      <p className="text-3xl font-bold">3x</p>
      <p className="text-lg text-white/80 mt-1">
        ROI on Modernization
      </p>
    </div>
  </div>
</div>

    {/* RIGHT: VIDEO */}
    <div ref={videoRef} className="relative rounded-2xl overflow-hidden shadow-2xl lg:ml-12">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/20" />
    </div>

  </div>
</section>



      {/* SECTION 2 */}
      <section className=" px-10 ">
        <DataGrowthSection />
      </section>

      <section className="">
        <VelocityReliabilitySection />
      </section>
      <section className="">
        {/* <StatisticsSection /> */}
        {/* <section className="">
          <HorizontalScrollVideo className="w-full h-32" />
        </section> */}
        <section className="">
           <Benefits/>
        </section>
        <section className="">
           <StatisticsSection/>
        </section>
        <section className="">
           <ROICalculator/>
        </section>
        <section className="">
           <GSIPartnership/>
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