"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import type { Language } from "./translations";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({
  children,
  initialLang,
}: {
  children: ReactNode;
  initialLang: Language;
}) {
  const [lang, setLangState] = useState<Language>(initialLang);

  const setLang = useCallback((l: Language) => {
    setLangState(l);
    localStorage.setItem("lang", l);
    document.cookie = `lang=${l}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`;
  }, []);

  const toggleLang = useCallback(() => setLang(lang === "en" ? "es" : "en"), [lang, setLang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}

export function useT() {
  const { lang } = useLanguage();
  const t = useCallback(
    (...path: string[]) => translate(lang, ...path),
    [lang]
  );
  return t;
}

import { translations } from "./translations";

export function translate(lang: Language, ...path: string[]): string {
  let current: unknown = translations;
  for (const key of path) {
    if (current && typeof current === "object" && key in current) {
      current = (current as Record<string, unknown>)[key];
    } else {
      return path.join(".");
    }
  }
  if (current && typeof current === "object" && "en" in current && "es" in current) {
    const v = current as { en: string; es: string };
    return v[lang] ?? v.en;
  }
  return path.join(".");
}
