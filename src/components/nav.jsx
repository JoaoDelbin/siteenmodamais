import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

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

      <header className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between text-sm">
        <div className="text-xl md:text-4xl text-[#FF2C64]">enmoda+</div>


        <nav className="hidden md:flex items-center gap-6 text-gray-300">
          <a>Assinatura</a><a>Conteúdo</a><a>Assinantes</a>
          <a>Sobre nós</a><a>Enterprise</a><a>Dúvidas</a>
        </nav>

   
        <div className="flex items-center gap-2">
          <button className="hidden md:inline px-4 py-1.5 rounded-full bg-[#C2F738] text-[#32410A] hover:shadow-[0_0_8px_1px_#C2F738]">
            ASSINE AGORA
          </button>
          <button className="hidden md:inline px-4 py-1.5 rounded-full text-white border-2 border-[#FF2C64] hover:bg-[#FF2C64]">
            SOU ASSINANTE
          </button>

       
          <button
            className="md:hidden text-white"
            onClick={() => setOpen(true)}
            aria-label="Abrir menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-200
        ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />

      <aside
        className={`fixed right-0 top-0 z-50 h-screen w-80 max-w-[85%]
        bg-[#0D0A0B] border-r border-white/10 shadow-2xl
        transition-transform duration-300 ease-out
        ${open ? 'translate-x-0' : 'translate-x-full'}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
          <div className="font-extrabold text-lg">enmoda+</div>
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
          <a onClick={() => setOpen(false)} className="py-2 border-b border-white/5">Assinatura</a>
          <a onClick={() => setOpen(false)} className="py-2 border-b border-white/5">Conteúdo</a>
          <a onClick={() => setOpen(false)} className="py-2 border-b border-white/5">Assinantes</a>
          <a onClick={() => setOpen(false)} className="py-2 border-b border-white/5">Sobre nós</a>
          <a onClick={() => setOpen(false)} className="py-2 border-b border-white/5">Enterprise</a>
          <a onClick={() => setOpen(false)} className="py-2">Dúvidas</a>

          <div className="h-px w-full bg-white/10 my-2" />

          <button
            className="mt-2 px-4 py-2 rounded-full bg-[#C2F738] text-[#32410A] font-semibold hover:bg-[#B4E436]">
            ASSINE AGORA
          </button>
          <button
            className="mt-2 px-4 py-2 rounded-full text-white border-2 border-[#FF2C64] hover:bg-[#FF2C64]">
            SOU ASSINANTE
          </button>
        </nav>
      </aside>
    </>
  );
}
