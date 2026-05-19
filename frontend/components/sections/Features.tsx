import Image from "next/image";

const spalten = [
  [
    {
      titel: "Sichere Software",
      text: "Software muss nicht nur funktionell, sondern auch sicher sein. Wir arbeiten nach standardisierten Sicherheitsverfahren und haben weitreichende Kenntnisse in der sicheren Verschlüsselung von Daten.",
      bild: "/img-sicher.jpg",
    },
    {
      titel: "Full-Service Software",
      text: "Nach der Programmierung ist vor der Betreuung! 1st – 3rd Level Support und Hosting in der Cloud oder auf dedizierten Servern gehört für uns mit zum Service.",
      bild: "/img-fullservice.jpg",
    },
  ],
  [
    {
      titel: "Cloud ready",
      text: "Der Cloud gehört die Zukunft! Ihre Software kann plattformunabhängig eingesetzt werden und ist so vor Ausfällen geschützt.",
      bild: "/img-cloud.jpg",
    },
    {
      titel: "SCRUM",
      text: "Unterschiedliche Denkweisen und nachhaltige Abbildung Ihres Projekts. Wir kennen alle SCRUM Rollen und können diese perfekt besetzen.",
      bild: "/img-scrum.jpg",
    },
  ],
];

function FeatureCard({ titel, text, bild }: { titel: string; text: string; bild: string }) {
  return (
    <div className="flex flex-row gap-0 mb-8">
      <div className="w-1/2 shrink-0">
        <Image
          src={bild}
          alt={titel}
          width={300}
          height={300}
          className="w-full h-full object-cover rounded-lg"
          style={{ boxShadow: "0px 3px 6px rgba(0,0,0,0.16)" }}
        />
      </div>
      <div
        className="w-1/2 flex flex-col justify-center px-6 py-6"
        style={{ backgroundColor: "#dceef8" }}
      >
        <h3
          className="font-bold mb-3"
          style={{
            fontFamily: "'Open Sans Condensed', sans-serif",
            fontSize: "clamp(20px, 2vw, 30px)",
            lineHeight: "49px",
            letterSpacing: "-1.1px",
            color: "#08649A",
          }}
        >
          {titel}
        </h3>
        <p
          className="font-medium"
          style={{
            fontFamily: "'Open Sans Condensed', sans-serif",
            fontSize: "clamp(14px, 1.4vw, 25px)",
            lineHeight: "1.4",
            color: "#000000",
          }}
        >
          {text}
        </p>
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section
      className="py-[180px]"
      style={{ backgroundColor: "#08649A" }}
    >
      <div className="max-w-[1420px] mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-8">
          {spalten.map((spalte, i) => (
            <div key={i} className="w-full md:w-1/2 flex flex-col gap-8">
              {spalte.map((item) => (
                <FeatureCard key={item.titel} {...item} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
