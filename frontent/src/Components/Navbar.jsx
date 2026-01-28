import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const activeStyle = ({ isActive }) =>
    isActive
      ? "text-[#0D7EB6] font-bold transition"
      : "hover:text-gray-400 transition";

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* ================= NAVBAR ================= */}
      <motion.nav
        initial={{ y: 0, opacity: 1 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-[#0a0a0a] text-white px-6 md:px-16 py-5 flex items-center justify-between shadow-xl"
      >
        {/* Logo */}
        <button onClick={()=>scrollToSection("home")} className="flex items-center gap-3 cursor-pointer">
          <img src="/logo.png" alt="AumneAI" className="h-14 md:h-16" />
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10 text-[15px]">
          {/* <NavLink to="/" className={activeStyle}>Home</NavLink> */}
          <button onClick={()=>scrollToSection("home")} className="hover:text-gray-300 transition cursor-pointer">Home</button>

         <button onClick={()=>scrollToSection("solutions")} className="hover:text-gray-300 transition cursor-pointer">Solutions</button>
          {/* <NavLink to="/solutions" className={activeStyle}>Solutions</NavLink> */}

        <button onClick={()=>scrollToSection("benefits")} className="hover:text-gray-300 transition cursor-pointer">Benefits</button>
          {/* <NavLink to="/benefits" className={activeStyle}>Benefits</NavLink> */}
        
        <button onClick={()=>scrollToSection("statistics")} className="hover:text-gray-300 transition cursor-pointer">Industry Trends</button>
          {/* <NavLink to="/industry-trends" className={activeStyle}>Industry Trends</NavLink> */}
        
        <button onClick={()=>scrollToSection("roi")} className="hover:text-gray-300 transition cursor-pointer">ROI Calculator</button>

          {/* <NavLink to="/roi-calculator" className={activeStyle}>ROI Calculator</NavLink> */}

        <button onClick={()=>scrollToSection("gsi")} className="hover:text-gray-300 transition cursor-pointer">GSI Partnership</button>

          {/* <NavLink to="/gst-partnership" className={activeStyle}>GSI Partnership</NavLink> */}

            <button onClick={()=>scrollToSection("#")} className="bg-linear-to-r from-[#1E4EAD] via-[#1D82BD] to-[#1CC2D1] px-6 py-2 rounded-md hover:opacity-90 transition cursor-pointer">
              Get Started
            </button>
          
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

  <button
    onClick={() => {
      scrollToSection("solutions");
    }}
    className="text-left hover:text-gray-300 transition"
  >
    Solutions
  </button>

  <button
    onClick={() => {
      scrollToSection("benefits");
    }}
    className="text-left hover:text-gray-300 transition"
  >
    Benefits
  </button>

  <button
    onClick={() => {
      scrollToSection("statistics");
    }}
    className="text-left hover:text-gray-300 transition"
  >
    Industry Trends
  </button>

  <button
    onClick={() => {
      scrollToSection("roi");
    }}
    className="text-left hover:text-gray-300 transition"
  >
    ROI Calculator
  </button>

  <button
    onClick={() => {
      scrollToSection("gsi");
     
    }}
    className="text-left hover:text-gray-300 transition"
  >
    GSI Partnership
  </button>

  <button
    onClick={() => {
      scrollToSection("home");
      
    }}
    className="mt-3 w-full bg-linear-to-r from-[#1E4EAD] via-[#1D82BD] to-[#1CC2D1] py-2 rounded-md hover:opacity-90 transition"
  >
    Get Started
  </button>

</div>
      </motion.div>
    </header>
  );
};

export default Navbar;
