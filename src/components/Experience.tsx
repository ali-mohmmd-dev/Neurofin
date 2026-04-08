import Image from "next/image";

const interfaces = [
  {
    img: "/assets/philosophy (3).png",
    title: "Clarity",
    desc: "Develop a strong foundation in finance and data by mastering core principles that drive business decisions.s",
  },
  {
    img: "/assets/philosophy (2).png",
    title: "Capability",
    desc: "Build the skills to work with modern AI and automation tools that are transforming the financial landscape.",
  },
  {
    img: "/assets/philosophy (1).png",
    title: "Control",
    desc: "Move beyond understanding and execution to designing complete systems that drive business outcomes.s",
  },
];

const Experience = () => {
  return (
    <section id="interface" className="">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-16">
          Our Learning Philosophy
        </h2>
            </div>
            <div className="lined-container">
              <div className="container">
        <div className="grid md:grid-cols-3">
          {interfaces.map((e, i) => (
            <div key={i} className="lined-cell p-6 flex flex-col hover:bg-[linear-gradient(to_right,hsl(var(--primary)/0.03)_50%,hsl(var(--secondary)/0.02))] transition-all ease-in-out duration-900">
              <div className="relative w-full h-48 mb-6 overflow-hidden rounded-lg">
                <Image
                  src={e.img}
                  alt={e.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{e.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{e.desc}</p>
            </div>
          ))}
        </div>
        </div>
        </div>
  
    </section>
  );
};

export default Experience;
