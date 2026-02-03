import React from "react";
import { ArrowRight } from "lucide-react";
import { Clock, DollarSign, RefreshCcw, AlertTriangle,  Zap, Layers, ShieldCheck,  Target, TrendingUp, Lightbulb, BarChart3, } from "lucide-react";
import {
  Building2,
  Users
} from "lucide-react";

export default function Enterprise() {
  return (
    <>                       
                      {/* Section 1  */}
    <section className="w-full relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 " />

      <div className="relative max-w-6xl mx-auto px-4 py-28 text-center text-white pb-10">

        {/* Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0D7EB6]/40 bg-[#0D7EB6]/10 text-[#0D7EB6] text-sm mb-8">
          For Enterprise Leaders
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
          <span className="text-white">$53B at Stake:</span>{" "}
          <span className="text-[#0D7EB6]">
            The Next Platform <br/> Shift in Customer Service
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg text-white/80 max-w-3xl mx-auto">
          Transforming legacy IVR into intelligent conversational experiences with enterprise grade control.
        </p>

        {/* Stats */}
        <div className="flex flex-col md:flex-row justify-center gap-12 mt-14">
          <div>
            <h3 className="text-4xl font-bold text-[#0D7EB6]">5×</h3>
            <p className="text-sm text-white/80 mt-2">Faster Time to Value</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-[#0D7EB6]">70%</h3>
            <p className="text-sm text-white/80 mt-2">
              Automation Across Lifecycle
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-[#0D7EB6]">$150K+</h3>
            <p className="text-sm text-white/80 mt-2">
              Average Enterprise ARR
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-5 mt-14">
          <button className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#0D7EB6] hover:opacity-90 transition text-white font-medium cursor-pointer">
            Talk to an Expert <ArrowRight size={18} />
          </button>

          <button className="px-6 py-3 rounded-lg border border-[#0D7EB6] text-white hover:bg-[#0D7EB6]/10 transition font-medium cursor-pointer">
            See How It Works
          </button>
        </div>
      </div>
    </section>
                    {/* Section2 */}
      <section className="max-w-6xl mx-auto px-4 py-24 pb-10 ">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-semibold text-white text-center">
        Why Customer Service Needs{" "}
        <span className="text-[#0D7EB6]">Change</span>
        <br />
        {/* <span className="text-[#0D7EB6]">at the Pace of AI</span> */}
      </h2>

      {/* Sub-heading */}
      <p className="mt-6 max-w-3xl mx-auto text-center text-white/70 text-lg leading-relaxed">
        Customer expectations have moved faster than enterprise customer service systems.
      </p>

      {/* Cards */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Card 1 */}
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8">
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#0D7EB6]/15">
            <Clock className="h-6 w-6 text-[#0D7EB6]" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">
            Legacy IVR Blocks CX Innovation
          </h3>
          <p className="text-white/70 leading-relaxed">
           Outdated, menu driven IVR systems frustrate customers, slow resolution, and block meaningful CX improvements.
          </p>
        </div>

        {/* Card 2 */}
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8">
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#0D7EB6]/15">
            <DollarSign className="h-6 w-6 text-[#0D7EB6]" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">
            Customers Expect Conversational AI
          </h3>
          <p className="text-white/70 leading-relaxed">
           Modern users expect natural, intuitive conversations and not rigid menus and long call trees.
          </p>
        </div>

        {/* Card 3 */}
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8">
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#0D7EB6]/15">
            <RefreshCcw className="h-6 w-6 text-[#0D7EB6]" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">
                Modernization Is Painfully Slow         
          </h3>
          <p className="text-white/70 leading-relaxed">
            Typical IVR upgrades take 9 to 18 months, lagging far behind the pace of AI, product, and policy change.
          </p>
        </div>

        {/* Card 4 */}
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8">
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#0D7EB6]/15 border border-[#0D7EB6]/40 shrink-0">
            <AlertTriangle className="h-6 w-6 text-[#0D7EB6]" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">
           ROI on CX Investments Is Unpredictable
          </h3>
          <p className="text-white/70 leading-relaxed">
           Legacy systems inflate costs, limit experimentation, and prevent rapid prototyping and validation.
          </p>
        </div>
      </div>
    </section>
                         {/* Section 3 */}
 
    <section className="max-w-6xl mx-auto px-4 py-24 pt-8 pb-10">
      <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md px-10 py-16">
        {/* Title */}
        <h2 className="text-3xl font-bold text-white text-center mb-14">
          A Massive Opportunity
        </h2>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {/* Stat 1 */}
          <div>
            <div className="text-5xl font-semibold text-[#0D7EB6] mb-3">
              75%
            </div>
            <p className="text-white/70 leading-relaxed">
              Of enterprises still run on legacy IVR
            </p>
          </div>

          {/* Stat 2 */}
          <div>
            <div className="text-5xl font-semibold text-[#0D7EB6] mb-3">
              $1M+
            </div>
            <p className="text-white/70 leading-relaxed">
              Average transformation spend per enterprise
            </p>
          </div>

          {/* Stat 3 */}
          <div>
            <div className="text-5xl font-semibold text-[#0D7EB6] mb-3">
              67%
            </div>
            <p className="text-white/70 leading-relaxed">
              Customer abandonment during IVR interactions
            </p>
          </div>
        </div>

        {/* Impact Bar */}
        <div className="mt-16 rounded-2xl border border-[#0D7EB6]/30 bg-[#0D7EB6]/10 px-6 py-5 text-center">
          <p className="text-white">
            <span className="font-semibold text-[#0D7EB6]">
              Direct Impact:
            </span>{" "}
            NPS, churn, and revenue suffer from legacy IVR
          </p>
        </div>
      </div>
    </section>
      
      {/* Section 04 */}

       <section className="max-w-6xl mx-auto px-4 py-28 pb-10">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-semibold text-white text-center">
        Why Legacy IVR{" "}
        <span className="text-[#0D7EB6]">Persists</span>
      </h2>

      {/* Subheading */}
      <p className="mt-6 max-w-3xl mx-auto text-center text-white/80 text-lg leading-relaxed">
      The problem is not intent. It is tooling.
      </p>

      {/* Cards */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Card 1 */}
        <div className=" bg-[#0b2a3d]/60 backdrop-blur-xl border border-white/10 rounded-3xl p-10 transition-all duration-300 hover:border-[#0D7EB6]/40 ">
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl  bg-[#0D7EB6]/15 border border-[#0D7EB6]/40 shrink-0">
            <Building2 className="h-6 w-6 text-[#0D7EB6]" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">
            Greenfield Platforms Miss Legacy Reality
          </h3>
          <p className="text-white/80 leading-relaxed">
          Most modern CX platforms are designed for clean, new journeys and cannot interpret decades old IVR logic.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#0b2a3d]/60 backdrop-blur-xl border border-white/10 rounded-3xl p-10 transition-all duration-300 hover:border-[#0D7EB6]/40">
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl  bg-[#0D7EB6]/15 border border-[#0D7EB6]/40 shrink-0">
            <Users className="h-6 w-6 text-[#0D7EB6]" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">
            Manual, Services Led Transformation
          </h3>
          <p className="text-white/80 leading-relaxed">
            IVR modernization relies on custom, people heavy delivery models that do not scale.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#0b2a3d]/60 backdrop-blur-xl border border-white/10 rounded-3xl p-10 transition-all duration-300 hover:border-[#0D7EB6]/40">
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#0D7EB6]/15 border border-[#0D7EB6]/40 shrink-0">
            <AlertTriangle className="h-6 w-6 text-[#0D7EB6]" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">
            Fragmented Business Logic
          </h3>
          <p className="text-white/80 leading-relaxed">
            Critical IVR knowledge is scattered across VXML, code, diagrams, configurations, and tribal expertise, making automation difficult.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-[#0b2a3d]/60 backdrop-blur-xl border border-white/10 rounded-3xl p-10 transition-all duration-300 hover:border-[#0D7EB6]/40">
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#0D7EB6]/15 border border-[#0D7EB6]/40 shrink-0">
            <DollarSign className="h-6 w-6 text-[#0D7EB6]" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">
            Outcome
          </h3>
          <p className="text-white/80 leading-relaxed">
           IVR becomes a permanent bottleneck instead of an evolving capability.
          </p>
        </div>
      </div>
    </section>    
                {/* Section 5 */}
                 <section className="max-w-6xl mx-auto px-4 py-28 pb-10">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-semibold text-center text-white">
        Aumne AI{" "}
        <span className="text-[#0D7EB6]">Aumne&apos;s AI-Native Platform</span>
      </h2>

      {/* Subheading */}
      <p className="mt-6 max-w-3xl mx-auto text-center text-white/70 text-lg">
        Aumne is an <b> AI native Service Lifecycle Management platform </b>designed specifically for enterprise IVR modernization.
      </p>

      {/* Cards */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="rounded-2xl bg-linear-to-br from-[#0a0a0a] via-[#101c2f] to-[#036ffd]/20 p-8 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#0D7EB6]/20 mx-auto">
            <Zap className="h-7 w-7 text-[#0D7EB6]" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-3">
            AI Native Platform for Legacy IVR
          </h3>
          <p className="text-white/70 leading-relaxed">
            Purpose built to modernize complex, production IVR systems at scale.
          </p>
        </div>

        {/* Card 2 */}
        <div className="rounded-2xl bg-linear-to-br from-[#0a0a0a] via-[#101c2f] to-[#036ffd]/20 p-8 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#0D7EB6]/20 mx-auto">
            <Layers className="h-7 w-7 text-[#0D7EB6]" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Intelligent Auto Discovery
          </h3>
          <p className="text-white/70 leading-relaxed">
            Automatically maps existing IVR logic and artifacts before transformation begins.
          </p>
        </div>

        {/* Card 3 */}
        <div className="rounded-2xl bg-linear-to-br from-[#0a0a0a] via-[#101c2f] to-[#036ffd]/20 p-8 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#0D7EB6]/20 mx-auto">
            <RefreshCcw className="h-7 w-7 text-[#0D7EB6]" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Conversational Journey Automation
          </h3>
          <p className="text-white/70 leading-relaxed">
            Generates personalized, omnichannel customer journeys <b> up to 70 percent </b>faster.
          </p>
        </div>
      </div>

      {/* Bottom row */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:px-28">
        {/* Card 4 */}
        <div className="rounded-2xl bg-linear-to-br from-[#0a0a0a] via-[#101c2f] to-[#036ffd]/20 p-8 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#0D7EB6]/20 mx-auto">
            <ShieldCheck className="h-7 w-7 text-[#0D7EB6]" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Continuous Service Evolution
          </h3>
          <p className="text-white/70 leading-relaxed">
           Built in prototyping, recommendations, and A B testing enable ongoing improvement instead of one time projects.
          </p>
        </div>

        {/* Card 5 */}
        <div className="rounded-2xl bg-linear-to-br from-[#0a0a0a] via-[#101c2f] to-[#036ffd]/20 p-8 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#0D7EB6]/20  mx-auto">
            <Target className="h-7 w-7 text-[#0D7EB6]" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Continuous Evolution at AI Speed
          </h3>
          <p className="text-white/70 leading-relaxed">
            Customer service should evolve as fast as your business safely.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-20 px-8 py-8 rounded-3xl border-white/10 bg-white/5 backdrop-blur-md shadow-sm">
  <p className="text-center text-lg md:text-xl text-white leading-relaxed">
    We turn{" "}
    <span className="text-[#0D7EB6] font-medium">
      decades of legacy IVR
    </span>{" "}
    into modern, conversational & omnichannel experiences with{" "}
    <span className="text-[#0D7EB6] font-medium">
      5× faster time to value
    </span>.
  </p>
</div>

    </section>

{/* Section 6 */}

             <section className="max-w-6xl mx-auto px-4 py-28 pb-10">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-semibold text-center text-[#0D7EB6] mb-16">
        Why Now
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* LEFT LIST */}
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

        {/* RIGHT CARD */}
        <div className="rounded-2xl border-white/10 bg-white/5 backdrop-blur-md shadow-sm pt-5 pl-5 pr-5">
          {/* Icon */}
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
    </section>
       {/*  Section 7 */}

       <section className="max-w-6xl mx-auto px-4 py-32 pb-10">
      {/* Heading */}
      <h2 className="text-center text-4xl md:text-5xl font-semibold mb-20">
        <span className="text-white">Why Us – </span>
        <span className="text-[#0D7EB6]">The Team</span>
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Card 1 */}
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

        {/* Card 2 */}
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

        {/* Card 3 */}
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
    </section>
     
</>
  );
}
