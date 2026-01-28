const OutcomesSection = () => {
  const outcomes = [
    "5× faster time to value",
    "70%+ automation across the lifecycle",
    "3× ROI on transformation",
    "Reduced abandonment and agent load",
    "Predictable modernization economics",
    "Continuous CX improvement",
  ];

  return (
    <section className="max-w-6xl mx-auto mt-28 px-4">
      {/* Background gradient like your site */}
      <div className="absolute inset-0" />

      {/* Glow wave effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#0b3a5a,transparent_55%)] opacity-50"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading style (same as your ecosystem section) */}
        <h2 className="text-3xl md:text-4xl font-semibold text-[#159ce0] tracking-tight">
          Outcomes That Matter
        </h2>
        <div className="w-16 h-[2px] bg-[#159ce0] mt-3 mb-16"></div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {outcomes.map((item, index) => (
            <div
              key={index}
              className="
                group relative rounded-2xl p-[1px]
                bg-gradient-to-br from-[#159ce0]/30 via-transparent to-[#159ce0]/10
              "
            >
              <div
                className="
                  h-full rounded-2xl bg-[#060d13]/90 backdrop-blur-xl
                  px-8 py-7 border border-white/10
                  transition-all duration-300
                  group-hover:border-[#159ce0]/40
                  group-hover:shadow-[0_0_50px_rgba(21,156,224,0.25)]
                "
              >
                <p className="text-white/80 text-[16px] leading-relaxed font-medium">
                  {item}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OutcomesSection;
