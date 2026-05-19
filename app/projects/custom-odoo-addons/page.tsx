import type { Metadata } from "next";
import Link from "next/link";
import { readdirSync } from "fs";
import { join } from "path";
import ScreenshotGallery from "@/app/components/screenshot-gallery";

export const metadata: Metadata = {
  title: "Custom Odoo Addons | Alan Jeferson Macias Mamani",
  description:
    "Custom modules and addons developed for Odoo ERP to extend functionality with business-specific workflows, reports, and integrations.",
};

const screenshotsDir = join(process.cwd(), "public/projects/odoo-custom-addons");

const screenshots: string[] = readdirSync(screenshotsDir)
  .filter((f) => /\.(png|jpg|jpeg|webp)$/i.test(f))
  .sort()
  .map((f) => `/projects/odoo-custom-addons/${f}`);

const techStack = [
  { name: "Python", color: "bg-yellow-400/10 text-yellow-400 border-yellow-400/30" },
  { name: "Odoo", color: "bg-purple-400/10 text-purple-400 border-purple-400/30" },
  { name: "PostgreSQL", color: "bg-blue-400/10 text-blue-400 border-blue-400/30" },
];

export default function ProjectDetail() {
  return (
    <main className="min-h-screen bg-black px-6 py-12">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors mb-8"
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
          Back
        </Link>

        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Custom Odoo Addons
        </h1>

        <div className="mt-6 flex flex-wrap gap-3">
          {techStack.map((tech) => (
            <span
              key={tech.name}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium ${tech.color}`}
            >
              {tech.name}
            </span>
          ))}
        </div>

        <p className="mt-8 text-lg leading-8 text-zinc-400">
          Custom modules and addons developed for Odoo ERP to extend core
          functionality with business-specific workflows, automated reports, and
          third-party integrations. Each module is tailored to meet unique
          operational requirements not covered by standard Odoo modules.
        </p>

        <section className="mt-16">
          <h2 className="text-2xl font-bold">
            <span className="text-blue-400">&gt;</span> Tech Stack
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-zinc-800 bg-surface/50 p-5">
              <h3 className="font-semibold text-yellow-400">Python</h3>
              <p className="mt-2 text-sm text-zinc-400">
                Odoo modules are built with Python, leveraging the Odoo ORM and
                framework APIs for models, views, and business logic.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-surface/50 p-5">
              <h3 className="font-semibold text-purple-400">Odoo</h3>
              <p className="mt-2 text-sm text-zinc-400">
                Custom addons extend Odoo&apos;s modular architecture with new
                apps, automated actions, and tailored workflows.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-surface/50 p-5">
              <h3 className="font-semibold text-blue-400">PostgreSQL</h3>
              <p className="mt-2 text-sm text-zinc-400">
                Reliable database backend for storing transactional data, custom
                models, and integration records.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-bold">
            <span className="text-blue-400">&gt;</span> Features
          </h2>
          <ul className="mt-6 space-y-3 text-zinc-400">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-blue-400 shrink-0" />
              Custom business workflows and automated actions
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-blue-400 shrink-0" />
              Tailored reports and dashboards for real-time insights
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-blue-400 shrink-0" />
              Third-party API integrations (payment gateways, shipping, ERPs)
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-blue-400 shrink-0" />
              Role-based access control and multi-company support
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-blue-400 shrink-0" />
              Data migration and import/export tools
            </li>
          </ul>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-bold">
            <span className="text-blue-400">&gt;</span> Screenshots
          </h2>
          <ScreenshotGallery
            screenshots={screenshots}
            altPrefix="Custom Odoo Addons"
          />
        </section>
      </div>
    </main>
  );
}
