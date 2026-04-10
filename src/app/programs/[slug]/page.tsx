import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PROGRAMS } from "@/lib/constants";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";

// Generate static params for static export
export function generateStaticParams() {
  return PROGRAMS.map((p) => ({
    slug: p.slug,
  }));
}

export default async function ProgramDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const program = PROGRAMS.find((p) => p.slug === slug);

  if (!program) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        {/* 1st Session: Hero Section */}
        <section className="pt-56 pb-24 ">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {program.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-medium border border-[hsl(var(--primary)/0.2)] text-[hsl(var(--primary))] bg-[hsl(var(--primary)/0.03)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="inline-block text-[10px] font-semibold tracking-widest uppercase text-muted-foreground mb-4">
                  {program.title}
                </span>
                <h1 className="text-4xl md:text-5xl  font-bold tracking-tight text-foreground mb-6">
                  {program.tagline}
                </h1>
                <p className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-xl">
                  {program.desc}
                </p>
                <div className="flex items-center gap-8 mb-10">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Duration</p>
                    <p className="text-sm font-medium text-foreground">{program.duration}</p>
                  </div>
                  <div className="w-px h-8 bg-border-lined" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Level</p>
                    <p className="text-sm font-medium text-foreground">{program.level}</p>
                  </div>
                </div>
                <Link
                  href={`/apply?target=${program.slug}`}
                  className="px-8 py-3 text-sm font-medium bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity"
                >
                  Apply Now
                </Link>
              </div>
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden ">
                <Image
                  src={program.img}
                  alt={program.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* 2nd Session: Program Overview */}
        <section className="pb-24 md:pb-32">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 md:gap-24">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                  What You'll Learn
                </h2>
               
              </div>
              <div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {program.overview}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3rd Session: Key Highlights (Lined Container with 3rd columns flex) */}
        <section className="lined-container ">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-0">
              {program.highlights.map((h, i) => (
                <div key={i} className="lined-cell p-8 flex flex-col border-collapse group  hover:bg-[linear-gradient(to_right,hsl(var(--primary)/0.03)_50%,hsl(var(--secondary)/0.02))] transition-all ease-in-out duration-900">
                  <h3 className="text-lg font-semibold text-foreground mb-4">{h.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{h.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4th Session: Curriculum (Program Structure) */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 md:gap-24">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                  Program Structure
                </h2>
              </div>
              <div className="space-y-12">
                {program.curriculum.map((m, i) => (
                  <div key={i} className="flex gap-6 md:gap-8">
                    <span className="text-sm font-medium text-muted-foreground shrink-0">0{i + 1}</span>
                    <span className="mt-2.5 w-8 md:w-12 border-t border-dashed border-foreground/20 shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">{m.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {m.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Testimonials/>
      </main>

      <Footer />
    </div>
  );
}
