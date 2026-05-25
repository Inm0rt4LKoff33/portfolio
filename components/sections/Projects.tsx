"use client";

import { ArrowUpRight, Lock } from "lucide-react";
import { useReveal } from "@/components/ui/useReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import SkillTag from "@/components/ui/SkillTag";

const projects = [
  {
    num: "01",
    name: "Collectible Card E-Commerce",
    description:
      "Full-stack e-commerce platform with a React + TypeScript frontend on Vercel, Supabase (PostgreSQL) and Redis cache layer via Railway. Cloud infrastructure as code using Pulumi with AWS services (S3, Lambda, API Gateway) and a full CI/CD pipeline for continuous deployment.",
    tags: ["React", "TypeScript", "Supabase", "Redis", "Pulumi", "AWS", "CI/CD", "Vercel"],
    accent: "var(--accent)",
    link: "https://github.com/Inm0rt4LKoff33/aws-learning-journey",
  },
  {
    num: "02",
    name: "Hospitality Web Portal",
    description:
      "Centralized digital platform for Ronald McDonald's House of Charities Costa Rica to support internal operations. Implemented RBAC for secure data handling and led migration of records into a consolidated SQL Server environment.",
    tags: ["ASP.NET Core", "SQL Server", "RBAC", "Data Migration", "Full-Stack"],
    accent: "var(--accent-light)",
    link: "#",
  },
  {
    num: "03",
    name: "Customer Support Platform",
    description:
      "Production web platform for Soporte Completo S.A supporting business-critical operations. Built with ASP.NET Core and SQL Server, with GitHub Actions CI/CD workflows, delivered within a cross-functional Agile team.",
    tags: ["ASP.NET Core", "SQL Server", "GitHub Actions", "CI/CD", "Agile"],
    accent: "var(--accent)",
    link: "#",
  },
  {
    num: "04",
    name: "E-Commerce Integration",
    description:
      "Invoicing module integrated with the Costa Rica Ministry of Finance API using Node.js. Automated digital receipt delivery and performed Selenium functional testing to ensure compliance before production handoff.",
    tags: ["Node.js", "REST APIs", "Selenium", "Ministry of Finance API"],
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
                      <Lock size={10} /> Private
                    </span>
                  )}
                </div>

                <h3 className="font-display font-bold text-xl mb-3" style={{ color: "var(--text-primary)" }}>
                  {p.name}
                </h3>
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