export default function TransformationComparison() {
  return (
    <section className="max-w-6xl mx-auto mt-28 px-4">

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold text-[#159ce0] mb-4 tracking-tight">
        Why Services-Led Transformation No Longer Works
      </h2>

      {/* Accent Divider */}
      <div className="h-[2px] w-24 bg-linear-to-r from-[#1E4EAD] via-[#1D82BD] to-[#1CC2D1] mb-14" />

     {/* Comparison Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden border border-white/15">

  {/* LEFT — SERVICES LED */}
  <div className="relative p-8 md:p-10 border-b md:border-b-0 md:border-r border-white/10">

    {/* subtle edge glow */}
    <div className="pointer-events-none absolute inset-0 border-l-4 border-transparent bg-gradient-to-r from-white/5 to-transparent" />

    {/* <h3 className="text-lg uppercase tracking-widest text-white/60 mb-2">
      Then
    </h3> */}

    <h3 className="text-xl font-semibold text-white mb-8">
      Services-Led: Yesterday’s Approach
    </h3>

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
        <li key={i} className="flex items-start gap-3">
          <span className="mt-1 h-2 w-2 rounded-full bg-[#159ce0]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>

  {/* RIGHT — PLATFORM LED */}
  <div className="relative p-8 md:p-10">

    {/* subtle edge glow */}
    <div className="pointer-events-none absolute inset-0 border-l-4 border-transparent bg-gradient-to-r from-[#1CC2D1]/20 to-transparent" />

    {/* <h3 className="text-lg uppercase tracking-widest text-[#1CC2D1]/80 mb-2">
      Now
    </h3> */}

    <h3 className="text-xl font-semibold text-white mb-8">
      Platform-Led with Aumne: Today’s Advantage
    </h3>

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
        <li key={i} className="flex items-start gap-3">
          <span className="mt-1 h-2 w-2 rounded-full bg-[#1CC2D1]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>

</div>

    </section>
  );
}
