import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  FileText,
  Star,
  UserCheck,
  Search,
  FolderOpen,
  ShieldCheck,
  BarChart2,
} from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Stellenbeschreibungen",
    text: "Ca. 600 Stellenbeschreibungen aus unterschiedlichen Bereichen als anpassbare Vorlagen – sofort einsetzbar.",
  },
  {
    icon: Star,
    title: "Stellenbewertungen",
    text: "Unterstützung verschiedener Bewertungsmethoden: ERA, TVöD oder individuelle Systeme Ihres Unternehmens.",
  },
  {
    icon: UserCheck,
    title: "Anforderungsprofile",
    text: "Mitarbeiter-Kompetenzen mit Stellenanforderungen abgleichen – Qualifikationslücken auf einen Blick erkennen.",
  },
  {
    icon: Search,
    title: "Volltextsuche",
    text: "Moderne Suchfunktion über alle Inhalte – schnell finden, was Sie brauchen.",
  },
  {
    icon: FolderOpen,
    title: "Dokumentenmanagement",
    text: "Integriertes Dokumentenmanagement mit Versionskontrolle – alle Dokumente revisionssicher verwalten.",
  },
  {
    icon: ShieldCheck,
    title: "Berechtigungssystem",
    text: "Granulares Berechtigungssystem mit Workflow-Unterstützung – jeder Nutzer sieht nur, was er sehen soll.",
  },
  {
    icon: BarChart2,
    title: "Reporting & Analyse",
    text: "Flexible Auswertungen und Berichte für fundierte Personalentscheidungen.",
  },
];

export default function ActusExpertensystemPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16">
        <section className="bg-[#003f7f] text-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">ACTUS-ExpertenSystem</h1>
            <p className="text-xl text-blue-100">für Ihre Organisationsentwicklung</p>
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
            <p className="text-gray-600 mb-1">
              <a href="mailto:hr@itsd-consulting.de" className="hover:text-[#003f7f]">hr@itsd-consulting.de</a>
              {" · "}+49 5722 288 99-0
            </p>
            <p className="text-sm text-gray-500 mb-4">Broschüre zum Download auf Anfrage verfügbar.</p>
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
