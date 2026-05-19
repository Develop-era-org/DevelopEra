import { useEffect, useRef } from "react";
import "./cursor.css";
export default function Cursor() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const isTouchDevice = window.matchMedia("(hover:none)").matches;
    if (isTouchDevice) return;

    const cursor = cursorRef.current;
    const ring = ringRef.current;
    let mx = 0,
      my = 0,
      rx = 0,
      ry = 0;

    const onMouseMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      cursor.style.left = mx + "px";
      cursor.style.top = my + "px";
      document.documentElement.style.setProperty("--x", `${mx}px`);
      document.documentElement.style.setProperty("--y", `${my}px`);
    };

    const animRing = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.left = rx + "px";
      ring.style.top = ry + "px";
      requestAnimationFrame(animRing);
    };

    document.addEventListener("mousemove", onMouseMove);
    animRing();

    const hoverEls = document.querySelectorAll(
      "a,button,.proj-card,.proc-card,.service-card",
    );
    hoverEls.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        cursor.style.width = "20px";
        cursor.style.height = "20px";
        ring.style.width = "64px";
        ring.style.height = "64px";
        ring.style.opacity = ".2";
      });
      el.addEventListener("mouseleave", () => {
        cursor.style.width = "14px";
        cursor.style.height = "14px";
        ring.style.width = "44px";
        ring.style.height = "44px";
        ring.style.opacity = ".45";
      });
    });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={cursorRef}></div>
      <div className="cursor-ring" ref={ringRef}></div>
    </>
  );
}
