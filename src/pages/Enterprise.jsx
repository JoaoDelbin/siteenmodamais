// imports dos logos
import logoRiachuelo from "../assets/parceiros/riachuelo.png";
import logoRenner from "../assets/parceiros/renner.png";
import logoCa from "../assets/parceiros/CA.png";
import logoMalwee from "../assets/parceiros/malwee.png";
import logoRestoque from "../assets/parceiros/restoque.png";
import logoSebrae from "../assets/parceiros/sebrae.png";
import { Link } from 'react-router-dom';

import EnterpriseHero from "../components/EnterpriseHero";
import { Award, SlidersHorizontal, GraduationCap } from "lucide-react";
import {
  CheckCircle2,
  PlayCircle,
  Users,
  CalendarClock,
  Smartphone,
  Building2,
  ShieldCheck,
  LineChart,
} from "lucide-react";
import Footer from "../components/rodape.jsx";

const ACCENT = "#FF2C64";
const CARD_BG = "#110E0F";
const ICON_BG = "rgba(255,44,100,0.15)"

const PARCEIROS = [
  { src: logoRiachuelo, alt: "Riachuelo" },
  { src: logoRenner, alt: "Renner" },
  { src: logoCa, alt: "C&A" },
  { src: logoMalwee, alt: "Malwee" },
  { src: logoRestoque, alt: "Restoque" },
  { src: logoSebrae, alt: "Sebrae" },
];


export default function EnterprisePage() {
  return (
    <main className="bg-[#0D0A0B] text-white">
     
      <div id="form-empresas">
        <EnterpriseHero />
      </div>

    
      <section id="porque" className="md:grid md:grid-cols-2 max-w-7xl mx-auto px-6 pt-6 pb-12 scroll-mt-24">
        <h2 className="text-3xl md:text-5xl font-bold">
          Por que a <span className="font-light text-[#FF2C64]">enmoda+</span> é a solução ideal para sua empresa?
        </h2>
        <p className="mt-3 md:mt-2 text-md md:text-2xl text-gray-200 max-w-4xl max-w-[765px]">
          O mercado da moda exige atualização constante, inovação e visão estratégica. Marcas e varejistas que não
          investem no desenvolvimento de suas equipes ficam para trás <br />
        
        
          Com a enmoda+ Enterprise, sua empresa tem acesso a uma plataforma completa de treinamento corporativo, criada
          por quem forma profissionais há mais de 20 anos e já impactou marcas e talentos de todo o Brasil.
        </p>

        
        <div className="hidden mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              icon: <Building2 className="h-5 w-5" />,
              title: "Foco corporativo",
              text: "Conteúdo pensado para times de moda — do estratégico ao operacional.",
            },
            {
              icon: <LineChart className="h-5 w-5" />,
              title: "Evolução contínua",
              text: "Trilha, ao vivo e on-demand para aprendizado sem parar.",
            },
            {
              icon: <ShieldCheck className="h-5 w-5" />,
              title: "20+ anos de autoridade",
              text: "Quem já formou mais de 25 mil alunos e equipes em grandes marcas.",
            },
          ].map((c, i) => (
            <div
              key={i}
              className="rounded-xl border-l-2 p-5"
              style={{ borderColor: ACCENT, background: CARD_BG }}
            >
              <div className="flex items-center gap-2">
                <span
                  className="grid h-8 w-8 place-items-center rounded-full"
                  style={{ background: "#FF2C64" }}
                >
                  {c.icon}
                </span>
                <h3 className="text-lg md:text-xl font-semibold">{c.title}</h3>
              </div>
              <p className="mt-2 text-white/80">{c.text}</p>
            </div>
          ))}
          
        </div>
           <div className="block md:hidden mt-6"> <Link 
          to="/enterprise/#form-empresas"
           onClick={(e) => {
      e.preventDefault(); 
      const el = document.getElementById("form-empresas");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }}
          className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold text-white shadow-[0_8px_30px_rgba(255,44,100,0.35)] hover:opacity-90"
          style={{ backgroundColor: ACCENT }}
        >
          Solicitar proposta personalizada
        </Link>
        </div>
      </section>

    
