import {
  User,
  Building2,
  Briefcase,
  PhoneCall,
  MessageSquare,
} from "lucide-react";

export default function Contact() {
 
    function Select({ label, placeholder, options = [] }) {
  return (
    <div>
      <label className="text-sm text-gray-300 mb-1 block">
        {label}
      </label>

      <select
        className="
          input
          cursor-pointer
          hover:border-[#0D7EB6]
          focus:border-[#0D7EB6]
          transition
        "
        defaultValue=""
      >
        <option value="" disabled>
          {placeholder}
        </option>

        {options.map((option) => (
          <option
            key={option}
            value={option}
            className="bg-[#0D7EB6] text-white"
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}


  return (
    <div className="w-full min-h-screen flex justify-center px-4 py-16 text-white">
      <div className="w-full max-w-5xl">

        {/* Top Button */}
        <div className="flex justify-center mb-8">
          <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#0D7EB6] text-[#0D7EB6]">
            <PhoneCall size={16} />
            Get in Touch
          </button>
        </div>

        {/* Title */}
        <h1 className="text-5xl font-bold text-center mb-4">
          Let&apos;s Start a{" "}
          <span className="text-[#0D7EB6]">Conversation</span>
        </h1>

        <p className="text-center text-white/80 max-w-2xl mx-auto mb-14">
          Tell us about your transformation goals. Our experts will craft a
          personalized approach to modernize your customer conversations.
        </p>

        {/* FORM */}
        <div className="space-y-10">

          {/* Personal Information */}
          <Section
            icon={<User size={18} />}
            title="Personal Information"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <Field label="First Name *" />
              <Field label="Last Name *" />
              <Field label="Work Email *" />
              <Field label="Phone Number" />
            </div>
          </Section>

          {/* Company Details */}
          <Section
            icon={<Building2 size={18} />}
            title="Company Details"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <Field label="Company Name *" />
              <Field label="Job Title *" />
            </div>
          </Section>

          {/* Project Context */}
<Section
  icon={<Briefcase size={18} />}
  title="Project Context"
>
  <div className="grid md:grid-cols-3 gap-6 mb-6">
    <Select
      label="Current Platform"
      placeholder="Select platform"
      options={[
        "Avaya",
        "Genesys",
        "Cisco",
        "Five9",
        "Nice",
        "Amazon Connect",
        "Custom / In-house IVR",
      ]}
    />

    <Select
      label="Monthly Call Volume"
      placeholder="Select volume"
      options={[
        "Under 50,000 / month",
        "50,000 – 100,000 / month",
        "100,000 – 500,000 / month",
        "500,000 – 1,000,000 / month",
        "Over 1,000,000 / month",
      ]}
    />

    <Select
      label="Modernization Timeline"
      placeholder="Select timeline"
      options={[
        "Immediate (< 3 months)",
        "Short term (3–6 months)",
        "Medium term (6–12 months)",
        "Long term (12+ months)",
      ]}
    />
  </div>

  <label className="text-sm text-gray-300 mb-2 block">
    Additional Details
  </label>
  <textarea
    rows={4}
    className="input resize-none"
    placeholder="Tell us more about your current challenges, goals, or any specific questions you have..."
  />
</Section>


          {/* Submit */}
          <div className="flex justify-center pt-4">
            <button className="
              flex items-center gap-2
              bg-[#0D7EB6]
              px-10 py-3.5
              rounded-lg
              font-semibold
              shadow-lg shadow-[#0D7EB6]/30
              hover:scale-[1.02]
              transition cursor-pointer
            ">
              <MessageSquare size={18} />
              Send Message
            </button>
          </div>

          <p className="text-center text-sm text-gray-400">
            We&apos;ll respond within 24 hours. No spam, ever.
          </p>
        </div>
      </div>

      {/* INPUT STYLES */}
      <style jsx>{`
        .input {
          width: 100%;
          padding: 0.8rem 1rem;
          border-radius: 0.5rem;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(13, 126, 182, 0.5);
          color: white;
          outline: none;
        }
        .input::placeholder {
          color: #9ca3af;
        }
        .input:focus {
          border-color: #0d7eb6;
          box-shadow: 0 0 0 1px rgba(13, 126, 182, 0.4);
        }
      `}</style>
    </div>
  );
}

/* ---------- REUSABLE COMPONENTS ---------- */

function Section({ icon, title, children }) {
  return (
    <div className="
      bg-white/5
      backdrop-blur-md
      border border-white/10
      rounded-xl
      p-8
    ">
      <div className="flex items-center gap-3 mb-6 text-white">
        <span className="text-[#0D7EB6]">{icon}</span>
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>
      {children}
    </div>
  );
}

function Field({ label }) {
  return (
    <div>
      <label className="text-sm text-gray-300 mb-1 block">
        {label}
      </label>
      <input className="input" />
    </div>
  );
}

function Select({ label }) {
  return (
    <div>
      <label className="text-sm text-gray-300 mb-1 block">
        {label}
      </label>
      <select className="input">
        <option>{label}</option>
      </select>
    </div>
  );
}
