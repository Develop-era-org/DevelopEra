import ScrambleText from "../animation/ScambleText";
import "./process.css";
const steps = [
  {
    num: "01",
    icon: "🔍",
    name: "Discover",
    duration: "~1 week",
    desc: "We learn about your business, customers, and goals so every decision is backed by strategy — not guesswork.",
  },
  {
    num: "02",
    icon: "🎨",
    name: "Design",
    duration: "~2 weeks",
    desc: "We design clean, modern interfaces focused on clarity, trust, and conversions before development begins.",
  },
  {
    num: "03",
    icon: "⚙️",
    name: "Build",
    duration: "~4–8 weeks",
    desc: "Your project is developed using modern technologies for speed, responsiveness, and long-term scalability.",
  },
  {
    num: "04",
    icon: "🚀",
    name: "Launch & Grow",
    duration: "Ongoing",
    desc: "After launch, we continue optimizing performance and user experience to help your business grow consistently.",
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
