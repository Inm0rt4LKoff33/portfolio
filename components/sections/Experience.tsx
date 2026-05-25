"use client";

import { useReveal } from "@/components/ui/useReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import SkillTag from "@/components/ui/SkillTag";

const experiences = [
  {
    date: "Jan 2026 — Present",
    role: "Cloud Developer",
    company: "Freelance · Family Project · San José, Costa Rica",
    description:
      "Provisioned and configured AWS infrastructure (EC2, IAM, VPC) ensuring secure and scalable cloud environments. Containerized services with Docker, improving consistency across development and production. Built and maintained CI/CD pipelines using GitHub Actions, automating deployment processes. Managed Linux-based servers for system stability, performance monitoring, and issue resolution.",
    tags: ["AWS", "Docker", "GitHub Actions", "Linux", "CI/CD"],
  },
  {
    date: "Sep 2023 — Aug 2024",
    role: "Web Developer — Customer Support Platform",
    company: "Soporte Completo S.A · San José, Costa Rica",
    description:
      "Developed backend solutions using ASP.NET Core and SQL Server supporting business-critical operations. Translated business requirements into scalable, maintainable technical solutions with a focus on performance. Implemented CI/CD workflows with GitHub Actions, improving deployment speed and reducing operational risk. Collaborated in an Agile team across the full delivery lifecycle, from requirements gathering to production support.",
    tags: ["ASP.NET Core", "SQL Server", "GitHub Actions", "CI/CD", "Agile"],
  },
  {
    date: "Apr 2024 — Jul 2024",
    role: "Web Developer — Hospitality Portal",
    company: "Ronald McDonald House Charities CR · San José, Costa Rica",
    description:
      "Independently designed and delivered a centralized web platform to streamline internal operations for a non-profit organization. Implemented role-based access control (RBAC) to ensure secure handling of sensitive data across staff roles. Led migration of existing records into a consolidated SQL Server environment, improving data consistency and accessibility.",
    tags: ["SQL Server", "RBAC", "Data Migration", "Full-Stack"],
  },
  {
    date: "Jan 2024 — Apr 2024",
    role: "Web Developer — E-Commerce Integration",
    company: "Freelance · Private Client · San José, Costa Rica",
    description:
      "Developed an invoicing module using Node.js integrated with the Costa Rica Ministry of Finance API. Automated digital receipt delivery, improving the end-customer checkout experience. Performed functional testing with Selenium ensuring reliability and compliance before production handoff.",
    tags: ["Node.js", "REST APIs", "Selenium", "Ministry of Finance API", "Testing"],
  },
];

export default function Experience() {
  const ref = useReveal();

  return (
    <section
      id="experience"
      className="py-28 px-6"
      style={{ background: "var(--bg-subtle)" }}
    >
      <div className="max-w-6xl mx-auto" ref={ref}>
        <SectionLabel>Where I&apos;ve been</SectionLabel>
        <h2
          className="font-display font-black tracking-tight mb-16"
          style={{
            fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
            letterSpacing: "-0.02em",
            color: "var(--text-primary)",
          }}
        >
          Experience
        </h2>

        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-0 top-0 bottom-0 w-px"
            style={{ background: "linear-gradient(to bottom, var(--accent), var(--border), transparent)" }}
          />

          <div className="flex flex-col gap-0">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="reveal pl-10 pb-14 relative"
                style={{ animationDelay: `${i * 120}ms` }}
              >
                {/* Dot */}
                <div
                  className="absolute left-[-4.5px] top-1.5 w-2.5 h-2.5 rounded-full"
                  style={{ background: "var(--accent)", boxShadow: "0 0 10px var(--accent)" }}
                />

                <p className="font-mono text-xs tracking-widest uppercase mb-2" style={{ color: "var(--accent)" }}>
                  {exp.date}
                </p>
                <h3 className="font-display font-bold text-xl mb-1" style={{ color: "var(--text-primary)" }}>
                  {exp.role}
                </h3>
                <p className="font-mono text-xs tracking-wide mb-4 uppercase" style={{ color: "var(--accent-muted)" }}>
                  {exp.company}
                </p>
                <p className="text-sm leading-relaxed max-w-2xl mb-5" style={{ color: "var(--text-secondary)" }}>
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((t) => (
                    <SkillTag key={t} label={t} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}