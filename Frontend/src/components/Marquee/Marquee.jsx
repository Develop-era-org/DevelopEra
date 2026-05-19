import ScrambleText from "../animation/ScambleText";
import "../Hero/hero.css";
const marqueeItems = [
  "Websites",
  "Web Applications",
  "SaaS Platforms",
  "E-commerce",
  "Design Systems",
  "Digital Strategy",
];
const Marquee = () => {
  return (
    <div className="hero-marquee-wrap">
      <div className="hero-marquee">
        {[...marqueeItems, ...marqueeItems].map((item, i) => (
          <span key={i}>
            <ScrambleText text={item}></ScrambleText>
            {i < marqueeItems.length * 2 - 1 && <span className="dot"> ●</span>}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
