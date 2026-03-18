"use client";

import { SKILLS } from "@/lib/data";
import { useStaggerAnimation } from "@/lib/animations";
import SectionHeader from "@/components/ui/SectionHeader";
import { IconServer, IconDatabase, IconTools } from "@/components/ui/Icons";

const iconMap: Record<string, React.ReactNode> = {
  server:   <IconServer   size={16} className="text-accent" />,
  database: <IconDatabase size={16} className="text-accent" />,
  tools:    <IconTools    size={16} className="text-accent" />,
};

export default function Skills() {
  const gridRef = useStaggerAnimation("[data-card]", 90, 80);

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
            description="Built through project work and self-directed learning."
          />
        </div>

        <div
          ref={gridRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {SKILLS.map((cat) => (
            <div
              key={cat.category}
              data-card
              className="bg-surface border border-border rounded-xl p-6 transition-colors duration-300 glow-blue-hover"
            >
              {/* Card header */}
              <div className="flex items-center gap-2.5 mb-5 pb-4 border-b border-border">
                <div className="p-1.5 rounded-md bg-accent/10">
                  {iconMap[cat.icon]}
                </div>
                <h3
                  className="font-display font-semibold text-text-primary text-[15px]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {cat.category}
                </h3>
              </div>

              {/* Skill list */}
              <ul className="space-y-2" role="list" aria-label={`${cat.category} skills`}>
                {cat.skills.map(({ name }) => (
                  <li
                    key={name}
                    className="flex items-center gap-2 text-[13px] text-text-secondary"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent/50 shrink-0" />
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
