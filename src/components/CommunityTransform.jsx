import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";

function TypewriterBar({
  items = [],
  typingSpeed = 28,
  deletingSpeed = 24,
  pauseAfterType = 1000,
  pauseAfterDelete = 500,
}) {
  const data = useMemo(() => items.map((s) => `${s}`), [items]);
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState("typing");
  const current = data[idx] || "";
  const [pillSize, setPillSize] = useState({ width: null, minHeight: null });

  const measurePill = () => {
    if (!data.length) return;
    const probe = document.createElement("span");
    probe.style.position = "absolute";
    probe.style.visibility = "hidden";
    probe.style.pointerEvents = "none";
    probe.style.whiteSpace = "nowrap";
    probe.style.left = "-99999px";
    probe.className = "text-sm md:text-lg font-semibold leading-tight";
    document.body.appendChild(probe);

    let maxW = 0;
    let maxH = 0;
    for (const s of data) {
      probe.textContent = s;
      const rect = probe.getBoundingClientRect();
      if (rect.width > maxW) maxW = rect.width;
      if (rect.height > maxH) maxH = rect.height;
    }
    document.body.removeChild(probe);

    const PADDING_X = 48;
    const MAX_W = 460;
    const clampViewport = Math.max(200, Math.min(window.innerWidth - 48, MAX_W));
    const finalWidth = Math.min(Math.ceil(maxW + PADDING_X), clampViewport);
    const finalMinH = Math.ceil(maxH * 1.1);

    setPillSize({ width: finalWidth, minHeight: finalMinH });
  };

  useLayoutEffect(() => {
    measurePill();
    let rId = null;
    const onResize = () => {
      if (rId) cancelAnimationFrame(rId);
      rId = requestAnimationFrame(measurePill);
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      if (rId) cancelAnimationFrame(rId);
    };
  }, [items]);

  useEffect(() => {
    let t;
    if (phase === "typing") {
      if (text.length < current.length) {
        t = setTimeout(() => setText(current.slice(0, text.length + 1)), typingSpeed);
      } else {
        t = setTimeout(() => setPhase("pausing"), pauseAfterType);
      }
    } else if (phase === "deleting") {
      if (text.length > 0) {
        t = setTimeout(() => setText(current.slice(0, text.length - 1)), deletingSpeed);
      } else {
        setIdx((p) => (p + 1) % data.length);
        setPhase("typing");
      }
    } else {
      t = setTimeout(() => setPhase("deleting"), pauseAfterDelete);
    }
    return () => clearTimeout(t);
  }, [text, phase, current, typingSpeed, deletingSpeed, pauseAfterType, pauseAfterDelete]);

  return (
    <div className="mt-4 md:mt-6 flex justify-center">
      <div
        className="bg-[#FF2D55] rounded-md px-6 py-2 text-center overflow-hidden"
        style={{
          width: pillSize.width ?? undefined,
          minHeight: pillSize.minHeight ?? undefined,
          maxWidth: 460,
        }}
      >
        <div className="inline-flex items-baseline gap-1 text-sm md:text-lg font-semibold text-white leading-tight">
          <span className="whitespace-nowrap">{text || "\u00A0"}</span>
          <span className="block w-[2px] h-[1.15em] bg-white/90 animate-[caret_900ms_steps(1,end)_infinite]" />
        </div>
      </div>
      <style>{`
        @keyframes caret { 0%,49%{opacity:1} 50%,100%{opacity:0} }
      `}</style>
    </div>
  );
}

