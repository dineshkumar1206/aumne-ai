import React from "react";
import { Search, RefreshCcw, DollarSign, TrendingUp, ArrowRight, Layers,  BarChart3, Shield,Repeat, Zap , Globe, Rocket, PiggyBank, FileStack,GitBranch, MessageSquare, } from "lucide-react";


       const items = [
         {
           icon: <Layers size={22} />,
           title: "Platform-led discovery of legacy CX",
           desc: "A standardized, platform-driven way to automatically discover IVR intents, flows, integrations, and dependencies from legacy systems.",
         },
         {
           icon: <RefreshCcw size={22} />,
           title: "Standardized and repeatable transformation framework",
           desc: "A common transformation layer that enables reuse of CX patterns, intents, and integrations across customers and platforms.",
         },
         {
           icon: <BarChart3 size={22} />,
           title: "Scalable delivery economics",
           desc: "A platform that reduces manual effort, improves estimation confidence, and protects margins as CX complexity increases.",
         },
         {
           icon: <Shield size={22} />,
           title: "Human control and enterprise governance",
           desc: "Clear checkpoints, approvals, and controls that allow delivery leaders to guide, validate, and govern AI-driven transformation.",
         },
         {
           icon: <Repeat size={22} />,
           title: "Continuous evolution with AI platforms",
           desc: "A delivery model that evolves as CX platforms change, without forcing large-scale rewrites or retraining.",
         },
       ];

    const cards = [
  {
    title: "One Platform to Transform All Major Legacy IVRs",
    desc: "A single transformation control plane that ingests and standardizes legacy IVR environments across Avaya, Genesys, Cisco, and custom systems unifying fragmented CX estates into one transformation pipeline.",
    icon: Globe,
  },
  {
    title: "Platform-Led Intelligent Transformation Model",
    desc: "Our intelligent conversational design brain applies learning, pattern recognition, and decision logic to transform legacy CX into scalable and repeatable conversational experiences across both legacy transformations and greenfield builds.",
    icon: Zap,
  },
  {
    title: "Replatform Once. Deploy Across Platforms and Channels",
    desc: "Legacy CX is transformed once and deployed consistently across regions, CX platforms, and channels without duplicating design, logic, or integration effort.",
    icon: Layers,
  },
  {
    title: "Continuous Evolution as a Platform Motion",
    desc: "CX enhancements and optimizations are governed centrally through the platform, shifting transformation from one-time projects to an ongoing delivery motion while protecting margins as complexity increases.",
    icon: RefreshCcw,
  },
];

