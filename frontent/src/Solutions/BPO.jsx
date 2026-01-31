import { ArrowRight, TrendingDown, AlertCircle, Award, DollarSign, Users, Target, RefreshCw, TrendingUp, Zap, Repeat, Handshake, PiggyBank,  Shield, BarChart3} from "lucide-react";

export default function BPO() {

    const Card = ({ Icon, title, desc, highlight }) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8">
    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#0D7EB6]/15">
      <Icon className="h-6 w-6 text-[#0D7EB6]" />
    </div>

    {highlight && (
      <h3 className="text-[#0D7EB6] text-xl font-semibold mb-1">
        {highlight}
      </h3>
    )}

    <h4 className="text-white font-semibold mb-3">{title}</h4>

    <p className="text-white/70 leading-relaxed">{desc}</p>
  </div>
);

 const Items = ({ Icon, title, desc }) => (
  <div className="bg-[#0b2a3d]/60 backdrop-blur-xl border border-white/10 rounded-3xl p-10 transition-all duration-300 hover:border-[#0D7EB6]/40">
    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#0D7EB6]/15">
      <Icon className="h-6 w-6 text-[#0D7EB6]" />
    </div>

    <h4 className="text-white font-semibold mb-3">{title}</h4>

    <p className="text-white/70 leading-relaxed">{desc}</p>
  </div>

);

const Coins = ({ Icon, title, desc }) => (
  <div className="rounded-2xl bg-linear-to-br from-[#0a0a0a] via-[#101c2f] to-[#036ffd]/20 p-8 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#0D7EB6]/15">
      <Icon className="h-6 w-6 text-[#0D7EB6]" />
    </div>

    <h4 className="text-white font-semibold mb-3">
      {title}
    </h4>

    <p className="text-white/70 leading-relaxed">
      {desc}
    </p>
  </div>
);

