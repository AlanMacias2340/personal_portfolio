"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, FolderGit2 } from "lucide-react";
import Link from "next/link";
import { useT } from "../i18n/LanguageProvider";

const MotionLink = motion.create(Link);

const projects = [
  {
    title: "Elite Brands",
    descriptionKey: "Elite Brands",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    link: "https://www.elitebrands.com.bo/home",
  },
  {
    title: "Top Service",
    descriptionKey: "Top Service",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    link: "https://topservice.com.bo/",
  },
  {
    title: "Administración de Servicios",
    descriptionKey: "Administración de Servicios",
    tags: ["Vite", "React", "NestJS", "MySQL"],
    link: "/projects/administracion-de-servicios",
  },
  {
    title: "Custom Odoo Addons",
    descriptionKey: "Custom Odoo Addons",
    tags: ["Python", "Odoo", "PostgreSQL"],
    link: "/projects/custom-odoo-addons",
  },
];

export default function Projects() {
  const t = useT();

  return (
    <section id="projects" className="py-24 sm:py-32 px-4 sm:px-6 bg-zinc-950/50 relative">
      <div className="mx-auto max-w-5xl">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.5 }}
           className="mb-12 sm:mb-16"
        >
          <div className="flex items-center gap-3 sm:gap-4 mb-4">
             <div className="h-px w-8 sm:w-12 bg-zinc-700" />
             <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
               {t("projects", "heading")}
             </h2>
          </div>
          <p className="text-zinc-400 pl-12 sm:pl-16 text-sm sm:text-base">
            {t("projects", "subheading")}
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
          {projects.map((project, index) => {
            const isExternal = project.link.startsWith("http");
            const motionProps = {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true, margin: "-100px" },
              transition: { delay: index * 0.1, duration: 0.5 },
            };

            const content = (
              <>
                <div>
                  <div className="mb-6 flex items-center justify-between">
                    <FolderGit2 className="text-blue-500" size={32} />
                    <ArrowUpRight className="text-zinc-500 opacity-0 transition-all group-hover:opacity-100 group-hover:-translate-y-1 group-hover:translate-x-1" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                    {t("projects", "items", project.descriptionKey)}
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-zinc-900 border border-zinc-800 px-3 py-1 text-xs font-mono text-zinc-300 transition-colors group-hover:border-zinc-700 group-hover:text-zinc-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </>
            );

            if (isExternal) {
              return (
                <motion.a
                  key={project.title}
                  {...motionProps}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-zinc-800 bg-black p-5 sm:p-8 transition-all hover:-translate-y-1 hover:border-zinc-500 hover:shadow-2xl hover:shadow-white/5"
                >
                  {content}
                </motion.a>
              );
            }

            return (
              <MotionLink
                key={project.title}
                {...motionProps}
                href={project.link}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-zinc-800 bg-black p-8 transition-all hover:-translate-y-1 hover:border-zinc-500 hover:shadow-2xl hover:shadow-white/5"
              >
                {content}
              </MotionLink>
            );
          })}
        </div>
      </div>
    </section>
  );
}
