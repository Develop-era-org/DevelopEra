import ScrambleText from "../animation/ScambleText";
import "./work.css";
const projects = [
  {
    id: "wc1",
    year: "2024",
    bg: "🛒",
    title: "Meridian Commerce",
    type: "E-commerce Platform",
    stats: [
      { icon: "📈", label: "Revenue Lift", val: "+340% YoY" },
      { icon: "⚡", label: "Page Speed", val: "98 / 100" },
      { icon: "🛒", label: "Conversion Rate", val: "6.8% (↑ from 1.9%)" },
    ],
  },
  {
    id: "wc2",
    year: "2024",
    bg: "📊",
    title: "Pillar Analytics",
    type: "SaaS Dashboard",
    stats: [
      { icon: "👥", label: "Users at Launch", val: "500 in 48 hours" },
      { icon: "⏱️", label: "Delivered", val: "3 weeks early" },
      { icon: "🏗️", label: "Stack", val: "React + Postgres" },
    ],
  },
  {
    id: "wc3",
    year: "2023",
    bg: "🏦",
    title: "Verabank",
    type: "Fintech Web App",
    stats: [
      { icon: "🔐", label: "Security Grade", val: "SOC 2 Compliant" },
      { icon: "🚀", label: "Onboarding Time", val: "Reduced 70%" },
      { icon: "🌍", label: "Markets", val: "12 countries" },
    ],
  },
  {
    id: "wc5",
    year: "2023",
    bg: "🌿",
    title: "Leafwell",
    type: "Health SaaS",
    stats: [
      { icon: "💰", label: "MRR Growth", val: "$0 → $180K" },
      { icon: "📱", label: "Platform", val: "Web + PWA" },
      { icon: "⭐", label: "App Rating", val: "4.9 / 5.0" },
    ],
  },
  {
    id: "wc4",
    year: "2022",
    bg: "🎨",
    title: "Forma Studio",
    type: "Creative Agency Site",
    stats: [
      { icon: "🏆", label: "Award", val: "Awwwards SOTD" },
      { icon: "📈", label: "Leads Increase", val: "+520%" },
      { icon: "🎯", label: "Bounce Rate", val: "↓ 48%" },
    ],
  },
  {
    id: "wc6",
    year: "2022",
    bg: "✈️",
    title: "Wander",
    type: "Travel Platform",
    stats: [
      { icon: "👤", label: "Active Users", val: "50K+" },
      { icon: "💳", label: "Payments", val: "Stripe + 8 methods" },
      { icon: "🌐", label: "Languages", val: "14 locales" },
    ],
  },
];

export default function Work() {
  return (
    <section className="work-section" id="work" data-nav-section="work">
      <div className="work-section-header">
        <div>
          <div className="section-num">
            <ScrambleText text="/ Selected Work — 2022–2025 " />
          </div>
          <h2 className="section-title">Proof</h2>
        </div>
        <p
          style={{
            maxWidth: 280,
            fontFamily: '"Syne", sans-serif',
            fontSize: "0.9rem",
            color: "var(--muted)",
            lineHeight: 1.7,
          }}
        >
          Hover any project to see key results and details.
        </p>
      </div>

      <div className="work-grid">
        {projects.map(({ id, year, bg, title, type, stats }) => (
          <div className={`proj-card ${id} fade-up`} key={id}>
            <div className="proj-year">{year}</div>
            <div className="proj-card-bg">{bg}</div>
            <div className="proj-hover-overlay">
              <div className="proj-hover-title">{title}</div>
              <div className="proj-mini-cards">
                {stats.map(({ icon, label, val }) => (
                  <div className="proj-mini-card" key={label}>
                    <div className="pmc-icon">{icon}</div>
                    <div>
                      <div className="pmc-label">{label}</div>
                      <div className="pmc-val">{val}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="proj-hover-cta">Read case study ↗</div>
            </div>
            <div className="proj-meta">
              <div className="proj-name">{title}</div>
              <div className="proj-type">{type}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
