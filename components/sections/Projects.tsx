"use client";

import { ArrowUpRight, Lock } from "lucide-react";
import { useReveal } from "@/components/ui/useReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import SkillTag from "@/components/ui/SkillTag";

const projects = [
  {
    num: "01",
    name: "Hospitality Web Platform",
    description:
      "Full-stack web platform built for Ronald McDonald House Charities to manage guest stays, resource allocation, and operational workflows. Focused on reliability and ease of use for non-technical staff in a high-care environment.",
    tags: ["React", "Node.js", "PostgreSQL", "REST API", "Full-Stack"],
    accent: "var(--accent)",
    link: "#",
  },
  {
    num: "02",
    name: "Admin Dashboard — Soporte Completo",
    description:
      "Internal admin dashboard giving the Soporte Completo team a centralized view of business operations. Covered the full dev cycle from requirements to deployment, with a clean UI and real-time data updates.",
    tags: ["React", "Node.js", "Dashboard", "REST API", "Git"],
    accent: "var(--accent-light)",
    link: "#",
  },
  {
    num: "03",
    name: "Electronic Billing Web API",
    description:
      "Backend API handling electronic invoice generation, tax compliance logic, and payment workflow integration for an e-commerce platform. Built with precision and robust error handling given the financial nature of the domain.",
    tags: ["REST API", "Node.js", "E-Commerce", "Billing", "Backend"],
    accent: "var(--accent)",
    link: "#",
  },
  {
    num: "04",
    name: "E-Commerce Frontend Prototype",
    description:
      "A modern e-commerce frontend prototype built to showcase hands-on frontend skills — product listings, cart flow, and responsive design. Deployed live on Vercel as a tangible demonstration of UI development ability.",
    tags: ["React", "Next.js", "Tailwind CSS", "Vercel", "Frontend"],
    accent: "var(--accent-light)",
    link: "#",  // ← replace with your Vercel URL
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                <span
                  className="font-mono text-xs tracking-widest"
                  style={{ color: "var(--text-muted)" }}
                >
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
                    style={{
                      background: "rgba(148,163,184,0.08)",
                      color: "var(--text-muted)",
                    }}
                  >
                    <Lock size={10} />
                    Private
                  </span>
                )}
              </div>

              <h3
                className="font-display font-bold text-xl mb-3"
                style={{ color: "var(--text-primary)" }}
              >
                {p.name}
              </h3>
              <p
                className="text-sm leading-relaxed mb-6"
                style={{ color: "var(--text-secondary)" }}
              >
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