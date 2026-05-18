import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { BlissLogo } from "./Logo";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "A Bliss", href: "#sobre" },
  { label: "Programas", href: "#programas" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`bliss-nav fixed top-0 inset-x-0 z-50 text-white ${
        scrolled ? "bliss-nav-scrolled" : "bg-[#1C2B4A] shadow-md"
      }`}
    >
      <div
        className={`mx-auto max-w-7xl px-5 flex items-center justify-between transition-all duration-300 ${
          scrolled ? "py-2" : "py-3"
        }`}
      >
        <Link to="/" aria-label="Bliss Place início" className="flex items-center">
          <BlissLogo variant="horizontal" textColor="#FFFFFF" size={100} />
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm text-white/90 hover:text-[#C4963C] transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-[#C4963C] hover:after:w-full after:transition-all after:duration-300"
            >
              {l.label}
            </a>
          ))}
          <div className="flex flex-col items-end leading-tight">
            <a
              href="tel:+5561991868113"
              className="text-sm font-semibold text-[#C4963C] hover:text-white transition-colors"
            >
              WhatsApp (61) 99186-8113
            </a>
            <a
              href="tel:+556133276521"
              className="text-[11px] text-white/60 hover:text-[#C4963C] transition-colors"
            >
              Fixo (61) 3327-6521
            </a>
          </div>
        </nav>

        <button
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 text-white"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <>
                <path d="M3 6h18" strokeLinecap="round" />
                <path d="M3 12h18" strokeLinecap="round" />
                <path d="M3 18h18" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#1C2B4A]">
          <nav className="flex flex-col px-5 py-4 gap-3">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-white/90 hover:text-[#C4963C] py-1"
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:+5561991868113"
              className="text-[#C4963C] font-semibold pt-2 border-t border-white/10"
            >
              WhatsApp (61) 99186-8113
            </a>
            <a href="tel:+556133276521" className="text-white/70 hover:text-[#C4963C]">
              Fixo (61) 3327-6521
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
