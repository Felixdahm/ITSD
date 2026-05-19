export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center"
      style={{
        backgroundImage: "url('/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-[770px] mx-auto px-8 md:px-12 pt-[70px] pb-20 w-full">
        <h1
          className="font-bold leading-tight mb-2"
          style={{
            fontFamily: "'Open Sans Condensed', sans-serif",
            fontSize: "clamp(40px, 5vw, 53px)",
            lineHeight: "1",
            color: "#08649A",
          }}
        >
          Individuelle Software für<br />Konzerne und Unternehmen
        </h1>

        <h2
          className="font-bold"
          style={{
            fontFamily: "'Open Sans Condensed', sans-serif",
            fontSize: "clamp(18px, 2vw, 23px)",
            lineHeight: "34px",
            color: "#000000",
            borderBottom: "2px solid #000000",
            paddingBottom: "20px",
            marginBottom: "20px",
            display: "inline-block",
          }}
        >
          Software von der Idee ab entwickelt
        </h2>

        <div className="flex flex-col gap-0 mt-2">
          {[
            "Profis mit über 20 Jahren Erfahrung",
            "Individueller SCRUM Entwicklungsprozess",
            "Sicherheit, Expertise und Kompetenz",
          ].map((punkt) => (
            <h3
              key={punkt}
              className="font-bold"
              style={{
                fontFamily: "'Open Sans Condensed', sans-serif",
                fontSize: "clamp(16px, 1.8vw, 20px)",
                lineHeight: "30px",
                color: "#000000",
                marginLeft: "20px",
              }}
            >
              {punkt}
            </h3>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 mt-8">
          <a
            href="tel:+4952237933400"
            className="inline-flex items-center justify-center font-bold text-white rounded-lg border-3 border-white shadow-md transition-colors hover:bg-white hover:text-[#08649A]"
            style={{
              fontFamily: "'Open Sans Condensed', sans-serif",
              fontSize: "clamp(18px, 2vw, 23px)",
              lineHeight: "52px",
              backgroundColor: "#08649A",
              width: "225px",
              borderRadius: "8px",
              border: "3px solid #ffffff",
              boxShadow: "0px 3px 6px rgba(0,0,0,0.16)",
              textDecoration: "none",
            }}
          >
            Jetzt anrufen
          </a>
          <a
            href="/kontakt"
            className="inline-flex items-center justify-center font-bold text-white rounded-lg border-3 border-white shadow-md transition-colors hover:bg-white hover:text-[#08649A]"
            style={{
              fontFamily: "'Open Sans Condensed', sans-serif",
              fontSize: "clamp(18px, 2vw, 23px)",
              lineHeight: "52px",
              backgroundColor: "#08649A",
              width: "225px",
              borderRadius: "8px",
              border: "3px solid #ffffff",
              boxShadow: "0px 3px 6px rgba(0,0,0,0.16)",
              textDecoration: "none",
            }}
          >
            Kontakt
          </a>
        </div>
      </div>
    </section>
  );
}
