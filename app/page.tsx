import Inicio from "./components/inicio";
import Skills from "./components/skills";
import Projects from "./components/projects";
import ContactForm from "./components/contact-form";
import Footer from "./components/footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Alan Jeferson Macias Mamani",
  jobTitle: "Full-Stack Software Developer",
  url: "https://alanmacias.dev",
  sameAs: [
    "https://github.com/alanj2340",
    "https://linkedin.com/in/alan-macias",
  ],
  knowsAbout: [
    "Python",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Odoo",
    "Cloud Infrastructure",
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "BO",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="flex min-h-screen flex-col">
        <Inicio />
        <Skills />
        <Projects />
        <ContactForm />
        <Footer />
      </main>
    </>
  );
}
