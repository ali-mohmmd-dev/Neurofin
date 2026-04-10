import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative h-screen supports-[height:100svh]:h-[100svh] min-h-[800px] md:min-h-[900px] flex flex-col items-center justify-start overflow-hidden pt-20">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-50"
        >
          <source src="/assets/herovideo.webm" type="video/webm" />
        </video>
      </div>

      {/* Text Content - Moved higher via justify-start and pt-20 */}
      <div className="relative z-30 container mx-auto px-6 text-center max-w-3xl mt-[130px]">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-foreground">
          Finance Meets Intelligence
        </h1>
          <p className=" mt-4 md:mt-6 text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">

          NeuroFin is a next-generation FinTech academy shaping AI-powered financial leaders for the future.

        </p>
        
        <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
          <Link
            href="/programs"
            className="px-8 py-3 text-sm font-medium bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity"
          >
            Explore programs
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3 text-sm font-medium rounded-full border border-foreground/20 text-foreground hover:bg-foreground/5 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* Visual Composition - Bottom Section */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[600px] aspect-square flex items-end justify-center">
        
        {/* Circle 1: Largest, most blurry (The Base) */}
        <div className="absolute bottom-[-50%] w-[110%] aspect-square rounded-full bg-white/50  z-10" />

        {/* Circle 2: Medium, less blurry (The Inner Glow) */}
        <div className="absolute bottom-[-50%] w-[130%] aspect-square rounded-full bg-white/30 z-20" />

        {/* Circle 3 / Image Container: The Smallest/Crispest */}
        <div className="relative z-30 w-full h-[500px] flex items-end justify-center bottom-[-90px]">
          <Image 
            src="/assets/studentcutout.png" 
            alt="Student Cutout" 
            width={500} 
            height={500} 
            className="object-contain "
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;