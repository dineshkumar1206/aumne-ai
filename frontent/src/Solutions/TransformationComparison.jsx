import { X, Check } from "lucide-react";

export default function TransformationComparison() {
  return (
    <section className="max-w-6xl mx-auto mt-5 px-4 min-h-screen flex flex-col justify-center">

      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight text-center pb-12">
        Why Services-Led Transformation <br />
        <span className="text-[#0D7EB6]">No Longer Works</span>
      </h2>

      {/* Two Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[60vh]">

        {/* LEFT BOX */}
        <div className="relative rounded-2xl border border-white/10 
          bg-linear-to-br from-[#0a0a0a] via-[#101c2f] to-[#036ffd]/20 
          shadow-[0_20px_60px_rgba(0,0,0,0.8)]
          p-8 md:p-10 flex flex-col justify-between">

          {/* Header */}
          <div className="flex items-start gap-4 mb-10">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500 text-white">
              <X className="h-5 w-5" strokeWidth={2.5} />
            </span>
            <div>
              <h3 className="text-lg font-semibold text-white">Services-Led</h3>
              <p className="text-sm text-white/50">Yesterday’s approach</p>
            </div>
          </div>

          {/* List */}
          <ul className="space-y-5 text-white/70 text-[15px]">
            {[
              "Manual discovery",
              "Custom redesign every time",
              "Knowledge locked in people",
              "Long timelines",
              "One-off projects",
              "Risky production changes",
              "ROI uncertain",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-red-500/10 text-red-400">
                  <X className="h-4 w-4" strokeWidth={2.5} />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT BOX */}
        <div className="relative rounded-2xl border border-white/10 
          bg-linear-to-br from-[#0a0a0a] via-[#101c2f] to-[#036ffd]/20 
          shadow-[0_20px_60px_rgba(0,0,0,0.8)]
          p-8 md:p-10 flex flex-col justify-between">

          {/* Header */}
          <div className="flex items-start gap-4 mb-10">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-white">
              <Check className="h-5 w-5" strokeWidth={2.5} />
            </span>
            <div>
              <h3 className="text-lg font-semibold text-white">
                Platform-Led with Aumne
              </h3>
              <p className="text-sm text-[#1CC2D1]">Today’s advantage</p>
            </div>
          </div>

          {/* List */}
          <ul className="space-y-5 text-white/70 text-[15px]">
            {[
              "Automated discovery",
              "Reusable patterns & intelligence",
              "Design intelligence in software",
              "Fast, repeatable delivery",
              "Continuous evolution",
              "Safe prototyping",
              "Predictable ROI",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
                  <Check className="h-4 w-4" strokeWidth={2.5} />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
