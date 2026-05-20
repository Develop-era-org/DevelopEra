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

    let mouseX = 0;
    let mouseY = 0;

    let ringX = 0;
    let ringY = 0;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      cursor.style.left = `${mouseX}px`;
      cursor.style.top = `${mouseY}px`;
    };

    const animateRing = () => {
      ringX += mouseX - ringX;
      ringY += mouseY - ringY;

      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;

      requestAnimationFrame(animateRing);
    };

    animateRing();

    document.addEventListener("mousemove", onMouseMove);

    const hoverEls = document.querySelectorAll(
      "a, button, .proj-card, .proc-card, .service-card",
    );

    const addHover = () => {
      cursor.classList.add("cursor-hover");
      ring.classList.add("cursor-hover");
    };

    const removeHover = () => {
      cursor.classList.remove("cursor-hover");
      ring.classList.remove("cursor-hover");
    };

    hoverEls.forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    const nav = document.querySelector(".di-nav-wrap");

    const addNavHover = () => {
      cursor.classList.add("nav-hover");
      ring.classList.add("nav-hover");
    };

    const removeNavHover = () => {
      cursor.classList.remove("nav-hover");
      ring.classList.remove("nav-hover");
    };

    if (nav) {
      nav.addEventListener("mouseenter", addNavHover);
      nav.addEventListener("mouseleave", removeNavHover);
    }

    const mouseDown = () => {
      cursor.classList.add("click");
    };

    const mouseUp = () => {
      cursor.classList.remove("click");
    };

    document.addEventListener("mousedown", mouseDown);
    document.addEventListener("mouseup", mouseUp);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mousedown", mouseDown);
      document.removeEventListener("mouseup", mouseUp);

      hoverEls.forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });

      if (nav) {
        nav.removeEventListener("mouseenter", addNavHover);
        nav.removeEventListener("mouseleave", removeNavHover);
      }
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={cursorRef}></div>
      <div className="cursor-ring" ref={ringRef}></div>
    </>
  );
}
