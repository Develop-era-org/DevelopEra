import "./stats.css";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 120, suffix: "+", label: "Projects Successfully Delivered" },
  { value: 8, suffix: "yrs", label: "Building Digital Products" },
  { value: 47, suffix: "+", label: "Long-Term Clients" },
  { value: 3, suffix: "×", label: "Average Conversion Growth" },
];

function CountUp({ end, duration = 1800 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;

        started.current = true;

        let start = 0;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
          start += increment;

          if (start >= end) {
            setCount(end);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);
      },
      { threshold: 0.5 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function Stats() {
  return (
    <div className="stats-strip">
      {stats.map(({ value, suffix, label }) => (
        <div className="stat-item" key={label}>
          <div className="stat-glow"></div>

          <div className="stat-num">
            <CountUp end={value} />
            <span>{suffix}</span>
          </div>

          <div className="stat-label">{label}</div>
        </div>
      ))}
    </div>
  );
}
