"use client";

import { Cloud, Workflow, Database, BarChart3, Wrench, Cpu, Sparkles, BookOpen } from "lucide-react";
import { useReveal } from "@/components/ui/useReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import SkillTag from "@/components/ui/SkillTag";

type Level = "Applied" | "Learning" | "Coursework";

const skills: { icon: React.ElementType; title: string; description: string; tags: string[]; level: Level }[] = [
  {
    icon: Workflow,
    title: "Data Engineering & ETL",
    description: "Pipelines that extract institutional Excel reports, validate them against a data contract, clean and pseudonymize them, and rebuild an analysis-ready layer on every run.",
    tags: ["Python", "Pandas", "ETL", "Parquet", "Data contracts", "Data quality", "pytest"],
    level: "Applied",
  },
  {
    icon: Database,
    title: "Databases & Modeling",
    description: "Relational design and normalization in SQL Server, record migration into a new database, and star-schema models (facts and dimensions) for reporting.",
    tags: ["SQL Server", "SQLite", "Star schema", "Normalization", "Data migration"],
    level: "Applied",
  },
  {
    icon: BarChart3,
    title: "Analysis & Visualization",
    description: "Exploratory data analysis in notebooks and reports that explain each chart and its conclusions.",
    tags: ["Jupyter", "EDA", "Matplotlib", "Seaborn"],
    level: "Applied",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "AWS networking and access configured for a client, a demo deployed on Azure, and containers with CI/CD in a personal project. Linux is my daily operating system.",
    tags: ["AWS (EC2, IAM, VPC, S3)", "Azure", "Docker", "GitHub Actions", "Git", "Linux"],
    level: "Applied",
  },
  {
    icon: Wrench,
    title: "Backend & APIs",
    description: "Web backends and API integrations built in university, community and freelance projects.",
    tags: ["C# / ASP.NET Core / .NET 8", "Node.js / Express", "PHP / Laravel", "REST APIs", "Claude API"],
    level: "Applied",
  },
  {
    icon: Cpu,
    title: "Big Data",
    description: "Distributed processing studied in my master's, with Spark assignments run on Google Cloud.",
    tags: ["Apache Spark", "PySpark", "HDFS", "Google Cloud"],
    level: "Learning",
  },
  {
    icon: Sparkles,
    title: "AI & Platforms",
    description: "Model Context Protocol servers in Python and a local Kubernetes lab for my master's thesis.",
    tags: ["MCP", "Kubernetes (kind)", "Neo4j", "Machine learning fundamentals"],
    level: "Learning",
  },
  {
    icon: BookOpen,
    title: "Coursework",
    description: "Tools I studied at university or in my master's but have not yet used in a project of my own.",
    tags: ["Power BI", "MySQL", "MongoDB", "Terraform", "Java", "Vue.js", "GitLab CI/CD", "Selenium"],
    level: "Coursework",
  },
];

const levelStyle: Record<Level, { bg: string; color: string }> = {
  Applied:    { bg: "var(--accent-glow)",     color: "var(--accent)"     },
  Learning:   { bg: "rgba(234,179,8,0.08)",   color: "#ca8a04"           },
  Coursework: { bg: "rgba(148,163,184,0.08)", color: "var(--text-muted)" },
};

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
                  style={{ background: levelStyle[skill.level].bg, color: levelStyle[skill.level].color }}
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