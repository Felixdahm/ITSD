import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import Leistungen from "@/components/sections/Leistungen";
import Features from "@/components/sections/Features";
import Vorteile from "@/components/sections/Vorteile";
import Testimonials from "@/components/sections/Testimonials";
import Kontakt from "@/components/sections/Kontakt";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Leistungen />
        <Features />
        <Vorteile />
        <Testimonials />
        <Kontakt />
      </main>
      <Footer />
    </>
  );
}
