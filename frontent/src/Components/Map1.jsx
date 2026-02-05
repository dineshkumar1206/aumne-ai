import React from "react";
import { MapPin, Mail } from "lucide-react";

export default function Map() {
  return (

    <>

     {/* Global Presence Header */}
<div className="text-center max-w-3xl mx-auto mb-12">
  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0D7EB6]/30 text-sm text-[#0D7EB6] mb-4">
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2 12h20M12 2c2.5 3 4 6.5 4 10s-1.5 7-4 10c-2.5-3-4-6.5-4-10s1.5-7 4-10z"
      />
    </svg>
    Global Presence
  </span>

  <h2 className="text-4xl md:text-5xl font-bold text-white">
    Where to <span className="text-[#0D7EB6]">Find Us</span>
  </h2>

  <p className="mt-5 text-lg md:text-xl text-white/80 leading-relaxed">
    With strategic hubs across four continents, Aumne delivers localized
    expertise with global reach.
  </p>
</div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">

      {/* Bengaluru */}
      <div className="rounded-xl overflow-hidden border border-white/10 bg-white shadow-lg">
        <div className="p-3 text-sm font-semibold text-gray-800">
          Bengaluru, India
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497698.7749065775!2d77.3012550997965!3d12.95445954259468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1770292957572!5m2!1sen!2sin"
          className="w-full h-[320px] border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* Coimbatore */}
      <div className="rounded-xl overflow-hidden border border-white/10 bg-white shadow-lg">
        <div className="p-3 text-sm font-semibold text-gray-800">
          Coimbatore, India
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d250644.7683500552!2d76.80241649604788!3d11.01426149065905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1770293065494!5m2!1sen!2sin"
          className="w-full h-[320px] border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

    </div>

{/* Location Cards */}
<div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
  {[
    {
      label: "GLOBAL HEADQUARTERS",
      city: "Austin",
      country: "USA",
    },
    {
      label: "ENGINEERING & R&D HUB",
      city: "Bengaluru",
      country: "India",
    },
    {
      label: "AI EXCELLENCE CENTER",
      city: "Coimbatore",
      country: "India",
    },
    {
      label: "EUROPEAN OPERATIONS",
      city: "Bern",
      country: "Switzerland",
    },
  ].map((loc, i) => (
    <div
      key={i}
      className="rounded-2xl bg-linear-to-br from-[#0a0a0a] via-[#101c2f] to-[#036ffd]/20 
    p-5 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
    >
      <div className="flex items-center gap-2 text-xs font-medium text-[#0D7EB6] mb-3 whitespace-nowrap">
        <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#0D7EB6]/10 shrink-0">
          <MapPin size={16} className="text-[#0D7EB6]" />
        </span>

        <span className="tracking-wide">
          {loc.label}
        </span>
      </div>

      <h4 className="text-lg font-semibold text-white">
        {loc.city}
      </h4>

      <p className="text-sm text-white/80">
        {loc.country}
      </p>
    </div>
  ))}
</div>

{/* Global Inquiries */}
<div className="mt-14  rounded-2xl  bg-linear-to-br from-[#0a0a0a] via-[#101c2f] to-[#036ffd]/20 
    p-8 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] px-10 py-8">

  {/* Top Row: Icon + Text */}
  <div className="flex items-center justify-center gap-4">
    
    {/* Mail Icon */}
    <span className="w-11 h-11 flex items-center justify-center rounded-xl bg-[#0D7EB6]/10 text-[#0D7EB6] shrink-0">
      <Mail size={22} />
    </span>

    {/* Text */}
    <div className="text-left">
      <p className="text-sm text-white leading-tight">
        Global Inquiries
      </p>
      <a
        href="mailto:hello@aumne.ai"
        className="text-lg font-semibold text-[#0D7EB6] leading-tight hover:underline cursor-pointer"
      >
        hello@aumne.ai
      </a>
    </div>
  </div>

  {/* Description */}
  <p className="mt-4 text-lg text-white/80 text-center max-w-2xl mx-auto">
    Reach out to us from any of our global locations—we&apos;re here to help
    transform your customer conversations.
  </p>

</div>

    </>
  );
}