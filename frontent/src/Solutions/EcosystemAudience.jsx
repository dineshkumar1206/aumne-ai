import { Building2, Users, Headphones } from "lucide-react";

export default function EcosystemAudience() {
  return (
    <section className="max-w-7xl mx-auto mt-18 px-4 pb-10">

      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight text-center pb-10">
        Built for the Ecosystem that Delivers <br />
        Customer Service
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* Enterprises */}
        <div className="rounded-2xl border border-white/10
          bg-linear-to-br from-[#0a0a0a] via-[#101c2f] to-[#036ffd]/20
          p-8 shadow-[0_20px_60px_rgba(0,0,0,0.8)]
          transition hover:shadow-md
          text-center lg:text-left">

          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl 
            bg-[#0D7EB6]/15 border border-[#0D7EB6]/40 text-[#0D7EB6] mx-auto lg:mx-0">
            <Building2 className="h-7 w-7" strokeWidth={2} />
          </div>

          <h3 className="text-lg font-semibold text-white mb-3">
            Enterprises
          </h3>

          <p className="text-white/80 text-[16px] leading-relaxed">
            Modernize complex legacy IVRs without ripping and replacing
            existing platforms.
          </p>

          <button className="mt-5 text-sm font-medium text-[#0D7EB6] hover:underline">
            Turn your legacy IVR into Conversational AI →
          </button>
        </div>

        {/* GSIs */}
        <div className="rounded-2xl border border-white/10
          bg-linear-to-br from-[#0a0a0a] via-[#101c2f] to-[#036ffd]/20
          p-8 shadow-[0_20px_60px_rgba(0,0,0,0.8)]
          transition hover:shadow-md
          text-center lg:text-left">

          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl 
            bg-[#0D7EB6]/15 border border-[#0D7EB6]/40 text-[#0D7EB6] mx-auto lg:mx-0">
            <Users className="h-7 w-7" strokeWidth={2} />
          </div>

          <h3 className="text-lg font-semibold text-white mb-3">
            Global System Integrators (GSI)
          </h3>

          <p className="text-white/80 text-[16px] leading-relaxed">
            Deliver AI-driven CX / EX transformation faster, at scale,
            while protecting margins.
          </p>

          <button className="mt-5 text-sm font-medium text-[#0D7EB6] hover:underline">
            Unlock faster transformation →
          </button>
        </div>

        {/* BPOs */}
        <div className="rounded-2xl border border-white/10
          bg-linear-to-br from-[#0a0a0a] via-[#101c2f] to-[#036ffd]/20
          p-8 shadow-[0_20px_60px_rgba(0,0,0,0.8)]
          transition hover:shadow-md
          text-center lg:text-left">

          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl 
            bg-[#0D7EB6]/15 border border-[#0D7EB6]/40 text-[#0D7EB6] mx-auto lg:mx-0">
            <Headphones className="h-7 w-7" strokeWidth={2} />
          </div>

          <h3 className="text-lg font-semibold text-white mb-3">
            BPOs
          </h3>

          <p className="text-white/80 text-[16px] leading-relaxed">
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
