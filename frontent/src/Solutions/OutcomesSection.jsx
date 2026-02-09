import { Headset, BarChart3, RefreshCcw } from "lucide-react";


const OutcomesSection = () => {
 const outcomes = [
  { no: "5X", text: "Faster GTM" },
  { no: "70%+", text: "Automation Across the Lifecycle" },
  { no: "3X", text: "ROI on Transformation" },

  {
    text: "Reduced Abandonment and Agent Load",
    icon: Headset,
  },
  {
    text: "Predictable Modernization Economics",
    icon: BarChart3,
  },
  {
    text: "Continuous CX Improvement",
    icon: RefreshCcw,
  },
];


  return (
    <section className="max-w-6xl mx-auto mt-20 px-4 mb-10">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
       <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-white tracking-tight text-center pb-10">
  Outcomes That{" "}
  Matter
</h2>


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
                  h-full min-h-[120px] flex items-center
                  rounded-2xl
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
               <div className="flex items-center gap-6 w-full">
  {/* ICON (only when no number) */}
  {!item.no && item.icon && (
    <div className="flex w-13 h-11 items-center justify-center text-[#0D7EB6] rounded-xl 
          bg-[#0D7EB6]/15 border border-[#0D7EB6]/40">
      <item.icon
        className="w-8 h-8"
        strokeWidth={1.6}
      />
    </div>
  )}
              {/* NUMBER */}
  {item.no && (
    <div className="flex-shrink-0 text-[#0D7EB6] font-extrabold text-3xl md:text-4xl">
      {item.no}
    </div>
  )}

                  {/* DIVIDER */}
                  {item.no && <div className="w-px h-12 bg-white/20"></div>}

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
