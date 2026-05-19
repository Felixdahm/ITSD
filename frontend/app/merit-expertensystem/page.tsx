import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  Target,
  Award,
  ClipboardList,
  LayoutDashboard,
  Workflow,
  CalendarCheck,
  SlidersHorizontal,
  BarChart2,
  Plug,
  Calculator,
  Building2,
} from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Zielvereinbarungen",
    text: "Einzel- und Gruppenziele definieren, aus Unternehmenszielen ableiten und Vorjahresziele wiederverwenden.",
  },
  {
    icon: Award,
    title: "Kompetenzprofile",
    text: "Qualifikationen dokumentieren, Talente erkennen und Wissenslücken gezielt identifizieren.",
  },
  {
    icon: ClipboardList,
    title: "Leistungsbeurteilung",
    text: "Beurteilungskriterien, Bewertungen und Punkte frei definierbar – faire und transparente Dokumentation.",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboard",
    text: "Führungskräfte sehen den Status aller Mitarbeitenden, HR hat den Gesamtüberblick – mit Aufgaben und Fristen.",
  },
  {
    icon: Workflow,
    title: "Workflow-Automatisierung",
    text: "Prozesse automatisiert steuern und Benachrichtigungen bei Statusänderungen erhalten.",
  },
  {
    icon: CalendarCheck,
    title: "Aufgaben- und Kalenderverwaltung",
    text: "Fristen und Aufgaben im Blick behalten – integrierte Kalenderanbindung für alle Beteiligten.",
  },
  {
    icon: SlidersHorizontal,
    title: "Individuelle Feldkonfiguration",
    text: "Alle Felder und Formulare flexibel an Ihre unternehmenseigenen Anforderungen anpassen.",
  },
  {
    icon: BarChart2,
    title: "Analytics und Reporting",
    text: "Umfangreiche Auswertungen für datenbasierte Personalentscheidungen.",
  },
  {
    icon: Plug,
    title: "Integration",
    text: "Nahtlose Anbindung an SAP, PeopleSoft und P&I über standardisierte Schnittstellen.",
  },
  {
    icon: Calculator,
    title: "Leistungsentgeltkalkulation",
    text: "Automatische Berechnung von Leistungsprämien auf Basis definierter Bewertungskriterien.",
  },
  {
    icon: Building2,
    title: "Vorkonfiguriert für TVöD und ERA",
    text: "Sofort einsatzbereit für den öffentlichen Dienst und die Metall- und Elektroindustrie.",
  },
];

export default function MeritExpertensystemPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16">
        <section className="bg-[#003f7f] text-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">MERIT-ExpertenSystem</h1>
            <p className="text-xl text-blue-100">für Ihre Mitarbeiterentwicklung</p>
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
