import {
  Globe,
  Lock,
  Puzzle,
  Layers,
  Link,
  GitBranch,
  ShieldCheck,
  Cloud,
  Building2,
} from "lucide-react";

const vorteile = [
  {
    icon: Globe,
    titel: "Browserbasiert",
    text: "Keine Installation auf einzelnen PCs erforderlich. Unterstützung aller aktuellen Browser. Hoher Komfort und einfache Bedienung.",
  },
  {
    icon: Lock,
    titel: "Zugriffsgeregelt",
    text: "Detailliert konfigurierbares Berechtigungssystem. Frei definierbare Vergabe von Rollen und Rechten.",
  },
  {
    icon: Puzzle,
    titel: "Integrierbar",
    text: "Komfortabel in bestehende IT-Infrastrukturen oder Portale einzupassen.",
  },
  {
    icon: Layers,
    titel: "Kombinierbar",
    text: "Sämtliche Module sind sowohl technisch als auch fachlich optimal aufeinander abgestimmt. Einzel- oder Komplett-Einsatz möglich.",
  },
  {
    icon: Link,
    titel: "Kompatibel",
    text: "Schnittstellen zu anderen HR-Systemanbietern wie SAP oder P&I Loga.",
  },
  {
    icon: GitBranch,
    titel: "Workflow-unterstützend",
    text: "Abbildung komplexer und individueller HR-Prozessabläufe mit unterschiedlichsten Beteiligten.",
  },
  {
    icon: ShieldCheck,
    titel: "Rechts- und revisionssicher",
    text: "Revisionssichere Dokumentation gemäß §84 Sozialgesetzbuch IX. Verschlüsselter und gesicherter Zugang auf die Daten.",
  },
  {
    icon: Cloud,
    titel: "Lokal oder als SaaS",
    text: "BSI-zertifizierte Rechenzentren in Deutschland. Erfüllung aller datenschutzrelevanten Auflagen für Systeme mit personenbezogenen Daten.",
  },
  {
    icon: Building2,
    titel: "Branchenspezifisch",
    text: "Vorkonfigurierte Lösungen für den Öffentlichen Dienst (TVöD) und die Metall- und Elektroindustrie (ERA).",
  },
];

export default function Vorteile() {
  return (
    <section id="vorteile" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-[#003f7f] text-center mb-12">
          Vorteile aller ITSD-Lösungen
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {vorteile.map(({ icon: Icon, titel, text }) => (
            <div
              key={titel}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 bg-[#e8f0fe] rounded-lg flex items-center justify-center mb-4">
                <Icon size={20} className="text-[#003f7f]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{titel}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
