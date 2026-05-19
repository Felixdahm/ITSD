import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { UserCircle, Phone, Mail } from "lucide-react";

const contacts = [
  {
    name: "Frank Schlinkheider",
    role: "Geschäftsführer",
    responsibility: "Ansprechpartner für HR-Produkte und Portale",
    phone: "+49 5722 288 99-0",
    email: "hr@itsd-consulting.de",
  },
  {
    name: "Sonja Riekenberg",
    role: "Assistenz der Geschäftsführung & Vertrieb",
    responsibility: "Vertriebsanfragen zu HR-Produkten, Web-Demos und Vor-Ort-Termine",
    phone: "+49 5722 288 99-0",
    email: "hr@itsd-consulting.de",
  },
  {
    name: "Ralf Ackermeier",
    role: "Server Operations & Support",
    responsibility: "Server-Betrieb und Koordination des Support nach Implementierung",
    phone: "+49 5722 288 99-0",
    email: "hr@itsd-consulting.de",
  },
];

export default function AnsprechpartnerPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16">
        <section className="bg-[#003f7f] text-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Ansprechpartner</h1>
            <p className="text-xl text-blue-100">Wir sind für Sie da</p>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {contacts.map((c) => (
                <div key={c.name} className="flex flex-col items-center text-center gap-4 p-8 rounded-lg border border-gray-100 hover:border-[#003f7f] transition-colors">
                  <UserCircle className="text-[#003f7f]" size={56} strokeWidth={1.5} />
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">{c.name}</h3>
                    <p className="text-[#003f7f] text-sm font-medium mt-1">{c.role}</p>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{c.responsibility}</p>
                  <div className="flex flex-col gap-2 mt-auto w-full">
                    <a
                      href={`tel:${c.phone.replace(/\s/g, "")}`}
                      className="flex items-center justify-center gap-2 text-sm text-gray-700 hover:text-[#003f7f] transition-colors"
                    >
                      <Phone size={14} />
                      {c.phone}
                    </a>
                    <a
                      href={`mailto:${c.email}`}
                      className="flex items-center justify-center gap-2 text-sm text-gray-700 hover:text-[#003f7f] transition-colors"
                    >
                      <Mail size={14} />
                      {c.email}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
