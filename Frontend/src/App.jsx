import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
// Single stylesheet — all CSS merged to avoid cross-file @keyframes issues
// import "./styles/index.css";

// Components
import Cursor from "./components/Cursor/Cursor";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Stats from "./components/Stats/Stats";
import Services from "./components/Services/Services";
import Work from "./components/Work/Work";
import Process from "./components/Process/Process";
import Testimonials from "./components/Testimonials/Testimonials";
import CallSection from "./components/CallSection/CallSection";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Intro from "./components/Intro/Intro";
import Marquee from "./components/Marquee/Marquee";
import SmoothScroll from "./components/SmoothScroll";

export default function App() {
  // Fade-up scroll observer (runs once after mount)
  useEffect(() => {
    const fadeEls = document.querySelectorAll(".fade-up");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.08 },
    );
    fadeEls.forEach((el) => {
      el.classList.remove("visible");
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <BrowserRouter>
        <SmoothScroll>
          {/* Home page */}
          <Intro />
          <Cursor />
          <Navbar />
          <Hero />
          <Marquee />

          <Stats />
          <Services />
          <Work />
          <Process />
          <Testimonials />
          <CallSection />
          <Contact />
          <Footer />
        </SmoothScroll>
      </BrowserRouter>
    </>
  );
}
