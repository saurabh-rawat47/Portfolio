import { PERSONAL } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { IconDownload, IconFileText, IconExternalLink } from "@/components/ui/Icons";

const resumeHighlights = [
  { label: "Format", value: "ATS-Optimised PDF" },
  { label: "Updated", value: "2026" },
  { label: "Pages", value: "1 Page" },
  { label: "Focus", value: "Java Backend" },
];

export default function Resume() {
  return (
    <section
      id="resume"
      aria-labelledby="resume-heading"
      className="section-padding bg-surface border-t border-border"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal">
          <SectionHeader
            eyebrow="Resume"
            title="Download My"
            highlight="Resume"
            align="center"
          />
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="reveal bg-background border border-border rounded-2xl overflow-hidden glow-blue">
            {/* Top gradient bar */}
            <div className="h-1 bg-gradient-to-r from-accent via-blue-400 to-violet-500" />

            <div className="p-8 sm:p-10">
              {/* Icon + title */}
              <div className="flex flex-col items-center text-center mb-8">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-4">
                  <IconFileText size={28} className="text-accent" />
                </div>
                <h3
                  className="font-display text-2xl font-bold text-text-primary mb-1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {PERSONAL.name}
                </h3>
                <p className="text-text-secondary text-sm">{PERSONAL.title}</p>
              </div>

              {/* Meta grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                {resumeHighlights.map(({ label, value }) => (
                  <div
                    key={label}
                    className="bg-surface rounded-lg p-3 text-center border border-border"
                  >
                    <p className="font-mono text-[10px] text-text-muted uppercase tracking-widest mb-1">
                      {label}
                    </p>
                    <p className="text-text-secondary text-xs font-semibold">{value}</p>
                  </div>
                ))}
              </div>

              {/* Content summary */}
              <div className="bg-surface rounded-xl p-5 border border-border mb-8">
                <p className="font-mono text-[10px] text-text-muted uppercase tracking-widest mb-3">
                  Resume Covers
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    "Java & Spring Boot Projects",
                    "REST API Development",
                    "Spring Security & Authentication",
                    "MongoDB & MySQL Databases",
                    "Git & Version Control",
                    "Education & CGPA",
                    "Core Technical Skills",
                    "Project Architecture Details",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-[12px] text-text-secondary"
                    >
                      <span className="w-1 h-1 rounded-full bg-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  href={PERSONAL.resumeUrl}
                  download
                  variant="primary"
                  size="lg"
                  className="flex-1 justify-center"
                  ariaLabel={`Download ${PERSONAL.name}'s resume`}
                >
                  <IconDownload size={18} />
                  Download Resume
                </Button>
                <Button
                  href={PERSONAL.resumeUrl}
                  external
                  variant="outline"
                  size="lg"
                  className="flex-1 justify-center"
                  ariaLabel="View resume in browser"
                >
                  <IconExternalLink size={15} />
                  View in Browser
                </Button>
              </div>

              <p className="text-center font-mono text-[10px] text-text-muted mt-4">
                PDF · ATS-compatible 
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
