import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Calendar, MapPin, Cpu, Briefcase, Heart, Users } from "lucide-react";

const facts = [
  {
    icon: Calendar,
    title: "Gegründet 2000",
    text: "Seit über zwei Jahrzehnten Ihr verlässlicher IT-Partner in Deutschland.",
  },
  {
    icon: MapPin,
    title: "Zwei Standorte",
    text: "Hauptsitz in Bückeburg sowie ein weiterer Standort in Bünde – nah bei Ihnen.",
  },
  {
    icon: Cpu,
    title: "Kernkompetenzen",
    text: "Webbasierte Unternehmensportale, Application Lifecycle Management und IT-Projektmanagement.",
  },
  {
    icon: Briefcase,
    title: "Geschäftsbereiche",
    text: "IT-Consulting, HR-Lösungen, Portale und Business Process Management aus einer Hand.",
  },
  {
    icon: Heart,
    title: "Unsere Philosophie",
    text: "Keine großen internen Hierarchien – vertrauliche und nachhaltig enge Zusammenarbeit mit unseren Kunden. Sonderwünsche setzen wir schnell und effizient um.",
  },
  {
    icon: Users,
    title: "Unsere Kunden",
    text: "Renommierte Unternehmen aus dem ganzen Bundesgebiet vertrauen auf unsere Lösungen.",
  },
];

export default function UnternehmenPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16">
        <section className="bg-[#003f7f] text-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Unternehmen</h1>
            <p className="text-xl text-blue-100">Ihr IT-Partner seit 2000</p>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {facts.map((f) => (
                <div key={f.title} className="flex flex-col gap-3 p-6 rounded-lg border border-gray-100 hover:border-[#003f7f] transition-colors">
                  <f.icon className="text-[#003f7f]" size={28} />
                  <h3 className="font-semibold text-gray-900">{f.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Lernen Sie uns kennen</h2>
            <p className="text-gray-600 mb-6">
              Sprechen Sie uns an – wir freuen uns auf ein unverbindliches Gespräch.
            </p>
            <Link
              href="/ansprechpartner"
              className="inline-block bg-[#003f7f] text-white px-6 py-3 rounded hover:bg-[#0057b0] transition-colors font-medium"
            >
              Zu den Ansprechpartnern
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