<section id="acesso" className="max-w-7xl mx-auto px-6 pt-6 pb-12 scroll-mt-24 md:mt-5">
  <h2 className=" text-3xl md:text-5xl font-bold">
    O que sua equipe terá acesso
  </h2>
  <p className=" mt-1 md:mt-4 text-md md:text-2xl text-gray-200">
    tudo dentro do ecossistema <span className="font-light text-[#FF2C64]">enmoda+</span>
  </p>

  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
    {[
      {
        title: "Mais de 300 Aulas Especializadas",
        text:
          "Áreas estratégicas da moda: design, branding, consultoria de imagem, varejo, comportamento do consumidor, sustentabilidade e muito mais.",
        Icon: PlayCircle,
      },
      {
        title: "Mentorias exclusivas",
        text: "Sessões com especialistas de mercado para tirar dúvidas e acelerar resultados.",
        Icon: Users,
      },
      {
        title: "Aulas ao vivo",
        text: "Atualização contínua e troca de experiências com a comunidade e os professores.",
        Icon: CalendarClock,
      },
      {
        title: "Sob demanda (app e site)",
        text: "Assista quando e onde quiser, em qualquer dispositivo.",
        Icon: Smartphone,
      },
    ].map(({ title, text, Icon }, i) => (
      <div
        key={i}
        className="rounded-xl border-l-2 p-5 hover:shadow-[0_0_20px_8px_rgba(255,44,100,0.15)] transition"
        style={{ borderColor: ACCENT, background: CARD_BG }}
      >
        <div className="flex items-center gap-3">
          <span
            aria-hidden
            className="grid h-10 w-10 place-items-center rounded-full text-[#FF2C64] ring-1 ring-[#FF2C64]/30"
            style={{ background: ICON_BG }}
          >
            <Icon className="h-5 w-5" />
          </span>
          <h3 className="text-lg md:text-xl font-semibold">{title}</h3>
        </div>
        <p className="mt-2 text-white/80">{text}</p>
      </div>
    ))}
  </div>

  <div className="mt-8 text-center">
    <Link
      to="/enterprise/#form-empresas"
       onClick={(e) => {
      e.preventDefault(); 
      const el = document.getElementById("form-empresas");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }}
      className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold text-white shadow-[0_8px_30px_rgba(255,44,100,0.35)] hover:opacity-90"
      style={{ backgroundColor: ACCENT }}
    >
      Solicitar proposta personalizada
    </Link>
  </div>
</section>
<section id="beneficios" className="max-w-7xl mx-auto px-6 pt-6 pb-12 scroll-mt-24">
  <h2 className="text-3xl md:text-5xl font-bold">Benefícios para empresas</h2>

  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
    {[
      {
        title: "Treinamento escalável",
        text: "Funciona para equipes de todos os tamanhos.",
        Icon: Users,
      },
      {
        title: "Professores referência",
        text: "Especialistas atuantes no mercado de moda e negócios.",
        Icon: Award,
      },
      {
        title: "Programas personalizados",
        text: "Trilhas de aprendizado sob medida para o seu time.",
        Icon: SlidersHorizontal,
      },
      {
        title: "Relatórios de engajamento",
        text: "Acompanhe presença, progresso e evolução dos colaboradores.",
        Icon: LineChart,
      },
      {
        title: "Certificação reconhecida",
        text: "Comprovantes oficiais para colaboradores e RH.",
        Icon: GraduationCap,
      },
    ].map(({ title, text, Icon }, i) => (
      <div
        key={i}
        className="rounded-xl border-l-2 p-5 hover:shadow-[0_0_20px_8px_rgba(255,44,100,0.15)] transition"
        style={{ borderColor: ACCENT, background: CARD_BG }}
      >
        <div className="flex items-center gap-3">
          <span
            aria-hidden
            className="grid h-10 w-10 place-items-center rounded-full text-[#FF2C64] ring-1 ring-[#FF2C64]/30"
            style={{ background: ICON_BG }}
          >
            <Icon className="h-5 w-5" />
          </span>
          <h3 className="text-lg md:text-xl font-semibold">{title}</h3>
        </div>
        <p className="mt-2 text-white/80">{text}</p>
      </div>
    ))}
  </div>

  <div className="mt-8 text-center">
    <Link
      to="/enterprise/#form-empresas"
       onClick={(e) => {
      e.preventDefault(); 
      const el = document.getElementById("form-empresas");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }}
      className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold text-white shadow-[0_8px_30px_rgba(255,44,100,0.35)] hover:opacity-90"
      style={{ backgroundColor: ACCENT }}
    >
      Solicitar proposta personalizada
    </Link>
  </div>
