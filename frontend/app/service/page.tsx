import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Code2, Network, GraduationCap, Headphones } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Individualisierung & Entwicklung",
    text: "Wir spezifizieren gemeinsam mit Ihnen den Bedarf und erstellen Ihre maßgeschneiderte Lösung zum Festpreis.",
  },
  {
    icon: Network,
    title: "Systemintegration",
    text: "Integration bestehender Schnittstellen in IT-Landschaften – von einfachen CSV-Schnittstellen bis zu vollständiger SSO-Integration in bestehende Portalsysteme.",
  },
  {
    icon: GraduationCap,
    title: "Implementierungsbegleitung",
    text: "Schulungen und intensive Begleitung in der Einführungsphase – hohe Benutzerakzeptanz als entscheidender Erfolgsfaktor.",
  },
  {
    icon: Headphones,
    title: "Betrieb & Wartung",
    text: "Betrieb, Wartung und Weiterentwicklung nach Go-Live – individuelle Service Level Agreements, Support per Ticketsystem oder Telefon.",
  },
];

export default function ServicePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16">
        <section className="bg-[#003f7f] text-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Service</h1>
            <p className="text-xl text-blue-100">Ihr Partner von der Analyse bis zum laufenden Betrieb</p>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((s) => (
                <div key={s.title} className="flex flex-col gap-4 p-8 rounded-lg border border-gray-100 hover:border-[#003f7f] transition-colors">
                  <div className="w-12 h-12 bg-[#e8f0fe] rounded-lg flex items-center justify-center">
                    <s.icon className="text-[#003f7f]" size={24} />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-lg">{s.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-600 mb-1">
              Ansprechpartner: <strong>Ralf Ackermeier</strong>
            </p>
            <p className="text-gray-600 mb-4">
              +49 5722 288 99-0
              {" · "}
              <a href="mailto:hr@itsd-consulting.de" className="hover:text-[#003f7f]">hr@itsd-consulting.de</a>
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
