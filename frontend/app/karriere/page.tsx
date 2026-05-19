import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Briefcase, Heart, Users, MapPin } from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Flache Hierarchien",
    text: "Keine großen internen Hierarchien – kurze Entscheidungswege und direktes Feedback.",
  },
  {
    icon: Users,
    title: "Starkes Team",
    text: "Arbeiten Sie mit erfahrenen Kolleginnen und Kollegen in einem vertrauensvollen Umfeld.",
  },
  {
    icon: Briefcase,
    title: "Spannende Projekte",
    text: "Anspruchsvolle HR-IT-Projekte für renommierte Unternehmen aus dem ganzen Bundesgebiet.",
  },
  {
    icon: MapPin,
    title: "Zwei Standorte",
    text: "Hauptsitz in Bückeburg und weiterer Standort in Bünde – in der Region verwurzelt.",
  },
];

export default function KarrierePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16">
        <section className="bg-[#003f7f] text-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Karriere</h1>
            <p className="text-xl text-blue-100">Wachsen Sie mit uns</p>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-600 text-lg leading-relaxed mb-12 text-center">
              Bei ITSD Consulting erwarten Sie abwechslungsreiche Aufgaben, ein kollegiales Arbeitsumfeld
              und die Möglichkeit, echten Mehrwert für unsere Kunden zu schaffen.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((b) => (
                <div key={b.title} className="flex flex-col gap-3 p-6 rounded-lg border border-gray-100 hover:border-[#003f7f] transition-colors">
                  <b.icon className="text-[#003f7f]" size={28} />
                  <h3 className="font-semibold text-gray-900">{b.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{b.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Interesse geweckt?</h2>
            <p className="text-gray-600 mb-6">
              Schicken Sie uns Ihre Bewerbung oder sprechen Sie uns direkt an.
            </p>
            <Link
              href="/ansprechpartner"
              className="inline-block bg-[#003f7f] text-white px-6 py-3 rounded hover:bg-[#0057b0] transition-colors font-medium"
            >
              Jetzt Kontakt aufnehmen
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