</section>



      
      <section id="clientes" className="max-w-7xl mx-auto px-6 pt-6 pb-12 scroll-mt-24">
        <h2 className=" text-3xl md:text-5xl font-bold">Quem já confia na <span className="font-light text-[#FF2C64]">enmoda+</span></h2>
        <p className=" mt-3 text-md md:text-2xl text-gray-200 max-w-[860px]">
          Além de formar mais de 25 mil alunos, a Enmoda+ já treinou equipes de grandes empresas, como o time de
          trainees da Riachuelo. 
        </p>

       {/* grid de logos */}
<div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 opacity-90">
  {PARCEIROS.map((p) => (
    <div
      key={p.alt}
      className="aspect-[3/2] rounded-lg border border-white/10 grid place-items-center"
      style={{ background: "#110E0F" }}
    >
      <img
        src={p.src}
        alt={p.alt}
        className="max-w-20 md:max-w-[250px] w-auto object-contain"
      />
    </div>
  ))}
</div>


        <div className="mt-8 text-center">
          <Link
            to="/enterprise/#form-empresas"
             onClick={(e) => {
      e.preventDefault(); 
      const el = document.getElementById("form-empresas");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }}
            className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold text-white shadow-[0_8px_30px_rgba(255,44,100,0.35)] hover:opacity-90"
            style={{ backgroundColor: ACCENT }}
          >
            Quero treinar meu time
          </Link>
        </div>
      </section>

      
      <section className="max-w-7xl mx-auto px-6 pt-6 pb-12 text-center">
        <div
          className="rounded-2xl border border-white/10 p-6 sm:p-8 shadow-2xl backdrop-blur [box-shadow:0_10px_40px_rgba(15,0,4,20)]"
          style={{ background: "#110E0F" }}
        >
          <h3 className="text-3xl md:text-5xl font-bold">Pronto para transformar seu time?</h3>
          <p className="mt-2 text-white/80 text-md md:text-xl">
            Fale com a nossa equipe e receba um plano sob medida para a sua realidade.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/enterprise/#form-empresas"
               onClick={(e) => {
      e.preventDefault(); 
      const el = document.getElementById("form-empresas");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }}
              className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold text-white shadow-[0_8px_30px_rgba(255,44,100,0.35)] hover:opacity-90"
              style={{ backgroundColor: ACCENT }}
            >
              Solicitar orçamento
            </Link>
            <Link
              to="/assinatura/#planosass"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold text-[#32410A] bg-[#C2F738] hover:shadow-[0_0_12px_2px_#C2F738]"
            >
              Busco desenvolvimento pessoal
            </Link>
          </div>

        </div>
                  <a
  href="https://wa.me/5511945682542?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20a%20Enmoda%2B%20para%20empresas!"
  onClick={() => {
    window.gtag?.('event','whatsapp_click',{ location:'site', campaign:'/enterprise' });
    window.fbq?.('trackCustom','WhatsappClick',{ location:'site', campaign:'/enterprise' });
  }}
  className="text-right fixed rounded-full px-6 py-3 font-semibold bg-[#25D366] text-[#073B1A]"
>
  Falar no WhatsApp 
</a>
      </section>
      
    </main>
  );
}
