import React from "react";
import agnoshinLogo from "../assets/AgnoShin.png";
import visnetLogo from "../assets/Visnet-Logo.png";

const partners = [
  {
    name: "Aumne × VIS Network Partnership",
    logo: visnetLogo,
    aboutTitle: "About VIS Network",
    about:
      "VIS Network is a technology services firm focused on enterprise integration, digital transformation, and managed services.",
    experience:
      "10+ years of enterprise delivery experience, 100+ integration and transformation engagements, Proven delivery across BFSI, telecom, and large enterprises.",
    why:
      "It unites integration strength with AI-native platforms to accelerate service modernization at scale.",
  },
  {
    name: "Aumne × Agnoshin Partnership",
    logo: agnoshinLogo,
    aboutTitle: "About Agnoshin",
    about:
      "Agnoshin is a technology-agnostic CX and digital transformation firm specializing in CX, cloud, analytics, and managed services.",
    experience:
      "200+ CX projects delivered globally, 100+ industries served.",
    why:
      "It unites systemized AI-native platforms with proven enterprise delivery to modernize customer service at scale.",
  },
];

export default function GSIPartnership() {
  return (
    <section className="min-h-screen px-6 py-16 flex items-center">
      <div className="max-w-[1400px] mx-auto w-full">

        {/* HEADING CENTER */}
        <div className="text-center mb-6">
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-4">
            Global Systems
            <span className="text-[#0D7EB6]"> Integrator Partners </span>
          </h2>

          <p className="text-white/80 text-lg leading-relaxed max-w-3xl mx-auto">
            Strategic partnerships with leading systems integrators to deliver
            comprehensive customer service transformations worldwide.
          </p>

          {/* Get Started Button (Commented) */}
          {/*
          <button className="px-6 py-3 mt-10 rounded-xl bg-[#0D7EB6] text-white font-medium hover:bg-[#0D7EB6]/80 transition">
            Get Started →
          </button>
          */}
        </div>

        {/* TWO CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">

          {partners.map((partner, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/10 
              bg-linear-to-br from-[#0a0a0a] via-[#101c2f] to-[#036ffd]/20 
              shadow-[0_20px_60px_rgba(0,0,0,0.8)]
              p-8 flex flex-col gap-5"
            >
              {/* Logo */}
              <div className="flex items-center justify-center h-13">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-10 object-contain"
                />
              </div>

              {/* Name */}
              <h3 className="text-xl font-semibold text-white text-center">
                {partner.name}
              </h3>

              {/* About */}
              <div>
                <h4 className="text-[#0D7EB6] font-medium text-lg mb-1">
                  {partner.aboutTitle}
                </h4>
                <p className="text-white/70 text-16 leading-relaxed">
                  {partner.about}
                </p>
              </div>

              {/* Experience & Impact */}
              <div>
                <h4 className="text-[#0D7EB6] font-medium  text-lg mb-1">
                  Experience & Impact
                </h4>
                <p className="text-white/70 text-16 leading-relaxed">
                  {partner.experience}
                </p>
              </div>

              {/* Why This Partnership Matters */}
              <div>
                <h4 className="text-[#0D7EB6] font-medium text-lg mb-1">
                  Why This Partnership Matters
                </h4>
                <p className="text-white/70 text-16 leading-relaxed">
                  {partner.why}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
