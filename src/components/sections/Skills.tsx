import { SKILLS } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";
import { IconServer, IconDatabase, IconTools, IconCode } from "@/components/ui/Icons";
import type { SkillCategory } from "@/types";

const iconMap: Record<string, React.ReactNode> = {
  server:   <IconServer size={18} className="text-accent" />,
  database: <IconDatabase size={18} className="text-accent" />,
  tools:    <IconTools size={18} className="text-accent" />,
  code:     <IconCode size={18} className="text-accent" />,
};

const levelColor: Record<"Proficient" | "Familiar", "violet" | "gray"> = {
  Proficient: "violet",
  Familiar:   "gray",
};

const levelBar: Record<"Proficient" | "Familiar", number> = {
  Proficient: 70,
  Familiar:   45,
};

function SkillCard({ category, icon, skills }: SkillCategory) {
  return (
    <div className="bg-surface border border-border rounded-xl p-6 glow-blue-hover transition-all duration-300">
      {/* Card header */}
      <div className="flex items-center gap-3 mb-5 pb-4 border-b border-border">
        <div className="p-2 rounded-lg bg-accent/10">
          {iconMap[icon]}
        </div>
        <h3
          className="font-display font-semibold text-text-primary text-[15px]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {category}
        </h3>
      </div>

      {/* Skills list */}
      <ul className="space-y-3.5" role="list" aria-label={`${category} skills`}>
        {skills.map(({ name, level }) => (
          <li key={name}>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[13px] text-text-secondary font-medium">
                {name}
              </span>
              <Badge color={levelColor[level]} size="sm">
                {level}
              </Badge>
            </div>
            {/* Progress bar */}
            <div
              className="h-[3px] rounded-full bg-background overflow-hidden"
              role="progressbar"
              aria-valuenow={levelBar[level]}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={`${name}: ${level}`}
            >
              <div
                className="h-full rounded-full bg-gradient-to-r from-accent to-blue-400 skill-bar-fill"
                style={{ "--fill": `${levelBar[level]}%` } as React.CSSProperties}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="section-padding bg-background"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal">
          <SectionHeader
            eyebrow="Technical Skills"
            title="Skills &"
            highlight="Technologies"
            description="Skills built through project work and self-directed learning. Levels reflect honest, project-based familiarity — not production experience."
          />
        </div>

        {/* Legend */}
        <div className="reveal flex flex-wrap items-center gap-4 mb-8 -mt-4">
          <span className="font-mono text-xs text-text-muted">Proficiency:</span>
          {(["Proficient", "Familiar"] as const).map((l) => (
            <div key={l} className="flex items-center gap-1.5">
              <Badge color={levelColor[l]} size="sm">{l}</Badge>
            </div>
          ))}
          <span className="font-mono text-[10px] text-text-muted">
            · Proficient = used in projects &nbsp;· Familiar = learning / exploring
          </span>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SKILLS.map((cat, i) => (
            <div
              key={cat.category}
              className={`reveal reveal-delay-${Math.min(i + 1, 4)}`}
            >
              <SkillCard {...cat} />
            </div>
          ))}
        </div>

        {/* ATS keyword block — screen reader only */}
        <div className="sr-only" aria-label="Technology keywords">
          Java, Spring Boot, Spring MVC, Spring Data, Spring Security,
          REST API, RESTful API, Hibernate, JPA, MongoDB, MySQL, PostgreSQL,
          Git, GitHub, Docker, Maven, Postman, IntelliJ IDEA,
          Backend Development, API Development, Database Integration,
          Authentication, OOP, Object-Oriented Programming,
          Data Structures, Layered Architecture, MVC
        </div>
      </div>
    </section>
  );
}