const Box = ({ Icon, title, items }) => (
  <div className="bg-[#0b2a3d]/60 backdrop-blur-xl border border-white/10 rounded-3xl p-10 transition-all duration-300 hover:border-[#0D7EB6]/40">
    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#0D7EB6]/15">
      <Icon className="h-6 w-6 text-[#0D7EB6]" />
    </div>

    <h4 className="text-white font-semibold mb-4">
      {title}
    </h4>

    <ul className="space-y-3 text-white/70">
      {items.map((item, idx) => (
        <li key={idx} className="flex gap-3">
          <span className="mt-2 h-2 w-2 rounded-full bg-[#0D7EB6]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const steps = [
  {
    number: "1",
    title: "Pick a Program",
    desc: "Select an existing customer or program",
  },
  {
    number: "2",
    title: "Run a Pilot",
    desc: "Prove the impact with minimal risk",
  },
  {
    number: "3",
    title: "Prove Impact",
    desc: "Demonstrate margin and productivity gains",
  },
  {
    number: "4",
    title: "Scale with Confidence",
    desc: "Expand across your customer base",
  },
];

const Step = ({ number, title, desc }) => (
  <div className="flex flex-col items-center text-center max-w-xs mx-auto">
    <div className="flex items-center justify-center h-14 w-14 rounded-full bg-[#0D7EB6] text-white text-xl font-semibold mb-5">
      {number}
    </div>

    <h4 className="text-white font-semibold mb-2">
      {title}
    </h4>

    <p className="text-white/70 text-sm leading-relaxed">
      {desc}
    </p>
  </div>
);

  return (
    <>
          {/* Section 1  */}
    <section className="w-full relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 " />

      <div className="relative max-w-6xl mx-auto px-4 py-28 text-center text-white pb-10">

        {/* Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0D7EB6]/40 bg-[#0D7EB6]/10 text-[#0D7EB6] text-sm mb-8">
              For BPOs & CX Providers
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
          <span className="text-white">Empowering Your Agents.</span>{" "}<br/>
          <span className="text-[#0D7EB6]">
            Scaling Voice AI.
          </span>{" "}
          <span className="text-white"> Protecting Your Margins.</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg text-white/80 max-w-3xl mx-auto">
          Transform legacy IVR into AI-powered support, sales, and outreach with humans firmly in control.
        </p>

        {/* Stats */}
        <div className="flex flex-col md:flex-row justify-center gap-12 mt-14">
          <div>
            <h3 className="text-4xl font-bold text-[#0D7EB6]">30-40%</h3>
            <p className="text-sm text-white/80 mt-2">Reduction in Cost per Interaction</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-[#0D7EB6]">2-3×</h3>
            <p className="text-sm text-white/80 mt-2">
              Agent Productivity Improvement
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-[#0D7EB6]">40%+</h3>
            <p className="text-sm text-white/80 mt-2">
              Margin Improvement per Program
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-5 mt-14">
          <button className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#0D7EB6] hover:opacity-90 transition text-white font-medium cursor-pointer">
            Talk to an Expert <ArrowRight size={18} />
          </button>

          <button className="px-6 py-3 rounded-lg border border-[#0D7EB6] text-white hover:bg-[#0D7EB6]/10 transition font-medium cursor-pointer">
            See How It Works
          </button>
        </div>
      </div>
    </section>
                {/* Section 2 */}

         <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-semibold text-white">
          Legacy IVR Is Silently{" "}
          <span className="text-[#0D7EB6]">
            Eroding Your Margins
          </span>
        </h2>

        <p className="mt-4 text-white/70 text-lg">
          What this is costing BPOs
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        <Card
          Icon={TrendingDown}
          highlight="15–25%"
          title="Unproductive Agent Time"
          desc="Menu-based IVR fails to capture intent and context, forcing agents to spend time on call setup, corrections, and repeat issues instead of value-added interactions."
        />

        <Card
          Icon={AlertCircle}
          title="Accountable for CX Outcomes You Don't Control"
          desc="Enterprises own IVR platforms and change cycles, but BPOs are still held accountable for SLAs, CSAT, and cost targets when those systems fail to evolve."
        />

        <Card
          Icon={Award}
          title="Can't Win Premium Deals Without AI"
          desc="Enterprises are moving toward outcome-based contracts and AI-enabled CX. BPOs without a scalable modernization narrative are losing premium deals and strategic relevance."
        />

        <Card
          Icon={DollarSign}
          title="Leaving Margin Uplift on the Table"
          desc="BPOs that lead CX modernization can unlock higher-margin programs, stronger renewals, and longer-term client relationships."
        />
      </div>
    </section>      

      {/*Section 3  */}

      <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-semibold text-white">
          The Rise of{" "}
          <span className="text-[#0D7EB6]">
            Hybrid Service Models
          </span>
        </h2>

        <p className="mt-4 text-white/70 text-lg">
          Human + Voice AI: Deliver end-to-end CX outcomes
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        <Items
          Icon={Users}
          title="Improve Agent Productivity at Scale"
          desc="Reduce unproductive agent time by pairing conversational Voice AI with human workflows."
        />

        <Items
          Icon={Target}
          title="Deliver End-to-End CX Outcomes with AI"
          desc="Set and deliver CX KPIs by bundling human operations and Voice AI into a single, outcome-driven service model."
        />

        <Items
          Icon={RefreshCw}
          title="Operate Voice AI and Continuous Evolution"
          desc="Manage Voice AI operations and change requests as an ongoing capability with recurring revenue."
        />

        <Items
          Icon={TrendingUp}
          title="Increase Margins and Win Competitive Deals"
          desc="Differentiate with AI-led CX outcomes to defend pricing, improve margins, and outperform competitors in new and renewal bids."
        />
      </div>
    </section>

      {/* Section 4 */}
     
      <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-semibold text-white">
          How You Make Money{" "}
          <span className="text-[#0D7EB6]">with Aumne</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        <Coins
          Icon={Zap}
          title="Upsell Aumne as a Premium Service"
          desc="Add AI-enabled CX and IVR modernization as a premium layer on renewals and expansions."
        />

        <Coins
          Icon={Repeat}
          title="Managed Services for Voice AI (ARR)"
          desc="Charge recurring fees for Voice AI operations, tuning, and continuous evolution. Create a high-margin ARR stream without adding agents."
        />

        <Coins
          Icon={Handshake}
          title="CX Transformation Partner with Revenue Share"
          desc="Bundle human operations and Voice AI and commit to CX KPIs at deal time. Earn premium pricing and performance-linked upside."
        />

        <Coins
          Icon={PiggyBank}
          title="Margin Uplift Through Continuous Refinement"
          desc="Reduce unproductive agent time and operational leakage across live programs. Retain 100% of the resulting margin improvement."
        />
      </div>

        <div className="max-w-5xl mx-auto mt-20 px-8 py-8 rounded-3xl border-white/10 bg-white/5 backdrop-blur-md shadow-sm">
  <p className="text-center text-lg md:text-xl text-white leading-relaxed">
    Aumne enables BPOs to{" "}
    <span className="text-[#0D7EB6] font-medium">
      grow revenue, protect margins,
    </span>{" "}
    and{" "}
    <span className="text-[#0D7EB6] font-medium">
      monetize continuous CX evolution.
    </span>.
  </p>
</div>
    </section>
           {/* Section 5 */}

       <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-semibold text-white">
          Why This Matters{" "}
          <span className="text-[#0D7EB6]">to You</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <Box
          Icon={TrendingUp}
          title="The Market Shift"
          items={[
            "Enterprise CX buying is moving from staffed delivery to AI-enabled, outcome-driven models",
            "Human + Voice AI is becoming a requirement, not a differentiator",
            "Compete on CX outcomes, not blended rates",
            "Strengthen renewal and upsell conversations with a clear AI roadmap",
            "Win premium deals with a credible Human + Voice AI story",
          ]}
        />

        <Box
          Icon={Shield}
          title="What Remains Unchanged"
          items={[
            "You own the customer relationship and commercial model",
            "Enterprises retain Voice AI ownership and governance",
            "Humans remain firmly in control of CX delivery",
          ]}
        />

        <Box
          Icon={BarChart3}
          title="What You Gain"
          items={[
            "Increased pricing power in new and renewal deals",
            "New recurring revenue from Voice AI operations and continuous evolution",
            "Margin expansion through improved agent productivity",
          ]}
        />
      </div>
    </section>

    {/* Section 6 */}

    <section className="py-28 px-6">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-semibold text-[#0D7EB6]">
          Next Steps
        </h2>
      </div>

      <div className="grid md:grid-cols-4 gap-12 max-w-7xl mx-auto">
        {steps.map((step, idx) => (
          <Step key={idx} {...step} />
        ))}
      </div>
    </section>

    </>
  );
}
