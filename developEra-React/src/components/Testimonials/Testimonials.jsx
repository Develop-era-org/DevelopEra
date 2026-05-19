import ScrambleText from "../animation/ScambleText";
import "./testimonials.css";
const testimonials = [
  {
    featured: true,
    text: "\"developEra didn't just build our SaaS — they fundamentally understood what we were trying to do and made it better. The product launched 3 weeks early and our first 500 users signed up in 48 hours. They're the only agency I'd ever use again.\"",
    avatar: "AK",
    name: "Arjun Kapoor",
    role: "CEO, Pillar Analytics",
  },
  {
    featured: false,
    text: "\"Our conversion rate went from 1.8% to 6.4% after they rebuilt our landing page. That's not design — that's wizardry.\"",
    avatar: "SR",
    name: "Sana Raza",
    role: "Head of Growth, Leafwell",
    authorStyle: {
      borderTop: "1px solid var(--border)",
      paddingTop: "1rem",
      marginTop: "1.5rem",
    },
    textStyle: {
      fontFamily: '"Instrument Serif", serif',
      fontSize: "1.05rem",
      lineHeight: 1.6,
    },
  },
  {
    featured: false,
    text: "\"They challenged our brief, proposed a better solution, and delivered something we couldn't have imagined ourselves. That's rare.\"",
    avatar: "MT",
    name: "Marcus T.",
    role: "Founder, Wander",
    authorStyle: {
      borderTop: "1px solid var(--border)",
      paddingTop: "1rem",
      marginTop: "1.5rem",
    },
    textStyle: {
      fontFamily: '"Instrument Serif", serif',
      fontSize: "1.05rem",
      lineHeight: 1.6,
    },
  },
];

export default function Testimonials() {
  const [featured, ...rest] = testimonials;
  return (
    <section className="testimonials">
      <div className="section-header">
        <div>
          <div className="section-num">
            <ScrambleText text="/ 03 — What Clients Say" />
          </div>
          <h2 className="section-title fade-up">
            <span className="underline-accent">Trusted by founders </span> and
            growing <em>brands.</em>
          </h2>
        </div>
      </div>

      <div className="testimonial-grid">
        {/* Featured */}
        <div className="testimonial-card featured fade-up">
          <div className="stars">★★★★★</div>
          <p className="testimonial-text">{featured.text}</p>
          <div className="testimonial-author">
            <div className="testimonial-avatar">{featured.avatar}</div>
            <div>
              <div className="testimonial-name">{featured.name}</div>
              <div className="testimonial-role">{featured.role}</div>
            </div>
          </div>
        </div>

        {/* Rest stacked */}
        <div
          style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
        >
          {rest.map(({ text, avatar, name, role, authorStyle, textStyle }) => (
            <div className="testimonial-card fade-up" key={name}>
              <div className="stars">★★★★★</div>
              <p className="testimonial-text" style={textStyle}>
                {text}
              </p>
              <div className="testimonial-author" style={authorStyle}>
                <div className="testimonial-avatar">{avatar}</div>
                <div>
                  <div className="testimonial-name">{name}</div>
                  <div className="testimonial-role">{role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
