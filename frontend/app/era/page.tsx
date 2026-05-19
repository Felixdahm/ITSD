import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  Search,
  TrendingUp,
  MessageSquare,
  Plug,
  Globe,
  ShieldCheck,
  FileDown,
  History,
  Calculator,
} from "lucide-react";

const features = [
  {
    icon: Search,
    title: "ERA Grundentgelt",
    text: "Volltextsuche in 600 tariflichen Niveaubeispielen, konforme Stellenbeschreibungen mit Textbausteinen, analytische und summarische Bewertungsmethoden.",
  },
  {
    icon: TrendingUp,
    title: "ERA Leistungsentgelt",
    text: "Leistungsbewertung, Zielvereinbarungen und automatische Leistungsprämienberechnung gemäß Tarifvertrag.",
  },
  {
    icon: MessageSquare,
    title: "Kommunikationsfunktionen",
    text: "Integrierte Kommunikationswerkzeuge für den Austausch zwischen HR, Führungskräften und Mitarbeitenden.",
  },
  {
    icon: Plug,
    title: "Integration",
    text: "Nahtlose Anbindung an SAP und Oracle PeopleSoft über standardisierte Schnittstellen.",
  },
  {
    icon: Globe,
    title: "Browserbasiert",
    text: "Keine lokale Installation erforderlich – überall und von jedem Gerät aus nutzbar.",
  },
  {
    icon: ShieldCheck,
    title: "Berechtigungsmanagement",
    text: "Granulares System mit Mandanten, Rollen und Benutzern – vollständige Datentrennung.",
  },
  {
    icon: FileDown,
    title: "PDF & Excel",
    text: "Stellenbeschreibungen und Auswertungen als PDF erzeugen oder in Excel exportieren.",
  },
  {
    icon: History,
    title: "Historische Entscheidungsnachverfolgung",
    text: "Alle Entscheidungen lückenlos dokumentiert und nachvollziehbar – revisionssicher.",
  },
  {
    icon: Calculator,
    title: "Lohn/Gehalt & ESS",
    text: "Integration mit Lohn- und Gehaltsabrechnungssystemen sowie Employee-Self-Service-Plattformen.",
  },
];

export default function EraPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16">
        <section className="bg-[#003f7f] text-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Branchenlösung ERA</h1>
            <p className="text-xl text-blue-100">für die Metall- und Elektroindustrie</p>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((f) => (
                <div key={f.title} className="flex flex-col gap-3 p-6 rounded-lg border border-gray-100 hover:border-[#003f7f] transition-colors">
                  <f.icon className="text-[#003f7f]" size={28} />
                  <h3 className="font-semibold text-gray-900">{f.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-600 mb-1">
              Ansprechpartner: <strong>Frank Schlinkheider</strong>
            </p>
            <p className="text-gray-600 mb-4">
              +49 5722 288 99-0
              {" · "}
              <a href="mailto:hr@itsd-consulting.de" className="hover:text-[#003f7f]">hr@itsd-consulting.de</a>
            </p>
            <Link
              href="/ansprechpartner"
              className="inline-block bg-[#003f7f] text-white px-6 py-3 rounded hover:bg-[#0057b0] transition-colors font-medium"
            >
              Jetzt Kontakt aufnehmen
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
