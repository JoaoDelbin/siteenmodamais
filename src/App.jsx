import { Routes, Route } from "react-router-dom";
import { Link } from 'react-router-dom';

import HotmartPonte from "./components/hotmartponte.jsx";


import WhatsAppFloat from "./components/WhatsFlutuante.jsx";
import Footer from "./components/rodape.jsx";
import ScrollToTop from "./components/ScrollTop.jsx";
import CourseMarquee from "./components/CourseMarquee";
import CommunityTransform from "./components/CommunityTransform";
import AccessSection from "./components/AccessSection";
import PhoneVerifyBar from "./components/PhoneVerifyBar";
import ConhecaEnmoda from "./components/ConhecaEnmoda";
import BenefitsCarousel from "./components/BenefitsCarousel";
import FaqSection, { FAQ_ALL } from "./components/FaqSection.jsx";
import PlansSection from "./components/planos";
import ComparativoEnmoda from "./components/Comparativo.jsx";
import Header from "./components/nav";

import ConteudoPage from "./pages/ConteudoPage.jsx";
import CourseDetail from "./pages/CourseDetail.jsx";
import Assinantes from "./pages/Assinantes.jsx";
import Sobre from "./pages/Sobre.jsx";
import Duvidas from "./pages/Duvidas.jsx";
import Assinatura from "./pages/Assinatura.jsx";
import Enterprise from "./pages/Enterprise.jsx";

import PoliticaPrivacidade from "./pages/PoliticaPrivacidade";
import Cancelamento from "./pages/Cancelamento";

import a1 from "./assets/assinantes/assinante1.jpg";
import a2 from "./assets/assinantes/assinante2.jpg";
import a3 from "./assets/assinantes/assinante3.jpg";

const AVATARS = [a1, a2, a3];

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
            <Link to="#planoshome" className="font-bold px-3 py-1 text-base md:px-4 md:py-1.5 md:text-lg rounded-full bg-[#C2F738] text-[#32410A] transition duration-300 ease-in-out hover:shadow-[0_0_10px_2px_#C2F738]">
              QUERO COMEÇAR AGORA
            </Link>

            <div className="flex items-center gap-1">
  <div className="flex -space-x-2.5">
    {AVATARS.slice(0, 3).map((src, i) => (
      <img
        key={i}
        src={src}
        alt={`Assinante ${i + 1}`}
        className="w-9 h-9 rounded-full object-cover border-2 border-[#0B0B15]"
      />
    ))}
  </div>
  <span className="text-xs md:text-base font-semibold text-gray-300">
    +1.000 assinantes
  </span>
</div>
          </div>

          <div className="mt-4 md:mt-10">
            <CourseMarquee />
          </div>

          <div className="mt-12 mb-6 md:mb-10 flex flex-wrap items-center justify-center gap-4 text-[14px] max-w-[1000px] mx-auto ">
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

          <Link to="#planoshome" className="font-bold px-3 py-1 text-base mt-6 mb-10 md:mt-10 md:mb-6 md:px-4 md:py-1.5 md:text-lg rounded-full bg-[#C2F738] text-[#32410A] transition duration-300 ease-in-out hover:shadow-[0_0_10px_2px_#C2F738]">
            QUERO COMEÇAR AGORA
          </Link>
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
      <section id="planoshome">
        <div id="planoshome1">
          <div id="planoshome2">
        <div id="planoshome3">
        <PlansSection />
         </div>
         </div>
        </div>
      </section>
      <section>
        <ConhecaEnmoda />
        <ComparativoEnmoda/>
      </section>
      <section>
        <FaqSection items={FAQ_ALL.slice(0, 3)} />
      </section>
      <section>
        <PhoneVerifyBar />
      </section>
    
    </main>
  );
}

/* ===== Header e Rotas ===== */
export default function App() {
  return (
    <div className="bg-[#0D0A0B] min-h-screen flex flex-col">
      <Header />
      <ScrollToTop />

      {/* conteúdo das páginas */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/conteudo" element={<ConteudoPage />} />
          <Route path="/conteudo/:id" element={<CourseDetail />} />
          <Route path="/assinatura" element={<Assinatura />} />
          <Route path="/assinantes" element={<Assinantes />} />
          <Route path="/enterprise" element={<Enterprise />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/duvidas" element={<Duvidas />} />
          <Route path="cancelamento" element={<Cancelamento />} />
          <Route
            path="/politica-de-privacidade"
            element={<PoliticaPrivacidade />}
          />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      
      <Footer />

     
      <WhatsAppFloat />
    </div>
  );
}

