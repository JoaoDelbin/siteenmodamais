
import { useEffect, useMemo, useRef, useState } from "react";


const globLives = import.meta.glob("../assets/ingles/*.{png,jpg,jpeg,webp,svg}", {
  eager: true,
  as: "url",
});

const LIVES = Object.entries(globLives)
  .map(([path, url]) => {
    const name = (path.split("/").pop() || "").toLowerCase();
    return { name, url };
  })
  .sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }));

/* ====== Card da capa ====== */
function CardCapa({ src }) {
  return (
    <div
      data-card="true"
      className="
        group block shrink-0 rounded-[22px]
        transition-transform duration-300 ease-out hover:-translate-y-[4px]
        snap-start
      "
      draggable="false"
    >
      <div
        className="
          aspect-[2/4] w-[clamp(130px,16vw,230px)]
          rounded-[22px] overflow-hidden
          bg-[#0D0A0B] grid place-items-center p-2
          
        "
      >
        <img
          src={src}
          alt=""
          loading="lazy"
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
    </div>
  );
}


export default function InglesAula() {
  const trilhoRef = useRef(null);
  const [idx, setIdx] = useState(0);
  const [podeEsq, setPodeEsq] = useState(false);
  const [podeDir, setPodeDir] = useState(true);
  const [passo, setPasso] = useState(2); 
  const storageKey = "enmoda:pos:lives";


  useEffect(() => {
    const atualizar = () => setPasso(window.innerWidth < 640 ? 1 : 2);
    atualizar();
    window.addEventListener("resize", atualizar);
    return () => window.removeEventListener("resize", atualizar);
  }, []);

  const itens = useMemo(() => LIVES, []);

  const getCards = () =>
    Array.from(trilhoRef.current?.querySelectorAll("[data-card='true']") || []);


  useEffect(() => {
    const el = trilhoRef.current;
    if (!el) return;
    const salv = parseInt(sessionStorage.getItem(storageKey) || "0", 10) || 0;
    const cards = getCards();
    const i = Math.max(0, Math.min(cards.length - 1, salv));
    const alvo = cards[i]?.offsetLeft ?? 0;
    el.scrollTo({ left: alvo, behavior: "auto" });
    setIdx(i);
    setPodeEsq(i > 0);
    setPodeDir(i < cards.length - 1);
  }, []);


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
      sessionStorage.setItem(storageKey, String(maisProx));
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
    sessionStorage.setItem(storageKey, String(i));
  }
  const anterior = () => irPara(idx - passo);
  const proximo = () => irPara(idx + passo);

  if (!itens.length) return null;

  return (
    <section className="mt-10">
      <div className="flex items-end justify-between mb-3">
        <h2 className="text-xl sm:text-2xl font-extrabold">
           Ingles com YZY SCHOOL
        </h2>
      </div>

      <div className="relative">
     
        <div
          ref={trilhoRef}
          className="overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth"
        >
          <div className="flex gap-4 items-start py-1">
            {itens.map((it, i) => (
              <CardCapa key={it.name + i} src={it.url} />
            ))}
          </div>
        </div>

        {/* setas laterais */}
        {itens.length > 1 && (
          <>
            {/* esquerda */}
            <button
              type="button"
              onClick={anterior}
              disabled={!podeEsq}
              aria-label="Anterior"
              className={`
                absolute inset-y-0 left-[-30px] sm:left-0 z-20
                w-12 sm:w-16 flex items-center justify-center
                ${podeEsq ? "opacity-100" : "opacity-40 cursor-not-allowed"}
                transition
              `}
            >
              <svg
                viewBox="0 0 24 24"
                className="pointer-events-none w-7 h-7 sm:w-9 sm:h-9 text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,.65)]"
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

            {/* direita */}
            <button
              type="button"
              onClick={proximo}
              disabled={!podeDir}
              aria-label="Próximo"
              className={`
                group absolute inset-y-0 right-0 z-20
                w-14 sm:w-16 flex items-center justify-end pr-1 sm:pr-2
                ${podeDir ? "opacity-100 hover:bg-white/[0.03]" : "opacity-40 cursor-not-allowed"}
                transition
              `}
            >
              <svg
                viewBox="0 0 24 24"
                className="pointer-events-none w-7 h-7 sm:w-9 sm:h-9 text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,.65)]"
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

      <style>{`
        .no-scrollbar::-webkit-scrollbar{display:none}
        .no-scrollbar{-ms-overflow-style:none;scrollbar-width:none}
      `}</style>
    </section>
  );
}
