import Image from "next/image";

const AboutHero = () => {
  return (
    <section className="pt-56 pb-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-end mb-20">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Mastering the Future <br></br> of Finance
            </h1>
          </div>
          <div>
            <p className="text-muted-foreground leading-relaxed">
              We are a next-generation academy dedicated to bridging the gap between traditional finance and AI-driven intelligence. Our mission is to empower the next wave of financial leaders with the tools and clarity they need to succeed.
            </p>
          </div>
        </div>
        
        <div className="relative w-full aspect-[21/9] rounded-3xl overflow-hidden ">
          <Image
            src="/assets/abouthero.png" // Using an existing high-quality asset
            alt="About NeuroFin"
            fill
            className="object-cover"
            priority
          />
          
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
