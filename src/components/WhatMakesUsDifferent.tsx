import Image from "next/image";
import LinedContainer from "./LinedContainer";

const features = [
  {
    img: "/assets/philosophy (1).png",
    title: "AI-First Curriculum",
    desc: "While others teach theory, we teach systems. Our curriculum is built around the latest AI and automation tools used by top-tier financial institutions.",
  },
  {
    img: "/assets/philosophy (2).png",
    title: "Practical Laboratory",
    desc: "Every concept is tested in our live labs. You don't just learn about predictive models; you build them using real-world datasets.",
  },
  {
    img: "/assets/philosophy (3).png",
    title: "Strategic Mentorship",
    desc: "Our advisors are industry veterans who provide the lens of experience, helping you navigate complex financial landscapes with clarity and control.",
  },
];

const WhatMakesUsDifferent = () => {
  return (
    <section className="md:pt-6">
      <div className="container mx-auto px-6 mb-16 ">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          What Makes Us Different
        </h2>
      </div>
      
      <LinedContainer className="py-0" containerClassName="px-0">
        <div className="grid md:grid-cols-3">
          {features.map((f, i) => (
            <div key={i} className="lined-cell p-10 flex flex-col items-center text-center group hover:bg-secondary/5 transition-all duration-500">
              <div className="relative w-full h-48 mb-8 overflow-hidden rounded-2xl">
                <Image
                  src={f.img}
                  alt={f.title}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {f.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </LinedContainer>
    </section>
  );
};

export default WhatMakesUsDifferent;
