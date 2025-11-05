// src/components/EnterpriseHero.jsx
import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";


const BRAND = { accent: "#FF2C64", pillBg: "rgba(255,44,100,0.12)", cardBg: "#110E0F" };

// Links/configs
const PERSONAL_URL = "/assinatura"; 
const WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbyjQA19wIiFYb7YNS6HeajNK-juOV0BxhCBntF5_NROvJWo5aXPfPdc3MHJVW9pCQ8/exec";             //  Web App URL do Apps Script


function cx(...classes) { return classes.filter(Boolean).join(" "); }
const validateEmail = (v) => /\S+@\S+\.[\w-]{2,}/.test((v || "").trim());
const onlyDigits = (v) => (v || "").replace(/\D/g, "");


const formatPhoneBR = (raw) => {
  const d = onlyDigits(raw);
  if (!d) return "";
  const withCc = d.startsWith("55") ? d : `55${d}`;
  const p = withCc.slice(2);
  const ddd = p.slice(0, 2);
  const rest = p.slice(2);
  if (!ddd) return "+55 (";
  if (rest.length <= 4) return `+55 (${ddd}) ${rest}`;
  if (rest.length <= 9) return `+55 (${ddd}) ${rest.slice(0, 5)}-${rest.slice(5)}`;
  return `+55 (${ddd}) ${rest.slice(0, 5)}-${rest.slice(5, 9)}`;
};
const isValidPhoneBR = (raw) => {
  const d = onlyDigits(raw);
  const withCc = d.startsWith("55") ? d : `55${d}`;
  const national = withCc.slice(2); // DDD + número
  return national.length === 10 || national.length === 11; // permite  se 10/11 dígitos
};

