import type { Metadata } from "next";
import { readdirSync } from "fs";
import { join } from "path";
import ProjectDetailContent from "@/app/components/project-detail-content";

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
  {
    name: "Python",
    color: "bg-yellow-400/10 text-yellow-400 border-yellow-400/30",
    description: {
      en: "Odoo modules are built with Python, leveraging the Odoo ORM and framework APIs for models, views, and business logic.",
      es: "Los módulos de Odoo se construyen con Python, aprovechando el ORM de Odoo y las APIs del framework para modelos, vistas y lógica de negocio.",
    },
  },
  {
    name: "Odoo",
    color: "bg-purple-400/10 text-purple-400 border-purple-400/30",
    description: {
      en: "Custom addons extend Odoo's modular architecture with new apps, automated actions, and tailored workflows.",
      es: "Complementos personalizados que extienden la arquitectura modular de Odoo con nuevas aplicaciones, acciones automatizadas y flujos de trabajo a medida.",
    },
  },
  {
    name: "PostgreSQL",
    color: "bg-blue-400/10 text-blue-400 border-blue-400/30",
    description: {
      en: "Reliable database backend for storing transactional data, custom models, and integration records.",
      es: "Base de datos confiable para almacenar datos transaccionales, modelos personalizados y registros de integración.",
    },
  },
];

const features = [
  {
    en: "Custom business workflows and automated actions",
    es: "Flujos de trabajo empresariales personalizados y acciones automatizadas",
  },
  {
    en: "Tailored reports and dashboards for real-time insights",
    es: "Informes y paneles personalizados para información en tiempo real",
  },
  {
    en: "Third-party API integrations (payment gateways, shipping, ERPs)",
    es: "Integraciones con APIs de terceros (pasarelas de pago, envíos, ERPs)",
  },
  {
    en: "Role-based access control and multi-company support",
    es: "Control de acceso basado en roles y soporte multi-empresa",
  },
  {
    en: "Data migration and import/export tools",
    es: "Herramientas de migración de datos e importación/exportación",
  },
];

const projectMeta = {
  en: "Custom modules and addons developed for Odoo ERP to extend core functionality with business-specific workflows, automated reports, and third-party integrations. Each module is tailored to meet unique operational requirements not covered by standard Odoo modules.",
  es: "Módulos y complementos personalizados desarrollados para Odoo ERP que extienden la funcionalidad principal con flujos de trabajo específicos, informes automatizados e integraciones con terceros. Cada módulo está adaptado para satisfacer requisitos operativos únicos no cubiertos por los módulos estándar de Odoo.",
};

export default function ProjectDetail() {
  return (
    <ProjectDetailContent
      projectTitle="Custom Odoo Addons"
      projectMeta={projectMeta}
      techStack={techStack}
      features={features}
      screenshots={screenshots}
    />
  );
}
