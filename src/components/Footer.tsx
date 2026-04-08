import Link from "next/link";

const Footer = () => {
  return (
    <footer id="contact" className="py-24 md:py-32">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
          Build the Future of Finance
        </h2>
        <p className="text-base text-muted-foreground max-w-md mx-auto mb-10">
          Learn to think with clarity, build with intelligence, and lead with confidence.
        </p>
        <Link
          href="/contact"
          className="inline-block px-10 py-4 text-sm font-medium bg-primary text-background rounded-full hover:opacity-90 transition-opacity"
        >
         Book Consultation
        </Link>
      </div>
      <div className="container mx-auto px-6 mt-24 pt-8 lined-top flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">© 2026 Neurofn. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a>
          <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a>
          <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
