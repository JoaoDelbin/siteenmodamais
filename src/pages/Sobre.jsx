import { Link } from "react-router-dom";
import { Calendar, Sparkles, Rocket, ArrowRight } from "lucide-react";

export default function Sobre() {
  return (
    <main className="min-h-screen w-full bg-[#0D0A0B] text-white">
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
        />
        <div className="relative max-w-[1200px] mx-auto px-6 pt-14 pb-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                Sobre a <span className="text-[#FF2C64]">enmoda+</span>
              </h1>
              <p className="mt-4 text-white/85 text-lg max-w-3xl">
                Mais de 20 anos formando talentos e conectando pessoas que fazem a moda acontecer.
              </p>

              <div className="mt-5 flex flex-wrap gap-2 text-sm">
                <span className="px-3 py-1 rounded-full bg-white/[0.05] border border-white/10">
                  Pioneiros no e-learning de moda
                </span>
                <span className="px-3 py-1 rounded-full bg-white/[0.05] border border-white/10">
                  Streaming 100% moda
                </span>
                <span className="px-3 py-1 rounded-full bg-white/[0.05] border border-white/10">
                  Comunidade & Mentorias
                </span>
              </div>

              <div className="mt-7 flex gap-3">
                <Link
                  to="/#planos"
                    className="font-bold px-3 py-1 text-base md:px-4 md:py-1.5 md:text-lg rounded-full bg-[#C2F738] text-[#32410A] transition duration-300 ease-in-out hover:shadow-[0_0_10px_2px_#C2F738]">
                  QUERO FAZER PARTE
                </Link>
                <Link
                  to="/conteudo"
                  className="px-5 py-2 rounded-full border  border-white/10 hover:bg-white/5"
                >
                  Explorar cursos
                </Link>
              </div>
            </div>

           <div className="hidden md:block">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 self-start">
              <StatChip number="+300" label="Aulas" />
              <StatChip number="+25.000" label="Alunos" />
              <StatChip number="+20" label="Anos de mercado" />
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* HISTÓRIA + FUNDADOR */}
      <section>
        <div className="max-w-[1200px] mx-auto px-6 pb-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
        
          <div className="lg:col-span-2 rounded-2xl border border-white/5 bg-white/[0.03] p-6 md:p-8">
            <h2 className="text-2xl md:text-[26px] font-extrabold">
              A história que nos trouxe até aqui
            </h2>

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

            {/* Timeline */}
            <div className="mt-8 relative">
              <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-white/10" />
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

          {/* Fundador */}
          <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-6 md:p-8">
            <div className="text-xs uppercase tracking-wide text-white/60">Fundador</div>

            <div className="mt-4 flex flex-col gap-4 items-start">

  <div className="w-full rounded-lg overflow-hidden border border-white/10 bg-white/[0.04]">
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
    <div className="text-lg font-extrabold leading-tight">Airton Embacher</div>
    <div className="text-xs text-white/70">Idealizador da EnModa e da enmoda+</div>
    <p className="mt-3 text-white/85 leading-relaxed">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae dolor et nunc
      condimentum placerat. Etiam lobortis hendrerit nisl id vestibulum...
    </p>
  </div>
</div>

          </div>
        </div>
      </section>

      
      <section>
        <div className="max-w-[1200px] mx-auto px-6 pb-16">
          <div className="rounded-2xl border border-white/5 bg-gradient-to-r from-[#131113] via-[#141214] to-[#121011] p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold">Nosso compromisso</h3>
            <p className="mt-3 text-white/85">
              Aproximar você do mercado com aprendizado prático, acessível e de qualidade.
            </p>
            <div className="mt-5 flex flex-col sm:flex-row sm:items-center gap-4">
              <Link
                to="/#planos"
                className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-[#C2F738] text-[#32410A] font-semibold hover:bg-[#B4E436]"
              >
                Quero fazer parte <ArrowRight className="w-4 h-4" />
              </Link>
              <span className="text-white/70">🚀 O futuro da moda passa por aqui.</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}



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
      <div className="text-[#FF2C64] font-extrabold">{year}</div>
      <div className="text-white/85 mt-1">{text}</div>
    </div>
  );
}
