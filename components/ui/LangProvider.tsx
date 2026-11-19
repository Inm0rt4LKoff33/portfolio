"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { site, type Lang, type Site } from "@/content/site";

type LangState = { lang: Lang; t: Site; setLang: (l: Lang) => void };

const LangContext = createContext<LangState>({ lang: "en", t: site.en, setLang: () => {} });

// Idioma inicial: el que eligió la persona antes; si no, el de su navegador.
function initialLang(): Lang {
  try {
    const stored = localStorage.getItem("lang");
    if (stored === "en" || stored === "es") return stored;
  } catch {}
  return navigator.language?.toLowerCase().startsWith("es") ? "es" : "en";
}

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    setLangState(initialLang());
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = site[lang].meta.title;
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try { localStorage.setItem("lang", l); } catch {}
  };

  return <LangContext.Provider value={{ lang, t: site[lang], setLang }}>{children}</LangContext.Provider>;
}

export const useLang = () => useContext(LangContext);
