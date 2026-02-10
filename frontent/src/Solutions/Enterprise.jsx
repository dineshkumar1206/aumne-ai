import React from "react";
import { ArrowRight } from "lucide-react";
import { Clock, DollarSign, RefreshCcw, AlertTriangle, Rocket, Cpu, TrendingUp, CheckCircle,  Zap, Layers, ShieldCheck,  FlaskConical, Search, GitBranch, MessageSquare, BarChart3 } from "lucide-react";
import {
  Building2,
  Users, Sparkles,
} from "lucide-react";

export default function Enterprise() {

  const impacts = [
    {
      title: "Accelerate Time to Value",
      highlight: "Up to 5x faster",
      desc: "Deliver results significantly faster than traditional IVR modernization programs.",
      icon: Rocket,
      points: ["Rapid deployment", "Quick ROI", "Minimal disruption"],
    },
    {
      title: "Automate Customer Service at Scale",
      highlight: "≈ 70% automation",
      desc: "Achieve large-scale automation across the entire customer service lifecycle.",
      icon: Cpu,
      points: ["End-to-end automation", "Scalable workflows", "Consistent CX"],
    },
    {
      title: "Drive Efficiency Improvements",
      highlight: "40%+ improvement",
      desc: "Increase self-service adoption and optimize operational efficiency.",
      icon: TrendingUp,
      points: [
        "Reduce AHT",
        "Improve FCR",
        "Lower cost per interaction",
        "Improve CSAT & NPS",
      ],
    },
  ];

  const step = [
    {
      title: "Identify High-Impact Journeys",
      desc: "Pinpoint the customer journeys that matter most to your business and users.",
      icon: Search,
    },
    {
      title: "Discover Existing IVR Logic",
      desc: "Automatically analyze your current IVR flows and logic to uncover opportunities.",
      icon: GitBranch,
    },
    {
      title: "Launch Conversational Experiences",
      desc: "Deploy intelligent conversational solutions quickly without complexity.",
      icon: MessageSquare,
    },
    {
      title: "Measure, Learn & Evolve",
      desc: "Track outcomes, optimize continuously, and scale with confidence.",
      icon: BarChart3,
    },
  ];

 const steps = [
  {
    number: "1",
    title: "Pick a Program",
    desc: "Select an existing customer or program",
  },
  {
    number: "2",
    title: "Run a Pilot",
    desc: "Prove the impact with minimal risk",
  },
  {
    number: "3",
    title: "Prove Impact",
    desc: "Demonstrate margin and productivity gains",
  },
  {
    number: "4",
    title: "Scale with Confidence",
    desc: "Expand across your customer base",
  },
];

const Step1 = ({ number, title, desc }) => (
  <div className="flex flex-col items-center text-center max-w-xs mx-auto">
    <div className="flex items-center justify-center h-14 w-14 rounded-full bg-[#0D7EB6] text-white text-xl font-semibold mb-5">
      {number}
    </div>

    <h4 className="text-white font-semibold mb-2">
      {title}
    </h4>

    <p className="text-white/70 text-sm leading-relaxed">
      {desc}
    </p>
  </div>
);

  return (
    <>                       
                      {/* Section 1  */}
    <section className="w-full relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 " />

      <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-20 text-center text-white pb-6">

  {/* Tag */}
  <h1 className="text-white text-3xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6">
    Enterprise Leaders
  </h1>

  {/* Heading */}
  <h2 className="text-xl sm:text-2xl md:text-5xl font-bold tracking-tight leading-snug md:leading-tight">
    <span className="text-white">Turn your legacy IVR into</span>{" "}
    <br className="hidden md:block" />
    Conversational AI in just 3 steps
  </h2>

  {/* Subtitle */}
  <p className="text-base sm:text-lg md:text-2xl bg-gradient-to-br from-[#63D5FF] to-[#6C7CFF]  bg-clip-text text-transparent leading-relaxed mt-4 md:mt-6 max-w-4xl mx-auto">
    Transforming legacy IVR into intelligent conversational experiences with enterprise grade control.
  </p>

  {/* Metrics */}
  <div className="mt-12 md:mt-18 grid grid-cols-1 md:grid-cols-[auto_1px_auto_1px_auto] items-center text-white gap-y-8 md:gap-x-4">

    <div className="text-center">
      <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#0D7EB6]">5X</p>
      <p className="text-sm sm:text-base md:text-lg text-white/80 mt-1">
        Faster Transformation
      </p>
    </div>

    <div className="hidden md:block h-16 w-[1px] bg-gradient-to-b from-[#1E4EAD] via-[#1D82BD] to-[#1CC2D1]" />

    <div className="text-center">
      <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#0D7EB6]">70%+</p>
      <p className="text-sm sm:text-base md:text-lg text-white/80 mt-1">
        Automation Across the Lifecycle
      </p>
    </div>

    <div className="hidden md:block h-16 w-[1px] bg-gradient-to-b from-[#1E4EAD] via-[#1D82BD] to-[#1CC2D1]" />

    <div className="text-center">
      <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#0D7EB6]">3X</p>
      <p className="text-sm sm:text-base md:text-lg text-white/80 mt-1">
        ROI on Modernization
      </p>
    </div>

  </div>

        {/* <div className="flex flex-col md:flex-row justify-center gap-12 mt-14">
          <div>
            <h3 className="text-6xl font-bold text-[#0D7EB6]">5X</h3>
            <p className="text-16 text-white/80 mt-2">Faster Time to Value</p>
          </div>

          <div>
            <h3 className="text-6xl font-bold text-[#0D7EB6]">70%</h3>
            <p className="text-16 text-white/80 mt-2">
              Automation Across Lifecycle
            </p>
          </div>

          <div>
            <h3 className="text-6xl font-bold text-[#0D7EB6]">$150K+</h3>
            <p className="text-16 text-white/80 mt-2">
              Average Enterprise ARR
            </p>
          </div>
        </div> */}

        {/* Buttons */}
        {/* <div className="flex flex-col sm:flex-row justify-center gap-5 mt-14">
          <button className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#0D7EB6] hover:opacity-90 transition text-white font-medium cursor-pointer">
            Talk to an Expert <ArrowRight size={18} />
          </button>

          <button className="px-6 py-3 rounded-lg border border-[#0D7EB6] text-white hover:bg-[#0D7EB6]/10 transition font-medium cursor-pointer">
            See How It Works
          </button>
        </div> */}
      </div>
    </section>
                    {/* Section2 */}
      <section className="max-w-6xl mx-auto px-4 py-16 pb-10 ">
      {/* Heading */}
     <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-white text-center leading-tight">
  Why Customer Service Needs{" "}
  Change
  <br className="hidden sm:block" />
  {/* <span className="text-[#0D7EB6]">at the Pace of AI</span> */}
</h2>

<p className="text-center text-base sm:text-lg md:text-2xl bg-gradient-to-br from-[#63D5FF] to-[#6C7CFF]  bg-clip-text text-transparent leading-relaxed mt-3 sm:mt-4 max-w-4xl mx-auto px-2">
  Customer expectations have moved faster than enterprise customer service systems.
</p>


      {/* Cards */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Card 1 */}
<div className="rounded-2xl bg-linear-to-br from-[#0a0a0a] via-[#101c2f] to-[#036ffd]/20 
  p-8 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] 
  flex items-start gap-5">

  {/* Icon Box */}
  <div className="w-14 h-14 flex items-center justify-center rounded-xl
    bg-[#0D7EB6]/25 border border-[#0D7EB6]/60 shrink-0">
    <Clock className="h-6 w-6 text-[#0D7EB6]" />
  </div>

  {/* Text Content */}
  <div className="flex flex-col">
    <h3 className="text-xl font-semibold text-white mb-2">
      Legacy IVR Blocks CX Innovation
    </h3>

    <p className="text-white/70 leading-relaxed text-lg md:text-lg">
      Outdated, menu driven IVR systems frustrate customers, slow resolution, and block meaningful CX improvements.
    </p>
  </div>

</div>


        {/* Card 2 */}
       <div className="rounded-2xl bg-linear-to-br from-[#0a0a0a] via-[#101c2f] to-[#036ffd]/20 
  p-8 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] 
  flex items-start gap-5">

  {/* Icon Box */}
  <div className="w-14 h-14 flex items-center justify-center rounded-xl
    bg-[#0D7EB6]/25 border border-[#0D7EB6]/60 shrink-0">
    <DollarSign className="h-6 w-6 text-[#0D7EB6]" />
  </div>

  {/* Text Content */}
  <div className="flex flex-col">
    <h3 className="text-xl font-semibold text-white mb-2">
      Customers Expect Conversational AI
    </h3>

    <p className="text-white/70 leading-relaxed text-lg md:text-lg">
      Modern users expect natural, intuitive conversations and not rigid menus and long call trees.
    </p>
  </div>

</div>


        {/* Card 3 */}
        <div className="rounded-2xl bg-linear-to-br from-[#0a0a0a] via-[#101c2f] to-[#036ffd]/20 
  p-8 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] 
  flex items-start gap-5">

  {/* Icon Box */}
  <div className="w-14 h-14 flex items-center justify-center rounded-xl
    bg-[#0D7EB6]/25 border border-[#0D7EB6]/60 shrink-0">
    <RefreshCcw className="h-6 w-6 text-[#0D7EB6]" />
  </div>

  {/* Text Content */}
  <div className="flex flex-col pt-3">
    <h3 className="text-xl font-semibold text-white mb-7">
      Modernization Is Painfully Slow
    </h3>

    <p className="text-white/70 leading-relaxed text-lg md:text-lg">
      Typical IVR upgrades take 9 to 18 months, lagging far behind the pace of AI, product, and policy change.
    </p>
  </div>

</div>


        {/* Card 4 */}
       <div className="rounded-2xl bg-linear-to-br from-[#0a0a0a] via-[#101c2f] to-[#036ffd]/20 
  p-8 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] 
  flex items-start gap-5">

  {/* Icon Box */}
  <div className="w-14 h-14 flex items-center justify-center rounded-xl
    bg-[#0D7EB6]/25 border border-[#0D7EB6]/60 shrink-0">
    <AlertTriangle className="h-6 w-6 text-[#0D7EB6]" />
  </div>

  {/* Text Content */}
  <div className="flex flex-col">
    <h3 className="text-xl font-semibold text-white mb-2">
      ROI on CX Investments Is Unpredictable
    </h3>

    <p className="text-white/70 leading-relaxed text-lg md:text-lg">
      Legacy systems inflate costs, limit experimentation, and prevent rapid prototyping and validation.
    </p>
  </div>

</div>

      </div>
    </section>
                         {/* Section 3 */}
 
    <section className="max-w-6xl mx-auto px-4 py-16 pt-8 pb-10">
      <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md px-10 py-16">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 sm:mb-14">
  A Massive Problem
</h2>

{/* Stats */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 text-center px-2">

  {/* Stat 1 */}
  <div>
    <div className="text-4xl sm:text-5xl font-semibold text-[#0D7EB6] mb-2 sm:mb-3">
      75%
    </div>
    <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-xs mx-auto">
      Of enterprises still run on legacy IVR
    </p>
  </div>

  {/* Stat 2 */}
  <div>
    <div className="text-4xl sm:text-5xl font-semibold text-[#0D7EB6] mb-2 sm:mb-3">
      $1M+
    </div>
    <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-xs mx-auto">
      Average transformation spend per enterprise
    </p>
  </div>

  {/* Stat 3 */}
  <div>
    <div className="text-4xl sm:text-5xl font-semibold text-[#0D7EB6] mb-2 sm:mb-3">
      67%
    </div>
    <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-xs mx-auto">
      Customer abandonment during IVR interactions
    </p>
  

          </div>
        </div>

        {/* Impact Bar */}
        <div className="mt-16  px-6 py-5 text-center">
       <p className="text-center text-base sm:text-lg md:text-2xl leading-relaxed px-2 max-w-4xl mx-auto">
  
    Direct Impact :{" "}
  NPS, churn, and revenue suffer from legacy IVR
</p>

        </div>
      </div>
    </section>
      
      {/* Section 04 */}

       <section className="max-w-6xl mx-auto px-4 py-16 pb-10">
      {/* Heading */}
     <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-white text-center leading-tight">
  Why Legacy IVR{" "}
  Persists
</h2>

{/* Subheading */}
<p className="mt-3 sm:mt-4 text-center text-base sm:text-lg md:text-3xl bg-gradient-to-br from-[#63D5FF] to-[#6C7CFF]  bg-clip-text text-transparent leading-relaxed max-w-4xl mx-auto px-2">
  The problem is not intent. It is tooling.
</p>


      {/* Cards */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Card 1 */}
        <div className="rounded-2xl bg-linear-to-br from-[#0a0a0a] via-[#101c2f] to-[#036ffd]/20 
  p-8 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] 
  flex items-start gap-5">

  {/* Icon Box */}
  <div className="w-14 h-14 flex items-center justify-center rounded-xl 
    bg-[#0D7EB6]/25 border border-[#0D7EB6]/60 shrink-0">
    <Building2 className="h-6 w-6 text-[#0D7EB6]" />
  </div>

  {/* Text Content */}
  <div className="flex flex-col">
    <h3 className="text-lg font-semibold text-white mb-2">
      Greenfield Platforms Miss Legacy Reality
    </h3>

    <p className="text-white/80 leading-relaxed text-18 md:text-lg">
      Most modern CX / EX platforms are designed for clean, new journeys and cannot interpret decades old IVR logic.
    </p>
  </div>

</div>


        {/* Card 2 */}
        <div className="rounded-2xl bg-linear-to-br from-[#0a0a0a] via-[#101c2f] to-[#036ffd]/20 
  p-8 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] 
  flex items-start gap-5">

  {/* Icon Box */}
  <div className="w-14 h-14 flex items-center justify-center rounded-xl 
    bg-[#0D7EB6]/25 border border-[#0D7EB6]/60 shrink-0">
    <Users className="h-6 w-6 text-[#0D7EB6]" />
  </div>

  {/* Text Content */}
  <div className="flex flex-col">
    <h3 className="text-lg font-semibold text-white mb-2">
      Manual, Services Led Transformation
    </h3>

    <p className="text-white/80 leading-relaxed text-18 md:text-lg">
      IVR modernization relies on custom, people heavy delivery models that do not scale.
    </p>
  </div>

</div>


        {/* Card 3 */}
        <div className="rounded-2xl bg-linear-to-br from-[#0a0a0a] via-[#101c2f] to-[#036ffd]/20 
  p-8 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] 
  flex items-start gap-5">

  {/* Icon Box */}
  <div className="w-14 h-14 flex items-center justify-center rounded-xl 
    bg-[#0D7EB6]/25 border border-[#0D7EB6]/60 shrink-0">
    <AlertTriangle className="h-6 w-6 text-[#0D7EB6]" />
  </div>

  {/* Text Content */}
  <div className="flex flex-col">
    <h3 className="text-lg font-semibold text-white mb-2">
      Fragmented Business Logic
    </h3>

    <p className="text-white/80 leading-relaxed text-18 md:text-lg">
      Critical IVR knowledge is scattered across VXML, code, configurations, and tribal expertise, making automation difficult.
    </p>
  </div>

</div>


        {/* Card 4 */}
        <div className="rounded-2xl bg-linear-to-br from-[#0a0a0a] via-[#101c2f] to-[#036ffd]/20 
  p-8 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] 
  flex items-start gap-5">

  {/* Icon Box */}
  <div className="w-14 h-14 flex items-center justify-center rounded-xl 
    bg-[#0D7EB6]/25 border border-[#0D7EB6]/60 shrink-0">
    <DollarSign className="h-6 w-6 text-[#0D7EB6]" />
  </div>

  {/* Text Content */}
  <div className="flex flex-col">
    <h3 className="text-lg font-semibold text-white mb-2">
      Outcome
    </h3>

    <p className="text-white/80 leading-relaxed text-18 md:text-lg">
      IVR becomes a permanent bottleneck instead of an evolving capability.
    </p>
  </div>

</div>

      </div>
    </section>    
                {/* Section 5 */}
                 <section className="max-w-6xl mx-auto px-4 py-16 pb-10">
      {/* Heading */}
     <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-center text-white leading-tight">
  How does Aumne solve this problem?
</h2>

{/* Subheading */}
<p className="mt-4 text-base sm:text-lg md:text-2xl text-center bg-gradient-to-br from-[#63D5FF] to-[#6C7CFF]  bg-clip-text text-transparent leading-relaxed mb-2 max-w-5xl mx-auto px-2">
  Aumne is an <b>AI-native Service Lifecycle Management platform</b> designed specifically for enterprise IVR modernization.
</p>


   {/* Cards */}
<div className="mt-15 grid grid-cols-1 md:grid-cols-2 gap-8">

  {/* Card 1 */}
  <div className="rounded-2xl bg-linear-to-br from-[#0a0a0a] via-[#101c2f] to-[#036ffd]/20 
  p-8 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] 
  flex items-start gap-5">

    <div className="w-14 h-14 flex items-center justify-center rounded-xl 
      bg-[#0D7EB6]/25 border border-[#0D7EB6]/60 shrink-0">
      <Zap className="h-7 w-7 text-[#0D7EB6]" />
    </div>

    <div className="flex flex-col">
      <h3 className="text-xl font-semibold text-white mb-3">
        AI Native Platform for Legacy IVR
      </h3>
      <p className="text-white/70 leading-relaxed text-18 md:text-lg">
        Purpose built to modernize complex, production IVR systems at scale.
      </p>
    </div>
  </div>

  {/* Card 2 */}
  <div className="rounded-2xl bg-linear-to-br from-[#0a0a0a] via-[#101c2f] to-[#036ffd]/20 
  p-8 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] 
  flex items-start gap-5">

    <div className="w-14 h-14 flex items-center justify-center rounded-xl 
      bg-[#0D7EB6]/25 border border-[#0D7EB6]/60 shrink-0">
      <Layers className="h-7 w-7 text-[#0D7EB6]" />
    </div>

    <div className="flex flex-col">
      <h3 className="text-xl font-semibold text-white mb-3">
        Intelligent Auto Discovery
      </h3>
      <p className="text-white/70 leading-relaxed text-18 md:text-lg">
        Automatically maps existing IVR logic and artifacts before transformation begins.
      </p>
    </div>
  </div>

  {/* Card 3 */}
  <div className="rounded-2xl bg-linear-to-br from-[#0a0a0a] via-[#101c2f] to-[#036ffd]/20 
  p-8 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] 
  flex items-start gap-5">

    <div className="w-14 h-14 flex items-center justify-center rounded-xl 
      bg-[#0D7EB6]/25 border border-[#0D7EB6]/60 shrink-0">
      <RefreshCcw className="h-7 w-7 text-[#0D7EB6]" />
    </div>

    <div className="flex flex-col">
      <h3 className="text-xl font-semibold text-white mb-3">
        Conversational Journey Automation
      </h3>
      <p className="text-white/70 leading-relaxed text-18 md:text-lg">
        Generates personalized, omnichannel customer journeys <b>up to 70 %</b> faster.
      </p>
    </div>
  </div>

  {/* Card 4 */}
  <div className="rounded-2xl bg-linear-to-br from-[#0a0a0a] via-[#101c2f] to-[#036ffd]/20 
  p-8 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] 
  flex items-start gap-5">

    <div className="w-14 h-14 flex items-center justify-center rounded-xl 
      bg-[#0D7EB6]/25 border border-[#0D7EB6]/60 shrink-0">
      <ShieldCheck className="h-7 w-7 text-[#0D7EB6]" />
    </div>

    <div className="flex flex-col">
      <h3 className="text-xl font-semibold text-white mb-3">
        Continuous Service Evolution
      </h3>
      <p className="text-white/70 leading-relaxed text-18 md:text-lg">
        Built in prototyping, recommendations, and A B testing enable ongoing improvement instead of one time projects.
      </p>
    </div>
  </div>

</div>


      {/* bottom box */}

      <div className="max-w-5xl mx-auto mt-12 px-8 py-8">
 <p className="text-center text-base sm:text-lg md:text-2xl text-white leading-relaxed max-w-5xl mx-auto px-2">
  We turn{" "}
  <span className="font-bold">
    decades of legacy IVR
  </span>{" "}
  into modern, conversational & omnichannel experiences with{" "}
  <span className=" font-bold">
    5X Faster GTM
  </span>.
</p>

</div>

    </section>
      
      {/* Section 6 */}

       <section className="relative py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
       <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-center text-white leading-tight">
  Continuous Evolution at AI Speed
</h2>

<p className="mt-4 sm:mt-6 text-center text-base sm:text-lg md:text-2xl bg-gradient-to-br from-[#63D5FF] to-[#6C7CFF]  bg-clip-text text-transparent leading-relaxed mb-5 sm:mb-6 max-w-4xl mx-auto px-2">
  Customer service should evolve as fast as your business
</p>


        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">

         {/* Card 1 */}
  <div className="rounded-2xl bg-linear-to-br from-[#0a0a0a] via-[#101c2f] to-[#036ffd]/20 
    p-8 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] 
    flex items-start gap-5">

    <div className="w-14 h-14 flex items-center justify-center rounded-xl 
      bg-[#0D7EB6]/25 border border-[#0D7EB6]/60 shrink-0">
      <FlaskConical className="h-7 w-7 text-[#0D7EB6]" />
    </div>

    <div className="flex flex-col">
      <h3 className="text-lg font-semibold text-white mb-3">
        Rapid Prototyping and A/B Testing
      </h3>
      <p className="text-white/70 leading-relaxed text-18 md:text-lg">
        Continuously optimize journeys to match evolving customer needs and behaviors.
      </p>
    </div>
  </div>


  {/* Card 2 */}
  <div className="rounded-2xl bg-linear-to-br from-[#0a0a0a] via-[#101c2f] to-[#036ffd]/20 
    p-8 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] 
    flex items-start gap-5">

    <div className="w-14 h-14 flex items-center justify-center rounded-xl 
      bg-[#0D7EB6]/25 border border-[#0D7EB6]/60 shrink-0">
      <ShieldCheck className="h-7 w-7 text-[#0D7EB6]" />
    </div>

    <div className="flex flex-col">
      <h3 className="text-lg font-semibold text-white mb-3">
        Enterprise Grade Governance and Control
      </h3>
      <p className="text-white/70 leading-relaxed text-18 md:text-lg">
        Human-in-the-loop oversight with approvals, versioning, and rollback ensures risk-free evolution.
      </p>
    </div>
  </div>


  {/* Card 3 */}
  <div className="rounded-2xl bg-linear-to-br from-[#0a0a0a] via-[#101c2f] to-[#036ffd]/20 
    p-8 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] 
    flex items-start gap-5">

    <div className="w-14 h-14 flex items-center justify-center rounded-xl 
      bg-[#0D7EB6]/25 border border-[#0D7EB6]/60 shrink-0">
      <Layers className="h-7 w-7 text-[#0D7EB6]" />
    </div>

    <div className="flex flex-col">
      <h3 className="text-lg font-semibold text-white mb-6 mt-3">
        Omnichannel Deployment
      </h3>
      <p className="text-white/70 leading-relaxed text-18 md:text-lg">
        Seamlessly deploy conversational experiences across voice, chat, web, and messaging.
      </p>
    </div>
  </div>

        </div>
      </div>
    </section>

            {/* Section page customer experience */}

            {/* <section className="w-full py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading 
        <div className="max-w-4x2 mx-auto mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-white">
            Customer Experience &{" "}<br/>
           Employee Experience{" "}
            Are Connected
          </h2>
          <p className="mt-6 text-center text-xl md:text-2xl text-[#0D7EB6] leading-relaxed">
            Customer service systems shape the daily experience of frontline teams.
            When technology is rigid, both customers and employees suffer.
          </p>
        </div>

        Grid Layout
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          Problem Card
          <div className="rounded-2xl bg-gradient-to-br from-[#0a0a0a] via-[#101c2f] to-[#036ffd]/20 
            p-8 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] flex flex-col gap-6">

            <div className="w-14 h-14 flex items-center justify-center rounded-xl 
              bg-red-500/20 border border-red-500/40">
              <AlertTriangle className="h-7 w-7 text-red-400" />
            </div>

            <h3 className="text-2xl font-semibold text-white">
              When IVR Is Rigid & Outdated
            </h3>

            <ul className="space-y-3 text-white/70 text-lg">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-red-400" />
                Agents receive poor-quality interactions
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-red-400" />
                Supervisors rely on workarounds instead of improvements
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-red-400" />
                IT teams become bottlenecks for change
              </li>
            </ul>
          </div>

          Solution Card
          <div className="rounded-2xl bg-gradient-to-br from-[#0a0a0a] via-[#101c2f] to-[#036ffd]/20 
            p-8 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] flex flex-col gap-6">

            <div className="w-14 h-14 flex items-center justify-center rounded-xl 
              bg-[#0D7EB6]/25 border border-[#0D7EB6]/60">
              <Sparkles className="h-7 w-7 text-[#0D7EB6]" />
            </div>

            <h3 className="text-2xl font-semibold text-white">
              With Aumne
            </h3>

            <p className="text-white/70 text-lg leading-relaxed">
              Modernize legacy IVR into intelligent, conversational and continuously evolving experiences.
            </p>

            <div className="grid grid-cols-2 gap-3 mt-2">
              {[
                "Agent effectiveness",
                "Supervisor agility",
                "Operational confidence",
                "Employee satisfaction",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-white/80 text-sm">
                  <Users className="h-4 w-4 text-[#0D7EB6]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        Bottom Statement
        <div className="mt-16 text-center">
          <p className="text-xl md:text-2xl font-semibold leading-relaxed text-white">
            Better CX starts with better EX —{" "}
            <span className="text-[#0D7EB6]">both begin with the same platform.</span>
          </p>
        </div>

      </div>
    </section> */}
     

         {/* section page2 */}

          <section className="w-full py-20 ">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
       <div className="max-w-3xl mx-auto mb-16 text-center">
 <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-white text-center leading-tight">
  Proven Impact for Enterprises
</h2>

<p className="mt-4 sm:mt-6 text-center text-base sm:text-lg md:text-2xl  bg-gradient-to-br from-[#63D5FF] to-[#6C7CFF]  bg-clip-text text-transparent leading-relaxed max-w-4xl mx-auto px-2">
  Aumne delivers <span className=" font-bold">measurable outcomes</span>, not promises.
</p>

</div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 px-1 sm:px-0">
  {impacts.map((item, index) => (
    <div
      key={index}
      className="rounded-2xl bg-gradient-to-br from-[#0a0a0a] via-[#101c2f] to-[#036ffd]/20 
      p-6 sm:p-8 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)]
      flex flex-col gap-4 sm:gap-6 hover:scale-[1.02] transition"
    >
      {/* Icon */}
      <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-xl 
        bg-[#0D7EB6]/25 border border-[#0D7EB6]/60">
        <item.icon className="h-6 w-6 sm:h-7 sm:w-7 text-[#0D7EB6]" />
      </div>

      {/* Title */}
      <h3 className="text-xl sm:text-2xl font-semibold text-white">
        {item.title}
      </h3>

      {/* Highlight */}
      <div className="text-[#0D7EB6] font-bold text-lg sm:text-xl">
        {item.highlight}
      </div>

      {/* Description */}
      <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
        {item.desc}
      </p>

      {/* Points */}
      <ul className="space-y-1.5 sm:space-y-2 mt-1 sm:mt-2">
        {item.points.map((point, i) => (
          <li key={i} className="flex items-center gap-2 text-gray-300 text-sm sm:text-sm">
            <CheckCircle className="h-4 w-4 text-[#0D7EB6]" />
            {point}
          </li>
        ))}
      </ul>
    </div>
  ))}
</div>


      </div>
    </section>


             {/*section 7  */}
             <section className="w-full py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-16 px-2">
  <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white leading-tight">
    Start Small. Prove Value. 
    <br className="hidden sm:block" />
    Scale with Confidence.
  </h1>

  <p className="mt-4 text-base sm:text-lg md:text-2xl mb-2   bg-gradient-to-br from-[#63D5FF] to-[#6C7CFF]  bg-clip-text text-transparent leading-relaxed max-w-4xl mx-auto">
    Transform enterprise customer experience without massive disruption.
    Start with focused impact, validate results, and scale intelligently.
  </p>
</div>


        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 overflow-hidden">
  {step.map((step, index) => (
    <div key={index} className="relative h-full">
      
      {/* Card */}
      <div
        className="h-full rounded-2xl bg-gradient-to-br from-[#0a0a0a] via-[#101c2f] to-[#036ffd]/20
        p-8 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)]
        flex flex-col items-center text-center justify-between gap-6"
      >
        {/* Icon */}
        <div
          className="w-14 h-14 flex items-center justify-center rounded-xl
          bg-[#0D7EB6]/25 border border-[#0D7EB6]/60 shrink-0"
        >
          <step.icon className="h-7 w-7 text-[#0D7EB6]" />
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-white min-h-[56px] flex items-center">
          {step.title}
        </h3>

        {/* Description */}
        <p className="text-gray-300 text-16 leading-relaxed min-h-[72px]">
          {step.desc}
        </p>

        {/* Step */}
        {/* <div className="text-sm font-semibold text-white opacity-70">
          Step {index + 1}
        </div> */}
      </div>

      {/* Arrow (not for last card) */}
      {index !== step.length - 1 && (
        <div className="hidden lg:flex absolute top-1/2 -right-13 -translate-y-1/2">
          <ArrowRight className="w-13 h-13 text-white " />
        </div>
      )}
    </div>
  ))}
</div>

      </div>
    </section>

     {/* Section 8 */}

  <section className="py-16 sm:py-24 px-4 sm:px-6">
  <div className="max-w-7xl mx-auto text-center mb-8 sm:mb-12">
    <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-white">
      Next Steps
    </h2>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12 text-base sm:text-lg md:text-xl max-w-7xl mx-auto">
    {steps.map((step, idx) => (
      <Step1 key={idx} {...step} />
    ))}
  </div>
</section>


    <div>
              {/* CTA Section */}
        <div className="mt-10 text-center pt-8">
         <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">
  Ready to Modernize Now
</h3>

<p className="text-white/80 text-base sm:text-lg mb-5 sm:mb-6 text-center leading-relaxed max-w-3xl mx-auto px-2">
  Let’s build smarter, faster, and more human customer experiences.
</p>


          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contact"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#0D7EB6] hover:opacity-90 transition text-white font-medium cursor-pointer"
            >
               Free Trail <ArrowRight size={18}/>
            </a>
            {/* <a
              href="https://www.aumne.ai"
              target="_blank"
              className="px-6 py-3 rounded-lg border border-[#0D7EB6] text-white/80 font-semibold hover:bg-[#0D7EB6]/10 transition cursor-pointer"
            >
              Visit Website
            </a> */}
          </div>
        </div>
    </div>
     


{/* Section 6 */}

     {/*         <section className="max-w-6xl mx-auto px-4 py-28 pb-10">
      Heading 

      <h2 className="text-4xl md:text-5xl font-semibold text-center text-[#0D7EB6] mb-16">
        Why Now
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

        LEFT LIST

        <div className="space-y-6">
          {[
            "Enterprises are already spending $53B+ annually on customer service modernization",
            "Budgets growing at ~13% CAGR as AI reshapes customer expectations",
            "Every enterprise is ready to modernize but current options force them to wait",
            "Legacy transformation remains slow, services-heavy, and risky",
            "Funded initiatives turn into multi-quarter programs",
          ].map((text, i) => (
            <div
              key={i}
              className="flex items-start gap-4 rounded-2xl  bg-[#0b2a3d]/60 backdrop-blur-xl border border-white/10 p-5 transition-all duration-300 hover:border-[#0D7EB6]/40"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0D7EB6] text-white text-sm font-semibold">
                {i + 1}
              </div>
              <p className="text-white leading-relaxed">
                {text}
              </p>
            </div>
          ))}
        </div>

        RIGHT CARD

        <div className="rounded-2xl border-white/10 bg-white/5 backdrop-blur-md shadow-sm pt-5 pl-5 pr-5">

          Icon

          <div className="mb-6 flex justify-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0D7EB6]/10">
              <TrendingUp className="h-6 w-6 text-[#0D7EB6]" />
            </div>
          </div>

          <h3 className="text-xl font-semibold text-center text-white mb-8">
            Market Opportunity
          </h3>

          <div className="space-y-4">
            {[
              ["TAM", "$53B+"],
              ["SAM", "$16–18B+"],
              ["SOM", "$160–320M+"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="flex items-center justify-between rounded-xl bg-[#c4cccb] px-5 py-4"
              >
                <span className="text-gray-600 font-medium">{label}</span>
                <span className="text-gray-900 font-semibold">{value}</span>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-white/80 leading-relaxed">
            Aumne unlocks this trapped demand by replacing services-led
            modernization.
          </p>
        </div>
      </div>  
    </section>    */}



       {/*  Section 7 */}

       {/* <section className="max-w-6xl mx-auto px-4 py-32 pb-10">

      Heading

      <h2 className="text-center text-4xl md:text-5xl font-semibold mb-20">
        <span className="text-white">Why Us – </span>
        <span className="text-[#0D7EB6]">The Team</span>
      </h2>

      Cards

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

        Card 1

        <div className="rounded-3xl bg-linear-to-br from-[#0a0a0a] via-[#101c2f] to-[#036ffd]/20 p-8  border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] text-center">
          <div className="mb-6 flex justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl  bg-[#0D7EB6]/15 border border-[#0D7EB6]/40 shrink-0 text-[#0D7EB6]">
              <Lightbulb className="h-7 w-7" />
            </div>
          </div>

          <h3 className="text-lg font-semibold text-white mb-4">
            Founder Insight
          </h3>

          <p className="text-white/80 leading-relaxed text-sm">
            100+ years of deep domain experience across IVR, contact centers,
            enterprise CX transformation, and platform engineering. First-hand
            experience delivering large-scale transformations.
          </p>
        </div>

        Card 2

        <div className="rounded-3xl bg-linear-to-br from-[#0a0a0a] via-[#101c2f] to-[#036ffd]/20 p-8  border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] text-center">
          <div className="mb-6 flex justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl  bg-[#0D7EB6]/15 border border-[#0D7EB6]/40 shrink-0 text-[#0D7EB6]">
              <BarChart3 className="h-7 w-7" />
            </div>
          </div>

          <h3 className="text-lg font-semibold text-white mb-4">
            Product Differentiation
          </h3>

          <p className="text-white/80 leading-relaxed text-sm">
            Purpose-built for legacy-first customer service transformation with
            full support for greenfield conversational design. Conversational
            designer brain embedded in the platform.
          </p>
        </div>

        Card 3

        <div className="rounded-3xl bg-linear-to-br from-[#0a0a0a] via-[#101c2f] to-[#036ffd]/20 p-8  border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] text-center">
          <div className="mb-6 flex justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#0D7EB6]/15 border border-[#0D7EB6]/40 shrink-0 text-[#0D7EB6]">
              <TrendingUp className="h-7 w-7" />
            </div>
          </div>

          <h3 className="text-lg font-semibold text-white mb-4">
            Market Timing
          </h3>

          <p className="text-white/80 leading-relaxed text-sm">
            Majority of enterprises still operate on legacy IVR while CX
            expectations and AI capability accelerate. A clear platform gap
            exists between CX runtime systems and transformation.
          </p>
        </div>
      </div>
    </section> */}
     
</>
  );
}
