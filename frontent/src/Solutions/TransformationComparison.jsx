import { X, Check } from "lucide-react";

export default function TransformationComparison() {
  return (
    <section className="max-w-6xl mx-auto mt-5 px-4 min-h-screen flex flex-col justify-center">

  {/* Heading */}
  <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight text-center pb-6 md:pb-10">
    Why Services-Led Transformation <br className="hidden sm:block" />
    <span className="sm:hidden">No Longer Works</span>
    <span className="hidden sm:inline">No Longer Works</span>
  </h2>

  {/* Two Boxes */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[60vh]">

    {/* LEFT BOX */}
    <div
      className="relative rounded-2xl border border-white/10 
      bg-linear-to-br from-[#0a0a0a] via-[#101c2f] to-[#036ffd]/20 
      shadow-[0_20px_60px_rgba(0,0,0,0.8)]
      p-6 sm:p-8 md:p-10 flex flex-col gap-6"
    >
      {/* Header */}
      <div className="flex items-start gap-4">
        <span className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-red-500 text-white">
          <X className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={2.5} />
        </span>
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-white">
            Services-Led
          </h3>
          <p className="text-sm text-white/60">
            Yesterday’s approach
          </p>
        </div>
      </div>

      {/* List */}
      <ul className="space-y-4 sm:space-y-5 text-white/70 text-[15px] sm:text-[17px]">
        {[
          "Manual discovery",
          "Custom redesign every time",
          "Knowledge locked in people",
          "Long timelines",
          "One-off projects",
          "Risky production changes",
          "ROI uncertain",
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-3 sm:gap-4">
            <span className="mt-0.5 flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-red-500/10 text-red-400">
              <X className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={2.5} />
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* RIGHT BOX */}
    <div
      className="relative rounded-2xl border border-white/10 
      bg-linear-to-br from-[#0a0a0a] via-[#101c2f] to-[#036ffd]/20 
      shadow-[0_20px_60px_rgba(0,0,0,0.8)]
      p-6 sm:p-8 md:p-10 flex flex-col gap-6"
    >
      {/* Header */}
      <div className="flex items-start gap-4">
        <span className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-emerald-500 text-white">
          <Check className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={2.5} />
        </span>
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-white">
            Platform-Led with Aumne
          </h3>
          <p className="text-sm text-white/80">
            Today’s advantage
          </p>
        </div>
      </div>

      {/* List */}
      <ul className="space-y-4 sm:space-y-5 text-white/90 text-[15px] sm:text-[17px]">
        {[
          "Automated discovery",
          "Reusable patterns & intelligence",
          "Design intelligence in software",
          "Fast, repeatable delivery",
          "Continuous evolution",
          "Safe prototyping",
          "Predictable ROI",
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-3 sm:gap-4">
            <span className="mt-0.5 flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
              <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={2.5} />
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
