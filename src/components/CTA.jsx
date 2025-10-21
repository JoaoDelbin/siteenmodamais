import { forwardRef } from "react";
import { Link } from "react-router-dom";

// juntar classes
function cx(...args) {
  return args.filter(Boolean).join(" ");
}

const base =
  "inline-flex items-center justify-center rounded-full font-bold transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#FF2C64]/50";

const sizes = {
  md: "px-3 py-1 text-base md:px-4 md:py-1.5 md:text-lg",
  lg: "px-4 py-2 text-lg md:px-5 md:py-2 md:text-xl",
};

const variants = {
  // Verde (CTA principal)
  primary:
    "bg-[#C2F738] text-[#32410A] hover:shadow-[0_0_10px_2px_#C2F738]",
  // Preto com borda branca (secundário)
  outline:
    "bg-black text-white border border-white/80 hover:bg-white/10",
  // Preto “simples”
  dark: "bg-white/[0.06] text-white hover:bg-white/[0.1] border border-white/10",
};

const CTAButton = forwardRef(
  (
    {
      as,          
      to,          
      href,        
      onClick,
      variant = "primary",
      size = "md",
      className,
      children,
      ...rest
    },
    ref
  ) => {
  
    const Component = as || (to ? Link : href ? "a" : "button");

    const props = {
      ref,
      className: cx(base, sizes[size], variants[variant], className),
      onClick,
      ...rest,
    };

    if (to) props.to = to;
    if (href) {
      props.href = href;
      
      if (/^https?:\/\//i.test(href)) {
        props.target = props.target ?? "_blank";
        props.rel = props.rel ?? "noopener noreferrer";
      }
    }
    if (!to && !href) props.type = props.type || "button";

    return <Component {...props}>{children}</Component>;
  }
);

export default CTAButton;

