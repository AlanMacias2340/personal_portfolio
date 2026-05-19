import type { Metadata } from "next";
import { readdirSync } from "fs";
import { join } from "path";
import ProjectDetailContent from "@/app/components/project-detail-content";

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
  {
    name: "Vite + React",
    color: "bg-cyan-400/10 text-cyan-400 border-cyan-400/30",
    description: {
      en: "Fast and modern frontend built with Vite for instant HMR and React for a dynamic, responsive UI.",
      es: "Frontend rápido y moderno construido con Vite para HMR instantáneo y React para una UI dinámica y responsive.",
    },
  },
  {
    name: "NestJS",
    color: "bg-red-400/10 text-red-400 border-red-400/30",
    description: {
      en: "Scalable backend API with a modular architecture, authentication, and role-based access control.",
      es: "API backend escalable con arquitectura modular, autenticación y control de acceso basado en roles.",
    },
  },
  {
    name: "MySQL",
    color: "bg-blue-400/10 text-blue-400 border-blue-400/30",
    description: {
      en: "Relational database for persistent storage of users, services, appointments, and audit logs.",
      es: "Base de datos relacional para almacenamiento persistente de usuarios, servicios, citas y registros de auditoría.",
    },
  },
];

const features = [
  {
    en: "Service request creation and lifecycle tracking",
    es: "Creación de solicitudes de servicio y seguimiento del ciclo de vida",
  },
  {
    en: "Technician assignment and scheduling dashboard",
    es: "Panel de asignación y programación de técnicos",
  },
  {
    en: "Client communication and notification system",
    es: "Sistema de comunicación y notificación con clientes",
  },
  {
    en: "Reports and analytics with export capabilities",
    es: "Informes y análisis con capacidades de exportación",
  },
  {
    en: "Role-based access control for admins, technicians, and clients",
    es: "Control de acceso basado en roles para administradores, técnicos y clientes",
  },
];

const projectMeta = {
  en: "Internal service management platform built for a company to handle and track service requests, technician assignments, and client communication. The system streamlines operations and provides real-time visibility into service workflows.",
  es: "Plataforma interna de gestión de servicios construida para una empresa que maneja y rastrea solicitudes de servicio, asignación de técnicos y comunicación con clientes. El sistema optimiza las operaciones y proporciona visibilidad en tiempo real de los flujos de trabajo.",
};

export default function ProjectDetail() {
  return (
    <ProjectDetailContent
      projectTitle="Administración de Servicios"
      projectMeta={projectMeta}
      techStack={techStack}
      features={features}
      screenshots={screenshots}
    />
  );
}
