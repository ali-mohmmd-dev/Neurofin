import Image from "next/image";
import Link from "next/link"; // Recommended if using Next.js routing
import { PROGRAMS } from "@/lib/constants";

const Programs = () => {
  return (
    <section id="solutions" >
      <div className="container mx-auto px-6 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-16">
          Our Programs
        </h2>
      </div>
      <div className="lined-container">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3">
            {PROGRAMS.map((s, i) => (
              <div
                key={i}
                className="lined-cell p-8 flex flex-col border-collapse group  hover:bg-[linear-gradient(to_right,hsl(var(--primary)/0.03)_50%,hsl(var(--secondary)/0.02))] transition-all ease-in-out duration-900"
              >
                <div className="relative w-full h-48 mb-6 overflow-hidden rounded-lg">
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {s.desc}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-medium border border-[hsl(var(--primary)/0.2)] text-[hsl(var(--primary))] bg-[hsl(var(--primary)/0.03)] transition-all duration-300 hover:bg-[hsl(var(--primary))] hover:text-white cursor-default">
                    {s.level}
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-medium border border-[hsl(var(--primary)/0.2)] text-[hsl(var(--primary))] bg-[hsl(var(--primary)/0.03)] transition-all duration-300 hover:bg-[hsl(var(--primary))] hover:text-white cursor-default">
                    {s.duration}
                  </span>
                  {s.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-medium border border-[hsl(var(--primary)/0.2)] text-[hsl(var(--primary))] bg-[hsl(var(--primary)/0.03)] transition-all duration-300 hover:bg-[hsl(var(--primary))] hover:text-white cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                
                {/* Learn More Button */}
                <div className="mt-auto">
                  <Link 
                    href={`/programs/${s.slug}`}
                    className="inline-flex items-center text-sm font-medium  group"
                  >
                    Learn More
                    <svg 
                      className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;