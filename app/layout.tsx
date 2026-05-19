import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { cookies } from "next/headers";
import { Toaster } from "sonner";
import { LanguageProvider } from "./i18n/LanguageProvider";
import type { Language } from "./i18n/translations";
import "./globals.css";
import Navbar from "./components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alanmacias.dev"),
  title: {
    default: "Alan Jeferson Macias Mamani | Software Developer",
    template: "%s | Alan Macias",
  },
  description:
    "Full-stack developer specializing in Python, TypeScript, React, Next.js, and cloud infrastructure. Based in Bolivia.",
  keywords: [
    "Alan Macias",
    "Full-Stack Developer",
    "Software Developer",
    "Python",
    "TypeScript",
    "React",
    "Next.js",
    "Odoo",
    "Bolivia",
  ],
  authors: [{ name: "Alan Jeferson Macias Mamani" }],
  creator: "Alan Jeferson Macias Mamani",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "es_BO",
    siteName: "Alan Macias - Software Developer",
    title: "Alan Jeferson Macias Mamani | Software Developer",
    description:
      "Full-stack developer specializing in Python, TypeScript, React, Next.js, and cloud infrastructure.",
    images: [{ url: "/perfil/perfil.png", width: 800, height: 800, alt: "Alan Macias" }],
  },
  twitter: {
    card: "summary",
    title: "Alan Jeferson Macias Mamani | Software Developer",
    description:
      "Full-stack developer specializing in Python, TypeScript, React, Next.js, and cloud infrastructure.",
    images: ["/perfil/perfil.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    languages: {
      "en": "https://alanmacias.dev",
      "es": "https://alanmacias.dev/es",
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const langCookie = cookieStore.get("lang")?.value;
  const initialLang: Language = langCookie === "es" ? "es" : "en";

  return (
    <html
      lang={initialLang}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-black text-white selection:bg-blue-500/30">
        <LanguageProvider initialLang={initialLang}>
          <Navbar />
          {children}
          <Toaster
            theme="dark"
            position="bottom-right"
            toastOptions={{
              style: {
                background: "#18181b",
                border: "1px solid #27272a",
                color: "#f4f4f5",
              },
            }}
          />
        </LanguageProvider>
      </body>
    </html>
  );
}
