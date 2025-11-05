// src/components/CourseMarquee.jsx
import { useEffect, useRef } from "react";
import COURSES from "../assets/courses";
import { capaDoCurso } from "../assets/imagens";

export default function CourseMarquee() {
  const scrollRef = useRef(null);

  // pega alguns cursos
  const base = COURSES.slice(0, 25); // pode mudar a quantidade se quiser
  const items = [...base, ...base];  // duplica pra dar loop

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let frameId;
    let lastTime = 0;
    const SPEED = 40; // px por segundo

    const step = (time) => {
      if (!lastTime) lastTime = time;
      const delta = (time - lastTime) / 1000;
      lastTime = time;

      el.scrollLeft += SPEED * delta;

      const trackWidth = el.scrollWidth / 2; // metade porque duplicamos
      if (el.scrollLeft >= trackWidth) {
        el.scrollLeft -= trackWidth; // volta 1 bloco pra ficar suave
      }

      frameId = requestAnimationFrame(step);
    };

    frameId = requestAnimationFrame(step);

    return () => {
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div className="relative w-full">
      
      <div
        ref={scrollRef}
        className="w-full overflow-hidden"
      >
        <div className="flex gap-4 w-max">
          {items.map((curso, idx) => (
            <div
              key={`${curso.id ?? idx}-${idx}`}
              className="shrink-0 rounded-xl bg-black/20 overflow-hidden border border-white/10"
              style={{ width: "clamp(140px, 42vw, 220px)" }}
            >
              <img
                src={capaDoCurso(curso)}
                alt={curso.title}
                className="aspect-[31/60] w-full object-cover"
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src =
                    "https://images.unsplash.com/photo-1520975940468-88d8a520f3d8?q=80&w=720&auto=format";
                }}
              />
            </div>
          ))}
        </div>
      </div>

      
      <div className="pointer-events-none absolute inset-y-0 left-0 w-10 sm:w-16 bg-gradient-to-r from-[#0D0A0B] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-10 sm:w-16 bg-gradient-to-l from-[#0D0A0B] to-transparent z-10" />
    </div>
  );
}
