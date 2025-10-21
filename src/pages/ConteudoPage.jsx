import AulasAoVivo from "../components/AulasAoVivo";
import InglesAula from "../components/InglesAula";
import Carreira from "../components/Carreira";
import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import CURSOS from "../assets/courses";

/* ===================== CAPAS (auto-mapeamento) ===================== */
const imagensCursos = import.meta.glob("../assets/cursos/*.{png,jpg,jpeg,webp}", {
  eager: true,
  as: "url",
});
const urlPorChave = Object.fromEntries(
  Object.entries(imagensCursos).map(([caminho, url]) => {
    const arquivo = (caminho.split("/").pop() || "").toLowerCase();
    const chave = arquivo.replace(/\.(png|jpe?g|webp)$/i, "");
    return [chave, url];
  })
);
const chavePorId = {
  "visagismo-pietro-trindade": "visagismo",
  "harmonizacao-de-silhueta-tata-lanzoni": "harmonizacao",
  "armario-capsula-tatty-camargo": "armariocapsula",
  "coloracao-pessoal-tatty-camargo": "coloracaopessoal",
  "visagismo-medicoes-faciais-tatty-camargo": "visagismofaciais",
  "visual-merchandising-otavio-lima": "vmgestao",
  "comportamento-do-consumidor-otavio-lima": "comportamentoconsumidor",
  "metaverso-maya-mattiazzo": "metaverso",
  "varejo-de-moda-otavio-lima": "varejodemoda",
  "comunicacao-integrada-kareen-terenzzo": "comunicacaointegrada",
  "publico-alvo-maya-mattiazzo": "definicaopublico",
  "pesquisa-de-tendencias-muriel-campanha": "pesquisatendencias",
  "vendas-de-moda-otavio-lima": "vendasmoda",
  "figurino-audiovisual-nathalia-anjos": "figurinoaudiovisual",
  "estamparia-efeitos-tecidos-marco-andreoni": "estampariaefeitos",
  "estamparia-tecidos-caimentos-marco-andreoni": "estampariacaimentos",
  "sustentabilidade-marina-colerato": "sustentabilidade",
  "historia-da-moda-giulia-falcone": "historiadamoda",
  "direcao-criativa-muriel-campanha": "direcaocriativa",
  "carreira-tatty-camargo": "carreira",
  "critica-de-moda-rener-oliveira": "futurodacritica",
  "moda-com-proposito-andre-carvalhal": "modacomproposito",
  "historia-e-cultura-de-moda-joao-braga": "historiaecultura",
  "cores-industria-da-moda-luciana-ulrich": "importanciadascores",
  "imagem-e-diversidade-andreza-ramos": "imagemediversidade",
};
function urlCapa(curso) {
  const chave = chavePorId[curso.id];
  if (chave && urlPorChave[chave]) return urlPorChave[chave];

  const base = (curso.cover || curso.id || "")
    .toLowerCase()
    .replace(/\.(png|jpe?g|webp)$/i, "");
  if (urlPorChave[base]) return urlPorChave[base];
  if (urlPorChave[base.replace(/-/g, "")]) return urlPorChave[base.replace(/-/g, "")];

  return "https://images.unsplash.com/photo-1520975940468-88d8a520f3d8?q=80&w=720&auto=format";
}

/* ===================== PRELOAD DE IMAGENS ===================== */
// Carrega imagens em background com concorrência limitada
function useWarmImageCache(urls, { concurrency = 4 } = {}) {
  useEffect(() => {
    if (!urls?.length) return;

    const unique = Array.from(new Set(urls.filter(Boolean)));
    let i = 0;
    let inFlight = 0;
    let stopped = false;

    const idle = (cb) =>
      "requestIdleCallback" in window
        ? window.requestIdleCallback(cb, { timeout: 1200 })
        : setTimeout(cb, 0);

    const kick = () => {
      if (stopped) return;
      while (inFlight < concurrency && i < unique.length) {
        const u = unique[i++];
        inFlight++;
        const img = new Image();
        img.decoding = "async";
        img.src = u;
        img.onload = img.onerror = () => {
          inFlight--;
          idle(kick);
        };
      }
    };

    idle(kick);
    return () => {
      stopped = true;
    };
  }, [urls, concurrency]);
}

