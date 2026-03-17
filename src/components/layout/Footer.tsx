import { PERSONAL } from "@/lib/data";
import { IconGithub, IconLinkedin, IconEmail } from "@/components/ui/Icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface" role="contentinfo">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="font-mono text-xs text-text-muted">
              © {year} {PERSONAL.name} · Java Backend Developer
            </p>
            {/* <p className="font-mono text-xs text-text-muted mt-1">
              Built with Next.js, TypeScript & Tailwind CSS
            </p> */}
          </div>
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-text-primary transition-colors"
              aria-label="GitHub profile"
            >
              <IconGithub size={18} />
            </a>
            <a
              href={PERSONAL.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-text-primary transition-colors"
              aria-label="LinkedIn profile"
            >
              <IconLinkedin size={18} />
            </a>
            <a
              href={`mailto:${PERSONAL.email}`}
              className="text-text-muted hover:text-text-primary transition-colors"
              aria-label="Send email"
            >
              <IconEmail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
