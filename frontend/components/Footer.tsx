import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#08649A" }} className="text-white">
      <div className="max-w-[1420px] mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row gap-10 mb-10">
          <div className="md:w-1/3">
            <Image
              src="/footer-logo.svg"
              alt="ITSD"
              width={100}
              height={100}
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p
              className="text-white/80 text-sm leading-relaxed max-w-xs"
              style={{ fontFamily: "'Open Sans Condensed', sans-serif" }}
            >
              Individuelle Software für Konzerne und Unternehmen – von der Idee bis zur Betreuung.
            </p>
          </div>

          <div className="md:w-1/3">
            <p
              className="text-xs font-bold uppercase tracking-widest text-white/50 mb-4"
              style={{ fontFamily: "'Open Sans Condensed', sans-serif" }}
            >
              Leistungen
            </p>
            <ul className="space-y-2" style={{ fontFamily: "'Open Sans Condensed', sans-serif" }}>
              {[
                { label: "Softwareentwicklung", href: "/softwareentwicklung" },
                { label: "Software Betreuung", href: "/software-betreuung" },
                { label: "Human Resources", href: "/hr-loesungen" },
                { label: "Vorteile", href: "/vorteile" },
                { label: "Über uns", href: "/ueber-uns" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/75 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:w-1/3">
            <p
              className="text-xs font-bold uppercase tracking-widest text-white/50 mb-4"
              style={{ fontFamily: "'Open Sans Condensed', sans-serif" }}
            >
              Kontakt
            </p>
            <ul className="space-y-2 text-sm text-white/75" style={{ fontFamily: "'Open Sans Condensed', sans-serif" }}>
              <li>Blankensteinstraße 62, 32257 Bünde</li>
              <li>
                <a href="tel:+4952237933400" className="hover:text-white transition-colors">
                  +49 5223 7933400
                </a>
              </li>
              <li>
                <a href="mailto:dev@itsd-consulting.de" className="hover:text-white transition-colors">
                  dev@itsd-consulting.de
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="border-t border-white/20 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50"
          style={{ fontFamily: "'Open Sans Condensed', sans-serif" }}
        >
          <p>© {new Date().getFullYear()} ITSD Consulting GmbH</p>
          <div className="flex items-center gap-6">
            <Link href="/impressum" className="hover:text-white transition-colors">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
