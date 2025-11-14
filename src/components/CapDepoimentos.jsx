
import { useState } from "react";
import { Send, CheckCircle2, Quote } from "lucide-react";
import { Link } from "react-router-dom";

const ACCENT = "#FF2C64";
const CARD_BG = "#110E0F";


const TESTIMONIAL_WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbyTEzoKNjkaFAI3KvFYOPXTB8B67Zb-IkaEw78bQ8c3YNPqsQqc3gVqm8BJj1HP9lOf/exec";

const validateEmail = (v) => /\S+@\S+\.[\w-]{2,}/.test((v || "").trim());

export default function SubscribersTestimonialSection() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const isValid =
    form.nome.trim().length > 1 &&
    validateEmail(form.email) &&
    form.mensagem.trim().length >= 10;

  async function handleSubmit(e) {
    e.preventDefault();
    if (!isValid || submitting) return;

    setSubmitting(true);
    try {
      const payload = {
        ...form,
        tipo: "depoimento-assinante",
        fonte: "pagina-assinatura",
      };

      if (TESTIMONIAL_WEBHOOK_URL) {
        await fetch(TESTIMONIAL_WEBHOOK_URL, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      } else {
        console.log("[Depoimento] Payload:", payload);
      }

      setSent(true);
    } catch (err) {
      console.error(err);
      alert("Não foi possível enviar seu depoimento agora. Tente novamente.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="bg-[#0D0A0B]">
      <div className="max-w-7xl mx-auto px-6 pt-10 pb-16 mt-10">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold">
            Compartilhe sua experiência com a <span className="text-[#FF2C64]">enmoda+</span>
          </h2>
          <p className="mt-2 md:mt-4 text-md md:text-2xl text-gray-200">
            Seu depoimento ajuda outras pessoas a entenderem como a plataforma transforma carreiras.
          </p>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] items-start">
          {/* FORMULÁRIO */}
          <div
            className="rounded-2xl border border-white/10 p-6 sm:p-8"
            style={{ background: CARD_BG }}
          >
            {!sent ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="nome" className="block text-sm text-white/70">
                    Nome
                  </label>
                  <input
                    id="nome"
                    type="text"
                    value={form.nome}
                    onChange={(e) => setForm({ ...form, nome: e.target.value })}
                    className="mt-1 w-full rounded-md bg-black/30 px-3 py-2 text-white placeholder-white/40 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-white/30"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-white/70">
                    E-mail
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="mt-1 w-full rounded-md bg-black/30 px-3 py-2 text-white placeholder-white/40 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-white/30"
                    placeholder="seuemail@exemplo.com"
                  />
                </div>

                <div>
                  <label htmlFor="mensagem" className="block text-sm text-white/70">
                    Seu depoimento
                  </label>
                  <textarea
                    id="mensagem"
                    rows={5}
                    value={form.mensagem}
                    onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                    className="mt-1 w-full rounded-md bg-black/30 px-3 py-2 text-white placeholder-white/40 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-white/30"
                    placeholder="Conte como a enmoda+ tem te ajudado na sua carreira ou estudos."
                  />
                  <p className="mt-1 text-xs text-white/50">
                    Mínimo de 10 caracteres.
                  </p>
                </div>

                <p className="text-xs text-white/60">
                  Ao enviar, você autoriza a enmoda+ a utilizar seu depoimento em materiais de comunicação,
                  preservando seus dados pessoais conforme nossa <Link className="text-white " to="/politica-de-privacidade">Política de Privacidade.</Link>
                </p>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={!isValid || submitting}
                    className={`inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold text-white shadow-[0_8px_30px_rgba(255,44,100,0.35)] transition ${
                      !isValid || submitting ? "bg-white/10 cursor-not-allowed" : "hover:opacity-90"
                    }`}
                    style={{ backgroundColor: !isValid || submitting ? undefined : ACCENT }}
                  >
                    {submitting ? "Enviando..." : "Enviar depoimento"}
                    <Send className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="mx-auto mb-4 grid place-items-center h-12 w-12 rounded-full bg-green-500/20">
                  <CheckCircle2 className="h-6 w-6 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">Depoimento enviado!</h3>
                <p className="mt-2 text-white/80">
                  Obrigado por compartilhar sua experiência com a enmoda+. Seu relato pode aparecer em nossas páginas
                  e materiais, inspirando outros profissionais.
                </p>
              </div>
            )}
          </div>

          
          <div className="space-y-4">
            <div className="rounded-2xl border border-white/10 p-6" style={{ background: "#0F0C0D" }}>
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="grid h-10 w-10 place-items-center rounded-full text-[#FF2C64] ring-1 ring-[#FF2C64]/30"
                  style={{ background: "rgba(255,44,100,0.15)" }}
                >
                  <Quote className="h-5 w-5" />
                </span>
                <h3 className="text-lg md:text-xl font-semibold">Por que seu depoimento importa?</h3>
              </div>
              <p className="text-white/80 text-sm md:text-base">
                Histórias reais ajudam outras pessoas a entender o impacto da enmoda+ na prática, na carreira, nas
                oportunidades e na confiança profissional.
              </p>
            </div>

            <div className="rounded-2xl border border-white/5 p-5 text-sm md:text-base text-white/75">
              <p className="italic">
                &quot;Depois que comecei a estudar pela enmoda+, consegui aplicar muito melhor o que aprendo no meu dia a dia,
                e isso fez diferença nas minhas entregas e nas conversas com o time.&quot;
              </p>
              <p className="mt-2 text-white/60 text-xs">Exemplo de depoimento de assinante</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
