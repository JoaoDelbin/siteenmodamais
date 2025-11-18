import { CheckCircle, BadgePercent } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import CTAButton from "../components/CTA";

const benefitsMonthly = [
  "Acesso a todos os cursos",
  "Cursos de Moda exclusivos",
  "Suporte personalizado",
  "Certificação reconhecida",
  "Comunidade e networking",
];

const benefitsAnnual = [
  "Economia de 60%",
  "Acesso a todos os cursos",
  "Cursos de Moda exclusivos",
  "Suporte personalizado",
  "Certificação reconhecida",
  "Comunidade e networking",
];

export default function PlansSection() {
  const [hotmartReady, setHotmartReady] = useState(false);
  const mensalRef = useRef(null);
  const anualRef  = useRef(null);

  // Respeita quando o widget estiver pronto (carregado globalmente)
  useEffect(() => {
    const markReady = () => setHotmartReady(true);
    if (window._HM_WIDGET_READY) markReady();
    window.addEventListener("hotmart-widget-ready", markReady);
    return () => window.removeEventListener("hotmart-widget-ready", markReady);
  }, []);

  // Impede navegação direta (deixa o widget assumir)
  useEffect(() => {
    if (!hotmartReady) return;
    if (mensalRef.current) mensalRef.current.setAttribute("onclick", "return false;");
    if (anualRef.current)  anualRef.current.setAttribute("onclick", "return false;");
  }, [hotmartReady]);

const Btn = ({ innerRef, href, children }) => {
  const base =
    "hidden sm:block mt-6 w-full text-center font-bold px-3 py-1 text-base md:px-4 md:py-1.5 md:text-lg rounded-full transition duration-300 ease-in-out";
  const theme = [
    "bg-none",
    "!bg-[#C2F738]",
    "!text-[#32410A]",
    "!text-2xl",

    // HOVER
    "hover:bg-none",
    "hover:!bg-[#C2F738]",
    "hover:!text-[#32410A]",
    "hover:shadow-[0_0_10px_2px_#C2F738]",

    // ACTIVE (clique)
    "active:bg-none",
    "active:!bg-[#C2F738]",
    "active:!text-[#32410A]",
    "active:shadow-[0_0_8px_2px_#C2F738]",

    // FOCUS (acessibilidade / teclado)
    "focus-visible:bg-none",
    "focus-visible:!bg-[#C2F738]",
    "focus-visible:!text-[#32410A]",
  ].join(" ");

  return (
    <a
      ref={innerRef}
      href={href}
      className={`${base} ${theme} hotmart-fb hotmart__button-checkout reset ${
        !hotmartReady ? "pointer-events-none opacity-60" : ""
      }`}
      aria-disabled={!hotmartReady}
      title={!hotmartReady ? "Carregando checkout..." : undefined}
    >
      {children}
    </a>
  );
};



  return (
    <section id="planos" className="bg-[#0D0A0B] text-white py-14">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-center text-3xl md:text-4xl font-bold mt-5 mb-10">
          Escolha o plano ideal para você
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* MENSAL */}
          <article className="rounded-xl bg-[#110E0F] border border-white/10 p-6 md:p-8 flex flex-col">
            <header className="text-center mb-6">
              <h3 className="text-xl font-bold tracking-wide">PLANO MENSAL</h3>
              <div className="mt-1 text-4xl font-bold text-[#FF2C64]">R$199</div>
              <p className="text-xs text-white/60 mt-1">R$2.388 por ano</p>
            </header>

            <ul className="space-y-3 text-sm md:text-[15px] flex-1">
              {benefitsMonthly.map((b) => (
                <li key={b} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#FF2C64]" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <p className="text-center text-xs text-white/60 mt-6">
              Cancelamento com reembolso integral em até 7 dias após a contratação.
            </p>

            <Btn
              innerRef={mensalRef}
              href="https://pay.hotmart.com/Y93317667Q?checkoutMode=2?utm_source=enmodamais_site&utm_medium=cta&utm_campaign=assinatura_enmodamais&utm_content=botao_planos"
            >
              ASSINAR MENSAL
            </Btn>
            <CTAButton variant="primary" href="https://pay.hotmart.com/Y93317667Q?checkoutMode=2?utm_source=enmodamais_site&utm_medium=cta&utm_campaign=assinatura_enmodamais&utm_content=botao_planos" size="lg" className='block sm:hidden mb-2 mt-4'>
  ASSINAR MENSAL
</CTAButton>
          </article>

          {/* ANUAL */}
          <article className="relative rounded-xl bg-[#110E0F] border border-[#FF2C64] p-6 md:p-8 flex flex-col hover:shadow-[0_4px_20px_2px_#FF2C64]">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FF2C64] text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
              <BadgePercent className="w-5 h-5" /> MAIS VANTAJOSO
            </span>

            <header className="text-center mb-6">
              <h3 className="text-xl font-bold tracking-wide">PLANO ANUAL</h3>
              <div className="mt-2 text-sm text-white/60 line-through">12x R$99 (total R$1188)</div>
              <div className="mt-1 text-3xl md:text-4xl font-bold">
                12x <span className="text-[#FF2C64]">R$55,30</span>
              </div>
              <p className="text-base md:text-lg font-bold mt-1">Apenas R$663,6 por ano</p>
            </header>

            <ul className="space-y-3 text-sm md:text-[15px] flex-1">
              {benefitsAnnual.map((b) => (
                <li key={b} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#FF2C64]" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <p className="text-center text-xs text-white/60 mt-6">
              Renovação automática. Cancelamento com reembolso integral em até 7 dias após a contratação.
            </p>

            <Btn
              innerRef={anualRef}
              href="https://pay.hotmart.com/P93318440Y?checkoutMode=2&off=5hogb7d0&bid=1763482808562?utm_source=enmodamais_site&utm_medium=cta&utm_campaign=assinatura_enmodamais&utm_content=botao_planos"
            >
              ASSINAR ANUAL
            </Btn>
             <CTAButton variant="primary" href="https://pay.hotmart.com/P93318440Y?checkoutMode=2&off=5hogb7d0&bid=1763482808562?utm_source=enmodamais_site&utm_medium=cta&utm_campaign=assinatura_enmodamais&utm_content=botao_planos" size="lg" className='block sm:hidden mb-2 mt-4'>
  ASSINAR ANUAL
</CTAButton>
          </article>
        </div>
      </div>
    </section>
  );
}

