import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";

const Ctx = createContext({ ready: false });

export function HotmartProvider({ children }) {
  const [ready, setReady] = useState(false);
  const location = useLocation();

  // carrega CSS + JS 
  useEffect(() => {
    if (!document.querySelector('link[href="https://static.hotmart.com/css/hotmart-fb.min.css"]')) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://static.hotmart.com/css/hotmart-fb.min.css";
      document.head.appendChild(link);
    }

    const existing = document.querySelector('script[src="https://static.hotmart.com/checkout/widget.min.js"]');
    if (existing) {
      setReady(true);
      queueMicrotask(() => window.dispatchEvent(new Event("load")));
      return;
    }

    const s = document.createElement("script");
    s.src = "https://static.hotmart.com/checkout/widget.min.js";
    s.async = true;
    s.onload = () => {
      setReady(true);
      window.dispatchEvent(new Event("load"));
    };
    document.head.appendChild(s);
  }, []);

  // função para re-bind
  const rebind = () => {
    document.querySelectorAll("a.hotmart__button-checkout").forEach((a) => {
      a.setAttribute("onclick", "return false;");
    });
    window.dispatchEvent(new Event("load"));
  };

  // re-bind quando a rota muda
  useEffect(() => {
    if (!ready) return;
    const t = setTimeout(rebind, 0);
    return () => clearTimeout(t);
  }, [ready, location.pathname, location.hash]);

  // re-bind quando novos botões entram no DOM
  useEffect(() => {
    if (!ready) return;
    const ob = new MutationObserver((muts) => {
      for (const m of muts) {
        if ([...m.addedNodes].some(
          (n) =>
            n.nodeType === 1 &&
            (n.matches?.("a.hotmart__button-checkout") ||
              n.querySelector?.("a.hotmart__button-checkout"))
        )) {
          rebind();
          break;
        }
      }
    });
    ob.observe(document.body, { childList: true, subtree: true });
    return () => ob.disconnect();
  }, [ready]);

  const value = useMemo(() => ({ ready }), [ready]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export const useHotmart = () => useContext(Ctx);
