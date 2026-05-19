import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { LogIn } from "lucide-react";

export default function AnmeldenPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16">
        <section className="bg-[#003f7f] text-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Anmelden</h1>
            <p className="text-xl text-blue-100">Zugang zu Ihrem ITSD-Portal</p>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-md mx-auto">
            <div className="p-8 rounded-lg border border-gray-200 shadow-sm">
              <div className="flex justify-center mb-6">
                <div className="w-14 h-14 bg-[#e8f0fe] rounded-full flex items-center justify-center">
                  <LogIn className="text-[#003f7f]" size={28} />
                </div>
              </div>
              <h2 className="text-xl font-bold text-gray-900 text-center mb-6">Einloggen</h2>
              <form className="flex flex-col gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    E-Mail-Adresse
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#003f7f] focus:ring-1 focus:ring-[#003f7f]"
                    placeholder="ihre@email.de"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                    Passwort
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#003f7f] focus:ring-1 focus:ring-[#003f7f]"
                    placeholder="••••••••"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-2 bg-[#003f7f] text-white py-2.5 rounded hover:bg-[#0057b0] transition-colors font-medium text-sm"
                >
                  Anmelden
                </button>
              </form>
              <p className="text-center text-sm text-gray-500 mt-6">
                Kein Zugang?{" "}
                <Link href="/ansprechpartner" className="text-[#003f7f] hover:underline">
                  Kontakt aufnehmen
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
