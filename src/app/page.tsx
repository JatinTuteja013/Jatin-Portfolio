import Navbar from "@/pages/Navbar";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Projects from "@/pages/Projects";
import Contact from "@/pages/Contact";
import Footer from "@/pages/Footer";

export default function Page() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
