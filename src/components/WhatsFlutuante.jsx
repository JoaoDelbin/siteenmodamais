
import { useRef, useState } from "react";
import { MessageCircle } from "lucide-react";


const WHATSAPP_NUMBER = "5511965963613"; 
const WHATSAPP_MESSAGE =
  "Olá! Vim pelo site da enmoda+ e gostaria de saber mais.";

export default function WhatsAppFloat() {
  const [showLabel, setShowLabel] = useState(false);
  const hideTimeout = useRef(null);

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;

  function handleEnter() {
    if (hideTimeout.current) {
      clearTimeout(hideTimeout.current);
      hideTimeout.current = null;
    }
    setShowLabel(true);
  }

  function handleLeave() {
    hideTimeout.current = setTimeout(() => {
      setShowLabel(false);
      hideTimeout.current = null;
    }, 1000); 
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      aria-label="Fale com a equipe pelo WhatsApp"
      className="fixed z-40 bottom-4 right-4 md:bottom-6 md:right-6"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onFocus={handleEnter}
      onBlur={handleLeave}
    >
      <div className="flex items-center gap-3">
        {showLabel && (
          <div className="px-3 py-1.5 rounded-full bg-black/80 text-white text-xs md:text-sm shadow-lg border border-white/10 max-w-[180px]">
            Fale conosco pelo WhatsApp
          </div>
        )}

        <div className="relative">
         
          <span
            aria-hidden
            className="absolute inset-0 rounded-full bg-[#25D366]/30 blur-md animate-pulse"
          />
        
          <div className="relative grid h-12 w-12 md:h-14 md:w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40 hover:scale-105 transition-transform">
            <MessageCircle className="h-6 w-6" />
          </div>
        </div>
      </div>
    </a>
  );
}
