import { Link } from "@tanstack/react-router";
import { Navbar } from "./Navbar";
import { WhatsAppFab } from "./WhatsAppFab";
import { LeadForm } from "./LeadForm";
import { Reveal } from "./Reveal";
import { PROGRAMS, programWhatsappLink, type Program, BLISS_CONTACT } from "./programs-data";

function CheckIcon() {
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
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export function ProgramPage({ program }: { program: Program }) {
  const otherPrograms = PROGRAMS.filter((p) => p.slug !== program.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-white text-[#1C2B4A]">
      <Navbar />
      <WhatsAppFab />

      {/* HERO */}
      <section className="pt-[68px]">
        <div className="grid lg:grid-cols-[55%_45%] min-h-[calc(70vh-68px)] relative overflow-hidden">
          <div className="bliss-hero-bg relative px-6 md:px-12 lg:px-20 py-16 lg:py-20 flex items-center">
            <div
              className="bliss-orb bliss-orb-gold"
              style={{ width: 380, height: 380, top: -120, left: -120 }}
              aria-hidden="true"
            />
            <div className="relative max-w-xl w-full bliss-stagger">
              <nav className="text-xs text-[#5A6875] mb-6" aria-label="breadcrumb">
                <Link to="/" className="hover:text-[#C4963C]">
                  Home
                </Link>
                <span className="mx-2 text-[#C4963C]">/</span>
                <Link to="/" hash="programas" className="hover:text-[#C4963C]">
                  Programas
                </Link>
                <span className="mx-2 text-[#C4963C]">/</span>
                <span className="text-[#1C2B4A]">{program.name}</span>
              </nav>

              <span className="bliss-eyebrow text-[11px] uppercase tracking-[0.18em] font-semibold text-[#C4963C] mb-4">
                {program.badge}
              </span>
              <h1 className="font-bold text-[#1C2B4A] leading-[1.05] text-4xl md:text-5xl lg:text-[56px]">
                {program.name}
              </h1>
              <p
                className="mt-5 text-xl md:text-2xl"
                style={{ fontFamily: "Georgia, serif", color: "#C4963C", fontStyle: "italic" }}
              >
                {program.tagline}
              </p>
              <p className="mt-5 text-[#5A6875] text-base md:text-lg leading-relaxed">
                <span className="font-semibold text-[#1C2B4A]">Para:</span> {program.forWho}
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href={programWhatsappLink(program.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bliss-btn inline-block rounded-[6px] bg-[#C4963C] px-7 py-[15px] text-white font-semibold"
                >
                  <span className="relative z-10">Falar no WhatsApp →</span>
                </a>
                <a
                  href="#contato-programa"
                  className="bliss-btn-outline inline-flex items-center justify-center rounded-[6px] border border-[#C4963C] text-[#C4963C] px-7 py-[15px] font-semibold"
                >
                  Quero conhecer
                </a>
              </div>
            </div>
          </div>

          <div className="bliss-hero-dark text-white px-6 md:px-12 lg:px-14 py-16 lg:py-20 flex items-center">
            <div
              className="bliss-orb bliss-orb-gold"
              style={{ width: 320, height: 320, top: 40, right: -80, opacity: 0.35 }}
              aria-hidden="true"
            />
            <Reveal className="relative w-full">
              <div className="bliss-hero-img mb-6" style={{ aspectRatio: "4 / 5" }}>
                <img
                  src={program.image}
                  alt={`Programa ${program.name} – Bliss Place`}
                  loading="eager"
                />
              </div>
              <div
                className={`rounded-xl border p-8 md:p-10 backdrop-blur-sm ${
                  program.premium
                    ? "border-[#C4963C]/60 bg-white/[0.05] ring-1 ring-[#C4963C]/40"
                    : "border-white/10 bg-white/[0.04]"
                }`}
              >
                <div
                  style={{ fontFamily: "Georgia, serif" }}
                  className="text-[#C4963C] text-3xl md:text-4xl font-bold leading-tight"
                >
                  Em resumo
                </div>
                <ul className="mt-6 space-y-4">
                  {program.shortBullets.map((b) => (
                    <li key={b} className="flex gap-3 text-white/90 text-lg leading-relaxed">
                      <span className="text-[#C4963C] mt-[5px]">
                        <CheckIcon />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-white/10 text-sm text-white/65">
                  Atendimento em{" "}
                  <span className="text-[#C4963C] font-semibold">{BLISS_CONTACT.city}</span> ·
                  turmas reduzidas, treino 100% individualizado.
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 md:py-24 bg-white">
        <div className="mx-auto max-w-3xl px-5">
          <Reveal>
            <span className="text-[11px] uppercase tracking-[0.18em] font-semibold text-[#C4963C]">
              Sobre o programa
            </span>
            <h2 className="mt-3 font-bold text-[#1C2B4A] text-3xl md:text-4xl leading-tight">
              Por que esse programa existe
            </h2>
          </Reveal>
          <div className="mt-8 space-y-5">
            {program.intro.map((p, i) => (
              <Reveal key={i} delay={0.05 + i * 0.05}>
                <p className="text-[#5A6875] text-lg leading-relaxed">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PARA QUEM (Platinum) */}
      {program.forWhom && (
        <section className="bg-[#F0F2F5] py-20 md:py-24">
          <div className="mx-auto max-w-5xl px-5">
            <Reveal>
              <span className="text-[11px] uppercase tracking-[0.18em] font-semibold text-[#C4963C]">
                Para quem
              </span>
              <h2 className="mt-3 font-bold text-[#1C2B4A] text-3xl md:text-4xl">
                Esse plano é para você se…
              </h2>
            </Reveal>
            <ul className="mt-10 grid md:grid-cols-3 gap-6">
              {program.forWhom.map((item, i) => (
                <Reveal key={item} delay={i * 0.08}>
                  <li className="bliss-card bg-white rounded-xl p-7 border-t-[3px] border-[#C4963C] shadow-[0_2px_10px_rgba(28,43,74,0.05)] h-full text-[#1C2B4A] text-[15px] leading-relaxed">
                    {item}
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* BENEFÍCIOS */}
      <section className="bg-[#1C2B4A] py-20 md:py-24">
        <div className="mx-auto max-w-5xl px-5">
          <div className="max-w-2xl">
            <Reveal>
              <span className="text-[11px] uppercase tracking-[0.18em] font-semibold text-[#C4963C]">
                Resultados reais
              </span>
              <h2 className="mt-3 font-bold text-white text-3xl md:text-4xl">
                {program.benefitsTitle}
              </h2>
            </Reveal>
          </div>
          <ul className="mt-12 grid md:grid-cols-2 gap-4">
            {program.benefits.map((b, i) => (
              <Reveal key={b} delay={i * 0.04}>
                <li className="flex gap-3 items-start bg-white/[0.04] border border-white/10 rounded-lg p-5 text-white/90">
                  <span className="text-[#C4963C] mt-[3px]">
                    <CheckIcon />
                  </span>
                  <span className="text-[15px] leading-relaxed">{b}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="bg-[#F0F2F5] py-20 md:py-24">
        <div className="mx-auto max-w-5xl px-5">
          <Reveal>
            <span className="text-[11px] uppercase tracking-[0.18em] font-semibold text-[#C4963C]">
              Nosso método
            </span>
            <h2 className="mt-3 font-bold text-[#1C2B4A] text-3xl md:text-4xl">
              {program.diffsTitle}
            </h2>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {program.diffs.map((d, i) => (
              <Reveal key={d} delay={i * 0.06}>
                <div className="bliss-card bg-white rounded-xl p-7 shadow-[0_2px_10px_rgba(28,43,74,0.05)] flex gap-5 h-full">
                  <div
                    style={{ fontFamily: "Georgia, serif" }}
                    className="text-[#C4963C] text-4xl font-bold leading-none opacity-80 shrink-0"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <p className="text-[#1C2B4A] text-[15px] leading-relaxed pt-1">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato-programa" className="bg-[#1C2B4A] py-20 md:py-24">
        <div className="mx-auto max-w-2xl px-5 text-center">
          <Reveal>
            <h2 className="font-bold text-white text-3xl md:text-4xl">
              Pronto para começar o {program.name}?
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-4 text-white/60 text-lg">Preencha e nossa equipe entra em contato.</p>
          </Reveal>
          <Reveal delay={0.1} className="mt-8 flex justify-center">
            <LeadForm variant="dark" defaultProgram={program.name} />
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 text-[#C4963C] font-semibold">
              Ou fale direto:{" "}
              <a href={BLISS_CONTACT.whatsappHref} className="hover:underline">
                {BLISS_CONTACT.whatsappDisplay}
              </a>
              <span className="text-white/40 mx-2">·</span>
              <a href={BLISS_CONTACT.landlineHref} className="hover:underline">
                {BLISS_CONTACT.landline}
              </a>
            </p>
          </Reveal>
        </div>
      </section>

      {/* OUTROS PROGRAMAS */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <h2 className="font-bold text-[#1C2B4A] text-2xl md:text-3xl text-center">
              Conheça outros programas
            </h2>
          </Reveal>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {otherPrograms.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08}>
                <Link
                  to="/programas/$slug"
                  params={{ slug: p.slug }}
                  className="bliss-card group block bg-white rounded-xl p-7 border-t-[3px] border-[#C4963C] shadow-[0_2px_10px_rgba(28,43,74,0.05)] h-full"
                >
                  <span className="inline-block text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-sm bg-[#C4963C]/10 text-[#A87E2E]">
                    {p.badge}
                  </span>
                  <h3
                    style={{ fontFamily: "Georgia, serif" }}
                    className="mt-4 text-2xl font-bold text-[#1C2B4A]"
                  >
                    {p.name}
                  </h3>
                  <p className="mt-2 text-sm text-[#5A6875]">{p.forWho}</p>
                  <span className="mt-5 inline-flex text-[#C4963C] font-semibold text-sm group-hover:translate-x-1 transition-transform">
                    Saber mais →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <BlissFooter />
    </div>
  );
}

export function BlissFooter() {
  return (
    <footer className="bg-[#111B2E] text-white/70 py-12">
      <div className="mx-auto max-w-7xl px-5 grid md:grid-cols-4 gap-10 items-start">
        <div className="md:col-span-1">
          <div
            className="text-white font-bold tracking-[0.15em]"
            style={{ fontFamily: "Georgia, serif" }}
          >
            BLISS <span className="text-[#C4963C] italic font-normal">Place</span>
          </div>
          <p className="mt-4 text-sm text-white/60 max-w-xs">
            A única não academia do Brasil. Saúde real, treino humano, em Brasília.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
            Programas
          </h4>
          <ul className="space-y-2 text-sm">
            {PROGRAMS.map((p) => (
              <li key={p.slug}>
                <Link
                  to="/programas/$slug"
                  params={{ slug: p.slug }}
                  className="hover:text-[#C4963C]"
                >
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
            Endereço
          </h4>
          <address className="not-italic text-sm space-y-1 text-white/70">
            <div>{BLISS_CONTACT.address}</div>
            <div>{BLISS_CONTACT.city}</div>
            <div>CEP {BLISS_CONTACT.zip}</div>
            <a
              href={BLISS_CONTACT.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-[#C4963C] hover:underline"
            >
              Ver no mapa →
            </a>
          </address>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
            Contato
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href={BLISS_CONTACT.whatsappHref} className="text-[#C4963C] hover:underline">
                WhatsApp {BLISS_CONTACT.whatsappDisplay}
              </a>
            </li>
            <li>
              <a href={BLISS_CONTACT.landlineHref} className="text-[#C4963C] hover:underline">
                Fixo {BLISS_CONTACT.landline}
              </a>
            </li>
            <li>
              <a
                href={`https://wa.me/${BLISS_CONTACT.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#C4963C]"
              >
                Chamar no WhatsApp
              </a>
            </li>
            <li>
              <a
                href={BLISS_CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#C4963C]"
              >
                Instagram {BLISS_CONTACT.instagramHandle}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-5 mt-10 pt-6 border-t border-white/10 text-xs text-white/50 text-center">
        © {new Date().getFullYear()} Bliss Place. Brasília–DF. Todos os direitos reservados.
      </div>
    </footer>
  );
}
