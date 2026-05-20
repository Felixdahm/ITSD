"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Softwareentwicklung", href: "/softwareentwicklung" },
  { label: "Software Betreuung", href: "/software-betreuung" },
  { label: "Vorteile", href: "/#vorteile" },
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Kontakt", href: "/#kontakt" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-200 ${
        scrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="max-w-[1420px] mx-auto px-6 h-[70px] flex items-center gap-8">
        <Link href="/" className="shrink-0">
          <Image
            src="/logo.svg"
            alt="ITSD Softwareentwicklung"
            width={70}
            height={70}
            priority
            className="h-14 w-auto"
          />
        </Link>

        <a
          href="tel:+4952237933400"
          className="hidden md:block text-[#08649A] font-bold text-lg shrink-0 hover:opacity-80 transition-opacity"
          style={{ fontFamily: "'Open Sans Condensed', sans-serif" }}
        >
          +49 5223 7933400
        </a>

        <nav className="hidden md:flex items-center gap-1 ml-auto">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm font-bold text-black hover:text-[#08649A] transition-colors relative group"
              style={{ fontFamily: "'Open Sans Condensed', sans-serif" }}
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#08649A] group-hover:w-full transition-all duration-200" />
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden ml-auto p-2 text-black hover:bg-gray-100 rounded"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menü"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t px-4 py-3 flex flex-col">
          <a
            href="tel:+4952237933400"
            className="py-3 font-bold text-[#08649A] text-base border-b border-gray-100"
            style={{ fontFamily: "'Open Sans Condensed', sans-serif" }}
          >
            +49 5223 7933400
          </a>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-3 font-bold text-black hover:text-[#08649A] border-b border-gray-100 text-sm"
              style={{ fontFamily: "'Open Sans Condensed', sans-serif" }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
