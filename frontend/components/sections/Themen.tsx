const themen = [
  "Grund- und Leistungsentgelt",
  "Stellenbeschreibungen",
  "Stellenbewertungen",
  "Anforderungs- und Kompetenzprofile",
  "Mitarbeiterbeurteilungen",
  "Zielvereinbarungen",
  "Personalentwicklung",
  "Betriebliches Eingliederungsmanagement",
];

export default function Themen() {
  return (
    <section id="themen" className="py-16 px-4 bg-[#e8f0fe]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-[#003f7f] text-center mb-10">
          Hier erhalten Sie Lösungen zu folgenden Personalthemen
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {themen.map((thema) => (
            <li
              key={thema}
              className="bg-white border border-blue-100 rounded-lg px-5 py-4 text-sm font-medium text-gray-700 flex items-start gap-2 shadow-sm"
            >
              <span className="text-[#003f7f] mt-0.5">✓</span>
              {thema}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
