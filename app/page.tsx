import Inicio from "./components/inicio";
import Skills from "./components/skills";
import Projects from "./components/projects";
import ContactForm from "./components/contact-form";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Inicio />
      <Skills />
      <Projects />
      <ContactForm />
      <Footer />
    </main>
  );
}
