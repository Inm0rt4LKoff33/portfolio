"use client";

import { useLang } from "@/components/ui/LangProvider";

export default function LangToggle() {
  const { lang, t, setLang } = useLang();

  return (
    <button
      onClick={() => setLang(lang === "en" ? "es" : "en")}
      aria-label={t.toggle.aria}
      title={t.toggle.aria}
      className="h-9 px-3 rounded-md flex items-center justify-center font-mono text-xs tracking-widest transition-all duration-200 border hover:scale-105 active:scale-95"
      style={{
        borderColor: "var(--border)",
        background: "var(--card)",
        color: "var(--text-secondary)",
      }}
    >
      <span style={{ color: lang === "en" ? "var(--accent)" : "var(--text-muted)" }}>EN</span>
      <span className="mx-1.5" style={{ color: "var(--border-hover)" }}>/</span>
      <span style={{ color: lang === "es" ? "var(--accent)" : "var(--text-muted)" }}>ES</span>
    </button>
  );
}
