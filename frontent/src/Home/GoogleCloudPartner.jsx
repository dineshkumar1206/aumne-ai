import {
  ShieldCheck,
  Cpu,
  Building2,
  CheckCircle2,
} from "lucide-react";

const GoogleCloudPartner = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      {/* TOP BADGE */}
      <div className="flex justify-center mb-6">
        <span className="px-4 py-1.5 text-xl font-medium rounded-full border border-[#0D7EB6]/40 text-[#0D7EB6] bg-[#0D7EB6]/10">
          Validated Technology Partner
        </span>
      </div>

      {/* HEADING */}
      <h2 className="text-4xl md:text-5xl font-semibold text-center text-white mb-4">
        Powered by Google Cloud
      </h2>

      {/* SUBTEXT */}
      <p className="mb-20 text-[#0D7EB6] text-center text-bold md:text-2xl max-w-6xl mx-auto leading-relaxed">
        As an official Google Cloud Partner, Aumne AI delivers enterprise-grade
        conversational AI transformation backed by the world's most advanced
        cloud infrastructure and AI capabilities.
      </p>

      {/* CONTENT GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* LEFT COLUMN */}
        <div>
          {/* LOGO CARD */}
          <div className="w-48 h-48 flex items-center justify-center rounded-2xl border shadow-sm mb-10 bg-white">
            <img
              src="/image/google-cloud-partner.png"
              alt="Google Cloud Partner"
              className="max-w-[140px]"
            />
          </div>

          <h3 className="text-2xl font-semibold mb-4">
            A Validated Path to AI-Native Modernization
          </h3>

          <p className="text-white/90 mb-6 text-17">
            Aumne isn’t just running on the cloud—we’re a{" "}
            <span className="font-semibold text-[#0D7EB6]">
              validated solution
            </span>{" "}
            optimized for Google’s Contact Center AI stack. This partnership
            gives enterprises a proven, trusted path to transform legacy IVR
            into intelligent, conversational experiences.
          </p>

          {/* CHECK LIST */}
          <ul className="space-y-4">
            {[
              "Technical architecture reviewed by Google Cloud experts",
              "Optimized for Google Contact Center AI (CCAI) stack",
              "Access to advanced Vertex AI and Gemini capabilities",
              "Global enterprise-grade infrastructure",
              "Continuous innovation through Google Cloud partnership",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2 className="text-[#0D7EB6] w-5 h-5 mt-1" />
                <span className="text-white/80 text-16">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-6 mt-8">
          {/* CARD 1 */}
          <div className="flex items-start text-start gap-4 rounded-2xl p-6 border border-white/10 
        bg-linear-to-br from-[#0a0a0a] via-[#101c2f] to-[#036ffd]/20
        shadow-[0_20px_60px_rgba(0,0,0,0.8)]
        transition-all duration-300 hover:border-white/20 hover:scale-[1.01]">
            <div
              className="w-14 h-14 flex items-center justify-center rounded-xl
            bg-[#0D7EB6]/25 border border-[#0D7EB6]/60 shrink-0"
            >
              <ShieldCheck className="w-6 h-6 text-[#0D7EB6]" />
            </div>
            <div>
              <h4 className="font-semibold mb-1">Architecture Validated</h4>
              <p className="text-white/80 text-18">
                Aumne’s platform has undergone rigorous technical review by
                Google Cloud experts, ensuring enterprise-grade security,
                scalability, and performance standards.
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="flex items-start text-start gap-4 rounded-2xl p-6 border border-white/10 
        bg-linear-to-br from-[#0a0a0a] via-[#101c2f] to-[#036ffd]/20
        shadow-[0_20px_60px_rgba(0,0,0,0.8)]
        transition-all duration-300 hover:border-white/20 hover:scale-[1.01]">
            <div
              className="w-14 h-14 flex items-center justify-center rounded-xl
            bg-[#0D7EB6]/25 border border-[#0D7EB6]/60 shrink-0"
            >
              <Cpu className="w-6 h-6 text-[#0D7EB6]" />
            </div>
            <div>
              <h4 className="font-semibold mb-1">
                Powered by Vertex AI & Gemini
              </h4>
              <p className="text-white/80 text-18">
                Direct integration with Google’s most advanced AI models enables
                our Design Intelligence engine to deliver context-aware, natural
                conversations with unmatched accuracy.
              </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="flex items-start text-start gap-4 rounded-2xl p-6 border border-white/10 
        bg-linear-to-br from-[#0a0a0a] via-[#101c2f] to-[#036ffd]/20
        shadow-[0_20px_60px_rgba(0,0,0,0.8)]
        transition-all duration-300 hover:border-white/20 hover:scale-[1.01]">
            <div
              className=" w-14 h-14 flex items-center justify-center rounded-xl
            bg-[#0D7EB6]/25 border border-[#0D7EB6]/60 shrink-0"
            >
              <Building2 className="w-6 h-6 text-[#0D7EB6]" />
            </div>
            <div>
              <h4 className="font-semibold mb-1">
                Enterprise-Ready Infrastructure
              </h4>
              <p className="text-white/80 text-18">
                Built on Google Cloud’s global infrastructure, Aumne provides
                the reliability, compliance, and data governance that Fortune
                500 enterprises demand.
              </p>
            </div>
          </div>
        </div>
      </div>

   
    </section>
  );
};

export default GoogleCloudPartner;
