"use client";

import { useEffect, useRef } from "react";
import { PERSONAL } from "@/lib/data";
import Button from "@/components/ui/Button";
import {
  IconGithub,
  IconLinkedin,
  IconDownload,
  IconArrowRight,
  IconMapPin,
} from "@/components/ui/Icons";

export default function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Staggered entrance animation
    const el = headingRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(16px)";
    setTimeout(() => {
      el.style.transition = "opacity 0.7s ease, transform 0.7s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 100);
  }, []);

  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative min-h-screen flex flex-col justify-center bg-background overflow-hidden"
    >
      {/* Subtle grid + radial glow */}
      <div className="absolute inset-0 bg-grid opacity-100 pointer-events-none" aria-hidden="true" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 75% 55% at 50% -5%, rgba(37,99,235,0.10) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="max-w-3xl">

          {/* Availability badge */}
          <div
            className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 rounded-full border border-border bg-surface/60 backdrop-blur-sm"
            role="status"
            aria-label="Availability status"
          >
            <span className="avail-dot w-1.5 h-1.5 rounded-full bg-success" />
            <span className="font-mono text-xs text-text-secondary">
              {PERSONAL.availability}
            </span>
          </div>

          {/* Heading */}
          <h1
            ref={headingRef}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary leading-[1.1] tracking-tight mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {PERSONAL.name}
            <br />
            <span className="gradient-text">{PERSONAL.title}</span>
          </h1>

          {/* Tagline */}
          <p
            className="text-text-secondary text-lg md:text-xl leading-relaxed mb-4 max-w-2xl"
            style={{ animationDelay: "0.2s" }}
          >
            {PERSONAL.tagline}
          </p>

          {/* Meta info */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-10 font-mono text-xs text-text-muted">
            <span className="flex items-center gap-1.5">
              <IconMapPin size={13} />
              {PERSONAL.location}
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-text-muted" />
              {PERSONAL.education.degree}
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-text-muted" />
              {PERSONAL.education.institution}
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 mb-12">
            <Button
              href="#projects"
              variant="primary"
              size="lg"
              onClick={() => {
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View Projects
              <IconArrowRight size={16} />
            </Button>
            <Button
              href={PERSONAL.resumeUrl}
              download
              variant="outline"
              size="lg"
            >
              <IconDownload size={16} />
              Download Resume
            </Button>
            <Button
              href="#contact"
              variant="ghost"
              size="lg"
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contact Me
            </Button>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs text-text-muted">Find me on</span>
            <div className="h-px w-8 bg-border" />
            <a
              href={PERSONAL.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors group"
              aria-label="GitHub profile"
            >
              <IconGithub size={18} />
              <span className="font-mono text-xs group-hover:text-accent transition-colors">
                GitHub
              </span>
            </a>
            <a
              href={PERSONAL.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors group"
              aria-label="LinkedIn profile"
            >
              <IconLinkedin size={18} />
              <span className="font-mono text-xs group-hover:text-accent transition-colors">
                LinkedIn
              </span>
            </a>
          </div>
        </div>

        {/* ATS-friendly hidden keywords */}
        <div className="sr-only" aria-hidden="true">
          Java Backend Developer, Spring Boot, Spring MVC, REST API, RESTful API,
          MongoDB, MySQL, Hibernate, JPA, Spring Data, Spring Security,
          Maven, Docker, Git, GitHub, Postman, IntelliJ IDEA,
          Backend Development, API Development, Database Integration,
          Authentication, CRUD Operations, Layered Architecture, MVC,
          Entry Level Java Developer, Backend Internship India,
          Java Developer Fresher, Spring Boot Developer
        </div>
      </div>

      {/* Scroll cue */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40"
        aria-hidden="true"
      >
        <span className="font-mono text-[10px] text-text-muted tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-border to-transparent" />
      </div>
    </section>
  );
}
