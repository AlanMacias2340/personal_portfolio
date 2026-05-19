"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, FolderGit2 } from "lucide-react";

const projects = [
  {
    title: "Elite Brands",
    description:
      "Corporate website for Elite Brands, a leading import and distribution company in Bolivia with 78+ years in the market.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    link: "https://www.elitebrands.com.bo/home",
  },
  {
    title: "Top Service",
    description:
      "Corporate website for Top Service, a Bolivian medical/dental equipment technical service company with branches in 5 cities.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    link: "https://topservice.com.bo/",
  },
  {
    title: "Administración de Servicios",
    description:
      "Internal service management platform for handling service requests, technician assignments, and client communication.",
    tags: ["Vite", "React", "NestJS", "MySQL"],
    link: "/projects/administracion-de-servicios",
  },
  {
    title: "Custom Odoo Addons",
    description:
      "Custom modules and addons developed for Odoo ERP to extend functionality with business-specific workflows, reports, and integrations.",
    tags: ["Python", "Odoo", "PostgreSQL"],
    link: "/projects/custom-odoo-addons",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 bg-zinc-950/50 relative">
      <div className="mx-auto max-w-5xl">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.5 }}
           className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
             <div className="h-px w-12 bg-zinc-700" />
             <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
               Featured Projects
             </h2>
          </div>
          <p className="text-zinc-400 pl-16">
            Some things I&apos;ve built recently.
          </p>
        </motion.div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
          {projects.map((project, index) => (
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              key={project.title}
              href={project.link}
              target={project.link.startsWith("http") ? "_blank" : undefined}
              rel={project.link.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-zinc-800 bg-black p-8 transition-all hover:-translate-y-1 hover:border-zinc-500 hover:shadow-2xl hover:shadow-white/5"
            >
              <div>
                <div className="mb-6 flex items-center justify-between">
                  <FolderGit2 className="text-blue-500" size={32} />
                  <ArrowUpRight className="text-zinc-500 opacity-0 transition-all group-hover:opacity-100 group-hover:-translate-y-1 group-hover:translate-x-1" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                  {project.description}
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
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
