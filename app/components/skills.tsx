const skills = [
  { name: "Python", color: "bg-yellow-400/10 text-yellow-400 border-yellow-400/30" },
  { name: "Java", color: "bg-orange-400/10 text-orange-400 border-orange-400/30" },
  { name: "TypeScript", color: "bg-blue-400/10 text-blue-400 border-blue-400/30" },
  { name: "React", color: "bg-cyan-400/10 text-cyan-400 border-cyan-400/30" },
  { name: "Next.js", color: "bg-zinc-400/10 text-zinc-300 border-zinc-500/30" },
  { name: "Docker", color: "bg-blue-500/10 text-blue-300 border-blue-500/30" },
  { name: "Ubuntu", color: "bg-orange-500/10 text-orange-300 border-orange-500/30" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
          <span className="text-blue-400">&gt;</span> Skills
        </h2>
        <p className="mt-4 text-center text-zinc-400">
          Technologies and tools I work with daily.
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {skills.map((skill) => (
            <span
              key={skill.name}
              className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-all hover:scale-105 ${skill.color}`}
            >
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
