const stats = [
  { value: "4+",    label: "Years Web Dev"      },
  { value: "3",     label: "Production Projects" },
  { value: "AWS",   label: "Cloud Focus"         },
  { value: "IaC",   label: "Terraform & Pulumi"  },
  { value: "K8s",   label: "Kubernetes"          },
];

export default function Stats() {
  return (
    <div
      className="border-y"
      style={{
        background: "var(--bg-subtle)",
        borderColor: "var(--border)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
        {stats.map((s, i) => (
          <div key={i} className="flex flex-col gap-1">
            <span
              className="font-display font-black leading-none"
              style={{
                fontSize: "clamp(2rem, 4vw, 2.8rem)",
                background: "linear-gradient(135deg, var(--accent) 0%, var(--accent-light) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {s.value}
            </span>
            <span
              className="font-mono text-xs uppercase tracking-widest"
              style={{ color: "var(--text-muted)" }}
            >
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
