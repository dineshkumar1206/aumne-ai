 import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import BookDemoModal from "./BookDemoModal";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [openDemo, setOpenDemo] = useState(false);

  const activeStyle = ({ isActive }) =>
    isActive
      ? "text-[#0D7EB6] font-bold transition"
      : "hover:text-gray-400 transition";

  //       const scrollToSection = (id) => {
  //   const element = document.getElementById(id);
  //   if (element) {
  //     element.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

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
    <header className="sticky top-0 z-50 w-full">
      {/* ================= NAVBAR ================= */}
      <motion.nav
        initial={{ y: 0, opacity: 1 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-[#0a0a0a] text-white px-6 md:px-16 py-5 flex items-center justify-between shadow-xl"
      >
        {/* Logo */}
        <button
          onClick={() => scrollToSection("home")}
          className="flex items-center gap-3 cursor-pointer"
        >
          <img src="/logo.png" alt="AumneAI" className="h-14 md:h-16" />
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10 text-[15px]">
          {/* <NavLink to="/" className={activeStyle}>Home</NavLink> */}
          <button
            onClick={() => scrollToSection("home")}
            className="hover:text-gray-300 transition cursor-pointer"
          >
            Home
          </button>

          <div className="relative group">
            <button
              onClick={() => scrollToSection("solutions")}
              className="hover:text-gray-300 transition cursor-pointer"
            >
              Solutions
            </button>

            {/* Dropdown */}
             <div className="absolute left-0 top-full mt-3 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="bg-[#0a0a0a] border border-white/10 rounded-xl shadow-xl p-3 space-y-2">
                {/* <button
                  onClick={() => scrollToSection("transformation-comparison")}
                  className="block w-full text-left px-4 py-2 rounded-md hover:bg-white/5 hover:text-[#0D7EB6] transition cursor-pointer"
                >
                  Transformation Comparison
                </button>

                <button
                  onClick={() => scrollToSection("ecosystem-audience")}
                  className="block w-full text-left px-4 py-2 rounded-md hover:bg-white/5 hover:text-[#0D7EB6] transition cursor-pointer"
                >
                  Ecosystem & Audience
                </button>

                <button
                  onClick={() => scrollToSection("outcomes")}
                  className="block w-full text-left px-4 py-2 rounded-md hover:bg-white/5 hover:text-[#0D7EB6] transition cursor-pointer"
                >
                  Outcomes
                </button>

                <button
                  onClick={() => scrollToSection("transformation-window")}
                  className="block w-full text-left px-4 py-2 rounded-md hover:bg-white/5 hover:text-[#0D7EB6] transition cursor-pointer"
                >
                  Transformation Window
                </button>

                <button
                  onClick={() => scrollToSection("lived-experience")}
                  className="block w-full text-left px-4 py-2 rounded-md hover:bg-white/5 hover:text-[#0D7EB6] transition cursor-pointer"
                >
                  Lived Experience
                </button> */}
                 <div className="block w-full text-left px-4 py-2 rounded-md hover:bg-white/5 hover:text-[#0D7EB6] transition cursor-pointer">
                  <NavLink to="/enterprise" className={activeStyle}>
            Enterprise
             </NavLink> <br/>
             </div>
             <div className="block w-full text-left px-4 py-2 rounded-md hover:bg-white/5 hover:text-[#0D7EB6] transition cursor-pointer">
             <NavLink to="/global" className={activeStyle}>
               Global System Integration
             </NavLink> <br/>
              </div>
                <div className="block w-full text-left px-4 py-2 rounded-md hover:bg-white/5 hover:text-[#0D7EB6] transition cursor-pointer">
             <NavLink to="/bpo" className={activeStyle}>
               BPO & CX Providers
             </NavLink>
             </div>
              </div>
            </div> 
          </div>

          {/* <button onClick={()=>scrollToSection("benefits")} className="hover:text-gray-300 transition cursor-pointer">Benefits</button> */}
          

          <button
            onClick={() => scrollToSection("statistics")}
            className="hover:text-gray-300 transition cursor-pointer"
          >
            Industry Trends
          </button>
          {/* <NavLink to="/industry-trends" className={activeStyle}>Industry Trends</NavLink> */}

          {/* <button
            onClick={() => scrollToSection("roi")}
            className="hover:text-gray-300 transition cursor-pointer"
          >
            ROI Calculator
          </button> */}

          {/* <NavLink to="/roi-calculator" className={activeStyle}>ROI Calculator</NavLink> */}

          <button
            onClick={() => scrollToSection("gsi")}
            className="hover:text-gray-300 transition cursor-pointer"
          >
            GSI Partnership
          </button>

          {/* <NavLink to="/gst-partnership" className={activeStyle}>GSI Partnership</NavLink> */}

         <button
          onClick={() => setOpenDemo(true)}
          className="px-5 py-2 rounded-lg bg-[#0D7EB6] hover:bg-[#0D7EB6]/80 transition"
        >
          Book a Demo
        </button>
        <BookDemoModal open={openDemo} onClose={() => setOpenDemo(false)} />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </motion.nav>

      {/* ================= MOBILE MENU ================= */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: menuOpen ? "auto" : 0,
          opacity: menuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="md:hidden bg-[#0a0a0a] text-white overflow-hidden"
      >
        <div className="flex flex-col px-6 py-4 gap-4 text-[15px]">
          <button
            onClick={() => {
              scrollToSection("home");
            }}
            className="text-left hover:text-gray-300 transition"
          >
            Home
          </button>

          <div className="relative-group">
            <button
              onClick={() => {
                scrollToSection("solutions");
              }}
              className="text-left hover:text-gray-300 transition"
            >
              Solutions
            </button>
            {/* Dropdown */}

           < div className="block w-full text-left px-4 py-2 rounded-md hover:bg-white/5 hover:text-[#0D7EB6] transition cursor-pointer">
                  <NavLink to="/enterprise" className={activeStyle}>
            Enterprise
             </NavLink> <br/>
             </div>
             <div className="block w-full text-left px-4 py-2 rounded-md hover:bg-white/5 hover:text-[#0D7EB6] transition cursor-pointer">
             <NavLink to="/global" className={activeStyle}>
               Global System Integration
             </NavLink> <br/>
              </div>
                <div className="block w-full text-left px-4 py-2 rounded-md hover:bg-white/5 hover:text-[#0D7EB6] transition cursor-pointer">
             <NavLink to="/bpo" className={activeStyle}>
               BPO & CX Providers
             </NavLink>
             </div>
            {/* <div className="absolute left-0 top-full mt-3 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="bg-[#0a0a0a] border border-white/10 rounded-xl shadow-xl p-3 space-y-2">
                <button
                  onClick={() => scrollToSection("transformation-comparison")}
                  className="block w-full text-left px-4 py-2 rounded-md hover:bg-white/5 hover:text-[#0D7EB6] transition"
                >
                  Transformation Comparison
                </button>

                <button
                  onClick={() => scrollToSection("ecosystem-audience")}
                  className="block w-full text-left px-4 py-2 rounded-md hover:bg-white/5 hover:text-[#0D7EB6] transition"
                >
                  Ecosystem & Audience
                </button>

                <button
                  onClick={() => scrollToSection("outcomes")}
                  className="block w-full text-left px-4 py-2 rounded-md hover:bg-white/5 hover:text-[#0D7EB6] transition"
                >
                  Outcomes
                </button>

                <button
                  onClick={() => scrollToSection("transformation-window")}
                  className="block w-full text-left px-4 py-2 rounded-md hover:bg-white/5 hover:text-[#0D7EB6] transition"
                >
                  Transformation Window
                </button>

                <button
                  onClick={() => scrollToSection("lived-experience")}
                  className="block w-full text-left px-4 py-2 rounded-md hover:bg-white/5 hover:text-[#0D7EB6] transition"
                >
                  Lived Experience
                </button>
              </div>
            </div> */}
          </div>
          {/* <button
    onClick={() => {
      scrollToSection("benefits");
    }}
    className="text-left hover:text-gray-300 transition"
  >
    Benefits
  </button> */}

          <button
            onClick={() => {
              scrollToSection("statistics");
            }}
            className="text-left hover:text-gray-300 transition"
          >
            Industry Trends
          </button>

          {/* <button
            onClick={() => {
              scrollToSection("roi");
            }}
            className="text-left hover:text-gray-300 transition"
          >
            ROI Calculator
          </button> */}

          <button
            onClick={() => {
              scrollToSection("gsi");
            }}
            className="text-left hover:text-gray-300 transition"
          >
            GSI Partnership
          </button>

         <button
          onClick={() => setOpenDemo(true)}
          className="px-5 py-2 rounded-lg bg-[#0D7EB6] hover:bg-[#0D7EB6]/80 transition"
        >
          Book a Demo
        </button>
        <BookDemoModal open={openDemo} onClose={() => setOpenDemo(false)} />
        </div>
      </motion.div>
    </header>
  );
};

export default Navbar;