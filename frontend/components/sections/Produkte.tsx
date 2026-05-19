"use client";

import { useState } from "react";

type Kategorie = "alle" | "produkte" | "branchen";

const produkte = [
  {
    titel: "HR-Enterprise 2.0 Portal",
    beschreibung: "Portallösung inkl. Social Software",
    detail:
      "Browserbasierte Portallösung mit integrierter Social Software. Rollenbasiertes Berechtigungssystem für maximale Datensicherheit.",
    kategorie: "produkte" as const,
  },
  {
    titel: "ACTUS-ExpertenSystem",
    beschreibung: "für Ihre Organisationsentwicklung",
    detail:
      "Professionelle Unterstützung bei Stellenbeschreibungen, Stellenbewertungen und Anforderungsprofilen.",
    kategorie: "produkte" as const,
  },
  {
    titel: "MERIT-ExpertenSystem",
    beschreibung: "für Ihre Mitarbeiterentwicklung",
    detail:
      "Digitale Lösung für Mitarbeiterbeurteilungen, Zielvereinbarungen, Kompetenzprofile und Personalentwicklung.",
    kategorie: "produkte" as const,
  },
  {
    titel: "BEM-ExpertenSystem",
    beschreibung: "für Ihr Betriebliches Eingliederungsmanagement",
    detail:
      "Revisionssichere Dokumentation und Workflow-Unterstützung gemäß §84 Sozialgesetzbuch IX.",
    kategorie: "produkte" as const,
  },
  {
    titel: "Branchenlösung TVöD",
    beschreibung: "für den Öffentlichen Dienst",
    detail:
      "Spezialisierte HR-Lösung für kommunale Verwaltungen und den öffentlichen Dienst nach TVöD.",
    kategorie: "branchen" as const,
  },
  {
    titel: "Branchenlösung ERA",
    beschreibung: "für die Metall- und Elektroindustrie",
    detail:
      "Maßgeschneiderte Lösung für die Anforderungen der Metall- und Elektroindustrie nach ERA-Tarifvertrag.",
    kategorie: "branchen" as const,
  },
];

const tabs: { label: string; value: Kategorie }[] = [
  { label: "Alle", value: "alle" },
  { label: "HR-Produkte", value: "produkte" },
  { label: "Branchenlösungen", value: "branchen" },
];

export default function Produkte() {
  const [aktiv, setAktiv] = useState<Kategorie>("alle");

  const gefiltert =
    aktiv === "alle" ? produkte : produkte.filter((p) => p.kategorie === aktiv);

  return (
    <section id="produkte" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-[#003f7f] text-center mb-4">
          Unsere HR-Lösungen
        </h2>
        <p className="text-center text-gray-500 mb-8 text-sm">
          Für mittelständische und große Unternehmen sowie kommunale Verwaltungen
        </p>

        <div className="flex justify-center gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setAktiv(tab.value)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                aktiv === tab.value
                  ? "bg-[#003f7f] text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gefiltert.map((produkt) => (
            <div
              key={produkt.titel}
              className="border border-gray-200 rounded-xl p-6 hover:shadow-md hover:border-[#003f7f] transition-all"
            >
              <span className="inline-block text-xs font-semibold uppercase tracking-wide text-[#003f7f] bg-[#e8f0fe] px-2 py-1 rounded mb-4">
                {produkt.kategorie === "produkte" ? "HR-Produkt" : "Branchenlösung"}
              </span>
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                {produkt.titel}
              </h3>
              <p className="text-sm text-[#003f7f] mb-3">{produkt.beschreibung}</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                {produkt.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
