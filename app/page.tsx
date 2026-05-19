import Hero from "./components/hero";
import Skills from "./components/skills";
import Projects from "./components/projects";
import ContactForm from "./components/contact-form";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Skills />
      <Projects />
      <ContactForm />
      <footer className="py-12 border-t border-zinc-900 bg-black text-center text-sm text-zinc-500">
        <p className="flex items-center justify-center gap-2">
          &copy; {new Date().getFullYear()} Alan Jeferson. Built with 
          <span className="text-white hover:text-blue-400 transition-colors cursor-pointer">Next.js</span> 
          &amp; 
          <span className="text-white hover:text-cyan-400 transition-colors cursor-pointer">Tailwind CSS</span>.
        </p>
      </footer>
    </main>
  );
}
