import { ArrowRight } from "lucide-react";

export default function BPO() {
  return (
    <>
          {/* Section 1  */}
    <section className="w-full relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 " />

      <div className="relative max-w-6xl mx-auto px-4 py-28 text-center text-white pb-10">

        {/* Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0D7EB6]/40 bg-[#0D7EB6]/10 text-[#0D7EB6] text-sm mb-8">
              For BPOs & CX Providers
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
          <span className="text-white">Empowering Your Agents.</span>{" "}<br/>
          <span className="text-[#0D7EB6]">
            Scaling Voice AI.
          </span>{" "}
          <span className="text-white"> Protecting Your Margins.</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg text-white/80 max-w-3xl mx-auto">
          Transform legacy IVR into AI-powered support, sales, and outreach with humans firmly in control.
        </p>

        {/* Stats */}
        <div className="flex flex-col md:flex-row justify-center gap-12 mt-14">
          <div>
            <h3 className="text-4xl font-bold text-[#0D7EB6]">30-40%</h3>
            <p className="text-sm text-white/80 mt-2">Reduction in Cost per Interaction</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-[#0D7EB6]">2-3×</h3>
            <p className="text-sm text-white/80 mt-2">
              Agent Productivity Improvement
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-[#0D7EB6]">40%+</h3>
            <p className="text-sm text-white/80 mt-2">
              Margin Improvement per Program
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

    </>
  );
}
