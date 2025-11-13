import { Link } from "react-router-dom";
import {
  Calendar,
  Sparkles,
  Rocket,
  ArrowRight,
  CheckCircle2,
  PartyPopper,
  Building2,
} from "lucide-react";
import CTAButton from "../components/CTA"
import Footer from "../components/rodape.jsx";

export default function Sobre() { 
  return (
    <main className="min-h-screen w-full bg-[#0D0A0B] text-white">
      {/* HERO */}
      <section className="relative">
        <div className="pointer-events-none absolute inset-0" />
        <div className="relative max-w-[1200px] mx-auto px-6 pt-14 pb-10">
          <div className="text-center grid grid-cols-1 gap-8">
            <div>
              <h1 className="text-5xl md:text-7xl font-semibold leading-tight">
                Sobre a <span className="text-[#FF2C64] font-light">enmoda+</span>
              </h1>
              <p className="mt-4 text-white/85 text-lg">
                Mais de 20 anos formando talentos e conectando pessoas que fazem a moda acontecer.
              </p>

              <div className="mt-5 flex flex-wrap gap-2 text-sm hidden ">
                <span className="px-3 py-1 rounded-full bg-[#181516] ">
                  Pioneiros no e-learning de moda
                </span>
                <span className="px-3 py-1 rounded-full bg-[#181516] ">
                  Streaming 100% moda
                </span>
                <span className="px-3 py-1 rounded-full bg-[#181516]">
                  Comunidade & Mentorias
                </span>
              </div>

              <div className="mt-7 flex-row text-center">
                

<CTAButton variant="primary" to="/assinatura#planosass" size="md" className='mb-3 md:mb-0 mr-4'>
  QUERO COMEÇAR AGORA
</CTAButton>

<CTAButton to="/conteudo" variant="outline" size="md">
  ver cursos
</CTAButton>
              </div>
            </div>

            
          </div>
        </div>
      </section>

      {/* HISTÓRIA + FUNDADOR */}
      <section>
        <div className="max-w-[1200px] mx-auto px-6 pb-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="lg:col-span-1 rounded-2xl border border-white/5 bg-[#110E0F] p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold">A história que nos trouxe até aqui</h2>

            <div className="mt-4 space-y-4 text-white/85 leading-relaxed">
              <p>
                A EnModa – Escola de Negócios da Moda nasceu em 2004, fundada por Airton Embacher, com o propósito de
                formar profissionais preparados para transformar o mercado da moda.
              </p>
              <p>
                Foram mais de 20 anos de ensino, pioneirismo no e-learning de moda no Brasil, milhares de alunos
                formados e carreiras transformadas em todas as áreas do setor.
              </p>
            </div>

           
            <div className="mt-8 relative">
              <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-[#110E0F]" />
              <TimelineItem
                icon={<Calendar className="w-4 h-4" />}
                year="2004"
                text="Fundação da EnModa e início da jornada no ensino de negócios da moda."
              />
              <TimelineItem
                icon={<Sparkles className="w-4 h-4" />}
                year="2023"
                text="Surge a ideia de aproximar teoria, prática e networking em um só lugar."
              />
              <TimelineItem
                icon={<Rocket className="w-4 h-4" />}
                year="2024"
                text="Lançamento oficial da enmoda+: streaming de cursos 100% de moda no Brasil."
              />
            </div>
          </div>

          
          <div className="rounded-2xl border border-white/5 bg-[#110E0F] p-6 md:p-8">
            <div className="text-xs uppercase tracking-wide text-white/60">Fundador</div>

            <div className="mt-4 flex flex-col gap-4 items-start">
              <div className="w-full rounded-lg overflow-hidden border border-white/10 bg-[#110E0F]">
                <img
                  src="/about/fundador.jpg"
                  alt="Airton Embacher"
                  className="w-full h-[260px] object-cover md:h-[320px]"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src =
                      "https://cdn.carreirafashion.com.br/site/imagens/quemsomos_fundador.jpg";
                  }}
                />
              </div>
              

              <div>
                <div className="text-lg font-bold leading-tight">Airton Embacher</div>
                
                <p className="mt-3 text-white/85 leading-relaxed">
                  Airton Embacher iniciou sua trajetória profissional na década de 1970, quando a C&A chegou ao Brasil. Após ser aprovado em um processo seletivo para a área de compras, tornou-se executivo da marca, sendo responsável por introduzir no varejo nacional a venda de conjuntos coordenados, uma prática até então inédita no mercado.

Com passagem pela indústria têxtil e experiência internacional em pesquisa de tendências, construiu uma carreira sólida unindo negócios, comportamento e criatividade. É autor de livros de moda, Doutor em Comunicação e Semiótica e Mestre em Psicologia Social pela PUC-SP.

Foi Diretor das áreas de Comunicação, Artes, Design e Moda e Coordenador dos cursos de Moda da Universidade Anhembi Morumbi, além de Diretor de Novos Negócios da Escola Panamericana de Arte.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
<div className="mt-2 mb-4 text-center md:hidden">
                

      <CTAButton variant="primary" to="/assinatura#planosass" size="md" className='mb-2 md:mb-0'>
        QUERO COMEÇAR AGORA
      </CTAButton>
              </div>
     
<section>
  <div className="max-w-[1200px] mx-auto px-6 pb-8">
    <h3 className="text-2xl md:text-3xl font-bold">
      Hoje, a enmoda+ já reúne:
    </h3>

    <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
      {[
        "Mais de 300 aulas exclusivas, com professores que são referência no mercado.",
        "Mentorias de carreira ao vivo e gravadas.",
        "Comunidade ativa de profissionais e estudantes de moda.",
        "Conteúdos que vão de design, varejo e branding até consultoria de imagem, sustentabilidade e inovação.",
      ].map((t) => (
        <li
          key={t}
          className="flex items-start gap-3 rounded-xl border border-white/10 bg-[#110E0F] p-4"
        >
          
          <span className="shrink-0 inline-flex items-center justify-center w-5 h-5 rounded-full">
            <CheckCircle2
              aria-hidden
              className="w-4 h-4 text-[#FF2C64]"
              strokeWidth={2.4}
            />
          </span>

          <span className="text-white/85 leading-relaxed">{t}</span>
        </li>
      ))}
    </ul>
  </div>
</section>

<div className="mt-2 mb-4 text-center md:hidden">
                

<CTAButton variant="primary" to="/assinatura#planosass" size="md" className='mb-2 md:mb-0'>
  QUERO COMEÇAR AGORA
</CTAButton>
              </div>

              

      
      <section>
        <div className="max-w-[1200px] mx-auto px-6 pb-12">
          <h3 className="text-2xl md:text-[26px] font-bold">Primeiros passos e conquistas</h3>

          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* SPFW */}
            <div className="rounded-2xl border border-white/5 bg-[#110E0F] p-5">
              <div className="flex items-center gap-3">
                <span className="inline-grid place-items-center w-9 h-9 rounded-full bg-[#110E0F] border border-white/10">
                  <PartyPopper className="w-5 h-5 text-[#FF2C64]" />
                </span>
                <div className="text-lg font-bold">Experiência no SPFW</div>
              </div>
              <p className="mt-3 text-white/85 leading-relaxed">
                Levamos os <strong>5 primeiros assinantes</strong> da plataforma para viver uma experiência
                inesquecível no <strong>São Paulo Fashion Week</strong>.
              </p>
            </div>

            {/* Riachuelo */}
            <div className="rounded-2xl border border-white/5 bg-[#110E0F] p-5">
              <div className="flex items-center gap-3">
                <span className="inline-grid place-items-center w-9 h-9 rounded-full bg-[#110E0F] border border-white/10">
                  <Building2 className="w-5 h-5 text-[#FF2C64]" />
                </span>
                <div className="text-lg font-bold">Formação corporativa</div>
              </div>
              <p className="mt-3 text-white/85 leading-relaxed">
                Em menos de um ano, fomos responsáveis pelo <strong>treinamento do time de trainees da Riachuelo</strong>,
                uma das maiores varejistas de moda do Brasil.
              </p>
            </div>
          </div>
        </div>
      </section>

     
      <section>
        <div className="max-w-[1200px] mx-auto px-6 pb-16">
          <div className="rounded-2xl border border-white/5 bg-[#110E0F] p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold">Nosso compromisso</h3>
            <p className="mt-3 text-white/85">
              Aproximar você do mercado com aprendizado prático, acessível e de qualidade.
            </p>
            <div className="mt-5 flex flex-col sm:flex-row sm:items-center gap-4">
              <CTAButton variant="primary" to="/assinatura#planosass" size="md" className='mb-2 md:mb-0'>
  QUERO COMEÇAR AGORA <ArrowRight className="w-4 h-4" />
</CTAButton> 
              
              <span className="text-white/70">🚀 O futuro da moda passa por aqui.</span>
            </div>
          </div>
        </div>
      </section>
    
    </main>
  );
}

/* === helpers === */
function StatChip({ number, label }) {
  return (
    <div className="rounded-xl bg-black/[0.04] border border-black/10 px-6 py-4 text-center shadow-[0_4px_12px_rgba(255,45,85,0.3)]">
      <div className="text-2xl md:text-3xl font-semibold text-[#FF2C64]">{number}</div>
      <div className="text-[11px] uppercase tracking-wide text-white/75 mt-1">{label}</div>
    </div>
  );
}

function TimelineItem({ icon, year, text }) {
  return (
    <div className="relative pl-12 py-5">
      <div className="absolute left-3 top-5 w-6 h-6 rounded-full bg-[#0D0A0B] border border-white/10 grid place-items-center text-white/80">
        {icon}
      </div>
      <div className="text-[#FF2C64] font-bold">{year}</div>
      <div className="text-white/85 mt-1">{text}</div>
    </div>
  );
}
