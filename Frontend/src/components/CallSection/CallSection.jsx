import RollText from "../animation/Rolltext";
import "./callSection.css";
const details = [
  "Free 30-minute strategy session",
  "No pressure or sales pitch",
  "Clear roadmap for your project",
];

export default function CallSection() {
  return (
    <section className="call-section" id="book-call">
      <div className="call-inner">
        <div>
          <h2 className="call-headline">
            Let's build a website that actually <em>drives revenue.</em>
          </h2>
          <div className="call-meta">
            {details.map((d) => (
              <div className="call-detail" key={d}>
                <RollText delay={0.01} duration={0.4} text={d}></RollText>
              </div>
            ))}
          </div>
        </div>
        <a href="#contact" className="call-btn">
          Book Your Free Call ↗
        </a>
      </div>
    </section>
  );
}
