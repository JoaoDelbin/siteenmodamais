// src/pages/Assinatura.jsx
import { Link } from "react-router-dom";
import { useMemo } from "react";
import {
  CheckCircle2,
  Users,
  PlayCircle,
  GraduationCap,
  CalendarClock,
  Compass,
  ArrowRight,
} from "lucide-react";

import COURSES from "../assets/courses";
import { capaDoCurso } from "../assets/imagens";

import PlansSection from "../components/planos";
import FaqSection, { FAQ_ALL } from "../components/FaqSection";
import { DiferenciaisSection } from "../components/DIFassinatura";
import CTAButton from "../components/CTA";
import Footer from "../components/rodape.jsx";


export default function Assinatura() {

  const masterclasses = useMemo(() => COURSES.slice(0, 5), []);

  return (
    <main className="min-h-screen w-full bg-[#0D0A0B] text-white">
      
      <section className="pt-10 md:pt-12 pb-4">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr,0.9fr] gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                Estude moda com os maiores experts do Brasil.
                <br className="hidden sm:block" />
                <span className="text-white/85 text-xl md:text-2xl block mt-3 font-normal">
                  A primeira plataforma de streaming de moda da América Latina.
                  Cursos, mentorias, networking e certificação em um só lugar.
                </span>
              </h1>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link
                  to="#planosass"
                  className="font-bold px-3 py-1 text-base md:px-4 md:py-1.5 md:text-lg rounded-full bg-[#C2F738] text-[#32410A] transition duration-300 ease-in-out hover:shadow-[0_0_10px_2px_#C2F738]"
                >
                  QUERO COMEÇAR AGORA
                </Link>

                <Link
                  to="/conteudo"
                  className="font-bold px-3 py-1 text-base md:px-4 md:py-1.5 md:text-lg rounded-full bg-black text-white border-2 border-white/80 hover:bg-white/10 transition"
                >
                  Explorar cursos
                </Link>
              </div>

              <p className="mt-4 text-white/70 text-sm">
                +25.000 alunos já transformaram sua carreira com a EnModa.
              </p>
            </div>

           
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/[0.04] aspect-video grid place-items-center">
              <div className="flex items-center gap-3 text-white/80">
                <PlayCircle className="w-7 h-7" />
                <span className="text-sm">Vídeo de apresentação</span>
              </div>
            </div>
          </div>
        </div>
        
      </section>

      
      <section className="mt-6 mb-6">
      <DiferenciaisSection />
      <div className="text-center"><CTAButton to="/assinatura/#planosass" variant="primary" size="md" className='mb-2 md:mb-0'>
  QUERO COMEÇAR AGORA
</CTAButton></div>
        </section>
     
      <section className="py-6">
        <div className="max-w-[1200px] mx-auto px-6">
          <h3 className="text-3xl md:text-5xl font-semibold text-center">
            O que você vai acessar ao assinar
          </h3>

          <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {FEATURES.map((f) => (
              <li
                key={f.text}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4"
              >
                <f.icon className="mt-0.5 w-5 h-5 sm:w-6 sm:h-6 text-[#FF2C64]" />
                <span className="text-white/85">{f.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

     
<section className="py-8">
  <div className="max-w-[1200px] mx-auto px-6">
    <h3 className="text-2xl md:text-[26px] font-bold">Masterclasses</h3>

   
    <div
      className="
        mt-4
        flex gap-3 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory
        sm:grid sm:grid-cols-3 sm:gap-4 sm:overflow-visible sm:snap-none
        md:grid-cols-5
      "
    >
      {masterclasses.map((curso) => (
        <div
          key={curso.id}
          className="
            aspect-[2/4] rounded-[22px] overflow-hidden bg-black/20 border border-white/10
            shrink-0 basis-[70%] snap-start
            sm:shrink sm:basis-auto sm:snap-none
          "
        >
          <img
            src={capaDoCurso(curso)}
            alt={curso.title}
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src =
                'https://images.unsplash.com/photo-1520975940468-88d8a520f3d8?q=80&w=720&auto=format';
            }}
          />
        </div>
      ))}
    </div>

    <div className="mt-5">
      <Link
        to="/conteudo"
        className="font-bold px-3 py-1 text-base md:px-4 md:py-1.5 md:text-lg rounded-full bg-black text-white border-2 border-white/80 hover:bg-white/10 transition"
      >
        Ver todos os cursos
      </Link>
    </div>
  </div>
</section>


      
      <section id="planosass" className="pt-4 pb-12">
        <PlansSection />
      </section>

     
      <section className="pb-16">
        <div className="max-w-[1200px] mx-auto px-6">
         <FaqSection items={[FAQ_ALL[3], FAQ_ALL[4], FAQ_ALL[5]]} />
        </div>
      </section>
      
    </main>
  );
}

/* ================= helpers locais ================= */
const FEATURES = [
  { icon: PlayCircle,     text: "+300 aulas de moda disponíveis agora",            },
  { icon: Compass,        text: "Trilha personalizada para sua carreira",           },
  { icon: CalendarClock,  text: "Aula ao vivo toda semana com especialistas",      },
  { icon: Users,          text: "Comunidade exclusiva para networking",            },
  { icon: GraduationCap,  text: "Certificados reconhecidos",                        },
  { icon: CheckCircle2,   text: "Plataforma de vagas de moda",                    },
];