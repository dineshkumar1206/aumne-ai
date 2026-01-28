const TransformationWindow = () => {
  const points = [
    "Customers now expect conversational experiences—especially on voice",
    "Enterprises are already spending $53B+ annually on CX modernization",
    "Legacy IVR remains the biggest blocker",
    "AI has reached a point where legacy systems can be understood and transformed programmatically",
    "Enterprises no longer accept multi-year, million-dollar projects with uncertain ROI",
  ];

  return (
    <section className="w-full py-28">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-[#159ce0] tracking-tight">
          The Window for Platform-Led CX Transformation Is Open
        </h2>

        {/* Accent */}
        <div className="w-24 h-[2px] bg-linear-to-r from-[#1E4EAD] via-[#159ce0] to-[#1CC2D1] mt-4 mb-16" />

        {/* List */}
        <div className="space-y-8">
          {points.map((text, index) => (
            <div
              key={index}
              className="group flex items-start gap-6 p-5 rounded-xl
                         transition-all duration-300
                         hover:border hover:border-white/15
                         hover:backdrop-blur-sm"
            >
              {/* Indicator */}
              <div className="mt-2 flex flex-col items-center">
                <span className="w-3 h-3 rounded-full bg-[#159ce0]
                                 shadow-[0_0_12px_#159ce0]
                                 transition-transform duration-300
                                 group-hover:scale-125" />
                {index !== points.length - 1 && (
                  <span className="w-[1px] h-10 bg-white/15 mt-2" />
                )}
              </div>

              {/* Text */}
              <p className="text-white/75 text-[16px] md:text-[17px] leading-relaxed
                            transition group-hover:text-white">
                {text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TransformationWindow;
