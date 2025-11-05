
import { useEffect, useMemo, useState } from "react";
import Footer from "../components/rodape.jsx";

/* ====== dados ====== */
const CATEGORIAS = [
  {
    id: "sobre-a-enmoda-mais",
    titulo: "Sobre a enmoda+",
    itens: [
      {
        q: "O que é a enmoda+?",
        a: "A enmoda+ é a primeira plataforma de streaming 100% focada em moda no Brasil. São mais de 20 cursos, mentorias, aulas ao vivo, comunidade profissional e conteúdos exclusivos que você pode acessar pelo app ou pelo site."
      },
      {
        q: "Preciso ter experiência para começar?",
        a: "Não! A enmoda+ foi feita para todos os níveis: de iniciantes apaixonados por moda até profissionais que já atuam no mercado e querem se atualizar."
      }
    ]
  },
  {
    id: "cursos-e-aulas",
    titulo: "Sobre os cursos e aulas",
    itens: [
      {
        q: "As aulas ao vivo são obrigatórias?",
        a: "Não. Elas são um bônus para você interagir com professores e tirar dúvidas em tempo real. Todo o conteúdo fica gravado e disponível para assistir quando e quantas vezes quiser."
      },
      {
        q: "Quais cursos estão inclusos na assinatura?",
        a: "Todos! Ao assinar, você tem acesso ilimitado a todo o catálogo da enmoda+, incluindo cursos sobre design, consultoria de imagem, visual merchandising, coloração pessoal, varejo, comunicação, comportamento do consumidor, sustentabilidade e muito mais."
      },
      { q: "Recebo certificado?", a: "Sim! Ao concluir cada curso, você recebe um certificado digital de conclusão." }
    ]
  },
  {
    id: "planos-e-cancelamento",
    titulo: "Sobre planos e cancelamento",
    itens: [
      {
        q: "Posso cancelar a qualquer momento?",
        a: "Plano Mensal: não possui fidelidade. A renovação é automática, mas você pode cancelar quando quiser. Plano Anual: garante o melhor custo-benefício, com acesso contínuo por 12 meses. Em ambos os planos, você pode solicitar cancelamento com reembolso integral em até 7 dias após a contratação (direito de arrependimento)."
      },
      {
        q: "Como faço para cancelar minha assinatura?",
        a: `Para cancelar sua assinatura, basta acessar o link: /cancelamento 

Preencha o formulário com seus dados e nossa equipe realizará o cancelamento em até 48 horas úteis. 

IMPORTANTE: Se você assinou o plano anual, o cancelamento só é permitido dentro do prazo legal de 7 dias após a contratação. Após esse período, o plano segue ativo até o fim do ciclo contratado, assim como em outras plataformas de streaming no Brasil.`
      }
    ]
  },
  {
    id: "acesso-e-suporte",
    titulo: "Sobre acesso e suporte",
    itens: [
      { q: "Como faço para acessar a plataforma?", a: "Basta assinar e fazer login pelo site ou baixar o app enmoda+ no seu celular." },
      {
        q: "E se eu tiver dúvidas ou problemas?",
        a: "Nossa equipe de suporte está disponível para ajudar. WhatsApp: +55 (11) 96596-3613 • E-mail: contato@enmodamais.com.br"
      }
    ]
  }
];

