import { SlRefresh } from "react-icons/sl";
import { IoEyeOutline } from "react-icons/io5";
import { MdDeviceHub } from "react-icons/md";
import { PiGlobeSimpleLight } from "react-icons/pi";
import { FiUsers } from "react-icons/fi"; 
import {Search , Sparkles, Shield , Globe , RefreshCw } from "lucide-react";

export default function DataGrowthSection() {
  return (
    <section className="relative min-h-screen -py-20 text-white">
      <div className="max-w-[1300px] mx-auto px-6">

        {/* CARD GRID */}
        <div className="grid grid-cols-3 gap-x-5 gap-y-8 place-items-center">

          {/* CARD 1 */}
          <Card
            icon={<Search className="w-10 h-10" />}
            title="Understand Legacy First"
            desc="Auto-discovery of IVR code, flows, configurations, APIs, call recordings, and transcripts—revealing what exists, what works, and what must change."
            className="w-72 h-[440px] ml-22 border border-white/10 bg-linear-to-br from-[#0a0a0a] via-[#111f2f] to-[#034fa8]/20 shadow-[0_25px_70px_rgba(0,0,0,0.85)]"
          />

          {/* CARD 2 – CENTER TOP */}
          <Card
            icon={<Sparkles className="w-10 h-10" />}
            title="Automate Conversational Transformation"
            desc="AI-driven design and build converts legacy logic into conversational experiences—reducing time and effort by up to 70%."
            className="w-72 h-[440px] mt-100 border border-white/10 bg-linear-to-br from-[#0a0a0a] via-[#111f2f] to-[#034fa8]/20 shadow-[0_25px_70px_rgba(0,0,0,0.85)]"
          />

          {/* CARD 3 */}
          <Card
            icon={<Shield className="w-10 h-10" />}
            title="Human-in-the-Loop Governance"
            desc="Built-in review, approvals, versioning, rollback, and compliance controls. Enterprises stay firmly in control."
            className="w-72 h-[440px] mr-22 border border-white/10 bg-linear-to-br from-[#0a0a0a] via-[#111f2f] to-[#034fa8]/20 shadow-[0_25px_70px_rgba(0,0,0,0.85)] "
          />

          {/* CARD 4 */}
          <Card
            icon={<Globe className="w-10 h-10" />}
            title="Build Once. Deploy Everywhere"
            desc="Deploy consistently across voice, chat, web, and messaging—without duplicating logic or redesigning journeys."
            className="w-72 h-[440px] ml-22 -mt-49 border border-white/10 bg-linear-to-br from-[#090909] via-[#0e1b2d] to-[#036ffd]/20 shadow-[0_25px_70px_rgba(0,0,0,0.85)]"
          />

          {/* CARD 5 */}
          <Card
            icon={<RefreshCw className="w-10 h-10"/>}
            title="Continuously Evolve Services"
            desc="Rapid prototyping, recommendations, and controlled iteration keep customer service aligned with changing products and policies."
            className="w-72 h-[440px] mr-22 ml-182 -mt-49 border border-white/10 bg-linear-to-br from-[#090909] via-[#0f2135] to-[#036ffd]/25 shadow-[0_25px_70px_rgba(0,0,0,0.85)]"
          />

          {/* EMPTY SPACE */}
          <div />
        </div>
      </div>
    </section>
  );
}

/* ================= CARD ================= */

const Card = ({ icon, title, desc, className }) => {
  return (
    <div
      className={`
        ${className}
        p-8
        flex flex-col justify-between
        transition-all duration-500
      `}
    >
      <div>
        <div className="text-4xl mb-5 text-white opacity-90">
          {icon}
        </div>

        <h3 className="text-lg font-semibold text-[#0D7EB6] mb-3">
          {title}
        </h3>

        <p className="text-white/80 text-sm leading-relaxed">
          {desc}
        </p>
      </div>

      {/* HORIZONTAL LINE */}
      <div className="w-full h-[2px]  mt-6" />
    </div>
  );
};
