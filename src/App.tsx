import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { ToastProvider } from "@/components/Toast";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Showreel } from "@/components/Showreel";
import { Activity } from "@/components/Activity";
import { Skills } from "@/components/Skills";
import { Credentials } from "@/components/Credentials";
import { Journey } from "@/components/Journey";
import { Contact, Footer } from "@/components/Contact";
import { CaseStudyDovira } from "@/components/CaseStudyDovira";

function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        const t = window.setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 50);
        return () => window.clearTimeout(t);
      }
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

function Home() {
  return (
    <main id="top">
      <Hero />
      <Marquee />
      <About />
      <Projects />
      <Showreel />
      <Activity />
      <Skills />
      <Credentials />
      <Journey />
      <Contact />
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ToastProvider>
        <div className="ambient" aria-hidden="true" />
        <div className="gridlines" aria-hidden="true" />
        <ScrollManager />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/case-study-dovira" element={<CaseStudyDovira />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </ToastProvider>
    </BrowserRouter>
  );
}
