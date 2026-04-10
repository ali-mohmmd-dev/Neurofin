import Link from "next/link";
import { JOBS } from "@/lib/constants";

const JobListing = () => {
  return (
    <section id="openings" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-16">
          Open Positions
        </h2>
        <div className="grid md:grid-cols-3 gap-y-16">
          {JOBS.filter(j => j.isOpen).map((j, i) => (
            <div key={i} className="lined-left px-8 py-2 flex flex-col h-full group">
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {j.title}
              </h3>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-medium border border-primary/20 bg-primary/5 text-primary">
                  {j.location}
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-medium border border-secondary/20 bg-secondary/5 text-secondary">
                  {j.type}
                </span>
              </div>
              
              <p className="text-sm text-muted-foreground leading-relaxed mb-8 flex-grow">
                {j.desc}
              </p>
              
              <Link 
                href={`/apply?target=${j.title}`}
                className="inline-flex items-center text-sm font-medium  group/link"
              >
                Apply Now
                <svg 
                  className="ml-1 w-4 h-4 transition-transform group-hover/link:translate-x-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobListing;
