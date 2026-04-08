const audiences = [
  {
    title: "Students & Graduates",
    desc: "Build a strong, future-ready foundation that sets you apart in the evolving finance industry.",
  },
  {
    title: "Working Professionals",
    desc: "Upgrade your skills, automate your workflow, and increase your impact in your current role.",
  },
  {
    title: "Career Switchers",
    desc: "Gain the right knowledge and confidence to successfully transition into finance and AI-driven roles.",
  },
  {
    title: "Entrepreneurs",
    desc: "Achieve complete financial clarity and use data-driven insights to scale and grow your business.",
  },
];

const WhoIsThisFor = () => {
  return (
    <section id="who" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              Who Is This For
            </h2>
          </div>
          <div className="space-y-10">
            {audiences.map((a, i) => (
              <div key={i}>
                <h3 className="text-lg font-semibold text-foreground mb-2">{a.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoIsThisFor;
