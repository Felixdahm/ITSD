import Image from "next/image";
import Link from "next/link";

const rows = [
  {
    titel: "Human Resources",
    text: "Projektspitzen abfangen und Kompetenzen liefern. Wir haben die passenden Spezialisten für Ihre Anforderungen und zu allen Themen der Softwareentwicklung.",
    bild: "/img-hr.png",
    bildLinks: true,
    button: null,
    href: null,
  },
  {
    titel: "Softwareentwicklung",
    text: "Von der ersten Idee bis zur anschließenden Betreuung: ITSD ist Ihr Komplettanbieter für moderne Softwareentwicklung.",
    bild: "/img-softwareentwicklung.png",
    bildLinks: false,
    button: "Mehr erfahren",
    href: "/softwareentwicklung",
  },
  {
    titel: "Softwarebetreuung",
    text: "Ihre Software ist entwickelt und soll nun betreut werden? Verlassen Sie sich auf uns mit optimaler Organisation nach Kanban und in enger Abstimmung mit Ihnen.",
    bild: "/img-betreuung.png",
    bildLinks: true,
    button: "Mehr erfahren",
    href: "/software-betreuung",
  },
];

export default function Leistungen() {
  return (
    <section className="pt-[180px]">
      {rows.map((row, i) => (
        <div
          key={row.titel}
          className={`flex flex-col md:flex-row ${row.bildLinks ? "" : "md:flex-row-reverse"}`}
          style={{ marginBottom: i < rows.length - 1 ? (i === 0 ? "120px" : "120px") : "120px" }}
        >
          <div className="w-full md:w-1/2 flex items-center justify-center px-8 md:px-16">
            <Image
              src={row.bild}
              alt={row.titel}
              width={668}
              height={628}
              className="w-full max-w-[500px] rounded-lg"
              style={{ boxShadow: "0px 3px 6px rgba(0,0,0,0.16)" }}
            />
          </div>

          <div
            className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-16 pt-10 md:pt-0"
            style={{ backgroundColor: "#dceef8" }}
          >
            <div className="py-12 md:py-16 max-w-[430px]">
              <h3
                className="font-bold mb-4"
                style={{
                  fontFamily: "'Open Sans Condensed', sans-serif",
                  fontSize: "clamp(28px, 3vw, 40px)",
                  lineHeight: "49px",
                  letterSpacing: "-1.5px",
                  color: "#08649A",
                }}
              >
                {row.titel}
              </h3>
              <p
                className="font-medium"
                style={{
                  fontFamily: "'Open Sans Condensed', sans-serif",
                  fontSize: "clamp(18px, 2vw, 30px)",
                  lineHeight: "34px",
                  color: "#000000",
                }}
              >
                {row.text}
              </p>
              {row.button && row.href && (
                <Link
                  href={row.href}
                  className="inline-flex items-center justify-center font-bold text-white mt-5 hover:opacity-80 transition-opacity"
                  style={{
                    fontFamily: "'Open Sans Condensed', sans-serif",
                    fontSize: "16px",
                    lineHeight: "42px",
                    backgroundColor: "#08649A",
                    borderRadius: "8px",
                    border: "3px solid #ffffff",
                    boxShadow: "0px 3px 6px rgba(0,0,0,0.16)",
                    padding: "0 28px",
                    textDecoration: "none",
                  }}
                >
                  {row.button}
                </Link>
              )}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
