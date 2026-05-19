import { Mail, Phone, MapPin } from "lucide-react";

export default function Kontakt() {
  return (
    <section id="kontakt" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-[#006098] uppercase tracking-widest mb-3">
            Sprechen Sie uns an
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#3d4452]">
            Ihr Projekt besprechen
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm">
            Wir beraten Sie gerne zu Ihrer individuellen Softwarelösung – von der ersten Idee bis zur Umsetzung.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="font-bold text-[#3d4452] text-lg mb-5">ITSD Softwareentwicklung</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3 text-sm text-gray-600">
                  <MapPin size={18} className="text-[#006098] mt-0.5 shrink-0" />
                  <span>Blankensteinstraße 62, 32257 Bünde</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Phone size={18} className="text-[#006098] shrink-0" />
                  <a href="tel:+4952237933400" className="hover:text-[#006098] transition-colors">
                    +49 5223 7933400
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Mail size={18} className="text-[#006098] shrink-0" />
                  <a href="mailto:dev@itsd-consulting.de" className="hover:text-[#006098] transition-colors">
                    dev@itsd-consulting.de
                  </a>
                </div>
              </div>
            </div>
          </div>

          <form
            action="mailto:dev@itsd-consulting.de"
            method="post"
            encType="text/plain"
            className="space-y-4"
          >
            <div>
              <label className="block text-sm font-medium text-[#3d4452] mb-1.5">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#006098] focus:ring-1 focus:ring-[#006098] transition-colors"
                placeholder="Ihr Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#3d4452] mb-1.5">E-Mail</label>
              <input
                type="email"
                name="email"
                required
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#006098] focus:ring-1 focus:ring-[#006098] transition-colors"
                placeholder="ihre@email.de"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#3d4452] mb-1.5">Projekt / Nachricht</label>
              <textarea
                name="nachricht"
                required
                rows={4}
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#006098] focus:ring-1 focus:ring-[#006098] transition-colors resize-none"
                placeholder="Beschreiben Sie kurz Ihr Vorhaben..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#006098] text-white font-semibold py-3 rounded-lg hover:bg-[#004d7a] transition-colors text-sm"
            >
              Nachricht senden
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
