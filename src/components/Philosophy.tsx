const pillars = [
  {
    title: "Live Labs",
    desc: "Learn by doing through hands-on, practical sessions designed to simulate real-world financial environments.",
  },
  {
    title: "Real-World Cases",
    desc: "Work on actual business scenarios and datasets to understand how finance operates in the real world.",
  },
  {
    title: "AI-First Tools",
    desc: "Master modern tools and platforms that are shaping the future of finance and automation.",
  },
  {
    title: "Project-Based Learning",
    desc: "Build real projects that showcase your skills and create a strong, job-ready portfolio.",
  },
  {
    title: "Industry Mentorship",
    desc: "Learn directly from experienced professionals who guide you with practical insights and career direction.",
  },
];

const Philosophy = () => {
  return (
    <section id="philosophy" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-16">
          How You Learn
        </h2>
        <div className="grid md:grid-cols-3 gap-y-12">
          {pillars.map((p, i) => (
            <div key={i} className="lined-left px-8 py-2">
              <h3 className="text-lg font-semibold text-foreground mb-3">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
