import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function HRLoesungenPage() {
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
              Human Resources
            </h1>
            <h2
              className="text-white/80 mt-3 font-bold"
              style={{
                fontFamily: "'Open Sans Condensed', sans-serif",
                fontSize: "clamp(18px, 2vw, 26px)",
              }}
            >
              Projektspitzen abfangen und Kompetenzen liefern
            </h2>
          </div>
        </div>

        <section className="py-16 px-6 bg-white">
          <div className="max-w-[1100px] mx-auto">
            <div className="flex flex-col md:flex-row gap-6 mb-10">
              {[
                "Spezialisten auf Abruf",
                "Alle Technologien abgedeckt",
                "Schnelle Verfügbarkeit",
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
              Projektspitzen abfangen und Kompetenzen liefern. Wir haben die passenden Spezialisten für Ihre Anforderungen und zu allen Themen der Softwareentwicklung. Ob Frontend, Backend, DevOps oder Projektleitung – ITSD stellt Ihnen erfahrene Fachkräfte zur Verfügung, die sich schnell in Ihre Prozesse und Teams integrieren.
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

        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 flex items-center justify-center px-8 md:px-16 py-10 bg-white">
            <Image
              src="/img-hr.png"
              alt="Human Resources"
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
                Die richtigen Spezialisten
              </h3>
              <ul className="space-y-2 mb-4">
                {[
                  "Java / Spring Boot Entwickler",
                  "Frontend (React, Angular, Vue)",
                  "DevOps & Cloud (AWS, Azure)",
                  "Datenbankentwicklung",
                  "IT-Security & Verschlüsselung",
                  "SCRUM Master & Product Owner",
                  "Testautomatisierung",
                  "Systemarchitektur",
                ].map((item) => (
                  <li
                    key={item}
                    className="font-bold"
                    style={{
                      fontFamily: "'Open Sans Condensed', sans-serif",
                      fontSize: "clamp(14px, 1.4vw, 19px)",
                      color: "#08649A",
                    }}
                  >
                    ✓ {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse">
          <div className="w-full md:w-1/2 flex items-center justify-center px-8 md:px-16 py-10 bg-white">
            <Image
              src="/img-scrum.jpg"
              alt="SCRUM Team"
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
                Nahtlose Integration
              </h3>
              <p
                className="font-medium"
                style={{
                  fontFamily: "'Open Sans Condensed', sans-serif",
                  fontSize: "clamp(15px, 1.5vw, 20px)",
                  lineHeight: "1.5",
                  color: "#000",
                }}
              >
                Unsere Spezialisten fügen sich schnell und reibungslos in Ihre bestehenden Teams und Prozesse ein. Wir kennen alle SCRUM Rollen und können diese perfekt besetzen – für eine maximale Produktivität vom ersten Tag an.
              </p>
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
