import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Active link style
  const activeStyle = ({ isActive }) =>
    isActive
      ? "text-[#0D7EB6] font-bold transition"
      : "hover:text-gray-400 transition";

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
      setMenuOpen(false); // auto-close mobile menu on scroll
    } else {
      setHidden(false);
    }
  });

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* ================= NAVBAR ================= */}
      <motion.nav
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: "-100%", opacity: 0 },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
        className="bg-[#0a0a0a] text-white px-6 md:px-16 py-5 flex items-center justify-between shadow-xl"
      >
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="AumneAI" className="h-14 md:h-16" />
        </NavLink>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10 text-[15px]">
          <NavLink to="/" className={activeStyle}>Home</NavLink>
          <NavLink to="/solutions" className={activeStyle}>Solutions</NavLink>
          <NavLink to="/benefits" className={activeStyle}>Benefits</NavLink>
          <NavLink to="/industry-trends" className={activeStyle}>Industry Trends</NavLink>
          <NavLink to="/roi-calculator" className={activeStyle}>ROI Calculator</NavLink>
          <NavLink to="/gst-partnership" className={activeStyle}>GSI Partnership</NavLink>

          <NavLink to="/get-started">
            <button className="bg-linear-to-r from-[#1E4EAD] via-[#1D82BD] to-[#1CC2D1] px-6 py-2 rounded-md hover:opacity-90 transition">
              Get Started
            </button>
          </NavLink>
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
          <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/solutions" onClick={() => setMenuOpen(false)}>Solutions</NavLink>
          <NavLink to="/benefits" onClick={() => setMenuOpen(false)}>Benefits</NavLink>
          <NavLink to="/industry-trends" onClick={() => setMenuOpen(false)}>Industry Trends</NavLink>
          <NavLink to="/roi-calculator" onClick={() => setMenuOpen(false)}>ROI Calculator</NavLink>
          <NavLink to="/gst-partnership" onClick={() => setMenuOpen(false)}>GSI Partnership</NavLink>

          <NavLink to="/get-started" onClick={() => setMenuOpen(false)}>
            <button className="mt-3 w-full bg-linear-to-r from-[#1E4EAD] via-[#1D82BD] to-[#1CC2D1] py-2 rounded-md">
              Get Started
            </button>
          </NavLink>
        </div>
      </motion.div>
    </header>
  );
};

export default Navbar;
