import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

const themen = [
  {
    titel: "Flexibilität",
    text: "Wir arbeiten mit agilen Entwicklungsmethoden wie SCRUM, KANBAN … und das agile Mindset ist uns wichtig.",
  },
  {
    titel: "NEUgierig",
    text: "Neue Herausforderungen suchen und gemeinsam erfolgreich gestalten!",
    liste: [
      "Aktuelle Forschung (KI, TensorFlow, Keras)",
      "Neueste Technologien im Einsatz (Angular, NodeJS, Docker, GitLab, Spring Boot, Java, Maven)",
      "Talentmanagement",
    ],
  },
  {
    titel: "Aus-/Weiterbildung",
    text: "Fachkräftemangel herrscht überall! Wir sehen es als unsere Aufgabe, junge, engagierte Mitarbeiter zu fördern und zu fordern, um das Beste aus ihnen herauszuholen.",
  },
  {
    titel: "Lean",
    liste: [
      "Definierte Ziele",
      "Flache Hierarchie",
      "Schlanke Prozesse",
      "Continious Improvement",
      "Effizienter Einsatz der Ressourcen",
    ],
  },
  {
    titel: "Das ist ITSD",
    text: "Seit über 20 Jahren ist ITSD als der Software-Spezialist für mittelständische Unternehmen etabliert. So lockte der rasche Erfolg auch schnell diverse Konzerne als Kunden an. Bis heute steht der Name ITSD für effizienten Komplettservice sowie B2B-Portale.",
  },
  {
    titel: "Zuverlässigkeit",
    text: "Wir wollen zusammen mit unseren Kunden Projekte zum Erfolg bringen. Und das geht nur, indem man verlässlich handelt und sich gegenseitig vertraut.",
    liste: [
      "Bewährte Toolchain",
      "20 Jahre Erfahrung",
      "Transparent",
      "Zielgerichtet",
      "Permanenter Dialog",
    ],
  },
];

