import { Building2, Users, Headphones } from "lucide-react";

export default function EcosystemAudience() {
  return (
    <section className="max-w-6xl mx-auto mt-28 px-4 pb-5">

      {/* Heading */}
     <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight text-center pb-10">
          Built for the Ecosystem that Delivers{" "}<br/>
          <span className="text-[#0D7EB6]"> Customer Service</span>
        </h2>
                         {/* built for the ecosystem that    delivers customer service*/}

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Enterprises */}
        <div className="rounded-2xl border  bg-linear-to-br from-[#0a0a0a] via-[#101c2f] to-[#036ffd]/20 p-8  border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] p-8
                        shadow-sm hover:shadow-md transition">

          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#0D7EB6]/15 border border-[#0D7EB6]/40 shrink-0 text-[#0D7EB6] mx-auto">
            <Building2 className="h-7 w-7" strokeWidth={2} />
          </div>

          <h3 className="text-lg font-semibold text-white mb-3">
            Enterprises <br/><br/>
          </h3>

          <p className="text-white/80 text-[15px] leading-relaxed">
            Modernize complex legacy IVRs without ripping and replacing
            existing platforms.
          </p>

          <button className="mt-5 text-sm font-medium text-[#0D7EB6] hover:underline">
            See the enterprise perspective →
          </button>
        </div>

        {/* GSIs */}
        <div className="rounded-2xl  border  bg-linear-to-br from-[#0a0a0a] via-[#101c2f] to-[#036ffd]/20 p-8  border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] p-8
                        shadow-md">

          <div className="mb-6 flex h-14 w-14 items-center justify-center
                          rounded-xl bg-[#0D7EB6]/15 border border-[#0D7EB6]/40 shrink-0 text-[#0D7EB6] mx-auto">
            <Users className="h-7 w-7" strokeWidth={2} />
          </div>

          <h3 className="text-lg font-semibold text-white mb-3">
            Global System Integrators (GSIs)
          </h3>

          <p className="text-white/80 text-[15px] leading-relaxed">
            Deliver AI-driven CX transformation faster, at scale,
            while protecting margins.
          </p>

          <button className="mt-5 text-sm font-medium text-[#0D7EB6] hover:underline">
            How does it come together? →
          </button>
        </div>

        {/* BPOs */}
        <div className="rounded-2xl  border  bg-linear-to-br from-[#0a0a0a] via-[#101c2f] to-[#036ffd]/20 p-8  border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] p-8
                        shadow-sm hover:shadow-md transition">

          <div className="mb-6 flex h-14 w-14 items-center justify-center
                          rounded-xl bg-[#0D7EB6]/15 border border-[#0D7EB6]/40 shrink-0 text-[#0D7EB6] mx-auto">
            <Headphones className="h-7 w-7" strokeWidth={2} />
          </div>

          <h3 className="text-lg font-semibold text-white mb-3">
            BPOs & CX Providers <br/><br/>
          </h3>

          <p className="text-white/80 text-[15px] leading-relaxed">
            Enable Human + Voice AI service models that improve productivity,
            margins, and deal competitiveness.
          </p>

          <button className="mt-5 text-sm font-medium text-[#0D7EB6] hover:underline">
            Explore the BPO advantage →
          </button>
        </div>

      </div>
    </section>
  );
}
