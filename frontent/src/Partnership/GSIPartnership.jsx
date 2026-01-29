import React from "react";
import agnoshinLogo from "../assets/AgnoShin.png";
import visnetLogo from "../assets/Visnet-Logo.png";

const partners = [
  {
    name: "AgnoShin",
    logo: agnoshinLogo,
    description:
      "Technology-agnostic customer experience management solutions with deep vertical expertise across US, Asia-Pacific, Middle East and Africa.",
    employees: "200+",
    presence: "US, Asia-Pacific, Middle East, Africa",
  },
  {
    name: "Visnet",
    logo: visnetLogo,
    description:
      "Strategic partner in communication systems integration and customer experience optimization across global markets including UK, USA, UAE, and Asia-Pacific.",
    employees: "200+",
    presence:
      "UK, USA, UAE, Oman, Singapore, Philippines, Malaysia, Australia, China, Europe, Africa",
  },
];

export default function GSIPartnership() {
  return (
    <section className="px-6 py-20">
      <div className="max-w-[1400px] mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-semibold text-[#0D7EB6] mb-6">
            Global Systems Integrator Partners
          </h2>
          <p className="text-white text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Strategic partnerships with leading systems integrators to deliver
            comprehensive customer service transformations worldwide
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-[#0b2a3d]/60 backdrop-blur-xl border border-white/10 rounded-3xl p-10 transition-all duration-300 hover:border-[#0D7EB6]/40 "
            >
              {/* Logo  bg-[#0a2238]*/}
              <div className=" rounded-xl p-6 mb-8 flex items-center justify-center">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-12 object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-3xl font-semibold text-white mb-4">
                {partner.name}
              </h3>

              {/* Description */}
              <p className="text-neutral-300 leading-relaxed mb-10">
                {partner.description}
              </p>

              {/* Meta */}
              <div className="space-y-3 mb-8">
                <p className="text-white font-medium">
                  Employee Strength:{" "}
                  <span className="text-neutral-300 font-normal">
                    {partner.employees}
                  </span>
                </p>

                <p className="text-white font-medium">
                  Global Presence:{" "}
                  <span className="text-neutral-300 font-normal">
                    {partner.presence}
                  </span>
                </p>
              </div>

              {/* Learn More */}
              <a
                href="#"
                className="inline-flex items-center gap-2 text-[#0D7EB6] font-medium hover:underline"
              >
                Learn More
                <span className="text-lg">↗</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
