import Hero from "./components/hero";
import Skills from "./components/skills";
import Projects from "./components/projects";

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Projects />
      <footer className="py-12 text-center text-sm text-zinc-600">
        <p>&copy; {new Date().getFullYear()} Alan. Built with Next.js & Tailwind CSS.</p>
      </footer>
    </>
  );
}
