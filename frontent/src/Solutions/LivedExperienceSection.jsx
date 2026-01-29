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
    <section className="w-full py-28 pb-15">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight text-center">
          Built by People Who&apos;ve{" "}
          <span className="text-[#0D7EB6]">Lived the Problem</span>
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-5 p-6 rounded-2xl border border-white/10
                bg-linear-to-br from-[#0a0a0a] via-[#101c2f] to-[#036ffd]/20
                shadow-[0_20px_60px_rgba(0,0,0,0.8)]
                transition-all duration-300 hover:border-white/20 hover:scale-[1.02]"
              >
                {/* Icon Box */}
                <div className="w-12 h-12 flex items-center justify-center rounded-xl 
                bg-[#0D7EB6]/15 border border-[#0D7EB6]/40 shrink-0">
                  <Icon className="w-6 h-6 text-[#0D7EB6]" />
                </div>

                {/* Text */}
                <p className="text-white/80 text-[16px] md:text-[17px] leading-relaxed">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
