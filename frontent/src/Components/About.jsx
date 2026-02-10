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
    role: "Chief Product Officer & Co-founder",
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
      “Empowering Enterprises to Take Control of AI-Driven Customer Service.”
    </p>

    {/* Story Content */}
<div className="space-y-6 max-w-5xl mx-auto text-left">
  <p className="text-base md:text-lg text-white leading-relaxed">
    As we looked to the future of customer and employee experience shaped by AI,
    we saw a fundamental disconnect. Customer behavior and expectations are
    evolving rapidly, yet most enterprises continue to serve them through{" "}
    <span className="text-white font-medium">
      decades-old legacy systems
    </span>
    .
  </p>

  <p className="text-base md:text-lg text-white leading-relaxed">
    When we looked deeper into what was truly holding enterprises back from
    modernizing, it was not ambition but the constraints of{" "}
    <span className="text-white font-medium">
      legacy infrastructure
    </span>
    . While many new-age platforms were built for greenfield deployments,
    enterprises needed a way to evolve from what already exists.
  </p>

  <p className="text-base md:text-lg text-white leading-relaxed">
    This gap between platform assumptions and enterprise reality made it clear
    that transformation must build on existing systems with{" "}
    <span className="text-white font-medium">
      enterprise-grade governance
    </span>
    . This realization led us to purpose-build a transformation platform that
    puts enterprises back in control, enabling them to safely leverage advances
    in AI to deliver intelligent conversational experiences.
  </p>
</div>

{/* Philosophy Block */}
<div className="mt-12 max-w-5xl mx-auto">
  <h4 className="text-3xl md:text-4xl mb-4 font-semibold text-white tracking-tight text-center">
    Why Aumne
  </h4>

  <div className="space-y-6 max-w-5xl mx-auto text-left">
    <p className="text-base md:text-lg text-white leading-relaxed">
      The name{" "}
      <span className="text-white font-medium">Aumne</span> reflects our core
      philosophy.{" "}
      <span className="text-white font-medium">'Aum'</span>, the first sound,
      represents listening and understanding intent, while{" "}
      <span className="text-white font-medium">'ne'</span>, meaning any, reflects
      our belief that enterprises should be able to respond to any customer
      need. Together, Aumne embodies our vision of services that listen, adapt,
      and evolve continuously.
    </p>

    <p className="text-base md:text-lg text-white leading-relaxed">
      This philosophy is brought to life through{" "}
      <span className="text-white font-medium">
        ACT our Agentic Conversation Transformer platform
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
