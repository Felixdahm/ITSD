import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ImpressumPage() {
  return (
    <>
      <Navbar />
      <main>
        <div style={{ backgroundColor: "#08649A", paddingTop: "70px" }}>
          <div className="max-w-[1420px] mx-auto px-6 py-16">
            <h1
              className="font-bold text-white"
              style={{
                fontFamily: "'Open Sans Condensed', sans-serif",
                fontSize: "clamp(36px, 4vw, 56px)",
                lineHeight: "1.1",
              }}
            >
              Impressum
            </h1>
          </div>
        </div>

        <section className="py-20 px-6 bg-white">
          <div className="max-w-[800px] mx-auto">
            <div
              style={{
                fontFamily: "'Open Sans Condensed', sans-serif",
                fontSize: "clamp(16px, 1.6vw, 20px)",
                lineHeight: "1.8",
                color: "#000",
              }}
            >
              <h2
                className="font-bold mb-4"
                style={{ fontSize: "clamp(22px, 2.2vw, 28px)", color: "#08649A" }}
              >
                Angaben gemäß § 5 TMG
              </h2>
              <p className="mb-8">
                ITSD Consulting GmbH<br />
                Blankensteinstraße 62<br />
                32257 Bünde
              </p>

              <h2
                className="font-bold mb-4"
                style={{ fontSize: "clamp(22px, 2.2vw, 28px)", color: "#08649A" }}
              >
                Kontakt
              </h2>
              <p className="mb-8">
                Telefon: <a href="tel:+4952237933400" className="hover:underline">+49 5223 7933400</a><br />
                E-Mail: <a href="mailto:dev@itsd-consulting.de" className="hover:underline">dev@itsd-consulting.de</a>
              </p>

              <h2
                className="font-bold mb-4"
                style={{ fontSize: "clamp(22px, 2.2vw, 28px)", color: "#08649A" }}
              >
                Vertreten durch
              </h2>
              <p className="mb-8">
                Geschäftsführer: Tino Schulz
              </p>

              <h2
                className="font-bold mb-4"
                style={{ fontSize: "clamp(22px, 2.2vw, 28px)", color: "#08649A" }}
              >
                Registereintrag
              </h2>
              <p className="mb-8">
                Eingetragen im Handelsregister.<br />
                Registergericht: Amtsgericht Bielefeld<br />
                Registernummer: HRB 41684
              </p>

              <h2
                className="font-bold mb-4"
                style={{ fontSize: "clamp(22px, 2.2vw, 28px)", color: "#08649A" }}
              >
                Umsatzsteuer-ID
              </h2>
              <p className="mb-8">
                Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br />
                DE 298 646 046
              </p>

              <h2
                className="font-bold mb-4"
                style={{ fontSize: "clamp(22px, 2.2vw, 28px)", color: "#08649A" }}
              >
                Haftung für Inhalte
              </h2>
              <p className="mb-8">
                Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
              </p>

              <h2
                className="font-bold mb-4"
                style={{ fontSize: "clamp(22px, 2.2vw, 28px)", color: "#08649A" }}
              >
                Haftung für Links
              </h2>
              <p className="mb-8">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
              </p>

              <h2
                className="font-bold mb-4"
                style={{ fontSize: "clamp(22px, 2.2vw, 28px)", color: "#08649A" }}
              >
                Urheberrecht
              </h2>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
