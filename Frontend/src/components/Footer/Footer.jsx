import "./footer.css";
import { Link } from "react-router-dom";

import RollText from "../animation/Rolltext";
import ScrambleText from "../animation/ScambleText";

const cols = [
  {
    title: "Services",
    links: [
      { name: "Websites", href: "/services/websites" },
      { name: "Web Apps", href: "/services/web-apps" },
      { name: "SaaS", href: "/services/saas" },
      { name: "E-commerce", href: "/services/ecommerce" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "/about" },
      { name: "Work", href: "/work" },
      { name: "Blog", href: "/blog" },
      { name: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Connect",
    links: [
      {
        name: "Instagram",
        href: "https://www.instagram.com/developera_/",
        external: true,
      },
      {
        name: "LinkedIn",
        href: "https://www.linkedin.com/company/developeraa/",
        external: true,
      },

      {
        name: "GitHub",
        href: "https://github.com/Develop-era-org",
        external: true,
      },
    ],
  },
];

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer-brand">
          <div className="logo">
            develop<span>Era</span>
          </div>

          <p>
            We build websites and digital products designed to help businesses
            grow, convert more customers, and stand out online.
          </p>
        </div>

        {cols.map(({ title, links }) => (
          <div key={title}>
            <div className="footer-col-title">{title}</div>

            <ul className="footer-links">
              {links.map((l) => (
                <li key={l.name}>
                  {l.external ? (
                    <a href={l.href} target="_blank" rel="noopener noreferrer">
                      <RollText delay={0.02} text={l.name} />
                    </a>
                  ) : (
                    <Link to={l.href}>
                      <RollText delay={0.01} text={l.name} />
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </footer>

      <div className="footer-bottom">
        <p>
          <ScrambleText text="© 2025 developEra. All rights reserved." />
        </p>

        <p>
          <ScrambleText text="Crafted with obsession ✦" />
        </p>
      </div>
    </>
  );
}
