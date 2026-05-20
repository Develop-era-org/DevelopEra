import ScrambleText from "../animation/ScambleText";
import "./services.css";

import { Globe, Layers3, Rocket } from "lucide-react";

const services = [
  {
    num: "01",
    icon: <Globe size={18} strokeWidth={1.7} />,
    name: "High-Converting Websites",
    desc: "Clean, modern websites designed to build trust, keep visitors engaged, and turn traffic into paying customers.",
    tags: ["Next.js", "Webflow", "CMS", "SEO"],
  },

  {
    num: "02",
    icon: <Layers3 size={18} strokeWidth={1.7} />,
    name: "Custom Web Applications",
    desc: "Fast, scalable web apps built around your workflow, helping your business automate processes and deliver a better user experience.",
    tags: ["React", "TypeScript", "Node.js", "APIs"],
  },

  {
    num: "03",
    icon: <Rocket size={18} strokeWidth={1.7} />,
    name: "SaaS Product Development",
    desc: "From MVP to full-scale SaaS platforms, we help founders launch products users actually enjoy using.",
    tags: ["Auth", "Payments", "Multi-tenant", "Analytics"],
  },
];
export default function Services() {
  return (
    <section className="services" id="services" data-nav-section="services">
      <div className="section-header">
        <div>
          <div className="section-num">
            {" "}
            <ScrambleText text="/ 01 — What We Do" />
          </div>
          <h2 className="section-title">
            Digital products built to <em>grow your business.</em>
          </h2>
        </div>
        <p
          style={{
            maxWidth: 300,
            fontFamily: "var(--font-sans)",
            fontSize: "0.9rem",
            color: "var(--muted)",
            lineHeight: 1.7,
          }}
        >
          We create websites, SaaS platforms, and web applications that are
          focused on performance, user experience, and measurable business
          growth.
        </p>
      </div>

      <div className="services-grid">
        {services.map(({ num, icon, name, desc, tags }) => (
          <div className="service-card fade-up" key={num}>
            <div className="service-number">{num}</div>
            <div className="service-icon">{icon}</div>
            <h3 className="service-name">{name}</h3>
            <p className="service-desc">{desc}</p>
            <div className="service-tags">
              {tags.map((t) => (
                <span className="tag" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
