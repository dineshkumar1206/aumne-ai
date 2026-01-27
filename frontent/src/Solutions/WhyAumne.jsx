import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Crown, Zap, ShieldCheck, TrendingUp, Target } from "lucide-react";
import WhyAumneCard from "./WhyAumneCard";
gsap.registerPlugin(ScrollTrigger);

export default function WhyAymne() {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      bgRef.current,
      { x: "10%" },
      {
        x: "-15%",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      },
    );
  }, []);

  const services = [
    {
      title: "Category Leadership",
      description:
        "The first AI Native Service Lifecycle Platform purpose built for enterprises. Leverage cutting-edge technology to stay ahead of the curve.",
      icon: <Crown className="w-10 h-10 text-black" />,
      bgColor: "bg-[#95a9e6]", // Light blue-purple
    },
    {
      title: "Faster Transformation",
      description:
        "Cut modernization timelines from years to months. Accelerate your digital journey with our streamlined agentic service workflows.",
      icon: <Zap className="w-10 h-10 text-black" />,
      bgColor: "bg-[#ff6b6b]", // Reddish-pink
    },
    {
      title: "Enterprise Grade Control",
      description:
        "Compliance, governance, and human in the loop validation at every step. Maintain full authority over your AI-driven services.",
      icon: <ShieldCheck className="w-10 h-10 text-black" />,
      bgColor: "bg-[#95a9e6]",
    },
    {
      title: "Future Proof Design",
      description:
        "Services evolve in sync with your products and customer expectations. Adapt quickly to market changes without rebuilding from scratch.",
      icon: <TrendingUp className="w-10 h-10 text-black" />,
      bgColor: "bg-[#ff6b6b]",
    },
    {
      title: "Proven Outcomes",
      description:
        "5x faster delivery and higher customer satisfaction. Realize tangible business value with measurable impact on your ROI.",
      icon: <Target className="w-10 h-10 text-black" />,
      bgColor: "bg-[#95a9e6]",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen text-white pb-40 overflow-visible bg-linear-to-r from-[#02060d] via-[#071827]  to-[#0e3b4e]"
    >
      <section className="w-full bg-transparent pb-10">
        <div className="max-w-7xl mx-auto px-4">
          <div>
            <WhyAumneCard />
          </div>
          {/* Main Grid Container with Top & Left Border */}
          <div className="border-t border-l border-white/20 ml-2">
            {services.map((service, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-[300px_1fr] group transition-all duration-300"
              >
                {/* Left Side: Icon Container */}
                <div className="flex items-center justify-center p-16 border-r border-b border-white/20">
                  <div
                    className={`${service.bgColor} p-6 rounded-lg relative flex flex-col items-center`}
                  >
                    {service.icon}
                    {/* The small black dash line below the icon */}
                    <div className="w-8 h-0.5 bg-black mt-4"></div>
                  </div>
                </div>

                {/* Right Side: Text Content */}
                <div className="p-10 md:p-16 flex flex-col justify-center border-r border-b border-white/20 bg-transparent hover:bg-white/5 transition-colors">
                  <h3 className="text-white text-xl font-bold mb-4">
                    {service.title}
                  </h3>
                  <p className="text-white/50 text-base leading-relaxed max-w-2xl">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
