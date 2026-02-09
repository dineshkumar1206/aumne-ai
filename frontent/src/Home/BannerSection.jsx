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
import BookDemoModal from "../Components/BookDemoModal";
import GoogleCloudPartner from "./GoogleCloudPartner";

gsap.registerPlugin(ScrollTrigger);

export default function BannerSection() {
  // const sectionRef = useRef(null);
  // const contentRef = useRef(null);
//   const videoRef = useRef(null);

//   const [isPlaying, setIsPlaying] = useState(true);
//   const [isMuted, setIsMuted] = useState(true);
//   const [progress, setProgress] = useState(0);
// const [duration, setDuration] = useState(0);


  // useEffect(() => {
  //   ScrollTrigger.create({
  //     trigger: sectionRef.current,
  //     start: "top top",
  //     pin: true,
  //     pinSpacing: false,
  //   });

    // gsap.to(contentRef.current, {
    //   opacity: 0,
    //   y: -50,
    //   scrollTrigger: {
    //     trigger: sectionRef.current,
    //     start: "top top",
    //     end: "30% top",
    //     scrub: true,
    //   },
    // });

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

  //   return () => {
  //     ScrollTrigger.getAll().forEach((t) => t.kill());
  //   };
  // }, []);

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

  const logos = [
  "/image/avaya.png",
  "/image/amazon-connect.png",
  "/image/cisco.png",
  "/image/dialogflow.png",
  "/image/five9.png",
  "/image/genesys.png",
  "/image/nice.png",
];

const containerRef = useRef(null);
const trackRef = useRef(null);

useEffect(() => {
  let position = 0;
  let direction = 1; // 1 = forward, -1 = backward
  const speed = 1; // ⬅ slow speed
  let rafId;

  const animate = () => {
    if (!containerRef.current || !trackRef.current) return;

    const containerWidth = containerRef.current.offsetWidth;
    const trackWidth = trackRef.current.scrollWidth;

    position += speed * direction;

    // Right end → reverse
    if (position >= trackWidth - containerWidth) {
      direction = -1;
      position = trackWidth - containerWidth;
    }

    // Left end → reverse
    if (position <= 0) {
      direction = 1;
      position = 0;
    }

    trackRef.current.style.transform = `translateX(-${position}px)`;

    rafId = requestAnimationFrame(animate);
  };

  rafId = requestAnimationFrame(animate);

  return () => cancelAnimationFrame(rafId);
}, []);
const handleMouseEnter = () => {
  gsap.to(trackRef.current, { timeScale: 0, duration: 0.3 });
};

const handleMouseLeave = () => {
  gsap.to(trackRef.current, { timeScale: 1, duration: 0.3 });
};


  return (
    <main>
      <section className="relative w-full h-screen z-8">

  <div className="mx-auto w-full max-w-8xl px-6 md:px-16 h-full flex flex-col">

    {/* TOP HERO CONTENT */}
    <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

      {/* LEFT SIDE */}
      <div className="lg:-ml-4 text-left">
        <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
          Transform Legacy IVR into AI-Native Conversations
        </h2>

        {/* Metrics */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-[auto_1px_auto_1px_auto] items-center gap-y-6 md:gap-x-10 text-white">
          
          <div>
            <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#0D7EB6]">5X</p>
            <p className="text-sm sm:text-base text-white/80 mt-1">Faster Transformation</p>
          </div>

          <div className="hidden md:block h-16 w-[1px] bg-linear-to-b from-[#1E4EAD] via-[#1D82BD] to-[#1CC2D1]" />

          <div>
            <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#0D7EB6]">70%+</p>
            <p className="text-sm sm:text-base text-white/80 mt-1">Automation Across the Lifecycle</p>
          </div>

          <div className="hidden md:block h-16 w-[1px] bg-linear-to-b from-[#1E4EAD] via-[#1D82BD] to-[#1CC2D1]" />

          <div>
            <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#0D7EB6]">3X</p>
            <p className="text-sm sm:text-base text-white/80 mt-1">ROI on Modernization</p>
          </div>

        </div>
      </div>

      {/* RIGHT SIDE BUTTON */}
      <div className="flex justify-center lg:justify-end items-center">
        <a  target="_blank" rel="noopener noreferrer" href="https://hello-aumne-production.up.railway.app/">
          <button
            className="
              px-14 sm:px-20 py-6 sm:py-9
              rounded-full bg-[#F4CF6A]
              text-black text-xl sm:text-2xl font-bold
              shadow-[0_20px_60px_rgba(244,207,106,0.45)]
              transition-all duration-300
              hover:scale-110
              hover:shadow-[0_30px_80px_rgba(244,207,106,0.7)]
              cursor-pointer
            "
          >
            Try Live Voice Demo
          </button>
        </a>
      </div>

    </div>


    {/* BOTTOM LOGO CAROUSEL (INSIDE SAME SCREEN HEIGHT)  */}
          <h2 className="text-white text-2xl sm:text-lg md:text-xl font-bold text-center mt-10  px-4">
  Integrates with leading CCaaS, contact center, and conversational AI platforms
</h2>

<div className="relative w-full pb-6 overflow-hidden py-0">
  <div className="mx-auto px-6 mb-12 max-w-[1400px]">

    <div
  ref={containerRef}
  className="overflow-hidden w-full"
  onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}
></div>
    <div ref={containerRef} className="overflow-hidden w-full">
      <div
        ref={trackRef}
        className="flex items-center gap-10 will-change-transform"
      >
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 h-[220px] w-[220px] flex items-center justify-center"
          >
            <img
              src={logo}
              alt={`logo-${index}`}
              className="h-full w-full object-contain opacity-80 hover:opacity-100 transition"
            />
          </div>
        ))}
      </div>
    </div>
  </div>

    
</div>


   {/* this is the scroll div of first section */}


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
        {/* <section className="" id="transformation-window">
           <TransformationWindow/>
        </section> */}
        {/* <section className="" id="lived-experience">
           <LivedExperienceSection/>
        </section>  */}
        {/* <section className="" id="enterprise">
           <Enterprise/>
        </section> */}
        {/* {/* <section className="" id="benefits">
           <Benefits/>
        </section> */}
        {/* <section className="" id="statistics">
           <StatisticsSection/>
        </section> */}
        {/* <section className="" id="roi">
           <BookDemoModal/>
        </section> */}
        <section id="cloud">
          <GoogleCloudPartner/>
        </section>
        <section className="" >
           <GSIPartnership/>
        </section>
        

        
       






      </section>
    </main>
  );
}


  

