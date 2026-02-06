import { ArrowRight, TrendingDown,Sparkles, AlertTriangle,CheckCircle, AlertCircle, Award, DollarSign, Users,Search , MessageSquare, GitBranch, Target, RefreshCw, TrendingUp, Zap, Repeat, Handshake, PiggyBank,  Shield, BarChart3} from "lucide-react";

export default function BPO() {

 const Card = ({ Icon, title, desc, highlight }) => (
  <div
    className="rounded-2xl bg-linear-to-br from-[#0a0a0a] via-[#101c2f] to-[#036ffd]/20 
    p-8 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] 
    flex items-start gap-5"
  >
    {/* Icon Box - Updated Style */}
    <div className="w-14 h-14 flex items-center justify-center rounded-xl 
      bg-[#0D7EB6]/25 border border-[#0D7EB6]/60 shrink-0">
      <Icon className="h-7 w-7 text-[#0D7EB6]" />
    </div>

    {/* Text Content */}
    <div className="flex flex-col">
      {highlight && (
        <h3 className="text-[#0D7EB6] text-xl font-semibold mb-1">
          {highlight}
        </h3>
      )}

      <h4 className="text-white text-xl font-semibold mb-3">
        {title}
      </h4>

      <p className="text-white/80 text-lg leading-relaxed">
        {desc}
      </p>
    </div>
  </div>
);


 const Items = ({ Icon, title, desc }) => (
  <div
    className="rounded-2xl bg-linear-to-br from-[#0a0a0a] via-[#101c2f] to-[#036ffd]/20 
    p-8 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] 
    flex items-start gap-5"
  >
    {/* Icon Box - Updated Style */}
    <div className="w-14 h-14 flex items-center justify-center rounded-xl 
      bg-[#0D7EB6]/25 border border-[#0D7EB6]/60 shrink-0">
      <Icon className="h-7 w-7 text-[#0D7EB6]" />
    </div>

    {/* Text Content */}
    <div className="flex flex-col">
      <h4 className="text-white text-xl font-semibold mb-3">
        {title}
      </h4>

      <p className="text-white/70 text-lg leading-relaxed">
        {desc}
      </p>
    </div>
  </div>
);


const Coins = ({ Icon, title, desc }) => (
  <div
    className="rounded-2xl bg-linear-to-br from-[#0a0a0a] via-[#101c2f] to-[#036ffd]/20 
    p-8 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] 
    flex items-start gap-5"
  >
    {/* Icon Box - Updated Style */}
    <div className="w-14 h-14 flex items-center justify-center rounded-xl 
      bg-[#0D7EB6]/25 border border-[#0D7EB6]/60 shrink-0">
      <Icon className="h-7 w-7 text-[#0D7EB6]" />
    </div>

    {/* Text Content */}
    <div className="flex flex-col">
      <h4 className="text-white font-semibold text-xl mb-3">
        {title}
      </h4>

      <p className="text-white/80 text-lg leading-relaxed">
        {desc}
      </p>
    </div>
  </div>
);


const Box = ({ Icon, title, items }) => (
  <div className="bg-[#0b2a3d]/60 backdrop-blur-xl border border-white/10 rounded-3xl p-10 transition-all duration-300 hover:border-[#0D7EB6]/40">
    
    {/* Icon - centered */}
    <div className="mb-5 -mt-1 w-14 h-14 flex items-center justify-center rounded-xl 
      bg-[#0D7EB6]/25 border border-[#0D7EB6]/60 shrink-0 mx-auto">
      <Icon className="h-6 w-6 text-[#0D7EB6]" />
    </div>

    {/* Title - centered like image */}
    <h4 className="text-white font-semibold text-xl mb-4 text-center">
      {title}
    </h4>

    {/* List - keep left aligned */}
    <ul className="space-y-3 text-white/80">
      {items.map((item, idx) => (
        <li key={idx} className="flex gap-3">
          <span className="mt-2 h-2 w-2 rounded-full bg-[#0D7EB6]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const step = [
    {
      title: "Identify High-Impact Journeys",
      desc: "Pinpoint the customer journeys that matter most to your business and users.",
      icon: Search,
    },
    {
      title: "Discover Existing IVR Logic",
      desc: "Automatically analyze your current IVR flows and logic to uncover opportunities.",
      icon: GitBranch,
    },
    {
      title: "Launch Conversational Experiences",
      desc: "Deploy intelligent conversational solutions quickly without complexity.",
      icon: MessageSquare,
    },
    {
      title: "Measure, Learn & Evolve",
      desc: "Track outcomes, optimize continuously, and scale with confidence.",
      icon: BarChart3,
    },
  ];

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

      <div className="relative max-w-6xl mx-auto px-4 py-20 text-center text-white pb-10">
      
        {/* Heading */}
        <h1 className="text-white text-7xl font-bold mb-6">
        BPOs & CX Providers
      </h1>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
          <span className="text-white">Empowering Your Agents.</span>{" "}<br/>
            Scaling Voice AI.
          {" "}
          <span className="text-white"> Protecting Your Margins.</span>
        </h2>

        {/* Subtitle */}
        <p className="text-center text-xl md:text-2xl text-[#0D7EB6] leading-relaxed mt-6">
          Transform legacy IVR into AI-powered support, sales, and outreach with humans firmly in control.
        </p>

        {/* Stats */}
       {/* Metrics */}
  <div className="mt-18 grid grid-cols-1 md:grid-cols-[auto_1px_auto_1px_auto] items-center text-white gap-y-3 md:gap-x-4">
    <div className="text-center md:text-center">
      <p className="text-6xl font-bold text-[#0D7EB6]">30-40%</p>
      <p className="text-lg text-white/80 mt-1">Reduction in Cost per Interaction</p>
    </div>

    <div className="hidden md:block h-15 w-[1px] bg-linear-to-b from-[#1E4EAD] via-[#1D82BD] to-[#1CC2D1]" />

    <div className="text-center md:text-center">
      <p className="text-6xl font-bold text-[#0D7EB6]">2-3X</p>
      <p className="text-lg text-white/80 mt-1">
        Agent Production Improvement
      </p>
    </div>

    <div className="hidden md:block h-15 w-[1px] bg-linear-to-b from-[#1E4EAD] via-[#1D82BD] to-[#1CC2D1]" />

    <div className="text-center md:text-center">
      <p className="text-6xl font-bold text-[#0D7EB6]">40%+</p>
      <p className="text-lg text-white/80 mt-1">
        Margin Improvement per Program
      </p>
    </div>
        </div>

        {/* Buttons */}
        {/* <div className="flex flex-col sm:flex-row justify-center gap-5 mt-14">
          <button className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#0D7EB6] hover:opacity-90 transition text-white font-medium cursor-pointer">
            Talk to an Expert <ArrowRight size={18} />
          </button>

          <button className="px-6 py-3 rounded-lg border border-[#0D7EB6] text-white hover:bg-[#0D7EB6]/10 transition font-medium cursor-pointer">
            See How It Works
          </button>
        </div> */}
      </div>
    </section>
                {/* Section 2 */}

         <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-semibold text-white">
          Legacy IVR Is Silently{" "} Eroding Your Margins
        </h2>

        <p className="text-center text-xl md:text-2xl text-[#0D7EB6] leading-relaxed mt-4">
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
          The Rise of{" "}Hybrid Service Models
         
        </h2>

        <p className="text-center text-xl md:text-2xl text-[#0D7EB6] leading-relaxed mt-4">
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
          with Aumne
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

        <div className="max-w-5xl mx-auto mt-20 px-8 py-8 rounded-3xl">
  <p className="text-center text-xl md:text-2xl text-white leading-relaxed">
    Aumne enables BPOs to{" "}
    <span className="text-[#0D7EB6] font-bold">
      grow revenue, protect margins,
    </span>{" "}
    and{" "}
    <span className="text-[#0D7EB6] font-bold">
      monetize continuous CX / EX evolution.
    </span>.
  </p>
</div>
    </section>

           {/* Section page customer experience */}

            <section className="w-full py-13">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="max-w-4x2 mx-auto mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-white">
            Customer Experience &{" "}<br/>
           Employee Experience{" "}
            Are Connected
          </h2>
          <p className="mt-6 text-center text-xl md:text-2xl text-[#0D7EB6] leading-relaxed">
            Customer service systems shape the daily experience of frontline teams.
            When technology is rigid, both customers and employees suffer.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Problem Card */}
          <div className="rounded-2xl bg-gradient-to-br from-[#0a0a0a] via-[#101c2f] to-[#036ffd]/20 
            p-8 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] flex flex-col gap-6">

            <div className="w-14 h-14 flex items-center justify-center rounded-xl 
              bg-red-500/20 border border-red-500/40">
              <AlertTriangle className="h-7 w-7 text-red-400" />
            </div>

            <h3 className="text-2xl font-semibold text-white">
              When IVR Is Rigid & Outdated
            </h3>

            <ul className="space-y-3 text-white/70 text-lg">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-red-400" />
                Agents receive poor-quality interactions
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-red-400" />
                Supervisors rely on workarounds instead of improvements
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-red-400" />
                IT teams become bottlenecks for change
              </li>
            </ul>
          </div>

          {/* Solution Card */}
          <div className="rounded-2xl bg-gradient-to-br from-[#0a0a0a] via-[#101c2f] to-[#036ffd]/20 
            p-8 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] flex flex-col gap-6">

            <div className="w-14 h-14 flex items-center justify-center rounded-xl 
              bg-[#0D7EB6]/25 border border-[#0D7EB6]/60">
              <Sparkles className="h-7 w-7 text-[#0D7EB6]" />
            </div>

            <h3 className="text-2xl font-semibold text-white">
              With Aumne
            </h3>

            <p className="text-white/70 text-lg leading-relaxed">
              Modernize legacy IVR into intelligent, conversational and continuously evolving experiences.
            </p>

            <div className="grid grid-cols-2 gap-3 mt-2">
              {[
                "Agent effectiveness",
                "Supervisor agility",
                "Operational confidence",
                "Employee satisfaction",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-white/80 text-sm">
                  <Users className="h-4 w-4 text-[#0D7EB6]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="mt-16 text-center">
          <p className="text-xl md:text-2xl font-semibold leading-relaxed text-white">
            Better CX starts with better EX —{" "}
            <span className="text-[#0D7EB6]">both begin with the same platform.</span>
          </p>
        </div>

      </div>
    </section>
           

           {/* Section 5 */}

       <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-semibold text-white">
          Why This Matters{" "}
          to You
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 text-lg max-w-7xl mx-auto">
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

    

     {/*section 6  */}
             <section className="w-full py-20">
      <div className="max-w-7xl mx-auto px-6">

           {/* Heading */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-5xl font-bold text-white leading-tight">
            Start Small. Prove Value. <br/>
             Scale with Confidence.
          </h1>
          <p className="mt-5 text-center text-xl md:text-2xl text-[#0D7EB6] leading-relaxed">
            Transform enterprise customer experience without massive disruption.
            Start with focused impact, validate results, and scale intelligently.
          </p>
        </div>

       {/* Steps Grid */}
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 overflow-hidden">
         {step.map((step, index) => (
           <div key={index} className="relative h-full">
             
             {/* Card */}
             <div
               className="h-full rounded-2xl bg-gradient-to-br from-[#0a0a0a] via-[#101c2f] to-[#036ffd]/20
               p-8 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)]
               flex flex-col items-center text-center justify-between gap-6"
             >
               {/* Icon */}
               <div
                 className="w-14 h-14 flex items-center justify-center rounded-xl
                 bg-[#0D7EB6]/25 border border-[#0D7EB6]/60 shrink-0"
               >
                 <step.icon className="h-7 w-7 text-[#0D7EB6]" />
               </div>
       
                {/* Title */}
        <h3 className="text-xl font-semibold text-white min-h-[56px] flex items-center">
          {step.title}
        </h3>

        {/* Description */}
        <p className="text-gray-300 text-16 leading-relaxed min-h-[72px]">
          {step.desc}
        </p>
       
               {/* Step */}
               {/* <div className="text-sm font-semibold text-white opacity-70">
                 Step {index + 1}
               </div> */}
             </div>
       
             {/* Arrow (not for last card) */}
             {index !== step.length - 1 && (
               <div className="hidden lg:flex absolute top-1/2 -right-12 -translate-y-1/2">
                 <ArrowRight className="w-13 h-13 text-white " />
               </div>
             )}
           </div>
         ))}
       </div>

      </div>
    </section>

    {/* Section 7 */}

   <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-semibold text-white">
          Next Steps
        </h2>
      </div>

      <div className="grid md:grid-cols-4 gap-12  text-xl max-w-7xl mx-auto">
        {steps.map((step, idx) => (
          <Step key={idx} {...step} />
        ))}
      </div>
    </section>

    <div>
        {/* CTA Section */}
               <div className="mt-10 text-center pt-8">
                 <h3 className="text-2xl font-bold text-white mb-4">
                   Ready to Modernize Now
                 </h3>
                 <p className="text-white/80 text-lg mb-6">
                   Let’s build smarter, faster, and more human customer experiences.
                 </p>
       
                 <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                   <a
                     href="/contact"
                     className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#0D7EB6] hover:opacity-90 transition text-white font-medium cursor-pointer"
                   >
                      Free Trail <ArrowRight size={18}/>
                   </a>
                   {/* <a
                     href="https://www.aumne.ai"
                     target="_blank"
                     className="px-6 py-3 rounded-lg border border-[#0D7EB6] text-white/80 font-semibold hover:bg-[#0D7EB6]/10 transition cursor-pointer"
                   >
                     Visit Website
                   </a> */}
                 </div>
               </div>
    </div>

    </>
  );
}
