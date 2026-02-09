import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import WorkFlow from "@/components/WorkFlow";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    /* We use 'bg-background' which is mapped to our CSS variable in globals.css */
    <main className="min-h-screen bg-background transition-colors duration-300">
      <Navbar />
      <Hero />
      <Services />
      <TechStack />
      <WorkFlow />
      <Contact />
      <Footer />
    </main>
  );
}