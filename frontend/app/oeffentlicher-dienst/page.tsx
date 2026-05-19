import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  FileText,
  ListOrdered,
  TrendingUp,
  UserCheck,
  Server,
  Layers,
} from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Stellenbeschreibungen & -bewertung",
    text: "Textbausteine und Vorlagen für vergleichbare Eingruppierungen – rechtssicher und zeitsparend.",
  },
  {
    icon: ListOrdered,
    title: "Eingruppierungssystem",
    text: "TVöD VKA 2017 und KGSt-Modelle vollständig unterstützt – Beamten- und Tarifrecht berücksichtigt.",
  },
  {
    icon: TrendingUp,
    title: "Leistungsentgelt (LoB)",
    text: "§18 TVöD – Leistungsbewertung mit verschiedenen Kriterien, Punktesystemen und Verteilungsmethoden.",
  },
  {
    icon: UserCheck,
    title: "Kompetenzmanagement",
    text: "Anforderungsprofile erstellen und automatisch mit Mitarbeiterprofilen abgleichen.",
  },
  {
    icon: Server,
    title: "Infrastruktur",
    text: "BSI-zertifizierte deutsche Rechenzentren – Schnittstellen zu SAP und KIDICAP vorhanden.",
  },
  {
    icon: Layers,
    title: "Modulares System",
    text: "Granulares Berechtigungssystem für HR, Führungskräfte und Mitarbeitende – skalierbar und anpassbar.",
  },
];

export default function OeffentlicherDienstPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16">
        <section className="bg-[#003f7f] text-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Branchenlösung TVöD</h1>
            <p className="text-xl text-blue-100">für den Öffentlichen Dienst</p>
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
              Ansprechpartnerin: <strong>Sonja Riekenberg</strong>
            </p>
            <p className="text-gray-600 mb-4">
              <a href="mailto:hr@itsd-consulting.de" className="hover:text-[#003f7f]">hr@itsd-consulting.de</a>
              {" · "}+49 5722 288 99-0
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