export default function EnterpriseHero() {
  const [step, setStep] = useState(0); // 0..2
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const [s1, setS1] = useState({ nome: "", email: "", telefone: "" });
  const [s2, setS2] = useState({
    interesse: "Estou apenas pesquisando",
    orcamento: "Até R$1.000",
    tamanho: "Até 10 pessoas",
    area: "Recursos Humanos",
  });
  const [s3, setS3] = useState({ mensagem: "" });

  const progress = useMemo(() => (step + 1) / 3, [step]);

  function next() {
    if (step === 0) {
      if (!s1.nome.trim() || !validateEmail(s1.email) || !isValidPhoneBR(s1.telefone)) return; // <- validação corrigida
    }
    setStep((p) => Math.min(2, p + 1));
  }
  function prev() { setStep((p) => Math.max(0, p - 1)); }

  async function onSubmit(e) {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    try {
      const payload = { ...s1, ...s2, ...s3, fonte: "enmoda-empresas-hero", tipo: "lead-enterprise", };

      if (WEBHOOK_URL) {
        await fetch(WEBHOOK_URL, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      } else {
        console.log("[Lead] Enviando payload:", payload);
      }

      setSent(true);
    } catch (err) {
      console.error(err);
      alert("Não foi possível enviar agora. Tente novamente.");
    } finally { setSubmitting(false); }
  }

  return (
    <section className="relative isolate overflow-hidden">
      
      <div aria-hidden className="absolute inset-0 -z-10 bg-[#0D0A0B]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          <div className=" space-between text-white/90">
            <h1 className="text-5xl md:text-7xl font-semibold leading-tight text-white">
              <span className="text-[#FF2C64] font-light">enmoda+</span></h1> <p className="mb-0 md:mb-5 text-4xl sm:text-5xl font-bold leading-tight text-white">para Empresas</p>
            
            <p className="mt-4 md:mt-10 text-lg md:text-2xl font-md text-white max-w-[500px]">
              Treine, desenvolva e inspire seu time com a primeira plataforma de streaming 100% de moda do Brasil.
            </p>
            <p className="mt-2 md:mt-4 max-w-2xl text-sm md:text-lg text-white/80">
              Quer transformar o desenvolvimento do seu time de moda? Preencha o formulário e nossa equipe entrará em
              contato com uma proposta sob medida para sua empresa.
            </p>
          </div>

          
          <div>
            <div className="rounded-2xl border border-white/10 shadow-2xl backdrop-blur [box-shadow:0_10px_40px_rgba(15,0,4,20)]" style={{ background: BRAND.cardBg }}>
              <div className="p-6 sm:p-8">
                {!sent ? (
                  <>
                    <h2 className="text-xl sm:text-2xl font-semibold text-white">Leve a Enmoda+ para a sua empresa.</h2>

                   
                    <div className="mt-5 flex items-center gap-2" aria-hidden>
                      {Array.from({ length: 4 }).map((_, i) => (
                        <span key={i} className={cx("h-1.5 grow rounded-full", i < Math.ceil(progress * 3) ? "bg-pink-500" : "bg-white/15")} />
                      ))}
                    </div>

                    <form className="mt-6 min-h-[26rem]" onSubmit={onSubmit}>
                      {step === 0 && (
                        <div className="grid grid-cols-1 gap-4">
                          <div>
                            <label htmlFor="nome" className="block text-sm text-white/70">Nome</label>
                            <div className="relative">
                              <input id="nome" autoComplete="name" value={s1.nome}
                                onChange={(e) => setS1({ ...s1, nome: e.target.value })}
                                className="mt-1 w-full rounded-md bg-black/30 px-3 py-2 text-white placeholder-white/40 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-white/30"
                                placeholder="Seu nome completo" />
                              {s1.nome.trim() && (<Check className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-green-400" />)}
                            </div>
                          </div>

                          <div>
                            <label htmlFor="email" className="block text-sm text-white/70">E-mail</label>
                            <div className="relative">
                              <input id="email" type="email" autoComplete="email" value={s1.email}
                                onChange={(e) => setS1({ ...s1, email: e.target.value })}
                                className="mt-1 w-full rounded-md bg-black/30 px-3 py-2 text-white placeholder-white/40 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-white/30"
                                placeholder="seuemail@empresa.com" />
                              {validateEmail(s1.email) && (<Check className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-green-400" />)}
                            </div>
                          </div>

                          <div>
                            <label htmlFor="telefone" className="block text-sm text-white/70">Telefone</label>
                            <div className="relative">
                              <input id="telefone" inputMode="tel" value={s1.telefone}
                                onChange={(e) => setS1({ ...s1, telefone: formatPhoneBR(e.target.value) })}
                                className="mt-1 w-full rounded-md bg-black/30 px-3 py-2 text-white placeholder-white/40 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-white/30"
                                placeholder="+55 (11) 99999-9999" />
                              {isValidPhoneBR(s1.telefone) && (<Check className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-green-400" />)}
                            </div>
                          </div>
                        </div>
                      )}

                      {step === 1 && (
                        <div className="grid grid-cols-1 gap-4">
                          <div>
                            <label className="block text-sm text-white/70">Nível de interesse</label>
                            <select value={s2.interesse} onChange={(e) => setS2({ ...s2, interesse: e.target.value })}
                              className="mt-1 w-full rounded-md bg-black/30 px-3 py-2 text-white outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-white/30">
                              <option>Estou apenas pesquisando</option>
                              <option>Quero avaliar a Enmoda+</option>
                              <option>Pronto(a) para contratar</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm text-white/70">Orçamento estimado</label>
                            <select value={s2.orcamento} onChange={(e) => setS2({ ...s2, orcamento: e.target.value })}
                              className="mt-1 w-full rounded-md bg-black/30 px-3 py-2 text-white outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-white/30">
                              <option>Até R$1.000</option>
                              <option>R$1.000 a R$5.000</option>
                              <option>R$5.000 a R$15.000</option>
                              <option>Acima de R$15.000</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm text-white/70">Tamanho do time</label>
                            <select value={s2.tamanho} onChange={(e) => setS2({ ...s2, tamanho: e.target.value })}
                              className="mt-1 w-full rounded-md bg-black/30 px-3 py-2 text-white outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-white/30">
                              <option>Até 10 pessoas</option>
                              <option>11 a 50 pessoas</option>
                              <option>51 a 200 pessoas</option>
                              <option>200+ pessoas</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm text-white/70">Sua área</label>
                            <select value={s2.area} onChange={(e) => setS2({ ...s2, area: e.target.value })}
                              className="mt-1 w-full rounded-md bg-black/30 px-3 py-2 text-white outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-white/30">
                              <option>Recursos Humanos</option>
                              <option>Diretoria</option>
                              <option>Comercial</option>
                              <option>Operações</option>
                              <option>Outros</option>
                            </select>
                          </div>
                        </div>
                      )}

                      {step === 2 && (
                        <div className="grid grid-cols-1 gap-4">
                          <div>
                            <label htmlFor="mensagem" className="block text-sm text-white/70">Fale um pouco sobre suas necessidades</label>
                            <textarea id="mensagem" rows={5} value={s3.mensagem}
                              onChange={(e) => setS3({ mensagem: e.target.value })}
                              className="mt-1 w-full rounded-md bg-black/30 px-3 py-2 text-white placeholder-white/40 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-white/30"
                              placeholder="Ex.: Trilha para equipe de estilo/compra, metas trimestrais, formatos (ao vivo, on-demand) etc." />
                          </div>
                          <p className="text-xs text-white/60">
                            Ao enviar, você concorda em receber comunicações da Enmoda+ conforme nossa Política de Privacidade.
                          </p>
                        </div>
                      )}

                      
                      <div className="mt-6 flex flex-col-reverse sm:flex-row gap-3">
                        {step > 0 && (
                          <button type="button" onClick={prev}
                            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-transparent px-4 py-2 text-sm font-medium text-white/90 hover:bg-white/5">
                            <ArrowLeft className="mr-2 h-4 w-4" /> Voltar
                          </button>
                        )}

                        {step < 2 && (
                          <button type="button" onClick={next}
                            disabled={step === 0 && (!s1.nome.trim() || !validateEmail(s1.email) || !isValidPhoneBR(s1.telefone))}
                            className={cx(
                              "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white transition",
                              "shadow-[0_8px_30px_rgba(255,44,100,0.35)]",
                              step === 0 && (!s1.nome.trim() || !validateEmail(s1.email) || !isValidPhoneBR(s1.telefone))
                                ? "bg-white/10 cursor-not-allowed"
                                : "hover:opacity-90"
                            )}
                            style={{
                              backgroundColor:
                                step === 0 && (!s1.nome.trim() || !validateEmail(s1.email) || !isValidPhoneBR(s1.telefone))
                                  ? undefined
                                  : BRAND.accent,
                            }}>
                            Continuar <ArrowRight className="ml-2 h-4 w-4" />
                          </button>
                        )}

                        {step === 2 && (
                          <button type="submit" disabled={submitting}
                            className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white hover:opacity-90 shadow-[0_8px_30px_rgba(255,44,100,0.35)]"
                            style={{ backgroundColor: BRAND.accent }}>
                            {submitting ? "Enviando…" : "Quero conversar com a Enmoda+"}
                          </button>
                        )}
                      </div>

                      
                      <div className="mt-4">
                        <a href={PERSONAL_URL} className="text-xs text-white/70 underline underline-offset-2">
                          Estou em busca de desenvolvimento pessoal, não para equipes.
                        </a>
                      </div>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <div className="mx-auto mb-4 grid place-items-center h-12 w-12 rounded-full bg-green-500/20">
                      <Check className="h-6 w-6 text-green-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">Recebemos seu pedido!</h3>
                    <p className="mt-2 text-white/80">
                      Nossa equipe entrará em contato para entender suas necessidades e enviar uma proposta sob medida.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
