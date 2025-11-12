// src/components/CourseMarquee.jsx
import { useEffect, useMemo, useRef } from "react";
import COURSES from "../assets/courses";
import { capaDoCurso } from "../assets/imagens";

export default function CourseMarquee() {
  const trackRef = useRef(null);

  // duplica a lista pra loop contínuo
  const items = useMemo(() => {
    const base = COURSES.slice(0, 25);
    return [...base, ...base];
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    // respeita usuários com “reduzir movimento”
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf;
    let last = 0;
    let x = 0;

    // velocidade menor no mobile
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const SPEED = isMobile ? 24 : 40; // px/s

    const getHalf = () => el.scrollWidth / 2; // largura de 1 pista (duplicada)

    const step = (t) => {
      if (!last) last = t;
      const dt = (t - last) / 1000;
      last = t;

      x -= SPEED * dt;

      // quando a 1ª pista saiu toda da tela, “teleporta” de volta usando a 2ª
      const half = getHalf();
      if (half > 0 && -x >= half) x += half;

      // força render no compositor da GPU (iOS friendly)
      el.style.transform = `translate3d(${x}px,0,0)`;

      raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);

    // pausa quando a aba fica oculta (economiza bateria)
    const onVis = () => {
      if (document.hidden) {
        cancelAnimationFrame(raf);
        last = 0;
      } else {
        raf = requestAnimationFrame(step);
      }
    };
    document.addEventListener("visibilitychange", onVis);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        ref={trackRef}
        className="flex gap-3 md:gap-4 w-max will-change-transform"
        // nada de overflow/scroll aqui; o wrapper já esconde as bordas
      >
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

      {/* fades laterais */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-10 sm:w-16 bg-gradient-to-r from-[#0D0A0B] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-10 sm:w-16 bg-gradient-to-l from-[#0D0A0B] to-transparent z-10" />
    </div>
  );
}

