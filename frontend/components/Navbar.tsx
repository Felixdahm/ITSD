"use client";

import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";

const hrLoesungen = [
  { label: "HR-Enterprise 2.0 Portal", href: "/hr-portalloesung" },
  { label: "Organisationsentwicklung (ACTUS)", href: "/actus-expertensystem" },
  { label: "Mitarbeiterentwicklung (MERIT)", href: "/merit-expertensystem" },
  { label: "Öffentlicher Dienst (TVöD)", href: "/oeffentlicher-dienst" },
  { label: "Metall- und Elektroindustrie (ERA)", href: "/era" },
  { label: "Betriebliches Eingliederungsmanagement", href: "/bem-expertensystem" },
];

const unternehmen = [
  { label: "Karriere", href: "/karriere" },
  { label: "Anfahrt", href: "/anfahrt" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileHrOpen, setMobileHrOpen] = useState(false);
  const [mobileUnternehmenOpen, setMobileUnternehmenOpen] = useState(false);
  const [hrDropdownOpen, setHrDropdownOpen] = useState(false);
  const [unternehmenDropdownOpen, setUnternehmenDropdownOpen] = useState(false);

  const hrRef = useRef<HTMLDivElement>(null);
  const unternehmenRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (hrRef.current && !hrRef.current.contains(e.target as Node)) {
        setHrDropdownOpen(false);
      }
      if (unternehmenRef.current && !unternehmenRef.current.contains(e.target as Node)) {
        setUnternehmenDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg text-[#003f7f]">
          ITSD <span className="font-normal text-gray-600">HR-Lösungen</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <div
            ref={hrRef}
            className="relative"
            onMouseEnter={() => setHrDropdownOpen(true)}
            onMouseLeave={() => setHrDropdownOpen(false)}
          >
            <button
              className="flex items-center gap-1 text-gray-700 hover:text-[#003f7f] text-sm font-medium transition-colors"
              aria-expanded={hrDropdownOpen}
            >
              HR-Lösungen
              <ChevronDown size={14} className={`transition-transform ${hrDropdownOpen ? "rotate-180" : ""}`} />
            </button>
            {hrDropdownOpen && (
              <div className="absolute top-full left-0 mt-1 w-72 bg-white rounded shadow-lg border border-gray-100 py-1 z-50">
                {hrLoesungen.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#e8f0fe] hover:text-[#003f7f] transition-colors"
                    onClick={() => setHrDropdownOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/service"
            className="text-gray-700 hover:text-[#003f7f] text-sm font-medium transition-colors"
          >
            Service
          </Link>

          <div
            ref={unternehmenRef}
            className="relative"
            onMouseEnter={() => setUnternehmenDropdownOpen(true)}
            onMouseLeave={() => setUnternehmenDropdownOpen(false)}
          >
            <button
              className="flex items-center gap-1 text-gray-700 hover:text-[#003f7f] text-sm font-medium transition-colors"
              aria-expanded={unternehmenDropdownOpen}
            >
              Unternehmen
              <ChevronDown size={14} className={`transition-transform ${unternehmenDropdownOpen ? "rotate-180" : ""}`} />
            </button>
            {unternehmenDropdownOpen && (
              <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded shadow-lg border border-gray-100 py-1 z-50">
                {unternehmen.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#e8f0fe] hover:text-[#003f7f] transition-colors"
                    onClick={() => setUnternehmenDropdownOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/ansprechpartner"
            className="text-gray-700 hover:text-[#003f7f] text-sm font-medium transition-colors"
          >
            Ansprechpartner
          </Link>

          <Link
            href="/news"
            className="text-gray-700 hover:text-[#003f7f] text-sm font-medium transition-colors"
          >
            News
          </Link>

          <Link
            href="/anmelden"
            className="bg-[#003f7f] text-white text-sm px-4 py-2 rounded hover:bg-[#0057b0] transition-colors"
          >
            Anmelden
          </Link>
        </nav>

        <button
          className="md:hidden p-2 text-gray-700"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menü"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t px-4 py-4 flex flex-col gap-1">
          <div>
            <button
              className="w-full flex items-center justify-between py-2 text-sm font-medium text-gray-700"
              onClick={() => setMobileHrOpen(!mobileHrOpen)}
            >
              HR-Lösungen
              <ChevronDown size={14} className={`transition-transform ${mobileHrOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileHrOpen && (
              <div className="pl-4 flex flex-col gap-1 mb-2">
                {hrLoesungen.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="py-1.5 text-sm text-gray-600 hover:text-[#003f7f]"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/service"
            className="py-2 text-sm font-medium text-gray-700"
            onClick={() => setMobileOpen(false)}
          >
            Service
          </Link>

          <div>
            <button
              className="w-full flex items-center justify-between py-2 text-sm font-medium text-gray-700"
              onClick={() => setMobileUnternehmenOpen(!mobileUnternehmenOpen)}
            >
              Unternehmen
              <ChevronDown size={14} className={`transition-transform ${mobileUnternehmenOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileUnternehmenOpen && (
              <div className="pl-4 flex flex-col gap-1 mb-2">
                {unternehmen.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="py-1.5 text-sm text-gray-600 hover:text-[#003f7f]"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/ansprechpartner"
            className="py-2 text-sm font-medium text-gray-700"
            onClick={() => setMobileOpen(false)}
          >
            Ansprechpartner
          </Link>

          <Link
            href="/news"
            className="py-2 text-sm font-medium text-gray-700"
            onClick={() => setMobileOpen(false)}
          >
            News
          </Link>

          <Link
            href="/anmelden"
            className="mt-2 bg-[#003f7f] text-white text-sm px-4 py-2 rounded text-center hover:bg-[#0057b0] transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Anmelden
          </Link>
        </div>
      )}
    </header>
  );
}
