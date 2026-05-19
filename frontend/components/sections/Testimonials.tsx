"use client";

import { useState } from "react";

const testimonials = [
  {
    text: "ITSD unterstützt uns seit Jahren in vielen anspruchsvollen IT Projekten. Neben der guten Kommunikation schätzen wir vor allem Ihre ausgezeichnete Expertise im Bereich moderner Webtechnologien. Alle gemeinsamen Projekte wurden in Time und Budget erfolgreich abgeschlossen!",
    name: "Andreas Meynhardt",
    firma: "TOYOTA Kreditbank",
  },
  {
    text: "In den vergangenen Jahren haben wir viele Projekte erfolgreich mit ITSD umgesetzt. Die Zusammenarbeit während der Entwicklungsphase und der anschließenden Betreuung war bei jedem Projekt engagiert, ergebnisorientiert und zielführend. Auch für die Zukunft setzen wir auf die kollegiale und ausgezeichnete Zusammenarbeit mit ITSD.",
    name: "Eckhard Jostmeier",
    firma: "Geschäftsleitung Customize-IT GmbH & Co. KG",
  },
  {
    text: "Verlässlichkeit ist der Schlüssel für gute Zusammenarbeit. Ich, als langjähriger Kunde bin immer wieder über Termintreue und von Umsetzungsgenauigkeit überrascht.",
    name: "Gerald Wischnewski",
    firma: "Apotheken-Rechen-Zentrum GmbH",
  },
  {
    text: "Ich schätze ITSD als kompetenten Partner, insbesondere da sich auch die IT-Entwickler selber tief in die Geschäftsprozesse eindenken, so für prozessual optimale Ergebnisse sorgen und für mich als Kunden ein sehr guter Sparring-Partner hinsichtlich der Produktentwicklung sind.",
    name: "Roland Blask",
    firma: "",
  },
];

export default function Testimonials() {
  const [aktiv, setAktiv] = useState(0);

  return (
    <section className="pb-[80px] px-6">
      <div className="max-w-[1420px] mx-auto">
        <h2
          className="font-bold text-center mb-[80px]"
          style={{
            fontFamily: "'Open Sans Condensed', sans-serif",
            fontSize: "clamp(28px, 3vw, 35px)",
            lineHeight: "53px",
            color: "#08649A",
          }}
        >
          Das sagen unsere Kunden
        </h2>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${aktiv * 100}%)` }}
          >
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="w-full shrink-0"
                style={{
                  borderRadius: "8px",
                  padding: "15px 80px 50px 120px",
                  minHeight: "220px",
                }}
              >
                <p
                  className="mb-6"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "15px",
                    fontWeight: 400,
                    lineHeight: "26px",
                    color: "#000000",
                  }}
                >
                  &ldquo;{t.text}&rdquo;
                </p>
                <p
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "18px",
                    fontWeight: 600,
                    lineHeight: "30px",
                    color: "#08649A",
                  }}
                >
                  {t.name}
                  {t.firma && (
                    <span className="block font-normal text-sm text-gray-500">{t.firma}</span>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-3 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setAktiv(i)}
              aria-label={`Testimonial ${i + 1}`}
              className="w-3 h-3 rounded-full transition-colors"
              style={{
                backgroundColor: i === aktiv ? "#08649A" : "#CFCFCF",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
