import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function useLockBody(open) {
  useEffect(() => {
    if (open) document.body.classList.add("overflow-hidden");
    else document.body.classList.remove("overflow-hidden");
    return () => document.body.classList.remove("overflow-hidden");
  }, [open]);
}

function VideoModal({ open, onClose, src }) {
  const btnRef = useRef(null);
  useLockBody(open);
  useEffect(() => {
    const onEsc = (e) => e.key === "Escape" && onClose();
    if (open) {
      window.addEventListener("keydown", onEsc);
      setTimeout(() => btnRef.current?.focus(), 0);
    }
    return () => window.removeEventListener("keydown", onEsc);
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[80] bg-black/70 backdrop-blur-sm grid place-items-center p-4" onClick={onClose} role="dialog" aria-modal="true">
      <div className="relative w-full max-w-3xl aspect-video bg-black rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
        {src && <iframe className="absolute inset-0 w-full h-full" src={src} title="Depoimento" allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen />}
        <button ref={btnRef} onClick={onClose} className="absolute -top-3 -right-3 w-9 h-9 rounded-full bg-white text-black grid place-items-center shadow" aria-label="Fechar">✕</button>
      </div>
    </div>
  );
}

const TESTIMONIALS = [
  {
    id: "ana",
    quote: "Conteúdo direto do mercado. As mentorias me deram clareza de carreira.",
    name: "Ana Costa",
    role: "Assinante enmoda+",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=256&auto=format&fit=facearea&facepad=2&h=256",
    video: "https://www.youtube.com/embed/ysz5S6PUM-U?autoplay=1",
  },
  {
    id: "bruno",
    quote: "A comunidade acelera muito o networking. Recomendo demais!",
    name: "Bruno Martins",
    role: "Assinante enmoda+",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=256&auto=format&fit=facearea&facepad=2&h=256",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
  },
  {
    id: "luiza",
    quote: "As trilhas e materiais complementares mudaram meu dia a dia no trabalho.",
    name: "Luiza Almeida",
    role: "Assinante enmoda+",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=256&auto=format&fit=facearea&facepad=2&h=256",
    video: "https://www.youtube.com/embed/oHg5SJYRHA0?autoplay=1",
  },
  {
    id: "sofia",
    quote: "Entrei pelo certificado, fiquei pela comunidade e pelos professores.",
    name: "Sofia Ribeiro",
    role: "Assinante enmoda+",
    avatar: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=256&auto=format&fit=facearea&facepad=2&h=256",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
},
  {
    id: "gabriel",
    quote: "Consegui minha primeira vaga em moda aplicando o que aprendi aqui.",
    name: "Gabriel Nunes",
    role: "Assinante enmoda+",
    avatar: "https://images.unsplash.com/photo-1546525848-3ce03ca516f6?q=80&w=256&auto=format&fit=facearea&facepad=2&h=256",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
},
  {
    id: "paula",
    quote: "As mentorias me deram direção para abrir meu próprio negócio.",
    name: "Paula Fernandes",
    role: "Assinante enmoda+",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=256&auto=format&fit=facearea&facepad=2&h=256",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
},
];

function Card({ t, onVideo }) {
  return (
    <div className="h-full rounded-2xl border border-white/5 bg-[#110E0F] p-5 sm:p-6 flex flex-col justify-between shadow-[0_0_10px_rgba(255,44,100,0.2)]">
      <div>
        <div className="text-xl leading-snug">
          <span className="text-[#FF2C64]">“</span> {t.quote} <span className="text-[#FF2C64]">”</span>
        </div>
      </div>
      <div className="mt-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover ring-2 ring-[#FF2C64]/50" />
          <div>
            <div className="text-sm font-semibold">{t.name}</div>
            <div className="text-xs text-[#FF2C64]">{t.role}</div>
          </div>
        </div>
        {t.video && (
          <button onClick={() => onVideo(t.video)} className="text-xs underline text-[#FF2C64] hover:text-white">
            assistir ao vídeo
          </button>
        )}
      </div>
    </div>
  );
}

export default function Assinantes() {
  const [videoSrc, setVideoSrc] = useState(null);

  return (
    <main className="min-h-screen w-full bg-[#0D0A0B] text-white">
      <div className="max-w-[1200px] mx-auto px-6 pt-10 pb-14">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold">O que dizem nossos assinantes</h1>
          <p className="mt-4 text-white/85 leading-relaxed">
            Na enmoda+, cada história de aprendizado é também uma história de transformação. Nossos alunos já conquistaram novas posições no mercado,
            abriram seus próprios negócios e encontraram clareza de carreira ao estudar com os maiores experts da moda.
          </p>
          <p className="mt-3 text-white/80">Veja como a enmoda+ tem feito a diferença na vida de quem decidiu investir em si mesmo.</p>
          <p className="mt-1 text-white/70 italic">E o próximo depoimento pode ser o seu.</p>
          <a href="assinatura#planosass" className="inline-block mt-6 px-6 py-2 rounded-full bg-[#C2F738] text-[#32410A] font-semibold hover:bg-[#B4E436]">
            Quero fazer parte da Enmoda+
          </a>
        </div>

        <div className="mt-10 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
          {TESTIMONIALS.map((t) => (
            <Card key={t.id} t={t} onVideo={(src) => setVideoSrc(src)} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="/#planos" className="inline-block px-6 py-2 rounded-full bg-[#C2F738] text-[#32410A] font-semibold hover:bg-[#B4E436]">
            Quero fazer parte da Enmoda+
          </a>
        </div>
      </div>

      <VideoModal open={!!videoSrc} onClose={() => setVideoSrc(null)} src={videoSrc} />
    </main>
  );
}
