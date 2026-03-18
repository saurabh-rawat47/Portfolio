import { EXPERIENCE, PERSONAL } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import { IconBriefcase, IconCalendar, IconMapPin, IconCheck, IconGraduationCap } from "@/components/ui/Icons";

const currentlyLearning = [
  "Spring Security — authentication, JWT, role-based authorization",
  "Backend system design — layered architecture basics",
  "REST API optimization — validation & error handling",
  "Database fundamentals — schema design & CRUD",
  "Learning query optimization and indexing basics",
  "Exploring Docker — containerization fundamentals",
];

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="section-padding bg-background border-t border-border"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal">
          <SectionHeader
            eyebrow="Background"
            title="Experience &"
            highlight="Education"
            description="Project-based learning, self-directed study, and hands-on backend development."
          />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Experience column — 2 cols */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <h3 className="reveal font-mono text-xs text-text-muted uppercase tracking-widest">
              Development Experience
            </h3>

            {EXPERIENCE.map((exp, i) => (
              <article
                key={i}
                className={`reveal reveal-delay-${Math.min(i + 1, 4)} flex flex-col justify-between bg-surface border border-border rounded-xl p-6 glow-blue-hover transition-colors duration-300`}
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5 pb-4 border-b border-border">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <div className="p-1.5 rounded-md bg-accent/10">
                        <IconBriefcase size={14} className="text-accent" />
                      </div>
                      <span className="font-mono text-[10px] text-accent uppercase tracking-widest">
                        {exp.type}
                      </span>
                    </div>
                    <h4
                      className="font-display text-lg font-bold text-text-primary"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {exp.role}
                    </h4>
                  </div>
                  <div className="flex flex-col gap-1.5 text-[12px] font-mono text-text-muted sm:text-right shrink-0">
                    <span className="flex items-center gap-1.5 sm:justify-end">
                      <IconCalendar size={11} />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5 sm:justify-end">
                      <IconMapPin size={11} />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Responsibilities */}
                <ul className="flex-1 space-y-2.5 mb-5" role="list">
                  {exp.description.map((point, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2.5 text-[13px] text-text-secondary leading-relaxed"
                    >
                      <IconCheck size={12} className="text-accent shrink-0 mt-1" />
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Tech used */}
                <div className="pt-4 border-t border-border">
                  <p className="font-mono text-[10px] text-text-muted uppercase tracking-widest mb-2.5">
                    Technologies Used
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.techUsed.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-background border border-border text-text-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Sidebar — 1 col */}
          <div className="flex flex-col gap-5">
            <h3 className="reveal font-mono text-xs text-text-muted uppercase tracking-widest">
              Education
            </h3>

            {/* Education card — institution name omitted */}
            <div className="reveal reveal-delay-1 bg-surface border border-border rounded-xl p-6 glow-blue-hover transition-all duration-300">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-1.5 rounded-md bg-accent/10">
                  <IconGraduationCap size={16} className="text-accent" />
                </div>
                <span className="font-mono text-[10px] text-accent uppercase tracking-widest">
                  B.Tech
                </span>
              </div>
              <h4
                className="font-display font-bold text-text-primary text-base leading-snug mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {PERSONAL.education.degree}
              </h4>
              <div className="space-y-2 font-mono text-xs">
                <div className="flex justify-between">
                  <span className="text-text-muted">Period</span>
                  <span className="text-text-secondary">{PERSONAL.education.period}</span>
                </div>
              </div>
            </div>

            {/* Currently Learning card — natural height, no flex-1 */}
            <div className="reveal reveal-delay-2 bg-surface border border-border rounded-xl p-6">
              <p className="font-mono text-[10px] text-text-muted uppercase tracking-widest mb-1">
                Currently Learning
              </p>
              <p className="text-[12px] text-text-muted italic mb-4">
                Focused on improving backend fundamentals and production readiness
              </p>
              <ul className="space-y-2.5" role="list">
                {currentlyLearning.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-[13px] text-text-secondary leading-relaxed"
                  >
                    <span className="w-1 h-1 rounded-full bg-success shrink-0 avail-dot mt-1.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

