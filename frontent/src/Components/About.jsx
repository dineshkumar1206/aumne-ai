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
      <LivedExperienceSection />

      {/* Leadership Section */}
      <section className="py-20 bg-transparent">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight text-center pb-20">
            Leadership Team
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {founders.map((person, index) => (
              <div
                key={index}
                className="
                  relative group
                  border border-[#0D7EB6]/60
                  bg-[#001a33]/70 backdrop-blur-md
                  rounded-2xl p-10
                  flex flex-col items-center text-center
                  shadow-[0_0_35px_rgba(13,126,182,0.35)]
                  transition-all duration-300
                  hover:scale-[1.03] hover:shadow-[0_0_55px_rgba(13,126,182,0.55)]
                "
              >
                {/* LinkedIn Icon */}
                <a
  href={person.linkedin}
  target="_blank"
  rel="noopener noreferrer"
  className="
    absolute top-5 right-5
    w-9 h-9 flex items-center justify-center
    rounded-full bg-white/20
    text-white

    opacity-100 scale-100
    md:opacity-0 md:scale-90
    md:group-hover:opacity-100 md:group-hover:scale-100

    hover:bg-[#0D7EB6]
    transition-all duration-300
  "
>
  <FaLinkedinIn size={16} />
</a>


                {/* Image with Gradient Ring */}
                <div className="relative mb-6">
                  <div className="w-44 h-44 rounded-full bg-gradient-to-tr from-[#0D7EB6] to-[#36c5f0] p-1">
                    <div className="w-full h-full rounded-full bg-[#001a33] flex items-center justify-center overflow-hidden">
                      <img
                        src={person.image}
                        alt={person.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Name */}
                <h3 className="text-2xl font-bold text-white mb-2">
                  {person.name}
                </h3>

                {/* Role */}
                <p className="text-sm text-white/80 font-medium">
                  {person.role}
                </p>

                {/* Bottom Accent Line */}
                <div className="mt-6 w-16 h-[2px] bg-gradient-to-r from-transparent via-[#0D7EB6] to-transparent opacity-70" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
