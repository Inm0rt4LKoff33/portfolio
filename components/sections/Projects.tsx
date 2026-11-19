"use client";

import { ArrowUpRight, Lock } from "lucide-react";
import { useReveal } from "@/components/ui/useReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import SkillTag from "@/components/ui/SkillTag";

const projects = [
  {
    num: "01",
    name: "Academic Data Observatory",
    kind: "Internship · ISTS · In progress",
    description:
      "ETL pipeline that turns an institute's Excel reports into a clean, anonymized star-schema dataset for Power BI. Raw files stay untouched, each file is checked against a data contract, quality issues go to a report, and reruns never duplicate data.",
    tags: ["Python", "Pandas", "ETL", "Data Quality", "Star Schema", "pytest"],
    accent: "var(--accent)",
    link: "https://github.com/Inm0rt4LKoff33/ists-dashboard",
  },
  {
    num: "02",
    name: "Job Search Automation Agent",
    kind: "Personal project · AI-assisted",
    description:
      "Python program that collects job postings daily from several APIs, unifies them into one schema, keeps the history in SQLite to skip duplicates, and uses the Claude API to score each posting against my profile. Built with Claude as an AI coding assistant.",
    tags: ["Python", "REST APIs", "SQLite", "Claude API", "Automation"],
    accent: "var(--accent-light)",
    link: "#",
  },
  {
    num: "03",
    name: "AIOps Kubernetes Platform",
    kind: "M.Sc. thesis · Early stage",
    description:
      "Thesis project to detect and explain incidents in Kubernetes with a knowledge graph. So far: a local kind cluster running Google's Online Boutique demo with generated traffic. Next: chaos-engineering faults, a PySpark pipeline, a Neo4j graph and an MCP server.",
    tags: ["Kubernetes", "Neo4j", "PySpark", "MCP", "Observability"],
    accent: "var(--accent)",
    link: "https://github.com/Inm0rt4LKoff33/aiops-k8s-platform",
  },
  {
    num: "04",
    name: "Madrid Lodging EDA",
    kind: "Data analysis project",
    description:
      "Exploratory analysis of a Madrid lodging dataset: data cleaning and a heatmap to study how comfort and location ratings relate to each other.",
    tags: ["Python", "EDA", "Data Cleaning", "Visualization"],
    accent: "var(--accent-light)",
    link: "#",
  },
  {
    num: "05",
    name: "IT Infrastructure Management Platform",
    kind: "Graduation project · Team of 3",
    description:
      "Web platform to replace the Excel sheets a company used to track its IT infrastructure (IPs, networks, credentials, users and devices). I designed the relational database and built backend modules, unit tests and email notifications, and deployed the demo on Azure.",
    tags: ["Laravel", "SQL Server", "Database Design", "Azure"],
    accent: "var(--accent)",
    link: "#",
  },
  {
    num: "06",
    name: "Guest Portal for a Non-Profit",
    kind: "Community project · Ronald McDonald House Charities CR",
    description:
      "Web portal to capture guest information that the organization kept on paper. I gathered requirements directly with the client and migrated the existing records into SQL Server.",
    tags: [".NET 8", "SQL Server", "Data Migration", "Requirements"],
    accent: "var(--accent-light)",
    link: "#",
  },
];

export default function Projects() {
  const ref = useReveal();

  return (
    <section id="projects" className="py-28 px-6" style={{ background: "var(--bg)" }}>
      <div className="max-w-6xl mx-auto" ref={ref}>
        <SectionLabel>What I&apos;ve built</SectionLabel>
        <h2
          className="font-display font-black tracking-tight mb-14"
          style={{
            fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
            letterSpacing: "-0.02em",
            color: "var(--text-primary)",
          }}
        >
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => {
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
                  style={{ background: `linear-gradient(90deg, ${p.accent}, transparent)` }}
                />

                <div className="flex items-start justify-between mb-5">
                  <span className="font-mono text-xs tracking-widest" style={{ color: "var(--text-muted)" }}>
                    PROJECT / {p.num}
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
                      <Lock size={10} /> No public repo
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