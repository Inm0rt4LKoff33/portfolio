"use client";

import { Cloud, Layers, Container, Globe, Wrench, Terminal } from "lucide-react";
import { useReveal } from "@/components/ui/useReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import SkillTag from "@/components/ui/SkillTag";

const skills = [
  {
    icon: Cloud,
    title: "Cloud Infrastructure (AWS)",
    description: "Hands-on provisioning of AWS infrastructure — EC2, VPC, IAM, S3, and Security Groups — through real freelance infrastructure collaboration.",
    tags: ["EC2", "VPC", "IAM", "S3", "Security Groups"],
    level: "Learning",
  },
  {
    icon: Layers,
    title: "Infrastructure as Code",
    description: "Provisioning and managing cloud resources through code for repeatable, version-controlled infrastructure environments.",
    tags: ["Terraform"],
    level: "Learning",
  },
  {
    icon: Container,
    title: "Containers & Orchestration",
    description: "Containerizing applications with Docker and deploying workloads to Kubernetes clusters — including deployments, services, and container orchestration fundamentals.",
    tags: ["Docker", "Kubernetes", "Deployments", "Services", "AWS EKS"],
    level: "Learning",
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Production experience delivering web platforms and integrations across the full stack using modern frameworks and backend technologies.",
    tags: ["ASP.NET Core", "Node.js", "React", "Next.js", "JavaScript", "TypeScript"],
    level: "Proficient",
  },
  {
    icon: Wrench,
    title: "Backend & Databases",
    description: "Designing REST APIs, structuring database schemas, and integrating third-party services across multiple production environments.",
    tags: ["REST APIs", "SQL Server", "MySQL", "MongoDB", "Node.js"],
    level: "Proficient",
  },
  {
    icon: Terminal,
    title: "DevOps & Scripting",
    description: "Implementing CI/CD pipelines, managing Git workflows, and working fluently in Linux environments — core to both current and target roles.",
    tags: ["GitHub Actions", "CI/CD", "Bash", "Git", "Linux"],
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px"
          style={{ background: "var(--border)" }}
        >
          {skills.map((skill, i) => (
            <div
              key={i}
              className="reveal p-8 transition-all duration-200 group"
              style={{
                background: "var(--card)",
                animationDelay: `${i * 80}ms`,
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = "var(--surface)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = "var(--card)";
              }}
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
                    background: skill.level === "Proficient"
                      ? "var(--accent-glow)" : "rgba(234,179,8,0.08)",
                    color: skill.level === "Proficient"
                      ? "var(--accent)" : "#ca8a04",
                  }}
                >
                  {skill.level}
                </span>
              </div>
              <h3
                className="font-display font-bold text-lg mb-3"
                style={{ color: "var(--text-primary)" }}
              >
                {skill.title}
              </h3>
              <p
                className="text-sm leading-relaxed mb-5"
                style={{ color: "var(--text-muted)" }}
              >
                {skill.description}
              </p>
              <div className="flex flex-wrap gap-2">
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