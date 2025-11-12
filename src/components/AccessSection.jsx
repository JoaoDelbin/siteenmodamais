import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Check() {
  return (
    <svg aria-hidden="true" className="w-4 h-4 md:w-5 md:h-5 mt-1 shrink-0" viewBox="0 0 20 20" fill="#FF2C64">
      <path d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4l3.3 3.3 6.8-6.8a1 1 0 0 1 1.4 0z"/>
    </svg>
  );
}

export default function AccessSection() {

  const container = {
    initial: {},
    animate: {
      transition: { staggerChildren: 0.08 }
    }
  };

 
const fadeUpSoft = {
  initial: { opacity: 0, y: 12 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 60,  
      damping: 20,     
      mass: 2,        
    }
  }
};

  return (
    <section className="max-w-[1440px] bg-[#0D0A0B] mx-auto px-6 pt-6 pb-12 text-center mt-10">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold">O que você terá acesso</h2>
        <p className="mt-1 md:mt-4 text-md md:text-2xl text-gray-200">
          tudo dentro do ecossistema <span className="font-bold">enmoda+</span>
        </p>

        <div className="mt-8 mb-8">
          <motion.div
            variants={container}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col md:flex-row justify-center gap-10"
          >
            {/* Card 1 */}
            <motion.div
              variants={fadeUpSoft}
              className="rounded-xl bg-[#110E0F] border-l-2 border-[#FF2C64]
                         pt-2 pb-2 p-2 md:p-7 max-w-[560px] w-full
                         transition-shadow duration-300 ease-in-out
                         hover:shadow-[0_0_20px_8px_#FF2C64] will-change-transform"
            >
              <h3 className="text-xl md:text-3xl font-bold mb-4">Benefícios imediatos</h3>
              <ul className="space-y-3 text-md md:text-2xl">
                {[
                  "Mais de 300 aulas",
                  "Aulas semanais ao vivo",
                  "Plataforma de vagas",
                  "Comunidade exclusiva",
                  "Suporte pedagógico personalizado",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <Check /> <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              variants={fadeUpSoft}
              className="rounded-xl bg-[#110E0F] border-l-2 border-[#FF2C64]
                         pt-2 pb-2 p-2 md:p-7 max-w-[560px] w-full
                         transition-shadow duration-300 ease-in-out
                         hover:shadow-[0_0_20px_8px_#FF2C64] will-change-transform"
            >
              <h3 className="text-xl md:text-3xl font-bold mb-4">
                Cursos com os principais especialistas do mercado:
              </h3>
              <ul className="space-y-3 text-md md:text-2xl">
                {["Competências", "Fundamentos", "Soft Skills", "Ferramentas"].map((item) => (
                  <li key={item} className="flex gap-2">
                    <Check /> <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>

        <Link to="/#planoshome1"
          className="mt-7 font-bold px-3 py-1 text-base
                     md:px-4 md:py-1.5 md:text-lg
                     rounded-full bg-[#C2F738] text-[#32410A] transition duration-300 ease-in-out hover:shadow-[0_0_10px_2px_#C2F738]"
        >
          QUERO COMEÇAR AGORA
        </Link>
      </div>
    </section>
  );
}
