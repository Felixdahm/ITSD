import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import Themen from "@/components/sections/Themen";
import Produkte from "@/components/sections/Produkte";
import Vorteile from "@/components/sections/Vorteile";
import Kontakt from "@/components/sections/Kontakt";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Themen />
        <Produkte />
        <Vorteile />
        <Kontakt />
      </main>
      <Footer />
    </>
  );
}