const coins = [
  {
    title: "Accelerated Core Transformation Revenue",
    desc: "Deliver more transformation programs with the same teams at 5× faster speed.",
    icon: Rocket,
  },
  {
    title: "Improved Margins on Complex Engagements",
    desc: "Platform-led discovery, reuse, and automation reduce effort and rework, improving margin resilience as CX complexity increases.",
    icon: PiggyBank,
  },
  {
    title: "Faster Greenfield CX Builds",
    desc: "The same platform accelerates greenfield conversational CX builds using proven patterns and design intelligence.",
    icon: FileStack,
  },
  {
    title: "Recurring Revenue Through Continuous Evolution",
    desc: "CX enhancements and optimizations are delivered as an ongoing platform-driven motion, creating predictable recurring services revenue.",
    icon: DollarSign,
  },
  {
    title: "Larger Transformation Footprints",
    desc: "One transformation enables expansion across platforms, regions, and channels without duplicating design or logic.",
    icon: Globe,
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


const Global = () => {
  return (        
<>
    <section className="w-full flex items-center justify-center py-18">
      <div className="max-w-7xl mx-auto text-center px-4">
                           
                           {/* Section 1 */}
        {/* Tag */}
        <h1 className="text-white text-7xl font-bold mb-5">
         Global System Integrators
        </h1>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold leading-tight text-white">
          Unlock Faster Transformation.
          Protect Margins.  <br />Differentiate
          Your CX / EX Story.
        </h2>

        {/* Description */}
        <p className="text-center text-xl md:text-2xl text-[#0D7EB6] leading-relaxed mt-6">
          An AI-native platform that helps GSIs modernize legacy IVR into AI-powered
          customer service—faster, repeatable, and at scale.
        </p>

        {/* Stats */}

         {/* Metrics */}
  <div className="mt-18 grid grid-cols-1 md:grid-cols-[auto_1px_auto_1px_auto] items-center text-white gap-y-2 md:gap-x-4">
    <div className="text-center md:text-center">
      <p className="text-6xl font-bold text-[#0D7EB6]">5X</p>
      <p className="text-lg text-white/80 mt-1">Faster Transformation</p>
    </div>

    <div className="hidden md:block h-15 w-[1px] bg-linear-to-b from-[#1E4EAD] via-[#1D82BD] to-[#1CC2D1]" />

    <div className="text-center md:text-center">
      <p className="text-6xl font-bold text-[#0D7EB6]">70%+</p>
      <p className="text-lg text-white/80 mt-1">
        Automation Across the Lifecycle
      </p>
    </div>

    <div className="hidden md:block h-15 w-[1px] bg-linear-to-b from-[#1E4EAD] via-[#1D82BD] to-[#1CC2D1]" />

    <div className="text-center md:text-center">
      <p className="text-6xl font-bold text-[#0D7EB6]">3X</p>
      <p className="text-lg text-white/80 mt-1">
        ROI on Modernization
      </p>
    </div>
  </div>
        {/* <div className="flex flex-col md:flex-row justify-center gap-18 mt-6">
          <div>
            <h2 className="text-6xl font-bold text-[#0D7EB6]">5X</h2>
            <p className="text-16 text-white/80 mt-2">Faster Transformation</p>
          </div>
          <div>
            <h2 className="text-6xl font-bold text-[#0D7EB6]">70%+</h2>
            <p className="text-16 text-white/80 mt-2">Automation</p>
          </div>
          <div>
            <h2 className="text-6xl font-bold text-[#0D7EB6]">3-4X</h2>
            <p className="text-16 text-white/80 mt-2">ROI on Delivery</p>
          </div>
        </div> */}

        {/* Buttons */}
       {/* < div className="flex flex-col sm:flex-row justify-center gap-5 mt-10">
          <button className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#0D7EB6] hover:opacity-90 transition text-white font-medium cursor-pointer">
            Talk to an Expert <ArrowRight size={18} />
          </button>

          <button className="px-6 py-3 rounded-lg border border-[#0D7EB6] text-white hover:bg-[#0D7EB6]/10 transition font-medium cursor-pointer">
            See How It Works
          </button>
        </div> */}
      </div>
    </section>

                 {/* Section 2 */}
                  <section className="max-w-6xl mx-auto px-4 py-24 pb-10 ">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-semibold text-white text-center">
        Why Enterprises Are Struggling to{" "}
        Modernize
        <br />
       at the Pace of AI
      </h2>

      {/* Sub-heading */}
      <p className="mt-6 text-center text-xl md:text-2xl text-[#0D7EB6] leading-relaxed">
        Customers want conversations. Enterprises still offer menus.
        Legacy IVR is the bottleneck to AI-native customer service.
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
      <Search className="h-7 w-7 text-[#0D7EB6]" />
    </div>

    {/* Text Content */}
    <div className="flex flex-col">
      <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
        Legacy IVR discovery is manual and unscalable
      </h3>
      <p className="text-white/70 leading-relaxed text-sm md:text-base">
        Legacy IVR logic, Flows, and Integrations are buried in fragmented artifacts, making discovery slow, Human-driven, and Error-prone.
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
    <RefreshCcw className="h-7 w-7 text-[#0D7EB6]" />
  </div>

  {/* Text Content */}
  <div className="flex flex-col">
    <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
      Every transformation starts from scratch
    </h3>
    <p className="text-white/70 leading-relaxed text-sm md:text-base">
      There is no systematic reuse of CX / EX designs, intents, or integrations even across similar clients and platforms.
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
    <DollarSign className="h-7 w-7 text-[#0D7EB6]" />
  </div>

  {/* Text Content */}
  <div className="flex flex-col">
    <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
      Complexity destroys delivery margins
    </h3>
    <p className="text-white/70 leading-relaxed text-sm md:text-base">
      Deep IVR trees and integrations introduce scope creep and estimation risk, turning fixed-price deals into margin traps.
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
    <TrendingUp className="h-7 w-7 text-[#0D7EB6]" />
  </div>

  {/* Text Content */}
  <div className="flex flex-col">
    <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
      AI platforms evolve faster than GSI delivery models
    </h3>
    <p className="text-white/70 leading-relaxed text-sm md:text-base">
      CX platforms innovate rapidly, but delivery methods remain services-heavy and linear, creating a widening execution gap.
    </p>
  </div>

</div>

      </div>
    </section>
                          {/* Section3 */}
        <section className="max-w-6xl mx-auto px-4 py-24 pt-8 pb-10">
      <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md px-10 py-16">
        {/* Title */}
        <h2 className="text-3xl font-bold text-white text-center mb-14">
          Delivery Reality
        </h2>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {/* Stat 1 */}
          <div>
            <div className="text-5xl font-semibold text-[#0D7EB6] mb-3">
             40%+
            </div>
            <p className="text-white/80 leading-relaxed">
             Programs overrun estimates
            </p>
          </div>

          {/* Stat 2 */}
          <div>
            <div className="text-5xl font-semibold text-[#0D7EB6] mb-3">
              30%+
            </div>
            <p className="text-white/80 leading-relaxed">
              Margin erosion on complex deals
            </p>
          </div>

          {/* Stat 3 */}
          <div>
            <div className="text-5xl font-semibold text-[#0D7EB6] mb-3">
              30%+
            </div>
            <p className="text-white/80 leading-relaxed">
              Effort lost to manual discovery
            </p>
          </div>
        </div>

        {/* Impact Bar */}
        <div className="mt-16 px-6 py-5 text-center">
          <p className="text-white text-center text-xl md:text-2xl">
            <span className="font-semibold text-[#0D7EB6]">
             Result:
            </span>{" "}
             IVR modernization takes 9–18 months, is expensive to deliver, and fails to scale profitably.
          </p>
        </div>
      </div>
    </section>        

                            {/*Section 4  */}
            <section className="w-full py-20">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold text-white text-center">
          What GSIs Need to Win{" "}
          AI-Driven CX at Scale
        </h2>

        {/* List */}
        <div className="mt-10 space-y-6">
          {items.map((item, index) => (
            <div
              key={index}
                 className="bg-[#0b2a3d]/60 pt-4 backdrop-blur-xl border border-white/10 rounded-3xl p-10 flex items-start gap-1 transition-all duration-300 hover:border-[#0D7EB6]/40"            >
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#0D7EB6]/15 border border-[#0D7EB6]/40 text-[#0D7EB6] shrink-0">
                {item.icon}
              </div>

              {/* Text */}
              <div className="pl-6 h-15 -pt-6">
                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-white/80 mt-1 text-lg leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Highlight Box */}
        <div className="max-w-5xl mx-auto mt-12 px-8 py-8">
          <p className="text-white text-center text-xl md:text-2xl leading-relaxed">
            <span className="text-[#0D7EB6] font-bold">
              The Reality today : 
            </span>{" "}
            Most GSI delivery models rely on people and process, not platforms,
            to scale AI-driven CX transformation.
          </p>
        </div>
      </div>
    </section>
              {/* Section 5 */}

           <section className="py-24 ">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold text-white text-center">
          How Aumne Impacts{" "}
          GSI CX / EX <br/>Transformation at Scale
        </h2>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
  {cards.map((item, index) => {
    const Icon = item.icon;
    return (
      <div
        key={index}
        className="rounded-2xl bg-linear-to-br from-[#0a0a0a] via-[#101c2f] to-[#036ffd]/20 
        p-8 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] 
        flex items-start gap-5"
      >
        {/* Icon Box */}
        <div className="w-14 h-14 flex items-center justify-center rounded-xl 
          bg-[#0D7EB6]/25 border border-[#0D7EB6]/60 shrink-0">
          <Icon className="h-7 w-7 text-[#0D7EB6]" />
        </div>

        {/* Text Content */}
        <div className="flex flex-col">
          <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
            {item.title}
          </h3>
          <p className="text-white/70 leading-relaxed text-16 md:text-base">
            {item.desc}
          </p>
        </div>
      </div>
    );
  })}
</div>

      </div>
    </section>

   {/* Delivery Impact */}
<div className="mt-2">
  <div className="max-w-5xl mx-auto mt-2 px-8 py-8 rounded-3xl border-white/10 bg-white/5 backdrop-blur-md shadow-sm">
    {/* Title */}
    <h2 className="text-3xl font-bold text-white text-center mb-14">
      Delivery Impact
    </h2>

    {/* Stats */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
      {/* Stat 1 */}
      <div>
        <p className="text-5xl font-semibold text-[#0D7EB6] mb-3">5X</p>
        <p className="text-white/80 leading-relaxed">
          Faster Transformation
        </p>
      </div>

      {/* Stat 2 */}
      <div>
        <p className="text-5xl font-semibold text-[#0D7EB6] mb-3">70%+</p>
        <p className="text-white/80 leading-relaxed">
          Automation
        </p>
      </div>

      {/* Stat 3 */}
      <div>
        <p className="text-5xl font-semibold text-[#0D7EB6] mb-3">3–4X</p>
        <p className="text-white/80 leading-relaxed">
          ROI on Delivery
        </p>
      </div>
    </div>
  </div>
</div>
      {/* Section 6 */}

      <section className="py-24 ">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold text-white text-center">
          How GSIs Monetize{" "}Platform- <br/>Led CX / EX Transformation
          
        </h2>

        {/* Cards */}
   <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
  {coins.slice(0, 3).map((item, index) => {
    const Icon = item.icon;
    return (
      <div
        key={index}
        className="rounded-2xl bg-linear-to-br from-[#0a0a0a] via-[#101c2f] to-[#036ffd]/20 
        p-8 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] 
        flex flex-col items-center text-center"
      >
        {/* Icon Box - CENTERED */}
        <div className="w-14 h-14 flex items-center justify-center rounded-xl 
          bg-[#0D7EB6]/25 border border-[#0D7EB6]/60 shrink-0 
          shadow-[0_0_20px_rgba(13,126,182,0.35)] mb-4">
          <Icon className="h-7 w-7 text-[#0D7EB6]" />
        </div>

        {/* Text Content */}
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold text-white mb-2 leading-snug">
            {item.title}
          </h3>
          <p className="text-white/80 leading-relaxed text-sm md:text-base">
            {item.desc}
          </p>
        </div>
      </div>
    );
  })}
</div>




        {/* Bottom row (centered 2 cards) */}
       <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
  {coins.slice(3).map((item, index) => {
    const Icon = item.icon;
    return (
      <div
        key={index}
        className="rounded-2xl bg-linear-to-br from-[#0a0a0a] via-[#101c2f] to-[#036ffd]/20 
        p-8 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] 
        flex flex-col"
      >
        {/* Icon Box - centered */}
        <div className="w-14 h-14 flex items-center justify-center rounded-xl 
          bg-[#0D7EB6]/25 border border-[#0D7EB6]/60 shrink-0 mx-auto mb-4">
          <Icon className="h-7 w-7 text-[#0D7EB6]" />
        </div>

        {/* Text Content */}
        <div className="flex flex-col text-center">
          <h3 className="text-xl font-semibold text-white mb-2">
            {item.title}
          </h3>
          <p className="text-white/80 leading-relaxed text-sm md:text-base">
            {item.desc}
          </p>
        </div>
      </div>
    );
  })}
</div>


      </div>
        <div className="max-w-5xl mx-auto mt-12 px-8 py-8">
  <p className="text-center text-xl md:text-2xl text-white leading-relaxed">
    Aumne enables GSIs to{" "}
    <span className="text-[#0D7EB6] font-bold">
      grow revenue, protect margins,
    </span>{" "}
    and{" "}
    <span className="text-[#0D7EB6] font-bold">
      create recurring income
    </span>{" "}
    through a platform-led CX transformation model—while retaining full ownership and delivery control.
  </p>
</div>

    </section>

     {/*section 6  */}
             <section className="w-full py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-5xl font-bold text-white leading-tight">
            Start Small. Prove Value. <br/>
             Scale with Confidence.
          </h1>
          <p className="mt-5 text-center text-xl md:text-2xl text-[#0D7EB6] leading-relaxed">
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
                <div className="hidden lg:flex absolute top-1/2 -right-12 -translate-y-1/2">
                  <ArrowRight className="w-13 h-13 text-white " />
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>

     {/* Section 7 */}

    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-semibold text-white">
          Next Steps
        </h2>
      </div>

      <div className="grid md:grid-cols-4 gap-12 text-xl max-w-7xl mx-auto">
        {steps.map((step, idx) => (
          <Step1 key={idx} {...step} />
        ))}
      </div>
    </section>

  <div>
          <div className="mt-10 text-center pt-8">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Ready to Modernize Now
                    </h3>
                    <p className="text-white/80 text-lg mb-6">
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


    </>
  );
};

export default Global;
