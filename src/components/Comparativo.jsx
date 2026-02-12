import { Link } from "react-router-dom";

export default function ComparativoEnmoda() {
  return (
    <section className="w-full bg-gradient-to-r from-[#0D0A0B] via-[#171415] to-[#0D0A0B] text-white">
      <div className="max-w-[1240px] mx-auto px-6 py-16">

        {/* Título */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold">
            EnModa ou <span className="text-[#FF2C64]">EnModa+</span>?
          </h2>
          <p className="mt-4 text-white/80 text-[15px] md:text-[16px]">
            Duas propostas. Um mesmo padrão de excelência.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* ENMODA+ */}
          <div className="rounded-xl bg-[#110E0F] border border-white/10 p-8
                          shadow-[0_0_10px_rgba(0,0,0,0.6)]
                          hover:shadow-[0_0_18px_4px_#FF2C64]
                          transition duration-300">

            <h3 className="text-2xl font-bold text-[#FF2C64]">
              EnModa+
            </h3>

            <p className="mt-2 text-white/70 text-sm">
              Flexibilidade, volume de conteúdo e desenvolvimento contínuo
            </p>

            <ul className="mt-6 space-y-3 text-white/85 text-[15px] md:text-[16px]">
              <li>• Cursos de 8h a 32h</li>
              <li>• Acesso a diversos temas de desenvolvimento profissional</li>
              <li>• Conteúdo 100% flexível</li>
              <li>• Sem tarefas, sem exercícios e sem prazos</li>
              <li>• Aprenda no seu tempo, de forma leve e prática</li>
              <li>• Ideal para quem busca atualização, inspiração e crescimento constante</li>
            </ul>
          </div>

          {/* ENMODA */}
          <div className="rounded-xl bg-[#110E0F] border border-white/10 p-8
                          shadow-[0_0_10px_rgba(0,0,0,0.6)]
                          hover:shadow-[0_0_18px_4px_#FF2C64]
                          transition duration-300">

            <h3 className="text-2xl font-bold text-white">
              EnModa
            </h3>

            <p className="mt-2 text-white/70 text-sm">
              Profundidade, estrutura e formação completa
            </p>

            <ul className="mt-6 space-y-3 text-white/85 text-[15px] md:text-[16px]">
              <li>• Cursos intensivos e de formação</li>
              <li>• Acompanhamento de professores</li>
              <li>• Exercícios, atividades práticas e avaliações</li>
              <li>• Provas e entregas</li>
              <li>• Conteúdos mais densos e aprofundados</li>
              <li>• Ideal para quem busca formação profissional completa e desenvolvimento técnico</li>
            </ul>
          </div>

        </div>

        {/* Texto de decisão */}
        <div className="mt-14 text-center max-w-3xl mx-auto">
          <p className="text-white/80 text-[15px] md:text-[17px] leading-relaxed">
            Você escolhe o formato que faz mais sentido para o seu momento de carreira
            ou pode, inclusive, combinar os dois.
          </p>
        </div>

        {/* CTA Duplo */}
        <div className="mt-8 flex flex-col items-center gap-4
                        md:flex-row md:justify-center md:gap-6">

          <Link
            to="#planoshome3"
            className="font-bold px-4 py-2 text-base
                       md:px-6 md:py-2.5 md:text-lg
                       rounded-full bg-[#C2F738] text-[#32410A]
                       transition duration-300 ease-in-out
                       hover:shadow-[0_0_10px_2px_#C2F738]">
            ASSINE A ENMODA+
          </Link>

          <a
  href="https://enmoda.com.br/cursos"
  target="_blank"
  rel="noopener noreferrer"
  className="font-bold px-4 py-2 text-base
             md:px-6 md:py-2.5 md:text-lg
             rounded-full border border-white/30 text-white
             transition duration-300 ease-in-out
             hover:border-[#FF2C64] hover:text-[#FF2C64]">
  CONHEÇA OS CURSOS DA ENMODA
</a>

        </div>

      </div>
    </section>
  );
}