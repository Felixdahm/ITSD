import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  ShieldCheck,
  FileText,
  FolderKanban,
  Lock,
  Plug,
  BarChart2,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Datensicherheit",
    text: "Personenbezogene Daten werden in einem BSI-zertifizierten Rechenzentrum sicher verwahrt.",
  },
  {
    icon: FileText,
    title: "Dokumentation",
    text: "Automatisierte Erstellung konformer Briefe, Formulare und Gesprächsprotokolle – rechtssicher und effizient.",
  },
  {
    icon: FolderKanban,
    title: "Fallmanagement",
    text: "Detaillierte Verfolgung aller BEM-Vorgänge mit Dokumenten, Fristen, Aufgaben und Maßnahmen.",
  },
  {
    icon: Lock,
    title: "Zugriffskontrolle",
    text: "Granulares Berechtigungssystem mit individualisierten Zugängen für alle Beteiligten – Datenschutz inklusive.",
  },
  {
    icon: Plug,
    title: "Integration",
    text: "Anbindung an HR-Systeme (SAP, ePeople u. a.) sowie Outlook-Kalender für nahtlose Prozessintegration.",
  },
  {
    icon: BarChart2,
    title: "Reporting",
    text: "Flexible Auswertungen für die Fallverfolgung – aussagekräftige Berichte auf Knopfdruck.",
  },
];

export default function BemExpertensystemPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16">
        <section className="bg-[#003f7f] text-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">BEM-ExpertenSystem</h1>
            <p className="text-xl text-blue-100">für Ihr Betriebliches Eingliederungsmanagement</p>
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
            <p className="text-gray-600 mb-1">
              +49 5722 288 99-0
              {" · "}
              <a href="mailto:hr@itsd-consulting.de" className="hover:text-[#003f7f]">hr@itsd-consulting.de</a>
            </p>
            <p className="text-sm text-gray-500 mb-4">
              Weitere Informationen unter{" "}
              <a href="https://mybem.de" target="_blank" rel="noopener noreferrer" className="text-[#003f7f] hover:underline">
                mybem.de
              </a>
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
