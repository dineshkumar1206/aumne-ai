import { Users, BadgeCheck, Lightbulb, Rocket } from "lucide-react";

export default function LivedExperienceSection() {
  const items = [
    {
      text: (
        <>
          <strong className="font-semibold">100+</strong> years of
          combined experience in IVR, contact centers, enterprise CX, and platform
          engineering
        </>
      ),
      icon: Users,
    },
    {
      text: (
        <>
          <strong className="font-semibold ">First-hand</strong>{" "}
          experience delivering large, services-heavy transformations
        </>
      ),
      icon: BadgeCheck,
    },
    {
      text: (
        <>
          <strong className="font-semibold ">Deep legacy</strong>{" "}
          fluency combined with{" "}
          <strong className="font-semibold ">AI-native</strong>{" "}
          platform thinking
        </>
      ),
      icon: Lightbulb,
    },
    {
      text: (
        <>
          Defining a{" "}
          <strong className="font-semibold ">new category</strong>:
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
  <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14">

    {/* LEFT SIDE – CARDS */}
    <div className="relative w-full md:w-1/2 md:h-[620px] flex flex-col gap-6 md:block">

      {items.map((item, index) => {
        const Icon = item.icon;

        const positions = [
          "md:top-[20px] md:left-[0px]",
          "md:top-[155px] md:left-[60px]",
          "md:top-[290px] md:left-[0px]",
          "md:top-[425px] md:left-[60px]",
        ];

        return (
          <div
            key={index}
            className={`
              md:absolute ${positions[index]}
              flex items-center gap-4 
              px-5 md:px-7 py-4 
              rounded-2xl 
              w-full md:w-[520px]
              border border-[#0D7EB6]/60
              bg-[#001a33]/70 backdrop-blur-md
              shadow-[0_0_35px_rgba(13,126,182,0.35)]
              transition-all duration-300 hover:scale-[1.02]
            `}
          >
            {/* ICON */}
            <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-xl
              bg-[#0D7EB6]/25 border border-[#0D7EB6]/60 shrink-0">
              <Icon className="w-6 h-6 md:w-7 md:h-7 text-[#0D7EB6]" />
            </div>

            {/* TEXT */}
            <p className="text-white/90 text-[15px] md:text-[18px] leading-relaxed">
              {item.text}
            </p>
          </div>
        );
      })}
    </div>

    {/* RIGHT SIDE – IMAGE */}
    <div className="w-full md:w-1/2 h-[300px] md:h-[610px] relative rounded-3xl flex items-center justify-center">
      <img
        src="/image/team with laptop copy.png"
        alt="Team collaboration"
        className="max-w-full max-h-full object-contain md:pl-8"
      />
      <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#001a33]/30"></div>
    </div>

  </div>
</div>
    </section>
  );
}
