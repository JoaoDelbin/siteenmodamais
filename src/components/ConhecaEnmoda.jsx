import { useEffect, useMemo, useRef, useState } from "react";
import laptop from "../assets/laptop.png";
import { Link } from "react-router-dom";

const formatPt = (n) =>
  new Intl.NumberFormat("pt-BR", { maximumFractionDigits: 0 }).format(n);

function useInView(options = { threshold: 0.3 }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true);
    }, options);
    obs.observe(el);
    return () => obs.disconnect();
  }, [options]);
  return { ref, inView };
}

function Counter({ from = 0, to = 300, duration = 2000, prefix = "+", suffix = "" }) {
  const [val, setVal] = useState(from);
  const { ref, inView } = useInView({ threshold: 0.4 });
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const start = performance.now();
    const ease = (t) => 1 - Math.pow(1 - t, 3);
    const tick = (now) => {
      const p = Math.min(1, (now - start) / duration);
      const cur = Math.round(from + (to - from) * ease(p));
      setVal(cur);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, from, to, duration]);

  return (
    <div
      ref={ref}
      className="text-xl md:text-2xl font-bold leading-none text-[#FF2C64]"
    >
      {prefix}
      {formatPt(val)}
      {suffix}
    </div>
  );
}

function LaptopMock({ imageSrc }) {
  return (
    <div className="w-full lg:min-w-[680px] hidden md:block mx-auto">
      <img
        src={imageSrc}
        alt="Plataforma Enmoda"
        className="block w-full h-auto object-contain select-none pointer-events-none
                   drop-shadow-[0_18px_70px_rgba(0,0,0,0.45)]"
      />
    </div>
  );
}

export default function ConhecaEnmoda({ imageSrc = laptop }) {
  const stats = useMemo(
    () => [
      { to: 300, labelTop: "aulas de moda" },
      { to: 25000, labelTop: "alunos" },
      { to: 20, labelTop: "anos de mercado" },
    ],
    []
  );

  return (
    <section className="w-full bg-gradient-to-r from-[#0D0A0B] via-[#171415] to-[#0D0A0B] text-white">
      <div className="max-w-[1240px] mx-auto px-6 pt-10 pb-14 md:pb-16">
        <h2 className="text-3xl md:text-5xl font-bold">
          Conheça a <span className="text-[#FF2C64]">Enmoda</span>
        </h2>

        <div className="mt-6 md:mt-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <div className="space-y-4 text-[15px] md:text-[16px] text-white/85 leading-relaxed">
              <p>
                Com mais de 20 anos de expertise, a EnModa é referência no ensino de moda.
                Nossa plataforma líder na América Latina oferece uma ampla seleção de cursos online.
              </p>
              <p>
                Reconhecidos pelo pioneirismo em e-learning, proporcionamos um ambiente de estudo 24h
                com conteúdo audiovisual e ferramentas de ponta.
              </p>
              <p>
                Trabalhamos com professores experientes, conteúdos exclusivos e certificação garantida,
                preparando nossos alunos para se destacarem no mercado da moda e nos negócios.
              </p>
            </div>

           
            <div className="mt-6 md:mt-10">
              <div className="text-white/70 mb-5 md:mb-4 text-sm">Números que inspiram confiança:</div>

              <div className="grid grid-cols-3 gap-4">
  {stats.map((s, idx) => (
    <div
      key={idx}
      className="
        md:min-w-[160px]
        min-h-[80px]
        max-w-[180px]
        px-2 py-6 md:px-5 md:py-4
        rounded-xl
        bg-[#110E0F]
        border border-white/10
        text-center
        cursor-default select-none
        flex flex-col items-center justify-center
        shadow-[0_0_10px_rgba(0,0,0,0.6)]
        hover:shadow-[0_0_12px_4px_#FF2C64]
        transition
      "
    >
      <Counter to={s.to} prefix="+" />

      <div className="mt-1 text-[11px] md:text-sm uppercase tracking-wide text-white/80 font-semibold">
        {s.labelTop}
      </div>
    </div>
  ))}
</div>


              <div className="hidden mt-6 md:mt-8 text-center -mb-10">
                <Link to="assinatura#planosass" className="font-bold px-3 py-1 text-base
               md:px-4 md:py-1.5 md:text-lg
               rounded-full bg-[#C2F738] text-[#32410A] transition duration-300 ease-in-out
                       hover:shadow-[0_0_10px_2px_#C2F738]">
                  QUERO COMEÇAR AGORA
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:pl-4">
            <LaptopMock imageSrc={imageSrc} />
          </div>
        </div>
      </div>
    </section>
  );
}
