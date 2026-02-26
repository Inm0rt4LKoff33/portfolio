"use client";

import { Mail, Linkedin, Github, FileDown } from "lucide-react";
import { useReveal } from "@/components/ui/useReveal";

const links = [
  { icon: Mail,     label: "Email Me",     href: "mailto:fabimv23@protonmail.com"               },
  { icon: Linkedin, label: "LinkedIn",     href: "https://www.linkedin.com/in/fabianmadrizcr/" },
  { icon: Github,   label: "GitHub",       href: "https://github.com/Inm0rt4LKoff33"     },
  { icon: FileDown, label: "Download CV",  href: "/resources/Fabian_Madriz_Cloud_Engineer_2026.pdf"                         },
];

export default function Contact() {
  const ref = useReveal();

  return (
    <section
      id="contact"
      className="py-36 px-6"
      style={{ background: "var(--bg)", position: "relative", overflow: "hidden" }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 50% 100%, var(--accent-glow), transparent)",
        }}
      />

      <div className="max-w-3xl mx-auto text-center relative z-10" ref={ref}>
        <p className="section-label text-center mb-4 reveal">// Let&apos;s connect</p>

        <h2
          className="font-display font-black tracking-tight mb-5 reveal gradient-text italic"
          style={{
            fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
          }}
        >
          Let&apos;s build<br />something reliable.
        </h2>

        <p
          className="font-mono text-sm tracking-wide mb-14 reveal"
          style={{ color: "var(--text-muted)" }}
        >
          Open to DevOps, SRE &amp; Cloud Engineer roles — remote or on-site
        </p>

        <div className="flex flex-wrap justify-center gap-3 reveal">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-sm font-mono text-xs tracking-widest uppercase border transition-all duration-200 hover:-translate-y-0.5"
              style={{
                borderColor: "var(--border)",
                color: "var(--text-secondary)",
                background: "var(--card)",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
                (e.currentTarget as HTMLElement).style.color = "var(--accent)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
              }}
            >
            <l.icon size={15} />
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}