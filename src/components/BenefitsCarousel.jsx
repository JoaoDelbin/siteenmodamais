import { useEffect, useRef, useState } from "react";
import {
  CheckCircle, BookOpen, Heart, FileText, Headphones, Award, Clock,
} from "lucide-react";
import { Link } from "react-router-dom";

const BENEFITS = [
  { icon: <CheckCircle className="w-6 h-6 text-[#FF2C64]" />, title: "Estude com os melhores", text: "Aprenda com experts que moldam a indústria da moda." },
  { icon: <BookOpen className="w-6 h-6 text-[#FF2C64]" />, title: "Explore temas diferentes", text: "Consultoria de imagem, design, marketing, comunicação, varejo e muito mais." },
  { icon: <Heart className="w-6 h-6 text-[#FF2C64]" />, title: "Descubra novas paixões", text: "Encontre novos interesses e talentos." },
  { icon: <FileText className="w-6 h-6 text-[#FF2C64]" />, title: "Materiais complementares", text: "Conteúdo detalhado para aprofundar." },
  { icon: <Headphones className="w-6 h-6 text-[#FF2C64]" />, title: "Ouça enquanto pratica", text: "Transforme qualquer momento em estudo." },
  { icon: <Award className="w-6 h-6 text-[#FF2C64]" />, title: "Certificados de cursos", text: "Reconhecidos e valorizam seu currículo." },
  { icon: <Clock className="w-6 h-6 text-[#FF2C64]" />, title: "Horas complementares", text: "Essenciais para sua formação." },
  { icon: <CheckCircle className="w-6 h-6 text-[#FF2C64]" />, title: "Estude com os melhores", text: "Aprenda com experts que moldam a indústria da moda." },
  { icon: <BookOpen className="w-6 h-6 text-[#FF2C64]" />, title: "Explore temas diferentes", text: "Consultoria de imagem, design, marketing, comunicação, varejo e muito mais." },
  { icon: <Heart className="w-6 h-6 text-[#FF2C64]" />, title: "Descubra novas paixões", text: "Encontre novos interesses e talentos." },
  { icon: <FileText className="w-6 h-6 text-[#FF2C64]" />, title: "Materiais complementares", text: "Conteúdo detalhado para aprofundar." },
  { icon: <Headphones className="w-6 h-6 text-[#FF2C64]" />, title: "Ouça enquanto pratica", text: "Transforme qualquer momento em estudo." },
  { icon: <Award className="w-6 h-6 text-[#FF2C64]" />, title: "Certificados de cursos", text: "Reconhecidos e valorizam seu currículo." },
  { icon: <Clock className="w-6 h-6 text-[#FF2C64]" />, title: "Horas complementares", text: "Essenciais para sua formação." },
  { icon: <CheckCircle className="w-6 h-6 text-[#FF2C64]" />, title: "Estude com os melhores", text: "Aprenda com experts que moldam a indústria da moda." },
  { icon: <BookOpen className="w-6 h-6 text-[#FF2C64]" />, title: "Explore temas diferentes", text: "Consultoria de imagem, design, marketing, comunicação, varejo e muito mais." },
  { icon: <Heart className="w-6 h-6 text-[#FF2C64]" />, title: "Descubra novas paixões", text: "Encontre novos interesses e talentos." },
  { icon: <FileText className="w-6 h-6 text-[#FF2C64]" />, title: "Materiais complementares", text: "Conteúdo detalhado para aprofundar." },
  { icon: <Headphones className="w-6 h-6 text-[#FF2C64]" />, title: "Ouça enquanto pratica", text: "Transforme qualquer momento em estudo." },
  { icon: <Award className="w-6 h-6 text-[#FF2C64]" />, title: "Certificados de cursos", text: "Reconhecidos e valorizam seu currículo." },
  { icon: <Clock className="w-6 h-6 text-[#FF2C64]" />, title: "Horas complementares", text: "Essenciais para sua formação." },
];

