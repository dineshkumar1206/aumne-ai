export default function LivedExperienceSection() {
  return (
    <section className="max-w-6xl mx-auto px-4">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold text-[#159ce0] tracking-tight">
        Built by People Who’ve Lived the Problem
      </h2>

      {/* Accent underline */}
      <div className="w-24 h-[2px] bg-linear-to-r from-[#1E4EAD] via-[#159ce0] to-[#1CC2D1] mt-4 mb-16" />

      {/* Experience list */}
      <ul className="relative space-y-8 pl-10">
        {[
          "100+ years of combined experience across IVR, contact centers, enterprise CX, and platform engineering",
          "First-hand ownership of large-scale, services-heavy CX transformations",
          "Deep legacy fluency paired with AI-native platform thinking",
          "Defining a new category: Agentic Service Lifecycle Management"
        ].map((item, index) => (
          <li key={index} className="group relative">
            {/* Dot */}
            <span className="absolute -left-5 top-1.5 w-4 h-4 rounded-full bg-gradient-to-br from-[#1E4EAD] to-[#1CC2D1] shadow-lg transform transition-transform duration-300 group-hover:scale-125" />
            
            {/* Text */}
            <p className="text-white/80 text-lg md:text-[17px] leading-relaxed transition-colors duration-300 group-hover:text-white">
              {index === 0 || index === 3 ? (
                <>
                  <span className="font-semibold text-white">
                    {item.split(":")[0]}:
                  </span>
                  {" " + item.split(":")[1]}
                </>
              ) : (
                item
              )}
            </p>

            {/* Hover effect: subtle left border highlight */}
            <span className="absolute -left-10 top-0 h-full w-1 rounded-full bg-gradient-to-b from-[#1E4EAD]/50 to-[#1CC2D1]/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
          </li>
        ))}
      </ul>
    </section>
  );
}
