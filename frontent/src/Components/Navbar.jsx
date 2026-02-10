 import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import BookDemoModal from "./BookDemoModal";
import {motion} from "framer-motion"
import { ArrowRight } from "lucide-react";



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

//   const handleMenuAction = (action) => {
//   action?.();
//   setMenuOpen(false);
// };


 const handleScroll = (id) => {
  setMenuOpen(false);

  if (location.pathname !== "/") {
    navigate("/");
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  } else {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }
};


  return (
    <header className="sticky top-0 z-50 w-full">
      {/* ================= NAVBAR ================= */}
      <motion.nav
        initial={{ y: 0, opacity: 1 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-[#011325] text-white px-6 md:px-16 py-5 flex items-center justify-between"
      >
        {/* Logo */}
        <button
          onClick={() => scrollToSection("home")}
          className="flex items-center gap-3 cursor-pointer"
        >
          <img src="/image/AUMNE-AI-logo-name.png" alt="AumneAI" className="h-14 md:h-16" />
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
             <NavLink to="/gsi" className={activeStyle}>
               Global System Integration
             </NavLink> <br/>
              </div>
                <div className="block w-full text-left px-4 py-2 rounded-md hover:bg-white/5 hover:text-[#0D7EB6] transition cursor-pointer">
             <NavLink to="/bpo-cx" className={activeStyle}>
               BPO & CX Providers
             </NavLink>
             </div>
              </div>
            </div> 
          </div>

          {/* <button onClick={()=>scrollToSection("benefits")} className="hover:text-gray-300 transition cursor-pointer">Benefits</button> */}
          

          {/* <button
            onClick={() => scrollToSection("statistics")}
            className="hover:text-gray-300 transition cursor-pointer"
          >
            Industry Trends
          </button> */}
          <NavLink to="/industry-trends" className={activeStyle}>Industry Trends</NavLink>

          {/* <button
            onClick={() => scrollToSection("roi")}
            className="hover:text-gray-300 transition cursor-pointer"
          >
            ROI Calculator
          </button> */}

           <button
            onClick={() => scrollToSection("cloud")}
            className="hover:text-gray-300 transition cursor-pointer"
          >
            Partners
          </button>

          <NavLink to="/contact" className={activeStyle}>Contact</NavLink>
          <NavLink to="/about-us" className={activeStyle}>About us</NavLink>

         

          {/* <NavLink to="/gst-partnership" className={activeStyle}>GSI Partnership</NavLink> */}

         <button
          onClick={() => setOpenDemo(true)}
          className="px-5 py-2 rounded-lg bg-[#0D7EB6] hover:bg-[#0D7EB6]/80 transition cursor-pointer"
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
  <div className="flex flex-col px-6 py-4 gap-3 text-[15px]">

    {/* HOME */}
<button
  onClick={() => handleScroll("home")}
  className="text-left py-2 hover:text-gray-300 transition"
>
  Home
</button>


    {/* SOLUTIONS */}
    <div>
      <button
        onClick={() => handleScroll("solutions")}
        className="text-left py-2 hover:text-gray-300 transition"
      >
        Solutions
      </button>

     {/* Sub-menu */}
<div className="ml-4 mt-2 flex flex-col gap-1 border-l border-white/10 pl-4">
  
  <NavLink
    to="/enterprise"
    className={`${activeStyle} flex items-center gap-2`}
    onClick={() => setMenuOpen(false)}
  >
    <ArrowRight size={16} className="text-[#0D7EB6]" />
    Enterprise
  </NavLink>

  <NavLink
    to="/gsi"
    className={`${activeStyle} flex items-center gap-2`}
    onClick={() => setMenuOpen(false)}
  >
    <ArrowRight size={16} className="text-[#0D7EB6]" />
    Global System Integration
  </NavLink>

  <NavLink
    to="/bpo-cx"
    className={`${activeStyle} flex items-center gap-2`}
    onClick={() => setMenuOpen(false)}
  >
    <ArrowRight size={16} className="text-[#0D7EB6]" />
    BPO & CX Providers
  </NavLink>

</div>

    </div>

    {/* INDUSTRY TRENDS */}

       <NavLink
          to="/industry-trends"
          className={activeStyle}
          onClick={() => setMenuOpen(false)}
        >
          Industry Trends
        </NavLink>
    {/* <button
     onClick={() => handleScroll("statistics")}
      className="text-left py-2 hover:text-gray-300 transition"
    >
      Industry Trends
    </button> */}

    {/* PARTNERS */}
    <button
  onClick={() => handleScroll("cloud")}
  className="text-left py-2 hover:text-gray-300 cursor-pointer transition"
>
  Partners
</button>

    {/* CONTACT */}
    <NavLink
      to="/contact"
      className={activeStyle}
      onClick={() => setMenuOpen(false)}
    >
      Contact
    </NavLink>

    {/* ABOUT */}
    <NavLink
      to="/about-us"
      className={activeStyle}
      onClick={() => setMenuOpen(false)}
    >
      About
    </NavLink>

    {/* CTA */}
    <button
      onClick={() => {
        setMenuOpen(false);
        setOpenDemo(true);
      }}
      className="mt-4 px-5 py-2 rounded-lg bg-[#0D7EB6] hover:bg-[#0D7EB6]/80 transition"
    >
      Book a Demo
    </button>

   
  </div>
</motion.div>

 <BookDemoModal
      open={openDemo}
      onClose={() => setOpenDemo(false)}
    />

    </header>
  );
};

export default Navbar;