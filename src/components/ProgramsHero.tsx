import Image from "next/image";

const ProgramsHero = () => {
  return (
    <section className="pt-56 pb-36">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start mb-20">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Educational Paths <br /> for Modern Finance
            </h1>
          </div>
          <div>
            <p className="text-muted-foreground leading-relaxed pb-8">
              Explore our comprehensive curriculum designed to transform you from a traditional finance professional into an AI-powered system creator. Our programs bridge the gap between abstract theory and scalable, real-world application.
            </p>
            <a href="/contact" className=" px-8 py-3 text-sm font-medium bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity">
              Contact Us
            </a>
          </div>
        </div>
        
        <div className="relative w-full aspect-[21/9] rounded-3xl overflow-hidden ">
          <Image
            src="/assets/hero-bg.jpg" // Reusing the high-quality home hero background for consistency
            alt="NeuroFin Programs"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default ProgramsHero;
