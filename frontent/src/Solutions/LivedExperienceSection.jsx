import { Users, BadgeCheck, Lightbulb, Rocket } from "lucide-react";

export default function LivedExperienceSection() {
  const items = [
    {
      text: "100+ years of combined experience in IVR, contact centers, enterprise CX, and platform engineering",
      icon: Users,
    },
    {
      text: "First-hand experience delivering large, services-heavy transformations",
      icon: BadgeCheck,
    },
    {
      text: "Deep legacy fluency combined with AI-native platform thinking",
      icon: Lightbulb,
    },
    {
      text: "Defining a new category: Agentic Service Lifecycle Management",
      icon: Rocket,
    },
  ];

  return (
    <section className="w-full py-10 relative">

      {/* HEADING (UNCHANGED ✅) */}
      <div className="max-w-6xl mx-auto px-4 relative z-10 -mb-30">
        <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight text-start">
          Built by People Who&apos;ve{" "} <br/>
          <span className="text-[#0D7EB6]">Lived the Problem</span>
        </h2>
      </div>

      {/* FULL WIDTH IMAGE */}
      <div className="relative w-full h-[680px]">

        <img
          src="/image/Build.jpg.jpeg"
          alt="Background"
          className="w-full h-full object-cover brightness-110 contrast-110 saturate-110"
        />

        {/* LIGHT BLUE OVERLAY (MORE IMAGE VISIBILITY ✅) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#001a33]/70 via-[#001a33]/40 to-transparent"></div>

{/* CARDS LIKE SECOND IMAGE (CUSTOM POSITIONING) */}
<div className="absolute inset-0">

  <div className="max-w-6xl mx-auto px-4 w-full h-full relative mt-15">

    {items.map((item, index) => {
      const Icon = item.icon;

      // custom positions like your reference image
      const positions = [
        "top-[92px]  left-[33px]",
        "top-[237px] left-[33px]",
        "top-[367px] left-[33px]",
        "top-[492px] left-[33px]",
      ];

      return (
        <div
          key={index}
          className={`absolute ${positions[index]}
          flex items-center gap-4 px-7 py-4 rounded-2xl w-[520px]
          border border-[#0D7EB6]/60
          bg-[#001a33]/55 backdrop-blur-md
          shadow-[0_0_35px_rgba(13,126,182,0.35)]
          transition-all duration-300 hover:scale-[1.02]`}
        >
          {/* ICON - PERFECT CENTER */}
          <div className="w-14 h-14 flex items-center justify-center rounded-xl
            bg-[#0D7EB6]/25 border border-[#0D7EB6]/60 shrink-0">
            <Icon className="w-7 h-7 text-[#0D7EB6]" />
          </div>

          {/* TEXT */}
          <p className="text-white/90 text-[16px] leading-relaxed">
            {item.text}
          </p>
        </div>
      );
    })}

  </div>
</div>


      </div>
    </section>
  );
}
