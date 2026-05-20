import { useState, useEffect, useRef } from "react";
import "./navbar.css";
import ScrambleText from "../animation/ScambleText";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const navRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen((prev) => {
      document.body.style.overflow = !prev ? "hidden" : "";
      return !prev;
    });
  };
  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = "";
  };

  // Smooth scroll
  const scrollTo = (e, id) => {
    e.preventDefault();
    closeMenu();
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Active section via IntersectionObserver
  useEffect(() => {
    const sections = document.querySelectorAll("[data-nav-section]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sec = entry.target.dataset.navSection;
            setActiveSection(sec);
            setExpanded(sec !== "hero");
          }
        });
      },
      { threshold: 0.4 },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const links = [
    { label: "Services", href: "#services", section: "services" },
    { label: "Work", href: "#work", section: "work" },
    { label: "Process", href: "#process", section: "process" },
    { label: "Contact", href: "#contact", section: "contact" },
  ];

  return (
    <>
      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {links.slice(0, 3).map(({ label, href, section }) => (
          <a
            key={section}
            href={href}
            data-section={section}
            className={activeSection === section ? "active" : ""}
            onClick={(e) => scrollTo(e, href)}
          >
            {label}
          </a>
        ))}
        <a
          href="#contact"
          className="mob-cta"
          onClick={(e) => scrollTo(e, "#contact")}
        >
          Book a Free Strategy Call ↗
        </a>
      </div>

      {/* Dynamic Island Nav */}
      <nav className={`di-nav-wrap ${expanded ? "expanded" : ""}`} ref={navRef}>
        <a href="#" className="nav-logo" onClick={(e) => scrollTo(e, "#hero")}>
          develop<span>Era</span>
        </a>

        <ul className="di-links">
          {links.map(({ label, href, section }) => (
            <li key={section}>
              <a
                href={href}
                data-section={section}
                className={activeSection === section ? "active" : ""}
                onClick={(e) => scrollTo(e, href)}
              >
                <ScrambleText text={label}></ScrambleText>
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="di-cta"
          onClick={(e) => scrollTo(e, "#contact")}
        >
          Book a Call
        </a>

        <button
          className={`di-hamburger ${menuOpen ? "open" : ""}`}
          aria-label="Open menu"
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </>
  );
}
