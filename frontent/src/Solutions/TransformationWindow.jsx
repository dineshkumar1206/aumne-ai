import { MessageCircle, DollarSign, Lock, Cpu, Clock } from "lucide-react";

const TransformationWindow = () => {
  const points = [
    {
      text: "Customers now expect conversational experiences, especially on voice",
      icon: MessageCircle,
    },
    {
      text: "Enterprises are already spending $53B+ annually on CX/EX modernization",
      icon: DollarSign,
    },
    {
      text: "Legacy IVR remains the biggest blocker",
      icon: Lock,
    },
    {
      text: "AI has reached a point where legacy systems can be understood and transformed programmatically",
      icon: Cpu,
    },
    {
      text: "Enterprises no longer accept multi-year, million-dollar projects with uncertain ROI",
      icon: Clock,
    },
  ];

  return (
    <section className="w-full py-28">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight text-center">
          The Window for Platform-Led CX <br />
          Transformation{" "}
          <span className="text-[#0D7EB6]">Is Open</span>
        </h2>

        {/* Boxes */}
     {/*   <div className="mt-16 space-y-6">
          {points.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-5 rounded-2xl p-6 border border-white/10 
                bg-linear-to-br from-[#0a0a0a] via-[#101c2f] to-[#036ffd]/20
                shadow-[0_20px_60px_rgba(0,0,0,0.8)]
                transition-all duration-300 hover:border-white/20 hover:scale-[1.01]"
              >
                
                <div className="w-12 h-12 flex items-center justify-center rounded-xl 
                bg-[#0D7EB6]/15 border border-[#0D7EB6]/40">
                  <Icon className="w-6 h-6 text-[#0D7EB6]" />
                </div>

      
                <p className="text-white/80 text-[16px] md:text-[17px] leading-relaxed">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>  */}

        {/* first row */}

       <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
  {points.slice(0, 3).map((item, index) => {
    const Icon = item.icon;
    return (
      <div
        key={index}
        className="flex flex-col items-center text-center gap-5 rounded-2xl p-6 border border-white/10 
        bg-linear-to-br from-[#0a0a0a] via-[#101c2f] to-[#036ffd]/20
        shadow-[0_20px_60px_rgba(0,0,0,0.8)]
        transition-all duration-300 hover:border-white/20 hover:scale-[1.01]"
      >
        {/* Icon (top center) */}
        <div className="w-14 h-12 flex items-center justify-center rounded-xl 
          bg-[#0D7EB6]/15 border border-[#0D7EB6]/40">
          <Icon className="w-6 h-6 text-[#0D7EB6]" />
        </div>

        {/* Text */}
        <p className="text-white/80 text-[18px] leading-relaxed">
          {item.text}
        </p>
      </div>
    );
  })}
</div>

         {/* Second row */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
  {points.slice(3).map((item, index) => {
    const Icon = item.icon;
    return (
      <div
        key={index}
        className="flex flex-col items-center text-center gap-5 rounded-2xl p-6 border border-white/10 
        bg-linear-to-br from-[#0a0a0a] via-[#101c2f] to-[#036ffd]/20
        shadow-[0_20px_60px_rgba(0,0,0,0.8)]
        transition-all duration-300 hover:border-white/20 hover:scale-[1.01]"
      >
        {/* Icon (top center) */}
        <div className="w-12 h-12 flex items-center justify-center rounded-xl 
          bg-[#0D7EB6]/15 border border-[#0D7EB6]/40">
          <Icon className="w-6 h-6 text-[#0D7EB6]" />
        </div>

        {/* Text */}
        <p className="text-white/80 text-[16px] leading-relaxed">
          {item.text}
        </p>
      </div>
    );
  })}
</div>

      </div>
    </section>
  );
};

export default TransformationWindow;
