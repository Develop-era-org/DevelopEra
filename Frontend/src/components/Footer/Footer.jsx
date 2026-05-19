import "./footer.css";
import RollText from "../animation/Rolltext";
import ScrambleText from "../animation/ScambleText";
const cols = [
  {
    title: "Services",
    links: ["Websites", "Web Apps", "SaaS", "E-commerce"],
  },
  {
    title: "Company",
    links: ["About", "Work", "Blog", "Careers"],
  },
  {
    title: "Connect",
    links: ["Twitter / X", "LinkedIn", "Dribbble", "GitHub"],
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
                <li key={l}>
                  <a href="#">
                    <RollText text={l} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </footer>
      <div className="footer-bottom">
        <p>
          <ScrambleText text="© 2025  developEra. All rights reserved." />
        </p>

        <p>
          <ScrambleText text="Crafted with obsession ✦" />
        </p>
      </div>
    </>
  );
}
