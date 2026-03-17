import { PERSONAL } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import {
  IconGraduationCap,
  IconMapPin,
  IconCheck,
} from "@/components/ui/Icons";

const highlights = [
  "REST API development with Spring Boot",
  "Layered MVC architecture (Controller / Service / Repository)",
  "MongoDB and MySQL database integration",
  "User authentication with Spring Security",
  "Version control with Git and GitHub",
  "API testing and validation with Postman",
];

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="section-padding bg-surface border-t border-border"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal">
          <SectionHeader
            eyebrow="About Me"
            title="Backend-Focused"
            highlight="Engineer"
            description="Computer Science graduate with a practical focus on Java backend development, REST API design, and database integration."
          />
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">
          {/* Bio text — 3 columns */}
          <div className="lg:col-span-3 space-y-5">
            {PERSONAL.about.map((para, i) => (
              <p
                key={i}
                className={`reveal reveal-delay-${i + 1} text-text-secondary leading-relaxed text-[15px]`}
              >
                {para}
              </p>
            ))}

            {/* Core competencies */}
            <div className="reveal reveal-delay-3 pt-2">
              <h3 className="font-mono text-xs text-text-muted uppercase tracking-widest mb-4">
                Core Competencies
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5" role="list">
                {highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-[13px] text-text-secondary"
                  >
                    <IconCheck
                      size={13}
                      className="text-accent shrink-0 mt-0.5"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar cards — 2 columns */}
          <div className="lg:col-span-2 space-y-4">
            {/* Education card */}
            <div className="reveal reveal-delay-2 bg-background border border-border rounded-xl p-5 glow-blue">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-1.5 rounded-md bg-accent/10">
                  <IconGraduationCap size={16} className="text-accent" />
                </div>
                <span className="font-mono text-xs text-text-muted uppercase tracking-widest">
                  Education
                </span>
              </div>
              <p className="text-text-primary text-sm font-semibold leading-snug mb-1">
                {PERSONAL.education.degree}
              </p>
              <p className="text-text-secondary text-[13px] mb-3">
                {PERSONAL.education.institution}
              </p>
              <div className="flex items-center justify-between text-xs font-mono text-text-muted border-t border-border pt-3">
                <span>{PERSONAL.education.period}</span>
                <span className="text-accent">CGPA: {PERSONAL.education.cgpa}</span>
              </div>
            </div>

            {/* Location / Status card */}
            <div className="reveal reveal-delay-3 bg-background border border-border rounded-xl p-5">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-1.5 rounded-md bg-success/10">
                  <span className="block w-3 h-3 rounded-full bg-success avail-dot" />
                </div>
                <span className="font-mono text-xs text-text-muted uppercase tracking-widest">
                  Status
                </span>
              </div>
              <div className="space-y-2.5">
                <div className="flex items-center gap-2 text-[13px] text-text-secondary">
                  <IconMapPin size={13} className="text-text-muted shrink-0" />
                  {PERSONAL.location} · Open to Remote
                </div>
                <div className="flex items-center gap-2 text-[13px] text-success">
                  <span className="w-1.5 h-1.5 rounded-full bg-success avail-dot" />
                  {PERSONAL.availability}
                </div>
              </div>
            </div>

            {/* Quick stats */}
            <div className="reveal reveal-delay-4 bg-background border border-border rounded-xl p-5">
              <span className="font-mono text-xs text-text-muted uppercase tracking-widest block mb-4">
                Quick Stats
              </span>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Projects", value: "2" },
                  { label: "Technologies", value: "10+" },
                  { label: "Grad Year", value: "2025" },
                  { label: "Focus", value: "Backend" },
                ].map(({ label, value }) => (
                  <div
                    key={label}
                    className="bg-surface rounded-lg p-3 text-center"
                  >
                    <p className="font-display text-xl font-bold text-accent">
                      {value}
                    </p>
                    <p className="font-mono text-[10px] text-text-muted mt-0.5">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
