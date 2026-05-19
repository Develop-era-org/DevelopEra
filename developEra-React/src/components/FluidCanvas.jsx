import { useEffect, useRef } from "react";
import { Renderer, Program, Mesh, Triangle } from "ogl";

export default function FluidCanvas() {
  const containerRef = useRef();

  useEffect(() => {
    const renderer = new Renderer({
      dpr: Math.min(window.devicePixelRatio, 2),
      alpha: true,
    });

    const gl = renderer.gl;

    containerRef.current.appendChild(gl.canvas);

    gl.clearColor(0, 0, 0, 0);

    const geometry = new Triangle(gl);

    const program = new Program(gl, {
      vertex: `
        attribute vec2 uv;
        attribute vec2 position;

        varying vec2 vUv;

        void main() {
          vUv = uv;
          gl_Position = vec4(position, 0, 1);
        }
      `,

      fragment: `
        precision highp float;

        varying vec2 vUv;

        uniform float uTime;
        uniform vec2 uMouse;

        void main() {

          vec2 uv = vUv;

          float dist = distance(uv, uMouse);

          float glow = 0.02 / dist;

          vec3 color = vec3(
            0.78,
            1.0,
            0.0
          ) * glow;

          gl_FragColor = vec4(color, 1.0);
        }
      `,

      uniforms: {
        uTime: { value: 0 },
        uMouse: { value: [0.5, 0.5] },
      },
    });

    const mesh = new Mesh(gl, {
      geometry,
      program,
    });

    function resize() {
      renderer.setSize(
        containerRef.current.offsetWidth,
        containerRef.current.offsetHeight,
      );
    }

    window.addEventListener("resize", resize);

    resize();

    const mouse = { x: 0.5, y: 0.5 };

    containerRef.current.addEventListener("mousemove", (e) => {
      const rect = containerRef.current.getBoundingClientRect();

      mouse.x = (e.clientX - rect.left) / rect.width;
      mouse.y = 1 - (e.clientY - rect.top) / rect.height;
    });

    let animationFrame;

    function update(t) {
      animationFrame = requestAnimationFrame(update);

      program.uniforms.uTime.value = t * 0.001;

      program.uniforms.uMouse.value = [mouse.x, mouse.y];

      renderer.render({ scene: mesh });
    }

    update(0);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <div className="fluid-canvas" ref={containerRef}></div>;
}
