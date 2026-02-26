"use client";

import { useReveal } from "@/components/ui/useReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import SkillTag from "@/components/ui/SkillTag";

const experiences = [
  {
    date: "2024 — Present",
    role: "DevOps & Cloud Engineering — Self-Directed",
    company: "Learning & Personal Projects",
    description:
      "Actively transitioning into DevOps and Cloud computing. Studying core AWS services (EC2, VPC, IAM, S3, Security Groups) and infrastructure-as-code with Terraform and Pulumi. Exploring Kubernetes architecture — Pods, Clusters, Deployments, and Ingress — and how it integrates with AWS. Building hands-on projects to solidify real-world readiness.",
    tags: ["AWS", "Terraform", "Pulumi", "Kubernetes", "EC2", "IAM", "VPC", "S3"],
  },
  {
    date: "2022 — 2024",
    role: "Web Developer",
    company: "Soporte Completo",
    description:
      "Built and maintained an internal Admin Dashboard for day-to-day business operations. Took ownership of the full development cycle — from requirements gathering to deployment — delivering a reliable interface that streamlined internal workflows.",
    tags: ["React", "Node.js", "REST APIs", "Dashboard", "Git"],
  },
  {
    date: "2021 — 2022",
    role: "Full-Stack Web Developer",
    company: "Ronald McDonald House Charities",
    description:
      "Developed a Hospitality Web Platform for Ronald McDonald's, enabling staff to manage guest stays, resources, and operational logistics. Built with a focus on usability and reliability for a non-profit environment where uptime and clarity matter.",
    tags: ["Full-Stack", "Web Platform", "Node.js", "React", "PostgreSQL"],
  },
  {
    date: "2020 — 2021",
    role: "Backend Developer",
    company: "E-Commerce Project",
    description:
      "Designed and implemented a Web API dedicated to electronic billing for an e-commerce platform. Handled invoice generation, tax compliance logic, and integration with payment workflows — requiring precision and robust error handling.",
    tags: ["REST API", "Electronic Billing", "Node.js", "E-Commerce", "Backend"],
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
