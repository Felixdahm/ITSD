import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

const sektionen = [
  {
    titel: "Nachhaltige Softwareentwicklung",
    text: "Wir sprechen Java bzw. Single Page Application und bieten Ihnen durch unsere langjährige Erfahrung best practices mit der Open Source Architektur. Eine geringe Time to Market erreichen wir in der Softwareentwicklung durch unser vorhandenes Grundgerüst an Wissen und setzen dieses für Sie ein.",
    bild: "/img-se-team.jpg",
    bildLinks: true,
  },
  {
    titel: "Agile Softwareentwicklung",
    text: "Zu Projektbeginn erarbeiten wir zusammen mit Ihnen anhand einer ersten Grobanalyse Rahmenbedingungen und Ziele Ihres Projektes. Danach starten wir sofort mit der Umsetzung eines ersten MVP und erreichen eine optimale Time to Market.",
    bild: "/img-se-agile.jpg",
    bildLinks: false,
  },
  {
    titel: "Portale von den Portal-Profis",
    text: "B2B oder B2C Portale – damit kennen wir uns aus. Für mehrere namhafte Konzerne konnten wir erfolgreich Portale entwickeln und kennen die Denkweisen. Besonderes Augenmerk legen wir auf den sicheren Umgang mit sensiblen Daten.",
    bild: "/img-se-portale.png",
    bildLinks: true,
  },
];

export default function SoftwareentwicklungPage() {
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
              Softwareentwicklung nach SCRUM
            </h1>
            <h2
              className="text-white/80 mt-3"
              style={{
                fontFamily: "'Open Sans Condensed', sans-serif",
                fontSize: "clamp(18px, 2vw, 26px)",
                fontWeight: "bold",
              }}
            >
              Effiziente Software für Unternehmen
            </h2>
          </div>
        </div>

        <section className="py-16 px-6 bg-white">
          <div className="max-w-[1100px] mx-auto">
            <div className="flex flex-col md:flex-row gap-8 mb-10">
              {[
                "Software mit Qualität und Sicherheit",
                "Eingespieltes Team",
                "Über 20 Jahre Erfahrung",
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
              Unser Fokus liegt auf der Softwareentwicklung mit Java. Auf diesem Gebiet haben wir Expertenwissen und kennen aus zahlreichen Projekten die Fallstricke, die es zu umschiffen gilt. Prozesse bilden wir in SCRUM ab und können dabei alle Rollen perfekt besetzen.
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
              className="font-bold mb-2"
              style={{
                fontFamily: "'Open Sans Condensed', sans-serif",
                fontSize: "clamp(26px, 2.5vw, 34px)",
                color: "#08649A",
              }}
            >
              Individuelle Softwareentwicklung
            </h2>
            <h2
              className="font-bold mb-0"
              style={{
                fontFamily: "'Open Sans Condensed', sans-serif",
                fontSize: "clamp(20px, 2vw, 26px)",
                color: "#3d4452",
              }}
            >
              Mehr Themen im Bereich Softwareentwicklung
            </h2>
          </div>
        </section>

        {sektionen.map((s, i) => (
          <div
            key={s.titel}
            className={`flex flex-col md:flex-row ${s.bildLinks ? "" : "md:flex-row-reverse"}`}
            style={{ marginBottom: i < sektionen.length - 1 ? "0" : "0" }}
          >
            <div className="w-full md:w-1/2 flex items-center justify-center px-8 md:px-16 py-10 bg-white">
              <Image
                src={s.bild}
                alt={s.titel}
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
                  {s.titel}
                </h3>
                <p
                  className="font-medium"
                  style={{
                    fontFamily: "'Open Sans Condensed', sans-serif",
                    fontSize: "clamp(16px, 1.6vw, 22px)",
                    lineHeight: "1.5",
                    color: "#000",
                  }}
                >
                  {s.text}
                </p>
              </div>
            </div>
          </div>
        ))}

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
