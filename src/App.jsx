import CourseMarquee from "./components/CourseMarquee";
import CommunityTransform from "./components/CommunityTransform";
import AccessSection from "./components/AccessSection";
import PhoneVerifyBar from "./components/PhoneVerifyBar";
import ConhecaEnmoda from "./components/ConhecaEnmoda";
import BenefitsCarousel from "./components/BenefitsCarousel";
import FaqSection from "./components/FaqSection";
import PlansSection from "./components/planos";
import Header from "./components/nav";

export default function App() {
  return (
    <main className="w-full bg-[#0D0A0B] text-gray-100 min-h-screen font-sans">
      <header>
  
      <Header />
      
</header>


<section className="min-h-[75vh] flex items-center">
        <div className="max-w-8xl mx-auto px-6 w-full text-center py-8 md:py-12">
        <h1 className="text-3xl md:text-5xl font-bold">Transforme sua paixão por moda em carreira.</h1>
        <p className="text-[16px] md:text-[22px] mt-4 text-gray-300">
          Acesso ilimitado a cursos, mentoria e networking no maior ecossistema de moda do Brasil.<br></br>
          <span className="font-bold"> Mais de 20 anos</span> formando profissionais que hoje estão no mercado nacional e internacional.
        </p>
        
      <div className="mt-6 flex flex-col items-center gap-3
                md:flex-row md:justify-center md:gap-4">

  <button
    className="font-bold px-3 py-1 text-[16px]
               md:px-4 md:py-1.5 md:text-[18px]
               rounded-full bg-[#C2F738] text-[#32410A] hover:bg-[#B4E436]">
    QUERO COMEÇAR AGORA
  </button>

  <div className="flex items-center gap-2">
    <div className="flex -space-x-2.5">
      <div className="w-7 h-7 rounded-full bg-gray-300 border-2 border-[#0B0B15]" />
      <div className="w-7 h-7 rounded-full bg-gray-300 border-2 border-[#0B0B15]" />
      <div className="w-7 h-7 rounded-full bg-gray-300 border-2 border-[#0B0B15]" />
    </div>
    <span className="text-[12px] md:text-[16px] font-semibold text-white">
      +1.000 assinantes
    </span>
  </div>
</div>

        

        <div className="mt-10">
             <CourseMarquee />
        </div>


        <div className="mt-12 flex flex-wrap items-center justify-center gap-4 text-[14px] max-w-[1000px] mx-auto ">
          {[
            'Acesso ilimitado a cursos (Design, Consultoria, VM, etc.)',
            'Aulas ao vivo com profissionais do mercado',
            'Certificação reconhecida nacionalmente',
            'Mentoria e comunidade para networking',
            'Estude no seu ritmo, 24h por dia',
          ].map((t)=> (
            <span key={t} className="px-4 py-1 rounded-full bg-[#181516] text-[#fff] whitespace-nowrap hover:ring-2 hover:ring-[#FF2C64]">
              {t}
            </span>
          ))}
        </div>

        <button className="font-bold mt-8 mb-8 px-3 py-1 text-[14px] md:px-4 md:py-1.5 md:text-[16px]
                 rounded-full bg-[#C2F738] text-[#32410A] hover:bg-[#B4E436]]">
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
      <PhoneVerifyBar />
      </section>
      <section>
      <BenefitsCarousel />
      </section>
      <section>
      <ConhecaEnmoda />
      </section>
      <section>
      <PlansSection />
      </section>
      <section>
      <FaqSection />
      </section>

    </main>
  );
}
