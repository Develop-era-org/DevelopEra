import { useEffect, useState } from "react";
import "./intro.css";

export default function Intro() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHide(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`intro-mask-wrap ${hide ? "intro-hide" : ""}`}>
      {/* OVERLAY */}

      <div className="intro-overlay"></div>

      {/* LOGO */}

      <h1 className="intro-logo">
        <span>d</span>
        <span>e</span>
        <span>v</span>
        <span>e</span>
        <span>l</span>

        {/* MASK LETTER */}

        <span className="mask-letter">o</span>

        <span>p</span>
        <span>E</span>
        <span>r</span>
        <span>a</span>
      </h1>
    </div>
  );
}
