"use client";

import { motion } from "framer-motion";
import { useT } from "../i18n/LanguageProvider";

const skills = [
  { name: "Python", color: "bg-yellow-400/10 text-yellow-500 border-yellow-400/20" },
  { name: "Java", color: "bg-orange-400/10 text-orange-500 border-orange-400/20" },
  { name: "TypeScript", color: "bg-blue-400/10 text-blue-400 border-blue-400/20" },
  { name: "React", color: "bg-cyan-400/10 text-cyan-400 border-cyan-400/20" },
  { name: "Next.js", color: "bg-zinc-400/10 text-zinc-300 border-zinc-500/20" },
  { name: "Docker", color: "bg-blue-500/10 text-blue-500 border-blue-500/20" },
  { name: "Ubuntu", color: "bg-orange-600/10 text-orange-600 border-orange-600/20" },
];

export default function Skills() {
  const t = useT();

  return (
    <section id="skills" className="py-32 px-6">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
            <span className="text-blue-500">const</span> skills <span className="text-blue-500">=</span> [
          </h2>
          <p className="mt-4 text-center text-zinc-400">
            {t("skills", "heading")}
          </p>
        </motion.div>

        <div className="mt-16 flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <motion.span
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.05 }}
              className={`rounded-xl border px-6 py-3 text-sm font-medium transition-colors hover:bg-opacity-20 ${skill.color}`}
            >
              {skill.name}
            </motion.span>
          ))}
        </div>
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-3xl font-bold tracking-tight sm:text-4xl mt-12"
        >
          ];
        </motion.h2>
      </div>
    </section>
  );
}
