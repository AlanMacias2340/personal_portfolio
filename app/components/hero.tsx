export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-950/30 via-black to-black" />
      <div className="relative z-10 max-w-3xl">
        <p className="font-mono text-sm text-blue-400 mb-4">
          {"<hello-world />"}
        </p>
        <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
            Alan
          </span>
        </h1>
        <p className="mt-6 text-lg leading-8 text-zinc-400 sm:text-xl">
          Full-stack software developer passionate about building clean,
          performant applications and solving complex problems with modern
          technology.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-500"
          >
            View Projects
          </a>
          <a
            href="#skills"
            className="rounded-lg border border-zinc-700 px-6 py-3 text-sm font-medium text-zinc-300 transition-colors hover:border-zinc-500 hover:text-white"
          >
            My Skills
          </a>
        </div>
      </div>
    </section>
  );
}
