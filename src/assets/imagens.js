const normaliza = (s) =>
  (s || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\.(png|jpe?g|webp|svg)$/i, "")
    .replace(/[^a-z0-9]+/g, "")
    .trim();

// ========== CAPAS ==========
const capasGlob = import.meta.glob("./cursos/*.{png,jpg,jpeg,webp,svg}", {
  eager: true,
  as: "url",
});

const CAPAS = Object.fromEntries(
  Object.entries(capasGlob).map(([caminho, url]) => {
    const arquivo = caminho.split("/").pop() || "";
    return [normaliza(arquivo), url];
  })
);

const ALIAS_CAPA = {
 
  armariocapsulatattycamargo: "armariocapsula",
  coloracaopessoaltattycamargo: "coloracaopessoal",
  visagismomedicoesfaciaistattycamargo: "visagismofaciais",
  visualmerchandisingotaviolima: "vmgestao",
  comportamentodoconsumidorotaviolima: "comportamentoconsumidor",
  metaversomayamattiazzo: "metaverso",
  varejodemodaotaviolima: "varejodemoda",
  comunicacaointegradakareenterenzzo: "comunicacaointegrada",
  publicoalvomayamattiazzo: "definicaopublico",
  pesquisadetendenciasmurielcampanha: "pesquisatendencias",
  vendasdemodaotaviolima: "vendasmoda",
  figurinoaudiovisualnathaliaanjos: "figurinoaudiovisual",
  estampariaefeitostecidosmarcoandreoni: "estampariaefeitos",
  estampariatecidoscaimentosmarcoandreoni: "estampariacaimentos",
  sustentabilidademarinacolerato: "sustentabilidade",
  historiadamodagiuliafalcone: "historiadamoda",
  direcaocriativamurielcampanha: "direcaocriativa",
  carreiratattycamargo: "carreira",

 
  visagismopietrotrindade: "visagismo",
  harmonizacaodesilhuetatatalanzoni: "harmonizacao",
  imagemediversidadeandrezaramos: "imagemediversidade",
  coresindustriadamodalucianaulrich: "importanciadascores",
  coresindustriadamodalucianaulrichpng: "importanciadascores",
  historiaculturademodajoaobraga: "historiaecultura",
  criticademodareneroliveira: "futurodacritica",
  modacompropositoandrecarvalhal: "modacomproposito",
  modacompropositoandrecarvalhalpng: "modacomproposito", 
};

export function capaDoCurso(curso) {
  if (!curso) return placeholderCapa();

  const candidatos = [];
  if (curso.cover) candidatos.push(normaliza(curso.cover));
  if (curso.id) candidatos.push(normaliza(curso.id));

  
  for (const key of candidatos) {
    const alias = ALIAS_CAPA[key] || ALIAS_CAPA[key.replace(/-/g, "")];
    if (alias && CAPAS[alias]) return CAPAS[alias];
  }

  
  for (const key of candidatos) {
    if (CAPAS[key]) return CAPAS[key];
    const semHifen = key.replace(/-/g, "");
    if (CAPAS[semHifen]) return CAPAS[semHifen];
  }

  
  for (const key of candidatos) {
    const hit1 = Object.keys(CAPAS).find((k) => key.startsWith(k) || k.startsWith(key));
    if (hit1) return CAPAS[hit1];
    const hit2 = Object.keys(CAPAS).find((k) => key.includes(k) || k.includes(key));
    if (hit2) return CAPAS[hit2];
  }

  return placeholderCapa();
}

const placeholderCapa =
  () =>
    "https://images.unsplash.com/photo-1520975940468-88d8a520f3d8?q=80&w=720&auto=format";

// ========== PROFESSORES ==========
const profsA = import.meta.glob("../professores/*.{png,jpg,jpeg,webp,svg}", {
  eager: true,
  as: "url",
});
const profsB = import.meta.glob("./professores/*.{png,jpg,jpeg,webp,svg}", {
  eager: true,
  as: "url",
});
const profGlob = { ...profsA, ...profsB };

const PROFS = Object.fromEntries(
  Object.entries(profGlob).map(([caminho, url]) => {
    const arquivo = caminho.split("/").pop() || "";
    return [normaliza(arquivo), url];
  })
);

const PREFIXO_PROF = {
  "andre-carvalhal": "andrecarvalhal",
  "nathalia-anjos": "nathaliaanjos",
  "rener-oliveira": "reneroliveira",
  "andreza-ramos": "andrezaramos",
  "giulia-falcone": "giuliafalcone",
  "joao-braga": "joaobraga",
  "kareen-terenzzo": "kareenterenzzo",
  "luciana-ulrich": "lucianaulrich",
  "marco-andreoni": "marcoandreoni",
  "marina-colerato": "marinacolerato",
  "maya-mattiazzo": "mayamattiazzo",
  "muriel-campanha": "murielcampanha",
  "otavio-lima": "otaviolima",
  "tata-lanzoni": "tatalanzoni",
  "tatty-camargo": "tattycamargo",
  "pietro-trindade": "pietrotrindade",
};


export function fotoProfessorPorId(teacherId, teacherPhoto) {
  if (teacherPhoto) {
    const key = normaliza(teacherPhoto);
    if (PROFS[key]) return PROFS[key];
  }
  const base = normaliza(PREFIXO_PROF[teacherId] || teacherId);
  const achada = Object.keys(PROFS).find((k) => k.startsWith(base));
  return (
    PROFS[achada] ||
    "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=300&auto=format"
  );
}
