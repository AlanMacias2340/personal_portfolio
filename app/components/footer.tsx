"use client";

import { useT } from "../i18n/LanguageProvider";

export default function Footer() {
  const t = useT();

  return (
    <footer className="py-12 border-t border-zinc-900 bg-black text-center text-sm text-zinc-500">
      <p className="flex items-center justify-center gap-2">
        &copy; {new Date().getFullYear()} Alan Jeferson. {t("footer", "builtWith")}{" "}
        <span className="text-white hover:text-blue-400 transition-colors cursor-pointer">Next.js</span>
        {" "}&amp;{" "}
        <span className="text-white hover:text-cyan-400 transition-colors cursor-pointer">Tailwind CSS</span>.
      </p>
    </footer>
  );
}
