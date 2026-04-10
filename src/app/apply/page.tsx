import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ApplicationForm } from "@/components/ApplicationForm";
import LinedContainer from "@/components/LinedContainer";
import { FileText, Cpu, Globe, Users } from "lucide-react";
import { Suspense } from "react";

const steps = [
  {
    icon: FileText,
    title: "Document Review",
    detail: "Our team carefully reviews every CV and portfolio to identify high-potential candidates and students.",
  },
  {
    icon: Cpu,
    title: "AI Analysis",
    detail: "We use predictive models to match your skills with the ideal program or role within our ecosystem.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    detail: "Join a worldwide network of finance professionals operating at the edge of technological innovation.",
  },
  {
    icon: Users,
    title: "Interview & Selection",
    detail: "Successful candidates are invited for a technical and strategic discussion with our leadership team.",
  }
];

export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="pt-56 pb-16">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-end">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                   Application <br /> Portal
                </h1>
              </div>
              <div>
                <p className="text-muted-foreground leading-relaxed">
                  Ready to transcend traditional finance? Whether you are applying for a specialized program or a career-defining role, this is where your transformation begins. Fill out the details below.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Application Body */}
        <LinedContainer className="py-0" containerClassName="px-0">
          <div className="grid lg:grid-cols-2">
            {/* Left Column: Process Info */}
            <div className="grid grid-cols-1 md:grid-cols-2">
              {steps.map((step, i) => (
                <div key={i} className="lined-cell p-10 flex flex-col hover:bg-primary/5 transition-all duration-500">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <step.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground leading-none mb-4">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.detail}
                  </p>
                </div>
              ))}
            </div>

            {/* Right Column: Application Form */}
            <div className="lined-left p-10 md:p-16 bg-[linear-gradient(to_right,hsl(var(--primary)/0.03)_50%,hsl(var(--primary)/0.0))] backdrop-blur-sm">
              <div className="max-w-xl">
                <h2 className="text-2xl font-bold mb-8">Personal Information</h2>
                <Suspense fallback={<div>Loading form...</div>}>
                  <ApplicationForm />
                </Suspense>
              </div>
            </div>
          </div>
        </LinedContainer>
      </main>

      <Footer />
    </div>
  );
}
