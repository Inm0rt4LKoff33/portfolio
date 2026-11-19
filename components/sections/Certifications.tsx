"use client";

import { GraduationCap, Award, Container } from "lucide-react";
import { useReveal } from "@/components/ui/useReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { useLang } from "@/components/ui/LangProvider";
import type { CertStatus } from "@/content/site";

const icons = [GraduationCap, GraduationCap, Award, Container];

const statusStyle: Record<CertStatus, { bg: string; color: string }> = {
  completed:    { bg: "var(--accent-glow)",     color: "var(--accent)"     },
  "in-progress":{ bg: "rgba(234,179,8,0.08)",   color: "#ca8a04"           },
  target:       { bg: "rgba(148,163,184,0.08)", color: "var(--text-muted)" },
};

export default function Certifications() {
  const c = useLang().t.certs;
  const ref = useReveal();

  return (
    <section
      id="certs"
      className="py-28 px-6"
      style={{ background: "var(--bg-subtle)" }}
    >
      <div className="max-w-6xl mx-auto" ref={ref}>
        <SectionLabel>{c.label}</SectionLabel>
        <h2
          className="font-display font-black tracking-tight mb-14"
          style={{
            fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
            letterSpacing: "-0.02em",
            color: "var(--text-primary)",
          }}
        >
          {c.heading}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {c.items.map((cert, i) => {
            const Icon = icons[i];
            return (
            <div
              key={i}
              className="card reveal p-6 flex flex-col gap-4"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div
                className="w-10 h-10 rounded-md flex items-center justify-center"
                style={{ background: "var(--accent-glow)", color: "var(--accent)" }}
              >
                <Icon size={20} />
              </div>
              <div>
                <h3
                  className="font-display font-semibold text-base leading-snug mb-1"
                  style={{ color: "var(--text-primary)" }}
                >
                  {cert.name}
                </h3>
                <p className="font-mono text-xs tracking-wide" style={{ color: "var(--accent-muted)" }}>
                  {cert.issuer}
                </p>
              </div>
              <div className="mt-auto">
                <span
                  className="font-mono text-xs px-2.5 py-1 rounded-sm"
                  style={{ background: statusStyle[cert.status].bg, color: statusStyle[cert.status].color }}
                >
                  {cert.label}
                </span>
              </div>
            </div>
          );})}
        </div>
      </div>
    </section>
  );
}