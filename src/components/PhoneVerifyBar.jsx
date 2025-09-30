
import { useEffect, useMemo, useRef, useState } from "react";

const OFFICIAL_NUMBERS = [
  
  "+55 (11) 91234-5678",
  "55 11 93333 2222",
  "(11) 99999-0000",
];

export default function PhoneVerifyBar() {
  const [value, setValue] = useState("");
  const [status, setStatus] = useState(null); 
  const inputRef = useRef(null);

  const officialDigits = useMemo(
    () => new Set(OFFICIAL_NUMBERS.map(n => onlyDigits(n))),
    []
  );

  useEffect(() => {
    
    setStatus(null);
  }, [value]);

  function onlyDigits(s) {
    return (s || "").replace(/\D+/g, "");
  }

  
  function maskPhone(raw) {
    const d = onlyDigits(raw).slice(0, 11); 
   
    const hasDDD = d.length >= 10;
    const ddd = hasDDD ? d.slice(-11, -9) : "";
    const rest = hasDDD ? d.slice(-9) : d;

    if (!ddd) return rest; 

    const cinco = rest.length === 9; // celular
    const p1 = cinco ? rest.slice(0, 5) : rest.slice(0, 4);
    const p2 = cinco ? rest.slice(5) : rest.slice(4);

    return `(${ddd}) ${p1}${p2 ? "-" + p2 : ""}`;
  }

  function handleChange(e) {
    const masked = maskPhone(e.target.value);
    setValue(masked);
  }

  function handleVerify() {
    
    const d = onlyDigits(value);
    if (!d) return setStatus("bad");

    
    const isOfficial = [...officialDigits].some(stored => {
      const a = stored.slice(-11); // DDD + 9
      const b = d.slice(-11);
      return a === b;
    });

    setStatus(isOfficial ? "ok" : "bad");
  }

  function onKeyDown(e) {
    if (e.key === "Enter") handleVerify();
  }

  return (
    <section className="w-full bg-gradient-to-r from-[#0D0A0B] via-[#242424] to-[#0D0A0B] text-white">
      <div className="max-w-[1440px] mx-auto px-6 py-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-extrabold">
              Alguém da escola entrou em contato com você?
            </h3>
            <p className="text-sm text-white/80">
              Verifique nossos números oficiais:
            </p>
          </div>

          {/* form */}
          <div className="flex items-center justify-center gap-2">
            <label htmlFor="phone-verify" className="sr-only">
              Número de telefone
            </label>
            <input
              id="phone-verify"
              ref={inputRef}
              inputMode="numeric"
              placeholder="(11) 99199-9999"
              value={value}
              onChange={handleChange}
              onKeyDown={onKeyDown}
              className="h-10 w-[200px] md:w-[240px] rounded-full bg-white text-[#0B0B15] px-4 text-sm outline-none
                         focus:ring-2 focus:ring-[#C2F738]"
            />
            <button
              onClick={handleVerify}
              className="h-10 px-5 rounded-full bg-black text-white text-sm font-semibold
                         border border-white/10 hover:bg-white hover:text-black transition"
            >
              VERIFICAR
            </button>
          </div>
        </div>

        {/* resposta do numero */}
        <div
          className="mt-3 min-h-[1.25rem] text-center md:text-right"
          aria-live="polite"
        >
          {status === "ok" && (
            <span className="inline-flex items-center gap-2 text-[13px] text-[#C2F738]">
              ✓ Número oficial
            </span>
          )}
          {status === "bad" && (
            <span className="inline-flex items-center gap-2 text-[13px] text-[#FF2C64]">
              • Número não encontrado na nossa lista oficial
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