export default function UeberUnsPage() {
  return (
    <>
      <Navbar />
      <main>
        <div style={{ backgroundColor: "#08649A", paddingTop: "70px" }}>
          <div className="max-w-[1420px] mx-auto px-6 py-16">
            <h1
              className="font-bold text-white"
              style={{
                fontFamily: "'Open Sans Condensed', sans-serif",
                fontSize: "clamp(36px, 4vw, 56px)",
                lineHeight: "1.1",
              }}
            >
              Über uns
            </h1>
          </div>
        </div>

        <section className="py-16 px-6 bg-white">
          <div className="max-w-[1100px] mx-auto">
            <h2
              className="font-bold mb-8"
              style={{
                fontFamily: "'Open Sans Condensed', sans-serif",
                fontSize: "clamp(22px, 2.2vw, 32px)",
                color: "#3d4452",
                lineHeight: "1.3",
              }}
            >
              Wir wollen zusammen mit unseren Kunden Projekte zum Erfolg bringen.
            </h2>

            <div className="flex flex-col md:flex-row gap-6 mb-10">
              {[
                "Agilität",
                "Spezifische Sprint Ziele",
                "Bewährte Toolchain",
              ].map((p) => (
                <div
                  key={p}
                  className="flex-1 rounded-xl px-6 py-5 font-bold text-center"
                  style={{
                    backgroundColor: "#dceef8",
                    fontFamily: "'Open Sans Condensed', sans-serif",
                    fontSize: "clamp(16px, 1.6vw, 22px)",
                    color: "#08649A",
                  }}
                >
                  {p}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="tel:+4952237933400"
                className="inline-flex items-center justify-center font-bold text-white"
                style={{
                  fontFamily: "'Open Sans Condensed', sans-serif",
                  fontSize: "clamp(16px, 1.8vw, 20px)",
                  lineHeight: "52px",
                  backgroundColor: "#08649A",
                  borderRadius: "8px",
                  border: "3px solid #ffffff",
                  boxShadow: "0px 3px 6px rgba(0,0,0,0.16)",
                  padding: "0 28px",
                }}
              >
                Jetzt anrufen
              </a>
              <Link
                href="/#kontakt"
                className="inline-flex items-center justify-center font-bold text-white"
                style={{
                  fontFamily: "'Open Sans Condensed', sans-serif",
                  fontSize: "clamp(16px, 1.8vw, 20px)",
                  lineHeight: "52px",
                  backgroundColor: "#08649A",
                  borderRadius: "8px",
                  border: "3px solid #ffffff",
                  boxShadow: "0px 3px 6px rgba(0,0,0,0.16)",
                  padding: "0 28px",
                }}
              >
                Kontakt
              </Link>
            </div>
          </div>
        </section>

        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 flex items-center justify-center px-8 md:px-16 py-10 bg-white">
            <Image
              src="/img-uu-team.jpg"
              alt="ITSD Team"
              width={600}
              height={450}
              className="w-full max-w-[500px] rounded-lg"
              style={{ boxShadow: "0px 3px 6px rgba(0,0,0,0.16)" }}
            />
          </div>
          <div
            className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-16"
            style={{ backgroundColor: "#dceef8" }}
          >
            <div className="py-12 md:py-16 max-w-[430px]">
              <h2
                className="font-bold mb-5"
                style={{
                  fontFamily: "'Open Sans Condensed', sans-serif",
                  fontSize: "clamp(24px, 2.5vw, 34px)",
                  lineHeight: "1.2",
                  color: "#08649A",
                }}
              >
                Unsere Vision
              </h2>
              <p
                className="font-medium mb-4"
                style={{
                  fontFamily: "'Open Sans Condensed', sans-serif",
                  fontSize: "clamp(15px, 1.5vw, 20px)",
                  lineHeight: "1.5",
                  color: "#000",
                }}
              >
                Unsere Kunden sollen uns als „DEN" Ansprechpartner in Softwarefragen sehen und wahrnehmen. Egal aus welcher Branche und egal mit welchen technischen und strukturellen Herausforderungen.
              </p>
              <p
                className="font-medium mb-4"
                style={{
                  fontFamily: "'Open Sans Condensed', sans-serif",
                  fontSize: "clamp(15px, 1.5vw, 20px)",
                  lineHeight: "1.5",
                  color: "#000",
                }}
              >
                Wir wollen für unsere Kunden genau das sein, was sie individuell benötigen.
              </p>
              <p
                className="font-bold"
                style={{
                  fontFamily: "'Open Sans Condensed', sans-serif",
                  fontSize: "clamp(16px, 1.6vw, 22px)",
                  color: "#08649A",
                }}
              >
                Kundenzufriedenheit ist das oberste Gebot!
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse">
          <div className="w-full md:w-1/2 flex items-center justify-center px-8 md:px-16 py-10 bg-white">
            <Image
              src="/img-uu-office.jpg"
              alt="ITSD Büro"
              width={600}
              height={450}
              className="w-full max-w-[500px] rounded-lg"
              style={{ boxShadow: "0px 3px 6px rgba(0,0,0,0.16)" }}
            />
          </div>
          <div
            className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-16"
            style={{ backgroundColor: "#dceef8" }}
          >
            <div className="py-12 md:py-16 max-w-[430px]">
              <h2
                className="font-bold mb-6"
                style={{
                  fontFamily: "'Open Sans Condensed', sans-serif",
                  fontSize: "clamp(22px, 2.2vw, 30px)",
                  color: "#08649A",
                }}
              >
                Themen der Softwareentwicklung
              </h2>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: "Software Betreuung", href: "/software-betreuung" },
                  { label: "Softwareentwicklung", href: "/softwareentwicklung" },
                  { label: "HR Lösungen", href: "/hr-loesungen" },
                ].map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="inline-block font-bold text-white hover:opacity-80 transition-opacity"
                    style={{
                      fontFamily: "'Open Sans Condensed', sans-serif",
                      fontSize: "15px",
                      backgroundColor: "#08649A",
                      borderRadius: "6px",
                      padding: "6px 16px",
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <section className="py-16 px-6 bg-white">
          <div className="max-w-[1100px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {themen.map((t) => (
                <div
                  key={t.titel}
                  className="rounded-xl p-7"
                  style={{ backgroundColor: "#dceef8" }}
                >
                  <h3
                    className="font-bold mb-3"
                    style={{
                      fontFamily: "'Open Sans Condensed', sans-serif",
                      fontSize: "clamp(20px, 2vw, 26px)",
                      color: "#08649A",
                    }}
                  >
                    {t.titel}
                  </h3>
                  {t.text && (
                    <p
                      style={{
                        fontFamily: "'Open Sans Condensed', sans-serif",
                        fontSize: "clamp(14px, 1.4vw, 18px)",
                        lineHeight: "1.5",
                        color: "#000",
                        marginBottom: t.liste ? "10px" : "0",
                      }}
                    >
                      {t.text}
                    </p>
                  )}
                  {t.liste && (
                    <ul className="space-y-1">
                      {t.liste.map((li) => (
                        <li
                          key={li}
                          style={{
                            fontFamily: "'Open Sans Condensed', sans-serif",
                            fontSize: "clamp(13px, 1.3vw, 17px)",
                            color: "#000",
                          }}
                        >
                          • {li}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-6" style={{ backgroundColor: "#3d4452" }}>
          <div className="max-w-[1100px] mx-auto text-center">
            <h4
              className="font-bold text-white mb-2"
              style={{
                fontFamily: "'Open Sans Condensed', sans-serif",
                fontSize: "clamp(22px, 2.2vw, 30px)",
              }}
            >
              Nehmen Sie jetzt Kontakt mit uns auf
            </h4>
            <p
              className="text-white/80 mb-8"
              style={{
                fontFamily: "'Open Sans Condensed', sans-serif",
                fontSize: "clamp(16px, 1.6vw, 20px)",
              }}
            >
              und lassen Sie sich von uns beraten:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+4952237933400"
                className="inline-flex items-center justify-center font-bold text-white hover:opacity-80 transition-opacity"
                style={{
                  fontFamily: "'Open Sans Condensed', sans-serif",
                  fontSize: "clamp(16px, 1.8vw, 20px)",
                  lineHeight: "52px",
                  backgroundColor: "#08649A",
                  borderRadius: "8px",
                  border: "3px solid #ffffff",
                  boxShadow: "0px 3px 6px rgba(0,0,0,0.16)",
                  padding: "0 28px",
                }}
              >
                Jetzt anrufen
              </a>
              <Link
                href="/#kontakt"
                className="inline-flex items-center justify-center font-bold text-white hover:opacity-80 transition-opacity"
                style={{
                  fontFamily: "'Open Sans Condensed', sans-serif",
                  fontSize: "clamp(16px, 1.8vw, 20px)",
                  lineHeight: "52px",
                  backgroundColor: "#08649A",
                  borderRadius: "8px",
                  border: "3px solid #ffffff",
                  boxShadow: "0px 3px 6px rgba(0,0,0,0.16)",
                  padding: "0 28px",
                }}
              >
                Kontakt
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
