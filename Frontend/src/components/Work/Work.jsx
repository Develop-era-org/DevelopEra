import ScrambleText from "../animation/ScambleText";
import "./work.css";

import creativeAgency from "../../assets/images/creative agency.jpg";
import editorial from "../../assets/images/editorial.jpg";
import phone from "../../assets/images/phone.jpg";
import saasDashboard from "../../assets/images/saas dashboard.jpg";
import healthcareApp from "../../assets/images/healthcare app.jpg";
import ecom from "../../assets/images/ecom.jpg";

import {
  TrendingUp,
  Zap,
  Users,
  Clock3,
  Blocks,
  ShieldCheck,
  Rocket,
  Globe,
  DollarSign,
  Smartphone,
  Star,
  Trophy,
  Target,
  CreditCard,
  Languages,
  ShoppingBag,
} from "lucide-react";

const projects = [
  {
    id: "wc1",
    year: "2024",
    bg: ecom,
    title: "Meridian Commerce",
    type: "E-commerce Platform",

    stats: [
      {
        icon: <TrendingUp size={16} strokeWidth={1.8} />,
        label: "Revenue Lift",
        val: "+340% YoY",
      },

      {
        icon: <Zap size={16} strokeWidth={1.8} />,
        label: "Page Speed",
        val: "98 / 100",
      },

      {
        icon: <ShoppingBag size={16} strokeWidth={1.8} />,
        label: "Conversion Rate",
        val: "6.8% (↑ from 1.9%)",
      },
    ],
  },

  {
    id: "wc2",
    year: "2024",
    bg: saasDashboard,
    title: "Pillar Analytics",
    type: "SaaS Dashboard",

    stats: [
      {
        icon: <Users size={16} strokeWidth={1.8} />,
        label: "Users at Launch",
        val: "500 in 48 hours",
      },

      {
        icon: <Clock3 size={16} strokeWidth={1.8} />,
        label: "Delivered",
        val: "3 weeks early",
      },

      {
        icon: <Blocks size={16} strokeWidth={1.8} />,
        label: "Stack",
        val: "React + Postgres",
      },
    ],
  },

  {
    id: "wc3",
    year: "2023",
    bg: phone,
    title: "Verabank",
    type: "Fintech Web App",

    stats: [
      {
        icon: <ShieldCheck size={16} strokeWidth={1.8} />,
        label: "Security Grade",
        val: "SOC 2 Compliant",
      },

      {
        icon: <Rocket size={16} strokeWidth={1.8} />,
        label: "Onboarding Time",
        val: "Reduced 70%",
      },

      {
        icon: <Globe size={16} strokeWidth={1.8} />,
        label: "Markets",
        val: "12 countries",
      },
    ],
  },

  {
    id: "wc5",
    year: "2023",
    bg: healthcareApp,
    title: "Leafwell",
    type: "Health SaaS",

    stats: [
      {
        icon: <DollarSign size={16} strokeWidth={1.8} />,
        label: "MRR Growth",
        val: "$0 → $180K",
      },

      {
        icon: <Smartphone size={16} strokeWidth={1.8} />,
        label: "Platform",
        val: "Web + PWA",
      },

      {
        icon: <Star size={16} strokeWidth={1.8} />,
        label: "App Rating",
        val: "4.9 / 5.0",
      },
    ],
  },

  {
    id: "wc4",
    year: "2022",
    bg: creativeAgency,
    title: "Forma Studio",
    type: "Creative Agency Site",

    stats: [
      {
        icon: <Trophy size={16} strokeWidth={1.8} />,
        label: "Award",
        val: "Awwwards SOTD",
      },

      {
        icon: <TrendingUp size={16} strokeWidth={1.8} />,
        label: "Leads Increase",
        val: "+520%",
      },

      {
        icon: <Target size={16} strokeWidth={1.8} />,
        label: "Bounce Rate",
        val: "↓ 48%",
      },
    ],
  },

  {
    id: "wc6",
    year: "2022",
    bg: editorial,
    title: "Wander",
    type: "Travel Platform",

    stats: [
      {
        icon: <Users size={16} strokeWidth={1.8} />,
        label: "Active Users",
        val: "50K+",
      },

      {
        icon: <CreditCard size={16} strokeWidth={1.8} />,
        label: "Payments",
        val: "Stripe + 8 methods",
      },

      {
        icon: <Languages size={16} strokeWidth={1.8} />,
        label: "Languages",
        val: "14 locales",
      },
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
            fontFamily: "var(--font-sans)",
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
            <div className="proj-card-bg">
              <img src={bg} alt={title} className="proj-bg-image" />
            </div>
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
