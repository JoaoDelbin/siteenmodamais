import { Routes, Route } from "react-router-dom";

import CourseMarquee from "./components/CourseMarquee";
import CommunityTransform from "./components/CommunityTransform";
import AccessSection from "./components/AccessSection";
import PhoneVerifyBar from "./components/PhoneVerifyBar";
import ConhecaEnmoda from "./components/ConhecaEnmoda";
import BenefitsCarousel from "./components/BenefitsCarousel";
import FaqSection from "./components/FaqSection";
import PlansSection from "./components/planos";
import Header from "./components/nav";
import ConteudoPage from "./pages/ConteudoPage.jsx";
import CourseDetail from "./pages/CourseDetail.jsx";

/* ===== Home (seu conteúdo atual) ===== */
function Home() {
  return (
    <main className="w-full bg-[#0D0A0B] text-gray-100 min-h-screen font-sans">
      <section className="min-h-[75vh] flex items-center">
        <div className="max-w-8xl mx-auto px-6 w-full text-center py-2 md:py-12">
          <h1 className="text-3xl md:text-5xl font-bold">
            Transforme sua paixão por moda em carreira.
          </h1>

          <p className="text-base md:text-2xl mt-1 md:mt-4 text-gray-300 text-center">
            Acesso ilimitado a cursos, mentoria e networking no maior ecossistema de moda do Brasil.{" "}
            <br className="hidden sm:block" />
            <span className="font-bold"> Mais de 20 anos</span> formando profissionais que hoje estão no mercado nacional e internacional.
          </p>

          <div className="mt-6 flex flex-col items-center gap-3 md:flex-row md:justify-center md:gap-4">
            <button className="font-bold px-3 py-1 text-base md:px-4 md:py-1.5 md:text-lg rounded-full bg-[#C2F738] text-[#32410A] transition duration-300 ease-in-out hover:shadow-[0_0_10px_2px_#C2F738]">
              QUERO COMEÇAR AGORA
            </button>

            <div className="flex items-center gap-1">
              <div className="flex -space-x-2.5">
                <div className="w-7 h-7 rounded-full bg-gray-300 border-2 border-[#0B0B15]" />
                <div className="w-7 h-7 rounded-full bg-gray-300 border-2 border-[#0B0B15]" />
                <div className="w-7 h-7 rounded-full bg-gray-300 border-2 border-[#0B0B15]" />
              </div>
              <span className="text-xs md:text-base font-semibold text-gray-300">
                +1.000 assinantes
              </span>
            </div>
          </div>

          <div className="mt-4 md:mt-10">
            <CourseMarquee />
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4 text-[14px] max-w-[1000px] mx-auto ">
            {[
              "Acesso ilimitado a cursos (Design, Consultoria, VM, etc.)",
              "Aulas ao vivo com profissionais do mercado",
              "Certificação reconhecida nacionalmente",
              "Mentoria e comunidade para networking",
              "Estude no seu ritmo, 24h por dia",
            ].map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-full bg-[#181516] text-[#fff] whitespace-wrap hover:ring-2 hover:ring-[#FF2C64]"
              >
                {t}
              </span>
            ))}
          </div>

          <button className="font-bold px-3 py-1 text-base mt-6 mb-10 md:mt-10 md:mb-6 md:px-4 md:py-1.5 md:text-lg rounded-full bg-[#C2F738] text-[#32410A] transition duration-300 ease-in-out hover:shadow-[0_0_10px_2px_#C2F738]">
            QUERO COMEÇAR AGORA
          </button>
        </div>
      </section>

      <section>
        <CommunityTransform />
      </section>
      <section>
        <AccessSection />
      </section>
      <section>
        <BenefitsCarousel />
      </section>
      <section>
        <PlansSection />
      </section>
      <section>
        <ConhecaEnmoda />
      </section>
      <section>
        <FaqSection />
      </section>
      <section>
        <PhoneVerifyBar />
      </section>
    </main>
  );
}

/* ===== App: Header + Rotas ===== */
export default function App() {
  return (
    <div className="bg-[#0D0A0B] min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/conteudo" element={<ConteudoPage />} />
        <Route path="/conteudo/:id" element={<CourseDetail />} />
        <Route path="*" element={<Home />} /> {/* fallback */}
      </Routes>
    </div>
  );
}

