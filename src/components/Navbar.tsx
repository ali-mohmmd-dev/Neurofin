"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/0 ">
      <div className="container mx-auto px-6 py-6 flex items-center justify-between">
        <Link href="/">
          <Image src="/assets/logo.png" className="object-contain mb-6 cursor-pointer" alt="Logo" width={150} height={200} />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</Link>
          <Link href="/#solutions" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Solutions</Link>
          <Link href="/#philosophy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Philosophy</Link>
          <Link href="/#interface" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Interface</Link>
          <Link href="/#advisors" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Advisors</Link>
        </div>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className="inline-block px-6 py-2.5 text-sm font-medium bg-foreground text-background rounded-full hover:opacity-90 transition-opacity"
          >
            Get Started
          </Link>
        </div>

        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-4 bg-background/95 backdrop-blur-xl">
          <Link href="/about" className="text-sm text-muted-foreground" onClick={() => setMobileOpen(false)}>About</Link>
          <Link href="/#solutions" className="text-sm text-muted-foreground" onClick={() => setMobileOpen(false)}>Solutions</Link>
          <Link href="/#philosophy" className="text-sm text-muted-foreground" onClick={() => setMobileOpen(false)}>Philosophy</Link>
          <Link href="/#interface" className="text-sm text-muted-foreground" onClick={() => setMobileOpen(false)}>Interface</Link>
          <Link href="/#advisors" className="text-sm text-muted-foreground" onClick={() => setMobileOpen(false)}>Advisors</Link>
          <Link href="/contact" className="inline-block px-6 py-2.5 text-sm font-medium bg-foreground text-background rounded-full text-center" onClick={() => setMobileOpen(false)}>Get Started</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
