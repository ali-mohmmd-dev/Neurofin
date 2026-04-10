import Link from "next/link";

const CareersHero = () => {
  return (
    <section className="pt-56 pb-24 ">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Build the Future <br /> of Finance with Us
            </h1>
          </div>
          <div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-10 max-w-xl">
              At NeuroFin, we don't just teach the future; we build it. Join a team of visionaries, engineers, and financial experts dedicated to redefining intelligence in the global banking landscape.
            </p>
            <Link
              href="#openings"
              className="inline-block px-8 py-3 text-sm font-medium bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity"
            >
              View Openings
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersHero;
