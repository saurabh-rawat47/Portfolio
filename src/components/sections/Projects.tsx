import { PROJECTS } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { IconGithub, IconExternalLink, IconCheck } from "@/components/ui/Icons";
import type { Project } from "@/types";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article
      className={`reveal reveal-delay-${Math.min(index + 1, 4)} bg-surface border border-border rounded-xl overflow-hidden glow-blue-hover transition-all duration-300 flex flex-col`}
      aria-label={`Project: ${project.title}`}
    >
      {/* Card top bar */}
      <div className="h-1 w-full bg-gradient-to-r from-accent via-blue-400 to-violet-500 opacity-70" />

      <div className="p-6 flex flex-col gap-5 flex-1">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge color={project.badgeColor} size="sm">
                {project.badge}
              </Badge>
            </div>
            <h3
              className="font-display text-xl font-bold text-text-primary"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {project.title}
            </h3>
            <p className="font-mono text-xs text-text-muted mt-0.5">
              {project.subtitle}
            </p>
          </div>
          {/* Links */}
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-border text-text-secondary hover:text-text-primary hover:border-border-light transition-all"
              aria-label={`View ${project.title} on GitHub`}
            >
              <IconGithub size={16} />
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-border text-text-secondary hover:text-text-primary hover:border-border-light transition-all"
                aria-label={`View ${project.title} live demo`}
              >
                <IconExternalLink size={14} />
              </a>
            )}
          </div>
        </div>

        {/* Problem statement */}
        <div className="bg-background rounded-lg p-4 border border-border">
          <p className="font-mono text-[10px] text-accent uppercase tracking-widest mb-2">
            Problem Statement
          </p>
          <p className="text-text-secondary text-[13px] leading-relaxed">
            {project.problem}
          </p>
        </div>

        {/* Description */}
        <p className="text-text-secondary text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Architecture */}
        <div>
          <p className="font-mono text-[10px] text-text-muted uppercase tracking-widest mb-2">
            Architecture
          </p>
          <p className="text-text-secondary text-[13px] leading-relaxed">
            {project.architecture}
          </p>
        </div>

        {/* Key Features */}
        <div>
          <p className="font-mono text-[10px] text-text-muted uppercase tracking-widest mb-3">
            Key Features
          </p>
          <ul className="space-y-2" role="list">
            {project.features.map((feat) => (
              <li
                key={feat}
                className="flex items-start gap-2.5 text-[13px] text-text-secondary"
              >
                <IconCheck size={12} className="text-accent shrink-0 mt-0.5" />
                {feat}
              </li>
            ))}
          </ul>
        </div>

        {/* Sample API Endpoints — shown only for projects that have them */}
        {project.apiEndpoints && project.apiEndpoints.length > 0 && (
          <div>
            <p className="font-mono text-[10px] text-text-muted uppercase tracking-widest mb-3">
              Sample API Endpoints
            </p>
            <div className="bg-background rounded-lg border border-border p-3 space-y-1.5">
              {project.apiEndpoints.map((endpoint) => (
                <p
                  key={endpoint}
                  className="font-mono text-[12px] text-text-secondary"
                >
                  <span className="text-accent">{endpoint.split(" ")[0]}</span>
                  {" "}
                  <span>{endpoint.split(" ").slice(1).join(" ")}</span>
                </p>
              ))}
            </div>
          </div>
        )}

        {/* Tech Stack */}
        <div className="mt-auto pt-4 border-t border-border">
          <p className="font-mono text-[10px] text-text-muted uppercase tracking-widest mb-3">
            Tech Stack
          </p>
          <div className="flex flex-wrap gap-1.5" role="list" aria-label="Technologies used">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                role="listitem"
                className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-background border border-border text-text-secondary"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex gap-2 pt-1">
          <Button
            href={project.githubUrl}
            external
            variant="outline"
            size="sm"
            className="flex-1 justify-center"
          >
            <IconGithub size={14} />
            View Code
          </Button>
          {project.liveUrl && (
            <Button
              href={project.liveUrl}
              external
              variant="ghost"
              size="sm"
              className="flex-1 justify-center"
            >
              <IconExternalLink size={13} />
              Live Demo
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="section-padding bg-surface border-t border-border"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal">
          <SectionHeader
            eyebrow="Portfolio"
            title="Featured"
            highlight="Projects"
            description="Production-quality backend projects demonstrating REST API design, authentication systems, and database integration."
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="reveal mt-10 text-center">
          <p className="text-text-muted text-sm mb-4">
            More projects and contributions on GitHub
          </p>
          <Button
            href="https://github.com/saurabh-rawat47"
            external
            variant="outline"
            size="md"
          >
            <IconGithub size={16} />
            View GitHub Profile
          </Button>
        </div>
      </div>
    </section>
  );
}