function VideoModal({ open, onClose, src }) {
  useEffect(() => {
    const onEsc = (e) => e.key === "Escape" && onClose();
    if (open) document.body.classList.add("overflow-hidden");
    else document.body.classList.remove("overflow-hidden");
    window.addEventListener("keydown", onEsc);
    return () => {
      window.removeEventListener("keydown", onEsc);
      document.body.classList.remove("overflow-hidden");
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[80] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl aspect-video bg-black rounded-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {src && (
          <iframe
            className="absolute inset-0 w-full h-full"
            src={src}
            title="Depoimento"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        )}
        <button
          className="absolute -top-3 -right-3 w-9 h-9 rounded-full bg-white text-black grid place-items-center shadow"
          onClick={onClose}
          aria-label="Fechar"
        >
          ✕
        </button>
      </div>
    </div>
  );
}

const TESTIMONIALS = [
  {
    quote: "Conteúdo direto do mercado. As mentorias me deram clareza de carreira.",
    name: "Ana Costa",
    role: "Assinante enmoda+",
    avatarUrl:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=256&auto=format&fit=facearea&facepad=2&h=256",
    videoUrl: "https://www.youtube.com/embed/ysz5S6PUM-U?autoplay=1",
  },
  {
    quote: "A comunidade acelera muito o networking. Recomendo demais!",
    name: "Bruno Martins",
    role: "Assinante enmoda+",
    avatarUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=256&auto=format&fit=facearea&facepad=2&h=256",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
  },
  {
    quote: "As trilhas e materiais complementares mudaram meu dia a dia no trabalho.",
    name: "Luiza Almeida",
    role: "Assinante enmoda+",
    avatarUrl:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=256&auto=format&fit=facearea&facepad=2&h=256",
    videoUrl: "https://www.youtube.com/embed/oHg5SJYRHA0?autoplay=1",
  },
];

function useStableTestimonialHeight(quotes, widthRef) {
  const [minHeight, setMinHeight] = useState(null);

  const measure = () => {
    const widthEl = widthRef.current;
    if (!widthEl) return;
    const { width } = widthEl.getBoundingClientRect();
    if (!width || width <= 0) return;

    const probe = document.createElement("div");
    probe.style.position = "absolute";
    probe.style.visibility = "hidden";
    probe.style.pointerEvents = "none";
    probe.style.left = "-99999px";
    probe.style.top = "0";
    probe.style.width = `${width}px`;
    probe.className = "md:pr-28 lg:pr-32";

    let max = 0;
    for (const q of quotes) {
      probe.innerHTML = `
        <div class="text-2xl md:text-3xl leading-snug font-semibold">
          <span class="text-[#FF2D55]">“</span> ${q} <span class="text-[#FF2D55]">”</span>
        </div>
        <div class="mt-4">
          <div class="font-semibold text-[16px]">Nome</div>
          <div class="text-[12px] text-[#FF2D55]">Assinante enmoda+</div>
        </div>
      `;
      document.body.appendChild(probe);
      const h = probe.getBoundingClientRect().height;
      if (h > max) max = h;
      document.body.removeChild(probe);
    }
    setMinHeight(Math.ceil(max + 4));
  };

  useLayoutEffect(() => {
    measure();
    let rId = null;
    const onResize = () => {
      if (rId) cancelAnimationFrame(rId);
      rId = requestAnimationFrame(measure);
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      if (rId) cancelAnimationFrame(rId);
    };
  }, []);

  return minHeight;
}

export default function CommunityTransform() {
  const [i, setI] = useState(0);
  const t = TESTIMONIALS[i];
  const [videoOpen, setVideoOpen] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (videoOpen) return;
    timerRef.current = setInterval(() => {
      setI((p) => (p + 1) % TESTIMONIALS.length);
    }, 3500);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [videoOpen]);

  const quoteColRef = useRef(null);
  const minHeight = useStableTestimonialHeight(
    TESTIMONIALS.map((x) => x.quote),
    quoteColRef
  );

  return (
    <section className="pt-2 md:pt-8 w-full bg-gradient-to-r from-[#0D0A0B] via-[#171415] to-[#0D0A0B] text-white">
      <div className="max-w-[1440px] mx-auto px-6 pt-10 pb-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold">Comunidade &amp; Transformação</h2>
          <p className="mt-4 text-[16px] md:text-[22px]">
            Você não vai apenas <span className="font-bold">assistir cursos</span>.<br />
            Vai entrar em uma comunidade que <span className="font-bold">acelera sua carreira</span>
          </p>
        </div>

        <TypewriterBar
          items={[
            "Professores que são referência no mercado",
            "Mentorias para clareza de carreira",
            "Networking com outros profissionais",
            "Certificação reconhecida e aplicável",
          ]}
        />

        <div
          ref={quoteColRef}
          className="relative mt-10 md:max-w-4xl lg:max-w-5xl mx-auto"
          style={minHeight ? { minHeight: `${minHeight}px` } : undefined}
        >
          <div className="md:pr-28 lg:pr-32">
            <div className="text-xl md:text-3xl leading-snug font-semibold">
              <span className="text-[#FF2D55]">“</span> {t.quote} <span className="text-[#FF2D55]">”</span>
            </div>
            <div className="mt-4">
              <div className="font-semibold text-[16px]">{t.name}</div>
              <div className="text-[12px] text-[#FF2D55]">{t.role}</div>
            </div>
          </div>

          <div className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 flex-col items-center gap-2">
            <button
              onClick={() => setVideoOpen(true)}
              className="h-20 w-20 lg:h-24 lg:w-24 rounded-full overflow-hidden ring-2 ring-[#FF2D55] shadow-md hover:scale-105 transition"
              aria-label="Assistir ao vídeo"
            >
              <img src={t.avatarUrl} alt={`Foto de ${t.name}`} className="w-full h-full object-cover" />
            </button>
            <button onClick={() => setVideoOpen(true)} className="text-xs lg:text-sm underline text-[#FF2D55] hover:text-white">
              assista ao vídeo
            </button>
          </div>

          <div className="md:hidden mt-4 flex flex-col items-center gap-2">
            <button
              onClick={() => setVideoOpen(true)}
              className="h-20 w-20 rounded-full overflow-hidden ring-2 ring-[#FF2D55] shadow-md"
            >
              <img src={t.avatarUrl} alt={`Foto de ${t.name}`} className="w-full h-full object-cover" />
            </button>
            <button onClick={() => setVideoOpen(true)} className="text-sm underline text-[#FF2D55] hover:text-white">
              assista ao vídeo
            </button>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Ir ao depoimento ${idx + 1}`}
              onClick={() => setI(idx)}
              className={`h-2.5 rounded-full transition-all ${
                idx === i ? "w-6 bg-[#FF2D55]" : "w-2.5 bg-black/30 hover:bg-black/50"
              }`}
            />
          ))}
        </div>
      </div>

      <VideoModal open={videoOpen} onClose={() => setVideoOpen(false)} src={videoOpen ? TESTIMONIALS[i].videoUrl : null} />
    </section>
  );
}
