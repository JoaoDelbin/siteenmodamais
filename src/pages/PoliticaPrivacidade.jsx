import Footer from "../components/rodape.jsx";

export default function PoliticaPrivacidade() {
  return (
    <main className="bg-[#0D0A0B] text-white min-h-screen">
      <section className="max-w-5xl mx-auto px-6 pt-10 pb-16">
        <header className="mb-8">
          <h1 className="text-3xl md:text-5xl font-bold">
            Política de Privacidade
          </h1>
          <p className="mt-3 text-sm md:text-base text-gray-300">
            Última atualização: 05 de novembro de 2025
          </p>
        </header>

        <div className="space-y-8 text-sm md:text-base leading-relaxed text-gray-200">
          {/* 1. Quem somos */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">
              1. Quem somos
            </h2>
            <p>
              Esta Política de Privacidade descreve como a{" "}
              <span className="font-semibold">Enmoda+</span> (doravante
              &quot;Enmoda&quot;, &quot;nós&quot;, &quot;nosso&quot; ou
              &quot;nossa&quot;) coleta, utiliza e protege os dados pessoais
              das pessoas que acessam nosso site e utilizam nossos serviços,
              incluindo a plataforma de assinatura e as soluções Enmoda+
              Enterprise.
            </p>
            <p className="mt-2">
              Tratamos os dados pessoais em conformidade com a Lei Geral de
              Proteção de Dados Pessoais (Lei nº 13.709/2018 – LGPD).
            </p>
          </section>

          {/* 2. Quais dados coletamos */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">
              2. Quais dados coletamos
            </h2>
            <p>
              Podemos coletar diferentes tipos de dados pessoais, a depender de
              como você se relaciona com a Enmoda+:
            </p>
            <ul className="mt-2 list-disc list-inside space-y-1">
              <li>
                <span className="font-semibold">Dados cadastrais:</span> nome,
                e-mail, telefone, cargo, empresa e demais informações
                fornecidas em formulários do site (como o formulário Enmoda+
                Enterprise).
              </li>
              <li>
                <span className="font-semibold">Dados de uso da plataforma:</span>{" "}
                informações sobre os cursos acessados, progresso, interações e
                engajamento com os conteúdos (quando aplicável).
              </li>
              <li>
                <span className="font-semibold">Depoimentos:</span> nome, e-mail
                e mensagem enviada por assinantes na seção de depoimentos.
              </li>
              <li>
                <span className="font-semibold">Dados de navegação:</span> IP,
                tipo de dispositivo, navegador, páginas acessadas, tempo de
                permanência, cliques e interações no site, coletados por meio
                de cookies, pixels e tecnologias semelhantes.
              </li>
            </ul>
          </section>

          {/* 3. Como usamos esses dados */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">
              3. Como utilizamos seus dados
            </h2>
            <p>Utilizamos seus dados pessoais para as seguintes finalidades:</p>
            <ul className="mt-2 list-disc list-inside space-y-1">
              <li>
                Responder solicitações enviadas por meio de formulários no site,
                como pedidos de proposta Enmoda+ Enterprise.
              </li>
              <li>
                Viabilizar o uso da plataforma de assinaturas e a disponibilização
                de conteúdos educacionais.
              </li>
              <li>
                Enviar comunicações relacionadas aos serviços contratados,
                avisos importantes e informações sobre novidades, cursos,
                eventos e conteúdos (quando houver consentimento ou legítimo
                interesse).
              </li>
              <li>
                Realizar análises estatísticas, medir audiência e melhorar a
                experiência de navegação e uso da plataforma.
              </li>
              <li>
                Exibir depoimentos de assinantes em nossas páginas e materiais
                de comunicação, quando você enviar seu relato e autorizar esse
                uso.
              </li>
            </ul>
          </section>

          {/* 4. Cookies e tecnologias de terceiros */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">
              4. Cookies e tecnologias de terceiros
            </h2>
            <p>
              Utilizamos cookies, pixels e ferramentas de análise para entender
              como o site é utilizado e melhorar nossos serviços. Essas
              tecnologias podem coletar automaticamente alguns dados de
              navegação.
            </p>
            <p className="mt-2">Entre as ferramentas utilizadas, podem estar:</p>
            <ul className="mt-2 list-disc list-inside space-y-1">
              <li>
                <span className="font-semibold">Google Analytics 4:</span> para
                análise de audiência e comportamento de navegação.
              </li>
              <li>
                <span className="font-semibold">Meta Pixel (Facebook/Instagram):</span>{" "}
                para mensurar resultados de campanhas e personalizar anúncios.
              </li>
              <li>
                <span className="font-semibold">Microsoft Clarity:</span> para
                mapas de calor e gravações de sessão, com foco em usabilidade.
              </li>
              <li>
                <span className="font-semibold">Ferramentas de chat e contato:</span>{" "}
                como links para WhatsApp, que podem registrar cliques e
                redirecionar para canais externos.
              </li>
            </ul>
            <p className="mt-2">
              Você pode gerenciar as permissões de cookies diretamente no seu
              navegador ou por meio de ferramentas de gestão de consentimento,
              quando disponíveis em nosso site.
            </p>
          </section>

          {/* 5. Compartilhamento de dados */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">
              5. Compartilhamento de dados com terceiros
            </h2>
            <p>
              Seus dados pessoais podem ser compartilhados com terceiros
              apenas quando necessário para as finalidades descritas nesta
              Política, tais como:
            </p>
            <ul className="mt-2 list-disc list-inside space-y-1">
              <li>
                Provedores de serviços de tecnologia, hospedagem, e-mail e
                análise de dados.
              </li>
              <li>
                Plataformas de pagamento e gestão de assinaturas, quando você
                contrata nossos serviços.
              </li>
              <li>
                Parceiros de marketing e publicidade digital, sempre em
                conformidade com a legislação vigente.
              </li>
            </ul>
            <p className="mt-2">
              Não vendemos seus dados pessoais. Todo compartilhamento é feito
              com base em bases legais adequadas e, sempre que possível, com
              dados minimizados e/ou anonimizados.
            </p>
          </section>

          {/* 6. Direitos do titular */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">
              6. Seus direitos como titular de dados
            </h2>
            <p>
              De acordo com a LGPD, você possui diversos direitos em relação
              aos seus dados pessoais, incluindo:
            </p>
            <ul className="mt-2 list-disc list-inside space-y-1">
              <li>Acessar os dados pessoais que mantemos sobre você.</li>
              <li>
                Solicitar a correção de dados incompletos, inexatos ou
                desatualizados.
              </li>
              <li>
                Solicitar a exclusão de dados desnecessários, excessivos ou
                tratados em desconformidade com a lei.
              </li>
              <li>
                Solicitar a portabilidade dos dados, quando aplicável.
              </li>
              <li>
                Revogar o consentimento, quando esta for a base legal
                utilizada para o tratamento.
              </li>
            </ul>
            <p className="mt-2">
              Para exercer seus direitos, entre em contato pelos canais
              indicados na seção &quot;Como falar conosco&quot;.
            </p>
          </section>

          {/* 7. Segurança */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">
              7. Segurança das informações
            </h2>
            <p>
              Adotamos medidas técnicas e organizacionais razoáveis para
              proteger seus dados pessoais contra acessos não autorizados,
              perda, uso indevido ou divulgação indevida. No entanto, nenhum
              sistema é completamente seguro, e não podemos garantir segurança
              absoluta das informações transmitidas pela internet.
            </p>
          </section>

          {/* 8. Retenção */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">
              8. Retenção dos dados
            </h2>
            <p>
              Mantemos seus dados pessoais apenas pelo tempo necessário para
              cumprir as finalidades descritas nesta Política ou para
              atendimento de obrigações legais, regulatórias e contratuais.
            </p>
          </section>

          {/* 9. Contato */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">
              9. Como falar conosco
            </h2>
            <p>
              Em caso de dúvidas sobre esta Política de Privacidade ou para
              exercer seus direitos como titular de dados, você pode entrar em
              contato pelo e-mail{" "}
              <a
                href="mailto:contato@enmodamais.com.br"
                className="text-[#FF2C64] underline underline-offset-2"
              >
                contato@enmodamais.com.br
              </a>
              .
            </p>
          </section>

          {/* 10. Atualizações */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">
              10. Atualizações desta Política
            </h2>
            <p>
              Podemos atualizar esta Política de Privacidade periodicamente
              para refletir mudanças em nossas práticas de tratamento de dados
              pessoais ou na legislação aplicável. A data da última
              atualização será sempre indicada no início da página.
            </p>
          </section>
        </div>
      </section>
      
    </main>
  );
}
