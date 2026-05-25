"use client";

import { Cloud, Layers, Container, Globe, Wrench, Terminal, Database, BarChart3 } from "lucide-react";
import { useReveal } from "@/components/ui/useReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import SkillTag from "@/components/ui/SkillTag";

const skills = [
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Provisioning and managing cloud infrastructure across AWS, GCP, and Azure. Building CI/CD pipelines and managing deployments in Linux-based environments.",
    tags: ["AWS (EC2, S3, IAM, VPC)", "GCP", "Azure", "GitHub Actions", "GitLab CI/CD", "Vercel", "Railway", "Linux"],
    level: "Proficient",
  },
  {
    icon: Layers,
    title: "Infrastructure as Code",
    description: "Defining and provisioning cloud resources programmatically for consistent, version-controlled infrastructure environments.",
    tags: ["Terraform", "Pulumi"],
    level: "Learning",
  },
  {
    icon: Container,
    title: "Containers & Orchestration",
    description: "Containerizing applications with Docker for consistent environments across development and production. Hands-on Kubernetes exposure for workload orchestration.",
    tags: ["Docker", "Kubernetes"],
    level: "Learning",
  },
  {
    icon: Globe,
    title: "Frontend Development",
    description: "Building responsive, production-grade user interfaces with modern frameworks across multiple commercial and personal projects.",
    tags: ["React", "Vue.js", "Angular", "TypeScript", "JavaScript", "HTML", "CSS"],
    level: "Proficient",
  },
  {
    icon: Wrench,
    title: "Backend & APIs",
    description: "Designing and delivering robust backend systems and REST APIs across multiple production environments and clients.",
    tags: ["ASP.NET Core", "Node.js", "Python", "Java", "PHP (Laravel)", "RESTful APIs"],
    level: "Proficient",
  },
  {
    icon: Database,
    title: "Databases",
    description: "Working with relational and non-relational databases across production systems, including schema design, migrations, and performance optimization.",
    tags: ["SQL Server", "MySQL", "MongoDB", "Supabase (PostgreSQL)", "Redis"],
    level: "Proficient",
  },
  {
    icon: Terminal,
    title: "QA & Tooling",
    description: "Ensuring production reliability through structured testing, version control workflows, and developer tooling across the full delivery lifecycle.",
    tags: ["Selenium", "Postman", "Git", "GitHub", "GitLab", "VS Code"],
    level: "Proficient",
  },
];

export default function Skills() {
  const ref = useReveal();

  return (
    <section id="skills" className="py-28 px-6" style={{ background: "var(--bg)" }}>
      <div className="max-w-6xl mx-auto" ref={ref}>
        <SectionLabel>What I bring</SectionLabel>
        <h2
          className="font-display font-black tracking-tight mb-14"
          style={{
            fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
            letterSpacing: "-0.02em",
            color: "var(--text-primary)",
          }}
        >
          Skills &amp; Technologies
        </h2>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px"
          style={{ background: "var(--border)" }}
        >
          {skills.map((skill, i) => (
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
                  <skill.icon size={20} />
                </div>
                <span
                  className="font-mono text-xs px-2.5 py-1 rounded-sm"
                  style={{
                    background: skill.level === "Proficient" ? "var(--accent-glow)" : "rgba(234,179,8,0.08)",
                    color: skill.level === "Proficient" ? "var(--accent)" : "#ca8a04",
                  }}
                >
                  {skill.level}
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