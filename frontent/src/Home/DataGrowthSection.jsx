import { Search, Sparkles, Shield, Globe, RefreshCw } from "lucide-react";

export default function DataGrowthSection() {
  const cards = [
    {
      icon: <Search className="w-7 h-7" />,
      title: "Understand Legacy First",
      desc:
        "Auto-discovery of IVR code, flows, configurations, APIs, call recordings, and transcripts, revealing what exists, what works, and what must change.",
    },
    {
      icon: <Sparkles className="w-7 h-7" />,
      title: "Automate Conversational Transformation",
      desc:
        "AI-driven design and build converts legacy logic into conversational experiences, reducing time and effort by up to 70%.",
    },
    {
      icon: <Shield className="w-7 h-7" />,
      title: "Human-in-the-Loop Governance",
      desc:
        "Built-in review, approvals, versioning, rollback, and compliance controls. provides enterprise grade control.",
    },
    {
      icon: <Globe className="w-7 h-7" />,
      title: "Build Once. Deploy Everywhere",
      desc:
        "Deploy consistently across regions, platforms and channels like voice, chat, web, and messaging without duplicating logic or redesigning journeys.",
    },
    {
      icon: <RefreshCw className="w-7 h-7" />,
      title: "Continuously Evolve Services",
      desc:
        "Built-in change management helps rapid prototyping, recommendations, and controlled iteration to keep customer service aligned with changing products and policies.",
    },
  ];

  return (
    <section className="relative py-5">
      <div className="max-w-[1700px] mx-auto -px-6">
        {/* CARD ROW */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 -mt-13">
          {cards.map((card, index) => (
            <GrowthCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= CARD ================= */

const GrowthCard = ({ icon, title, desc }) => {
  return (
    <>
    <div className="relative pt-10">
      {/* TOP FLOATING BADGE (layout like image) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
        <div
          className="
            w-14 h-14 rounded-full
            flex items-center justify-center
            border bg-[#0D7EB6]/15 border border-[#0D7EB6]/40 shrink-0 text-[#0D7EB6] mt-13 "
        >
          {icon}
        </div>
      </div>

      {/* CARD BODY */}
      <div
        className="
          h-[385px]
          rounded-2xl
          border border-white/10
          bg-linear-to-br from-[#0a0a0a] via-[#101c2f] to-[#036ffd]/20
          shadow-[0_20px_60px_rgba(0,0,0,0.8)]
          px-6 pt-20 pb-7
          flex flex-col 
        "
      >
        <h3 className="text-lg font-semibold text-[#0D7EB6] mb-4 text-center">
          {title}
        </h3>

        <p className="text-sm text-white/80 leading-relaxed text-center">
          {desc}
        </p>
      </div>
    </div>
    </>
  );
};
