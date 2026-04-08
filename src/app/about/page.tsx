import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import VisionMission from "@/components/VisionMission";
import WhatMakesUsDifferent from "@/components/WhatMakesUsDifferent";
import Philosophy from "@/components/Philosophy";
import Experience from "@/components/Experience";
import WhoIsThisFor from "@/components/WhoIsThisFor";
import Testimonials from "@/components/Testimonials";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <AboutHero />
        <VisionMission />
        <WhatMakesUsDifferent />
        <Philosophy />
        <Experience />
        <WhoIsThisFor />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
