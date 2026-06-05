import { useEffect, useRef } from "react";

export function CursorTrail() {
  const dotsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const isFine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!isFine) return;

    const count = 12;
    const dots: HTMLDivElement[] = [];
    for (let i = 0; i < count; i++) {
      const d = document.createElement("div");
      d.className = "cursor-dot";
      d.style.opacity = String(1 - i / count);
      d.style.transform = `scale(${1 - i / (count * 1.5)})`;
      document.body.appendChild(d);
      dots.push(d);
    }
    dotsRef.current = dots;

    const positions = Array.from({ length: count }, () => ({ x: 0, y: 0 }));
    let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener("mousemove", onMove);

    let raf = 0;
    const tick = () => {
      let x = mouse.x;
      let y = mouse.y;
      positions.forEach((p, i) => {
        p.x += (x - p.x) * 0.3;
        p.y += (y - p.y) * 0.3;
        const d = dots[i];
        d.style.transform = `translate(${p.x - 7}px, ${p.y - 7}px) scale(${1 - i / (count * 1.5)})`;
        x = p.x;
        y = p.y;
      });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      dots.forEach((d) => d.remove());
    };
  }, []);

  return null;
}
