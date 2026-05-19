export default function Hero() {
  return (
    <section className="bg-[#003f7f] text-white pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Ihr Partner in Sachen HR-Lösungen
        </h1>
        <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-10 leading-relaxed">
          Sie suchen einen kompetenten IT-Partner, der Ihnen anpassbare
          HR-Lösungen liefert, Sie bei der Analyse und der Integration
          unterstützt und Sie auch nach der Umsetzung nicht allein lässt? Dann
          sind Sie hier richtig.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#produkte"
            className="bg-white text-[#003f7f] font-semibold px-8 py-3 rounded hover:bg-gray-100 transition-colors"
          >
            Unsere Lösungen
          </a>
          <a
            href="#kontakt"
            className="border border-white text-white font-semibold px-8 py-3 rounded hover:bg-white hover:text-[#003f7f] transition-colors"
          >
            Kontakt aufnehmen
          </a>
        </div>
      </div>
    </section>
  );
}
