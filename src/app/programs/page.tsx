import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProgramsHero from "@/components/ProgramsHero";
import Programs from "@/components/Programs";
import Philosophy from "@/components/Philosophy";
import WhoIsThisFor from "@/components/WhoIsThisFor";
import Testimonials from "@/components/Testimonials";

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <ProgramsHero />
        {/* We use the Programs component here to show the full gallery */}
        <Programs />
        <Philosophy />
        <WhoIsThisFor />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
