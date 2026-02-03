import React from "react";
import agnoshinLogo from "../assets/AgnoShin.png";
import visnetLogo from "../assets/Visnet-Logo.png";
import gclogo from "../assets/GC-Partner1.png";

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
  {
    name: "Third Partner Name",
    logo: gclogo,
    description:
      "Enterprise systems integrator delivering digital transformation, AI-driven customer engagement, and large-scale platform modernization.",
    employees: "500+",
    presence:
      "India, USA, Europe, Middle East, Asia-Pacific",
  },
  {}, // empty 4th card
];

export default function GSIPartnership() {
  return (
    <section className="px-6 py-20">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_1.5fr] gap-10 items-start">

        {/* LEFT CONTENT */}
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#0D7EB6] mb-6">
            Global Systems Integrator Partners
          </h2>

          <p className="text-white/80 text-lg leading-relaxed mb-8">
            Strategic partnerships with leading systems integrators to deliver
            comprehensive customer service transformations worldwide.
          </p>

          <button className="px-6 py-3 rounded-xl bg-[#0D7EB6] text-white font-medium hover:bg-[#0D7EB6]/80 transition">
            Get Started →
          </button>
        </div>

        {/* RIGHT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 -ml-6">

          {partners.map((partner, index) => (
            <div
              key={index}
              className={`relative rounded-2xl border border-white/10 
          bg-linear-to-br from-[#0a0a0a] via-[#101c2f] to-[#036ffd]/20 
          shadow-[0_20px_60px_rgba(0,0,0,0.8)]
              ${!partner.name ? "opacity-0 pointer-events-none" : ""}
              p-6 h-[320px] flex flex-col`}
            >
              {partner.name && (
                <>
                  {/* Logo */}
                  <div className="mb-4 flex items-center justify-center h-12">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="h-9 object-contain"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {partner.name}
                  </h3>

                  {/* Description */}
                  <p className="text-white/60 text-sm leading-relaxed line-clamp-3 mb-4">
                    {partner.description}
                  </p>

                  {/* Meta */}
                  <p className="text-white text-sm mb-1">
                    Employee Strength:{" "}
                    <span className="text-white/60">{partner.employees}</span>
                  </p>
                  <p className="text-white text-sm">
                    Global Presence:{" "}
                    <span className="text-white/60">{partner.presence}</span>
                  </p>
                </>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
