import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DataGrowthSection from "./DataGrowthSection";
import VelocityReliabilitySection from "./VelocityReliabilitySection";
import StatisticsSection from "./StatisticsSection";
import ROICalculator from "../RoiCalculator/ROICalculator";
// import heroVideo from "../assets/Aumnei-Video.mp4";
import Benefits from "../Benefits/Benefits";
import GSIPartnership from "../Partnership/GSIPartnership";
import Solution from "../Solutions/Solution";
import TransformationComparison from "../Solutions/TransformationComparison";
import EcosystemAudience from "../Solutions/EcosystemAudience";
import OutcomesSection from "../Solutions/OutcomesSection";
import TransformationWindow from "../Solutions/TransformationWindow";
import LivedExperienceSection from "../Solutions/LivedExperienceSection";
import Enterprise from "../Solutions/Enterprise";

gsap.registerPlugin(ScrollTrigger);

export default function BannerSection() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
//   const videoRef = useRef(null);

//   const [isPlaying, setIsPlaying] = useState(true);
//   const [isMuted, setIsMuted] = useState(true);
//   const [progress, setProgress] = useState(0);
// const [duration, setDuration] = useState(0);


  useEffect(() => {
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      pin: true,
      pinSpacing: false,
    });

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

    // gsap.to(videoRef.current, {
    //   opacity: 0,
    //   y: -50,
    //   scrollTrigger: {
    //     trigger: sectionRef.current,
    //     start: "top top",
    //     end: "30% top",
    //     scrub: true,
    //   },
    // });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  // ✅ VIDEO CONTROLS (OUTSIDE useEffect)
  // const togglePlay = () => {
  //   if (!videoRef.current) return;
  //   if (isPlaying) videoRef.current.pause();
  //   else videoRef.current.play();
  //   setIsPlaying(!isPlaying);
  // };

  // const toggleMute = () => {
  //   if (!videoRef.current) return;
  //   videoRef.current.muted = !isMuted;
  //   setIsMuted(!isMuted);
  // };

  return (
    <main>
      <section
        ref={sectionRef}
        className="relative h-screen w-full z-10 flex items-center -mt-20"
      >
       <div className="relative z-10 mx-auto w-full max-w-8xl px-6 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

    {/* LEFT: TEXT */}
    <div ref={contentRef} className="lg:-ml-8">
      <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight -mt-40">
        Transform Legacy IVR into AI-Native Conversations
      </h2>

      {/* <h2 className="mt-4 text-[#159ce0] text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight">
        At 5× Speed and 3× ROI <br /> on modernization
      </h2>

      <p className="mt-4 max-w-xl text-lg md:text-xl text-white/90 leading-relaxed">
        Aumne is an AI-native, agentic Service Lifecycle Management platform that
        transforms legacy IVR into modern omnichannel experiences—fast,
        governed, and built to evolve.
      </p> */}

       {/* Metrics */}
  <div className="mt-20 grid grid-cols-1 md:grid-cols-[auto_1px_auto_1px_auto] items-center text-white gap-y-6 md:gap-x-10">
    <div className="text-center md:text-left">
      <p className="text-6xl font-bold text-[#0D7EB6]">5X</p>
      <p className="text-lg text-white/80 mt-1">Faster Transformation</p>
    </div>

    <div className="hidden md:block h-15 w-[1px] bg-linear-to-b from-[#1E4EAD] via-[#1D82BD] to-[#1CC2D1]" />

    <div className="text-center md:text-left">
      <p className="text-6xl font-bold text-[#0D7EB6]">70%+</p>
      <p className="text-lg text-white/80 mt-1">
        Automation Across the Lifecycle
      </p>
    </div>

    <div className="hidden md:block h-15 w-[1px] bg-linear-to-b from-[#1E4EAD] via-[#1D82BD] to-[#1CC2D1]" />

    <div className="text-center md:text-left">
      <p className="text-6xl font-bold text-[#0D7EB6]">3x</p>
      <p className="text-lg text-white/80 mt-1">
        ROI on Modernization
      </p>
    </div>
  </div>
</div>

          {/* Metrics */}
      {/* <div className="mt-14 flex flex-col md:flex-row gap-10 text-white">
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
        </div> */}
    
             {/* RIGHT: VIDEO */}
  {/*<div ref={videoRef} className="relative rounded-2xl overflow-hidden shadow-2xl lg:ml-12 bg-black w-full max-w-[620px] aspect-video -mt-20">*/}

  {/* <video
    autoPlay
    muted
    loop
    playsInline
    className="w-full h-full object-cover"
    onTimeUpdate={(e) => {
      const progress = (e.target.currentTime / e.target.duration) * 100;
      setProgress(progress);
      setCurrentTime(e.target.currentTime);
      setDuration(e.target.duration);
    }}
  >
    <source src={heroVideo} type="video/mp4" />
  </video> */}

  {/* Dark overlay */}
  {/* <div className="absolute inset-0 bg-black/20"></div> */}

  {/* CENTER PLAY BUTTON */}
  {/* {!isPlaying && (
    <button
      onClick={togglePlay}
      className="absolute inset-0 flex items-center justify-center"
    >
      <div className="bg-black/60 p-6 rounded-full text-white text-4xl hover:scale-110 transition">
        ▶
      </div>
    </button>
  )} */}

  {/* BOTTOM CONTROL BAR */}
  {/* <div className="absolute bottom-0 left-0 w-full px-4 pb-3"> */}

    {/* PROGRESS BAR */}
    {/* <div
      className="w-full h-1 bg-white/30 rounded cursor-pointer mb-2"
      onClick={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const percent = clickX / rect.width;
        videoRef.current.currentTime = percent * duration;
      }}
    >
      <div
        className="h-1 bg-red-500 rounded"
        style={{ width: `${progress}%` }}
      ></div>
    </div> */}

    {/* CONTROLS ROW */}
    {/* <div className="flex items-center justify-between text-white text-sm"> */}

      {/* LEFT CONTROLS */}
      {/* <div className="flex items-center gap-3"> */}

        {/* Play/Pause */}
        {/* <button onClick={togglePlay} className="text-lg">
          {isPlaying ? "⏸" : "▶"}
        </button> */}

        {/* Volume */}
        {/* <button onClick={toggleMute} className="text-lg">
          {isMuted ? "🔇" : "🔊"}
        </button> */}

        {/* Time */}
        {/* <span className="text-xs opacity-80">
          {Math.floor(currentTime)} / {Math.floor(duration)} sec
        </span> */}
      </div>

      {/* RIGHT ICONS */}
      {/* <div className="flex items-center gap-3 opacity-80"> */}
        {/* <span>⚙</span> */}
        {/* <button
          onClick={() => videoRef.current.requestFullscreen()}
          className="text-lg"
        >
          ⛶
        </button> */}
      {/* </div> */}
    {/* </div> */}
  {/* </div> */}
{/* </div> */}
{/* </div>   */}


      </section>


      {/* SECTION 2 */}
      {/* <section className=" px-10 ">
        <DataGrowthSection />
      </section> */}

      <section className="">
        <VelocityReliabilitySection />
      </section>
      <section className="">
        {/* <StatisticsSection /> */}
        {/* <section className="">
          <HorizontalScrollVideo className="w-full h-32" />
        </section> */}
         <section className="" id="solutions">
           <Solution/>
        </section>
        
         <section className="" id="transformation-comparison">
           <TransformationComparison/>
        </section>
        <section className="" id="ecosystem-audience">
           <EcosystemAudience/>
        </section>
        <section className="" id="outcomes">
           <OutcomesSection/>
        </section>
        <section className="" id="transformation-window">
           <TransformationWindow/>
        </section>
        <section className="" id="lived-experience">
           <LivedExperienceSection/>
        </section> 
        {/* <section className="" id="enterprise">
           <Enterprise/>
        </section> */}
        {/* {/* <section className="" id="benefits">
           <Benefits/>
        </section> */}
        <section className="" id="statistics">
           <StatisticsSection/>
        </section>
        {/* <section className="" id="roi">
           <ROICalculator/>
        </section> */}
        <section className="" id="gsi">
           <GSIPartnership/>
        </section>

        
       






      </section>
    </main>
  );
}


  

