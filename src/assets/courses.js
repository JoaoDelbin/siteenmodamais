const COURSES = [
  {
    id: "critica-de-moda-rener-oliveira",
    title: "O futuro da Crítica de Moda com Rener Oliveira",
    cover: "critica-de-moda-rener-oliveira.png",
    teacher: "Rener Oliveira",
    teacherId: "rener-oliveira",
    teacherPhoto: "rener-oliveira.png",
    teacherBio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur porta, lorem non facilisis tincidunt, mauris nunc pharetra justo, ac convallis nisl augue ac odio. Integer id nisi purus.",
    tagline: "Caminhos para o jornalismo de moda e sua evolução.",
    learn: []
  },
  {
    id: "moda-com-proposito-andre-carvalhal",
    title: "Moda com propósito com André Carvalhal",
    cover: "moda-com-proposito-andre-carvalhal.png",
    teacher: "André Carvalhal",
    teacherId: "andre-carvalhal",
    teacherPhoto: "andre-carvalhal.png",
    teacherBio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed sem vitae dui finibus efficitur. Aliquam quis turpis eget metus molestie fermentum.",
    tagline: "Atualize propósito e valores na moda contemporânea.",
    learn: []
  },
  {
    id: "historia-e-cultura-de-moda-joao-braga",
    title: "História e cultura de moda com João Braga",
    cover: "historia-e-cultura-de-moda-joao-braga.png",
    teacher: "João Braga",
    teacherId: "joao-braga",
    teacherPhoto: "joao-braga.png",
    teacherBio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus, magna at tempus vulputate, massa leo mattis risus, a fringilla lacus libero eget ex.",
    tagline: "Do surgimento da moda ao cenário atual.",
    learn: []
  },
  {
    id: "cores-industria-da-moda-luciana-ulrich",
    title: "A importância das cores para a indústria da moda com Luciana Ulrich",
    cover: "cores-industria-da-moda-luciana-ulrich.png",
    teacher: "Luciana Ulrich",
    teacherId: "luciana-ulrich",
    teacherPhoto: "luciana-ulrich.png",
    teacherBio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sodales, nunc in luctus bibendum, neque libero viverra dui, sit amet luctus justo mi vel magna.",
    tagline: "Visão mercadológica e princípios de aplicação de cor.",
    learn: []
  },
  {
    id: "imagem-e-diversidade-andreza-ramos",
    title: "Imagem e Diversidade com Andreza Ramos",
    cover: "imagem-e-diversidade-andreza-ramos.png",
    teacher: "Andreza Ramos",
    teacherId: "andreza-ramos",
    teacherPhoto: "andreza-ramos.png",
    teacherBio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae dictum arcu, vitae convallis massa. Pellentesque dignissim, nisl a viverra pretium, augue leo eleifend lacus.",
    tagline: "Atenda diferentes corpos, estilos e identidades.",
    learn: []
  },
  {
    id: "visagismo-pietro-trindade",
    title: "Visagismo com Pietro Trindade",
    cover: "visagismo-pietro-trindade.png",
    teacher: "Pietro Trindade",
    teacherId: "pietro-trindade",
    teacherPhoto: "pietro-trindade.png",
    teacherBio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse egestas, lorem id maximus aliquet, urna neque ultrices sem, ut cursus erat arcu a odio.",
    tagline:
      "Transforme a leitura do rosto em uma ferramenta poderosa para imagem e estilo.",
    learn: [
      "A Arte da Leitura Facial",
      "Rosto e Identidade",
      "Análise visagista",
      "Morfopsicologia",
      "Sentidos do rosto",
      "Pilares da consultoria",
      "Geometria visagista"
    ]
  },
  {
    id: "harmonizacao-de-silhueta-tata-lanzoni",
    title: "Harmonização de silhueta com Tatá Lanzoni",
    cover: "harmonizacao-de-silhueta-tata-lanzoni.png",
    teacher: "Tatá Lanzoni",
    teacherId: "tata-lanzoni",
    teacherPhoto: "tata-lanzoni.png",
    teacherBio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pulvinar, lorem et condimentum vehicula, justo augue porttitor lectus, at fermentum dolor lacus non urna.",
    tagline:
      "Com as técnicas e insights compartilhados por Tatá Lanzoni, você estará preparado para oferecer uma consultoria de imagem completa e personalizada, ajudando seus clientes a alcançarem a melhor versão de si mesmos. ",
    learn: [
      "Conceitos para harmonia",
      "Medidas para análises",
      "Medidas na prática",
      "Equilíbrio harmônico",
      "Comprimentos ideais",
      "Tipos de escala",
      "Análise de perfil",
      "Recursos visuais",
      "O que sua imagem transmite",
      "Estudo de caso"
    ]
  },
  {
    id: "armario-capsula-tatty-camargo",
    title: "Armário Cápsula: Montagem de looks com Tatty Camargo",
    cover: "armario-capsula-tatty-camargo.png",
    teacher: "Tatty Camargo",
    teacherId: "tatty-camargo",
    teacherPhoto: "tatty-camargo.png",
    teacherBio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non mauris nec turpis aliquet rhoncus. Duis et efficitur arcu, vitae euismod metus.",
    tagline: "Crie um armário funcional e estiloso.",
    learn: [
      "O que é armário cápsula",
      "Para quem é a proposta",
      "Experimentações e necessidades",
      "Desafio guarda-roupa 10×10",
      "Peças valiosas",
      "Fugindo das regras",
      "Equilíbrios corporais e estilos",
      "Demandas do dia a dia",
      "Organização de looks",
      "Montagem de looks",
      "Combinações de cor",
      "Aplicação do armário cápsula"
    ]
  },
  {
    id: "coloracao-pessoal-tatty-camargo",
    title: "Coloração pessoal com Tatty Camargo",
    cover: "coloracao-pessoal-tatty-camargo.png",
    teacher: "Tatty Camargo",
    teacherId: "tatty-camargo",
    teacherPhoto: "tatty-camargo.png",
    teacherBio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet, quam quis mattis auctor, libero turpis finibus lacus, vitae pharetra lacus elit at odio.",
    tagline: "Identifique as cores que valorizam você ou seu cliente.",
    learn: [
      "As cores",
      "Comunicação das cores",
      "Psicologia das cores",
      "Tonalidades",
      "Composição das cores",
      "Teoria sazonal",
      "Conjuntos harmônicos",
      "Contrastes",
      "Combinação de cores",
      "Práticas de coloração (3 cartelas)"
    ]
  },
  {
    id: "visagismo-medicoes-faciais-tatty-camargo",
    title: "Visagismo: medições faciais com Tatty Camargo",
    cover: "visagismo-medicoes-faciais-tatty-camargo.png",
    teacher: "Tatty Camargo",
    teacherId: "tatty-camargo",
    teacherPhoto: "tatty-camargo.png",
    teacherBio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lacinia, nibh non iaculis gravida, nisl leo dictum neque, vel auctor magna ipsum id arcu.",
    tagline: "Valorize a beleza única com técnica e prática.",
    learn: [
      "O que é visagismo",
      "Códigos visuais",
      "Linguagem visual",
      "Interpretação do rosto",
      "Eixos e formatos",
      "Formatos de rosto",
      "Características do rosto",
      "Reconhecimento visual",
      "Visagismo na prática"
    ]
  },
  {
    id: "visual-merchandising-otavio-lima",
    title: "Visual Merchandising: gestão e espaço com Otávio Lima",
    cover: "visual-merchandising-otavio-lima.png",
    teacher: "Otávio Lima",
    teacherId: "otavio-lima",
    teacherPhoto: "otavio-lima.png",
    teacherBio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan eros vitae gravida commodo. Nunc sit amet est non elit molestie efficitur.",
    tagline:
      "Transforme o espaço comercial e a experiência de compra.",
    learn: [
      "O que é espaço comercial",
      "Gestão de espaço",
      "Categorias comerciais",
      "Cenários mercadológicos",
      "Perfis de loja",
      "Arquitetura de marcas",
      "Segmentação",
      "Planejamento de mercado",
      "Experiência de compra",
      "Trilhas de circulação",
      "Sazonalidade",
      "Desfile",
      "Cronograma de produtos",
      "Calendário comercial",
      "Precificação",
      "Experimentação de produtos",
      "Jornada do consumidor",
      "Processos de comercialização",
      "Linguagem de moda"
    ]
  },
  {
    id: "comportamento-do-consumidor-otavio-lima",
    title: "Comportamento do Consumidor com Otávio Lima",
    cover: "comportamento-do-consumidor-otavio-lima.png",
    teacher: "Otávio Lima",
    teacherId: "otavio-lima",
    teacherPhoto: "otavio-lima.png",
    teacherBio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque suscipit, justo at malesuada tincidunt, magna elit tempor lorem, in facilisis lectus nulla id nibh.",
    tagline:
      "Apoie a construção de marca e sortimento com ciência do consumo.",
    learn: [
      "Papel da observação",
      "Storytelling na prática",
      "Conhecendo seu consumidor",
      "Cultura do consumidor",
      "Superar barreiras de comunicação",
      "Entender o ambiente",
      "Fatores de desempenho",
      "Propósito de marca",
      "Construção de marcas fortes",
      "Soluções empáticas",
      "Mapear concorrentes",
      "Produtos que encantam",
      "Estratégias realistas",
      "Extrapolar benefícios do produto"
    ]
  },
  {
    id: "metaverso-maya-mattiazzo",
    title: "Metaverso com Maya Mattiazzo",
    cover: "metaverso-maya-mattiazzo.png",
    teacher: "Maya Mattiazzo",
    teacherId: "maya-mattiazzo",
    teacherPhoto: "maya-mattiazzo.png",
    teacherBio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer consequat, nibh quis bibendum finibus, ipsum velit efficitur arcu, et feugiat est odio quis augue.",
    tagline: "Entenda o futuro digital aplicado à moda.",
    learn: [
      "Surgimento do Metaverso",
      "Web2.0, redes sociais e Metaverso",
      "Blockchain e criptomoedas",
      "NFTs",
      "Segmentos no Metaverso",
      "Case Tiffany's"
    ]
  },
  {
    id: "varejo-de-moda-otavio-lima",
    title: "Varejo de moda com Otávio Lima",
    cover: "varejo-de-moda-otavio-lima.png",
    teacher: "Otávio Lima",
    teacherId: "otavio-lima",
    teacherPhoto: "otavio-lima.png",
    teacherBio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec suscipit neque, vel rhoncus lacus. Curabitur tincidunt mi sed auctor dapibus.",
    tagline:
      "Estratégias para atrair, engajar e fidelizar no varejo de moda.",
    learn: [
      "Tendências do varejo",
      "Modelos de negócios",
      "Percepções e afinidades",
      "Custo-benefício",
      "Tipos de consumidores",
      "Mapeando interesses",
      "Jornada do consumidor",
      "Ambiente de varejo"
    ]
  },
  {
    id: "comunicacao-integrada-kareen-terenzzo",
    title: "Comunicação integrada para marcas de moda com Kareen Terenzzo",
    cover: "comunicacao-integrada-kareen-terenzzo.png",
    teacher: "Kareen Terenzzo",
    teacherId: "kareen-terenzzo",
    teacherPhoto: "kareen-terenzzo.png",
    teacherBio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae augue vitae turpis interdum commodo. Cras a iaculis augue.",
    tagline:
      "Planeje a comunicação de moda com consistência e impacto.",
    learn: [
      "Comunicação de marca de moda",
      "O papel das vitrines",
      "Vitrine virtual",
      "Posicionamento",
      "Promoção de vendas",
      "Ética e valores",
      "Plano de comunicação integrada",
      "Gestão de crises",
      "Planejamento de comunicação"
    ]
  },
  {
    id: "publico-alvo-maya-mattiazzo",
    title: "Definição do público-alvo de uma marca de moda com Maya Mattiazzo",
    cover: "publico-alvo-maya-mattiazzo.png",
    teacher: "Maya Mattiazzo",
    teacherId: "maya-mattiazzo",
    teacherPhoto: "maya-mattiazzo.png",
    teacherBio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean congue, urna id faucibus pretium, risus lectus condimentum lacus, id tempus tellus libero at elit.",
    tagline:
      "Entenda seu público e alinhe produto, mensagem e coleção.",
    learn: [
      "Moda como veículo de comunicação",
      "Tendências",
      "Mudanças de mercado",
      "Marcas e estilo",
      "Tipos de lifestyle",
      "Coerência em coleção",
      "Gerações",
      "Mudanças geracionais"
    ]
  },
  {
    id: "pesquisa-de-tendencias-muriel-campanha",
    title: "Pesquisa de tendências com Muriel Campanhã",
    cover: "pesquisa-de-tendencias-muriel-campanha.png",
    teacher: "Muriel Campanhã",
    teacherId: "muriel-campanha",
    teacherPhoto: "muriel-campanha.png",
    teacherBio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer interdum, mi sed aliquam pellentesque, orci mi ultrices mauris, et finibus leo nunc vitae dolor.",
    tagline:
      "Metodologia prática para identificar e aplicar tendências.",
    learn: [
      "Conceitos para a pesquisa",
      "Tendências e inspirações",
      "Ciclos de tendências",
      "Cenários e elementos",
      "Diferenças geracionais",
      "Ferramentas para pesquisa",
      "Suportes para a moda",
      "Planejamento e estratégia"
    ]
  },
  {
    id: "vendas-de-moda-otavio-lima",
    title: "Vendas de moda com Otávio Lima",
    cover: "vendas-de-moda-otavio-lima.png",
    teacher: "Otávio Lima",
    teacherId: "otavio-lima",
    teacherPhoto: "otavio-lima.png",
    teacherBio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    tagline: "Técnicas e VM para vender mais e melhor.",
    learn: [
      "O que é moda",
      "Como uma roupa vira moda",
      "Roupa certa para cada tipo físico",
      "Roupa certa para cada ocasião",
      "Relação cliente × vendedor",
      "Técnicas para vender mais",
      "O que é VM",
      "Como fazer VM",
      "Importância da vitrina",
      "A vitrina que vende"
    ]
  },
  {
    id: "figurino-audiovisual-nathalia-anjos",
    title: "Figurino para audiovisual com Nathalia Anjos",
    cover: "figurino-audiovisual-nathalia-anjos.png",
    teacher: "Nathalia Anjos",
    teacherId: "nathalia-anjos",
    teacherPhoto: "nathalia-anjos.png",
    teacherBio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae neque a nisl pretium accumsan. Ut bibendum, lacus et sagittis iaculis, odio risus bibendum libero.",
    tagline: "Do roteiro ao set: figurino que conta histórias.",
    learn: [
      "Estética audiovisual",
      "Persona",
      "Soft skills",
      "Um pouco de história",
      "Mercado de trabalho",
      "Futuro do figurino",
      "Moda como ferramenta",
      "Figurino e ação",
      "Universo das cores",
      "Equipe e colaboração",
      "Por onde começar",
      "Passo a passo da produção",
      "Segmentos de jobs e tipos de roteiros",
      "Leitura de roteiros"
    ]
  },
  {
    id: "estamparia-efeitos-tecidos-marco-andreoni",
    title: "Estamparia e efeitos em tecidos com Marco Andreoni",
    cover: "estamparia-efeitos-tecidos-marco-andreoni.png",
    teacher: "Marco Andreoni",
    teacherId: "marco-andreoni",
    teacherPhoto: "marco-andreoni.png",
    teacherBio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida, elit non posuere consequat, quam sem lacinia augue, ac tristique risus massa id elit.",
    tagline: "Crie estampas e efeitos inovadores em tecidos.",
    learn: [
      "O adorno",
      "Evolução dos tecidos",
      "Pensando na roupa",
      "Tecidos, estampas e disposições",
      "Teste de tecidos",
      "Processos de desenvolvimento",
      "Efeitos em tecidos"
    ]
  },
  {
    id: "estamparia-tecidos-caimentos-marco-andreoni",
    title: "Estamparia, tecidos e caimentos com Marco Andreoni",
    cover: "estamparia-tecidos-caimentos-marco-andreoni.png",
    teacher: "Marco Andreoni",
    teacherId: "marco-andreoni",
    teacherPhoto: "marco-andreoni.png",
    teacherBio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a tortor sit amet sapien dictum facilisis. Integer euismod orci ut nisi iaculis, id fringilla dui euismod.",
    tagline: "Fundamentos e técnicas avançadas de design têxtil.",
    learn: [
      "O que é o tecido",
      "Fios, padrões e estampas",
      "Cadeia têxtil",
      "Estampas e caimentos",
      "Tecido com propósito",
      "Técnicas de estamparia",
      "Tecnologias para impressão",
      "Design têxtil",
      "Recortes",
      "Estamparia em stencil",
      "Oficinas práticas"
    ]
  },
  {
    id: "sustentabilidade-marina-colerato",
    title: "Sustentabilidade com Marina Colerato",
    cover: "sustentabilidade-marina-colerato.png",
    teacher: "Marina Colerato",
    teacherId: "marina-colerato",
    teacherPhoto: "marina-colerato.png",
    teacherBio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis congue, mi non venenatis dapibus, lectus mi fermentum nibh, vitae pretium nisi nunc a lorem.",
    tagline:
      "Integre sustentabilidade em toda a cadeia da moda.",
    learn: [
      "O que é sustentabilidade",
      "Sustentabilidade na moda",
      "Novos modelos de negócio",
      "Design de produtos",
      "Novas perspectivas para o design",
      "Produção e processos",
      "Moda sustentável e tecnologias",
      "Comunicação"
    ]
  },
  {
    id: "historia-da-moda-giulia-falcone",
    title: "História da Moda com Giulia Falcone",
    cover: "historia-da-moda-giulia-falcone.png",
    teacher: "Giulia Falcone",
    teacherId: "giulia-falcone",
    teacherPhoto: "giulia-falcone.png",
    teacherBio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque imperdiet, lorem nec lobortis bibendum, diam nisl hendrerit enim, vel volutpat augue turpis in sapien.",
    tagline: "Contexto histórico para entender a moda de hoje.",
    learn: [
      "Início da história da moda",
      "França, a capital da moda",
      "Modernização",
      "Moda e movimento",
      "Designers e marcas"
    ]
  },
  {
    id: "direcao-criativa-muriel-campanha",
    title: "Direção Criativa com Muriel Campanhã",
    cover: "direcao-criativa-muriel-campanha.png",
    teacher: "Muriel Campanhã",
    teacherId: "muriel-campanha",
    teacherPhoto: "muriel-campanha.png",
    teacherBio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, libero eu volutpat tristique, nibh velit tincidunt quam, non ultricies turpis lacus nec justo.",
    tagline:
      "Processos, pesquisa e estratégia para liderar projetos.",
    learn: [
      "Autoconhecimento",
      "As 9 inteligências",
      "Tipos de memória",
      "Criatividade",
      "Processos criativos",
      "Pesquisa",
      "Estratégia e briefing",
      "Design e desenvolvimento",
      "Lançamento e avaliação",
      "Consumidores e personas",
      "Ferramentas da direção criativa",
      "Estudo de caso: Adidas/Salinas"
    ]
  },
  {
    id: "carreira-tatty-camargo",
    title: "Carreira com Tatty Camargo",
    cover: "carreira-tatty-camargo.png",
    teacher: "Tatty Camargo",
    teacherId: "tatty-camargo",
    teacherPhoto: "tatty-camargo.png",
    teacherBio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum molestie, nisl vitae interdum gravida, ipsum lacus vulputate ligula, ut rutrum enim ipsum non sem.",
    tagline:
      "Entre no mercado de trabalho com confiança.",
    learn: [
      "Dicas sobre o mercado de trabalho",
      "Elaboração de currículo",
      "Orientações para entrevista",
      "Entrevista de emprego",
      "Comportamento no ambiente de trabalho"
    ]
  }
];

export default COURSES;
