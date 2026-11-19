"use client";

import { useLang } from "@/components/ui/LangProvider";

export default function Footer() {
  const f = useLang().t.footer;
  return (
    <footer
      className="border-t py-8 px-6"
      style={{ borderColor: "var(--border)", background: "var(--bg-subtle)" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-mono text-xs tracking-wider" style={{ color: "var(--text-muted)" }}>
          Fabian Madriz{" "}
          <span style={{ color: "var(--accent)" }}>●</span>{" "}
          {f.role}
        </p>
        <p className="font-mono text-xs" style={{ color: "var(--text-muted)" }}>
          {f.built}
        </p>
      </div>
    </footer>
  );
}
