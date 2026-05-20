import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ITSD Softwareentwicklung – Individuelle Software für Konzerne",
  description: "Software von der Idee ab entwickelt. Profis mit über 20 Jahren Erfahrung in individueller Softwareentwicklung, Betreuung und HR.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="h-full" data-scroll-behavior="smooth">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
