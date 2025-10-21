// src/components/DIFassinatura.jsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// animações no mesmo estilo do AccessSection
const container = {
  initial: {},
  animate: { transition: { staggerChildren: 0.08 } },
};

const fadeUpSoft = {
  initial: { opacity: 0, y: 12 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 60, damping: 20, mass: 2 },
  },
};

function Check() {
  return (
    <svg aria-hidden="true" className="w-4 h-4 md:w-5 md:h-5 mt-1 shrink-0" viewBox="0 0 20 20" fill="#FF2C64">
      <path d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4l3.3 3.3 6.8-6.8a1 1 0 0 1 1.4 0z"/>
    </svg>
  );
}

function Cross() {
  return (
    <svg aria-hidden="true" className="w-4 h-4 md:w-5 md:h-5 mt-1 shrink-0" viewBox="0 0 24 24" fill="none" stroke="#FF2C64" strokeWidth="2.4" strokeLinecap="round">
      <path d="M6 6L18 18M18 6L6 18" />
    </svg>
  );
}

export function DiferenciaisSection() {
  const negativos = [
    "Cursos genéricos",
    "Professores sem atuação no mercado",
    "Sem networking",
    "Conteúdo desatualizado",
    "Sem reconhecimento",
  ];

  const positivos = [
    "Cursos 100% moda (design, consultoria, varejo, comunicação, negócios)",
    "Professores que estão no mercado hoje",
    "Networking e comunidade exclusiva",
    "Aulas ao vivo + biblioteca gravada",
    "Certificação reconhecida",
  ];

  return (
    <section className="max-w-[1440px] bg-[#0D0A0B] mx-auto px-6 pt-6 pb-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-medium text-center">Por que a <span className="text-[#FF2C64] font-semibold">enmoda+</span> é diferente</h2>
        <p className="mt-1 md:mt-3 text-md md:text-xl text-gray-200 text-center">
          Comparativo simples para você decidir com segurança.
        </p>

        <div className="mt-8">
          <motion.div
            variants={container}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col md:flex-row justify-center gap-10"
          >
          

            {/* enmoda+ */}
            <motion.div
              variants={fadeUpSoft}
              className="rounded-xl bg-[#110E0F] border-l-2 border-[#FF2C64]
                         pt-2 pb-2 p-3 md:p-7 max-w-[560px] w-full
                         transition-shadow duration-300 ease-in-out
                         hover:shadow-[0_0_20px_8px_#FF2C64]"
            >
              <h3 className="text-xl md:text-3xl font-semibold mb-4 text-[#FF2C64]">enmoda+</h3>
              <ul className="space-y-5 text-[15px] md:text-xl">
                {positivos.map((item) => (
                  <li key={item} className="flex gap-2">
                    <Check /> <span>{item}</span>
                  </li>
                ))}
              </ul>

            
            </motion.div>
              {/* Tradicionais */}
            <motion.div
              variants={fadeUpSoft}
              className="rounded-xl bg-[#110E0F] border-l-2 border-white/20
                         pt-2 pb-2 p-3 md:p-7 max-w-[560px] w-full"
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-4">Plataformas tradicionais</h3>
              <ul className="space-y-5 text-[15px] md:text-xl text-white/80">
                {negativos.map((item) => (
                  <li key={item} className="flex gap-2 text-white/75">
                    <Cross /> <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
    </section>
  );
}

