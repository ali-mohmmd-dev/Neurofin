import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import LinedContainer from "@/components/LinedContainer";
import { Mail, MapPin, Globe, Linkedin, Twitter, Instagram } from "lucide-react";

const infoBlocks = [
  {
    icon: Mail,
    title: "Email Us",
    detail: "contact@neurofn.com",
    href: "mailto:contact@neurofn.com"
  },
  {
    icon: MapPin,
    title: "Our Headquarters",
    detail: "123 Fintech Plaza, Suite 500, San Francisco, CA 94103",
  },
  {
    icon: Globe,
    title: "Global Presence",
    detail: "Operating worldwide with AI-driven intelligence.",
  },
  {
    icon: Linkedin,
    title: "Follow Our Journey",
    detail: "@neurofn_global",
    isSocial: true
  }
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        {/* Hero Section - Matching About/Home */}
        <section className="pt-56 pb-16">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-end">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                  Let's Build the Future <br /> of Finance
                </h1>
              </div>
              <div>
                <p className="text-muted-foreground leading-relaxed">
                  Have questions about our programs or want to discuss a partnership? Our team is here to help you navigate the future of AI-powered finance. Reach out and let's start a conversation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Body - Lined Container Architecture */}
        <LinedContainer className="py-0" containerClassName="px-0">
          <div className="grid lg:grid-cols-2">
            {/* Left Column: Contact Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2">
              {infoBlocks.map((block, i) => (
                <div key={i} className="lined-cell p-10 flex flex-col hover:bg-secondary/5 transition-all duration-500">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <block.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground leading-none mb-4">
                    {block.title}
                  </h3>
                  {block.href ? (
                    <a href={block.href} className="text-sm text-muted-foreground hover:text-primary transition-colors leading-relaxed">
                      {block.detail}
                    </a>
                  ) : (
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {block.detail}
                    </p>
                  )}
                  {block.isSocial && (
                    <div className="flex gap-4 mt-6">
                      <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Twitter size={18} /></a>
                      <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Instagram size={18} /></a>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Column: Contact Form */}
            <div className="lined-left p-10 md:p-16 bg-[linear-gradient(to_right,hsl(var(--secondary)/0.03)_50%,hsl(var(--secondary)/0.0))] backdrop-blur-sm">
              <div className="max-w-xl">
                <h2 className="text-2xl font-bold mb-8">Send us a message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </LinedContainer>
      </main>

      <Footer />
    </div>
  );
}
