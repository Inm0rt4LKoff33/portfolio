"use client";

import { useReveal } from "@/components/ui/useReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import SkillTag from "@/components/ui/SkillTag";

const experiences = [
  {
    date: "2026 — Present",
    role: "Data Intern — Academic Data Observatory",
    company: "ISTS · Ecuador",
    description:
      "Building the data pipeline behind the institute's academic dashboard. It takes the enrollment, withdrawal and graduation reports in Excel, validates each file against a data contract, normalizes text, dates and periods, pseudonymizes national IDs with a salted SHA-256 hash and drops personal data. Doubtful values are logged in a data-quality report instead of being fixed silently, and the curated layer is rebuilt as a star schema for Power BI on every run. Covered by 17 automated tests and documented for handover.",
    tags: ["Python", "Pandas", "ETL", "Data Quality", "Star Schema", "pytest"],
  },
  {
    date: "2025 · 2 months",
    role: "Cloud Support (Freelance)",
    company: "Client project · Costa Rica",
    description:
      "Configured EC2 instances, IAM access and the VPC network of a client's AWS environment.",
    tags: ["AWS", "EC2", "IAM", "VPC"],
  },
  {
    date: "Jan 2024 — Apr 2024",
    role: "Freelance Developer — E-Invoicing Integration",
    company: "Online store · San José, Costa Rica",
    description:
      "Integrated an online store's checkout with the Costa Rica Ministry of Finance electronic-invoicing API. Built the module that authenticates with the ministry, captures each transaction's data after purchase and emails the electronic receipt to the customer.",
    tags: ["Node.js", "Express", "REST APIs"],
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