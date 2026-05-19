import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar } from "lucide-react";

const newsItems = [
  {
    date: "September 2025",
    title: "Zukunft Personal Europe Köln",
    text: "Erfolgreich auf der Zukunft Personal Europe in Köln – Präsentationen zur digitalen BEM-Dokumentation.",
  },
  {
    date: "Juni 2025",
    title: "Partnerschaft mit Collabora",
    text: "Strategische Partnerschaft mit Collabora für Open-Source-Office-Lösungen – nahtlose Integration in bestehende ITSD-Plattformen.",
  },
  {
    date: "März 2025",
    title: "Zukunft Personal Nord Hamburg",
    text: "ITSD auf der Zukunft Personal Nord in Hamburg, Halle A1, Stand A.42-2.",
  },
  {
    date: "Juni 2024",
    title: "Partnerschaft mit Namirial",
    text: "Zusammenarbeit mit Namirial für elektronische Signatur-Integration in HR-Workflows.",
  },
  {
    date: "Februar 2024",
    title: "Top Brand Corporate Health 2024",
    text: "Ausgezeichnet als \"Top Brand – Corporate Health 2024\" durch EUPD Research für das BEM-ExpertenSystem.",
  },
];

export default function NewsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16">
        <section className="bg-[#003f7f] text-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">News</h1>
            <p className="text-xl text-blue-100">Aktuelles aus dem Unternehmen</p>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto flex flex-col gap-6">
            {newsItems.map((item) => (
              <article
                key={item.title}
                className="p-6 rounded-lg border border-gray-100 hover:border-[#003f7f] transition-colors"
              >
                <div className="flex items-center gap-2 text-[#003f7f] text-sm font-medium mb-3">
                  <Calendar size={14} />
                  {item.date}
                </div>
                <h2 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h2>
                <p className="text-gray-600 leading-relaxed">{item.text}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
