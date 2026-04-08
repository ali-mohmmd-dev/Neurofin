const items = [
  {
    num: "01",
    title: "An Intelligence-Driven Finance Academy",
    desc: "We operate at the intersection of finance, AI, and data.Our mission is to transform individuals into system thinkers who can design, automate, and lead modern financial ecosystems.",
  },
  {
    num: "02",
    title: "Secure Infrastructure",
    desc: "Built on institutional-grade security protocols, our platform ensures your financial data and assets are protected with next-gen encryption.",
  },
  {
    num: "03",
    title: "Scalable Performance",
    desc: "From individual wealth management to institutional trading, our systems scale seamlessly to meet the most demanding financial requirements.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              Our Identity
            </h2>
          </div>
          <div className="space-y-10">
            {items.map((item) => (
              <div key={item.num} className="flex gap-6 md:gap-8">
                <span className="text-sm font-medium text-muted-foreground shrink-0">{item.num}</span>
                <span className="mt-2.5 w-8 md:w-12 border-t border-dashed border-foreground/20 shrink-0" />
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-foreground leading-none">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
