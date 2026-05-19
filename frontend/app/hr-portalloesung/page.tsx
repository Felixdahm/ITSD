import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  GitBranch,
  Workflow,
  BookOpen,
  LayoutDashboard,
  Users,
  Lightbulb,
  Plug,
} from "lucide-react";

const features = [
  {
    icon: GitBranch,
    title: "Prozessmanagement",
    text: "Standard-HR-Abläufe wie Stellenbeschreibungen, Beurteilungen, Personalentwicklung und BEM als modellierte Workflows.",
  },
  {
    icon: Workflow,
    title: "Workflow-Automatisierung",
    text: "Grafisch modellierte Geschäftsprozesse, schnelle Anpassung an veränderte Anforderungen.",
  },
  {
    icon: BookOpen,
    title: "Wissensmanagement",
    text: "Projekträume, Wikis, Dokumentenmanagement und Diskussionsforen – effiziente Volltextsuche inklusive.",
  },
  {
    icon: LayoutDashboard,
    title: "Führungskräfte-Dashboard",
    text: "Echtzeit-Überblick über HR-Vorgänge und Aufgaben – reduziert administrativen Aufwand spürbar.",
  },
  {
    icon: Users,
    title: "Mitarbeiterportal",
    text: "Blogs und Foren, Kompetenzprofile veröffentlichen, interne Stellenmatchings für alle Mitarbeitenden.",
  },
  {
    icon: Lightbulb,
    title: "Talenterkennung",
    text: "Interne Kandidaten für Vakanzen und Projekte gezielt identifizieren und ansprechen.",
  },
  {
    icon: Plug,
    title: "Integration",
    text: "SAP, PeopleSoft, P&I via SSO, LDAP, Web Services und JSON – nahtlose Einbindung in bestehende Systemlandschaften.",
  },
];

export default function HrPortalloesungPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16">
        <section className="bg-[#003f7f] text-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">HR-Enterprise 2.0 Portal</h1>
            <p className="text-xl text-blue-100">Portallösung inkl. Social Software</p>
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
            <p className="text-gray-600 mb-2">
              Ansprechpartner: <strong>Frank Schlinkheider</strong> – +49 5722 288 99-0
            </p>
            <Link
              href="/ansprechpartner"
              className="inline-block mt-4 bg-[#003f7f] text-white px-6 py-3 rounded hover:bg-[#0057b0] transition-colors font-medium"
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
