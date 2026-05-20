import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function DatenschutzPage() {
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
              Datenschutzerklärung
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
                1. Datenschutz auf einen Blick
              </h2>
              <h3 className="font-bold mb-2" style={{ fontSize: "18px", color: "#08649A" }}>Allgemeine Hinweise</h3>
              <p className="mb-6">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
              </p>

              <h3 className="font-bold mb-2" style={{ fontSize: "18px", color: "#08649A" }}>Datenerfassung auf dieser Website</h3>
              <p className="mb-2"><strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong></p>
              <p className="mb-6">
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
              </p>
              <p className="mb-2"><strong>Wie erfassen wir Ihre Daten?</strong></p>
              <p className="mb-6">
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
              </p>
              <p className="mb-2"><strong>Wofür nutzen wir Ihre Daten?</strong></p>
              <p className="mb-6">
                Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
              </p>
              <p className="mb-2"><strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong></p>
              <p className="mb-10">
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
              </p>

              <h2
                className="font-bold mb-4"
                style={{ fontSize: "clamp(22px, 2.2vw, 28px)", color: "#08649A" }}
              >
                2. Verantwortlicher
              </h2>
              <p className="mb-10">
                ITSD Consulting GmbH<br />
                Blankensteinstraße 62<br />
                32257 Bünde<br /><br />
                Telefon: <a href="tel:+4952237933400" className="hover:underline">+49 5223 7933400</a><br />
                E-Mail: <a href="mailto:dev@itsd-consulting.de" className="hover:underline">dev@itsd-consulting.de</a>
              </p>

              <h2
                className="font-bold mb-4"
                style={{ fontSize: "clamp(22px, 2.2vw, 28px)", color: "#08649A" }}
              >
                3. Datenerfassung auf dieser Website
              </h2>
              <h3 className="font-bold mb-2" style={{ fontSize: "18px", color: "#08649A" }}>Server-Log-Dateien</h3>
              <p className="mb-6">
                Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind: Browsertyp und Browserversion, verwendetes Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners sowie Uhrzeit der Serveranfrage und IP-Adresse.
              </p>
              <p className="mb-10">
                Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website – hierzu müssen die Server-Log-Files erfasst werden.
              </p>

              <h3 className="font-bold mb-2" style={{ fontSize: "18px", color: "#08649A" }}>Kontaktformular</h3>
              <p className="mb-10">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
              </p>

              <h2
                className="font-bold mb-4"
                style={{ fontSize: "clamp(22px, 2.2vw, 28px)", color: "#08649A" }}
              >
                4. Ihre Rechte
              </h2>
              <p className="mb-4">Sie haben gemäß DSGVO folgende Rechte:</p>
              <ul className="list-disc pl-6 mb-10 space-y-2">
                <li>Auskunft über Ihre bei uns gespeicherten Daten (Art. 15 DSGVO)</li>
                <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
                <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
                <li>Einschränkung der Datenverarbeitung (Art. 18 DSGVO)</li>
                <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
                <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
                <li>Widerruf einer Einwilligung (Art. 7 Abs. 3 DSGVO)</li>
                <li>Beschwerderecht bei der zuständigen Aufsichtsbehörde (Art. 77 DSGVO)</li>
              </ul>

              <h2
                className="font-bold mb-4"
                style={{ fontSize: "clamp(22px, 2.2vw, 28px)", color: "#08649A" }}
              >
                5. Externe Dienste
              </h2>
              <h3 className="font-bold mb-2" style={{ fontSize: "18px", color: "#08649A" }}>Google Fonts</h3>
              <p>
                Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Google Fonts, die von Google bereitgestellt werden. Beim Aufruf einer Seite lädt Ihr Browser die benötigten Fonts in ihren Browsercache, um Texte und Schriftarten korrekt anzuzeigen. Zu diesem Zweck muss der von Ihnen verwendete Browser Verbindung zu den Servern von Google aufnehmen. Hierdurch erlangt Google Kenntnis darüber, dass über Ihre IP-Adresse diese Website aufgerufen wurde. Die Nutzung von Google Fonts erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an der einheitlichen Darstellung des Schriftbildes auf unserer Website. Wenn Ihr Browser Google Fonts nicht unterstützt, wird eine Standardschrift verwendet.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
