import { CheckCircle, XCircle, BadgePercent } from "lucide-react";

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
  return (
    <section className="bg-[#0D0A0B] text-white py-14">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold mb-10">
          Escolha o plano ideal para você
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <article className="rounded-xl bg-[#181516] border border-white/10 p-6 md:p-8 flex flex-col">
            <header className="text-center mb-6">
              <h3 className="text-xl font-extrabold tracking-wide">PLANO MENSAL</h3>
              <div className="mt-2 text-sm text-white/60 line-through">R$200</div>
              <div className="mt-1 text-4xl font-extrabold text-[#FF2C64]">R$169,10</div>
              <p className="text-xs text-white/60 mt-1">valor por ano R$2.029</p>
            </header>

            <ul className="space-y-3 text-sm md:text-[15px] flex-1">
              {benefitsMonthly.map((b) => (
                <li key={b} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#FF2C64]" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <button className="mt-6 w-full py-3 rounded-full bg-[#C2F738] text-[#32410A] font-semibold hover:bg-[#B4E436]">
              ASSINAR MENSAL
            </button>
          </article>

          <article className="relative rounded-xl bg-[#181516] border border-[#FF2C64] p-6 md:p-8 flex flex-col transition duration-300 ease-in-out hover:shadow-[0_4px_20px_2px_#FF2C64]">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FF2C64] text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
              <BadgePercent className="w-5 h-5" /> MAIS VANTAJOSO
            </span>

            <header className="text-center mb-6">
              <h3 className="text-xl font-extrabold tracking-wide">PLANO ANUAL</h3>
              <div className="mt-2 text-sm text-white/60 line-through">12x R$80 (total R$960)</div>
              <div className="mt-1 text-3xl md:text-4xl font-extrabold">
                12x <span className="text-[#FF2C64]">R$67,15</span>
              </div>
              <p className="text-base md:text-lg font-extrabold mt-1">Apenas R$805,80 por ano</p>
            </header>

            <ul className="space-y-3 text-sm md:text-[15px] flex-1">
              {benefitsAnnual.map((b) => (
                <li key={b} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#FF2C64]" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <button className="transition duration-300 ease-in-out hover:shadow-[0_0_8px_1px_#C2F738] mt-6 w-full py-3 rounded-full bg-[#C2F738] text-[#32410A] font-semibold hover:bg-[#B4E436]">
              ASSINAR ANUAL
            </button>
          </article>
        </div>

        <p className="text-center text-xs text-white/50 mt-6">
          Renovação automática. Cancelamento com reembolso integral em até 7 dias após a contratação.
        </p>
      </div>
    </section>
  );
}

