import React from "react";
import { Search, RefreshCcw, DollarSign, TrendingUp, ArrowRight, Layers,  BarChart3, Shield,Repeat, Zap , Globe, Rocket, PiggyBank, FileStack, } from "lucide-react";


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
    desc: "A single transformation control plane that ingests and standardizes legacy IVR environments across Avaya, Genesys, Cisco, and custom systems—unifying fragmented CX estates into one transformation pipeline.",
    icon: Globe,
  },
  {
    title: "Platform-Led Intelligent Transformation Model",
    desc: "Our intelligent conversational design brain applies learning, pattern recognition, and decision logic to transform legacy CX into scalable and repeatable conversational experiences across both legacy transformations and greenfield builds.",
    icon: Zap,
  },
  {
    title: "Replatform Once. Deploy Across Platforms and Channels",
    desc: "Legacy CX is transformed once and deployed consistently across regions, CX platforms, and channels—without duplicating design, logic, or integration effort.",
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


const Global = () => {
  return (        
<>
    <section className="w-full flex items-center justify-center py-20">
      <div className="max-w-5xl mx-auto text-center px-4">
                           
                           {/* Section 1 */}
        {/* Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0D7EB6]/40 bg-[#0D7EB6]/10 text-[#0D7EB6] text-xl mb-8">
          For Global System Integrators
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
          Unlock Faster Transformation. <br />
          <span className="text-[#0D7EB6]">Protect Margins.</span> Differentiate <br />
          Your CX Story.
        </h1>

        {/* Description */}
        <p className="mt-6 text-gray-300 text-lg max-w-3xl mx-auto">
          An AI-native platform that helps GSIs modernize legacy IVR into AI-powered
          customer service—faster, repeatable, and at scale.
        </p>

        {/* Stats */}
        <div className="flex flex-col md:flex-row justify-center gap-12 mt-10">
          <div>
            <h2 className="text-4xl font-bold text-[#0D7EB6]">5×</h2>
            <p className="text-gray-300 mt-1">Faster Transformation</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-[#0D7EB6]">70%+</h2>
            <p className="text-gray-300 mt-1">Automation</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-[#0D7EB6]">3-4×</h2>
            <p className="text-gray-300 mt-1">ROI on Delivery</p>
          </div>
        </div>

        {/* Buttons */}
       < div className="flex flex-col sm:flex-row justify-center gap-5 mt-14">
          <button className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#0D7EB6] hover:opacity-90 transition text-white font-medium cursor-pointer">
            Talk to an Expert <ArrowRight size={18} />
          </button>

          <button className="px-6 py-3 rounded-lg border border-[#0D7EB6] text-white hover:bg-[#0D7EB6]/10 transition font-medium cursor-pointer">
            See How It Works
          </button>
        </div>
      </div>
    </section>

                 {/* Section 2 */}
                  <section className="max-w-6xl mx-auto px-4 py-24 pb-10 ">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-semibold text-white text-center">
        Why Enterprises Are Struggling to{" "}
        <span className="text-[#0D7EB6]">Modernize</span>
        <br />
        <span className="text-[#0D7EB6]">at the Pace of AI</span>
      </h2>

      {/* Sub-heading */}
      <p className="mt-6 max-w-3xl mx-auto text-center text-white/70 text-lg leading-relaxed">
        Customers want conversations. Enterprises still offer menus.
        Legacy IVR is the bottleneck to AI-native customer service.
      </p>

      {/* Cards */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Card 1 */}
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8">
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#0D7EB6]/15">
            <Search className="h-6 w-6 text-[#0D7EB6]" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">
            Legacy IVR discovery is manual and unscalable
          </h3>
          <p className="text-white/70 leading-relaxed">
           Legacy IVR logic, flows, and integrations are buried in fragmented artifacts, making discovery slow, human-driven, and error-prone.
          </p>
        </div>

        {/* Card 2 */}
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8">
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#0D7EB6]/15">
            <RefreshCcw className="h-6 w-6 text-[#0D7EB6]" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">
            Every transformation starts from scratch
          </h3>
          <p className="text-white/70 leading-relaxed">
           There is no systematic reuse of CX designs, intents, or integrations—even across similar clients and platforms.
          </p>
        </div>

        {/* Card 3 */}
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8">
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#0D7EB6]/15">
            <DollarSign className="h-6 w-6 text-[#0D7EB6]" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">
           Complexity destroys delivery margins
          </h3>
          <p className="text-white/70 leading-relaxed">
            Deep IVR trees and integrations introduce scope creep and estimation risk, turning fixed-price deals into margin traps.
          </p>
        </div>

        {/* Card 4 */}
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8">
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#0D7EB6]/15 border border-[#0D7EB6]/40 shrink-0">
            <TrendingUp className="h-6 w-6 text-[#0D7EB6]" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">
                  AI platforms evolve faster than GSI delivery models      
          </h3>
          <p className="text-white/70 leading-relaxed">
            CX platforms innovate rapidly, but delivery methods remain services-heavy and linear, creating a widening execution gap.
          </p>
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
            <p className="text-white/70 leading-relaxed">
             Programs overrun estimates
            </p>
          </div>

          {/* Stat 2 */}
          <div>
            <div className="text-5xl font-semibold text-[#0D7EB6] mb-3">
              30%+
            </div>
            <p className="text-white/70 leading-relaxed">
              Margin erosion on complex deals
            </p>
          </div>

          {/* Stat 3 */}
          <div>
            <div className="text-5xl font-semibold text-[#0D7EB6] mb-3">
              30%+
            </div>
            <p className="text-white/70 leading-relaxed">
              Effort lost to manual discovery
            </p>
          </div>
        </div>

        {/* Impact Bar */}
        <div className="mt-16 rounded-2xl border border-[#0D7EB6]/30 bg-[#0D7EB6]/10 px-6 py-5 text-center">
          <p className="text-white">
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
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white">
          What GSIs Need to Win{" "}
          <span className="text-[#0D7EB6]">AI-Driven CX at Scale</span>
        </h2>

        {/* List */}
        <div className="mt-12 space-y-6">
          {items.map((item, index) => (
            <div
              key={index}
                 className="bg-[#0b2a3d]/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex items-start gap-1 transition-all duration-300 hover:border-[#0D7EB6]/40"            >
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#0D7EB6]/15 border border-[#0D7EB6]/40 text-[#0D7EB6] shrink-0">
                {item.icon}
              </div>

              {/* Text */}
              <div className="pl-6 h-12">
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-white/80 mt-1 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Highlight Box */}
        <div className="mt-12 p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md shadow-sm text-center">
          <p className="text-white text-sm md:text-base">
            <span className="text-[#0D7EB6] font-semibold">
              The Reality today:
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
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white">
          How Aumne Impacts{" "}
          <span className="text-[#0D7EB6]">GSI CX Transformation at Scale</span>
        </h2>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className=" rounded-2xl bg-linear-to-br from-[#0a0a0a] via-[#101c2f] to-[#036ffd]/20 p-8 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
              >
                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center rounded-xl
                                bg-[#0D7EB6]/10 text-[#0D7EB6] mb-5">
                  <Icon size={22} />
                </div>

                {/* Text */}
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/80">
                  {item.desc}
                </p>
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
    <h2 className="text-xl font-bold text-white text-center">
      Delivery Impact
    </h2>

    {/* Stats */}
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
      {/* Stat 1 */}
      <div>
        <p className="text-3xl font-bold text-[#0D7EB6]">5×</p>
        <p className="mt-2 text-sm text-white/80">
          Faster Transformation
        </p>
      </div>

      {/* Stat 2 */}
      <div>
        <p className="text-3xl font-bold text-[#0D7EB6]">70%+</p>
        <p className="mt-2 text-sm text-white/80">
          Automation
        </p>
      </div>

      {/* Stat 3 */}
      <div>
        <p className="text-3xl font-bold text-[#0D7EB6]">3–4×</p>
        <p className="mt-2 text-sm text-white">
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
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white">
          How GSIs Monetize{" "}
          <span className="text-[#0D7EB6]">
            Platform-Led CX Transformation
          </span>
        </h2>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {coins.slice(0, 3).map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="rounded-2xl bg-linear-to-br from-[#0a0a0a] via-[#101c2f] to-[#036ffd]/20 p-8 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
              >
                <div
                  className="mx-auto mb-5 w-12 h-12 flex items-center justify-center
                             rounded-xl bg-[#0D7EB6]/10 text-[#0D7EB6]"
                >
                  <Icon size={22} />
                </div>

                <h3 className="text-base font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/80">
                  {item.desc}
                </p>
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
                className="rounded-2xl bg-linear-to-br from-[#0a0a0a] via-[#101c2f] to-[#036ffd]/20 p-8 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
              >
                <div
                  className="mx-auto mb-5 w-12 h-12 flex items-center justify-center
                             rounded-xl bg-[#0D7EB6]/10 text-[#0D7EB6]"
                >
                  <Icon size={22} />
                </div>

                <h3 className="text-base font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/80">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
        <div className="max-w-5xl mx-auto mt-20 px-8 py-8 rounded-3xl border-white/10 bg-white/5 backdrop-blur-md shadow-sm">
  <p className="text-center text-lg md:text-xl text-white leading-relaxed">
    Aumne enables GSIs to{" "}
    <span className="text-[#0D7EB6] font-medium">
      grow revenue, protect margins,
    </span>{" "}
    and{" "}
    <span className="text-[#0D7EB6] font-medium">
      create recurring income
    </span>{" "}
    through a platform-led CX transformation model—while retaining full ownership and delivery control.
  </p>
</div>

    </section>


    </>
  );
};

export default Global;
