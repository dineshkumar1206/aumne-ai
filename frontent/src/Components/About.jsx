import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import LivedExperienceSection from "../Solutions/LivedExperienceSection";

const founders = [
  {
    role: "Chief Executive Officer & Co-founder",
    name: "Vinodh Govindan",
    image: "/image/founder-1.jpeg",
    linkedin: "https://www.linkedin.com/in/vinodh-govindan-56497ba/",
  },
  {
    role: "Chief Executive Officer & Co-founder",
    name: "Jagadish Kumar",
    image: "/image/founder-2.png",
    linkedin: "https://www.linkedin.com/in/jagadish-kumar-mohan-4b575b27/",
  },
];

function About() {
  return (
    <div>

      {/* Leadership Section */}
            <section className="py-14 bg-transparent">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight text-center pb-14">
            Leadership Team
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {founders.map((person, index) => (
              <div
                key={index}
                className="
                  relative
                  border border-[#0D7EB6]/50
                  bg-transparent
                  backdrop-blur-sm
                  rounded-2xl
                  p-7
                  flex flex-col items-center text-center
                  shadow-[0_0_25px_rgba(13,126,182,0.25)]
                  transition-transform duration-300
                  hover:scale-[1.02]
                "
              >
                {/* Image */}
                <div className="relative mb-4">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-[#0D7EB6] to-[#36c5f0] p-[2px]">
                    <div className="w-full h-full rounded-full bg-[#001a33] overflow-hidden">
                      <img
                        src={person.image}
                        alt={person.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Name */}
                <h3 className="text-xl font-semibold text-white">
                  {person.name}
                </h3>

                {/* Role */}
                <p className="text-sm text-white/70 mt-1">
                  {person.role}
                </p>

                {/* LinkedIn */}
                <a
                  href={person.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-3
                    w-9 h-9
                    flex items-center justify-center
                    rounded-full
                    border border-white/30
                    text-white
                    hover:bg-[#0D7EB6]
                    transition-all duration-300
                  "
                >
                  <FaLinkedinIn size={16} />
                </a>

                {/* Accent Line */}
                <div className="mt-6 w-14 h-[2px] bg-gradient-to-r from-transparent via-[#0D7EB6] to-transparent opacity-70" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-10 bg-transparent">
  <div className="max-w-6xl mx-auto px-6 text-center">
    {/* Heading */}
    <h3 className="text-3xl md:text-4xl font-semibold text-white mb-4">
      Our Story
    </h3>

    {/* Divider */}
    <div className="mx-auto mb-8 w-28 h-[2px] bg-gradient-to-r from-transparent via-[#0D7EB6] to-transparent opacity-80" />

    {/* Quote opener */}
    <p className="text-lg md:text-xl text-white italic max-w-3xl mx-auto mb-10">
      “The future of experience is intelligent — but only if enterprises can
      evolve what already exists.”
    </p>

    {/* Story Content */}
    <div className="space-y-6 max-w-5xl mx-auto text-left">
      <p className="text-base md:text-lg text-white leading-relaxed">
        As we looked toward a future shaped by AI-driven customer and employee
        experiences, we saw a fundamental disconnect. Customer behavior and
        expectations were evolving rapidly, yet most enterprises were still
        serving them through{" "}
        <span className="text-white font-medium">
          decades-old legacy systems
        </span>
        .
      </p>

      <p className="text-base md:text-lg text-white leading-relaxed">
        The barrier wasn’t ambition — it was infrastructure. While modern
        platforms were designed for greenfield innovation, enterprises needed a
        way to{" "}
        <span className="text-white font-medium">
          transform without replacing what already works
        </span>
        . True modernization demanded enterprise-grade governance, continuity,
        and control.
      </p>

      <p className="text-base md:text-lg text-white leading-relaxed">
        That realization led us to purpose-build a transformation platform that
        enables enterprises to safely harness advances in AI and deliver
        intelligent, conversational experiences {" "}
        <span className="text-white font-medium">
          without breaking their core systems
        </span>
        .
      </p>
    </div>

    {/* Philosophy Block */}
    <div className="mt-12 max-w-5xl mx-auto ">
      <h4 className="text-3xl md:text-4xl mb-4 font-semibold text-white tracking-tight text-center">
        Why Aumne
      </h4>
     <div className="space-y-6 max-w-5xl mx-auto text-left" >
      <p className="text-base items-start md:text-lg text-white leading-relaxed">
        <span className="text-white font-medium">Aum</span>, the first sound,
        represents listening and understanding intent.{" "}
        <span className="text-white font-medium">Ne</span>, meaning any, reflects
        our belief that enterprises should respond to any customer need.
        Together, Aumne embodies services that listen, adapt, and continuously
        evolve.
      </p>

      <p className="text-base md:text-lg text-white leading-relaxed">
        This philosophy comes to life through{" "}
        <span className="text-white font-medium">
          ACT — the Agentic Conversation Transformer
        </span>
        , enabling enterprises to understand intent and evolve customer services
        at the pace of change.
      </p>
      </div>
    </div>
  </div>
</section>


            <LivedExperienceSection />

    </div>
  );
}

export default About;
