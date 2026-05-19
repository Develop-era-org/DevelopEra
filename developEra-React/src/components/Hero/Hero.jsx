import { useEffect, useRef, useState } from "react";
import "./hero.css";
import RollText from "../animation/Rolltext";

import FluidCanvas from "../FluidCanvas";

export default function Hero() {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;

    const handleMove = (e) => {
      const rect = canvas.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const rotateY = (x / rect.width - 0.5) * 18;
      const rotateX = (y / rect.height - 0.5) * -18;
      canvas.style.setProperty("--x", `${x}px`);
      canvas.style.setProperty("--y", `${y}px`);
      canvas.style.transform = `
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale3d(1.02,1.02,1.02)
    `;
    };

    const reset = () => {
      canvas.style.transform = `
      rotateX(0deg)
      rotateY(0deg)
      scale3d(1,1,1)
    `;
    };

    canvas.addEventListener("mousemove", handleMove);
    canvas.addEventListener("mouseleave", reset);

    return () => {
      canvas.removeEventListener("mousemove", handleMove);
      canvas.removeEventListener("mouseleave", reset);
    };
  }, []);
  // Counter animation
  useEffect(() => {
    const target = 120;
    const dur = 1800;
    let v = 0;
    const step = target / (dur / 16);
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        v = Math.min(v + step, target);
        setCount(Math.floor(v));
        if (v >= target) clearInterval(interval);
      }, 16);
    }, 600);
    return () => clearTimeout(timer);
  }, []);
  const canvasRef = useRef(null);
  return (
    <section className="hero" id="hero" data-nav-section="hero">
      <div className="hero-noise"></div>

      {/* Marquee */}

      {/* Body */}
      <div className="hero-body">
        {/* Left */}
        <div className="hero-left fade-up visible">
          <div className="hero-tag">
            <RollText
              text="Now booking projects for 2026"
              delay={0.02}
              duration={0.3}
            />
          </div>
          <h1 className="hero-headline fade-up">
            Websites that
            <br />
            don't just look
            <br />
            good —
            <br />
            <span className="underline-accent">they</span>{" "}
            <em>bring in customers.</em>
          </h1>
          <p className="hero-sub">
            developEra helps startups, brands, and growing businesses build
            fast, modern websites and web apps designed to increase conversions,
            generate leads, and scale with confidence.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn-primary">
              Book a Free Strategy Call<span className="arrow">↗</span>
            </a>
            <a href="#work" className="btn-ghost">
              <span className="play-icon">▶</span>See Real Results
            </a>
          </div>
        </div>

        {/* Right */}

        <div className="hero-right">
          <div className="hero-canvas" ref={canvasRef}>
            <FluidCanvas></FluidCanvas>
            <div className="hero-canvas-inner">
              <div className="orbit-ring"></div>
              <div className="orbit-ring"></div>
              <div className="orbit-ring"></div>
              <div className="center-globe">
                <svg
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="24"
                    cy="24"
                    r="18"
                    stroke="#0a0a08"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M6 24h36M24 6c-4 5-6.5 11.5-6.5 18S20 37 24 42c4-5 6.5-11.5 6.5-18S28 11 24 6z"
                    stroke="#0a0a08"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M9.5 15h29M9.5 33h29"
                    stroke="#0a0a08"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <div className="hero-card-float hcf-1">
                <div className="hcf-label">Projects Launched</div>
                <div className="hcf-value accent" ref={counterRef}>
                  {count}
                </div>
                <div className="hcf-meta">Last 3 years</div>
              </div>
              <div className="hero-card-float hcf-2">
                <div className="hcf-label">Avg. Page Speed</div>
                <div className="hcf-value">
                  98
                  <small style={{ fontSize: "0.9rem", opacity: 0.6 }}>
                    /100
                  </small>
                </div>
                <div className="hcf-meta">Google Lighthouse</div>
              </div>
              <div className="hero-card-float hcf-3">
                <div className="hcf-label">Satisfaction</div>
                <div className="hcf-value accent">★ 5.0</div>
                <div className="hcf-meta">47 clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