function Card({ icon, title, text }) {
  return (
    <div className="shrink-0 w-[240px] h-[220px] md:w-[300px] md:h-[170px]"> 
      <div
        className="
          h-full rounded-xl bg-[#110E0F] border border-white/10 p-6
          transition hover:shadow-l-[#FF2C64]
          cursor-default select-none flex flex-col text-center
        "
      >
        <div className="mb-3 mt-1 flex items-center justify-center">{icon}</div>
        <div className="text-md text-wrap font-semibold leading-tight truncate">
          {title}
        </div>
        
        <p className="mt-1 text-sm text-gray-300 leading-snug three-lines">
          {text}
        </p>
      </div>
    </div>
  );
}


export default function BenefitsCarousel({ speedPxPerFrame = 1.1 }) {
  const scrollerRef = useRef(null);
  const [hover, setHover] = useState(false);        
  const drag = useRef({ active: false, startX: 0, startLeft: 0 });


  const speedFactor = hover ? 0.3 : 1;


  const items = [...BENEFITS, ...BENEFITS];


  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    let rafId;
    const step = () => {
      if (!drag.current.active) {
        el.scrollLeft += speedPxPerFrame * speedFactor;
        const half = el.scrollWidth / 2;  
        if (el.scrollLeft >= half) el.scrollLeft -= half;
      }
      rafId = requestAnimationFrame(step);
    };
    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [speedPxPerFrame, speedFactor]);


  const onPointerDown = (e) => {
    const el = scrollerRef.current;
    if (!el) return;
    drag.current.active = true;
    drag.current.startX = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
    drag.current.startLeft = el.scrollLeft;
    el.setPointerCapture?.(e.pointerId ?? 1);
  };
  const onPointerMove = (e) => {
    if (!drag.current.active) return;
    const el = scrollerRef.current;
    const x = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
    const delta = x - drag.current.startX;
    el.scrollLeft = drag.current.startLeft - delta;
  };
  const endDrag = () => {
    if (!drag.current.active) return;
    drag.current.active = false;
  };


  const onWheel = (e) => {
    const el = scrollerRef.current;
    if (!el) return;
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    }
  };

  return (
    <section className="w-full bg-[#0D0A0B] text-white">
      <div className="mt-6 max-w-[1440px] mx-auto px-6 pt-2 md:pt-8 pb-10">
        <h2 className="text-center text-3xl md:text-5xl font-bold mb-6">
          Por que assinar a <span className="text-[#FF2C64]">enmoda+</span>
        </h2>

      
        <div
          className="relative overflow-visible py-8"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <div
            ref={scrollerRef}
            className="
              overflow-x-auto overflow-y-visible no-scrollbar
            "
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
            onWheel={onWheel}
          >
            <div className="flex gap-4 pr-4">
              {items.map((b, idx) => (
                <Card key={idx} icon={b.icon} title={b.title} text={b.text} />
              ))}
            </div>
          </div>
        </div>


        <div className="mt-2 flex flex-col items-center gap-3
                md:flex-row md:justify-center md:gap-4">
           <Link to="assinatura#planosass"
    className="font-bold px-3 py-1 text-base
               md:px-4 md:py-1.5 md:text-lg
               rounded-full bg-[#C2F738] text-[#32410A] transition duration-300 ease-in-out
                       hover:shadow-[0_0_10px_2px_#C2F738]">
    QUERO COMEÇAR AGORA
  </Link>

  <div className="flex items-center gap-1">
    <div className="flex -space-x-2.5">
      <div className="w-7 h-7 rounded-full bg-gray-300 border-2 border-[#0B0B15]" />
      <div className="w-7 h-7 rounded-full bg-gray-300 border-2 border-[#0B0B15]" />
      <div className="w-7 h-7 rounded-full bg-gray-300 border-2 border-[#0B0B15]" />
    </div>
    <span className="text-xs md:text-base font-semibold text-gray-300">
      +1.000 assinantes
    </span>
  </div>
        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar{display:none}
        .no-scrollbar{-ms-overflow-style:none;scrollbar-width:none}
      `}</style>
    </section>
  );
}
