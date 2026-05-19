export type Language = "en" | "es";

export const translations = {
  navbar: {
    inicio: { en: "Home", es: "Inicio" },
    skills: { en: "Skills", es: "Habilidades" },
    projects: { en: "Projects", es: "Proyectos" },
    contact: { en: "Contact", es: "Contacto" },
  },
  inicio: {
    greeting: { en: "Hi, I'm", es: "Hola, soy" },
    role: { en: "Full-Stack Software Developer", es: "Desarrollador de Software Full-Stack" },
    bio: {
      en: "Passionate about building clean, performant applications and solving complex problems with modern technology. Based in La Paz, Bolivia.",
      es: "Apasionado por construir aplicaciones limpias, de alto rendimiento y resolver problemas complejos con tecnología moderna. Con sede en La Paz, Bolivia.",
    },
    availability: { en: "Open to opportunities", es: "Abierto a oportunidades" },
    viewProjects: { en: "View Projects", es: "Ver Proyectos" },
    contactMe: { en: "Contact Me", es: "Contáctame" },
  },
  hero: {
    greeting: { en: "Hi, I'm", es: "Hola, soy" },
    description: {
      en: "Full-stack software developer passionate about building clean, performant applications and solving complex problems with modern technology.",
      es: "Desarrollador de software full-stack apasionado por construir aplicaciones limpias, de alto rendimiento y resolver problemas complejos con tecnología moderna.",
    },
    viewProjects: { en: "View Projects", es: "Ver Proyectos" },
    mySkills: { en: "My Skills", es: "Mis Habilidades" },
  },
  skills: {
    heading: { en: "A list of technologies I work with.", es: "Una lista de tecnologías con las que trabajo." },
  },
  projects: {
    heading: { en: "Featured Projects", es: "Proyectos Destacados" },
    subheading: { en: "Some things I've built recently.", es: "Algunas cosas que he construido recientemente." },
    items: {
      "Elite Brands": {
        en: "Corporate website for Elite Brands, a leading import and distribution company in Bolivia with 78+ years in the market.",
        es: "Sitio web corporativo para Elite Brands, una empresa líder en importación y distribución en Bolivia con más de 78 años en el mercado.",
      },
      "Top Service": {
        en: "Corporate website for Top Service, a Bolivian medical/dental equipment technical service company with branches in 5 cities.",
        es: "Sitio web corporativo para Top Service, una empresa boliviana de servicio técnico de equipos médicos/odontológicos con sucursales en 5 ciudades.",
      },
      "Administración de Servicios": {
        en: "Internal service management platform for handling service requests, technician assignments, and client communication.",
        es: "Plataforma interna de gestión de servicios para manejar solicitudes, asignación de técnicos y comunicación con clientes.",
      },
      "Custom Odoo Addons": {
        en: "Custom modules and addons developed for Odoo ERP to extend functionality with business-specific workflows, reports, and integrations.",
        es: "Módulos y complementos personalizados desarrollados para Odoo ERP que extienden la funcionalidad con flujos de trabajo, reportes e integraciones.",
      },
    },
  },
  contact: {
    heading: { en: "Get in Touch", es: "Ponte en Contacto" },
    subheading: { en: "Have a project or opportunity? I'd love to hear from you.", es: "¿Tienes un proyecto u oportunidad? Me encantaría saber de ti." },
    name: { en: "Name", es: "Nombre" },
    namePlaceholder: { en: "Your name", es: "Tu nombre" },
    email: { en: "Email", es: "Correo" },
    emailPlaceholder: { en: "you@example.com", es: "tu@ejemplo.com" },
    message: { en: "Message", es: "Mensaje" },
    messagePlaceholder: { en: "Tell me about your project...", es: "Cuéntame sobre tu proyecto..." },
    send: { en: "Send Message", es: "Enviar Mensaje" },
    sending: { en: "Sending...", es: "Enviando..." },
    success: { en: "Message sent! I'll get back to you soon.", es: "¡Mensaje enviado! Te responderé pronto." },
    error: { en: "Failed to send. Please try again or email me directly.", es: "Error al enviar. Intenta de nuevo o envíame un correo directamente." },
    turnstileRequired: { en: "Please complete the security check.", es: "Por favor completa la verificación de seguridad." },
    turnstileError: { en: "Security check failed. Please refresh and try again.", es: "La verificación de seguridad falló. Recarga e intenta de nuevo." },
  },
  footer: {
    builtWith: { en: "Built with", es: "Construido con" },
  },
  detail: {
    back: { en: "Back", es: "Volver" },
    techStack: { en: "Tech Stack", es: "Tecnologías" },
    features: { en: "Features", es: "Características" },
    screenshots: { en: "Screenshots", es: "Capturas de Pantalla" },
    noScreenshots: { en: "No screenshots added yet.", es: "Aún no se han agregado capturas." },
  },
  langToggle: { en: "ES", es: "EN" },
} as const;

export type TranslationKey = typeof translations;
