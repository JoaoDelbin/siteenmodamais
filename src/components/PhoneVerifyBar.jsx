import { useEffect, useMemo, useRef, useState } from "react";

const OFFICIAL_NUMBERS = [
  "+55 11 96596-3613",
  "+55 11 97644-7837",
  "+55 11 99190-2755",
];

// deixa só os dígitos
function onlyDigits(s) {
  return (s || "").replace(/\D+/g, "");
}

// garante que estamos sempre olhando pros ÚLTIMOS 11 dígitos (DDD + número)
function normalizeToNational(digits) {
  return (digits || "").slice(-11);
}

export default function PhoneVerifyBar() {
  const [value, setValue] = useState("");
  const [status, setStatus] = useState(null); // "ok" | "bad" | null
  const inputRef = useRef(null);

  // guarda os números oficiais já normalizados (DDD + número)
  const officialDigits = useMemo(
    () =>
      new Set(
        OFFICIAL_NUMBERS.map((n) =>
          normalizeToNational(onlyDigits(n))
        )
      ),
    []
  );

  useEffect(() => {
    setStatus(null);
  }, [value]);

  function handleChange(e) {
    // deixa o usuário digitar o que quiser,
    // inclusive +55, espaços, parênteses, etc.
    setValue(e.target.value);
  }

  function handleVerify() {
    const rawDigits = onlyDigits(value);          // tira tudo que não é número
    const normalized = normalizeToNational(rawDigits); // pega últimos 11 dígitos

    // se não tiver ao menos DDD + 8 dígitos, já consideramos inválido
    if (!normalized || normalized.length < 10) {
      setStatus("bad");
      return;
    }

    const isOfficial = officialDigits.has(normalized);
    setStatus(isOfficial ? "ok" : "bad");
  }

  function onKeyDown(e) {
    if (e.key === "Enter") handleVerify();
  }

  return (
    <section className="w-full bg-gradient-to-r from-[#0D0A0B] via-[#171415] to-[#0D0A0B] text-white">
      <div className="max-w-[1440px] mx-auto px-6 py-5 pt-2 md:pt-8">
        <h3 className="text-center text-2xl md:text-3xl font-bold">
          Alguém da escola entrou em contato com você?
        </h3>

        <div
          className="
            mt-8 md:mt-10
            flex flex-wrap items-center justify-center
            gap-2 md:gap-3
            text-center
          "
        >
          <span className="text-sm md:text-base text-white/80">
            Verifique nossos números oficiais:
          </span>

          <label htmlFor="phone-verify" className="sr-only">
            Número de telefone
          </label>

          <input
            id="phone-verify"
            ref={inputRef}
            inputMode="tel"
            placeholder="(11) 99199-9999"
            value={value}
            onChange={handleChange}
            onKeyDown={onKeyDown}
            className="
              h-10 w-[220px] md:w-[260px]
              rounded-full bg-white text-[#0B0B15]
              px-4 text-sm outline-none
              focus:ring-2 focus:ring-[#C2F738]
            "
          />

          <button
            onClick={handleVerify}
            className="
              h-10 px-5 rounded-full
              bg-black text-white text-sm font-semibold
              border border-white/10
              hover:bg-white hover:text-black transition
            "
          >
            VERIFICAR
          </button>
        </div>

        <div className="mt-2 min-h-[0.8rem] text-center" aria-live="polite">
          {status === "ok" && (
            <span className="inline-flex items-center gap-2 text-[13px] text-[#C2F738]">
              ✓ Número oficial
            </span>
          )}
          {status === "bad" && (
            <span className="inline-flex items-center gap-2 text-[13px] text-[#FF2C64]">
              • Número não encontrado na nossa lista oficial
              <br />
              LISTA OFICIAL 11 96596-3613, 11 97644-7837, 11 97644-7837,
              11 99441-9063, 11 99190-2755
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
