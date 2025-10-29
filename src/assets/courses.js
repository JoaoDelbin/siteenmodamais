const COURSES = [
  {
    id: "critica-de-moda-rener-oliveira",
    title: "O futuro da Crítica de Moda com Rener Oliveira",
    cover: "critica-de-moda-rener-oliveira.png",
    teacher: "Rener Oliveira",
    teacherId: "rener-oliveira",
    teacherPhoto: "rener-oliveira.png",
    teacherBio:
      "Rener Oliveira é jornalista e especialista em Comunicação, Marcas e Consumo, com uma longa trajetória na moda iniciada em uma multimarcas no interior do Rio Grande do Norte. Mudou-se para Natal aos 15 anos, onde aprofundou os estudos em moda. Graduou-se em Jornalismo (Universidade Potiguar, 2019) e pós-graduou-se em 2020. Trabalhou com Daniela Falcão na plataforma NORDESTESSE e ganhou reconhecimento nacional, sendo destaque na Glamour Brasil e citado na ELLE Brasil e outros veículos. Atualmente, cria conteúdo crítico e inovador nas redes sobre a indústria da moda.",
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
      "Graduado em Publicidade e Jornalismo e pós-graduado em Marketing Digital, com especialização em design para sustentabilidade. Palestrante e professor (IED, ESPM, FGV), atuou como consultor para Grendene, Unilever, Coca-Cola, Do Bem, entre outras. É escritor e colunista (Carta Capital e Veja Rio) e autor de bestsellers como \"A Moda Imita a Vida\" e \"Moda com Propósito\". Finalista do Prêmio Jabuti 2019 com \"Viva o Fim\" e autor de \"Como salvar o futuro\". Apresenta e colabora em programas do GNT e TV Brasil.",
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
      "Mestre em História da Ciência (PUC/SP). Especialista em História da Arte (FAAP/SP) e em História da Indumentária e da Moda (FESPSP). Especialista em Histoire du Costume pela École Supérieure des Arts et Technique de la Mode (ESMOD – Paris). Membro da Academia Brasileira da Moda. Autor de \"História da Moda. Uma Narrativa\", da série \"Reflexões sobre Moda\" (I–IV) e coautor de \"História da Moda no Brasil – Das Influências às Autorreferências\", entre outros. Professor de Estética, História da Moda, Cultura de Moda, História da Arte, Joalheria e Moda no Brasil; curador de exposições.",
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
      "Luciana Ulrich é pioneira em Coloração Pessoal no Brasil e no estudo da miscigenação da pele brasileira. Com mais de 15 anos de atuação em Consultoria de Cores, já realizou mais de 10.000 testes de coloração pessoal e formou mais de 6.000 profissionais.",
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
      "Especialista em comunicação de moda e consultora de estilo, Andreza Ramos acredita no vestir como expressão criativa e cultural. Com olhar atento à diversidade étnico-cultural, ajuda mulheres reais a se sentirem confiantes e empoderadas, celebrando todos os corpos de forma inclusiva e autêntica. Seu conteúdo une moda, história, cultura e diversão para tornar o estilo acessível e significativo.",
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
      "Tatá Lanzoni é arquiteta, consultora de imagem e entusiasta da neurociência, com ampla experiência na área. Vice-presidente associada da AICI Brasil e docente na enmoda, possui especializações em cores, formas e psicologia e é criadora do jogo Yin Yang Cores e Estilo. Seu objetivo é auxiliar pessoas a expressarem-se com autenticidade e confiança.",
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
      "Tatty Camargo tem trajetória singular. Educada em escola antroposófica, desenvolveu desde cedo forte ligação com as artes e a construção de competências, o que lhe deu um olhar que vai além das regras. Iniciou-se em ilustração e fotografia, passando por composições e publicidade. Formou-se também em Fisioterapia, o que ampliou sua compreensão do corpo e da fisiologia do movimento — base valiosa para o visagismo. Graduou-se em Design de Moda (Faculdade Santa Marcelina) e trabalhou por anos com calçados e joias. Apaixonou-se por maquiagem em curso no Senac, integrando depois a primeira turma de visagismo em São Paulo nos anos 2000. É formada em coloração pessoal nos métodos sazonal e expandido, e em tonal visagismo (Senac e Philip Hallawell), unindo moda e beleza. Atua com consultoria desde os anos 2000 e, desde 2005, ministra turmas no Senac, onde desenvolveu diversos cursos — base hoje utilizada por toda a rede. Também dá cursos na Belas Artes de São Paulo e na enmoda. Em 2014, firmou parceria com a C&A em projeto de revistinhas com cases de clientes, desdobrado depois em blog. Acredita na individualidade como potencializadora e leva essa essência para todas as suas atividades.",
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
      "Tatty Camargo é consultora de imagem e especialista em coloração pessoal (métodos sazonal e expandido), com formação em tonal visagismo pelo Senac e pelo mestre Philip Hallawell. Atuante desde os anos 2000, reúne experiência em moda, beleza, ilustração e fotografia, além de formação em Fisioterapia — combinação que aprofunda sua leitura do corpo, do movimento e da linguagem visual aplicada ao visagismo.",
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
      "Consultora de imagem com atuação desde os anos 2000, Tatty Camargo reúne formação em Design de Moda, Fisioterapia, coloração pessoal (sazonal e expandido) e tonal visagismo (Senac e Philip Hallawell). Docente desde 2005 no Senac — onde também desenvolveu cursos adotados por toda a rede —, atua ainda na Belas Artes de São Paulo e na enmoda, conectando técnicas de análise facial com linguagem visual, maquiagem e estilo.",
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
      "Especialista em Varejo, Otávio Lima iniciou sua trajetória em 1994 como gestor nas empresas Varal, Zoomp, Zapping e Miss Sixty. Mestre em História da Ciência (PUC-SP) e com MBA em Varejo de Moda (UAM), desde 2003 atua como consultor comercial para varejo e atacado no Brasil (como Glória Coelho) e no exterior (Lolita/Uruguai, Harley Davidson). Coordenou o MBA em Negócios e Varejo de Moda e lecionou na EAADM, UAM e Senac/SP. Ministra cursos de pesquisa de varejo para brasileiros em Nova York e é professor do Centro Universitário Belas Artes de São Paulo e da enmoda.",
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
      "Especialista em Varejo com carreira iniciada em 1994 (Varal, Zoomp, Zapping, Miss Sixty). Mestre em História da Ciência pela PUC-SP e MBA em Varejo de Moda pela UAM. Desde 2003, consultor comercial para empresas de varejo e atacado no Brasil (Glória Coelho) e no exterior (Lolita/Uruguai, Harley Davidson). Atuou como coordenador e professor em instituições como EAADM, UAM e Senac/SP, ministra cursos de pesquisa de varejo em Nova York e é professor no Centro Universitário Belas Artes e na enmoda.",
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
      "Formada em Negócios da Moda e pós-graduada em Gestão de E-commerce, com especialização em Fashion Business e Marketing Digital. Atua há mais de 15 anos no mercado de moda, sendo 10 dedicados a estratégias digitais. Passou por diversos players e modelos de negócio (B2C, B2B e marketplaces). É sócia da Mind-e, empresa especializada em soluções digitais para negócios.",
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
      "Otávio Lima é especialista em Varejo desde 1994, quando atuou como gestor em Varal, Zoomp, Zapping e Miss Sixty. Mestre em História da Ciência (PUC-SP) e com MBA em Varejo de Moda (UAM), é consultor desde 2003 para empresas brasileiras e internacionais (como Glória Coelho, Lolita/Uruguai e Harley Davidson). Coordenou MBA em Negócios e Varejo de Moda, lecionou na EAADM, UAM e Senac/SP, ministra cursos de pesquisa de varejo em Nova York e é professor no Centro Universitário Belas Artes e na enmoda.",
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
      "Profissional multifacetada, pesquisadora e estudiosa dedicada. Doutoranda em Estudos Feministas (Universidade de Coimbra), mestre em Comunicação e Práticas de Consumo (PPGCOM/ESPM) e pós-graduada em Administração Mercadológica (FAAP). Bacharel em Ciências Sociais (PUC-SP). Autora de pesquisas e artigos sobre comunicação, consumo, envelhecimento e gênero. Ampla experiência no varejo de moda (Vila Romana, VR Menswear, Ermenegildo Zegna, Calvin Klein, Arezzo) em planejamento, imprensa, produção, publicidade, web, mídias sociais, VM e pesquisa de mercado. Responsável pela entrada da Arezzo no ambiente digital em 2013. Desde então, dedica-se aos estudos de comunicação e gênero, construindo repertório e visão holística da comunicação como prática social e emancipatória.",
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
      "Profissional de Negócios da Moda, pós-graduada em Gestão de E-commerce e especialista em Fashion Business e Marketing Digital. Com mais de 15 anos no mercado — sendo 10 em estratégias digitais —, atuou em diferentes formatos (B2C, B2B e marketplaces). É sócia da Mind-e, onde desenvolve soluções digitais para negócios de moda.",
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
      "Aos 18 anos, Muriel iniciou a carreira na Vogue, onde descobriu a paixão por materializar ideias e transformar conceitos em visual. Migrou para o mercado de produto, começando no grupo Vulcabrás (contribuindo com designs para a marca Rebook), passando pela Alpargatas e pelo grupo DASS, onde iniciou a marca Fila do zero, liderando equipes e transformando produtos. Depois, atuou por 7 anos na Adidas, adquirindo experiência vital em contexto de marca global.",
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
      "Especialista em Varejo desde 1994 (Varal, Zoomp, Zapping, Miss Sixty), Otávio Lima é mestre em História da Ciência (PUC-SP) e possui MBA em Varejo de Moda (UAM). Desde 2003, é consultor comercial para empresas de varejo e atacado no Brasil e no exterior (Glória Coelho, Lolita/Uruguai, Harley Davidson). Coordenou MBA de Negócios e Varejo de Moda, lecionou na EAADM, UAM e Senac/SP, ministra cursos de pesquisa de varejo em Nova York e é professor no Centro Universitário Belas Artes e na enmoda.",
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
      "Professor e designer, Marco Andreoni atua na FAAP e lidera o projeto \"Alinhavando o Futuro 1\", que gera renda, autoestima e autonomia na comunidade ribeirinha da Reserva de Desenvolvimento Sustentável Rio Negro (AM). Visionário em Criação de Estamparia e Design de Moda, utiliza softwares avançados de imagem. Seu trabalho capacita a comunidade em confecção, integrando saberes tradicionais, moda, artesanato e design — referência nacional em inovação, sustentabilidade e impacto social.",
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
      "Docente e designer com atuação na FAAP, Marco Andreoni é responsável pelo projeto \"Alinhavando o Futuro 1\" na Reserva de Desenvolvimento Sustentável Rio Negro (AM), integrando moda, artesanato e design para geração de renda e autonomia. Pioneiro no uso de softwares de imagem para estamparia, referencia-se por unir inovação técnica, educação e impacto socioambiental.",
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
      "Bacharel em Design de Moda e mestre em Ciências Sociais (PUC-SP), Marina Colerato tem trajetória multidisciplinar guiada pelo pensamento sistêmico e por uma perspectiva ecofeminista. Fundadora do Instituto Modefica — jornalismo e pesquisa para justiça socioambiental —, liderou por oito anos projetos focados em redes produtivas, crise climática e alternativas de produção. Escreve para Le Monde Diplomatique, ELLE, Jacobin e Projeto Draft; colaborou com Reos Partners, Instituto Avon, Laudes Foundation, Grupo Soma e Melissa. Como palestrante e educadora, passou por eventos como Copenhagen Fashion Summit, Rio Ethical Fashion e Brasil Eco Fashion Week, e por instituições como FAAP, FGV, Senac, Sesc e EnModa. Integra o Núcleo de Pesquisa Interdisciplinar de Estudos Curdos (PUC-MG/CNPq), pesquisando o Movimento de Mulheres Curdas e Jineolojî.",
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
      "Bacharel em História pela FFLCH-USP, Giulia Falcone é doutoranda em História Social-USP, bolsista da FAPESP. Realizou estágio no exterior na École des Hautes Études en Sciences Sociales (jan.–dez./2023). Especialista em história contemporânea, dedica-se à indústria têxtil e de moda, unindo pesquisa acadêmica rigorosa e paixão pelo tema.",
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
      "Muriel iniciou a carreira aos 18 anos na Vogue, onde consolidou o desejo de materializar conceitos. Atuou no grupo Vulcabrás (designs para Rebook), na Alpargatas e no grupo DASS, onde iniciou a marca Fila do zero, liderando equipes e processos. Depois, passou 7 anos na Adidas, adquirindo repertório em uma marca global e aprofundando sua atuação em direção criativa e desenvolvimento de produto.",
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
      "Consultora de imagem com trajetória iniciada nos anos 2000, Tatty Camargo reúne experiências em ilustração, fotografia, moda e beleza, aliadas à formação em Fisioterapia. É formada em Design de Moda (FASM), coloração pessoal (métodos sazonal e expandido) e tonal visagismo (Senac e Philip Hallawell). Desde 2005, ministra turmas no Senac — onde desenvolveu cursos adotados em toda a rede — e também leciona na Belas Artes/SP e na enmoda, ajudando profissionais a ingressarem no mercado com segurança.",
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
