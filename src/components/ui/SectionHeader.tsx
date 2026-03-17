interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  eyebrow,
  title,
  highlight,
  description,
  align = "left",
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div className={`mb-12 ${isCenter ? "text-center" : ""}`}>
      <div
        className={`inline-flex items-center gap-2 mb-4 ${isCenter ? "justify-center" : ""}`}
      >
        <span className="w-4 h-px bg-accent" />
        <span className="font-mono text-xs text-accent tracking-widest uppercase">
          {eyebrow}
        </span>
        <span className="w-4 h-px bg-accent" />
      </div>
      <h2
        className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-4"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {title}{" "}
        {highlight && (
          <span className="gradient-text">{highlight}</span>
        )}
      </h2>
      {description && (
        <p
          className={`text-text-secondary text-base leading-relaxed max-w-2xl ${
            isCenter ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
