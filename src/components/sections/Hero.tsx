"use client";

import { PERSONAL } from "@/lib/data";
import { useHeroAnimation } from "@/lib/animations";
import Button from "@/components/ui/Button";
import {
  IconDownload,
  IconArrowRight,
  IconMapPin,
} from "@/components/ui/Icons";

export default function Hero() {
  useHeroAnimation();

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
        <div className="max-w-2xl">

          {/* Availability badge */}
          <div
            data-hero
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
            data-hero
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary leading-[1.1] tracking-tight mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {PERSONAL.name}
            <br />
            <span className="gradient-text">{PERSONAL.title}</span>
          </h1>

          {/* Tagline */}
          <p
            data-hero
            className="text-text-secondary text-lg leading-relaxed mb-5 max-w-xl"
          >
            {PERSONAL.tagline}
          </p>

          {/* Location */}
          <div
            data-hero
            className="flex items-center gap-1.5 mb-10 font-mono text-xs text-text-muted"
          >
            <IconMapPin size={13} />
            <span>{PERSONAL.location} · {PERSONAL.availability}</span>
          </div>

          {/* CTA Buttons — 2 only */}
          <div data-hero className="flex flex-wrap gap-3">
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
          </div>

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
