import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);
  const closeBtnRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    document.body.classList.toggle("overflow-hidden", open);
    if (open) setTimeout(() => closeBtnRef.current?.focus(), 0);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.classList.remove("overflow-hidden");
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 bg-[#0D0A0B]/85 backdrop-blur border-b border-white/10">
        <div className="  max-w-6xl mx-auto px-6 py-5 flex items-center justify-between text-sm">
        <Link to="/" className="text-xl md:text-4xl text-[#FF2C64]">enmoda+</Link>

        <nav className="hidden md:flex items-center gap-6 text-gray-300">
          <Link to="/assinatura">Assinatura</Link>
          <Link to="/conteudo">Conteúdo</Link>
          <Link to="/assinantes">Assinantes</Link>
          <Link to="/sobre">Sobre nós</Link>
          <Link to="/enterprise">Enterprise</Link>
          <Link to="/duvidas">Dúvidas</Link>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/assinar"
            className="hidden md:inline px-4 py-1.5 rounded-full bg-[#C2F738] text-[#32410A] hover:shadow-[0_0_8px_1px_#C2F738]"
          >
            ASSINE AGORA
          </Link>
          <Link
            to="/login"
            className="hidden md:inline px-4 py-1.5 rounded-full text-white border-2 border-[#FF2C64] hover:bg-[#FF2C64]"
          >
            SOU ASSINANTE
          </Link>

          <button
            className="md:hidden text-white"
            onClick={() => setOpen(true)}
            aria-label="Abrir menu"
          >
            <Menu size={28} />
          </button>
        </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-200 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />

      <aside
        className={`fixed right-0 top-0 z-50 h-screen w-80 max-w-[85%] bg-[#0D0A0B] border-r border-white/10 shadow-2xl transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
          <Link to="/" className="text-xl md:text-4xl text-[#FF2C64]">enmoda+</Link>
          <button
            ref={closeBtnRef}
            className="text-white/80 hover:text-white"
            onClick={() => setOpen(false)}
            aria-label="Fechar menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="px-5 py-4 flex flex-col gap-3 text-gray-200">
          <Link to="/assinatura" onClick={() => setOpen(false)} className="py-2 border-b border-white/5">Assinatura</Link>
          <Link to="/conteudo"   onClick={() => setOpen(false)} className="py-2 border-b border-white/5">Conteúdo</Link>
          <Link to="/assinantes" onClick={() => setOpen(false)} className="py-2 border-b border-white/5">Assinantes</Link>
          <Link to="/sobre"      onClick={() => setOpen(false)} className="py-2 border-b border-white/5">Sobre nós</Link>
          <Link to="/enterprise" onClick={() => setOpen(false)} className="py-2 border-b border-white/5">Enterprise</Link>
          <Link to="/duvidas"    onClick={() => setOpen(false)} className="py-2">Dúvidas</Link>

          <div className="h-px w-full bg-white/10 my-2" />

          <Link
            to="/assinar"
            onClick={() => setOpen(false)}
            className="mt-2 px-4 py-2 rounded-full bg-[#C2F738] text-[#32410A] text-center font-semibold hover:bg-[#B4E436]"
          >
            ASSINE AGORA
          </Link>
          <Link
            to="/login"
            onClick={() => setOpen(false)}
            className="mt-2 px-4 py-2 rounded-full  text-center text-white border-2 border-[#FF2C64] hover:bg-[#FF2C64]"
          >
            SOU ASSINANTE
          </Link>
        </nav>
      </aside>
    </>
  );
}
