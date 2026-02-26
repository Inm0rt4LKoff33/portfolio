"use client";

import { GraduationCap, Award, Container, Layers } from "lucide-react";
import { useReveal } from "@/components/ui/useReveal";
import SectionLabel from "@/components/ui/SectionLabel";

type CertStatus = "completed" | "in-progress" | "target";

const certs: {
  icon: React.ElementType;
  name: string;
  issuer: string;
  status: CertStatus;
  label: string;
}[] = [
  {
    icon: GraduationCap,
    name: "B.Sc. Computer Systems Engineering",
    issuer: "Fidelitas University · 2020 – 2024",
    status: "completed",
    label: "Graduated",
  },
  {
    icon: Award,
    name: "Data Science",
    issuer: "Smart Data · Oct 2024 – Jan 2025",
    status: "completed",
    label: "Completed",
  },
  {
    icon: Container,
    name: "Containers & Kubernetes",
    issuer: "Docker · Kubernetes · Hands-on",
    status: "in-progress",
    label: "In Progress",
  },
  {
    icon: Layers,
    name: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    status: "target",
    label: "Target",
  },
];

const statusStyle: Record<CertStatus, { bg: string; color: string }> = {
  completed:    { bg: "var(--accent-glow)",          color: "var(--accent)"     },
  "in-progress":{ bg: "rgba(234,179,8,0.08)",        color: "#ca8a04"           },
  target:       { bg: "rgba(148,163,184,0.08)",      color: "var(--text-muted)" },
};

export default function Certifications() {
  const ref = useReveal();

  return (
    <section
      id="certs"
      className="py-28 px-6"
      style={{ background: "var(--bg-subtle)" }}
    >
      <div className="max-w-6xl mx-auto" ref={ref}>
        <SectionLabel>Credentials</SectionLabel>
        <h2
          className="font-display font-black tracking-tight mb-14"
          style={{
            fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
            letterSpacing: "-0.02em",
            color: "var(--text-primary)",
          }}
        >
          Certifications
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certs.map((cert, i) => (
            <div
              key={i}
              className="card reveal p-6 flex flex-col gap-4"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div
                className="w-10 h-10 rounded-md flex items-center justify-center"
                style={{ background: "var(--accent-glow)", color: "var(--accent)" }}
              >
                <cert.icon size={20} />
              </div>
              <div>
                <h3
                  className="font-display font-semibold text-base leading-snug mb-1"
                  style={{ color: "var(--text-primary)" }}
                >
                  {cert.name}
                </h3>
                <p
                  className="font-mono text-xs tracking-wide"
                  style={{ color: "var(--accent-muted)" }}
                >
                  {cert.issuer}
                </p>
              </div>
              <div className="mt-auto">
                <span
                  className="font-mono text-xs px-2.5 py-1 rounded-sm"
                  style={{
                    background: statusStyle[cert.status].bg,
                    color: statusStyle[cert.status].color,
                  }}
                >
                  {cert.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}