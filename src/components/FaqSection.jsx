import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const QA = [
  {
    q: "Como funciona a plataforma?",
    a: `A enmoda+ é a primeira plataforma de streaming 100% focada em moda. 
Ao assinar, você tem acesso imediato a mais de 300 aulas online, materiais complementares, 
mentorias de carreira, aulas ao vivo semanais e uma comunidade exclusiva de profissionais. 
Tudo no app ou no site, no seu ritmo e com suporte de especialistas.`,
  },
  {
    q: "Aulas ao vivo são obrigatórias?",
    a: `Não! São um bônus para trocar experiências e tirar dúvidas em tempo real. 
Todo o conteúdo fica gravado para você assistir quando quiser. Flexibilidade total.`,
  },
  {
    q: "Posso cancelar ou testar?",
    a: `Plano Mensal: sem fidelidade. Renovação automática, cancelamento a qualquer momento.

Plano Anual: melhor custo-benefício, com acesso contínuo por 12 meses.
Cancelamento com reembolso integral disponível em até 7 dias após a contratação.`,
  },
];

function Item({ idx, openIdx, setOpenIdx, q, a }) {
  const open = openIdx === idx;
  return (
    <div className="rounded-xl bg-[#181516] border border-white/10 overflow-hidden">
      <button
        className="w-full flex items-start gap-3 text-left px-5 py-4 transition"
        aria-expanded={open}
        aria-controls={`faq-panel-${idx}`}
        onClick={() => setOpenIdx(open ? -1 : idx)}
      >
        <span className="mt-0.5">
          <HelpCircle className="w-5 h-5 text-[#C2F738]" />
        </span>
        <span className="flex-1 text-base md:text-lg font-semibold">
          {q}
        </span>
        <ChevronDown
          className={`w-5 h-5 shrink-0 transition-transform ${
            open ? "rotate-180 text-[#C2F738]" : "text-white/70"
          }`}
        />
      </button>

  
      <div
        id={`faq-panel-${idx}`}
        role="region"
        aria-labelledby={`faq-header-${idx}`}
        className={`px-5 pb-4 text-sm md:text-[15px] text-white/80 leading-relaxed transition-[grid-template-rows] duration-300 grid ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden whitespace-pre-line">
          {a}
        </div>
      </div>
    </div>
  );
}

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0);
  return (
    <section className="w-full bg-[#0D0A0B] text-white">
      <div className="max-w-[1440px] mx-auto px-6 py-12 md:py-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-extrabold">
            FAQ — <span className="text-[#FF2C64]">Perguntas rápidas</span>
          </h2>
          <p className="mt-2 text-sm md:text-[15px] text-white/70">
            Tire suas dúvidas em poucos segundos.
          </p>
        </div>

        <div className="grid gap-4 md:gap-5 md:max-w-3xl lg:max-w-4xl mx-auto">
          {QA.map((item, i) => (
            <Item
              key={i}
              idx={i}
              openIdx={openIdx}
              setOpenIdx={setOpenIdx}
              q={item.q}
              a={item.a}
            />
          ))}
        </div>

  
        <div className="mt-8 flex items-center justify-center gap-4">
          <button className="px-6 py-2 rounded-full bg-[#C2F738] text-[#32410A] text-sm font-semibold hover:bg-[#B4E436]">
            AINDA FICOU COM DÚVIDAS?
          </button>
          <span className="text-sm text-white/70">
            Fale com a gente no WhatsApp
          </span>
        </div>
      </div>
    </section>
  );
}
