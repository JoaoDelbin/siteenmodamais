// src/components/FaqSection.jsx
import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";


export const FAQ_ALL = [
  {
    q: "Como funciona a plataforma?",
    a: `A enmoda+ é a primeira plataforma de streaming 100% focada em moda. Ao assinar, você tem acesso imediato a mais de 300 aulas online, materiais complementares, mentorias de carreira, aulas ao vivo semanais e uma comunidade exclusiva de profissionais. Tudo no app ou no site, no seu ritmo e com suporte de especialistas.`,
  },
  {
    q: "Aulas ao vivo são obrigatórias?",
    a: `Não! São um bônus para trocar experiências e tirar dúvidas em tempo real. Todo o conteúdo fica gravado para você assistir quando quiser. Flexibilidade total.`,
  },
  {
    q: "Posso cancelar ou testar?",
    a: `Plano Mensal: sem fidelidade. Renovação automática, cancelamento a qualquer momento.

Plano Anual: melhor custo-benefício, com acesso contínuo por 12 meses.
Cancelamento com reembolso integral disponível em até 7 dias após a contratação.`,
  },
  {
    q: "Preciso ter experiência para começar?",
    a: `Não! A enmoda+ é para todos: desde quem está dando os primeiros passos no mundo da moda até profissionais que já atuam na área e querem se atualizar. Você pode começar do zero ou aprofundar o que já sabe.`,
  },
  {
    q: "Recebo certificado?",
    a: `Sim! Ao concluir cada curso, você recebe um certificado digital que pode ser adicionado ao currículo ou ao LinkedIn. É uma forma de comprovar suas novas habilidades e fortalecer sua carreira.`,
  },
  {
    q: "Posso cancelar a qualquer momento?",
    a: `Sim. No plano mensal, você pode cancelar quando quiser, sem fidelidade. No plano anual, você garante o melhor valor e acesso contínuo por 12 meses, com direito a cancelamento e reembolso em até 7 dias após a contratação.`,
  },
];


function Item({ idx, openIdx, setOpenIdx, q, a }) {
  const open = openIdx === idx;

  return (
    <div className="rounded-xl bg-[#181516] border border-white/10 overflow-hidden">
      <button
        id={`faq-header-${idx}`}
        className="w-full flex items-start gap-3 text-left px-5 py-4 transition"
        aria-expanded={open}
        aria-controls={`faq-panel-${idx}`}
        onClick={() => setOpenIdx(open ? -1 : idx)}
      >
        <span className="mt-0.5">
          <HelpCircle className="w-5 h-5 text-[#C2F738]" />
        </span>
        <span className="flex-1 text-base md:text-lg font-semibold">{q}</span>
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
        <div className="overflow-hidden whitespace-pre-line">{a}</div>
      </div>
    </div>
  );
}


export default function FaqSection({
  items,
  initialOpen = 0,
  showCtas = true,
}) {
  const data = items && items.length ? items : FAQ_ALL;
  const [openIdx, setOpenIdx] = useState(initialOpen);

  return (
    <section className="w-full bg-[#0D0A0B] text-white">
      <div className="max-w-[1440px] mx-auto px-6 py-12 md:py-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">
            FAQ — <span className="text-[#FF2C64]">Perguntas rápidas</span>
          </h2>
          <p className="mt-2 text-sm md:text-[15px] text-white/70">
            Tire suas dúvidas em poucos segundos.
          </p>
        </div>

        <div className="grid gap-4 md:gap-5 md:max-w-3xl lg:max-w-4xl mx-auto">
          {data.map((item, i) => (
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

        {showCtas && (
          <div className="mt-8 flex items-center justify-center gap-4">
            <p
              
              className="inline-flex items-center justify-center rounded-full font-bold transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#FF2C64]/50
              "
            >
              AINDA FICOU COM DÚVIDAS?
            </p>
            <a
              href="https://wa.me/5511965963613?text=Oi!%20Quero%20saber%20mais%20sobre%20a%20enmoda%2B"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-white/70 hover:text-white"
            >
              Fale com a gente no WhatsApp
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

