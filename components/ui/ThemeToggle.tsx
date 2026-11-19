"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { useLang } from "@/components/ui/LangProvider";

export default function ThemeToggle() {
  const { t } = useLang();
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    try { localStorage.setItem("theme", next ? "dark" : "light"); } catch {}
  };

  if (!mounted) return <div className="w-9 h-9" />;

  return (
    <button
      onClick={toggle}
      aria-label={t.nav.theme}
      className="w-9 h-9 rounded-md flex items-center justify-center transition-all duration-200 border hover:scale-105 active:scale-95"
      style={{
        borderColor: "var(--border)",
        background: "var(--card)",
        color: "var(--text-secondary)",
      }}
    >
      {isDark ? <Sun size={15} /> : <Moon size={15} />}
    </button>
  );
}