"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ui/ThemeToggle";

const links = [
  { href: "#skills",      label: "Skills"          },
  { href: "#experience",  label: "Experience"      },
  { href: "#projects",    label: "Projects"        },
  { href: "#certs",       label: "Certifications"  },
  { href: "#contact",     label: "Contact"         },
];

export default function Navbar() {
  const [active, setActive]     = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((s) => {
        const top = (s as HTMLElement).offsetTop - 120;
        if (window.scrollY >= top) setActive(`#${s.id}`);
      });
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "var(--bg)" : "transparent",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-mono text-xs tracking-widest uppercase transition-colors"
          style={{ color: "var(--accent)" }}
        >
          FM<span style={{ color: "var(--text-muted)" }}> // portfolio</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-mono text-xs tracking-widest uppercase transition-colors duration-200"
                style={{ color: active === l.href ? "var(--accent)" : "var(--text-muted)" }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            className="md:hidden p-1 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            style={{ color: "var(--text-secondary)" }}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-5 pt-2 flex flex-col gap-4"
          style={{ background: "var(--bg)", borderBottom: "1px solid var(--border)" }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="font-mono text-xs tracking-widest uppercase"
              style={{ color: active === l.href ? "var(--accent)" : "var(--text-muted)" }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}