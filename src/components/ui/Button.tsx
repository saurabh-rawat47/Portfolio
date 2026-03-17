import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  external?: boolean;
  download?: boolean;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  ariaLabel?: string;
}

const variants = {
  primary:
    "bg-accent text-white hover:bg-accent-hover border border-accent hover:border-accent-hover shadow-sm",
  outline:
    "bg-transparent text-text-primary border border-border hover:border-border-light hover:bg-surface-2",
  ghost:
    "bg-transparent text-text-secondary hover:text-text-primary hover:bg-surface-2 border border-transparent",
};

const sizes = {
  sm: "text-sm px-4 py-2 gap-1.5",
  md: "text-sm px-5 py-2.5 gap-2",
  lg: "text-base px-6 py-3 gap-2.5",
};

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  external = false,
  download = false,
  className = "",
  type = "button",
  disabled = false,
  ariaLabel,
}: ButtonProps) {
  const base = `inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    if (download) {
      return (
        <a
          href={href}
          download
          className={base}
          aria-label={ariaLabel}
        >
          {children}
        </a>
      );
    }
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={base}
          aria-label={ariaLabel}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={base} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={base}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
