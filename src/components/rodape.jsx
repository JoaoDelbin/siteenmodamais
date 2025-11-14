// src/components/Footer.jsx
import { Link } from "react-router-dom";
import { Instagram, Youtube, Linkedin, Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0D0A0B] text-white/80 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-10 md:py-12">
       
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 justify-between">
          
         
          <div className="max-w-xs">
            <div className="flex items-center gap-2">
              <span className="text-3xl font-semibold text-[#FF2C64]">
                enmoda<span className="text-[#FF2C64]">+</span>
              </span>
            </div>
            <p className="mt-3 text-sm md:text-base text-white/70">
              Plataforma de streaming 100% focada em moda, para quem quer construir
              uma carreira sólida no mercado e treinar times de alto desempenho.
            </p>

            {/* contato rápido */}
            <div className="mt-4 space-y-1 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#FF2C64]" />
                <a
                  href="mailto:contato@enmodamais.com.br"
                  className="hover:text-white"
                >
                  contato@enmodamais.com.br
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-[#25D366]" />
                <a
                  href="https://wa.me/55SEUNUMEROAQUI"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white"
                >
                  Fale com a equipe pelo WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* navegação */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-10 text-sm">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-white/60 mb-3">
                Plataforma
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/assinatura" className="hover:text-white">
                    Assinatura
                  </Link>
                </li>
                <li>
                  <Link to="/conteudo" className="hover:text-white">
                    Conteúdo
                  </Link>
                </li>
                 <li>
                  <Link to="/assinantes" className="hover:text-white">
                    Assinantes
                  </Link>
                </li>
                 <li>
                  <Link to="/Sobre" className="hover:text-white">
                    Sobre nós
                  </Link>
                </li>
                <li>
                  <Link to="/duvidas" className="hover:text-white">
                    Dúvidas
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-white/60 mb-3">
                Para empresas
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/enterprise" className="hover:text-white">
                    Enterprise
                  </Link>
                </li>
                <li>
                  <a href="/enterprise#form-empresas" className="hover:text-white">
                    Solicitar proposta
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-white/60 mb-3">
                Legal
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/politica-de-privacidade"
                    className="hover:text-white"
                  >
                    Política de Privacidade
                  </Link>
                </li>
                <li>
                  <a href="mailto:contato@enmodamais.com.br" className="hover:text-white">
                    LGPD e dados pessoais
                  </a>
                </li>
                <li>
                  <Link
                    to="/cancelamento"
                    className="hover:text-white"
                  >
                    Cancelamento
                  </Link>
                </li>
                <li>
                <a href="#" id="open_preferences_center">Atualizar preferências de cookies</a>
                </li>
              </ul>
            </div>
          </div>

          
          <div className="md:min-w-[180px]">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-white/60 mb-3">
              Redes sociais
            </h3>
            <p className="text-sm text-white/70 mb-3">
              Acompanhe conteúdos, novidades e bastidores da enmoda+.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/enmodamais/"
                target="_blank"
                rel="noreferrer"
                className="grid h-9 w-9 place-items-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCGq5ziAZvT1Vo1cfiNb0kaQ"
                target="_blank"
                rel="noreferrer"
                className="grid h-9 w-9 place-items-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10"
              >
                <Youtube className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="hidden grid h-9 w-9 place-items-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* linha final */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-[11px] md:text-xs text-white/50">
          <p>
            © {year} enmoda+. Todos os direitos reservados.
          </p>
          <p className="text-white/50">
            Desenvolvido por {" "}
            <span className="text-white">João Delbin</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
