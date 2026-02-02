import { X, Check } from "lucide-react";

export default function TransformationComparison() {
  return (
    <section className="max-w-5xl mx-auto mt-28 px-4">

      {/* Heading */}
       <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight text-center pb-10">
          Why Services-Led Transformation{" "} <br/>
          <span className="text-[#0D7EB6]">No Longer Works</span>
        </h2>

                      {/* Why Services-Led Transformation No Longer Works */}
             
      {/* Accent Divider */}
      {/* <div className="h-[2px] w-24 bg-linear-to-r from-[#1E4EAD] via-[#1D82BD] to-[#1CC2D1] mb-14" /> */}

      {/* Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 rounded-2xl border  bg-linear-to-br from-[#0a0a0a] via-[#101c2f] to-[#036ffd]/20 p-8  border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] p-8
                        shadow-sm hover:shadow-md transition">

        {/* LEFT — SERVICES LED */}
        <div className="relative p-8 md:p-10 ">

          {/* subtle edge glow */}
          <div className="pointer-events-none absolute inset-0" />

          {/* Header */}
          <div className="flex items-start gap-4 mb-10">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-red-400 text-white">
              <X className="h-5 w-5" strokeWidth={2.5} />
            </span>

            <div>
              <h3 className="text-lg font-semibold text-white">
                Services-Led
              </h3>
              <p className="text-sm text-white/50">
                Yesterday’s approach
              </p>
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

        {/* RIGHT — PLATFORM LED */}
        <div className="relative p-8 md:p-10">

          {/* subtle edge glow */}
          <div className="pointer-events-none absolute inset-0" />

          {/* Header */}
          <div className="flex items-start gap-4 mb-10">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-white">
              <Check className="h-5 w-5" strokeWidth={2.5} />
            </span>

            <div>
              <h3 className="text-lg font-semibold text-white">
                Platform-Led with Aumne
              </h3>
              <p className="text-sm text-[#1CC2D1]">
                Today’s advantage
              </p>
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
