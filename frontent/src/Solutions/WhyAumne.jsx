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
      title: "Understand Legacy First",
      description:
        "Auto-discovery of IVR code, flows, configurations, APIs, , call recordings, and transcripts—revealing what exists, what works, and what must change.",
      icon: <Crown className="w-10 h-10 text-black" />,
      bgColor: "bg-[#95a9e6]", // Light blue-purple
    },
    {
      title: "Automate Conversational Transformation",
      description:
        "AI-driven design and build converts legacy logic into conversational experiences—reducing time and effort by up to 70%.",
      icon: <Zap className="w-10 h-10 text-black" />,
      bgColor: "bg-[#ff6b6b]", // Reddish-pink
    },
    {
      title: "Human-in-the-Loop Governance ",
      description:
        "Built-in review, approvals, versioning, rollback, and compliance controls. Enterprises stay firmly in control.",
      icon: <ShieldCheck className="w-10 h-10 text-black" />,
      bgColor: "bg-[#95a9e6]",
    },
    {
      title: "Build Once. Deploy Everywhere",
      description:
        "Deploy consistently across voice, chat, web, and messaging—without duplicating logic or redesigning journeys.",
      icon: <TrendingUp className="w-10 h-10 text-black" />,
      bgColor: "bg-[#ff6b6b]",
    },
    {
      title: "Continuously Evolve Services",
      description:
        "Rapid prototyping, recommendations, and controlled iteration keep customer service aligned with changing products and policies.",
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
      {/* ===== WHY SERVICES-LED TRANSFORMATION FAILS ===== */}
<div className="max-w-6xl mx-auto mt-24 px-4">
  {/* Heading */}
  <h2 className="text-3xl md:text-4xl font-semibold text-[#159ce0] mb-12">
    Why Services-Led Transformation No Longer Works
  </h2>

  {/* Comparison Box */}
  <div className="grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden border border-white/10 ">

    {/* LEFT COLUMN */}
    <div className="p-8 border-b md:border-b-0 md:border-r border-white/10">
      <h3 className="text-xl font-semibold text-white mb-6">
      Services-Led: Yesterday’s Approach
      </h3>

      <ul className="space-y-4 text-white/60">
        <li>• Manual discovery</li>
        <li>• Custom redesign every time</li>
        <li>• Knowledge locked in people</li>
        <li>• Long timelines</li>
        <li>• One-off projects</li>
        <li>• Risky production changes</li>
        <li>• ROI uncertain</li>
      </ul>
    </div>

    {/* RIGHT COLUMN */}
    <div className="p-8 ">
      <h3 className="text-xl font-semibold text-white mb-6">
       Platform-Led with Aumne: Today’s Advantage
      </h3>

      <ul className="space-y-4 text-white/60">
        <li>• Automated discovery</li>
        <li>• Reusable patterns & intelligence</li>
        <li>• Design intelligence in software</li>
        <li>• Fast, repeatable delivery</li>
        <li>• Continuous evolution</li>
        <li>• Safe prototyping</li>
        <li>• Predictable ROI</li>
      </ul>
    </div>

  </div>
</div>

<div class="max-w-6xl mx-auto mt-24 px-4">
  <h2 class="text-3xl md:text-4xl font-semibold text-[#159ce0] mb-12">
    Built for the Ecosystem That Delivers Customer Service
  </h2>

  <div class="space-y-8">
    <div>
      <h3 class="text-lg font-semibold text-white mb-1">
        Enterprises
      </h3>
      <p class="text-white/60 leading-relaxed">
        Modernize complex legacy IVRs without ripping and replacing existing platforms.
      </p>
    </div>

    <div>
      <h3 class="text-lg font-semibold text-white mb-1">
        Global System Integrators (GSIs)
      </h3>
      <p class="text-white/60 leading-relaxed">
        Deliver AI-driven CX transformation faster, at scale, while protecting margins.
      </p>
    </div>

    <div>
      <h3 class="text-lg font-semibold text-white mb-1">
        BPOs & CX Providers
      </h3>
      <p class="text-white/60 leading-relaxed">
        Enable <span class="font-semibold text-white/60">Human + Voice AI</span> service models that
        improve productivity, margins, and deal competitiveness.
      </p>
    </div>
  </div>
</div>

<div class="max-w-6xl mx-auto mt-24 px-4">
  <h2 class="text-3xl md:text-4xl font-semibold text-[#159ce0] mb-12">
    Outcomes That Matter
  </h2>

  <ul class="space-y-4">
    <li class="text-white/60 text-base leading-relaxed">
      • 5× faster time to value
    </li>
    <li class="text-white/60 text-base leading-relaxed">
      • 70%+ automation across the lifecycle
    </li>
    <li class="text-white/60 text-base leading-relaxed">
      • 3× ROI on transformation
    </li>
    <li class="text-white/60 text-base leading-relaxed">
      • Reduced abandonment and agent load
    </li>
    <li class="text-white/60 text-base leading-relaxed">
      • Predictable modernization economics
    </li>
    <li class="text-white/60 text-base leading-relaxed">
      • Continuous CX improvement
    </li>
  </ul>
</div>

<div class="max-w-6xl mx-auto mt-24 px-4">
  <h2 class="text-3xl md:text-4xl font-semibold text-[#159ce0] mb-12">
    The Window for Platform-Led CX Transformation Is Open
  </h2>

  <ul class="space-y-4 ">
    <li class="text-white/60 leading-relaxed">
      • Customers now expect conversational experiences—especially on voice
    </li>
    <li class="text-white/60 leading-relaxed">
      • Enterprises are already spending $53B+ annually on CX modernization
    </li>
    <li class="text-white/60 leading-relaxed">
      • Legacy IVR remains the biggest blocker
    </li>
    <li class="text-white/60 leading-relaxed">
      • AI has reached a point where legacy systems can be understood and transformed programmatically
    </li>
    <li class="text-white/60 leading-relaxed">
      • Enterprises no longer accept multi-year, million-dollar projects with uncertain ROI
    </li>
  </ul>
</div>

<div class="max-w-6xl mx-auto mt-24 px-4">
  <h2 class="text-3xl md:text-4xl font-semibold text-[#159ce0] mb-12">
    Built by People Who've Lived the Problem
  </h2>

  <ul class="space-y-4">
    <li class="text-white/60 leading-relaxed">
      • 100+ years of combined experience in IVR, contact centers, enterprise CX, and platform engineering
    </li>
    <li class="text-white/60 leading-relaxed">
      • First-hand experience delivering large, services-heavy transformations
    </li>
    <li class="text-white/60 leading-relaxed">
      • Deep legacy fluency combined with AI-native platform thinking
    </li>
    <li class="text-white/60 leading-relaxed">
      • Defining a new category: <span class="font-semibold">Agentic Service Lifecycle Management</span>
    </li>
  </ul>
</div>



    </section>
  );
}
