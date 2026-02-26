import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-outfit)", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        // Dark palette — Obsidian base
        obsidian: {
          950: "#080c0a",
          900: "#0d1510",
          800: "#111d16",
          700: "#162318",
          600: "#1c2d1f",
        },
        // Emerald accents
        emerald: {
          300: "#6ee7b7",
          400: "#34d399",
          500: "#10b981",
          600: "#059669",
        },
        // Light palette — Warm ivory base
        ivory: {
          50:  "#fafaf7",
          100: "#f5f4ee",
          200: "#ede9dc",
          300: "#ddd7c6",
        },
        // Shared slate tones
        slate: {
          200: "#e2e8f0",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },
        // Accent gold for light mode
        moss: {
          600: "#3d6b4f",
          700: "#2d5240",
          800: "#1f3b2d",
        }
      },
      animation: {
        "fade-up":    "fadeUp 0.7s ease both",
        "fade-in":    "fadeIn 0.5s ease both",
        "float":      "float 6s ease-in-out infinite",
        "shimmer":    "shimmer 2.5s linear infinite",
        "grid-move":  "gridMove 20s linear infinite",
      },
      keyframes: {
        fadeUp:   { from: { opacity: "0", transform: "translateY(28px)" }, to: { opacity: "1", transform: "translateY(0)" } },
        fadeIn:   { from: { opacity: "0" }, to: { opacity: "1" } },
        float:    { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-12px)" } },
        shimmer:  { from: { backgroundPosition: "-200% 0" }, to: { backgroundPosition: "200% 0" } },
        gridMove: { from: { backgroundPosition: "0 0" }, to: { backgroundPosition: "48px 48px" } },
      },
    },
  },
  plugins: [],
};

export default config;
