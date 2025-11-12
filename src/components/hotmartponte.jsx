// src/components/HotmartWidgetBridge.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function HotmartPonte() {
  const { pathname } = useLocation();

  useEffect(() => {
    // garante CSS (caso alguém remova)
    const cssHref = "https://static.hotmart.com/css/hotmart-fb.min.css";
    if (!document.querySelector(`link[href="${cssHref}"]`)) {
      const l = document.createElement("link");
      l.rel = "stylesheet";
      l.href = cssHref;
      document.head.appendChild(l);
    }
  }, []);

  useEffect(() => {
    // Se a página atual tem botões Hotmart, reinjeta o script para re-binder
    const hasButtons = !!document.querySelector(".hotmart__button-checkout");
    if (!hasButtons) return;

    const src = "https://static.hotmart.com/checkout/widget.min.js";
    // remove instâncias antigas pra forçar re-execução
    document.querySelectorAll(`script[src="${src}"]`).forEach(s => s.remove());

    const s = document.createElement("script");
    s.src = src;
    s.defer = true;
    s.onload = () => { window._HM_WIDGET_READY = true; };
    document.head.appendChild(s);
  }, [pathname]);

  return null;
}
