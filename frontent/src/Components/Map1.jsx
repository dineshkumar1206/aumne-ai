import React, { useState } from "react";
import { MapPin, Mail, Phone } from "lucide-react";

const locations = [
  {
    city: "Austin",
    country: "USA",
    title: "GLOBAL HEADQUARTERS",
    address: "Austin, Texas, United States",
    phone: "+1-442-302-4441",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d440916.74928673!2d-97.90922727719938!3d30.30367957610923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b599a0cc032f%3A0x5d9b464bd469d57a!2sAustin%2C%20TX%2C%20USA!5e0!3m2!1sen!2sin!4v1770367921345!5m2!1sen!2sin",
  },
  {
    city: "Bern",
    country: "Switzerland",
    title: "EUROPEAN OPERATIONS",
    address: "Bern, Switzerland",
    phone: "+41 31 555 0188",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d87147.41462409154!2d7.31253404481894!3d46.95468111984461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478e39c0d43a1b77%3A0xcb555ffe0457659a!2sBern%2C%20Switzerland!5e0!3m2!1sen!2sin!4v1770367967644!5m2!1sen!2sin",
  },
  {
    city: "Bengaluru",
    country: "India",
    title: "ENGINEERING & R&D HUB",
    address: "Bengaluru, Karnataka, India",
    phone: "+91 9902267643",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497698.7749065775!2d77.3012550997965!3d12.95445954259468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1770368003639!5m2!1sen!2sin",
  },
  {
    city: "Coimbatore",
    country: "India",
    title: "AI EXCELLENCE CENTER",
    address: "Coimbatore, Tamil Nadu, India",
    phone: "+ 91 9739898924",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d250644.7683500552!2d76.80241649604788!3d11.01426149065905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1770368048227!5m2!1sen!2sin",
  },
];

export default function Map1() {
  const [active, setActive] = useState(locations[0]);

  return (
    <>
      {/* Global Presence Header */}
      <div className="text-center max-w-3xl mx-auto mb-6 mt-6">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0D7EB6]/30 text-lg font-bold text-[#0D7EB6] mb-4">
          Global Presence
        </span>

        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Where to Find Us
        </h2>

        <p className="mt-5 text-lg md:text-xl text-white/80 leading-relaxed">
          With strategic hubs across continents, Aumne delivers localized
          expertise with global reach.
        </p>
      </div>

      {/* Location Section */}
      <div className="w-full  py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md px-10 py-16">
            <div className="grid grid-cols-12 gap-6">

              {/* Left Locations */}
              <div className="col-span-12 md:col-span-3 space-y-4">
                {locations.map((loc, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(loc)}
                    className={`w-full flex items-center gap-4 p-4 rounded-xl text-left transition
                    ${active.city === loc.city
                        ? "bg-[#0D7EB6] shadow-md"
                        : "bg-transparent hover:bg-[#77bee1]"}`}
                  >
                    <MapPin className="text-white" size={22} />
                    <div>
                      <p className="font-semibold text-xl">{loc.city}</p>
                      <p className="text-lg text-white/80">{loc.country}</p>
                    </div>
                  </button>
                ))}
              </div>

              {/* Center Map */}
<div className="col-span-12 md:col-span-5">
  <div className="h-[420px] rounded-2xl overflow-hidden border border-white/10 shadow-xl">
    <iframe
      src={active.map}
      className="w-full h-full"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title={active.city}
    ></iframe>
  </div>
</div>

              {/* Right Info */}
              <div className="col-span-12 md:col-span-4  rounded-2xl p-6 flex flex-col justify-between">
                <div>
                  <p className="text-xl tracking-wide text-[#0D7EB6] font-extrabold mb-2">
                    {active.title}
                  </p>

                  <h3 className="text-lg font-semibold mb-6">
                    {active.city}, {active.country}
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3 p-4 rounded-xl">
                      <MapPin className="text-white" size={20} />
                      <div>
                        <p className="text-ms text-white">Address</p>
                        <p className="text-ms font-medium text-white/80">
                          {active.address}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 rounded-xl">
                      <Phone className="text-white" size={20} />
                      <div>
                        <p className="text-ms text-white">Contact</p>
                        <p className="text-ms font-medium text-white/80">
                          {active.phone}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

               
              </div>

            </div>
          </div>
        </div>
      </div>

     {/* Location Cards */}
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
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
          <span className="tracking-wide">{loc.label}</span>
        </div>

        <h4 className="text-lg font-semibold text-white">{loc.city}</h4>
        <p className="text-sm text-white/80">{loc.country}</p>
      </div>
    ))}
  </div>
</div>


      {/* Global Inquiries */}
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
  <div className="mt-14 rounded-2xl bg-linear-to-br from-[#0a0a0a] via-[#101c2f] to-[#036ffd]/20 
    p-6 sm:p-8 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)]">

    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
      <span className="w-11 h-11 flex items-center justify-center rounded-xl bg-[#0D7EB6]/10 text-[#0D7EB6]">
        <Mail size={22} />
      </span>

      <div>
        <p className="text-sm text-white">Global Inquiries</p>
        <a
          href="mailto:hello@aumne.ai"
          className="text-lg font-semibold text-[#0D7EB6] hover:underline"
        >
          hello@aumne.ai
        </a>
      </div>
    </div>

    <p className="mt-4 text-base sm:text-lg text-white/80 text-center max-w-2xl mx-auto">
      Reach out to us from any of our global locations — we're here to help
      transform your customer conversations.
    </p>

  </div>
</div>
    </>
  );
}