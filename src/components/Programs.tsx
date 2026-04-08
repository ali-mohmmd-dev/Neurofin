import Image from "next/image";
import Link from "next/link"; // Recommended if using Next.js routing
const solutions = [
  {
    img: "/assets/program (1).png",
    title: "Foundation Program",
    desc: "This is where your journey begins. We strip away the jargon and build your understanding from the ground up.",
  },
  {
    img: "/assets/program (2).png",
    title: "Future Skills Program",
    desc: "Step into the future. This program is designed to liberate you from manual, repetitive work.",
  },
  {
    img: "/assets/program (3).png",
    title: "Applied Innovation Program",
    desc: "This is a transformational year. You evolve from a user of technology to a creator of systems.",
  },
  {
    img: "/assets/program (4).png",
    title: "Advanced Program in AI, Fintech & Regtech",
    desc: "For the seasoned professional, this is your leadership crucible. Dive deep into the most disruptive technologies shaping global finance.",
  },
  {
    img: "/assets/program (5).png",
    title: "Strategic Finance Program",
    desc: "This program is for the visionary. Whether you are an entrepreneur or a business owner, we give you the lens to see your business with perfect clarity.",
  },
  {
    img: "/assets/program (6).png",
    title: "Strategic Finance Program",
    desc: "This program is for the visionary. Whether you are an entrepreneur or a business owner, we give you the lens to see your business with perfect clarity.",
  },
];

const Programs = () => {
  return (
    <section id="solutions" >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-16">
          Our Solutions
        </h2>
      </div>
      <div className="lined-container">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3">
            {solutions.map((s, i) => (
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
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {s.desc}
                </p>
                
                {/* Learn More Button */}
                <div className="mt-auto">
                  <Link 
                    href={`/solutions/${s.title.toLowerCase().replace(/ /g, '-')}`}
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