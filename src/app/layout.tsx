import type { Metadata, Viewport } from "next";
import "./globals.css";
import { PERSONAL } from "@/lib/data";

export const metadata: Metadata = {
  title: `${PERSONAL.name} — ${PERSONAL.title}`,
  description: `${PERSONAL.name} is a ${PERSONAL.title} specializing in Java, Spring Boot, REST API development, and database integration. ${PERSONAL.tagline}`,
  keywords: [
    "Java Backend Developer",
    "Spring Boot Developer",
    "REST API Developer",
    "Backend Developer",
    "Java Developer",
    "Spring MVC",
    "Spring Security",
    "Spring Data",
    "MongoDB",
    "MySQL",
    "Hibernate JPA",
    "Maven",
    "Git",
    "Docker",
    "API Development",
    "Backend Development",
    "Database Integration",
    "Layered Architecture",
    "Software Engineer Fresher",
    "Entry Level Java Developer",
    "Java Internship",
    "Backend Internship India",
    "Java Developer 2026",
    PERSONAL.name,
  ],
  authors: [{ name: PERSONAL.name }],
  creator: PERSONAL.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://saurabh-rawat.dev",
    title: `${PERSONAL.name} — ${PERSONAL.title}`,
    description: `${PERSONAL.name} is a ${PERSONAL.title} specializing in Java, Spring Boot, REST APIs, and backend system design.`,
    siteName: `${PERSONAL.name} Portfolio`,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${PERSONAL.name} — ${PERSONAL.title}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${PERSONAL.name} — ${PERSONAL.title}`,
    description: `${PERSONAL.name} is a ${PERSONAL.title} specializing in Java, Spring Boot, and REST API development.`,
    images: ["/og-image.png"],
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
    canonical: "https://saurabh-rawat.dev",
  },
};

export const viewport: Viewport = {
  themeColor: "#080c14",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="bg-background text-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
