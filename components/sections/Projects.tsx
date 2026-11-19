"use client";

import { ArrowUpRight, Lock } from "lucide-react";
import { useReveal } from "@/components/ui/useReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import SkillTag from "@/components/ui/SkillTag";
import { useLang } from "@/components/ui/LangProvider";

export default function Projects() {
  const pr = useLang().t.projects;
  const ref = useReveal();

  return (
    <section id="projects" className="py-28 px-6" style={{ background: "var(--bg)" }}>
      <div className="max-w-6xl mx-auto" ref={ref}>
        <SectionLabel>{pr.label}</SectionLabel>
        <h2
          className="font-display font-black tracking-tight mb-14"
          style={{
            fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
            letterSpacing: "-0.02em",
            color: "var(--text-primary)",
          }}
        >
          {pr.heading}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {pr.items.map((p, i) => {
            const num = String(i + 1).padStart(2, "0");
            const accent = i % 2 ? "var(--accent-light)" : "var(--accent)";
            const isLive = p.link !== "#";
            const Wrapper = isLive ? "a" : "div";
            const wrapperProps = isLive
              ? { href: p.link, target: "_blank", rel: "noopener noreferrer" }
              : {};

            return (
              <Wrapper
                key={i}
                {...(wrapperProps as any)}
                className="card reveal p-8 group relative overflow-hidden"
                style={{
                  animationDelay: `${i * 100}ms`,
                  textDecoration: "none",
                  cursor: isLive ? "pointer" : "default",
                }}
              >
                {/* Top accent */}
                <div
                  className="absolute top-0 left-0 right-0 h-[3px]"
                  style={{ background: `linear-gradient(90deg, ${accent}, transparent)` }}
                />

                <div className="flex items-start justify-between mb-5">
                  <span className="font-mono text-xs tracking-widest" style={{ color: "var(--text-muted)" }}>
                    {pr.project} / {num}
                  </span>
                  {isLive ? (
                    <ArrowUpRight
                      size={18}
                      className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
                      style={{ color: "var(--accent)" }}
                    />
                  ) : (
                    <span
                      className="inline-flex items-center gap-1 font-mono text-xs px-2 py-1 rounded-sm"
                      style={{ background: "rgba(148,163,184,0.08)", color: "var(--text-muted)" }}
                    >
                      <Lock size={10} /> {pr.noRepo}
                    </span>
                  )}
                </div>

                <h3 className="font-display font-bold text-xl mb-1" style={{ color: "var(--text-primary)" }}>
                  {p.name}
                </h3>
                <p className="font-mono text-xs tracking-wide mb-3" style={{ color: "var(--accent-muted)" }}>
                  {p.kind}
                </p>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <SkillTag key={t} label={t} />
                  ))}
                </div>
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}