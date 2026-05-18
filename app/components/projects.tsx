const projects = [
  {
    title: "E-Commerce API",
    description:
      "RESTful backend service built with Python and FastAPI, containerized with Docker running on Ubuntu server. Handles product catalog, user auth, and order processing.",
    tags: ["Python", "Docker", "Ubuntu", "FastAPI"],
    link: "#",
  },
  {
    title: "Task Manager Dashboard",
    description:
      "Full-stack task management app with real-time updates. Built with Next.js, TypeScript, and React for the frontend, with a Java Spring Boot backend.",
    tags: ["Next.js", "TypeScript", "React", "Java"],
    link: "#",
  },
  {
    title: "DevOps Pipeline Toolkit",
    description:
      "CI/CD automation scripts and Docker compose configurations for deploying microservices. Includes monitoring, logging, and auto-scaling on Ubuntu infrastructure.",
    tags: ["Docker", "Ubuntu", "Python", "TypeScript"],
    link: "#",
  },
  {
    title: "Portfolio CMS",
    description:
      "Headless CMS for developer portfolios. Built with Next.js App Router, TypeScript, and PostgreSQL. Features markdown editing, image optimization, and SSR.",
    tags: ["Next.js", "TypeScript", "React"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
          <span className="text-blue-400">&gt;</span> Projects
        </h2>
        <p className="mt-4 text-center text-zinc-400">
          Some things I&apos;ve built recently.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              className="group rounded-xl border border-zinc-800 bg-surface/50 p-6 transition-all hover:border-blue-500/50 hover:bg-surface"
            >
              <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-blue-950/50 px-2.5 py-1 text-xs font-medium text-blue-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
