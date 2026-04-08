const testimonials = [
  { quote: "Neurofn's AI insights have fundamentally transformed our risk management strategy. The predictive accuracy is unparalleled.", name: "Sarah M.", role: "Portfolio Manager" },
  { quote: "The interface is intuitive yet powerful. It's the first fintech platform that actually understands the complexity of global markets.", name: "James L.", role: "Quant Trader" },
  { quote: "Our institutional desk saw a 20% increase in execution efficiency within the first month of integrating Neurofn's APIs.", name: "Priya K.", role: "Chief Tech Officer" },
  { quote: "The real-time sentiment analysis provides a critical edge in volatile markets. Truly a next-gen financial tool.", name: "David R.", role: "Asset Allocation Lead" },
  { quote: "Neurofn's commitment to data integrity and secure infrastructure makes them our top choice for AI financial solutions.", name: "Alicia T.", role: "Head of Risk" },
  { quote: "A game-changer for private wealth management. The personalized AI advisory is sophisticated and highly effective.", name: "Marco V.", role: "Wealth Advisor" },
  { quote: "The scalability of their platform allowed us to roll out AI-driven products across three continents seamlessly.", name: "Chris B.", role: "Global Ops Director" },
];

const Testimonials = () => {
  return (
    <section id="advisors" className="overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          Expert Testimonials
        </h2>
      </div>
      <div className="lined-container">
        <div className="container">
      <div className="relative">
        <div className="flex animate-scroll" style={{ width: "max-content" }}>
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={i}
              className="w-[300px] flex-shrink-0 px-6 py-8 lined-left lined-right mx-[-0.5px]"
            >
              <p className="text-sm text-foreground leading-relaxed mb-6 italic">
                "{t.quote}"
              </p>
              <div>
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
      </div>
    </section >
  );
};

export default Testimonials;
