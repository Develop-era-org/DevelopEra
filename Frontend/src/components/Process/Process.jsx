import ScrambleText from "../animation/ScambleText";
import "./process.css";
import { Search, PencilRuler, Code2, ArrowUpRight } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: <Search size={18} strokeWidth={1.7} />,
    name: "Discover",
    duration: "~1 week",
    desc: "We align on goals, audience, and positioning before any design decisions are made.",
  },
  {
    num: "02",
    icon: <PencilRuler size={18} strokeWidth={1.7} />,
    name: "Design",
    duration: "~2 weeks",
    desc: "Interfaces are designed with clarity, structure, and user experience at the center.",
  },
  {
    num: "03",
    icon: <Code2 size={18} strokeWidth={1.7} />,
    name: "Build",
    duration: "~4–8 weeks",
    desc: "Development focuses on performance, scalability, and polished interactions.",
  },
  {
    num: "04",
    icon: <ArrowUpRight size={18} strokeWidth={1.7} />,
    name: "Launch",
    duration: "Ongoing",
    desc: "After launch, we refine and optimize based on real user behavior and growth.",
  },
];

export default function Process() {
  return (
    <section className="process" id="process" data-nav-section="process">
      <div className="section-header">
        <div>
          <div className="section-num">
            <ScrambleText text="/ 02 — How We Work" />
          </div>
          <h2 className="section-title">
            A simple process built around <em>results.</em>
          </h2>
        </div>
      </div>
      <div className="process-cards">
        {steps.map(({ num, icon, name, duration, desc }) => (
          <div className="proc-card fade-up" key={num}>
            <span className="proc-num">{num}</span>
            <div className="proc-icon">{icon}</div>
            <div className="proc-name">{name}</div>
            <p className="proc-desc">{desc}</p>
            <div className="proc-pill">{duration}</div>
            <div className="proc-card-line"></div>
            <div className="proc-connector"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