/* ====== UI ====== */
function AcordeaoItem({ q, a, aberto, onToggle }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.04]">
      <button
        onClick={onToggle}
        className="w-full text-left px-4 md:px-5 py-3 md:py-4 flex items-start justify-between gap-4"
        aria-expanded={aberto}
      >
        <span className="font-semibold leading-snug">{q}</span>
        <span
          className={`mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/10 text-sm transition ${aberto ? "rotate-45" : ""}`}
          aria-hidden
        >
          +
        </span>
      </button>
      {aberto && (
        <div className="px-4 md:px-5 pb-4 -mt-1 text-white/85 leading-relaxed">
          <p className="whitespace-pre-line">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function Duvidas() {
  const [busca, setBusca] = useState("");
  const [abertos, setAbertos] = useState({});
  const [abaAtiva, setAbaAtiva] = useState(CATEGORIAS[0].id);

  useEffect(() => {
    document.title = "Enmoda Mais - Plataforma de Cursos de Moda";
  }, []);

  const view = useMemo(() => {
    const q = busca.trim().toLowerCase();

    if (q) {
      const cats = CATEGORIAS.map((cat) => ({
        ...cat,
        itens: cat.itens.filter(
          (i) => i.q.toLowerCase().includes(q) || i.a.toLowerCase().includes(q)
        )
      })).filter((cat) => cat.itens.length > 0);

      return { modo: "busca", titulo: `Resultados da busca`, categorias: cats };
    }

    const cat = CATEGORIAS.find((c) => c.id === abaAtiva) || CATEGORIAS[0];
    return { modo: "abas", titulo: cat.titulo, categorias: [cat] };
  }, [busca, abaAtiva]);

  const abrirOuFechar = (key) =>
    setAbertos((p) => ({ ...p, [key]: !p[key] }));

  return (
    <main className="min-h-screen w-full bg-[#0D0A0B] text-white">
      <div className="max-w-[1100px] mx-auto px-6 py-10">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-semibold">
            Dúvidas Frequentes - <span className="text-[#FF2C64] font-light">enmoda+</span>
          </h1>
          <p className="mt-2 text-white/80">
            Aqui você encontra respostas rápidas para as principais perguntas sobre a nossa plataforma.
          </p>
        </div>

        {/* busca + abas */}
        <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4 mb-6">
          <input
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            placeholder="Buscar por palavra-chave…"
            className="w-full md:flex-1 rounded-full bg-white/5 border border-white/10 px-4 py-2 outline-none focus:ring-2 focus:ring-[#FF2C64]/60"
          />
          <div className="flex gap-2 overflow-x-auto no-scrollbar">
            {CATEGORIAS.map((c) => {
              const ativa = abaAtiva === c.id && !busca;
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => {
                    setBusca("");
                    setAbaAtiva(c.id);
                  }}
                  className={`px-3 py-1.5 rounded-full border text-sm whitespace-nowrap transition
                    ${ativa ? "border-[#FF2C64] bg-[#FF2C64]/10" : "border-white/10 bg-white/[0.06] hover:bg-white/[0.1]"}`}
                >
                  {c.titulo}
                </button>
              );
            })}
          </div>
        </div>

        {/* título da seção atual */}
        <h2 className="text-xl md:text-2xl font-bold mb-4">{view.titulo}</h2>

        {/* lista */}
        {view.categorias.length > 0 ? (
          view.categorias.map((cat) => (
            <section key={cat.id} className="scroll-mt-24 mb-8">
              {view.modo === "busca" && (
                <div className="text-white/60 text-sm mb-2">{cat.titulo}</div>
              )}
              <div className="grid grid-cols-1 gap-3">
                {cat.itens.map((item, idx) => {
                  const key = `${cat.id}-${idx}`;
                  return (
                    <AcordeaoItem
                      key={key}
                      q={item.q}
                      a={item.a}
                      aberto={!!abertos[key]}
                      onToggle={() => abrirOuFechar(key)}
                    />
                  );
                })}
              </div>
            </section>
          ))
        ) : (
          <div className="text-white/70">Nenhum resultado para “{busca}”.</div>
        )}

        
        <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-5 md:p-6 shadow-[0_0_24px_rgba(255,44,100,0.08)]">
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
            <div className="text-lg md:text-xl font-bold">✨ Ainda tem dúvidas?</div>
            <div className="text-white/80 md:flex-1">
              Fale com a gente pelo WhatsApp e descubra como a enmoda+ pode transformar sua carreira na moda.
            </div>
            <div className="flex gap-2">
              <a
                href="https://wa.me/5511965963613?text=Oi!%20Quero%20saber%20mais%20sobre%20a%20enmoda%2B"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-full bg-[#C2F738] text-[#32410A] font-semibold hover:bg-[#B4E436]"
              >
                WhatsApp
              </a>
              
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar{display:none}
        .no-scrollbar{-ms-overflow-style:none;scrollbar-width:none}
      `}</style>
      
    </main>
  );
}
