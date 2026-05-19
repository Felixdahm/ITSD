import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Phone, Printer, Mail } from "lucide-react";

const locations = [
  {
    label: "Bückeburg (Hauptsitz)",
    street: "Herminenstr. 24",
    city: "31675 Bückeburg",
    phone: "+49 5722 288 99-0",
    fax: "+49 5722 288 99-99",
    email: "info@itsd-consulting.de",
  },
  {
    label: "Bünde",
    street: "Blankensteinstr. 62",
    city: "32257 Bünde",
    phone: "+49 5223 793 34 00",
    fax: "+49 5223 793 34 32",
    email: "info@itsd-consulting.de",
  },
];

export default function AnfahrtPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16">
        <section className="bg-[#003f7f] text-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Anfahrt</h1>
            <p className="text-xl text-blue-100">So finden Sie uns</p>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {locations.map((loc) => (
                <div key={loc.label} className="p-8 rounded-lg border border-gray-100 hover:border-[#003f7f] transition-colors">
                  <div className="flex items-center gap-3 mb-6">
                    <MapPin className="text-[#003f7f] shrink-0" size={24} />
                    <h2 className="font-bold text-gray-900 text-xl">{loc.label}</h2>
                  </div>
                  <address className="not-italic mb-6">
                    <p className="text-gray-700">{loc.street}</p>
                    <p className="text-gray-700">{loc.city}</p>
                  </address>
                  <div className="flex flex-col gap-3">
                    <a
                      href={`tel:${loc.phone.replace(/\s/g, "")}`}
                      className="flex items-center gap-3 text-sm text-gray-700 hover:text-[#003f7f] transition-colors"
                    >
                      <Phone size={16} className="text-[#003f7f] shrink-0" />
                      {loc.phone}
                    </a>
                    <div className="flex items-center gap-3 text-sm text-gray-700">
                      <Printer size={16} className="text-[#003f7f] shrink-0" />
                      {loc.fax}
                    </div>
                    <a
                      href={`mailto:${loc.email}`}
                      className="flex items-center gap-3 text-sm text-gray-700 hover:text-[#003f7f] transition-colors"
                    >
                      <Mail size={16} className="text-[#003f7f] shrink-0" />
                      {loc.email}
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
