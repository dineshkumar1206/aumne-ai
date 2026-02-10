import React from "react";
import { FaLinkedinIn, FaFacebookF, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { NavLink, useNavigate, useLocation } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const activeStyle = ({ isActive }) =>
    isActive
      ? "text-[#0D7EB6] font-semibold transition"
      : "hover:text-gray-300 transition";

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="text-white py-12 px-8 md:px-16 border-t border-white/5">
      <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 items-start">

        {/* LOGO + CONTACT */}
        <div className="space-y-6">
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-3 cursor-pointer"
          >
            <img src="/image/AUMNE-AI-logo-name.png" alt="AumneAI" className="h-14 md:h-16" />
          </button>
              <a target="_blank" href="https://www.linkedin.com/company/aumneai/" className="w-9 h-9 flex items-center justify-center rounded-full bg-white/20 hover:bg-[#0D7EB6] transition cursor-pointer">
                <FaLinkedinIn size={16} />
              </a>

          <div className="space-y-2 text-sm leading-relaxed text-white/80">
            <p>+91 9902267643</p>
            <p>+1-442-302-4441</p>
            <a href="mailto:hello@aumne.ai">hello@aumne.ai</a>
            <p>Bangalore, India</p>
          </div>
        </div>

        {/* LINKS COLUMN 1 */}
        <div className="flex flex-col gap-3 text-sm md:text-base">

          <button onClick={() => scrollToSection("solutions")} className="hover:text-gray-300 transition text-left cursor-pointer">
            Solutions
          </button>

          {/* <button onClick={() => scrollToSection("statistics")} className="hover:text-gray-300 transition text-left cursor-pointer">
            Industry Trends
          </button> */}
          <NavLink to="/industry-trends" className={activeStyle}>
            Industry Trends
          </NavLink>

          <button onClick={() => scrollToSection("cloud")} className="hover:text-gray-300 transition text-left cursor-pointer">
            Partners
          </button>

           <NavLink to="/contact" className={activeStyle}>
            Contact
          </NavLink>

        </div>

        {/* LINKS COLUMN 2 */}
        <div className="flex flex-col gap-3 text-sm md:text-base">

          <NavLink to="/enterprise" className={activeStyle}>
            Enterprise
          </NavLink>

          <NavLink to="/gsi" className={activeStyle}>
            Global System Integration
          </NavLink>

          <NavLink to="/bpo-cx" className={activeStyle}>
            BPO & CX Providers
          </NavLink>

          <NavLink to="/about-us" className={activeStyle}>
          About us
          </NavLink>

        </div>

        {/* NEWSLETTER + SOCIAL */}
        {/* <div className="space-y-8">

          Newsletter
          <div className="space-y-4">
            <h4 className="text-lg font-medium">Subscribe to Our Newsletter</h4>

            <div>
              <label className="block mb-2 text-sm text-white/80">Email *</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent border border-white/40 px-4 py-2.5 text-sm focus:outline-none focus:border-[#0D7EB6]"
              />
            </div>

            <label className="flex items-start gap-2 text-xs text-white/60">
              <input type="checkbox" className="mt-1 accent-[#0D7EB6]" />
              Yes, subscribe me to your newsletter.
            </label>

            <button className="border border-white/50 px-8 py-2 text-sm hover:bg-white hover:text-black transition">
              Submit
            </button>
          </div>  */}

          {/* Social */}
          {/* <div className="space-y-3">
            <p className="text-lg font-medium">Follow Us On:</p>
            <div className="flex gap-3"> */}
              {/* <a className="w-9 h-9 flex items-center justify-center rounded-full bg-white/20 hover:bg-[#0D7EB6] transition cursor-pointer">
                <FaFacebookF size={16} />
              </a>
              <a className="w-9 h-9 flex items-center justify-center rounded-full bg-white/20 hover:bg-[#0D7EB6] transition cursor-pointer">
                <FaTwitter size={16} />
              </a>
              <a className="w-9 h-9 flex items-center justify-center rounded-full bg-white/20 hover:bg-[#0D7EB6] transition cursor-pointer">
                <FaWhatsapp size={16} />
              </a> */}
            {/* </div> */}
          {/* </div> */}

        </div>

      {/* Floating Chat Button */}
      {/* <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-linear-to-r from-[#1E4EAD] via-[#1D82BD] to-[#1CC2D1] p-4 rounded-xl shadow-lg hover:scale-110 transition-transform">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
          </svg>
        </button>
      </div> */}

        {/* COPYRIGHT */}
<div className="mt-6 text-center text-sm text-white/60 border-t border-white/10 pt-6">
  © 2026 SLMX AI Pvt Ltd. All rights reserved.
</div>

    </footer>
  );
}
