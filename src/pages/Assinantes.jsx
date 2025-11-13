import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import CTAButton from "../components/CTA";
import SubscribersTestimonialSection from "../components/CapDepoimentos";
import Footer from "../components/rodape.jsx";

import AnaBeatrizImg from "../assets/assinantes/anabeatriz.jpg";
import GabrielaFelixImg from "../assets/assinantes/gabrielafelix.jpg"; 
import RafaelaImg from "../assets/assinantes/rafaella.jpg";
import QuerenImg from "../assets/assinantes/queren.jpg";              
import RafaelImg from "../assets/assinantes/rafael.jpg";
import DepoimentoRafaelaImg from "../assets/assinantes/depoimentorafaela.jpg";
import DepoimentoPrint from "../assets/assinantes/depoimentoprint.jpg";

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
        <button ref={btnRef} onClick={onClose} className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white text-black grid place-items-center shadow" aria-label="Fechar">✕</button>
      </div>
    </div>
  );
}

const TESTIMONIALS = [
  {
    quote:
      "Juntou todos os cursos que eu tava procurando com professores extremamente qualificados, aulas super didáticas e envolventes que eu posso assistir em qualquer lugar.",
    name: "Ana Beatriz",
    role: "Assinante enmoda+",
    avatarUrl: AnaBeatrizImg,
    videoUrl: "https://www.youtube.com/embed/EO-fKonlCzQ?autoplay=1",
  },
  {
    quote:
      "É uma ótima oportunidade para você que não pode fazer uma faculdade mas quer aprender alguma coisa especifica com qualidade ou até para quem faz faculdade ou já é formado e quer relembrar algo e completar seu currículo... É muito bom! !",
    name: "Gabriela Felix",
    role: "Assinante enmoda+",
    avatarUrl: GabrielaFelixImg,
    videoUrl: "https://www.youtube.com/embed/jZ8VU2qUZFs?start=463&autoplay=1",
  },
  {
    quote:
      "A coordenadora do curso me indicou a Enmoda+ e foi a melhor decisão. Os cursos são completíssimos, superaram minhas expectativas e estão me preparando muito melhor para chegar na faculdade.",
    name: "Rafaela Hennemann",
    role: "Assinante enmoda+",
    avatarUrl: RafaelaImg,
    proofImage: DepoimentoRafaelaImg,
  },
  {
    quote:
      "Aplicativo funciona super bem. As aulas bem explicativas e ótimos conteúdos riquíssimos de moda. Melhor investimento que fiz!",
    name: "Quéren Vasconcellos",
    role: "Assinante enmoda+",
    avatarUrl: QuerenImg,
    proofImage: DepoimentoPrint,
  },
  {
    quote:
      "Gostaria de elogiar as aulas da profissional Muriel Campanhã. A narrativa dela, reflexões e a maneira que ela administra as aulas… A sensação que tenho é que estou em sala de aula com ela.",
    name: "Rafael",
    role: "Assinante enmoda+",
    avatarUrl: RafaelImg,
    proofImage: DepoimentoPrint,
  },
];

function Card({ t, onVideo, onImage }) {
  const hasVideo = Boolean(t.videoUrl);
  const hasImage = Boolean(t.proofImage);

  return (
    <div className="h-full rounded-2xl border border-white/5 bg-[#110E0F] p-5 sm:p-6 flex flex-col justify-between shadow-[0_0_10px_rgba(255,44,100,0.2)]">
      <div>
        <div className="text-xl leading-snug">
          <span className="text-[#FF2C64]">“</span> {t.quote}{" "}
          <span className="text-[#FF2C64]">”</span>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={t.avatarUrl}
            alt={t.name}
            className="w-10 h-10 rounded-full object-cover ring-2 ring-[#FF2C64]/50"
          />
          <div>
            <div className="text-sm font-semibold">{t.name}</div>
            <div className="text-xs text-[#FF2C64]">{t.role}</div>
          </div>
        </div>

        {(hasVideo || hasImage) && (
          <div className="flex flex-col items-end gap-1">
            {hasVideo && (
              <button
                onClick={() => onVideo(t.videoUrl)}
                className="text-xs underline text-[#FF2C64] hover:text-white"
              >
                ver depoimento
              </button>
            )}
            {hasImage && (
              <button
                onClick={() => onImage(t.proofImage)}
                className="text-xs underline text-[#FF2C64] hover:text-white"
              >
                ver depoimento
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}


export default function Assinantes() {
  const [videoSrc, setVideoSrc] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);

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
          <p className="mt-1 mb-10 text-white/70 italic">E o próximo depoimento pode ser o seu.</p>
          <CTAButton variant="primary" to="/assinatura#planosass" size="md" className='mb-2 md:mb-0'>
  QUERO COMEÇAR AGORA
</CTAButton>
        </div>
<div className="mt-14 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
          {TESTIMONIALS.map((t, idx) => (
            <Card
              key={idx}
              t={t}
              onVideo={(src) => setVideoSrc(src)}
              onImage={(src) => setImageSrc(src)}
            />
          ))}
        </div>
      </div>





<SubscribersTestimonialSection />

      

      <VideoModal open={!!videoSrc} onClose={() => setVideoSrc(null)} src={videoSrc} />

         <ImageModal
        open={!!imageSrc}
        onClose={() => setImageSrc(null)}
        src={imageSrc}
      />
      
    </main>
  );
}

function ImageModal({ open, onClose, src }) {
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
    <div
      className="fixed inset-0 z-[80] bg-black/70 backdrop-blur-sm grid place-items-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-2xl bg-black rounded-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {src && (
          <img
            src={src}
            alt="Depoimento"
            className="w-full h-auto max-h-[80vh] object-contain bg-black"
          />
        )}
        <button
          ref={btnRef}
          onClick={onClose}
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white text-black grid place-items-center shadow"
          aria-label="Fechar"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
