import { useEffect, useMemo, useRef, useState } from "react";


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


function Counter({ from = 0, to = 300, duration = 1200, prefix = "+", suffix = "", className = "" }) {
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
    <div ref={ref} className={className}>
      <div className="text-3xl md:text-4xl font-extrabold leading-none">
        {prefix}{formatPt(val)}{suffix}
      </div>
    </div>
  );
}


export default function ConhecaEnmoda() {
  const stats = useMemo(
    () => ([
      { to: 300,   labelTop: "aulas",       labelBot: "de moda" },
      { to: 25000, labelTop: "alunos",      labelBot: "" },
      { to: 20,    labelTop: "anos",        labelBot: "de mercado" },
    ]),
    []
  );

  return (
    <section className="w-full bg-[#0D0A0B] text-white">
      <div className="max-w-[1440px] mx-auto px-6 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
         
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold">Conheça a Enmoda</h2>
            <div className="mt-4 space-y-4 text-sm md:text-[15px] text-white/85 leading-relaxed">
              <p>
                Com mais de 20 anos de expertise, a EnModa é referência no ensino de moda.
                Nossa plataforma líder na América Latina oferece uma ampla seleção de cursos online.
              </p>
              <p>
                Reconhecidos pelo pioneirismo em e-learning, proporcionamos um ambiente de estudo 24h com
                conteúdo audiovisual e ferramentas de ponta.
              </p>
              <p>
                Trabalhamos com professores experientes, conteúdos exclusivos e certificação garantida,
                preparando nossos alunos para se destacarem no mercado da moda e nos negócios.
              </p>
              <p className="text-white/70">Números que inspiram confiança:</p>
            </div>
          </div>

        
          <div className="lg:pl-6 flex items-center">
            <div className="grid grid-cols-3 gap-6 w-full">
              {stats.map((s, idx) => (
                <div key={idx} className="text-center">
                  <Counter to={s.to} prefix="+" className="mb-1" />
                  <div className="text-[12px] uppercase tracking-wide text-white/70">
                    <div>{s.labelTop}</div>
                    {s.labelBot && <div>{s.labelBot}</div>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
