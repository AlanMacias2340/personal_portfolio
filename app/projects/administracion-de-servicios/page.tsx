import type { Metadata } from "next";
import Link from "next/link";
import { readdirSync } from "fs";
import { join } from "path";

export const metadata: Metadata = {
  title: "Administración de Servicios | Alan Jeferson Macias Mamani",
  description:
    "Internal service management platform built with Vite + React, NestJS, and MySQL. Features service tracking, technician scheduling, and client communication.",
};

const screenshotsDir = join(process.cwd(), "public/projects/admin-top-service");

const screenshots: string[] = readdirSync(screenshotsDir)
  .filter((f) => /\.(png|jpg|jpeg|webp)$/i.test(f))
  .sort()
  .map((f) => `/projects/admin-top-service/${f}`);

const techStack = [
  { name: "Vite + React", color: "bg-cyan-400/10 text-cyan-400 border-cyan-400/30" },
  { name: "NestJS", color: "bg-red-400/10 text-red-400 border-red-400/30" },
  { name: "MySQL", color: "bg-blue-400/10 text-blue-400 border-blue-400/30" },
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
          Administraci&oacute;n de Servicios
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
          Internal service management platform built for a company to handle and
          track service requests, technician assignments, and client
          communication. The system streamlines operations and provides
          real-time visibility into service workflows.
        </p>

        <section className="mt-16">
          <h2 className="text-2xl font-bold">
            <span className="text-blue-400">&gt;</span> Tech Stack
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-zinc-800 bg-surface/50 p-5">
              <h3 className="font-semibold text-cyan-400">Vite + React</h3>
              <p className="mt-2 text-sm text-zinc-400">
                Fast and modern frontend built with Vite for instant HMR and
                React for a dynamic, responsive UI.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-surface/50 p-5">
              <h3 className="font-semibold text-red-400">NestJS</h3>
              <p className="mt-2 text-sm text-zinc-400">
                Scalable backend API with a modular architecture, authentication,
                and role-based access control.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-surface/50 p-5">
              <h3 className="font-semibold text-blue-400">MySQL</h3>
              <p className="mt-2 text-sm text-zinc-400">
                Relational database for persistent storage of users, services,
                appointments, and audit logs.
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
              Service request creation and lifecycle tracking
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-blue-400 shrink-0" />
              Technician assignment and scheduling dashboard
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-blue-400 shrink-0" />
              Client communication and notification system
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-blue-400 shrink-0" />
              Reports and analytics with export capabilities
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-blue-400 shrink-0" />
              Role-based access control for admins, technicians, and clients
            </li>
          </ul>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-bold">
            <span className="text-blue-400">&gt;</span> Screenshots
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {screenshots.map((src, i) => (
              <img
                key={src}
                src={src}
                alt={`Administración de Servicios — Screen ${i + 1}`}
                className="rounded-xl border border-zinc-800 w-full"
              />
            ))}
          </div>
          {screenshots.length === 0 && (
            <p className="mt-6 text-sm text-zinc-600">
              No screenshots added yet.
            </p>
          )}
        </section>
      </div>
    </main>
  );
}
