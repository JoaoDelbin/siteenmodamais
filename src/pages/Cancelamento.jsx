
import { useState } from "react";
import { AlertCircle, Check } from "lucide-react";

// MESMA URL do Apps Script que você já usa no Enterprise / Depoimento
const WEBHOOK_URL =
  "https://script.google.com/macros/s/AKfycbwcbiBHVRk6dXyVjlUKfqNyxUKCxjw5_wosm2sr3e_FdZW-rZ8mSeWhmDoL8oRkEBw/exec";

// helpers simples
const validateEmail = (v) => /\S+@\S+\.[\w-]{2,}/.test((v || "").trim());
const onlyDigits = (v) => (v || "").replace(/\D/g, "");

// formato BR bonitinho (mesma ideia do enterprise)
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

export default function Cancelamento() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    whatsapp: "",
    dataCompra: "",
    cpf: "",
    motivo: "",
    outroMotivo: "",
  });

  const [enviando, setEnviando] = useState(false);
  const [ok, setOk] = useState(false);
  const [erro, setErro] = useState("");

  const motivos = [
    "Insatisfação com o conteúdo",
    "Preço",
    "Dificuldade de uso da plataforma",
    "Falta de tempo para assistir",
    "Motivo pessoal",
    "Outro",
  ];

  const isOutro = form.motivo === "Outro";

  function handleChange(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function isValid() {
    return (
      form.nome.trim() &&
      validateEmail(form.email) &&
      form.whatsapp.trim() &&
      form.dataCompra.trim() &&
      form.cpf.trim() &&
      form.motivo &&
      (!isOutro || form.outroMotivo.trim())
    );
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setErro("");

    if (!isValid()) {
      setErro("Preencha todos os campos obrigatórios.");
      return;
    }

    try {
      setEnviando(true);

      const payload = {
        tipo: "cancelamento-assinatura",
        nome: form.nome,
        email: form.email,
        whatsapp: form.whatsapp,
        dataCompra: form.dataCompra,
        cpf: form.cpf,
        motivo: form.motivo,
        outroMotivo: form.outroMotivo,
        fonte: "pagina-cancelamento",
      };

      await fetch(WEBHOOK_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      setOk(true);
      setForm({
        nome: "",
        email: "",
        whatsapp: "",
        dataCompra: "",
        cpf: "",
        motivo: "",
        outroMotivo: "",
      });
    } catch (err) {
      console.error(err);
      setErro("Não foi possível enviar agora. Tente novamente em instantes.");
    } finally {
      setEnviando(false);
    }
  }

  return (
    <main className="bg-[#0D0A0B] min-h-screen">
      <section className="max-w-3xl mx-auto px-6 py-16 lg:py-24">
        <h1 className="text-3xl md:text-5xl font-bold text-white">
          Cancelamento
        </h1>
        <p className="mt-3 text-white/80 text-base md:text-lg max-w-2xl">
          Preencha o formulário abaixo para solicitar o cancelamento da sua
          assinatura. Nossa equipe fará o processamento em até{" "}
          <span className="font-semibold">48 horas úteis</span>.
        </p>

        <div className="mt-8 rounded-2xl border border-white/10 bg-[rgba(20,20,20,0.9)] shadow-[0_10px_40px_rgba(0,0,0,0.6)]">
          <form className="p-6 sm:p-8 space-y-5" onSubmit={handleSubmit}>
            {/* Nome */}
            <div>
              <label className="block text-sm text-white/70 mb-1">
                Nome completo*
              </label>
              <input
                type="text"
                value={form.nome}
                onChange={(e) => handleChange("nome", e.target.value)}
                className="w-full rounded-full bg-black/40 px-4 py-2.5 text-white placeholder-white/40 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-white/30"
                placeholder="Seu nome completo"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm text-white/70 mb-1">
                E-mail cadastrado*
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className="w-full rounded-full bg-black/40 px-4 py-2.5 text-white placeholder-white/40 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-white/30"
                placeholder="seuemail@exemplo.com"
              />
            </div>

            {/* WhatsApp */}
            <div>
              <label className="block text-sm text-white/70 mb-1">
                WhatsApp*
              </label>
              <input
                type="tel"
                value={form.whatsapp}
                onChange={(e) =>
                  handleChange("whatsapp", formatPhoneBR(e.target.value))
                }
                className="w-full rounded-full bg-black/40 px-4 py-2.5 text-white placeholder-white/40 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-white/30"
                placeholder="+55 (11) 99999-9999"
              />
            </div>

            {/* Data compra + CPF */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-white/70 mb-1">
                  Data da compra*
                </label>
                <input
                  type="date"
                  value={form.dataCompra}
                  onChange={(e) => handleChange("dataCompra", e.target.value)}
                  className="w-full rounded-full bg-black/40 px-4 py-2.5 text-white placeholder-white/40 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-white/30"
                />
              </div>
              <div>
                <label className="block text-sm text-white/70 mb-1">
                  CPF de compra*
                </label>
                <input
                  type="text"
                  value={form.cpf}
                  onChange={(e) => handleChange("cpf", e.target.value)}
                  className="w-full rounded-full bg-black/40 px-4 py-2.5 text-white placeholder-white/40 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-white/30"
                  placeholder="000.000.000-00"
                />
              </div>
            </div>

            {/* Motivo */}
            <div>
              <label className="block text-sm text-white/70 mb-1">
                Motivo do cancelamento*
              </label>
              <select
                value={form.motivo}
                onChange={(e) => handleChange("motivo", e.target.value)}
                className="w-full rounded-full bg-black/40 px-4 py-2.5 text-white outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-white/30"
              >
                <option value="">Selecione…</option>
                {motivos.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
            </div>

            {/* Outro motivo */}
            {isOutro && (
              <div>
                <label className="block text-sm text-white/70 mb-1">
                  Detalhe o motivo
                </label>
                <textarea
                  rows={3}
                  value={form.outroMotivo}
                  onChange={(e) => handleChange("outroMotivo", e.target.value)}
                  className="w-full rounded-xl bg-black/40 px-4 py-2.5 text-white placeholder-white/40 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-white/30"
                  placeholder="Conte brevemente o motivo do cancelamento"
                />
              </div>
            )}

            {/* Avisos / Erro / Sucesso */}
            {erro && (
              <div className="flex items-center gap-2 text-sm text-red-400">
                <AlertCircle className="h-4 w-4" />
                <span>{erro}</span>
              </div>
            )}

            {ok && (
              <div className="flex items-center gap-2 text-sm text-emerald-400">
                <Check className="h-4 w-4" />
                <span>
                  Recebemos sua solicitação de cancelamento. Em breve nossa
                  equipe entrará em contato.
                </span>
              </div>
            )}

            {/* Botão */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={enviando || !isValid()}
                className={`w-full rounded-full px-6 py-3 text-sm md:text-base font-semibold text-white shadow-[0_8px_30px_rgba(255,44,100,0.35)] transition ${
                  enviando || !isValid()
                    ? "bg-white/10 cursor-not-allowed"
                    : "bg-[#FF2C64] hover:opacity-90"
                }`}
              >
                {enviando ? "Enviando…" : "Solicitar cancelamento"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
