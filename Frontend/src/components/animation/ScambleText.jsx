import { useRef } from "react";
import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrambleTextPlugin);

export default function ScrambleText({ text, className = "" }) {
  const textRef = useRef(null);

  const handleEnter = () => {
    gsap.killTweensOf(textRef.current);

    gsap.to(textRef.current, {
      duration: 0.8,

      scrambleText: {
        text: text,
        chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        speed: 0.4,
      },

      ease: "power2.out",
    });
  };

  return (
    <span
      ref={textRef}
      className={className}
      onMouseEnter={handleEnter}
      style={{
        display: "inline-block",
        cursor: "default",
      }}
    >
      {text}
    </span>
  );
}
