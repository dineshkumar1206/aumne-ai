const OutcomesSection = () => {
const outcomes = [
  { no: "5×", text: " faster time to value" },
  { no: "70%+", text: " automation across the lifecycle" },
  { no: "3×", text: " ROI on transformation" },
  { text: "Reduced abandonment and agent load" },
  {text:"Predictable modernization economics"},
  { text: "Continuous CX improvement" },
  
];


  return (
    <section className="max-w-6xl mx-auto mt-32 px-4 mb-10">
      {/* Background gradient like your site */}
      <div className="absolute inset-0" />

      {/* Glow wave effect */}
      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#0b3a5a,transparent_55%)] opacity-50"></div> */}

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading style (same as your ecosystem section) */}
       <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight text-center pb-10">
          Outcomes That{" "}
          <span className="text-[#0D7EB6]">Matter</span>
        </h2>           
                            {/* Outcomes That matter */}
        {/* <div className="w-16 h-[2px] bg-[#159ce0] mt-3 mb-16"></div> */}

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
          h-full rounded-2xl
          bg-linear-to-br from-[#0a0a0a] via-[#101c2f] to-[#036ffd]/20
          p-6 
          border border-white/10
          shadow-[0_20px_60px_rgba(0,0,0,0.8)]
          transition-all duration-300
          group-hover:border-[#159ce0]/40
          group-hover:shadow-[0_0_50px_rgba(21,156,224,0.25)]
        "
      >
        {/* CONTENT ROW */}
        <div className="flex items-center gap-6">
          
            {/* NUMBER */}
  {item.no && (
    <div className="flex-shrink-0 text-[#0D7EB6] font-extrabold text-x1 md:text-2xl">
      {item.no}
    </div>
  )}

          {/* DIVIDER (only first row items) */}
  {item.no && <div className="w-px h-12 bg-white/20"></div>}

          {/* TEXT */}
            {/* TEXT */}
  <p className="text-white/80 text-[16px] leading-relaxed font-medium">
    {item.text}
  </p>
        </div>
      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default OutcomesSection;
