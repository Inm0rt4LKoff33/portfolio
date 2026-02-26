"use client";

import { Cloud, Layers, Container, Globe, Wrench, Terminal } from "lucide-react";
import { useReveal } from "@/components/ui/useReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import SkillTag from "@/components/ui/SkillTag";

const skills = [
  {
    icon: Cloud,
    title: "Cloud Infrastructure (AWS)",
    description: "Learning and applying core AWS services to design and manage scalable, secure cloud environments from the ground up.",
    tags: ["EC2", "VPC", "IAM", "S3", "Security Groups"],
    level: "Learning",
  },
  {
    icon: Layers,
    title: "Infrastructure as Code",
    description: "Provisioning and managing cloud resources through code for repeatable, version-controlled infrastructure environments.",
    tags: ["Terraform", "Pulumi"],
    level: "Learning",
  },
  {
    icon: Container,
    title: "Kubernetes & Containers",
    description: "Understanding container orchestration fundamentals — Pods, Clusters, Deployments, and Ingress — and how Kubernetes integrates with AWS.",
    tags: ["Kubernetes", "Pods", "Clusters", "Deployments", "Ingress", "AWS EKS"],
    level: "Learning",
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Years of professional experience delivering production web platforms, admin dashboards, and REST APIs across the full stack.",
    tags: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    level: "Proficient",
  },
  {
    icon: Wrench,
    title: "Backend & APIs",
    description: "Designed and built production REST APIs including an electronic billing system — requiring precision, reliability, and robust error handling.",
    tags: ["REST APIs", "Node.js", "E-Commerce", "Billing", "Express"],
    level: "Proficient",
  },
  {
    icon: Terminal,
    title: "Scripting & Tooling",
    description: "Writing automation scripts and working fluently in Unix environments — a core skill for DevOps workflows and infrastructure management.",
    tags: ["Bash", "Python", "Git", "Linux", "CLI"],
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