import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import Leistungen from "@/components/sections/Leistungen";
import Features from "@/components/sections/Features";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Leistungen />
        <Features />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
