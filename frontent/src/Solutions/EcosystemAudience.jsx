

export default function EcosystemAudience() {
  return (
    <section className="max-w-6xl mx-auto mt-28 px-4">

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold text-[#159ce0] mb-4 tracking-tight">
        Built for the Ecosystem That Delivers Customer Service
      </h2>

      <div className="h-[2px] w-24 bg-linear-to-r from-[#1E4EAD] via-[#1D82BD] to-[#1CC2D1] mb-16" />

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Enterprises */}
        <div className="group relative rounded-2xl border border-white/15 p-8 backdrop-blur-sm
                        transition-all duration-300
                        hover:border-[#159ce0]/40 hover:shadow-[0_0_30px_-10px_#159ce0]">

          {/* Accent */}
          {/* <div className="absolute top-0 left-0 h-[3px] w-20 bg-[#159ce0] rounded-full" /> */}

          <h3 className="text-lg font-semibold text-[#159ce0] mb-4 tracking-wide
                         transition group-hover:text-[#1CC2D1]">
            Enterprises
          </h3>

          <p className="text-white/70 leading-relaxed text-[15px]">
            Modernize complex legacy IVRs without ripping and replacing
            existing platforms.
          </p>
        </div>

        {/* GSIs */}
        <div className="group relative rounded-2xl border border-white/15 p-8 backdrop-blur-sm
                        transition-all duration-300
                        hover:border-[#1D82BD]/40 hover:shadow-[0_0_30px_-10px_#1D82BD]">

          {/* <div className="absolute top-0 left-0 h-[3px] w-20 bg-[#1D82BD] rounded-full" /> */}

          <h3 className="text-lg font-semibold text-[#1D82BD] mb-4 tracking-wide
                         transition group-hover:text-[#1CC2D1]">
            Global System Integrators
          </h3>

          <p className="text-white/70 leading-relaxed text-[15px]">
            Deliver AI-driven CX transformation faster, at scale,
            while protecting margins.
          </p>
        </div>

        {/* BPOs */}
        <div className="group relative rounded-2xl border border-white/15 p-8 backdrop-blur-sm
                        transition-all duration-300
                        hover:border-[#1CC2D1]/40 hover:shadow-[0_0_30px_-10px_#1CC2D1]">

          {/* <div className="absolute top-0 left-0 h-[3px] w-20 bg-[#1CC2D1] rounded-full" />  1CC2D1 */}

          <h3 className="text-lg font-semibold text-[#159ce0] mb-4 tracking-wide
                         transition group-hover:text-[#1CC2D1]">
            BPOs & CX Providers
          </h3>

          <p className="text-white/70 leading-relaxed text-[15px]">
            Enable{" "}
            <span className="font-semibold text-white/85">
              Human + Voice AI
            </span>{" "}
            service models that improve productivity, margins,
            and deal competitiveness.
          </p>
        </div>

      </div>
    </section>
  );
}
