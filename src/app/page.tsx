import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Solutions from "@/components/Programs"; // We'll rename this section's content
import Philosophy from "@/components/Philosophy";
import Experience from "@/components/Experience";
import WhoIsThisFor from "@/components/WhoIsThisFor";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Solutions />
        <Philosophy />
        <Experience />
        <WhoIsThisFor />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
