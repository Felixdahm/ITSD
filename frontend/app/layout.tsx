import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ITSD Consulting – HR-Lösungen",
  description: "Ihr Partner in Sachen HR-Lösungen. Anpassbare HR-Software für mittelständische und große Unternehmen sowie kommunale Verwaltungen.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="h-full">
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