/* ===================== CARD ===================== */
const EAGER_QTD = 6; // quantos primeiros carregar como eager/high
function CardCurso({ curso, idx = 0, onBeforeOpen }) {
  const eager = idx < EAGER_QTD;

  return (
    <Link
      to={`/conteudo/${curso.id}`}
      onClick={onBeforeOpen}
      className="group block shrink-0 rounded-[22px] transition-transform duration-300 ease-out hover:-translate-y-[4px] snap-start"
      aria-label={`Abrir ${curso.title}`}
      draggable="false"
      data-card="true"
    >
      <div className="aspect-[2/4] w-[clamp(130px,16vw,230px)] rounded-[22px] overflow-hidden bg-[#0D0A0B] grid place-items-center p-2">
        <img
          src={urlCapa(curso)}
          alt={curso.title}
          loading={eager ? "eager" : "lazy"}
          fetchpriority={eager ? "high" : "auto"}
          decoding="async"
          className="max-w-full max-h-full object-contain rounded-[18px]"
          draggable="false"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src =
              "https://images.unsplash.com/photo-1520975940468-88d8a520f3d8?q=80&w=600&auto=format";
          }}
        />
      </div>
      <span className="sr-only">{curso.title}</span>
    </Link>
  );
}

/* ===================== CARROSSEL ===================== */
function CarouselSection({
  titulo,
  items,
  storageKey,
  urlParam,
  onEmptyMessage,
}) {
  const trilhoRef = useRef(null);
  const [idx, setIdx] = useState(0);
  const [podeEsq, setPodeEsq] = useState(false);
  const [podeDir, setPodeDir] = useState(true);
  const [passo, setPasso] = useState(2);
  const { search } = useLocation();

  // Pré-carrega as capas desta seção
  const coverUrls = useMemo(() => items.map((c) => urlCapa(c)), [items]);
  useWarmImageCache(coverUrls, { concurrency: 4 });

  useEffect(() => {
    const atualizarPasso = () => setPasso(window.innerWidth < 640 ? 1 : 5);
    atualizarPasso();
    window.addEventListener("resize", atualizarPasso);
    return () => window.removeEventListener("resize", atualizarPasso);
  }, []);

  const getCards = () =>
    Array.from(trilhoRef.current?.querySelectorAll("[data-card='true']") || []);

  // (param do URL tem prioridade; senão sessionStorage)
  useEffect(() => {
    const el = trilhoRef.current;
    if (!el) return;

    const params = new URLSearchParams(search);
    const param = params.get(urlParam);
    const saved =
      param !== null
        ? parseInt(param, 10)
        : parseInt(sessionStorage.getItem(storageKey) || "0", 10);

    const cards = getCards();
    if (!cards.length) {
      setIdx(0);
      setPodeEsq(false);
      setPodeDir(false);
      return;
    }
    const i = Math.max(0, Math.min(cards.length - 1, isNaN(saved) ? 0 : saved));
    const alvo = cards[i].offsetLeft;
    el.scrollTo({ left: alvo, behavior: "auto" });
    setIdx(i);
    setPodeEsq(i > 0);
    setPodeDir(i < cards.length - 1);
  }, [items.length, search]);

  useEffect(() => {
    const el = trilhoRef.current;
    if (!el) return;

    const onScroll = () => {
      const cards = getCards();
      if (!cards.length) return;
      const left = el.scrollLeft;
      let maisProx = 0;
      let menor = Infinity;
      cards.forEach((card, i) => {
        const dist = Math.abs(card.offsetLeft - left);
        if (dist < menor) {
          menor = dist;
          maisProx = i;
        }
      });
      setIdx(maisProx);
      setPodeEsq(maisProx > 0);
      setPodeDir(maisProx < cards.length - 1);
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  function irPara(indiceNovo) {
    const cards = getCards();
    if (!cards.length) return;
    const i = Math.max(0, Math.min(cards.length - 1, indiceNovo));
    const alvo = cards[i].offsetLeft;
    trilhoRef.current?.scrollTo({ left: alvo, behavior: "smooth" });
    setIdx(i);
    setPodeEsq(i > 0);
    setPodeDir(i < cards.length - 1);
  }
  const anterior = () => irPara(idx - passo);
  const proximo = () => irPara(idx + passo);

  // (URL + sessionStorage)
  const salvarPosicao = () => {
    sessionStorage.setItem(storageKey, String(idx));
    const url = new URL(window.location.href);
    url.searchParams.set(urlParam, String(idx));
    window.history.replaceState({}, "", url);
  };

  if (!items.length) {
    return onEmptyMessage ? (
      <p className="text-white/70">{onEmptyMessage}</p>
    ) : null;
  }

  return (
    <section className="mt-8">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xl sm:text-2xl font-extrabold">{titulo}</h2>
      </div>

      <div className="relative">
        <div
          ref={trilhoRef}
          className="overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth"
        >
          <div className="flex gap-4 items-start py-1">
            {items.map((c, i) => (
              <CardCurso key={c.id} curso={c} idx={i} onBeforeOpen={salvarPosicao} />
            ))}
          </div>
        </div>

        {items.length > 1 && (
          <>
            {/* Esquerdo */}
            <button
              type="button"
              onClick={anterior}
              disabled={!podeEsq}
              aria-label="Anterior"
              className={`
                absolute inset-y-0
                left-[-30px] sm:left-0
                z-20 w-12 sm:w-16
                flex items-center justify-center
                ${podeEsq ? "opacity-100" : "opacity-40 cursor-not-allowed"}
                transition
              `}
            >
              <svg
                viewBox="0 0 24 24"
                className="pointer-events-none w-7 h-7 sm:w-9 sm:h-9 text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,.65)] transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                strokeWidth="3.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 6l-6 6 6 6" />
              </svg>
              <span className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#0D0A0B] to-transparent" />
            </button>

            {/* Direito */}
            <button
              type="button"
              onClick={proximo}
              disabled={!podeDir}
              aria-label="Próximo"
              className={`
                group absolute inset-y-0 right-0 z-20
                w-14 sm:w-16
                flex items-center justify-end pr-1 sm:pr-2
                ${podeDir ? "opacity-100 hover:bg-white/[0.03]" : "opacity-40 cursor-not-allowed"}
                transition
              `}
            >
              <svg
                viewBox="0 0 24 24"
                className="pointer-events-none w-7 h-7 sm:w-9 sm:h-9 text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,.65)] transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                strokeWidth="3.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 6l6 6-6 6" />
              </svg>
              <span className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#0D0A0B] to-transparent" />
            </button>
          </>
        )}
      </div>
    </section>
  );
}

/* ===================== PÁGINA ===================== */
export default function ConteudoPage() {
  const [busca, setBusca] = useState("");

  // bases fixas
  const baseMaster = useMemo(() => CURSOS.slice(0, 5), []);
  const baseAulas = useMemo(() => CURSOS.slice(5), []);

  // filtro de cada seção mantendo ordem
  const filtro = (arr) => {
    const q = busca.trim().toLowerCase();
    if (!q) return arr;
    return arr.filter(
      (c) =>
        c.title.toLowerCase().includes(q) ||
        (c.tagline ? c.tagline.toLowerCase().includes(q) : false)
    );
  };

  const masterFiltered = useMemo(() => filtro(baseMaster), [busca, baseMaster]);
  const aulasFiltered = useMemo(() => filtro(baseAulas), [busca, baseAulas]);

  return (
    <main className="min-h-screen w-full bg-[#0D0A0B] text-white overflow-x-hidden">
      <div className="max-w-[1600px] mx-auto px-6 py-8">
        {/* título + busca */}
        <div className=" max-w-[1330px] flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4">
          <div className="text-2xl sm:text-3xl font-semibold">
            Cursos <span className="text-[#FF2C64]">enmoda+</span>
            <h2 className="text-sm mt-2 font-light">
              Explore cursos exclusivos e construa sua trilha personalizada de aprendizado em moda.
            </h2>
          </div>

          <div className="flex-1" />
          <input
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            placeholder="Buscar curso..."
            className="mt-4 w-full sm:w-[360px] rounded-full bg-white/5 border border-white/10 px-4 py-2 outline-none focus:ring-2 focus:ring-[#FF2C64]/60"
          />
        </div>

        {/* MASTERCLASSES */}
        {masterFiltered.length > 0 && (
          <CarouselSection
            titulo="Master classes"
            items={masterFiltered}
            storageKey="enmoda:pos:master"
            urlParam="posM"
          />
        )}

        {/* AULAS */}
        {aulasFiltered.length > 0 && (
          <CarouselSection
            titulo="Cursos"
            items={aulasFiltered}
            storageKey="enmoda:pos:aulas"
            urlParam="posA"
          />
        )}

        <AulasAoVivo />
        <InglesAula />
        <Carreira />

        {masterFiltered.length === 0 && aulasFiltered.length === 0 && (
          <p className="mt-8 text-white/70">
            Nenhum curso encontrado para “{busca}”.
          </p>
        )}
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar{display:none}
        .no-scrollbar{-ms-overflow-style:none;scrollbar-width:none}
      `}</style>
    </main>
  );
}
