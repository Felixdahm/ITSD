import { Mail, Phone, MapPin } from "lucide-react";

export default function Kontakt() {
  return (
    <section id="kontakt" className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-[#003f7f] text-center mb-4">
          Kontakt aufnehmen
        </h2>
        <p className="text-center text-gray-500 mb-12 text-sm">
          Sprechen Sie uns an – wir beraten Sie gerne zu den passenden HR-Lösungen.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="font-semibold text-gray-900 text-lg">ITSD Consulting GmbH</h3>
            <div className="space-y-4 text-sm text-gray-700">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#003f7f] mt-0.5 shrink-0" />
                <span>Deutschland</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-[#003f7f] shrink-0" />
                <a href="tel:" className="hover:text-[#003f7f]">
                  Telefonnummer auf Anfrage
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-[#003f7f] shrink-0" />
                <a
                  href="mailto:info@itsd-consulting.de"
                  className="hover:text-[#003f7f]"
                >
                  info@itsd-consulting.de
                </a>
              </div>
            </div>
          </div>

          <form
            action="mailto:info@itsd-consulting.de"
            method="post"
            encType="text/plain"
            className="space-y-4"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-[#003f7f]"
                placeholder="Ihr Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                E-Mail
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-[#003f7f]"
                placeholder="ihre@email.de"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nachricht
              </label>
              <textarea
                name="nachricht"
                required
                rows={4}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-[#003f7f] resize-none"
                placeholder="Wie können wir Ihnen helfen?"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#003f7f] text-white font-semibold py-3 rounded-lg hover:bg-[#0057b0] transition-colors text-sm"
            >
              Nachricht senden
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
