import { Clock, GitBranch, ShieldCheck } from "lucide-react";

const vorteile = [
  {
    icon: Clock,
    titel: "Profis mit über 20 Jahren Erfahrung",
    text: "Seit mehr als zwei Jahrzehnten entwickeln wir individuelle Software für Konzerne und mittelständische Unternehmen – zuverlässig, in Time und in Budget.",
  },
  {
    icon: GitBranch,
    titel: "Individueller SCRUM Entwicklungsprozess",
    text: "Unterschiedliche Denkweisen und nachhaltige Abbildung Ihres Projekts. Wir kennen alle SCRUM Rollen und können diese perfekt besetzen.",
  },
  {
    icon: ShieldCheck,
    titel: "Sicherheit, Expertise und Kompetenz",
    text: "Wir arbeiten nach standardisierten Sicherheitsverfahren und haben weitreichende Kenntnisse in der sicheren Verschlüsselung von Daten.",
  },
];

export default function Vorteile() {
  return (
    <section id="vorteile" className="py-24 px-6 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-[#006098] uppercase tracking-widest mb-3">
            Warum ITSD
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#3d4452]">
            Unsere Stärken
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {vorteile.map(({ icon: Icon, titel, text }) => (
            <div
              key={titel}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 rounded-xl bg-[#e8f4fb] flex items-center justify-center mb-6">
                <Icon size={26} className="text-[#006098]" />
              </div>
              <h3 className="font-bold text-[#3d4452] text-lg mb-3 leading-snug">{titel}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
