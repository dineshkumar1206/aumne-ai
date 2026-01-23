import React from "react";
import {
  FiCloud,
  FiLayers,
  FiUsers,
} from "react-icons/fi";

const partners = [
  {
    icon: <FiCloud />,
    title: "Cloud Analytics For Beginners",
    duration: "14 Days",
    price: "$80.00",
  },
  {
    icon: <FiLayers />,
    title: "Data Analytics Tools",
    duration: "28 Days",
    price: "$120.00",
  },
  {
    icon: <FiUsers />,
    title: "Data-driven Decision Making",
    duration: "56 Days",
    price: "$150.00",
  },
];

export default function GSIPartnership() {
  return (
    <section className="bg-gradient-to-r from-[#02060d] via-[#071827] via-[#0b2a3d] to-[#0e3b4e] px-6 py-20">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {partners.map((item, index) => (
            <div
              key={index}
              className="bg-[#0f0f0f] border border-white/10 rounded-2xl p-10 flex flex-col justify-between transition-all duration-300 hover:border-[#0D7EB6]/50 hover:-translate-y-2"
            >
              {/* Icon */}
             <div className="mb-10 flex justify-center">
                 <div className="w-20 h-20 rounded-full bg-[#0D7EB6]/10 flex items-center justify-center text-[#0D7EB6] text-4xl">
                   {item.icon}
                 </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-2xl font-medium mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-neutral-400 mb-6">
                  {item.duration}
                </p>

                <div className="border-t border-white/10 my-6" />

                <p className="text-xl font-semibold mb-6">
                  {item.price}
                </p>

                <button className="bg-linear-to-r from-[#1E4EAD] via-[#1D82BD] to-[#1CC2D1] hover:to-[#5187b4] px-6 py-3 rounded-md font-medium hover:opacity-90 transition cursor-pointer">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
