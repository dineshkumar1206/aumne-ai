import { Users, BadgeCheck, Lightbulb, Rocket } from "lucide-react";

export default function LivedExperienceSection() {
  const items = [
    {
      text: (
        <>
          <strong className="font-semibold text-[#0D7EB6]">100+</strong> years of
          combined experience in IVR, contact centers, enterprise CX, and platform
          engineering
        </>
      ),
      icon: Users,
    },
    {
      text: (
        <>
          <strong className="font-semibold text-[#0D7EB6]">First-hand</strong>{" "}
          experience delivering large, services-heavy transformations
        </>
      ),
      icon: BadgeCheck,
    },
    {
      text: (
        <>
          <strong className="font-semibold text-[#0D7EB6]">Deep legacy</strong>{" "}
          fluency combined with{" "}
          <strong className="font-semibold text-[#0D7EB6]">AI-native</strong>{" "}
          platform thinking
        </>
      ),
      icon: Lightbulb,
    },
    {
      text: (
        <>
          Defining a{" "}
          <strong className="font-semibold text-[#0D7EB6]">new category</strong>:
          Agentic Service Lifecycle Management Platform
        </>
      ),
      icon: Rocket,
    },
  ];

  return (
    <section className="w-full py-2 relative bg-transparent">
      {/* HEADING */}
      <div className="max-w-6xl mx-auto px-4 mb-16">
        <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight text-center">
          Built by People Who&apos;ve Lived the Problem
        </h2>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-14">

          {/* LEFT SIDE – CARDS */}
          <div className="relative w-1/2 h-[620px]">
            {items.map((item, index) => {
              const Icon = item.icon;

              const positions = [
                "top-[20px] left-[0px]",
                "top-[155px] left-[60px]",
                "top-[290px] left-[0px]",
                "top-[425px] left-[60px]",
              ];

              return (
                <div
                  key={index}
                  className={`absolute ${positions[index]}
                    flex items-center gap-4 px-7 py-4 rounded-2xl w-[520px]
                    border border-[#0D7EB6]/60
                    bg-[#001a33]/70 backdrop-blur-md
                    shadow-[0_0_35px_rgba(13,126,182,0.35)]
                    transition-all duration-300 hover:scale-[1.02]`}
                >
                  {/* ICON */}
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl
                    bg-[#0D7EB6]/25 border border-[#0D7EB6]/60 shrink-0">
                    <Icon className="w-7 h-7 text-[#0D7EB6]" />
                  </div>

                  {/* TEXT */}
                  <p className="text-white/90 text-[18px] leading-relaxed">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>

          {/* RIGHT SIDE – IMAGE */}
          <div className="w-1/2 h-[610px] relative rounded-3xl flex items-center justify-center">
            <img
              src="/image/team with laptop copy.png"
              alt="Team collaboration"
              className="max-w-full max-h-full object-contain pl-8"
            />

            {/* Subtle overlay for brand consistency */}
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#001a33]/30"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
