import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // Se tiver âncora (#planos), rola até ela; senão, vai para o topo
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname, location.hash]);

  return null;
}