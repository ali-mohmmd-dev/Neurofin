import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CareersHero from "@/components/CareersHero";
import JobListing from "@/components/JobListing";
import Philosophy from "@/components/Philosophy";

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <CareersHero />
        <JobListing />
        {/* Reusing Philosophy to reinforce company culture/learning approach */}
        <Philosophy />
      </main>
      <Footer />
    </div>
  );
}
