"use client";

import Link from "next/link";
import { useT, useLanguage } from "@/app/i18n/LanguageProvider";
import ScreenshotGallery from "@/app/components/screenshot-gallery";

interface TechItem {
  name: string;
  color: string;
  description: { en: string; es: string };
}

interface FeatureItem {
  en: string;
  es: string;
}

interface Props {
  projectTitle: string;
  projectMeta: { en: string; es: string };
  techStack: TechItem[];
  features: FeatureItem[];
  screenshots: string[];
}

export default function ProjectDetailContent({
  projectTitle,
  projectMeta,
  techStack,
  features,
  screenshots,
}: Props) {
  const t = useT();
  const { lang } = useLanguage();

  return (
    <main className="min-h-screen bg-black px-4 sm:px-6 py-8 sm:py-12">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors mb-6 sm:mb-8"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
          {t("detail", "back")}
        </Link>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
          {projectTitle}
        </h1>

        <div className="mt-4 sm:mt-6 flex flex-wrap gap-2 sm:gap-3">
          {techStack.map((tech) => (
            <span
              key={tech.name}
              className={`rounded-full border px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-medium ${tech.color}`}
            >
              {tech.name}
            </span>
          ))}
        </div>

        <p className="mt-6 sm:mt-8 text-base sm:text-lg leading-7 sm:leading-8 text-zinc-400">
          {lang === "es" ? projectMeta.es : projectMeta.en}
        </p>

        <section className="mt-12 sm:mt-16">
          <h2 className="text-xl sm:text-2xl font-bold">
            <span className="text-blue-400">&gt;</span> {t("detail", "techStack")}
          </h2>
          <div className="mt-4 sm:mt-6 grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-3">
            {techStack.map((tech) => (
              <div key={tech.name} className="rounded-xl border border-zinc-800 bg-surface/50 p-4 sm:p-5">
                <h3 className={`font-semibold ${tech.color.split(" ")[1]}`}>
                  {tech.name}
                </h3>
                <p className="mt-2 text-sm text-zinc-400">
                  {lang === "es" ? tech.description.es : tech.description.en}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 sm:mt-16">
          <h2 className="text-xl sm:text-2xl font-bold">
            <span className="text-blue-400">&gt;</span> {t("detail", "features")}
          </h2>
          <ul className="mt-4 sm:mt-6 space-y-2 sm:space-y-3 text-zinc-400 text-sm sm:text-base">
            {features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-blue-400 shrink-0" />
                {lang === "es" ? feature.es : feature.en}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12 sm:mt-16">
          <h2 className="text-xl sm:text-2xl font-bold">
            <span className="text-blue-400">&gt;</span> {t("detail", "screenshots")}
          </h2>
          <ScreenshotGallery
            screenshots={screenshots}
            altPrefix={projectTitle}
          />
        </section>
      </div>
    </main>
  );
}
