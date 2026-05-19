"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import { useT } from "../i18n/LanguageProvider";

export default function Hero() {
  const t = useT();

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center overflow-hidden">
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(37,99,235,0.15),rgba(255,255,255,0))]" />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-3xl"
      >
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="font-mono text-sm font-medium text-blue-400 mb-6 tracking-wider"
        >
          {"<hello-world />"}
        </motion.p>

        <h1 className="text-5xl font-bold tracking-tight sm:text-7xl mb-6">
          {t("hero", "greeting")}{" "}
          <br className="sm:hidden" />
          <span className="bg-gradient-to-br from-white via-white to-white/40 bg-clip-text text-transparent">
            Alan Jeferson
          </span>
        </h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mx-auto max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl"
        >
          {t("hero", "description")}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-all hover:bg-zinc-200 active:scale-95"
          >
            {t("hero", "viewProjects")}
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#skills"
            className="flex items-center gap-2 rounded-full border border-zinc-700 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur-md transition-all hover:bg-white/10 active:scale-95"
          >
            <FileText size={16} />
            {t("hero", "mySkills")}
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
