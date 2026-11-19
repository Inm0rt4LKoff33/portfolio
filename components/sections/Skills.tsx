"use client";

import { Cloud, Workflow, Database, BarChart3, Wrench, Cpu, Sparkles, BookOpen } from "lucide-react";
import { useReveal } from "@/components/ui/useReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import SkillTag from "@/components/ui/SkillTag";
import { useLang } from "@/components/ui/LangProvider";
import type { Level } from "@/content/site";

const icons = [Workflow, Database, BarChart3, Cloud, Wrench, Cpu, Sparkles, BookOpen];

const levelStyle: Record<Level, { bg: string; color: string }> = {
  applied:    { bg: "var(--accent-glow)",     color: "var(--accent)"     },
  learning:   { bg: "rgba(234,179,8,0.08)",   color: "#ca8a04"           },
  coursework: { bg: "rgba(148,163,184,0.08)", color: "var(--text-muted)" },
};

export default function Skills() {
  const { t } = useLang();
  const s = t.skills;
  const ref = useReveal();

  return (
    <section id="skills" className="py-28 px-6" style={{ background: "var(--bg)" }}>
      <div className="max-w-6xl mx-auto" ref={ref}>
        <SectionLabel>{s.label}</SectionLabel>
        <h2
          className="font-display font-black tracking-tight mb-14"
          style={{
            fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
            letterSpacing: "-0.02em",
            color: "var(--text-primary)",
          }}
        >
          {s.heading}
        </h2>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px"
          style={{ background: "var(--border)" }}
        >
          {s.items.map((skill, i) => (

            <div
              key={i}
              className="reveal p-8 transition-all duration-200 group"
              style={{ background: "var(--card)", position: "relative", overflow: "hidden" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "var(--surface)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "var(--card)"; }}
            >
              {/* Top accent bar */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                style={{ background: "linear-gradient(90deg, var(--accent), var(--accent-light))" }}
              />

              <div className="flex items-start justify-between mb-4">
                <div
                  className="p-2 rounded-md"
                  style={{ background: "var(--accent-glow)", color: "var(--accent)" }}
                >
                  {(() => { const Icon = icons[i]; return <Icon size={20} />; })()}
                </div>
                <span
                  className="font-mono text-xs px-2.5 py-1 rounded-sm"
                  style={{ background: levelStyle[skill.level].bg, color: levelStyle[skill.level].color }}
                >
                  {s.levels[skill.level]}
                </span>
              </div>

              <h3
                className="font-display font-bold text-base mb-2"
                style={{ color: "var(--text-primary)" }}
              >
                {skill.title}
              </h3>
              <p
                className="text-xs leading-relaxed mb-4"
                style={{ color: "var(--text-muted)" }}
              >
                {skill.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {skill.tags.map((t) => (
                  <SkillTag key={t} label={t} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}