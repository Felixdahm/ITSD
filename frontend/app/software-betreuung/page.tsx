import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

const kanbanPunkte = [
  "Workflow visualisieren",
  "Laufende Arbeit begrenzen",
  "Prozessrichtlinien ausformulieren",
  "Zusammenarbeit verbessern",
];

const orgPunkte = [
  "Staendiger Ueberblick",
  "Strukturierte Ablauefe",
  "Einhalten der Deadlines",
  "Konzern-Erfahrung",
];

const teamPunkte = [
  "Jederzeit erreichbar",
  "Jede Form der Unterstuetzung moeglich",
  "Schnelle Reaktion auf veraenderte Anforderungen",
  "Projektabschluesse in-time & in-budget",
];

export default function SoftwareBetreuungPage() {
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
              Software Betreuung
            </h1>
            <h2
              className="text-white/80 mt-3 font-bold"
              style={{
                fontFamily: "'Open Sans Condensed', sans-serif",
                fontSize: "clamp(18px, 2vw, 26px)",
              }}
            >
              Um das Maximum herauszuholen
            </h2>
          </div>
        </div>

        <section className="py-16 px-6 bg-white">
          <div className="max-w-[1100px] mx-auto">
            <div className="flex flex-col md:flex-row gap-6 mb-10">
              {[
                "Effektiver & produktiver durch Kanban",
                "Optimale Organisation",
                "Eng im Austausch mit Ihnen",
              ].map((punkt) => (
                <div
                  key={punkt}
                  className="flex-1 rounded-xl px-6 py-5 font-bold text-center"
                  style={{
                    backgroundColor: "#dceef8",
                    fontFamily: "'Open Sans Condensed', sans-serif",
                    fontSize: "clamp(16px, 1.6vw, 22px)",
                    color: "#08649A",
                  }}
                >
                  {punkt}
                </div>
              ))}
            </div>

            <p
              className="font-medium mb-8"
              style={{
                fontFamily: "'Open Sans Condensed', sans-serif",
                fontSize: "clamp(17px, 1.7vw, 23px)",
                lineHeight: "1.6",
                color: "#000",
              }}
            >
              Ihre Software ist fertig entwickelt und Sie wünschen sich die passende Betreuung? Dann sind Sie bei ITSD genau richtig! Mit unserem Full Service sind Sie nach der Softwareentwicklung nicht auf sich alleine gestellt. Sie haben Fragen, Wünsche für Veränderung und weitere Anliegen in Bezug auf Ihre Software? Gerne übernehmen wir das mit unserer Software-Betreuung – damit Sie das Maximum herausholen können.
            </p>

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

        <section className="pb-4 px-6" style={{ backgroundColor: "#f0f7fc" }}>
          <div className="max-w-[1100px] mx-auto pt-14 pb-4">
            <h2
              className="font-bold mb-1"
              style={{
                fontFamily: "'Open Sans Condensed', sans-serif",
                fontSize: "clamp(22px, 2.2vw, 30px)",
                color: "#08649A",
              }}
            >
              Software Betreuung bei ITSD
            </h2>
            <h2
              className="font-bold"
              style={{
                fontFamily: "'Open Sans Condensed', sans-serif",
                fontSize: "clamp(18px, 1.8vw, 24px)",
                color: "#3d4452",
              }}
            >
              Mehr Themen im Bereich Software Betreuung
            </h2>
          </div>
        </section>

        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 flex items-center justify-center px-8 md:px-16 py-10 bg-white">
            <Image
              src="/img-sb-kanban.png"
              alt="Kanban"
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
              <h3
                className="font-bold mb-4"
                style={{
                  fontFamily: "'Open Sans Condensed', sans-serif",
                  fontSize: "clamp(24px, 2.5vw, 36px)",
                  lineHeight: "1.2",
                  letterSpacing: "-1px",
                  color: "#08649A",
                }}
              >
                Kanban
              </h3>
              <ul className="mb-4 space-y-1">
                {kanbanPunkte.map((p) => (
                  <li
                    key={p}
                    className="font-bold"
                    style={{
                      fontFamily: "'Open Sans Condensed', sans-serif",
                      fontSize: "clamp(15px, 1.5vw, 20px)",
                      color: "#08649A",
                    }}
                  >
                    ✓ {p}
                  </li>
                ))}
              </ul>
              <p
                className="font-medium"
                style={{
                  fontFamily: "'Open Sans Condensed', sans-serif",
                  fontSize: "clamp(15px, 1.5vw, 20px)",
                  lineHeight: "1.5",
                  color: "#000",
                }}
              >
                Kanban eignet sich hervorragend zur Visualisierung Ihres Prozesses.
                Wir teilen die Aufgaben in Spalten wie &bdquo;Geplant&ldquo;,
                &bdquo;in Arbeit&ldquo; und &bdquo;Erledigt&ldquo;.
                Einmal etabliert, nie mehr kompliziert!
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse">
          <div className="w-full md:w-1/2 flex items-center justify-center px-8 md:px-16 py-10 bg-white">
            <Image
              src="/img-sb-org.jpg"
              alt="Optimale Organisation"
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
              <h3
                className="font-bold mb-4"
                style={{
                  fontFamily: "'Open Sans Condensed', sans-serif",
                  fontSize: "clamp(24px, 2.5vw, 36px)",
                  lineHeight: "1.2",
                  letterSpacing: "-1px",
                  color: "#08649A",
                }}
              >
                Optimale Organisation
              </h3>
              <ul className="mb-4 space-y-1">
                {orgPunkte.map((p) => (
                  <li
                    key={p}
                    className="font-bold"
                    style={{
                      fontFamily: "'Open Sans Condensed', sans-serif",
                      fontSize: "clamp(15px, 1.5vw, 20px)",
                      color: "#08649A",
                    }}
                  >
                    ✓ {p}
                  </li>
                ))}
              </ul>
              <p
                className="font-medium"
                style={{
                  fontFamily: "'Open Sans Condensed', sans-serif",
                  fontSize: "clamp(15px, 1.5vw, 20px)",
                  lineHeight: "1.5",
                  color: "#000",
                }}
              >
                Sie wünschen sich eine optimale Organisation, bei der nichts vergessen wird
                und Sie alle Schritte nachvollziehen können?
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 flex items-center justify-center px-8 md:px-16 py-10 bg-white">
            <Image
              src="/img-sb-team.jpg"
              alt="Enge Abstimmung"
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
              <h3
                className="font-bold mb-4"
                style={{
                  fontFamily: "'Open Sans Condensed', sans-serif",
                  fontSize: "clamp(24px, 2.5vw, 36px)",
                  lineHeight: "1.2",
                  letterSpacing: "-1px",
                  color: "#08649A",
                }}
              >
                Enge Abstimmung mit Ihnen
              </h3>
              <ul className="space-y-1">
                {teamPunkte.map((p) => (
                  <li
                    key={p}
                    className="font-bold"
                    style={{
                      fontFamily: "'Open Sans Condensed', sans-serif",
                      fontSize: "clamp(15px, 1.5vw, 20px)",
                      color: "#08649A",
                    }}
                  >
                    ✓ {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

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
