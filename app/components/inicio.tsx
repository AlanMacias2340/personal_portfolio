"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Briefcase } from "lucide-react";
import Image from "next/image";
import { useT } from "../i18n/LanguageProvider";

export default function Inicio() {
  const t = useT();

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen flex-col items-center justify-center px-4 sm:px-6 overflow-hidden pt-20 sm:pt-24"
    >
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(37,99,235,0.12),rgba(255,255,255,0))]" />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10 sm:gap-16 max-w-5xl mx-auto w-full">
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="shrink-0"
        >
          <div className="relative">
            <div className="relative w-40 h-40 sm:w-52 sm:h-52 rounded-3xl overflow-hidden border-2 border-zinc-800 bg-zinc-900">
              <Image
                src="/perfil/perfil.png"
                alt="Alan Jeferson"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 160px, 208px"
                priority
              />
            </div>
            <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-green-500 border-4 border-black" />
          </div>
        </motion.div>

        {/* Content */}
        <div className="flex-1 text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-mono text-xs sm:text-sm font-medium text-blue-400 mb-3 sm:mb-4 tracking-wider"
          >
            {"<inicio />"}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-3 sm:mb-4"
          >
            {t("inicio", "greeting")}{" "}
            <span className="bg-gradient-to-br from-white via-white to-white/40 bg-clip-text text-transparent block sm:inline">
              Alan Jeferson
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl sm:text-2xl font-semibold text-zinc-300 mb-4 sm:mb-6"
          >
            {t("inicio", "role")}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-sm sm:text-base leading-7 text-zinc-400 max-w-xl mx-auto lg:mx-0 mb-6 sm:mb-8"
          >
            {t("inicio", "bio")}
          </motion.p>

          {/* Info badges */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap items-center gap-3 sm:gap-4 justify-center lg:justify-start mb-6 sm:mb-8 text-xs sm:text-sm text-zinc-400"
          >
            <span className="flex items-center gap-1.5">
              <MapPin size={14} className="text-blue-400" />
              La Paz, Bolivia
            </span>
            <span className="flex items-center gap-1.5">
              <Briefcase size={14} className="text-blue-400" />
              {t("inicio", "availability")}
            </span>
            <span className="flex items-center gap-1.5">
              <Mail size={14} className="text-blue-400" />
              alanmacias2340@gmail.com
            </span>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start"
          >
            <a
              href="#projects"
              className="group flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-all hover:bg-zinc-200 active:scale-95 w-full sm:w-auto justify-center"
            >
              {t("inicio", "viewProjects")}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 rounded-full border border-zinc-700 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur-md transition-all hover:bg-white/10 active:scale-95 w-full sm:w-auto justify-center"
            >
              <Mail size={16} />
              {t("inicio", "contactMe")}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
