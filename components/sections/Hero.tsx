"use client";

import { useEffect, useState } from "react";

const roles = ["DevOps Engineer", "SRE", "AWS Cloud Engineer", "Full-Stack Developer"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [visible, setVisible]     = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setRoleIndex((i) => (i + 1) % roles.length);
        setVisible(true);
      }, 400);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden px-6 pt-24 pb-16"
      style={{ background: "var(--bg)" }}
    >
      {/* Animated grid */}
      <div
        className="absolute inset-0 grid-bg pointer-events-none"
        style={{ opacity: 0.6 }}
      />

      {/* Radial glow blobs */}
      <div
        className="absolute -top-32 -left-32 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, var(--accent-glow) 0%, transparent 65%)",
          animation: "float 8s ease-in-out infinite",
        }}
      />
      <div
        className="absolute -bottom-20 -right-20 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, var(--accent-glow) 0%, transparent 65%)",
          animation: "float 10s ease-in-out infinite reverse",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Available badge */}
        <div
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-sm border font-mono text-xs tracking-widest uppercase"
          style={{
            borderColor: "var(--border-hover)",
            background: "var(--accent-glow)",
            color: "var(--accent)",
            animation: "fadeUp 0.6s ease both",
          }}
        >
          <span
            className="w-2 h-2 rounded-full animate-pulse"
            style={{
              background: "var(--accent)",
              boxShadow: "0 0 8px var(--accent)",
            }}
          />
          Available for new opportunities
        </div>

        {/* Name */}
        <h1
          className="font-display leading-none tracking-tight mb-6"
          style={{
            fontSize: "clamp(4rem, 12vw, 10rem)",
            fontWeight: 900,
            letterSpacing: "-0.03em",
            animation: "fadeUp 0.7s 0.1s ease both",
          }}
        >
          <span style={{ color: "var(--text-primary)" }}>Fabian</span>
          <br />
          <span className="gradient-text italic">Madriz</span>
        </h1>

        {/* Rotating role */}
        <div
          className="flex items-center gap-3 mb-8"
          style={{ animation: "fadeUp 0.7s 0.2s ease both" }}
        >
          <span style={{ color: "var(--text-muted)", fontFamily: "JetBrains Mono, monospace", fontSize: "0.9rem" }}>
            Currently →
          </span>
          <span
            className="font-mono text-base font-medium transition-all duration-400"
            style={{
              color: "var(--accent)",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(8px)",
              transition: "opacity 0.4s ease, transform 0.4s ease",
            }}
          >
            {roles[roleIndex]}
          </span>
        </div>

        {/* Description */}
        <p
          className="text-lg leading-relaxed max-w-xl mb-12"
          style={{
            color: "var(--text-secondary)",
            animation: "fadeUp 0.7s 0.3s ease both",
          }}
        >
          Computer Systems Engineer with a proven track record in full-stack web development — 
          now transitioning into DevOps and Cloud. I bring real shipping experience from production 
          platforms and APIs, combined with hands-on AWS and Kubernetes training.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-wrap gap-4"
          style={{ animation: "fadeUp 0.7s 0.4s ease both" }}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-sm font-mono text-xs tracking-widest uppercase font-medium transition-all duration-200 hover:-translate-y-0.5 hover:scale-105"
            style={{
              background: "var(--accent)",
              color: "var(--bg)",
              boxShadow: "0 0 28px var(--accent-glow)",
            }}
          >
            Get in touch ↗
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-sm font-mono text-xs tracking-widest uppercase transition-all duration-200 hover:-translate-y-0.5 border"
            style={{
              borderColor: "var(--border)",
              color: "var(--text-secondary)",
              background: "transparent",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
              (e.currentTarget as HTMLElement).style.color = "var(--accent)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
              (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
            }}
          >
            View projects →
          </a>
        </div>

        {/* Tech ribbon */}
        <div
          className="mt-20 flex flex-wrap gap-x-8 gap-y-2 items-center"
          style={{ animation: "fadeUp 0.7s 0.5s ease both" }}
        >
          <span className="font-mono text-xs" style={{ color: "var(--text-muted)" }}>
            CORE STACK
          </span>
          {["AWS", "Terraform", "Pulumi", "Kubernetes", "React", "Node.js", "Next.js", "Linux"].map((t) => (
            <span key={t} className="font-mono text-xs font-medium" style={{ color: "var(--text-muted)" }}>
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ animation: "fadeIn 1s 1s ease both" }}
      >
        <span className="font-mono text-xs tracking-widest" style={{ color: "var(--text-muted)" }}>scroll</span>
        <div
          className="w-px h-10"
          style={{
            background: "linear-gradient(to bottom, var(--accent), transparent)",
            animation: "float 2s ease-in-out infinite",
          }}
        />
      </div>
    </section>
  );
}