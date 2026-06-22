import { useState, type FormEvent } from "react";

// Declara window.gtag injetado pelo script do Google Ads
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const PROGRAMS = [
  "Dores Nunca Mais",
  "Coração Saudável",
  "Síndrome Metabólica",
  "Programa 60+",
  "Gestação Segura",
  "Bliss Platinum (Premium)",
  "Ainda não sei – quero conhecer",
];

const PHONE = "5561991868113";

type Props = {
  variant?: "light" | "dark";
  defaultProgram?: string;
};

export function LeadForm({ variant = "light", defaultProgram }: Props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [program, setProgram] = useState(defaultProgram ?? PROGRAMS[0]);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const isDark = variant === "dark";

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedPhone = phone.trim();
    if (!trimmedName || trimmedName.length < 2) {
      setError("Por favor, informe seu nome.");
      return;
    }
    if (!trimmedPhone || trimmedPhone.replace(/\D/g, "").length < 10) {
      setError("Por favor, informe um WhatsApp válido com DDD.");
      return;
    }
    setError(null);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 1100);

    // ── Disparo de conversão Google Ads ──────────────────────────────────────
    // Substitua 'SUBSTITUA_PELO_LABEL' pelo label da ação "Conversão Lead"
    // encontrado em Google Ads → Metas → Ações de conversão → Detalhes da tag
    try {
      if (typeof window.gtag === "function") {
        window.gtag("event", "conversion", {
          send_to: "AW-829830575/JESpCIzJgrgcEK_r2IsD",
          value: 1.0,
          currency: "BRL",
        });
      }
    } catch (_) {
      // window.gtag não disponível — não bloqueia o fluxo
    }
    // ────────────────────────────────────────────────────────────────────────

    const msg = `Olá! Meu nome é ${trimmedName} e tenho interesse em saber mais sobre o ${program}. Podem me chamar?`;
    const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const fieldClass = `bliss-field ${isDark ? "dark" : ""}`;

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full px-6 py-5">
      <div className={fieldClass}>
        <input
          id="bliss-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value.slice(0, 100))}
          placeholder=" "
          aria-label="Seu nome completo"
          required
        />
        <label htmlFor="bliss-name">Seu nome completo</label>
      </div>

      <div className={fieldClass}>
        <input
          id="bliss-phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value.slice(0, 20))}
          placeholder=" "
          aria-label="WhatsApp com DDD"
          required
        />
        <label htmlFor="bliss-phone">WhatsApp com DDD</label>
      </div>

      <div className={`${fieldClass} has-value`}>
        <select
          id="bliss-program"
          value={program}
          onChange={(e) => setProgram(e.target.value)}
          aria-label="Qual programa te interessa?"
        >
          {PROGRAMS.map((p) => (
            <option key={p} value={p} className="text-[#1C2B4A]">
              {p}
            </option>
          ))}
        </select>
        <label htmlFor="bliss-program">Programa de interesse</label>
      </div>

      {error && (
        <p className={`text-sm ${isDark ? "text-red-300" : "text-red-600"} -mt-1`}>{error}</p>
      )}

      <button
        type="submit"
        className={`bliss-btn w-full rounded-[6px] bg-[#C4963C] px-7 py-[15px] text-white font-semibold tracking-wide ${
          success ? "is-success" : ""
        }`}
      >
        <span className="relative z-10">
          {success ? "Abrindo WhatsApp…" : "Quero saber mais →"}
        </span>
      </button>
      <p className={`text-xs ${isDark ? "text-white/60" : "text-[#5A6875]"}`}>
        🔒 Seus dados estão seguros. Sem spam.
      </p>
    </form>
  );
}

export { PROGRAMS, PHONE };
