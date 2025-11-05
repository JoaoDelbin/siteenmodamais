
import { useEffect, useMemo, useRef, useState } from "react";

const OFFICIAL_NUMBERS = [
  
   "+55 11 96596-3613", "+55 11 97644-7837", "11 97644-7837", "+55 11 99441-9063", "+55 11 99190-2755",
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

    const cinco = rest.length === 9; 
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
      const a = stored.slice(-11); 
      const b = d.slice(-11);
      return a === b;
    });

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
          inputMode="numeric"
          placeholder="(11) 99199-9999"
          value={value}
          onChange={handleChange}
          onKeyDown={onKeyDown}
          className="
            h-10 w-[200px] md:w-[240px]
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
             <br />LISTA OFICIAL 11 96596-3613, 11 97644-7837, 11 97644-7837, 11 99441-9063, 11 99190-2755
          </span>
        )}
      </div>
    </div>
  </section>
            ); 
}