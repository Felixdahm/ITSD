export default function Footer() {
  return (
    <footer className="bg-[#003f7f] text-white mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <p>© {new Date().getFullYear()} ITSD Consulting GmbH</p>
        <div className="flex gap-6">
          <a href="/impressum" className="hover:underline opacity-80">
            Impressum
          </a>
          <a href="/datenschutz" className="hover:underline opacity-80">
            Datenschutzerklärung
          </a>
          <a
            href="https://itsd-consulting.de"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline opacity-80"
          >
            itsd-consulting.de
          </a>
        </div>
      </div>
    </footer>
  );
}
