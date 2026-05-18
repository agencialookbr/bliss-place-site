import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Navbar } from "@/components/bliss/Navbar";
import { LeadForm } from "@/components/bliss/LeadForm";
import { WhatsAppFab } from "@/components/bliss/WhatsAppFab";
import { Reveal } from "@/components/bliss/Reveal";
import { BlissFooter } from "@/components/bliss/ProgramPage";
import { PROGRAMS, programWhatsappLink, BLISS_CONTACT } from "@/components/bliss/programs-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bliss Place – A Única Não Academia do Brasil | Brasília DF" },
      {
        name: "description",
        content:
          "Programas personalizados de saúde para dores, coração, diabetes e longevidade. Turmas pequenas, treino 100% individualizado. Brasília-DF.",
      },
      { property: "og:title", content: "Bliss Place – A Única Não Academia do Brasil" },
      {
        property: "og:description",
        content:
          "Programas personalizados para dores, coração, diabetes, gestação e 60+. Turmas reduzidas. Brasília-DF.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const TRUST = [
  "Treino 100% personalizado",
  "Profissionais especializados",
  "Sem competição estética",
  "Turmas reduzidas",
  "Resultados mensuráveis",
];

const DIFFS = [
  { n: "01", t: "Turmas pequenas", d: "Máximo 8 alunos por horário, atenção real e individual." },
  { n: "02", t: "Treino personalizado", d: "Cada plano é montado para o seu corpo e histórico." },
  {
    n: "03",
    t: "Profissionais especializados",
    d: "Equipe formada em fisiologia, reabilitação e gerontologia.",
  },
  {
    n: "04",
    t: "Zero competição estética",
    d: "Sem espelhos competitivos, sem julgamento. Só evolução.",
  },
  { n: "05", t: "Resultados mensuráveis", d: "Indicadores reais de progresso a cada ciclo." },
  { n: "06", t: "Ambiente acolhedor", d: "Conforto térmico, sem barulho excessivo, com cuidado." },
];

const TESTIMONIALS = [
  {
    quote: "Depois de dois anos com dor lombar, em 3 meses consegui dormir sem dor.",
    name: "Maria Regina, 54 anos",
    program: "Dores Nunca Mais",
  },
  {
    quote: "Meu cardiologista ficou impressionado com a melhora na pressão.",
    name: "José Antônio, 68 anos",
    program: "Coração Saudável",
  },
  {
    quote: "Minha hemoglobina glicada saiu de 8,2 para 6,1 em 4 meses.",
    name: "Cláudia Andrade, 61 anos",
    program: "Síndrome Metabólica",
  },
];

function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function UserStarIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M19 8l1.2 2.4L23 11l-2 1.8.5 2.7-2.5-1.3-2.5 1.3.5-2.7-2-1.8 2.8-.6L19 8z" />
    </svg>
  );
}

function HeartPulseIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      <path d="M12 13h-1l-2-4-2 8-2-4H3" />
    </svg>
  );
}

function UsersIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-white text-[#1C2B4A]">
      <Navbar />
      <WhatsAppFab />

      {/* HERO */}
      <section id="home" className="pt-[68px] relative overflow-hidden bg-white">
        {/* Decorative background elements */}
        <div
          className="bliss-orb bliss-orb-gold"
          style={{ width: 600, height: 600, top: -200, right: -150, opacity: 0.15 }}
          aria-hidden="true"
        />
        <div
          className="bliss-orb bliss-orb-navy"
          style={{ width: 400, height: 400, bottom: -100, left: -100, opacity: 0.08 }}
          aria-hidden="true"
        />

        <div className="mx-auto max-w-7xl px-6 py-16 lg:pb-0 lg:pt-24">
          {/* Two-column grid: Text (left) + Man (right) */}
          <div className="grid lg:grid-cols-[52%_48%] gap-12 items-center">
            {/* Left Column / Mobile Stack Container */}
            <div className="bliss-stagger flex flex-col items-center lg:items-start text-center lg:text-left">
              {/* 1. TITLE */}
              <span className="bliss-eyebrow text-[11px] uppercase tracking-[0.18em] font-semibold text-[#C4963C] mb-6">
                A Única Não Academia do Brasil
              </span>
              <h1 className="font-bold text-[#1C2B4A] leading-[1.1] text-5xl md:text-7xl lg:text-[72px] xl:text-[80px]">
                Saúde real,
                <br />
                <span className="italic" style={{ fontFamily: "Georgia, serif", color: "#C4963C" }}>
                  sem pressão
                </span>{" "}
                de academia.
              </h1>

              {/* 2. IMAGE - MOBILE ONLY (Hidden on Desktop) */}
              <div className="lg:hidden mt-12 mb-8 relative w-full max-w-[450px] mx-auto overflow-visible">
                <Reveal>
                  <img 
                    src="/hero-man.png" 
                    alt="Especialista" 
                    className="w-full h-auto object-contain relative z-10"
                  />
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-2/3 h-8 bg-black/10 blur-2xl rounded-[100%]" />
                </Reveal>
              </div>

              {/* 3. SUBTEXT */}
              <p className="mt-8 text-[#5A6875] text-xl md:text-2xl leading-relaxed max-w-2xl">
                Programas personalizados para quem tem dores, problemas cardíacos, diabetes ou quer
                viver com mais qualidade. Aqui, cada pessoa é única.
              </p>

              {/* 4. BENEFITS (Stats) */}
              <div className="mt-12 w-full max-w-3xl">
                <div className="grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4">
                  {[
                    { big: "+10 anos", sub: "em Brasília" },
                    { big: "6", sub: "programas" },
                    { big: "100%", sub: "personalizado" },
                    { big: "≤8", sub: "por turma" },
                  ].map((s, i) => (
                    <Reveal key={s.big} delay={i * 0.1}>
                      <div className="bliss-card rounded-2xl bg-[#F0F2F5] border border-[#E3E7EC] p-5 h-full text-center lg:text-left">
                        <div
                          style={{ fontFamily: "Georgia, serif" }}
                          className="text-[#C4963C] text-2xl font-bold leading-none mb-2"
                        >
                          {s.big}
                        </div>
                        <div className="text-[11px] text-[#1C2B4A]/70 uppercase tracking-wider font-semibold leading-snug">{s.sub}</div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>

              {/* 5. FORM — Mobile only (hidden on desktop, shown here in stack) */}
              <div className="lg:hidden mt-14 w-full max-w-lg mx-auto">
                <Reveal delay={0.5}>
                  <div className="bg-white rounded-2xl p-2 shadow-[0_20px_50px_rgba(28,43,74,0.12)] border border-[#E3E7EC]">
                    <LeadForm variant="light" />
                  </div>
                </Reveal>
              </div>
            </div>

            {/* Right Column - Desktop Image (Hidden on Mobile) */}
            <div className="hidden lg:block relative h-full">
              <Reveal>
                <div className="relative">
                  <img 
                    src="/hero-man.png" 
                    alt="Especialista Bliss Place" 
                    className="w-full h-auto object-contain relative z-10"
                  />
                  {/* Visual depth element for desktop */}
                  <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-4/5 h-20 bg-black/5 blur-3xl rounded-[100%] z-0" />
                </div>
              </Reveal>
            </div>
          </div>

          {/* FORM — Desktop only, centered below both columns */}
          <div className="hidden lg:flex justify-center pb-24 mt-16">
            <Reveal delay={0.5} className="w-full max-w-2xl">
              <div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(28,43,74,0.12)] border border-[#E3E7EC]">
                <LeadForm variant="light" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-[#1C2B4A] border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-5 flex flex-wrap justify-center gap-x-8 gap-y-3">
          {TRUST.map((t) => (
            <div key={t} className="flex items-center gap-2 text-white/85 text-sm">
              <span className="text-[#C4963C]">
                <CheckIcon />
              </span>
              {t}
            </div>
          ))}
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre">
        <div className="grid lg:grid-cols-[55%_45%]">
          <div className="bg-[#F0F2F5] px-6 md:px-12 lg:px-16 py-16 lg:py-24">
            <Reveal>
              <span className="text-[11px] uppercase tracking-[0.18em] font-semibold text-[#C4963C]">
                Quem somos
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-3 font-bold text-[#1C2B4A] text-3xl md:text-4xl leading-tight">
                Uma equipe que cuida de você, não do espelho
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-[#5A6875] text-lg leading-relaxed">
                A Bliss Place nasceu para receber quem nunca se sentiu acolhido em uma academia
                tradicional. Aqui, treino é cuidado: respeitamos seu corpo, sua história e seus
                limites — e construímos juntos uma rotina sustentável de saúde.
              </p>
            </Reveal>
            <ul className="mt-8 space-y-4">
              {[
                "Ambiente acolhedor: conforto térmico, sem competição",
                "Turmas pequenas: atenção individual garantida",
                "Evolução mensurável: indicadores reais de progresso",
                "Saúde sem fanatismo: sem dietas proibidas ou culpa",
              ].map((b, i) => (
                <Reveal key={b} delay={0.1 + i * 0.05}>
                  <li className="flex gap-3 text-[#1C2B4A]">
                    <span className="text-[#C4963C] mt-[3px]">
                      <CheckIcon />
                    </span>
                    <span className="text-[15px] leading-relaxed">{b}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
            <Reveal delay={0.35}>
              <a
                href="#contato"
                className="bliss-btn inline-block mt-9 rounded-[6px] bg-[#C4963C] px-8 py-[15px] text-white font-semibold"
              >
                <span className="relative z-10">Quero conhecer a Bliss →</span>
              </a>
            </Reveal>
          </div>

          <div className="bg-[#1C2B4A] px-6 md:px-12 lg:px-14 py-16 lg:py-24 flex items-center">
            <Reveal className="w-full">
              <div className="rounded-xl border border-white/10 bg-white/[0.04] p-8 md:p-10">
                <div
                  style={{ fontFamily: "Georgia, serif" }}
                  className="text-white text-4xl md:text-5xl leading-tight font-bold"
                >
                  <span className="text-[#C4963C]">NÃO</span> academia
                </div>
                <p className="mt-4 text-white/70 text-lg leading-relaxed">
                  Sem filas, barulho ou pressão estética. Só evolução real.
                </p>
                <div className="mt-8 pt-6 border-t border-white/10">
                  <div
                    style={{ fontFamily: "Georgia, serif" }}
                    className="text-[#C4963C] text-3xl font-bold"
                  >
                    10+ anos
                  </div>
                  <div className="text-white/70 text-sm mt-1">de experiência em Brasília</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section className="bg-[#1C2B4A] bliss-grain py-20 md:py-24 relative overflow-hidden">
        <div
          className="bliss-orb bliss-orb-gold"
          style={{ width: 420, height: 420, top: -120, right: -120, opacity: 0.25 }}
          aria-hidden="true"
        />
        <div className="mx-auto max-w-5xl px-5 grid lg:grid-cols-[40%_60%] gap-10 items-center relative">
          <div>
            <Reveal>
              <span className="text-[11px] uppercase tracking-[0.18em] font-semibold text-[#C4963C]">
                Conheça a Bliss
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2
                className="mt-3 font-bold text-white text-3xl md:text-4xl leading-tight"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Não é academia.
                <br />
                <span className="text-[#C4963C] italic">É cuidado.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-white/70 leading-relaxed">
                Em pouco mais de um minuto, conheça os programas da Bliss e veja por que tantos
                alunos escolhem cuidar da saúde aqui em Brasília.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <a
                href={`https://wa.me/${BLISS_CONTACT.whatsapp}?text=${encodeURIComponent("Olá! Vi o vídeo da Bliss Place e quero agendar uma visita.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bliss-btn inline-block mt-8 rounded-[6px] bg-[#C4963C] px-7 py-[14px] text-white font-semibold"
              >
                <span className="relative z-10">Quero agendar uma visita →</span>
              </a>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <div className="bliss-video-frame">
              <video
                src="/videos/bliss-apresentacao.mp4"
                controls
                playsInline
                preload="metadata"
                poster=""
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROGRAMAS */}
      <section id="programas" className="bg-[#F0F2F5] py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="text-center max-w-2xl mx-auto">
            <Reveal>
              <span className="text-[11px] uppercase tracking-[0.18em] font-semibold text-[#C4963C]">
                Nossos programas
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-3 font-bold text-[#1C2B4A] text-3xl md:text-4xl">
                Criado para a sua condição
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 text-[#5A6875]">
                Escolha o programa que dialoga com o seu momento. Tudo é adaptado para você.
              </p>
            </Reveal>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROGRAMS.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.1}>
                <article
                  className={`bliss-card group h-full bg-white rounded-xl overflow-hidden border-t-[3px] border-[#C4963C] shadow-[0_2px_10px_rgba(28,43,74,0.05)] flex flex-col ${
                    p.premium ? "ring-2 ring-[#C4963C] ring-offset-2 ring-offset-[#F0F2F5]" : ""
                  }`}
                >
                  <div className="bliss-card-img">
                    <img
                      src={p.image}
                      alt={`Programa ${p.name} – Bliss Place Brasília`}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="p-7 flex flex-col flex-1">
                  <span
                    className={`inline-block text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-sm ${
                      p.premium ? "bg-[#C4963C] text-white" : "bg-[#C4963C]/10 text-[#A87E2E]"
                    }`}
                  >
                    {p.badge}
                  </span>
                  <h3
                    style={{ fontFamily: "Georgia, serif" }}
                    className="mt-4 text-2xl font-bold text-[#1C2B4A]"
                  >
                    {p.name}
                  </h3>
                  <p className="mt-2 text-sm text-[#5A6875]">
                    <span className="font-semibold text-[#1C2B4A]">Para:</span> {p.forWho}
                  </p>
                  <ul className="mt-5 space-y-2">
                    {p.shortBullets.map((b) => (
                      <li key={b} className="flex gap-2 text-[15px] text-[#1C2B4A]">
                        <span className="text-[#C4963C] mt-[3px]">
                          <CheckIcon />
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-col gap-2 mt-auto pt-6">
                    <Link
                      to="/programas/$slug"
                      params={{ slug: p.slug }}
                      className="bliss-btn-outline inline-flex items-center justify-center w-full rounded-[6px] border border-[#C4963C] text-[#C4963C] px-5 py-3 font-semibold"
                    >
                      Saber mais →
                    </Link>
                    <a
                      href={programWhatsappLink(p.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-center text-sm text-[#5A6875] hover:text-[#C4963C] py-1"
                    >
                      Falar no WhatsApp
                    </a>
                  </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="bg-[#1C2B4A] py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="max-w-2xl">
            <Reveal>
              <h2 className="font-bold text-white text-3xl md:text-4xl">
                Não é academia. É outra coisa.
              </h2>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="mt-4 text-white/60">
                Cada detalhe foi pensado para uma experiência humana, segura e eficaz.
              </p>
            </Reveal>
          </div>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {DIFFS.map((d, i) => (
              <Reveal key={d.n} delay={i * 0.08}>
                <div className="bliss-diff border-l-2 border-white/10 pl-6 hover:border-[#C4963C]">
                  <div
                    style={{ fontFamily: "Georgia, serif" }}
                    className="text-[#C4963C] text-5xl font-bold leading-none opacity-80"
                  >
                    {d.n}
                  </div>
                  <h3 className="mt-3 text-white text-lg font-semibold">{d.t}</h3>
                  <p className="mt-2 text-white/60 text-[15px] leading-relaxed">{d.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section id="depoimentos" className="bg-[#F0F2F5] py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="text-center">
            <Reveal>
              <h2 className="font-bold text-[#1C2B4A] text-3xl md:text-4xl">
                Resultados de verdade
              </h2>
            </Reveal>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.1}>
                <article className="bliss-card relative bg-white rounded-xl p-8 shadow-[0_2px_10px_rgba(28,43,74,0.05)] h-full">
                  <span
                    style={{ fontFamily: "Georgia, serif" }}
                    className="absolute top-2 left-5 text-[#C4963C] text-7xl leading-none select-none"
                    aria-hidden="true"
                  >
                    “
                  </span>
                  <p className="relative pt-8 text-[#1C2B4A] text-[17px] leading-relaxed">
                    {t.quote}
                  </p>
                  <footer className="mt-6 pt-5 border-t border-[#E3E7EC]">
                    <div className="font-semibold text-[#1C2B4A]">{t.name}</div>
                    <div className="text-sm text-[#C4963C]">{t.program}</div>
                  </footer>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section id="instagram" className="bg-white py-20 md:py-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-5">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-xl">
              <Reveal>
                <span className="text-[11px] uppercase tracking-[0.18em] font-semibold text-[#C4963C]">
                  @blissplacenaoacademia
                </span>
              </Reveal>
              <Reveal delay={0.05}>
                <h2
                  className="mt-3 font-bold text-[#1C2B4A] text-3xl md:text-4xl leading-tight"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  Siga a gente no <span className="text-[#C4963C] italic">Instagram</span>
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-3 text-[#5A6875]">
                  Bastidores, treinos, dicas de saúde e a rotina de quem treina com a gente.
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.15}>
              <a
                href={BLISS_CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="bliss-btn inline-flex items-center gap-2 rounded-[6px] bg-gradient-to-r from-[#C4963C] to-[#a87e2e] px-7 py-[14px] text-white font-semibold"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
                  <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
                </svg>
                <span className="relative z-10">Seguir no Instagram</span>
              </a>
            </Reveal>
          </div>

          <div className="bliss-marquee-wrap mt-12 -mx-5 px-5 overflow-hidden">
            <div className="bliss-marquee">
              {[...PROGRAMS, ...PROGRAMS].map((p, i) => (
                <a
                  key={`${p.slug}-${i}`}
                  href={BLISS_CONTACT.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bliss-ig-tile"
                  aria-label={`Ver ${p.name} no Instagram`}
                >
                  <img src={p.image} alt={p.name} loading="lazy" decoding="async" />
                  <span className="bliss-ig-label">{p.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MAPA / LOCALIZAÇÃO */}
      <section id="localizacao" className="bg-[#F0F2F5] py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 grid lg:grid-cols-[40%_60%] gap-10 items-center">
          <div>
            <Reveal>
              <span className="text-[11px] uppercase tracking-[0.18em] font-semibold text-[#C4963C]">
                Onde estamos
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2
                className="mt-3 font-bold text-[#1C2B4A] text-3xl md:text-4xl leading-tight"
                style={{ fontFamily: "Georgia, serif" }}
              >
                No coração da Asa Norte
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <address className="not-italic mt-5 text-[#5A6875] text-lg leading-relaxed">
                {BLISS_CONTACT.address}
                <br />
                {BLISS_CONTACT.city} · CEP {BLISS_CONTACT.zip}
              </address>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={BLISS_CONTACT.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bliss-btn inline-block rounded-[6px] bg-[#C4963C] px-6 py-[13px] text-white font-semibold"
                >
                  <span className="relative z-10">Ver no Google Maps →</span>
                </a>
                <a
                  href={BLISS_CONTACT.whatsappHref}
                  className="bliss-btn-outline inline-flex items-center justify-center rounded-[6px] border border-[#C4963C] text-[#C4963C] px-6 py-[13px] font-semibold"
                >
                  Ligar agora
                </a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <div className="bliss-map-frame">
              <iframe
                src={BLISS_CONTACT.mapsEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Bliss Place – Asa Norte, Brasília"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA FINAL */}
      <section id="contato" className="bg-[#1C2B4A] py-20 md:py-24">
        <div className="mx-auto max-w-2xl px-5 text-center">
          <Reveal>
            <h2 className="font-bold text-white text-3xl md:text-4xl">
              Pronto para começar sua transformação?
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-4 text-white/60 text-lg">Preencha e nossa equipe entra em contato.</p>
          </Reveal>
          <Reveal delay={0.1} className="mt-8 flex justify-center">
            <LeadForm variant="dark" />
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 text-[#C4963C] font-semibold">
              Ou fale direto:{" "}
              <a href={BLISS_CONTACT.whatsappHref} className="underline-offset-4 hover:underline">
                {BLISS_CONTACT.whatsappDisplay}
              </a>
              <span className="text-white/40 mx-2">·</span>
              <a href={BLISS_CONTACT.landlineHref} className="underline-offset-4 hover:underline">
                {BLISS_CONTACT.landline}
              </a>
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <p className="mt-3 text-white/60 text-sm">{BLISS_CONTACT.addressFull}</p>
          </Reveal>
        </div>
      </section>

      <BlissFooter />
    </div>
  );
}
