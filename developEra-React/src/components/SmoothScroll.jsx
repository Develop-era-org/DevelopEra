import { ReactLenis } from "lenis/react";
import { useRef } from "react";

export default function SmoothScroll({ children }) {
  const lenisRef = useRef(null);

  return (
    <ReactLenis
      root
      ref={lenisRef}
      options={{
        lerp: 0.08,
        duration: 1.2,
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
