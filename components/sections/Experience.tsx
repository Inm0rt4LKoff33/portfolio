"use client";

import { useReveal } from "@/components/ui/useReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import SkillTag from "@/components/ui/SkillTag";

const experiences = [
  {
    date: "Jan 2026 — Present",
    role: "Cloud & Infrastructure Engineer",
    company: "Freelance · San José, Costa Rica",
    description:
      "Assisted in provisioning AWS infrastructure using Terraform — EC2 instances, IAM roles, VPC configurations, and security groups. Containerized applications with Docker and deployed workloads to Kubernetes clusters. Supported CI/CD pipeline implementation via GitHub Actions and managed application servers in Linux-based cloud environments. Gained practical exposure to networking concepts such as subnets, routing tables, and access control policies.",
    tags: ["AWS", "Terraform", "Docker", "Kubernetes", "GitHub Actions", "Linux"],
  },
  {
    date: "Sep 2023 — Aug 2024",
    role: "Web Developer — Customer Support Platform",
    company: "Soporte Completo S.A · San José, Costa Rica",
    description:
      "Led the architecture, development, and deployment of a production web platform supporting operational business processes. Designed backend systems using ASP.NET Core and SQL Server with emphasis on maintainability and scalability. Established structured CI/CD workflows to improve release consistency and deployment reliability. Collaborated cross-functionally within an Agile framework to translate business requirements into technical solutions.",
    tags: ["ASP.NET Core", "SQL Server", "CI/CD", "Agile", "REST APIs"],
  },
  {
    date: "Apr 2024 — Jul 2024",
    role: "Web Developer — Hospitality Web Portal",
    company: "Ronald McDonald's House of Charities Costa Rica · San José, Costa Rica",
    description:
      "Designed and implemented a centralized digital platform to support internal operations and data management. Structured role-based access control mechanisms for secure information handling. Led data migration into a consolidated SQL Server environment, architecting a secure system that improved internal digital workflow organization.",
    tags: ["SQL Server", "Role-Based Access Control", "Data Migration", "Full-Stack"],
  },
  {
    date: "Jan 2024 — Apr 2024",
    role: "Web Developer — E-Commerce Integration",
    company: "Freelance · San José, Costa Rica",
    description:
      "Developed secure web applications and integrated third-party APIs for transactional workflows. Designed structured database schemas and implemented testing practices to ensure production reliability. Managed full lifecycle delivery from requirement analysis to deployment and support.",
    tags: ["REST APIs", "Node.js", "JavaScript", "MySQL", "Backend"],
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
            style={{
              background: "linear-gradient(to bottom, var(--accent), var(--border), transparent)",
            }}
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
                  style={{
                    background: "var(--accent)",
                    boxShadow: "0 0 10px var(--accent)",
                  }}
                />

                <p
                  className="font-mono text-xs tracking-widest uppercase mb-2"
                  style={{ color: "var(--accent)" }}
                >
                  {exp.date}
                </p>
                <h3
                  className="font-display font-bold text-xl mb-1"
                  style={{ color: "var(--text-primary)" }}
                >
                  {exp.role}
                </h3>
                <p
                  className="font-mono text-xs tracking-wide mb-4 uppercase"
                  style={{ color: "var(--accent-muted)" }}
                >
                  {exp.company}
                </p>
                <p
                  className="text-sm leading-relaxed max-w-2xl mb-5"
                  style={{ color: "var(--text-secondary)" }}
                >
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