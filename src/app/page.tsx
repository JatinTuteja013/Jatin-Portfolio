"use client";

import { usePortfolio } from "@/context/PortfolioContext";
import PortfolioSelection from "@/pages/PortfolioSelection";
import Navbar from "@/pages/Navbar";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Projects from "@/pages/Projects";
import Contact from "@/pages/Contact";
import Footer from "@/pages/Footer";

export default function Page() {
  const { portfolioType } = usePortfolio();

  // Show selection page if no portfolio type is selected
  if (!portfolioType) {
    return (
      <main className="min-h-screen">
        <PortfolioSelection />
      </main>
    );
  }

  // Show portfolio content based on selection
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
